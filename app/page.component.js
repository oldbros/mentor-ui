import { colors } from "./roadmap.component.js";

const bodyStyles = {
  fontFamily: "Helvetica",
  textAlign: "center",
  background: colors.grey,
  padding: "0",
  margin: "-10px 0",
  boxSizing: "border-box",
  height: "160em",
};
/** @type {Schema} */
export default {
  tag: "html",
  attrs: { lang: "en" },

  children: [
    { path: "@app/head.component" },
    {
      tag: "body",
      styles: bodyStyles,
      children: [
        { path: "@app/roadmap.component" },
        { path: "@app/testInput.component" },
      ],
    },
  ],
};
