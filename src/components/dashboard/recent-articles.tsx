"use client";
import React, { useTransition } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import Link from "next/link";
import type { Prisma } from "@prisma/client";
import { deleteArticle } from "@/actions/delete-article";
 
type RecentArticlesProps = {
  articles: Prisma.ArticlesGetPayload<{
    include: {
      comments: true;
      author: {
        select: {
          name: true;
          email: true;
          imageUrl: true;
        };
      };
    };
  }>[];
};

const RecentArticles: React.FC<RecentArticlesProps> = ({ articles }) => {
  return (
    <Card className="mb-8 border-none shadow-md bg-white dark:bg-gray-800">
      <CardHeader className="border-b border-gray-100 dark:border-gray-700 pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">Recent Articles</CardTitle>
          <Button variant="ghost" size="sm" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium">
            View All →
          </Button>
        </div>
      </CardHeader>
      {!articles.length ? (
        <CardContent className="py-10 text-center text-gray-500 dark:text-gray-400">
          <p>No articles found. Create your first article to get started!</p>
        </CardContent>
      ) : (
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50 dark:bg-gray-700">
                <TableHead className="font-semibold text-gray-700 dark:text-gray-200">Title</TableHead>
                <TableHead className="font-semibold text-gray-700 dark:text-gray-200">Status</TableHead>
                <TableHead className="font-semibold text-gray-700 dark:text-gray-200">Comments</TableHead>
                <TableHead className="font-semibold text-gray-700 dark:text-gray-200">Date</TableHead>
                <TableHead className="font-semibold text-gray-700 dark:text-gray-200">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {articles.slice(0, 5).map((article) => (
                <TableRow key={article.id}>
                  <TableCell className="font-medium">{article.title}</TableCell>
                  <TableCell>
                    <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                      Published
                    </span> 
                  </TableCell>
                  <TableCell>{article.comments.length}</TableCell>
                  <TableCell>{new Date(article.createdAt).toDateString()}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Link href={`/dashboard/articles/${article.id}/edit`}>
                        <Button variant="ghost" size="sm">Edit</Button>
                      </Link>
                      <DeleteButton articleId={article.id} />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      )}
    </Card>
  );
};

export default RecentArticles;

type DeleteButtonProps = {
  articleId: string;
};

const DeleteButton: React.FC<DeleteButtonProps> = ({ articleId }) => {
  const [isPending, startTransition] = useTransition();

  return (
    <form
      action={() =>
        startTransition(async () => {
          await deleteArticle(articleId);
        })
      }
    >
      <Button disabled={isPending} variant="ghost" size="sm" type="submit">
        {isPending ? "Deleting..." : "Delete"}
      </Button>
    </form>
  );
};
