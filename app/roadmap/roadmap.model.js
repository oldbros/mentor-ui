/** @implements {Model<RoadmapState>} */
export default class RoadmapModel {
  /** @type {RoadmapState} */
  state = {
    roadmap: [],
  };

  async load() {
    this.state.roadmap = [
      {
        text: 'Internet',
        type: 'main',
        leftChildren: [
          {
            text: 'Networks',
            type: 'sub',
          },
        ],
        rightChildren: [
          {
            text: 'Infrastructure',
            type: 'sub',
          },
        ],
      },
      {
        text: 'Software',
        type: 'main',
        leftChildren: [
          {
            text: 'Programming languages',
            type: 'sub',
          },
          {
            text: 'Frameworks',
            type: 'sub',
          },
          {
            text: 'Design patterns',
            type: 'sub',
          },
        ],
        rightChildren: [
          {
            text: 'Soft skills',
            type: 'sub',
          },
          {
            text: 'Hard skills',
            type: 'sub',
          },
        ],
      },
    ];
  }
}
