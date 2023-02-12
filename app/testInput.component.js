import { colors } from "./roadmap.component.js";

const defaultMessage = "Initial text";

const inputStyles = {
  marginTop: "50px",
  color: colors.black,
  padding: "10px",
  borderRadius: "8px",
};
/** @type {Schema} */
export default {
  tag: "div",
  model: {
    state: { text: defaultMessage },
  },
  children: [
    {
      tag: "input",
      classes: "my-input",
      styles: inputStyles,
      attrs: {
        placeholder: "Type here...",
      },
      events: {
        input() {
          const value = this.props.value;
          this.model.state.text = value || defaultMessage;
        },
      },
    },
    {
      tag: "p",
      styles: {
        compute: (state) =>
          state.text.length > 5
            ? {
                color: colors.white,
              }
            : { color: "red" },
      },
      text: (state) => state.text,
    },
  ],
};
