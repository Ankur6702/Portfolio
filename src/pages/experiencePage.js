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
            title={'Webmaster at IIIT Kota (Official Website)'}
            paragraph={'As the webmaster for the official IIIT Kota website, I am responsible for handling a range of responsibilities related to web design and development. This includes tasks such as content maintenance, updates to ensure that the website aligns with the goals and objectives of the organization, and the implementation of new features and bug fixes to improve the user experience. In addition to my technical responsibilities, I also lead the web team, which is responsible for managing and maintaining the official website.'}
            period={'Aug 2021 - Present'}
          />
          <ExperienceCard
            image={cp}
            title={'Software Engineering Intern at Coinbase'}
            paragraph={"Chosen as one of the top 15 interns from India for the summer internship at Coinbase in 2023. Served as a member of the Compliance team. Developed and enhanced SQL queries to automate the user KYC process, resulting in a 100% reduction in manual efforts. Successfully migrated a service's workflow from AWS Auto Scaling Groups to Kubernetes Pods, leading to benefits such as dynamic scaling, container orchestration, service discovery, and improved resource efficiency. Demonstrated proficiency in software testing by crafting effective test cases in Golang and Ruby, thereby minimizing bugs and errors."}
            period={'May 2023 - Aug 2023'}
          />
          <ExperienceCard
            image={design}
            title={'Google DSC Lead at IIIT Kota'}
            paragraph={"- Led the developer community in my college. Coordinated and organised various events, both online and offline, throughout the year with high participation. Collaborated with other communities and organised joint events to promote technology development and knowledge among students developers."}
            period={'July 2022 - June 2023'}
          />
          <ExperienceCard
            image={cp}
            title={'MLH Prep Fellow'}
            paragraph={"- Collaborated with a pod of 15 members to develop and deploy 2 web projects as part of the April'23 MLH Fellowship Prep program. Implemented the navbar in the portfolio website and created professional and responsive cards for pod members. Added a voice recognition feature to the weather application and ensured it was responsive across all devices. Worked effectively with fellow members from different time zones, demonstrating the importance of communication and time management. Contributed by making numerous issues and helping the team overcome difficulties to ensure fast delivery of features. Gained valuable experience and enhanced skills working on real-world projects with like-minded individuals. Faced and resolved numerous merge conflicts throughout the development process, which helped me gain confidence and improve my skills in this area."}
            period={'April 2023'}
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