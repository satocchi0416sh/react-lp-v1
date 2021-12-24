import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import ChartStats from './ChartStats';
import chart from '../img/chart.svg';
import AnimatedButton from './AnimatedButton';
import { Bounce, Roll } from 'react-reveal';
import RubberBand from 'react-reveal/RubberBand';

function ChartSection() {
    return (
        <ChartStyled >
            <InnerLayout>
                <div className="chart-con">
                    <div className="chart-left">
                        <div className="stats">
                            <div className="stats-money">
                                <ChartStats name={'バランス'} amount={'25,000'} />
                                <ChartStats name={'最新の状態'} amount={'$100,000'} />
                            </div>
                            <img src={chart} alt="" />
                        </div>
                    </div>
                    <div className="chart-right">
                        <h2 className="secondary-heading">
                            まるでプロフェッショナルのように家計を管理
                        </h2>
                        <Roll right>
                            <p>
                                さきほど岡田さんが紹介しょうかいかたがたちょっとお話になった通りこの春何か講演をというご注文でありましたが、その当時は何か差支さしつかえがあって、――岡田さんの方が当人の私よりよくご記憶きおくと見えてあなたがたにご納得のできるようにただいまご説明がありましたが、とにかくひとまずお断りを致いたさなければならん事になりました。
                            </p>
                        </Roll>
                        <Bounce right>
                            <AnimatedButton name={'もっとみる'} />
                        </Bounce>
                    </div>
                </div>
            </InnerLayout>
        </ChartStyled >
    )
}

const ChartStyled = styled.section`
    .chart-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        @media screen and (max-width: 1347px){
            grid-template-columns: repeat(1, 1fr);
        }
        .chart-left{
            width: 80%;
            @media screen and (max-width: 1347px){
                width: 100%;
            }
            .stats{
                img{
                    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
                    border-radius: 62px;
                    width: 100%;
                }
                .stats-money{
                    display: flex;
                    padding-bottom: 1.3rem;
                    justify-content: space-between;
                }
            }
        }

        .chart-right{
            padding-left: 2rem;
            p{
                padding: 1.3rem 0;
            }
        }
    }
`;

export default ChartSection
