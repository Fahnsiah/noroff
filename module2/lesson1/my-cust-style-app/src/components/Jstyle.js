import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: top;
  height: 100vh;
  background-color: antiquewhite;
`;

const Text = styled.p`
  font-size: 2.5rem;
  color: #333;
`;
const Jstyle = () => {
  return (
    <div>
      <Container>
        <Text>Example of CSS-IN-JS Styling</Text>
      </Container>
    </div>
  );
};

export default Jstyle;
