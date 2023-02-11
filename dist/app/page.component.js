/** @type {Schema} */
export default {
  tag: 'html',
  attrs: { lang: 'en' },
  children: [
    { path: '@app/head.component' },
    {
      tag: 'body',
      styles: {
        fontFamily: 'Helvetica',
        textAlign: 'center',
      },
      children: [
        { path: '@app/roadmap.component' },
        { path: '@app/testInput.component' },
      ],
    },
  ],
};
