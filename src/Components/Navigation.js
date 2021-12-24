import React from 'react';
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';
import logo from '../img/logo.svg';
import { Fade } from 'react-reveal';

function Navigation() {
    return (
        <Fade top>
            <NavigationStyled>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <ul>
                    <li>
                        <a href="">ホーム</a>
                    </li>
                    <li>
                        <a href="">特長</a>
                    </li>
                    <li>
                        <a href="">価格</a>
                    </li>
                </ul>
                <PrimaryButton name={'新規登録'} />
            </NavigationStyled>
        </Fade>
    )
}


const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    min-height: 10vh;
    align-items: center;

    ul{
        display: flex;
        justify-content: space-between;
        width: 40%;
    }
`;
export default Navigation
