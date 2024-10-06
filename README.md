## Create CloudFormation stack

`aws configure` - Setup aws CLI

`aws cloudformation create-stack \
  --stack-name TodoAppStack \
  --template-body file://cloudformation.yml \
  --capabilities CAPABILITY_NAMED_IAM` - create cloudformation stack
`aws cloudformation describe-stacks --stack-name TodoAppStack` - Check if stack created

`aws cloudformation update-stack \
  --stack-name TodoAppStack \
  --template-body file://cloudformation.yml \
  --capabilities CAPABILITY_NAMED_IAM` - opdate stack(Optional)

## Amplify setup

`npm install -g @aws-amplify/cli@latest` - Install Amplify

`amplify configure` - Setup Amplify CLI

`npx ampx sandbox` - to generate amplify_outputs.json
