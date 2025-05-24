"use client";
import { FormEvent, startTransition, useActionState, useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Articles } from "@prisma/client";
import { updateArticles } from "@/actions/update-article";
import Image from "next/image";

type EditPropsPage = {
  article: Articles;
};
const EditArticlePage: React.FC<EditPropsPage> = ({ article }) => {
  const [content, setContent] = useState(article.content);
  const [formState, action, isPending] = useActionState(
    updateArticles.bind(null, article.id),
    { errors: {} }
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    formData.append("content", content);

    // Wrap the action call in startTransition
    startTransition(() => {
      action(formData);
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-black mb-2">Edit Article</h1>
        <p className="text-gray-600 dark:text-gray-700">Update your article content and details</p>
      </div>
      <Card className="border-none shadow-lg bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-b border-gray-100 dark:border-gray-700">
          <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
            Article Details
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <Label htmlFor="title">Article Title</Label>
              <Input
                id="title"
                name="title"
                defaultValue={article.title}
                placeholder="Enter article title"
                required
              />
              {formState.errors.title && (
                <span className="font-medium text-sm text-red-500">
                  {formState.errors.title}
                </span>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <select
                id="category"
                name="category"
                defaultValue={article.category}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-black file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                required
              >
                <option value="">Select Category</option>
                <option value="technology">Technology</option>
                <option value="programming">Programming</option>
                <option value="web-development">Web Development</option>
              </select>
              {formState.errors.category && (
                <span className="font-medium text-sm text-red-500">
                  {formState.errors.category}
                </span>
              )}
            </div>

            <div className="space-y-3">
              <Label htmlFor="featuredImage" className="text-gray-700 dark:text-gray-200 font-medium">Featured Image</Label>
              {article.featuredImage && (
                <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-100 dark:border-gray-700">
                  <p className="mb-2 text-sm text-gray-600 dark:text-gray-400 font-medium">
                    Current Image:
                  </p>
                  <Image
                    src={article.featuredImage}
                    alt="Featured Image"
                    width={300}
                    height={200}
                    className="rounded-md border border-gray-200 dark:border-gray-700 object-cover"
                  />
                </div>
              )}
              <div className="border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-2 text-gray-400 dark:text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                <Input
                  id="featuredImage"
                  name="featuredImage"
                  type="file"
                  accept="image/*"
                  className="hidden"
                />
                <label htmlFor="featuredImage" className="cursor-pointer text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-medium text-blue-600 dark:text-blue-400">Click to upload new image</span> or drag and drop
                </label>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">PNG, JPG or GIF (max. 5MB)</p>
              </div>
              {formState.errors.featuredImage && (
                <span className="font-medium text-sm text-red-500 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  {formState.errors.featuredImage}
                </span>
              )}
            </div>
            <div className="space-y-2">
              <Label>Content</Label>
              <ReactQuill
                theme="snow"
                // defaultValue={}
                value={content}
                onChange={setContent}
              />
              {formState.errors.content && (
                <span className="font-medium text-sm text-red-500">
                  {formState.errors.content[0]}
                </span>
              )}
            </div>

            <div className="flex justify-end gap-4">
              <Button type="button" variant="outline">
                Discard Changes
              </Button>
              <Button disabled={isPending} type="submit">
                {isPending ? "Loading..." : "Update Article"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
export default EditArticlePage;
