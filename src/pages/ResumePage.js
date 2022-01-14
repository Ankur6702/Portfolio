import React from 'react';
import { InnerLayout, MainLayout } from '../styles/Layout';
import Title from './../components/Title';
import ResumePdf from './../components/Resumepdf';
import PrimaryButton from '../components/PrimaryButton';
import styled from 'styled-components';
import resumeLink from './../Assets/Ankur Agarwal.pdf';

function Resume() {
  return (
    <MainLayout>
      <ResumeStyled>
        <Title title={'Resume'} span={'resume'} />
        <InnerLayout>
          <div className='btn btn-top'>
            <PrimaryButton title='Download CV' link={resumeLink} />
          </div>
          <ResumePdf />
          <div className='btn btn-bottom'>
            <PrimaryButton title='Download CV' link={resumeLink} />
          </div>
        </InnerLayout>
      </ResumeStyled>
    </MainLayout>
  )
}

const ResumeStyled = styled.div`
  .btn {
      display: flex;
      justify-content: center;
      align-items: center;
  }

  .btn-top {
    margin-bottom: 2rem;
  }

  .btn-bottom {
    margin-top: 2rem;
  }
`;

export default Resume