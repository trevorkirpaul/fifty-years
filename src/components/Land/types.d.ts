interface LandProps {
  tiles: Array<{
    type: string
    id: string,
  }>;

  handleBuild: () => any;
}

interface LandState {}

export { LandProps, LandState };
