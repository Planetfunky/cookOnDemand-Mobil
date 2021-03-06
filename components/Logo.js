import React from "react";
import styled from "styled-components";

const Logo = props => (
  <Container>
    <Image source={props.image} resizeMode="contain" />
    <Text>{props.text}</Text>
  </Container>
);

export default Logo;

const Container = styled.View`
  flex-direction: row;
  background: transparent;
  height: 60px;
  padding: 12px 16px 12px;
  border-radius: 30px;
  border: 1px solid #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  align-items: center;
  margin: 0 8px;
`;

const Image = styled.Image`
  width: 36px;
  height: 36px;
`;

const Text = styled.Text`
  color: #fff;
  font-weight: 600;
  font-size: 17px;
  margin-left: 8px;
`;
