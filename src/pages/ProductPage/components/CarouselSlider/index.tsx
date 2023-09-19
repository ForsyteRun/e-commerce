import { useState } from 'react';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { IconButton, Button, MobileStepper } from '@mui/material';
import styles from './CarouselSlider.module.scss';
import { ICarouselSliderProps, SlideDirection } from './types';
import {
  buttonImageStyles,
  buttonStyles,
  mobileStepperStyles,
} from './helpers';
import { BACK_STEP, NEXT_STEP } from './constants';

const CarouselSlider = ({
  images,
  name,
  initialStep = 0,
  isClickableImage = true,
  handleOpen,
}: ICarouselSliderProps) => {
  const [activeStep, setActiveStep] = useState(initialStep);
  const [slideIn, setSlideIn] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<
    SlideDirection.Left | SlideDirection.Right
  >(SlideDirection.Right);

  const handleStep = (step: number) => {
    setIsAnimating(true);
    setActiveStep((prevActiveStep) => prevActiveStep + step);
    setSlideIn(true);
    setSlideDirection(
      step === NEXT_STEP ? SlideDirection.Right : SlideDirection.Left
    );
  };

  const handleAnimationEnd = () => {
    setSlideIn(false);
    setIsAnimating(false);
  };

  const handleClick = () => {
    if (handleOpen) {
      handleOpen(activeStep);
    }
  };

  const isNextButtonDisabled = activeStep === images.length - 1 || isAnimating;
  const isBackButtonDisabled = activeStep === 0 || isAnimating;

  const imageClasses = `${styles.image} ${
    slideIn ? styles[`slide-in-${slideDirection}`] : ''
  }`;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          {isClickableImage ? (
            <Button size="small" onClick={handleClick} sx={buttonImageStyles}>
              <img
                src={images[activeStep]}
                alt={name}
                className={imageClasses}
                onAnimationEnd={handleAnimationEnd}
              />
            </Button>
          ) : (
            <img
              src={images[activeStep]}
              alt={name}
              className={imageClasses}
              onAnimationEnd={handleAnimationEnd}
            />
          )}
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
            onClick={() => handleStep(NEXT_STEP)}
            disabled={isNextButtonDisabled}
            sx={buttonStyles}
          >
            <KeyboardArrowRight />
          </IconButton>
        }
        backButton={
          <IconButton
            size="small"
            onClick={() => handleStep(BACK_STEP)}
            disabled={isBackButtonDisabled}
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
