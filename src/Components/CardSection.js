import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import card from '../img/creditcard.svg';

function CardSection() {
    return (
        <CardSectionStyled>
            <InnerLayout>
                <div className="card-container">
                    <div className="card-left">
                        <h2 className="secondary-heading">
                            1枚のカードで全ての支払いを
                        </h2>
                        <p>
                            私は今日初めてこの学習院というものの中に這入はいりました。もっとも以前から学習院は多分この見当だろうぐらいに考えていたには相違そういありませんが、はっきりとは存じませんでした。中へ這入ったのは無論今日が初めてでございます。
                        </p>
                    </div>
                    <div className="card-right">
                        <img src={card} alt="" />
                    </div>
                </div>
            </InnerLayout>
        </CardSectionStyled>
    )
}

const CardSectionStyled = styled.section`
    .card-container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        @media screen and (max-width: 845px){
            grid-template-columns: repeat(1, 1fr);
        }
        .card-right{
            display: flex;
            justify-content: flex-end;
            img{filter: drop-shadow(0px 50px 100px rgba(22, 25, 79, 0.15));}
        }

        .card-left{
            p{
                padding: 1rem 0;
            }
        }
    }
`;

export default CardSection
