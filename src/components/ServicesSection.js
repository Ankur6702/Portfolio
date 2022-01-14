import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layout';
import design from './../images/design.svg';
import cp from './../images/cp.svg';
import ServiceCard from './ServiceCard';
import Title from './Title';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'services'} />
                <div className="services">
                    <ServiceCard
                        image={design}
                        title={'MERN Stack Development'}
                        paragraph={'I can develop websites and web applications using the MERN stack which includes React, Node.js, Express, MongoDB, and more.'}
                    />
                    <div className="mid-card">
                        <ServiceCard
                            image={cp}
                            title={'Competitive Programming'}
                            paragraph={'I do competitive programming and can help to create new problems and solutions for many other programming questions.'}
                        />
                    </div>
                    <ServiceCard
                        image={design}
                        title={'Technical Presentations'}
                        paragraph={'I can prepare good presentations for technical events and can also deliver the same in a short period of time.'}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    @media screen and (max-width: 600px) {
        margin-top: -2rem;
    }
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;