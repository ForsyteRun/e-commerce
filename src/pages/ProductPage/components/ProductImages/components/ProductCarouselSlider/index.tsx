import CarouselSlider from 'pages/ProductPage/components/CarouselSlider';
import { IProductCarouselSliderProps } from './types';

const ProductCarouselSlider = ({
  images,
  name,
  handleOpen,
}: IProductCarouselSliderProps) => {
  return <CarouselSlider images={images} name={name} handleOpen={handleOpen} />;
};

export default ProductCarouselSlider;
