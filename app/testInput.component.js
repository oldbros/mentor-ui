const defaultMessage = 'Initial text';

/** @type {Schema} */
export default {
  tag: 'div',
  model: {
    state: { text: defaultMessage },
  },
  children: [
    {
      tag: 'input',
      classes: 'my-input',
      attrs: {
        placeholder: 'Type here...',
      },
      events: {
        input() {
          const value = this.props.value;
          this.model.state.text = value || defaultMessage;
        },
      },
    },
    {
      tag: 'p',
      styles: {
        compute: (state) =>
          state.text.length > 5
            ? {
                color: 'green',
              }
            : { color: 'red' },
      },
      text: (state) => state.text,
    },
  ],
};
