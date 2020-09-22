import React from 'react';
import { DownloadLink, Paper, Section, SectionHeader, Surface } from './style';
import Basics from './Basics';
import Work from './Work';
import Skills from './Skills';
import Education from './Education';

const Resume = ({resume}) => {
  return (
    <Surface>
      <DownloadLink><a href='resume.pdf'>Download PDF</a></DownloadLink>
      <Paper>
        <Section>
          <Basics basics={resume.basics} />
        </Section>
        <Section>
          <SectionHeader>Skills</SectionHeader>
          <Skills skills={resume.skills} />
        </Section>
        <Section>
          <SectionHeader>Work Experience</SectionHeader>
          <Work work={resume.work} />
        </Section>
        <Section>
          <SectionHeader>Education</SectionHeader>
          <Education education={resume.education} />
        </Section>
      </Paper>
    </Surface>
  );
};

export default Resume;
