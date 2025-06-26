import { defineConfig } from 'tinacms';
import nextConfig from '../next.config';

import Post from './collection/post';
import Global from './collection/global';
import Author from './collection/author';
import Page from './collection/page';
import Tag from './collection/tag';

const config = defineConfig({
  tinaioConfig: {
    frontendUrlOverride: 'http://localhost:3002',
    identityApiUrlOverride: 'https://brookj-dev-identity.tinajs.dev',
    contentApiUrlOverride: 'https://brookj-dev-content.tinajs.dev',

    // Include next line only if you set DEPLOY_ASSETS_API to true for your instance...
    assetsApiUrlOverride: 'https://assets-api-local-brookj-dev.tinajs.dev',
  },
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!,
  branch:
    process.env.NEXT_PUBLIC_TINA_BRANCH! || // custom branch env override
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF! || // Vercel branch env
    process.env.HEAD!, // Netlify branch env
  token: process.env.TINA_TOKEN!,
  media: {
    // If you wanted cloudinary do this
    // loadCustomStore: async () => {
    //   const pack = await import("next-tinacms-cloudinary");
    //   return pack.TinaCloudCloudinaryMediaStore;
    // },
    // this is the config for the tina cloud media store
    tina: {
      publicFolder: 'public',
      mediaRoot: 'uploads',
    },
  },
  build: {
    publicFolder: 'public', // The public asset folder for your framework
    outputFolder: 'admin', // within the public folder
    basePath: nextConfig.basePath?.replace(/^\//, '') || '', // The base path of the app (could be /blog)
  },
  schema: {
    collections: [Page, Post, Author, Tag, Global],
  },
});

export default config;
