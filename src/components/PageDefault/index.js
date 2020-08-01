import React from 'react';
import styled from 'styled-components'

import Menu from '../menu/index'
import Footer from '../Footer'


const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex:1;
    padding-top:50px;
    margin-left:5%;
    margin-right:5%;
`;

function PageDefault ({ children }) {
    return (
        <>
            <Menu />
                <Main>
                    {children}
                </Main>
            <Footer />
        </>

    )
}
export default PageDefault;