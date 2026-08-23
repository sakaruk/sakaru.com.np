import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  const url = new URL(context.request.url);
  if (url.pathname !== '/' && url.pathname.endsWith('/')) {
    const cleanPath = url.pathname.replace(/\/+$/, '') + url.search;
    return context.redirect(cleanPath, 301);
  }
  return next();
});
