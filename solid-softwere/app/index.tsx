import { useState } from 'react';
import * as S from "./styles"

const HomePage =() => {

    const [backgroundColor, setBackgroundColor] =useState('#ccdfcc')

  return (
    <S.ScreenContainer backgroundColor={backgroundColor}>
        <S.GreetingText>Hello there</S.GreetingText>       
    </S.ScreenContainer>
  );
}

export default HomePage
