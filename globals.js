'use strict';

const currentUrl = window.location.href;
const url = currentUrl.slice(
  0, (currentUrl.indexOf('com') + 3)
);

const setLocalStorage = (name, data) => {
  window.localStorage.setItem(name, JSON.stringify(data));
};

const getLocalStorage = (name) => {
  return JSON.parse(window.localStorage.getItem(name))
}

const storage = {
  'get': (name) => getLocalStorage(name),
  'set': (name, data) => setLocalStorage(name, data)
}

const serviceItems = {
  "cloudformation": {title: "CloudFormation", link: `${url}/cloudformation` },
  "cloudfront": {title: "CloudFront", link: `${url}/cloudfront` },
  "cloudwatch": { title: "Cloudwatch", link: `${url}/cloudwatch` },
  "cognito": { title: "Cognito", link: `${url}/cognito` },
  "dynamodb": { title: "Dynamodb", link: `${url}/dynamodb` },
  "ec2": { title: "EC2", link: `${url}/ec2` },
  "ecs": { title: "ECS", link: `${url}/ecs` },
  "iam": { title: "IAM", link: `${url}/iam` },
  "lambda": { title: "Lambda", link: `${url}/lambda` },
  "rds": { title: "RDS", link: `${url}/rds` },
  "route53": { title: "Route53", link: `${url}/route53` },
  "s3": { title: "S3", link: `${url}/s3` },
  "vpc": { title: "VPC", link: `${url}/vpc` },
  "systems-manager": { title: "Systems Manager", link: `${url}/systems-manager` },
}

globalThis.serviceItems = serviceItems;
globalThis.storage = storage;
