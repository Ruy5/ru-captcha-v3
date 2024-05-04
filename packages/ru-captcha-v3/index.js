import SlideVerify from "@ru-captcha-v3/SlideVerify"

const components = [
    SlideVerify
]

export default  {
    install: (app) => {
        components.forEach(component => {
            app.component(component.__name, component)
        });
    }
}