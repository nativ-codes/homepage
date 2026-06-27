import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import slugify from 'slugify';

const ARTICLES_DIR = path.join(process.cwd(), 'articles');

export function getArticleContent(slug) {
  if (!fs.existsSync(ARTICLES_DIR)) {
    return null;
  }

  const files = fs.readdirSync(ARTICLES_DIR);
  const markdownFiles = files.filter((file) => file.endsWith('.md'));

  // Find file matching the slug
  const matchingFile = markdownFiles.find((filename) => {
    const rawSlug = filename.replace('.md', '');
    const fileSlug = slugify(rawSlug, { lower: true });
    return fileSlug === slug;
  });

  if (!matchingFile) {
    return null;
  }

  const filePath = path.join(ARTICLES_DIR, matchingFile);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title || 'Untitled',
    date: data.date || new Date().toISOString(),
    description: data.description || '',
    tags: data.tags || [],
    image: data.image || null,
    content,
  };
}

export function getArticleBySlug(slug) {
  return getArticleContent(slug);
}
