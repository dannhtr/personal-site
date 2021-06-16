import Prismic from '@prismicio/client';

const accessToken = process.env.PRISMIC_API_TOKEN

export const apiEndpoint = process.env.PRISMIC_REPOSITORY_NAME

export const Client = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken));

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {};
  return {
    ...reqOption,
    ...accessTokenOption,
  };
};
