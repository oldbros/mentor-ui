import RoadmapModel from "./roadmap.model.js";

/** @type {(color: string) => (text: string) => Schema} */
const createNode = (color) => (text) => ({ 
    tag: 'span',
    text: text,
    styles: { backgroundColor: color },
});

const createSubNode = createNode('lightgreen');

const createMainNode = createNode('red');

const columnStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
};

const rowStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
};

/** @type {(left: string[]) => Schema} */
const createColumn = (left) => ({
    tag: 'div',
    styles: columnStyles,
    children: left.map(createSubNode),
});

/** @type {(mainNode: string) => Schema} */
const createMainColumn = (mainNode) => ({
    tag: 'div',
    styles: columnStyles,
    children: [
        createMainNode(mainNode),
    ],
});

/** @returns {Schema} */
const createRow = ({ mainNode, left, right }) => ({
    tag: 'div',
    styles: rowStyles,
    children: [
        createColumn(left),
        createMainColumn(mainNode),
        createColumn(right),
    ],
});


/** @type {Schema} */
export default {
    tag: 'div',
    model: new RoadmapModel(),
    children: [
        {
            tag: 'button',
            text: 'Load roadmap!',
            events: {
                click() {
                    this.model.load();
                },
            },
        },
        (state) => state.roadmap.map(createRow),
    ],
}