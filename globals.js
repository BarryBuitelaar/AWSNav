'use strict';

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
  "cloudformation": {title: "CloudFormation", link: `cloudformation` },
  "cloudfront": {title: "CloudFront", link: `cloudfront` },
  "cloudwatch": { title: "Cloudwatch", link: `cloudwatch` },
  "cognito": { title: "Cognito", link: `cognito` },
  "dynamodb": { title: "Dynamodb", link: `dynamodb` },
  "ec2": { title: "EC2", link: `ec2` },
  "ecs": { title: "ECS", link: `ecs` },
  "iam": { title: "IAM", link: `iam` },
  "lambda": { title: "Lambda", link: `lambda` },
  "rds": { title: "RDS", link: `rds` },
  "route53": { title: "Route53", link: `route53` },
  "s3": { title: "S3", link: `s3` },
  "vpc": { title: "VPC", link: `vpc` },
  "switchrole": { title: "SwitchRole", link: `https://signin.aws.amazon.com/switchrole` },
  "systems-manager": { title: "Systems Manager", link: `systems-manager` },
}

globalThis.serviceItems = serviceItems;
globalThis.storage = storage;
