import Prismic from '@prismicio/client';

import { Client } from '../config/prismic-config';

import Intro from '../components/intro/intro';
import SkillsTools from './skillstools';
import WorkExperience from '../components/workexperience';
import Orb from '../components/orb';

const HomePage = ({ jobs, intro, networks }) => {
  return (
    <>
      <Orb />
      <Intro intro={intro} networks={networks} />
      <SkillsTools />
      <WorkExperience jobs={jobs} />
    </>
  );
};

export async function getStaticProps() {
  const { results: jobs } = await Client().query(Prismic.Predicates.at('document.type', 'jo'), {
    orderings: '[document.first_publication_date desc]',
  });

  const { data: intro } = await Client().getSingle('intro', {});

  const {
    data: { networks },
  } = await Client().getSingle('social', {});

  console.log(networks);

  return {
    props: {
      jobs: jobs ? jobs : [],
      intro: intro,
      networks: networks,
    },
  };
}

export default HomePage;
