import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import { Clock, MessageSquare } from "lucide-react";

export async function TopArticles() {
  const articles = await prisma.articles.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      comments: true,
      author: {
        select: {
          name: true,
          email: true,
          imageUrl: true,
        },
      },
    },
  });

  return (
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {articles.slice(0, 3).map((article) => (
        <Link 
          href={`/articles/${article.id}`} 
          key={article.id} 
          className="group block"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
            {/* Featured Image with Gradient Overlay */}
            <div className="relative h-64 w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              <Image
                src={article.featuredImage as string}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Category Badge */}
              <div className="absolute top-4 right-4 z-20 rounded-full bg-white/90 dark:bg-gray-800/90 px-3 py-1 text-xs font-medium text-primary-color dark:text-primary-color/90 backdrop-blur-sm">
                {article.category}
              </div>
            </div>
            
            {/* Content Container */}
            <div className="relative z-20 -mt-16 mx-4 rounded-xl bg-white dark:bg-gray-900 p-6 shadow-md">
              {/* Title */}
              <h3 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-primary-color dark:group-hover:text-primary-color/90 transition-colors">
                {article.title}
              </h3>
              
              {/* Meta Info */}
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                <div className="flex items-center gap-1.5">
                  <Clock size={14} />
                  <span>{12} min read</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MessageSquare size={14} />
                  <span>{article.comments.length}</span>
                </div>
              </div>
              
              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                <Avatar className="h-9 w-9 ring-2 ring-white dark:ring-gray-800">
                  <AvatarImage src={article.author.imageUrl as string} />
                  <AvatarFallback className="bg-primary-color/10 text-primary-color">
                    {article.author.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{article.author.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{new Date(article.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
