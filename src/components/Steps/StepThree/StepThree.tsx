import React, { useState } from "react";
import { StepThreeContainer, ImageDiv } from "./StepThree.style";

type selectTagProps = {
  updateSelection: any;
  selectedTypicalDrive: string[];
};
const StepThree = ({
  updateSelection,
  selectedTypicalDrive,
}: selectTagProps) => {
  const fuelPriority = [
    {
      value: "Very important",
      img: "images/veryimportant.jpg",
      alt: "veryimportant-car-image",
    },
    {
      value: "Somewhat Important",
      img: "images/somewhatimportant.jpg",
      alt: "somewhatimportant-car-image",
    },
    {
      value: "Not Important",
      img: "images/notimportant.jpg",
      alt: "city-car-image",
    },
  ];
  const [lastSelectedArea, setLastSelectedArea] = useState(null);

  const updatedSelectedArea = (area: any) => {
    updateSelection(area.value);
    setLastSelectedArea(area.value);
  };
  return (
    <div>
      <StepThreeContainer className="StepThreeContainer">
        <div>
          <section>A fuel-efficient Vehicle is</section>
        </div>
        <div>
          {fuelPriority.map((fuel: any, fuelIndex) => (
            <ImageDiv key={fuelIndex}>
              <button
                onClick={() => updatedSelectedArea(fuel)}
                className={`${
                  selectedTypicalDrive.includes(fuel.value) ? "selected" : ""
                }`}
              >
                {fuel.value}
              </button>
              {fuel.value === lastSelectedArea &&
                selectedTypicalDrive.length > 0 && (
                  <img src={fuel.img} alt={fuel.alt} />
                )}
            </ImageDiv>
          ))}
        </div>
      </StepThreeContainer>
    </div>
  );
};

export default StepThree;
