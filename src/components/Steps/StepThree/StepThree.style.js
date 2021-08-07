import styled from "styled-components";

export const StepThreeContainer = styled.div`
  margin-top: 12rem;

  section {
    color: #fff;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
    text-align: center;
    /* justify-content: center; */
  }
  button {
    background: black;
    color: #fff;
    margin-right: 1rem;
    width: 28%;
    padding: 1rem;
    font-weight: 500;
    border: 1px solid black;
    font-size: 1.2rem;
  }

  .selected {
    background: #fff;
    color: #000;
  }
`;
export const ImageDiv = styled.div`
  position: cover;
  top: -50%;
  left: -50%;
  /* width: 200%; */
  height: 200%;
  display: inline;

  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    min-width: 50%;
    min-height: 50%;
    z-index: -1;
    background-size: cover;
    background-attachment: fixed;
    filter: brightness(50%);
    /* height: 100vh; */
  }
`;