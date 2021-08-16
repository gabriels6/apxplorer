import React from 'react';
import {Main,Control} from './styles';

const Input = ({value,setValue,placeholder}) => {

    function handleContent(event){
        setValue(event.target.value);
    }

    return(
        <Main>
            <Control placeholder={placeholder} type={"text"} value={value} onChange={handleContent}/>
        </Main>
    );
}

export default Input;