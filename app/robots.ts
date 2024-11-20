import type { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => ({
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: 'https://scholarsuite.github.io'
});

export const dynamic = "force-static";

export default robots;
