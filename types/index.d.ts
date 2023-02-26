// Add your types here

interface RoadmapState {
  roadmap: RoadmapNode[];
}

interface RoadmapNode {
  text: string;
  type: string;
  leftChildren?: RoadmapNode[];
  rightChildren?: RoadmapNode[];
}
