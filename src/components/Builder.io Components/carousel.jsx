import { BuilderBlocks } from "@builder.io/react";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Stepper from "@mui/material/Stepper";
import { useState } from "react";

function Carousel(props) {
  const [activeStep, setActiveStep] = useState(props.defaultSlideIndex ?? 0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Stepper steps={props.steps?.length} activeStep={activeStep}>
      <Button
        onClick={handleBack}
        disabled={activeStep === 0}
        sx={{
          position: "absolute",
          left: -30,
          zIndex: 1,
          width: 40,
          minWidth: 20,
        }}
      >
        <KeyboardArrowLeft />
      </Button>
      {props.steps?.map(
        (step, index) =>
          activeStep === index && (
            <BuilderBlocks
              parentElementId={props.builderBlock.id}
              dataPath={`component.options.steps.${activeStep}.content`}
              blocks={step.content}
              style={{ height: "100%", width: "100%" }}
            />
          )
      )}
      <Button
        onClick={handleNext}
        disabled={activeStep === props.steps?.length - 1}
        sx={{
          position: "absolute",
          right: -30,
          zIndex: 1,
          width: 40,
          minWidth: 20,
        }}
      >
        <KeyboardArrowRight />
      </Button>
    </Stepper>
  );
}

export default Carousel;
