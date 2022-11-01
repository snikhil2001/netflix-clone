import React from "react";
import backgroundImage from "../assets/login.jpg";
import styled from "styled-components";

function BackgoundImage() {
  return (
    <Container>
      <img src={backgroundImage} alt="background" />
    </Container>
  );
}

export default BackgoundImage;
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  img {
    height: 100vh;
    width: 100vw;
  }
`;
