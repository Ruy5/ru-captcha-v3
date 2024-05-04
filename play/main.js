import { createApp } from "vue";
import App from "./App.vue";
import RuSlideVerify from "@ru-captcha-v3/slideverify"

const app = createApp(App)
app.use(RuSlideVerify)
app.mount("#app")