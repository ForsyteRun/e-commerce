export interface ICarouselSliderProps {
  images: string[];
  name: string;
  initialStep?: number;
  handleOpen?: (step: number) => void;
  isClickableImage?: boolean;
}

export enum SlideDirection {
  Left = 'left',
  Right = 'right',
}
