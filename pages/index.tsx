import Prismic from '@prismicio/client';

import { Client } from '../config/prismic-config';

import Intro from '../components/intro/intro';
import SkillsTools from './skillstools';
import WorkExperience from '../components/workexperience';
import Picture from '../components/picture';
import Extra from '../components/extra';
import Noise from '../components/noise';

import dynamic from 'next/dynamic';

const BlackHole = dynamic(() => import('../components/BlackHole'), {
  ssr: false,
});

const HomePage = ({ jobs, intro, networks }) => {
  return (
    <>
      <BlackHole />
      <Noise />
      <Intro intro={intro} networks={networks} />
      <SkillsTools />
      <WorkExperience jobs={jobs} />
      <Picture />
      <Extra />
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

  return {
    props: {
      jobs: jobs ? jobs : [],
      intro: intro,
      networks: networks,
    },
  };
}

export default HomePage;
