---
title: Netlify Functions - Weather
description: How to use Netlify functions to fected data from third party API
featuredImgURL: https://source.unsplash.com/featured/?space,mercury
featuredImgAlt: netlify functions weather API image
slug: netlify-functions
keywords: netlify, gatsby, serverless
---
## Setting Up Netlify Function to Fetch from API (with Netlify Dev)


Let’s set up a Netlify function to fetch data from a third party api and integrate it with your Gatsby site. We will start off by assuming that we have a running Gatsby site hosted on Netlify. We will set up a Netlify function to get the weather for the user’s location and display it on their site. 

First off, why are we even bothering using a serverless function for this? Can’t this all be done client side? It can, but it also exposes your API key to the public. It might seem like a big deal with a public API like openweather, but if you are doing this you can understand the benefit of not exposing secrets API keys, after all there is a reason that they are secret in the first place. 


Server side serverless Functions are also ideal if you want to write scripts with something other than javascript.  You can also use them to do more complex things like resize images or query a database. 

Netlify abstracts AWS Lambda for its functions, greatly simplifying setting up the endpoint and security access. Googlefu AWS documentation on AWS Lambda functions to get a better idea of the power that Lambda functions can give you. 


There are three main parts to this write up. One is setting up the function in Netlify and using the Netlify Dev environment to be able to develop and test the serverless function locally. The next step is setting up the serverless function in Node.js. Finally, once that is all set, we will bring in the data so that it can be used in our app.

### Setting Up Netlify to Develop and Test Locally

[Netlify Dev Docs](https://docs.netlify.com/cli/get-started/#installation)


**Create a netlify.toml file**

This file configures some stuff about our repository for netlify. Here's all you need for this to work:

**Netlify.toml**
```
[build]
  functions = "./functions"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200
```


All this is saying is: Hey Netlify, when you build my project, the functions are located in the "functions" directory. 
The redirect is just a preference so that we can hit the api in a cleaner way


**Install Netlify CLI**
```
npm i -g netlify-cli
```

**Install Netlify Lambda**
```
yarn add netlify-lambda
```

**Initialize the Netlify Project**

Make sure that you are back in the root directory of your project (not the functions folder). 

```
netlify init  (then follow the prompts to attach it to the current project)
```

Run Netlify Dev 
```
netlify dev
```
Running netlify dev command will do the following
	-Bundle and compile your code
	-Use the environmental variables that you have set in your Netlify account for this project
	- create a server which will give you at local endpoint to test your serverless function

	http://localhost:8888/api/weather   (you can also go to http://localhost:8888/.netlify/functions/weather but we did the redirect previously in the netlify.toml file)





### Making the serverless function


**Step 1**. Create functions folder and  package.json file

First, create this directory structure in your site root
```
/functions
  /subscribe 
    subscribe.js 
```

We need a package.json file for our functions folder. Navigate to that directory and run the command:

```
npm init
```

Having the package.json file here will let Netlify know what dependencies are needed when it builds the function. It will compile it separately from the rest of your front end code that gets compiled with the package.json on the root of your project. 

**Step 2**: Add package needed for serverless function

Install the dependencies that we need in our serverless function. For this project we will be calling for a third party API so we will need the node-fetch package. 

```
yarn add node-fetch
```

**Step 3**: Add your environmental variable to your Netlify site’s settings

This is the primary reason that we are using the serverless function in the first place, we want to protect our secrets. You will need to get an API key from OpenWeatherMap.org  [OpenWeatherMap](https://home.openweathermap.org/users/sign_up). Once you have your API key, go to your Netlify account for this site and add it to your Settings > Build & Deploy > Environment

More info  [Netlify Docs](https://docs.netlify.com/configure-builds/environment-variables/)

Also keep this keep in a local .env file (make sure to .gitignore it). Add the  WEATHER_API_KEY as well as NODE_ENV = "development" to the file. 

**Step 4**: Start Building the function



**functions/weather/weather.js**
```

exports.handler = async event => {
  const subject = event.queryStringParameters.name || 'World'
  return {
    statusCode: 200,
    body: `Hello ${subject}!`,
  }
}

```

After saving the code snippet above we should be able to start testing it locally right away. Start the netlify dev environment with the following command:

```
Netlify dev
```

This will compile and run the function and start a development server. You will not be able to test your function locally by going to localhost:8888/api/weather  (note that we redirected our function to this path earlier in the netlify.toml file that we created. The function can also be reached at  localhost:8888/.netlify/functions/weather)

You should see “Hello World” in your browser. If you amend the URL with localhost:8888/api/weather?name=Brenda  you should see “Hello Brenda” in your browser. 

We are up and running! Let’s  build out our function. The first thing that we want to do is try to find out where our user is so that we can serve them the appropriate weather for their location anywhere in the world. There are a few ways to do this but probably the least invasive way is to use their IP address for geolocation. But how do we get their IP? Thankfully we can get this from the header of the function event. We will then use  a geolocation service to help us find out where in the world they are. 

```
const fetch = require("node-fetch")

const WEATHER_API_KEY = process.env.WEATHER_API_KEY

// get the geolocation from the IP in the header
let getLocationFromIP = async userIP => {

  //hard code an IP for testing locally with netlify dev as the localhost ip won’t work
  if (process.env.NODE_ENV === "development") {
    userIP = "46.101.92.175"
  }

  const url = `http://ip-api.com/json/${userIP}`

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
    const data = await response.json()

    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: data.status, body: data.detail }
    }
    return {
      data,
    }
  } catch (err) {
    console.log(err)
  }
}

