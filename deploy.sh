#!/bin/bash

# Variables
STACK_NAME="TodoAppSyncStack"
TEMPLATE_FILE="cloudformation.yaml"  # CloudFormation template
REGION="us-east-1"             # AWS region
AMPLIFY_APP_ID="YOUR_AMPLIFY_APP_ID"  # Get this from the Amplify console

# Deploy the CloudFormation stack for AppSync and DynamoDB
echo "Deploying CloudFormation stack for AppSync and DynamoDB..."
aws cloudformation deploy \
  --template-file $TEMPLATE_FILE \
  --stack-name $STACK_NAME \
  --capabilities CAPABILITY_NAMED_IAM \
  --region $REGION

# Check if the CloudFormation stack was deployed successfully
if [ $? -eq 0 ]; then
  echo "CloudFormation stack deployed successfully."
else
  echo "CloudFormation deployment failed!"
  exit 1
fi

# Deploy the frontend app to Amplify
echo "Deploying frontend app to AWS Amplify..."

# Amplify deployment commands
# The assumption here is that your app is already initialized with Amplify CLI (`amplify init`)
# and configured for CI/CD.

# Use Amplify CLI to publish the app to Amplify Hosting
# Make sure you have Amplify CLI installed and configured before running this step.

amplify publish --appId $AMPLIFY_APP_ID --region $REGION

# Check if Amplify deployment was successful
if [ $? -eq 0 ]; then
  echo "Amplify app deployed successfully."
else
  echo "Amplify deployment failed!"
  exit 1
fi

echo "Deployment completed!"
