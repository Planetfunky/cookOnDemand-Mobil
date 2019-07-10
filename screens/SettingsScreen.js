import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "react-native";

class SettingsScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <Text>Settings Screen</Text>
      </Container>
    );
  }
}

export default SettingsScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;
