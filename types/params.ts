// https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes

export type BaseParams = {
  params: Promise<{ locale: string }>;
};
