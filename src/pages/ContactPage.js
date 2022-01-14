import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactItem from '../components/ContactItem';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { MainLayout, InnerLayout } from '../styles/Layout';

const githubLink = 'https://github.com/Ankur6702';
const linkedinLink = 'https://www.linkedin.com/in/ankur-agarwal-840927200/';

function ContactPage() {
    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationOnIcon />
    const github = <GitHubIcon />
    const linkedin = <LinkedInIcon />
    return (
        <MainLayout>
            <Title title={"Let's connect"} span={'Contact'} />
            <ContactPageStyled >
                <InnerLayout className={'contact-section'}>
                    <ContactItem title={'Phone'} icon={phone} cont1={'8279443413'} />
                    <ContactItem title={'Email'} icon={email} cont1={'ankuragarwa246@gmail.com'} cont2={'2020kucp1096@iiitkota.ac.in'} />
                    <ContactItem title={'Github'} icon={github} link={githubLink} linkCont={'Click here to visit'} />
                    <ContactItem title={'LinkedIn'} icon={linkedin} link={linkedinLink} linkCont={'Click here to visit'} />
                    <ContactItem title={'Address'} icon={location} cont1={'Aligarh, Uttar Pradesh, India'} />
                </InnerLayout>
            </ContactPageStyled>
        </MainLayout>
    )
}

const ContactPageStyled = styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width: 978px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default ContactPage