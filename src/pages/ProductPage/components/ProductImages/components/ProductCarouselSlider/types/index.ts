export interface IProductCarouselSliderProps {
  images: string[];
  name: string;
  handleOpen: (step: number) => void;
}

export enum SlideDirection {
  Left = 'left',
  Right = 'right',
}
