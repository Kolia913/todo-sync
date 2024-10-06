import type { ResourcesConfig } from "aws-amplify";

export const awsconf = {
  API: {
    GraphQL: {
      defaultAuthMode: "apiKey",
      endpoint: import.meta.env.VITE_API_ENDPOINT!,
      region: "us-east-1",
      apiKey: import.meta.env.VITE_API_KEY,
    },
  },
} satisfies ResourcesConfig;
