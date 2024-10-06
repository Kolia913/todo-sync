import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import { Amplify } from "aws-amplify";
import { awsconf } from "./lib/aws-exports";

Amplify.configure(awsconf);

createApp(App).mount("#app");
