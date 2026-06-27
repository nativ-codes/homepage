import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getArticleContent } from '../../utils/get-article-content';
import { getArticleMetadata } from '../../utils/get-article-metadata';
import ArticleContent from '../../components/article-content';
import TableOfContents from '../../components/table-of-contents';

export async function generateStaticParams() {
  const articles = getArticleMetadata();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleContent(slug);
  
  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${article.title} | NativCodes Blog`,
    description: article.description,
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticleContent(slug);

  if (!article) {
    notFound();
  }

  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <main className="min-h-screen">
      <section className="flex w-full flex-col sm:flex-row">
        {/* Left side - fixed with TOC */}
        <div className="bg-dark sm:fixed sm:top-0 sm:left-0 flex flex-col justify-between h-screen w-full sm:w-1/4 p-8 sm:p-12">
          {/* Top - back link and TOC */}
          <div className="flex flex-col h-full">
            <Link 
              href="/"
              className="text-gray-400 hover:text-white text-sm mb-8 transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to all articles
            </Link>
            
            <div className="flex-1 overflow-y-auto">
              <TableOfContents content={article.content} />
            </div>
          </div>
        </div>
        
        {/* Right side - scrollable article content */}
        <div className="relative bg-white p-[56px] sm:p-[96px] w-full sm:ml-[25%] sm:w-3/4">
          {/* Article header */}
          <header className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
              {article.title}
            </h1>
            <p className="text-gray-500 text-sm mb-4">{formattedDate}</p>
            {article.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Article content */}
          <ArticleContent content={article.content} />
        </div>
      </section>
    </main>
  );
}
