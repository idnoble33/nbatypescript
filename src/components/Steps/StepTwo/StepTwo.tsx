import * as React from "react";
import Box from "@material-ui/core/Box";
import Slider from "@material-ui/core/Slider";
import { MainDiv } from "./StepTwo.style";

// type Marks = {
//  value: string[]
// }
const marks = [
  { value: 2, label: "2 seats" },
  { value: 50, label: "5 seats" },
  { value: 100, label: "7 seats" },
];

const valueText = (value: number, index: number) => {
  return `${value}`
}
const valueLabelFormat = (value: number) => {
    return marks.findIndex((mark) => mark.value === value) + 1
}


const StepTwo: React.FC = () => {
  const [imageBg, setImageBg] = React.useState<number | number[]> (0)
  const handleChangeImg = (event: React.ChangeEvent<{}>, value: number | number[]) => {
    setImageBg(value)
  }
    return (
      <MainDiv>
        <Box>
          <Slider
            aria-label="restricted values"
            defaultValue={0}
            value={imageBg}
            valueLabelFormat={valueLabelFormat}
            getAriaValueText={valueText}
            step={null}
            valueLabelDisplay="auto"
            marks={marks}
            onChange={handleChangeImg}
          />
        </Box>
      </MainDiv>
     )
}
export default StepTwo


