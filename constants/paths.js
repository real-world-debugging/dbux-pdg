import { normalizePath } from '../util/urlUtil';

export const BasePath = process.env.NEXT_PUBLIC_BASE_PATH ?
  normalizePath(process.env.NEXT_PUBLIC_BASE_PATH + '/') :
  '/';

export function publicResourcePath(...args) {
  return normalizePath(BasePath, args);
}

/**
 * @see https://stackoverflow.com/a/58074221
 */
export function makeHref(path, query) {
  return {
    pathname: normalizePath(/* BasePath, */ path),
    query
  };
}
