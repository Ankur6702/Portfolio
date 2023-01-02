import React from "react";
import styled from "styled-components";
import { MainLayout } from '../styles/Layout';
import Title from '../components/Title';
import ImageSection from "../components/ImageSection";
import ServicesSection from "../components/ServicesSection";

function ExperiencePage() {
  return (
    <MainLayout>
      <ExperienceContentStyled>
        <Title title={'About Me'} span={"About Me"} />
        <ImageSection />
        <ServicesSection />
      </ExperienceContentStyled>
    </MainLayout>
  );
}

const ExperienceContentStyled = styled.section`

`;

export default ExperiencePage;