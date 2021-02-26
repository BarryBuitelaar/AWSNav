'use strict';

const currentUrl = window.location.href;

const url = currentUrl.slice(
  0, (currentUrl.indexOf('com') + 3)
);

const serviceItems = {
  "cloudfront": {title: "CloudFront", link: `${url}/cloudformation`},
  "cloudwatch": { title: "Cloudwatch", link: `${url}/cloudwatch` },
  "cognito": { title: "Cognito", link: `${url}/cognito` },
  "dynamodb": { title: "Dynamodb", link: `${url}/dynamodb` },
  "ecs": { title: "ECS", link: `${url}/ecs` },
  "lambda": { title: "Lambda", link: `${url}/lambda` },
  "s3": { title: "S3", link: `${url}/s3` },
}

globalThis.serviceItems = serviceItems;