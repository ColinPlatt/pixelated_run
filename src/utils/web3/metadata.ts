import axios from 'axios';

import type { ERC721Metadata } from '../../types';

export const transformCollectionOverrideURI = (
  uri = '',
  identifier: string,
) => {
  if (!uri) return uri;
  return uri
    .replace(/\/1$/, `/${identifier}`)
    .replace(/\/1.json/, `/${identifier}.json`);
};

const mediaExtensions = /\.png|\.jpg|\.jpeg|\.gif|\.svg|\.mp4/;

function extractMediaUri(metadata: any) {
  return metadata.image || metadata.imagepath || metadata.animation_url;
}

export async function fetchMetadata(
  uri: string,
  identifier: string,
): Promise<string | ERC721Metadata> {
  // base64 json
  if (uri.includes('application/json;base64')) {
    try {
      const json = JSON.parse(window.atob(uri.split('base64,')[1]));
      if (json) {
        const image = extractMediaUri(json);
        return {
          ...json,
          image: image ? await fetchMetadata(image, identifier) : '',
        };
      }
    } catch (err: any) {
      return uri;
    }
  }

  if (mediaExtensions.test(uri) || uri.includes(';base64,')) return uri;

  try {
    const { data } = await axios.get(uri);
    if (typeof data !== 'object') return uri;
    const image = extractMediaUri(data);
    return {
      ...data,
      image: await fetchMetadata(image, identifier),
    };
  } catch (err: any) {
    return uri;
  }
}
