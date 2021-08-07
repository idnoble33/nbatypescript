import React, { useState } from "react";
import { StepThreeContainer, ImageDiv } from "./StepThree.style";

type selectTagProps = {
  updateSelection: (area: string) => void;
  selectedTypicalDrive: string[];
};
type Ifuel ={
    value: string;
    img: string;
    alt: string;
}
const StepThree = ({
  updateSelection,
  selectedTypicalDrive,
}: selectTagProps) => {
  const fuelPriority: Ifuel[] = [
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
  const [lastSelectedArea, setLastSelectedArea] = useState<string | null>(null);

  const updatedSelectedArea = (area: Ifuel) => {
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
          {fuelPriority.map((fuel: Ifuel, fuelIndex) => (
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
