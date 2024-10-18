import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import pagefind from "astro-pagefind";
import mdx from "@astrojs/mdx";
import { fileURLToPath } from "url";
import path from "path";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import expressiveCode from "astro-expressive-code";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";

// Remark
import remarkSectionize from "./src/utils/remark/sectionize";


const projectRootDir = path.dirname(fileURLToPath(import.meta.url));


// https://astro.build/config
export default defineConfig({
  integrations: [
    preact(),
    tailwind(),
    expressiveCode({
      theme: "synthwave-84",
      code: {
        lineNumbers: true,
        highlight: true,
      },
      plugins: [pluginLineNumbers()],
    }),
    mdx(),
    pagefind(),
  ],
  markdown: {
    remarkPlugins: [remarkSectionize],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "append",
        },
      ],
    ],
  },
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(projectRootDir, "src"),
      },
    },
  },
  redirects: {
    '/quickmarch': {
      status: 302,
      destination: '/bahamut/quickmarch'
    },
    '/blackfire': {
      status: 302,
      destination: '/bahamut/blackfire'
    },
    '/fellruin': {
      status: 302,
      destination: '/bahamut/fellruin'
    },
    '/heavensfall': {
      status: 302,
      destination: '/bahamut/heavensfall'
    },
    '/tenstrike': {
      status: 302,
      destination: '/bahamut/tenstrike'
    },
    '/octet': {
      status: 302,
      destination: '/bahamut/octet'
    },
    '/mit': {
      status: 302,
      destination: '/general/mitigation'
    },
    '/lb3': {
      status: 302,
      destination: '/general/lbgen'
    }
  }
});

