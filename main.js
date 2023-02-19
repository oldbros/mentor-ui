/** @type {Schema} */
export default {
  namespaces: {
    '@site': 'app/site',
    '@roadmap': 'app/roadmap',
  },
  children: [
    { path: '@site/page.component' },
  ],
};
