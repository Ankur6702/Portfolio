import React from "react";
import styled from "styled-components";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import ParticleJS from "../components/Particles";

function AboutPage() {
    return (
        <AboutPageStyled>
            <ParticleJS />
            <div className="typography">
                <h1>Hi, I'm <span>Ankur Agarwal</span></h1>
                    <div className="icons">
                        <a href="https://twitter.com/_Ankur_Agarwal_" target="_blank" rel="noreferrer noopener" className="icon">
                            <TwitterIcon />
                        </a>
                        <a href="https://www.linkedin.com/in/ankur-agarwal-840927200/" target="_blank" rel="noreferrer noopener" className="icon">
                            <LinkedInIcon />
                        </a>
                        <a href="https://github.com/Ankur6702" target="_blank" rel="noreferrer noopener" className="icon">
                            <GitHubIcon />
                        </a>
                    </div>
                <br />
                <p style={{ textAlign: "center" }}>
                    {/* Programming fascinates me and this is what I do most of the time. I enjoy learning new things 
                    and try to improve myself daily. Currently, I'm indulged in competitive programming and web development. */}
                    As a MERN stack developer and Google DSC Lead at IIIT Kota, I am highly skilled in both technical
                    and leadership capabilities. I am dedicated to continuous self-improvement and am passionate about
                    competitive programming and web development. In addition to my professional pursuits, I am also an
                    avid musician and enjoy playing the piano in my free time. I believe in building and maintaining
                    strong professional relationships and am always seeking out new opportunities to connect with others
                    in my field.
                </p>
            </div>
        </AboutPageStyled>
    )
}

const AboutPageStyled = styled.header`
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
            .icon {
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                margin-right: 1rem;
                &:hover {
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                svg {
                    margin: .5rem;
                }
            }
        }
        p {
            height: 15rem;
            overflow: auto;
        }
        p::-webkit-scrollbar{
            width: 5px;
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
    }
`;

export default AboutPage;