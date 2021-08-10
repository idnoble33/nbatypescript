import * as React from "react";
import Box from "@material-ui/core/Box";
import Slider from "@material-ui/core/Slider";
import { MainDiv } from "./StepTwo.style";
import { useState } from "react";

// type Marks = {
//  value: string[]
// }
const marks = [
  {
    value: 1,
    label: "2 seats",
    img: "images/twoSeaters.jpg",
    alt: "two seaters",
  },
  {
    value: 50,
    label: "5 seats",
    img: "images/fiveSeaters.jpg",
    alt: "five seaters",
  },
  {
    value: 100,
    label: "7 seats",
    img: "images/sevenSeaters.jpg",
    alt: "seven seaters",
  },
];
const imagURLs = marks.map((img, i) => `image URL ${img.img}`);
console.log(imagURLs)
const valueText = (value: number, index: number) => {
  return `${value}`;
};
const valueLabelFormat = (value: number) => {
  return marks.findIndex((mark) => mark.value === value) + 1;
};

const StepTwo: React.FC = () => {
  const [imageBg, setImageBg] = React.useState<number | number[]>(0);
  const [sliderInteracton, setSliderInteracton] = useState()
  const handleChangeImg = (
    event: React.ChangeEvent<{}>,
    value: number | number[]
  ) => {
    setImageBg(value);
  };
  return (
    <MainDiv>
      {/* <div className="check"> */}

      <Box>{imagURLs}</Box>
        <Slider
          aria-label="restricted values"
          defaultValue={0}
          value={imageBg}
          valueLabelFormat={valueLabelFormat}
          getAriaValueText={valueText}
          step={0}
          valueLabelDisplay="auto"
          marks={marks}
          onChange={handleChangeImg}
        />
      {/* </div> */}
    </MainDiv>
  );
};
export default StepTwo;
