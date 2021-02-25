# AWSNav

AWSNav is a simple chrome extension which adds a customisable navigation bar in the AWS console.

## Installation

Just drag and drop the AWSNav folder into your Google Chrome Extensions window.
```bash
chrome://extensions/
```

## Edit

If you want to add another item in the navigation bar just edit the code in `globals.js`


```javascript
const serviceItems = {
  "cloudwatch": { title: "Cloudwatch", link: `${url}/cloudwatch` },
  "cognito": { title: "Cognito", link: `${url}/cognito` },
  "dynamodb": { title: "Dynamodb", link: `${url}/dynamodb` },
  "ecs": { title: "ECS", link: `${url}/ecs` },
  "lambda": { title: "Lambda", link: `${url}/lambda` },
  "s3": { title: "S3", link: `${url}/s3` },
```
