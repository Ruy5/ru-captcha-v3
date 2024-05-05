import RuSlideVerify from "@ru-captcha-v3/slideverify/src/RuSlideVerify.vue"

const components = [
    RuSlideVerify
]

export default  {
    install: (app) => {
        components.forEach(component => {
            console.log(component)
            app.component(component.name, component)
        });
    }
}