import RoadmapModel from './roadmap.model.js';
import {
  buttonStyles,
  mainNodeStyles,
  roadmapBlockStyles,
  subNodeListStyles,
  subNodeStyles,
} from './roadmap.styles.js';

/** @returns {Schema} */
const createSubNode = (node) => ({
  tag: 'li',
  text: node.text,
  styles: subNodeStyles,
});

/** @returns {Schema} */
const createSubNodeList = (nodes) => ({
  tag: 'ul',
  styles: subNodeListStyles,
  children: nodes.map(createSubNode),
});

/** @returns {Schema} */
const createMainNode = (node) => ({
  tag: 'div',
  text: node.text,
  styles: mainNodeStyles,
});

/** @returns {Schema} */
const createRoadmapBlock = (node) => ({
  tag: 'div',
  styles: roadmapBlockStyles,
  children: [
    createSubNodeList(node.leftChildren),
    createMainNode(node),
    createSubNodeList(node.rightChildren),
  ],
});

/** @type {Schema<RoadmapModel>} */
export default {
  tag: 'div',
  model: new RoadmapModel(),
  children: [
    {
      tag: 'div',
      styles: { textAlign: 'center' },
      children: [
        {
          tag: 'button',
          text: 'Load roadmap!',
          styles: buttonStyles,
          events: {
            click() {
              this.model.load();
            },
          },
        },
      ],
    },
    (state) => state.roadmap.map(createRoadmapBlock),
  ],
};
