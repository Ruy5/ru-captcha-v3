import RuSlideVerify from "@ru-captcha-v3/slideverify/src/RuSlideVerify.vue"

const components = [
    RuSlideVerify
]

export default  {
    install: (app) => {
        components.forEach(component => {
            app.component(component.__name, component)
        });
    }
}