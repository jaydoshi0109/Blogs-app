import { FileText, MessageCircle, PlusCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import RecentArticles from "./recent-articles";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export async function BlogDashboard() {
  const [articles, totalComments] = await Promise.all([
    prisma.articles.findMany({
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
    }),
    prisma.comment.count(),
  ]);

  return (
    <main className="flex-1 p-6 md:p-10 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">Blog Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Manage your content and track your blog performance
          </p>
        </div>
        <Link href={"/dashboard/articles/create"}>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2 px-5 py-2 rounded-lg transition-colors">
            <PlusCircle className="h-5 w-5" />
            New Article
          </Button>
        </Link>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-6 md:grid-cols-3 mb-10">
        <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-semibold text-gray-700 dark:text-gray-200">
              Total Articles
            </CardTitle>
            <div className="bg-blue-100 dark:bg-blue-900 p-2.5 rounded-full">
              <FileText className="h-5 w-5 text-blue-600 dark:text-blue-300" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">{articles.length}</div> 
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 flex items-center">
              <span className="text-green-500 mr-1">↑</span> 5 from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-semibold text-gray-700 dark:text-gray-200">
              Total Comments
            </CardTitle>
            <div className="bg-purple-100 dark:bg-purple-900 p-2.5 rounded-full">
              <MessageCircle className="h-5 w-5 text-purple-600 dark:text-purple-300" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">{totalComments}</div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 flex items-center">
              <span className="text-amber-500 mr-1">⚠</span> 12 awaiting moderation
            </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-semibold text-gray-700 dark:text-gray-200">
              Avg. Reading Time
            </CardTitle>
            <div className="bg-green-100 dark:bg-green-900 p-2.5 rounded-full">
              <Clock className="h-5 w-5 text-green-600 dark:text-green-300" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">4.2m</div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 flex items-center">
              <span className="text-green-500 mr-1">↑</span> 0.8m from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Articles */}
      <RecentArticles articles={articles} />
    </main>
  );
}
