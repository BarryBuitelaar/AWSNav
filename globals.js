'use strict';

const currentUrl = window.location.href;

const url = currentUrl.slice(
  0, (currentUrl.indexOf('com') + 3)
);

const serviceItems = {
  "cloudformation": {title: "CloudFormation", link: `${url}/cloudformation` },
  "cloudfront": {title: "CloudFront", link: `${url}/cloudfront` },
  "cloudwatch": { title: "Cloudwatch", link: `${url}/cloudwatch` },
  "cognito": { title: "Cognito", link: `${url}/cognito` },
  "dynamodb": { title: "Dynamodb", link: `${url}/dynamodb` },
  "ec2": { title: "EC2", link: `${url}/ec2` },
  "ecs": { title: "ECS", link: `${url}/ecs` },
  "lambda": { title: "Lambda", link: `${url}/lambda` },
  "s3": { title: "S3", link: `${url}/s3` },
  "systems-manager": { title: "Systems Manager", link: `${url}/systems-manager` },
}

globalThis.serviceItems = serviceItems;