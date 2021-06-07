import React from 'react';
import { RichText } from 'prismic-reactjs';

import { Container, Heading, Text } from '..';
import { Section, Jobs, JobItem } from './workexperience.styles';

interface WorkExperienceProps {
  jobs: { [key: string]: any }[];
}

const WorkExperience = ({ jobs }: WorkExperienceProps) => {
  const ToRichText = (data: any) => {
    return RichText.asText(data);
  };

  return (
    <Section>
      <Container>
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
        <Jobs>
          {jobs?.map((job) => {
            return (
              <JobItem key={job.id}>
                <Heading as="h4" color="primary" fontWeight="500" fontSize="default" mb="medium">
                  {ToRichText(job.data.position)}
                </Heading>
                <Heading
                  as="h4"
                  color="white"
                  fontWeight="400"
                  fontSize="default"
                  lineHeight="medium"
                >
                  {ToRichText(job.data.company)} / {ToRichText(job.data.location)}
                </Heading>
                <Heading
                  as="h6"
                  color="white"
                  fontWeight="400"
                  fontSize="mini"
                  mb="medium"
                  lineHeight="medium"
                  opacity="0.7"
                >
                  {ToRichText(job.data.duration)}
                </Heading>
                <Text color="white" opacity="0.5" letterSpacing={1} fontSize={16}>
                  {ToRichText(job.data.description)}
                </Text>
              </JobItem>
            );
          })}
        </Jobs>
      </Container>
    </Section>
  );
};

export default WorkExperience;
