import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import lines from '../img/lines.svg';
import questions from '../questions';
import Question from './Question';
function FAQSection() {
    return (
        <FaqStyled>
            <InnerLayout>
                <h3 className="small-heading"><span>よくある</span>質問</h3>
                <p className="c-para">
                    しかしただお断りを致すのもあまり失礼と存じまして、この次には参りますからという条件をつけ加えておきました。その時念のためこの次はいつごろになりますかと岡田さんに伺うかがいましたら、此年ことしの十月だというお返事であったので、心のうちに春から十月までの日数を大体繰くってみて、それだけの時間があればそのうちにどうにかできるだろうと思ったものですから、よろしゅうございますとはっきりお受合うけあい申したのであります。
                </p>
                <div className="lines">
                    <img src={lines} alt="" />
                </div>

                <div className="questions-con">
                    {
                        questions.map((q) => {
                            return <Question key={q.id} {...q} />
                        })
                    }
                </div>

            </InnerLayout>
        </FaqStyled>
    )
}

const FaqStyled = styled.section`
    .c-para{
        width: 60%;
        margin: 0 auto;
    }
    .questions-con{
        padding-top: 4rem;
    }
    .lines{
        position: absolute;
        left: 0;
        top: 300%;
        width: 100%;
        z-index: -1;
        img{
            width: 100%;
        }
    }

`;

export default FAQSection;
