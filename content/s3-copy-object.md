---
title: How to move an S3 object to another bucket using node.js
description: How to copy an object from s3 to s3
featuredImgURL: https://source.unsplash.com/featured/?space,alien
featuredImgAlt: copy s3 object
slug: move-s3-object
keywords: AWS Lambda S3 Node
---

Do you need to copy an object from one S3 bucket to another? use the copyObject API

```
var params = {
  Bucket: "destinationbucket", 
  CopySource: "/sourcebucket/sourceKeyName", 
  Key: "targetKeyName"
 };
 s3.copyObject(params, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(data);           // successful response
 });

```

If you are moving the object from one bucket to another but not making a new copy,
you will want to delete the original object. So you are not actually moving the object but rather making a copy of it in a new location and then deleting it form its original loation. 

```
const moveAndDeleteFile = async (file,inputfolder,targetfolder) => {
    const s3 = new AWS.S3();

    const copyparams = {
        Bucket : bucketname,
        CopySource: encodeURI(`/${sourceBucketName}/${file}`), 
        Key : targetfolder + "/" + file
    };

    await s3.copyObject(copyparams).promise();

    const deleteparams = {
        Bucket : bucketname,
        Key : inputfolder + "/" + file
    };

    await s3.deleteObject(deleteparams).promise();
    
}
```

