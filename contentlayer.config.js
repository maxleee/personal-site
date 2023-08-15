import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    link: { type: 'string' },
    image: { type: 'string', required: true },
    intro: { type: 'string' },
    introImage: { type: 'string' },
    tags: { type: 'list', of: { type: 'string' } },
  },
  computedFields: {
    url: { type: 'string', resolve: post => `posts/${post._raw.flattenedPath}` },
    id: { type: 'string', resolve: post => post._raw.flattenedPath },
  },
}));

export default makeSource({ contentDirPath: 'posts', documentTypes: [Post] });
