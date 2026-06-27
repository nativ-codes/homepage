import { getArticleMetadata } from '../utils/getArticleMetadata';
import ArticleCard from '../components/ArticleCard';

export const metadata = {
  title: 'Blog | NativCodes',
  description: 'Thoughts on software development, web technologies, and building things.',
};

export default function BlogHome() {
  const articles = getArticleMetadata();

  return (
    <main className="min-h-screen">
      <section className="flex w-full flex-col sm:flex-row">
        {/* Left side - fixed with BLOG title */}
        <div className="bg-dark sm:fixed sm:top-0 sm:left-0 flex justify-center items-center h-screen w-full sm:w-1/4">
          <div className="font-[LemonMilk] text-white text-5xl tracking-wider">
            BLOG
          </div>
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
