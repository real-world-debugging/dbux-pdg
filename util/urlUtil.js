/**
 * future-work: Consider more complete normalization.
 * 
 * @see https://github.com/sindresorhus/normalize-url
 */
export function normalizePath(...s) {
  return s.join('/').replace(/[/]+/g, '/');
}
