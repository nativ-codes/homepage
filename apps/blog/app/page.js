import { getArticleMetadata } from '../utils/get-article-metadata';
import ArticleCard from '../components/article-card';

export const metadata = {
  title: 'Blog | NativCodes',
  description: 'Thoughts on software development, web technologies, and building things.',
};

export default function BlogHome() {
  const articles = getArticleMetadata();

  return (
    <main className="min-h-screen">
      <section className="flex w-full flex-col sm:flex-row">
        {/* Left side - fixed with back button and BLOG title */}
        <div className="bg-dark sm:fixed sm:top-0 sm:left-0 flex flex-col justify-between h-screen w-full sm:w-1/4 p-8 sm:p-12">
          {/* Top - back link */}
          <div>
            <a 
              href="https://nativ.codes"
              className="text-gray-400 hover:text-white text-sm transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to home
            </a>
          </div>
          
          {/* Center - BLOG title */}
          <div className="flex-1 flex items-center justify-center">
            <div className="font-[LemonMilk] text-white text-5xl tracking-wider">
              BLOG
            </div>
          </div>
          
          {/* Bottom spacer */}
          <div></div>
        </div>
        
        {/* Right side - scrollable article list */}
        <div className="relative bg-white p-[56px] sm:p-[96px] w-full sm:ml-[25%] sm:w-3/4 min-h-screen">
          {articles.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No articles yet. Coming soon!</p>
            </div>
          ) : (
            <div>
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
