import { colors } from '../shared/theme.styles.js';

/** @type {Styles} */
export const subNodeStyles = {
  padding: '15px',
  not: {
    arg: ':first-child',
    rule: { marginTop: '20px' },
  },
  minWidth: '200px',
  borderRadius: '8px',
  listStyle: 'none',
  color: colors.white,
  backgroundColor: colors.liteBlue,
};

/** @type {Styles} */
export const mainNodeStyles = {
  padding: '20px 40px',
  fontSize: '25px',
  borderRadius: '8px',
  color: colors.white,
  backgroundColor: colors.blue,
};

/** @type {Styles} */
export const subNodeListStyles = {
  margin: 0,
  padding: '0 40px',
};

/** @type {Styles} */
export const roadmapBlockStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  marginTop: '100px',
};

/** @type {Styles} */
export const buttonStyles = {
  padding: '10px',
  marginTop: '50px',
  borderRadius: '8px',
  fontSize: '14px',
  backgroundColor: colors.green,
  color: colors.white,
  transition: 'all 0.15s ease',
  cursor: 'pointer',
  border: 'none',
  boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.4)',
  hover: {
    backgroundColor: colors.darkGreen,
    boxShadow: '0 10px 8px 3px rgba(0, 0, 0, 0.3)',
  },
};
