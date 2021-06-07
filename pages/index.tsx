import Prismic from '@prismicio/client';

import { Client } from '../config/prismic-config';

import Intro from './intro';
import SkillsTools from './skillstools';
import WorkExperience from '../components/workexperience';
import Orb from '../components/orb';

const HomePage = ({ jobs }) => {
  return (
    <>
      <Orb />
      <Intro />
      <SkillsTools />
      <WorkExperience jobs={jobs} />
    </>
  );
};

export async function getStaticProps() {
  const jobs = await Client().query(Prismic.Predicates.at('document.type', 'jo'), {
    orderings: '[document.first_publication_date desc]',
  });

  return {
    props: {
      jobs: jobs ? jobs.results : [],
    },
  };
}

export default HomePage;
