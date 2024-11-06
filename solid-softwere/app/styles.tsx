import styled from "styled-components/native"

interface ScreenContainerProps {
    backgroundColor: string;
  }


export const ScreenContainer = styled.View<ScreenContainerProps>`
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  flex: 1;
`;

export const GreetingText = styled.Text`
  font-weight:bold;
  font-size: 20px;
`