import { useState } from 'react';
import * as S from "./styles"

const HomePage = () => {
    const [backgroundColor, setBackgroundColor] = useState('#ccdfcc')

    const GenerateRandomColor = () =>{
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        setBackgroundColor(`#${randomColor.padStart(6, '0')}`)
    }

    return (
        <S.ScreenContainer backgroundColor={backgroundColor} onPress={GenerateRandomColor}>
            <S.GreetingText>Hello there</S.GreetingText>
        </S.ScreenContainer>
    );
}

export default HomePage
