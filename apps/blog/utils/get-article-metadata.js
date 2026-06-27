import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import slugify from 'slugify';

const ARTICLES_DIR = path.join(process.cwd(), 'articles');

export function getArticleMetadata() {
  if (!fs.existsSync(ARTICLES_DIR)) {
    return [];
  }

  const files = fs.readdirSync(ARTICLES_DIR);
  const markdownFiles = files.filter((file) => file.endsWith('.md'));

  const articles = markdownFiles.map((filename) => {
    const filePath = path.join(ARTICLES_DIR, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);
    
    const rawSlug = filename.replace('.md', '');
    const slug = slugify(rawSlug, { lower: true });

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      description: data.description || '',
      tags: data.tags || [],
      image: data.image || null,
    };
  });

  // Sort by date descending (newest first)
  return articles.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getAllSlugs() {
  const articles = getArticleMetadata();
  return articles.map((article) => article.slug);
}
