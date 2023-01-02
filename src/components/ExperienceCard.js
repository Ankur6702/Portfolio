import React from 'react'
import styled from 'styled-components';

function ExperienceCard({ image, title, paragraph, period }) {
    return (
        <ExperienceCardStyled>
            <div className="container">
                <img src={image} alt="" />
                <span className='period'>
                    {period}
                </span>
                <h4>{title}</h4>
                <p>{paragraph}</p>
            </div>
        </ExperienceCardStyled>
    )
}

const ExperienceCardStyled = styled.div`
    background-color: var(--background-dark-grey);
    border-left: 1px solid var(--border-color);
    border-top: 8px solid var(--border-color);
    border-right: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    transition: all .4s ease-in-out;
    &:hover{
        border-top: 8px solid var(--primary-color);
        transform: translateY(3px);
    }
    .container{
        padding: 1.2rem;
        h4{
            color: var(--white-color);
            font-size: 1.5rem;
            padding: 1rem 0;
            position: relative;
            &::after{
                content: "";
                width: 4rem;
                background-color: var(--border-color);
                height: 3px;
                position: absolute;;
                left: 0;
                bottom: 0;
                border-radius: 10px;
            }
        }
        p{
            padding: .8rem 0;
            font-size: 1.1rem;
            height: 10rem;
            overflow: auto;
        }
        p::-webkit-scrollbar{
            width: 9px;
            background-color: #383838;
        }
        p::-webkit-scrollbar-thumb{
            border-radius: 10px;
            background-color: #6b6b6b;
        }
        p::-webkit-scrollbar-track{
            border-radius: 10px;
            background-color: #383838;
        }
        .period {
            font-size: 1rem;
            padding-bottom: .6rem;
            color: var(--primary-color);
            position: relative;
            left: 1rem;
            bottom: 1.5rem;
        }
        @media screen and (max-width:380px) {
            .period {
                font-size: 0.8rem;
            }
        }
    }
`;

export default ExperienceCard;