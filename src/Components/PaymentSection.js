import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Card from './Card';
import card from '../img/creditcard.svg';
import active from '../img/active.svg';
import inactive from '../img/inactive.svg';
import check from '../img/check.svg';
import checkDisabled from '../img/check-disabled.svg';

function PaymentSection() {
    return (
        <PaymentStyled>
            <InnerLayout>
                <h3 className="small-heading">卓越したサービスを<span>お手頃な価格で</span></h3>
                <p className="c-para">まずは無料プランから始めて、成長するにつれてプレミアムに切り替え。</p>
                <div className="card-con">
                    <Card
                        account={'無料プラン'}
                        amount={'￥0'}
                        text={'まずは無料でお試し'}
                        button={'早速始める'}
                        card={card}
                        active={active}
                        inactive={inactive}
                        check={check}
                        checkDis={checkDisabled}
                        text1={'無料送金10回まで'}
                        text2={'月額25,000円まで無料ATM引き出し'}
                        text3={'他のドラフトアカウントに無料送金'}
                        text4={'プリペイドデビットカード'}
                        text5={'仮想カード'}
                        text6={'24/7 優先サポート'}
                        text7={'24の通貨に無料換金'}
                        text8={'マルチユーザーアクセス'}
                    />

                    <Card
                        account={'プレミアムプラン'}
                        amount={'￥1,000'}
                        text={'さらにサポートが手厚いプレミアムプラン'}
                        button={'早速始める'}
                        card={card}
                        active={active}
                        inactive={inactive}
                        check={check}
                        checkDis={checkDisabled}
                        text1={'無料送金10回まで'}
                        text2={'月額25,000円まで無料ATM引き出し'}
                        text3={'他のドラフトアカウントに無料送金'}
                        text4={'プリペイドデビットカード'}
                        text5={'仮想カード'}
                        text6={'24/7 優先サポート'}
                        text7={'24の通貨に無料換金'}
                        text8={'マルチユーザーアクセス'}
                    />
                </div>
            </InnerLayout>
        </PaymentStyled>
    )
}

const PaymentStyled = styled.section`
    .card-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 3rem;
        padding-top: 7.4rem;
        @media screen and (max-width: 689px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
    .c-para{
        text-align: center;
    }
`;
export default PaymentSection;
