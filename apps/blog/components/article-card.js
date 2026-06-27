import Link from 'next/link';

export default function ArticleCard({ article }) {
  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="border-b border-gray-200 py-8 last:border-0">
      <Link 
        href={`/${article.slug}/`}
        className="group block"
      >
        <h2 className="text-2xl font-bold text-dark group-hover:text-primary transition-colors mb-3">
          {article.title}
        </h2>
        <p className="text-gray-500 text-sm mb-3">{formattedDate}</p>
        <p className="text-gray-700 leading-relaxed mb-4">
          {article.description}
        </p>
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
      </Link>
    </article>
  );
}
