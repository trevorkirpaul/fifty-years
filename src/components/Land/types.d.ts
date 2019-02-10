interface LandProps {
  tiles: Array<{
    type: string;
    id: string;
  }>;

  handleOpenBuildModal: (id: string) => any;
}

interface LandState {}

export { LandProps, LandState };
