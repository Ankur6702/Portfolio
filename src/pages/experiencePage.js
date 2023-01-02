import React from "react";
import styled from "styled-components";
import { MainLayout } from '../styles/Layout';
import Title from '../components/Title';
import design from './../images/design.svg';
import cp from './../images/cp.svg';
import ExperienceCard from '../components/ExperienceCard';

function ExperiencePage() {
  return (
    <MainLayout>
      <ExperienceContentStyled>
        <Title title={'Experience'} span={'Experience'} />
        <div className="experiences">
          <ExperienceCard
            image={design}
            title={'Google DSC Lead at IIIT Kota'}
            paragraph={'Serving as Google DSC Lead for the session 2022-2023 at Indian Institute of Information Technology Kota.'}
          />
          <div className="mid-card">
            <ExperienceCard
              image={cp}
              title={'Software Development Intern at ToolBox'}
              paragraph={'I was responsible for managing the backend engine of the product. My duties included integrating various customer relationship management systems, such as Zoho, Freshsales, and Hubspot, as well as learning and implementing the WhatsApp API GupShup and Dialog 360 API. I also gained experience working with Leadsquared CRM API and introduced some features of it in the product. I gained proficiency in using NodeJs for job scheduling and efficiently handling complex rule engines at high data volumes. Additionally, I worked on automating the product to store data in Google Sheets. Throughout my internship, I was also involved in infrastructure and code improvement initiatives and learned best practices for debugging and maintaining code in a production environment. Under the guidance of my mentor, I also developed important soft skills such as hard work, workload management, and leadership.'}
            />
          </div>
          <ExperienceCard
            image={design}
            title={'Webmaster at IIIT Kota'}
            paragraph={'As the webmaster for the official IIIT Kota website, I am responsible for handling a range of responsibilities related to web design and development. This includes tasks such as content maintenance, updates to ensure that the website aligns with the goals and objectives of the organization, and the implementation of new features and bug fixes to improve the user experience. In addition to my technical responsibilities, I also lead the web team, which is responsible for managing and maintaining the official website.'}
          />
          <ExperienceCard
            image={design}
            title={'Full Stack Developer at e-LDA Lab IIIT Kota'}
            paragraph={'I worked on the official eLDA website of IIIT Kota, handling both the frontend and backend development. My responsibilities included implementing new features and functionality using React and NodeJS, as well as troubleshooting and fixing server-side issues. Through my efforts, I was able to significantly improve the user experience and stability of the website.'}
          />
          <div className="mid-card">
            <ExperienceCard
              image={cp}
              title={'Executive Member at IIITians Network'}
              paragraph={'IIITians Network is an autonomous community of students from all the Indian Institute of Information Technology. Its prime aim is to provide a platform for the exchange of information and resources between IIITians.'}
            />
          </div>
          {/* <ExperienceCard
                        image={design}
                        title={''}
                        paragraph={''}
                    /> */}
        </div>
      </ExperienceContentStyled>
    </MainLayout>
  );
}

const ExperienceContentStyled = styled.section`
    @media screen and (max-width: 600px) {
        margin-top: -2rem;
    }
    .experiences{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1500px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default ExperiencePage;