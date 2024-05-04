import SlideVerify from "@ru-captcha-v3/SlideVerify"

const components = [
    SlideVerify
]

const install = (app) => {
    components.forEach(component => {
        app.component(component.name, component)
    });
}

export default {
    install
}