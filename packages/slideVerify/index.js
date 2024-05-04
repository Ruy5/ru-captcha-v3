import SlideVerify from "./src/slideVerify.vue";

SlideVerify.install = (app) => {
    app.component('RuSlideVerify', SlideVerify);
}

export default SlideVerify;