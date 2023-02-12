import RoadmapModel from "./roadmap.model.js";

/* Color Theme Swatches in Hex */
export const colors = {
  blue: "#5C82F2",
  liteBlue: "#3F59A6",
  darkBlue: "#324373",
  brown: "#594520",
  grey: "#373740",
  white: "#fefefe",
  black: "#0D0D0D",
};

const itemStyle = (backColor) => ({
  backgroundColor: backColor,
  listStyle: "none",
  padding: "10px",
  borderRadius: "8px",
  minWidth: "200px",
  margin: "20px",
  color: colors.white,
});

const nodeStyles = (backColor) => ({
  backgroundColor: backColor,
  padding: "10px 20px",
  borderRadius: "8px",
  color: colors.white,
});

/** @type {(color: string) => (text: string) => Schema} */
const createItemNode = (color) => (text) => ({
  tag: "li",
  text: text,
  styles: itemStyle(color),
});

/** @type {(color: string) => (text: string) => Schema} */
const createNode = (color) => (text) => ({
  tag: "div",
  text: text,
  styles: nodeStyles(color),
});

const createSubNode = createItemNode(colors.liteBlue);

const createMainNode = createNode(colors.blue);

const rowStyles = {
  marginTop: "100px",
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  gap: "200px",
};

/** @type {(left: string[]) => Schema} */
const createlistNode = (left) => ({
  tag: "ul",
  styles: { boxSizing: "border-box" },
  children: left.map(createSubNode),
});

/** @type {(mainNode: string) => Schema} */
const createMainColumn = (mainNode) => ({
  tag: "div",
  styles: {
    fontSize: "35px",
  },
  children: [createMainNode(mainNode)],
});

/** @type {(mainNode: string[]) => Schema} */
const wrapListNode = (left) => ({
  tag: "div",
  children: [createlistNode(left)],
});

/** @returns {Schema} */
const createRow = ({ mainNode, left, right }) => ({
  tag: "div",
  styles: rowStyles,
  children: [
    wrapListNode(left),
    createMainColumn(mainNode),
    wrapListNode(right),
  ],
});

const buttonStyles = {
  padding: "10px",
  marginTop: "50px",
  borderRadius: "8px",
  background: colors.darkBlue,
  color: colors.white,
};

/** @type {Schema} */
export default {
  tag: "div",
  model: new RoadmapModel(),
  children: [
    {
      tag: "button",
      text: "Load roadmap!",
      styles: buttonStyles,
      events: {
        click() {
          this.model.load();
        },
      },
    },
    (state) => state.roadmap.map(createRow),
  ],
};
