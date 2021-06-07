import Prismic from '@prismicio/client';

const accessToken =
  'MC5ZTDVhckJJQUFDRUE4LVZU.Bu-_vShF77-9dDDvv71QexAFQ--_ve-_vVUZ77-9ZSBDCAlUDO-_vRjvv71mO--_vWo';

export const apiEndpoint = 'https://dann-site.cdn.prismic.io/api/v2';

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
