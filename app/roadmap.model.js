/** @implements {Model} */
export default class RoadmapModel {
  
  state = { roadmap: [] };

  async load() {
    this.state.roadmap = [
      // @ts-ignore
      {
        mainNode: 'Internet',
        left: ['What', 'Where'],
        right: ['Why'],
        // subNodes: ['What', 'Where', 'Why'],
      },
      // @ts-ignore
      {
        mainNode: 'Internet',
        left: ['What', 'Where', 'Why'],
        right: ['What 2', 'Where 3', 'Why4'],
      },
    ];
  }
}
