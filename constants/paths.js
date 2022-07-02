import { normalizePath } from '../util/urlUtil';

export const BasePath = process.env.NEXT_PUBLIC_BASE_PATH ? 
  normalizePath(process.env.NEXT_PUBLIC_BASE_PATH + '/') : 
  '/';

export function publicResourcePath(...args) {
  return normalizePath(BasePath, args);
}

export function makeLink(page, ...segments) {
  return normalizePath(BasePath, page, ...segments);
}
