/** @type {Styles} */
const bodyStyles = {
  margin: 0,
  font: `14px 'Helvetica Neue', Helvetica, Arial, sans-serif`,
  fontWeight: '300',
};

/** @type {Schema} */
export default {
  tag: 'html',
  attrs: { lang: 'en' },
  children: [
    { path: '@site/head.component' },
    {
      tag: 'body',
      styles: bodyStyles,
      children: [
        { path: '@roadmap/roadmap.component' },
      ],
    },
  ],
};
