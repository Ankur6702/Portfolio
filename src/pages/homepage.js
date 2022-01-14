import React from "react";
import styled from "styled-components";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';
import ParticleJS from "../components/Particles";

function HomePage() {
    return (
        <HomePageStyled>
            <ParticleJS />
            <div className="typography">
                <h1>Hi, I'm <span>Ankur Agarwal</span></h1>
                <p>
                    Programming fascinates me and this is what I do most of the time. I enjoy learning new things and try to improve myself daily. Currently, I'm indulged in competitive programming and web development.
                </p>
                <div className="icons">
                    <a href="https://github.com/Ankur6702" target="_blank" rel="noreferrer noopener" className="icon">
                        <GitHubIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/ankur-agarwal-840927200/" target="_blank" rel="noreferrer noopener" className="icon">
                        <LinkedInIcon />
                    </a>
                    <a href="https://codeforces.com/profile/_Ankur_Agarwal" target="_blank" rel="noreferrer noopener" className="icon">
                        <CodeIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
            width: 100%;
            height: 100vh;
            position: relative;
            .typography{
                position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            width: 80%;
            .icons{
                display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all .4s ease-in-out;
            cursor: pointer;
            margin-right: 1rem;
            &:hover{
                border: 2px solid var(--primary-color);
            color: var(--primary-color);
                }
            svg{
                margin: .5rem;
                }
            }
        }
    }
            `;

export default HomePage;