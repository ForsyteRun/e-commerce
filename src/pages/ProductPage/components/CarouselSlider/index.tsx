import { useState } from 'react';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { IconButton, MobileStepper } from '@mui/material';
import styles from './CarouselSlider.module.scss';
import { ICarouselSliderProps } from './types';
import { buttonStyles, mobileStepperStyles } from './helpers';

const CarouselSlider = ({ images, name }: ICarouselSliderProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep: number) => prevActiveStep - 1);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={images[activeStep]} alt={name} className={styles.image} />
        </div>
      </div>
      <MobileStepper
        variant="dots"
        steps={images.length}
        position="static"
        activeStep={activeStep}
        sx={mobileStepperStyles}
        nextButton={
          <IconButton
            size="small"
            onClick={handleNext}
            disabled={activeStep === images.length - 1}
            sx={buttonStyles}
          >
            <KeyboardArrowRight />
          </IconButton>
        }
        backButton={
          <IconButton
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={buttonStyles}
          >
            <KeyboardArrowLeft />
          </IconButton>
        }
      />
    </>
  );
};

export default CarouselSlider;
