import { openBlock as n, createElementBlock as t } from "vue";
const c = {
  __name: "RuSlideVerify",
  setup(e) {
    const o = () => {
      console.log("dark");
    };
    return (s, a) => (n(), t("button", { onClick: o }, "暗流"));
  }
}, r = [
  c
], _ = {
  install: (e) => {
    r.forEach((o) => {
      e.component(o.__name, o);
    });
  }
};
export {
  _ as default
};
