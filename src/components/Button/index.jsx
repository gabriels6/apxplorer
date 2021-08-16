import React from 'react';
import {Main,Control} from './styles';

const Button = ({onClick,children}) => {
    return(
        <Main>
            <Control onClick={onClick}>{children}</Control>
        </Main>
    );
}

export default Button;