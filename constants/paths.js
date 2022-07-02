import { normalizeUrl } from '../util/urlUtil';

export const BasePath = process.env.NEXT_PUBLIC_BASE_PATH ? 
  normalizeUrl(process.env.NEXT_PUBLIC_BASE_PATH + '/') : 
  '/';

export function publicResourcePath(...args) {
  return BasePath + args.join('/');
}

export function makeLink(page, ...segments) {
  return [BasePath, page, ...segments].join('/');
}
