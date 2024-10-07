## Hosted App Link

https://main.d3ep9h6qo3xqzg.amplifyapp.com

## Create CloudFormation stack

`aws configure` - Setup aws CLI

`aws cloudformation create-stack \
  --stack-name TodoAppStack \
  --template-body file://cloudformation.yml \
  --capabilities CAPABILITY_NAMED_IAM` - create cloudformation stack

`aws cloudformation describe-stacks --stack-name cloudformation` - Check stack status

`aws cloudformation update-stack \
  --stack-name TodoAppStack \
  --template-body file://cloudformation.yml \
  --capabilities CAPABILITY_NAMED_IAM` - opdate stack(Optional)

## Amplify setup

`npm install -g @aws-amplify/cli@latest` - Install Amplify

`amplify configure` - Setup Amplify CLI

### ONLY If updated models or resolvers (to auto generate queries, mutations, subscriptions)

1. Delete all previously generated files, related to graphql (./src/graphql/\*\*, ./src/API.ts, ./grapghqlconfig.yml, schema.graphql, schema.json, schema.ts etc.)
2. `npx @aws-amplify/cli codegen add --apiId xkye5pltdff53mniqvcp5ydfem --region us-east-1`
3. `npx @aws-amplify/cli codegen`
4. `aws appsync get-introspection-schema --api-id xkye5pltdff53mniqvcp5ydfem --region us-east-1 --format SDL schema.graphql`
5. `npx @aws-amplify/cli codegen models \
--model-schema schema.graphql \
--target typescript \
--output-dir ./`
6. Happy hacking :)

## Deploy

`aws cloudformation deploy --template-file cloudformation.yml --stack-name TodoAppStack --capabilities CAPABILITY_NAMED_IAM` - deploy stack
