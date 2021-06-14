import Prismic from '@prismicio/client';

import { Client } from '../config/prismic-config';

import { Intro, Skills, WorkExperience, Picture, Hobbies, Noise, Footer } from '../components';

import dynamic from 'next/dynamic';

const BlackHole = dynamic(() => import('../components/BlackHole'), {
  ssr: false,
});

const HomePage = ({ jobs, intro, networks, picture, resume }) => {
  return (
    <>
      <BlackHole />
      <Noise />
      <Intro intro={intro} networks={networks} />
      <Skills />
      <WorkExperience jobs={jobs} resume={resume} />
      <Picture picture={picture} />
      <Hobbies />
      <Footer />
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

  const { data: picture } = await Client().getSingle('picture', {});

  const { data: resume } = await Client().getSingle('resume', {});

  return {
    props: {
      jobs: jobs ? jobs : [],
      intro: intro,
      networks: networks,
      picture: picture,
      resume: resume,
    },
  };
}

export default HomePage;
