import CarouselSlider from 'pages/ProductPage/components/CarouselSlider';
import { IModalCarouselSliderProps } from './types';

const ModalCarouselSlider = ({
  images,
  name,
  step,
}: IModalCarouselSliderProps) => {
  return <CarouselSlider images={images} name={name} initialStep={step} />;
};

export default ModalCarouselSlider;
