import React from "react";
import styled from "styled-components";
import { MainLayout } from '../styles/Layout';
import Title from '../components/Title';
// @ts-ignore
import design from './../images/design.svg';
// @ts-ignore
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
            title={'Student Placement Coordinator at IIIT Kota'}
            paragraph={'Serving as Student Placement Coordinator for the session 2022-2023 at Indian Institute of Information Technology Kota.'}
            period={'Jan 2023 - Present'}
          />
          <ExperienceCard
            image={cp}
            title={'Microsoft Learn Student Ambassador'}
            paragraph={'Learn Student Ambassadors are a global group of campus leaders who are eager to help fellow students, create robust tech communities and develop technical and career skills for the future.'}
            period={'Jan 2023 - Present'}
          />
          <ExperienceCard
            image={design}
            title={'Google DSC Lead at IIIT Kota'}
            paragraph={'Serving as Google DSC Lead for the session 2022-2023 at Indian Institute of Information Technology Kota.'}
            period={'July 2022 - Present'}
          />
          <ExperienceCard
            image={cp}
            title={'Webmaster at IIIT Kota (Official Website)'}
            paragraph={'As the webmaster for the official IIIT Kota website, I am responsible for handling a range of responsibilities related to web design and development. This includes tasks such as content maintenance, updates to ensure that the website aligns with the goals and objectives of the organization, and the implementation of new features and bug fixes to improve the user experience. In addition to my technical responsibilities, I also lead the web team, which is responsible for managing and maintaining the official website.'}
            period={'Aug 2021 - Present'}
          />
          <ExperienceCard
            image={design}
            title={'Software Development Intern at ToolBox'}
            paragraph={'I was responsible for developing the backend engine of the product. My duties included integrating various customer relationship management systems, such as Zoho, Freshsales, and Hubspot, as well as learning and implementing the WhatsApp API GupShup and Dialog 360 API. I also gained experience working with Leadsquared CRM API and introduced some features of it in the product. I gained proficiency in using NodeJs for job scheduling and efficiently handling complex rule engines at high data volumes. Additionally, I worked on automating the product to store data in Google Sheets. Throughout my internship, I was also involved in infrastructure and code improvement initiatives and learned best practices for debugging and maintaining code in a production environment. Under the guidance of my mentor, I also developed important soft skills such as hard work, workload management, and leadership.'}
            period={'July 2022 - Dec 2022'}
          />
          <ExperienceCard
            image={cp}
            title={'Full Stack Developer at e-LDA Lab IIIT Kota'}
            paragraph={'I worked on the official eLDA website of IIIT Kota, handling both the frontend and backend development. My responsibilities included implementing new features and functionality using React and NodeJS, as well as troubleshooting and fixing server-side issues. Through my efforts, I was able to significantly improve the user experience and stability of the website.'}
            period={'Aug 2021 - July 2022'}
          />
          <ExperienceCard
            image={design}
            title={'Executive Member at IIITians Network'}
            paragraph={'IIITians Network is an autonomous community of students from all the Indian Institute of Information Technology. Its prime aim is to provide a platform for the exchange of information and resources between IIITians.'}
            period={'Aug 2021 - Mar 2022'}
          />
        </div>
      </ExperienceContentStyled>
    </MainLayout>
  );
}

const ExperienceContentStyled = styled.section`
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