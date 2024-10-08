import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import { Amplify } from "aws-amplify";
import { awsconf } from "./lib/aws-exports";
import { createPinia } from "pinia";

Amplify.configure(awsconf);

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount("#app");
