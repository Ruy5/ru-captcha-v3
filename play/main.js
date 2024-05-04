import { createApp } from "vue";
import App from "./App.vue";
import RuCaptcha from "ru-captcha-v3"

const app = createApp(App)
app.use(RuCaptcha)
app.mount("#app")