import React from 'react';
import {Main} from './styles';

const Navbar = ({children}) => {

    return(
        <Main>
            {children}
        </Main>
    )
}

export default Navbar;