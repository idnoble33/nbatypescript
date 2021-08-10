import React, { useState } from "react";
import StepTwo from "../Steps/StepTwo/StepTwo";
import StepThree from "../Steps/StepThree/StepThree";
import { Button } from "@material-ui/core";

import { Div } from "./MultiStep.style";
// import StepTwo from "../Steps/StepTwo/StepTwo";

// type nameParameter = {
//   area: string;
//   stepIndex: number;
// };
const MultiStepForm: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [selectedTypicalDrive, setSelectedTypicalDrive] = useState<string[]>(
    []
  );

  const updateSelectedTypicalDrive = (area: string) => {
    const isFound = selectedTypicalDrive.find((x) => x === area);
    if (isFound) {
      setSelectedTypicalDrive([
        ...selectedTypicalDrive.filter((x) => x !== area),
      ]);
    } else {
      setSelectedTypicalDrive([...selectedTypicalDrive, area]);
    }
  };
  const getSteps = () => {
    return ["Family", "Fuel", "Category", "Animation"];
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const steps = getSteps();

  const getStepsContent = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return (
          <StepTwo />
          // updateSelection={updateSelectedTypicalDrive}
          // selectedTypicalDrive={selectedTypicalDrive}
          ///>
        );
      case 1:
        return (
          <StepThree
            updateSelection={updateSelectedTypicalDrive}
            selectedTypicalDrive={selectedTypicalDrive}
          />
        );
      //   case 2:
      //     return (
      //       <StepFour
      //         updateSelection={updateSelectedTypicalDrive}
      //         selectedTypicalDrive={selectedTypicalDrive}
      //       />
      //     );
      // case 3:
      //   return (
      //     <StepFive
      //       updateSelection={updateSelectedTypicalDrive}
      //       selectedTypicalDrive={selectedTypicalDrive}
      //     />
      //    )
      default:
        return "unknown Step";
    }
  };

  return (
    <Div className="stepBlock">
      {/* {activeStep < steps.length && ( */}

      <div className="stepWrapper">
        {steps.map((label, labelIndex) => (
          <div key={label} className="label">
            <div className="circle" onClick={() => setActiveStep(labelIndex)}>
              {labelIndex + 1}
            </div>
            <span>{label}</span>
          </div>
        ))}
      </div>
      {/* )} */}

      {activeStep === steps.length ? (
        "The step completed"
      ) : (
        // <Button>Finish</Button>
        <>
          {getStepsContent(activeStep)}
          <div className="button">
            <Button onClick={handleNext}>
              {activeStep === steps.length ? "Finish" : "Next"}
            </Button>
          </div>
        </>
      )}
    </Div>
  );
};

export default MultiStepForm;
