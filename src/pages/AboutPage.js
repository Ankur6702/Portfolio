import styled from "styled-components";
import { MainLayout } from './../styles/Layout';
import Title from './../components/Title';
import ImageSection from "../components/ImageSection";
import ServicesSection from "../components/ServicesSection";

function AboutPage() {
  return (
    <MainLayout>
      <AboutContentStyled>
        <Title title={'About Me'} span={"About Me"} />
        <ImageSection />
        <ServicesSection />
      </AboutContentStyled>
    </MainLayout>
  );
}

const AboutContentStyled = styled.section`

`;

export default AboutPage;