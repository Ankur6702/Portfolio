import React from 'react'
import styled from 'styled-components';
import programmer from './../images/programmer.svg';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={programmer} alt="Unable to load image" />
            </div>
            <div className="right-content">
                <h4>I am <span>Ankur Agarwal</span></h4>
                <p className="paragraph">
                    I am a self-taught developer with a passion for learning and problem solving. I'm deeply passionate about exploring new technologies and building things that solve problems. I believe in teamwork and always look forward to connect with other like-minded people.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Ankur Agarwal</p>
                        <p>: 19</p>
                        <p>: Indian </p>
                        <p>: Hindi, English </p>
                        <p>: India</p>
                        <p>: MERN Stack Developer</p>
                    </div>
                </div>
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
            img {
                width: 60% !important;
                height: 60% !important;
                margin-bottom: 2rem;
            }
        }
    }
    @media screen and (min-width:1200px) and (max-width:1400px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
            img {
                width: 60% !important;
                height: 60% !important;
                margin-bottom: 2rem;
            }
        }
    }
    .left-content{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center; 
        img{
            width: 80%;
            height: 50%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
