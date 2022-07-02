/**
 * future-work: Consider more complete normalization.
 * 
 * @see https://github.com/sindresorhus/normalize-url
 */
export function normalizeUrl(s) {
  return s.replace(/[/]+/g, '/');
}
