import React from "react"

const ContactForm = props => {
  return (
    <section id="contact">
      <div className="inner">
        <section>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            action="/thanks/"
          >
            {/* You still need to add the hidden input with the form name to your JSX form to work with netlify and gatsby*/}
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            <div className="flex flex-col mb-4">
              <label className="block uppercase tracking-wide text-sm">
                Name
                <input
                  className="w-full shadow-inner p-4 border-0 text-gray-700"
                  placeholder="Fred Flintstone"
                  type="text"
                  name="name"
                />
              </label>
            </div>

            <div className="flex flex-col mb-4">
              <label className="block uppercase tracking-wide text-sm">
                Email
                <input
                  className="w-full shadow-inner p-4 border-0 text-gray-700"
                  placeholder="fred@slateindustries.com"
                  type="email"
                  name="email"
                  required
                />
              </label>
            </div>

            <div className="flex flex-col mb-4">
              <label className="block uppercase tracking-wide text-sm">
                Message
                <textarea
                  className="w-full shadow-inner p-4 border-0 text-gray-700"
                  placeholder="Yabba Dabba Do"
                  type="text"
                  name="message"
                  required
                />
              </label>
            </div>

            <button
              className="flex flex-col mb-4 items-center w-full block bg-green-500 hover:bg-green-700 font-bold text-white py-2 px-4 rounded"
              type="submit"
            >
              Send
            </button>
          </form>
        </section>
      </div>
    </section>
  )
}

export default ContactForm