// Lambda event handler
exports.handler = async (event, context) => {

  const userIP = event.headers["client-ip"] 

  try {
    const location = await getLocationFromIP(userIP)

    return location
  } catch (err) {
    console.log(err)
  }
}


```

Test this by going to localhost:8888/api/weather (make sure netlify dev is running). You should see a JSON objects with location information for your hard coded ip address. 

Now let’s use this data to get the weather data. 

```
const fetch = require("node-fetch")

const WEATHER_API_KEY = process.env.WEATHER_API_KEY

// get the geolocation from the IP in the header
let getLocationFromIP = async userIP => {

 … 
}

// get the weather for the location
let getWeatherForLocation = async location => {
 
  const lat = location.data.lat 
  const lon = location.data.lon

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        "X-Api-Key": WEATHER_API_KEY,
        "Access-Control-Allow-Origin": "*",
      },
    })
    const data = await response.json()

    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: data.status, body: data.detail }
    }
    return {
      statusCode: 200,
      body: JSON.stringify({ msg: "success", detail: data }),
    }
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }),
    }
  }
}

exports.handler = async (event, context) => {
  const userIP = event.headers["client-ip"] 

  try {
    const location = await getLocationFromIP(userIP)

    const weather = await getWeatherForLocation(location)

    return weather
  } catch (err) {
    console.log(err)
  }
}

```

Now go back to localhost:8888/api/weather and you should see the JSON object with the local weather information ready to display in your app. 



### Displaying Data in Our App

Now that we are getting our weather data from our function, we need to display it in our app. Let’s create a component to display the data.


**src/components/weather.js**

```
import React, { useState, useEffect } from "react"
import axios from "axios"

const Err = ({ error }) => (
  <div>
    Error:{error.name} {error.message}
  </div>
)


const Weather = props => {

  const [isLoading, setIsLoading] = React.useState(false)
  const [isError, setIsError] = React.useState(false)
  const [data, setData] = useState(null)
  const [loaded, setLoaded] = useState(false)
  
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)
     
      try {
        const result = await axios(`/api/weather`)
        setData(result.data.detail)
        setLoaded(true)
      } catch (error) {
        console.log("error" + error)
        setIsError(true)
      }

      setIsLoading(false)
    }

    fetchData()
  }, [loaded])

  if (isLoading)
    return (
      <div>
        Waiting...
      </div>
    )
  if (isError) return <Err error={isError} />
  if (!data)
    return (
      <div></div>
    )

  return (
    <div>
      <h1>Today's Weather for {data.name} </h1>
     
      <p>{data.weather[0].main} </p>
      <p>{data.weather[0].description}</p>
      <p> {Math.round(data.main.temp)}ºC</p>
    </div>
  )
}

export default Weather


```


Import your weather.js component to a page and you are ready to display the weather data that you fetched using the serverless function API. Once you have the data coming in you can style however you want. 

To summarize, we have a component that loads into a page or another component and when it is loaded makes a call out to the serverless function. The function is able to get the originating IP from the event header. It then fetches location data from a geolocation api. When that data is retrieved, the object is parsed for the information needed by the weather API. The weather API is then fetched and the weather data is returned to the front-end client as a JSON object. That information can then be destructured and displayed on your app. 



### Resources for this Article

[Kent C Dodds - Super Simple Serverless](https://kentcdodds.com/blog/super-simple-start-to-serverless)

[Matt Gregg - Netlify Dev + Serverless Functions + Mailchimp Subscribe Form Tutorial](https://codegregg.com/blog/netlifyMailchimpFunction)




