interface LandProps {
  tiles: Array<{
    type: string;
    id: string;
  }>;

  handleOpenBuildModal: () => any;
}

interface LandState {}

export { LandProps, LandState };
