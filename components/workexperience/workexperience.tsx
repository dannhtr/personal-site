import React from 'react';
import { RichText } from 'prismic-reactjs';

import { Container, Heading, Text } from '..';
import { Section, Jobs, JobItem, Download, Resume } from './WorkExperience.styles';

interface WorkExperienceProps {
  jobs: { [key: string]: any }[];
}

interface ResumeProps {
  resume: any;
}

const WorkExperience = ({ jobs, resume }: WorkExperienceProps & ResumeProps) => {
  const ToRichText = (data: any) => {
    return RichText.asText(data);
  };

  console.log(resume);

  return (
    <Section>
      <Container>
        {/* <Fade> */}
        <Heading
          as="h1"
          fontSize={{ _: 'xlarge', lg: 'gigant' }}
          color="white"
          lineHeight="default"
          position="relative"
          zIndex={2}
          mb={100}
        >
          Work Experience
        </Heading>
        {/* </Fade> */}

        <Jobs>
          {jobs?.map((job) => {
            return (
              // <Fade key={job.id}>
              <JobItem key={job.id}>
                <Heading
                  as="h4"
                  color="primary"
                  fontWeight="500"
                  fontSize="default"
                  mb="16px"
                  gradient
                >
                  {ToRichText(job.data.position)}
                </Heading>
                <Heading as="h4" color="gray" fontWeight="400" fontSize="small" lineHeight="medium">
                  {ToRichText(job.data.company)} / {ToRichText(job.data.location)}
                </Heading>
                <Heading
                  as="h4"
                  color="gray"
                  fontWeight="400"
                  fontSize="mini"
                  lineHeight="medium"
                  mb="medium"
                >
                  {ToRichText(job.data.duration)}
                </Heading>
                <Text color="white" letterSpacing={1}>
                  {ToRichText(job.data.description)}
                </Text>
              </JobItem>
              // </Fade>
            );
          })}
        </Jobs>
      </Container>
      <Container>
        <Resume>
          <Download href={resume.resume.url} target="_blank" rel="noopener noreferrer">
            {resume.button_text}
          </Download>
        </Resume>
      </Container>
    </Section>
  );
};

export default WorkExperience;
