export const BasePath = '/' + (process.env.NEXT_PUBLIC_BASE_PATH || '');

export function publicResourcePath(...args) {
  return BasePath + args.join('/');
}

