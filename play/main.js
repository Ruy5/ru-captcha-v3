import { createApp } from "vue";
import App from "./App.vue";
import SlideVerify from "@ru-captcha-v3/slideverify"

console.log(SlideVerify)

const app = createApp(App)
app.use(SlideVerify)
app.mount("#app")