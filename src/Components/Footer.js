import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import logo from '../img/logo.svg';

function Footer() {
    return (
        <FooterStyled>
            <InnerLayout>
                <div className="footer-con">
                    <div className="logo-con">
                        <div className="logo-items">
                            <img src={logo} alt="" />
                            <p>
                                Copyright @2021 LoremIpsum. <br />
                                All rights reserved.
                            </p>
                        </div>
                    </div>
                    <ul className="botton-nav">
                        <div className="links1">
                            <li>
                                <a href="#">チーム</a>
                            </li>
                            <li>
                                <a href="#">特長</a>
                            </li>
                            <li>
                                <a href="#">料金</a>
                            </li>
                        </div>
                        <div className="links2">
                            <li>
                                <a href="#">サービス</a>
                            </li>
                            <li>
                                <a href="#">プロジェクト</a>
                            </li>
                            <li>
                                <a href="#">アフィリエイト</a>
                            </li>
                        </div>
                        <div className="links3">
                            <li>
                                <a href="#">利用規約</a>
                            </li>
                            <li>
                                <a href="#">プライバシーポリシー</a>
                            </li>
                            <li>
                                <a href="#">お問い合わせ</a>
                            </li>
                        </div>
                    </ul>
                </div>
            </InnerLayout>
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
    padding: 0 18rem;
    background-color: #DCE2F0;
    @media screen and (max-width: 1347px){
        padding: 5rem 14rem;
    }
    @media screen and (max-width: 1186px){
        padding: 5rem 8rem;
    }
    @media screen and (max-width: 990px){
        padding: 5rem 4rem;
    }
    .footer-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .logo-con{
        display: flex;
        align-items: center;
        img{
            width: 90px;
        }
    }

    .botton-nav{
        display: flex;
        justify-content: space-between;
        li{
            padding: 2rem 0;
            color: #16194F;
        }
    }
`;

export default Footer
