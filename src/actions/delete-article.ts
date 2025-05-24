"use server"

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
 
export const deleteArticle = async (articleId: string) => {
    try {
        // First delete all comments associated with this article
        await prisma.comment.deleteMany({
            where: {
                articleId: articleId,
            },
        });
        
        // Delete all likes associated with this article
        await prisma.like.deleteMany({
            where: {
                articleId: articleId,
            },
        });
        
        // Delete any other related records (add more if needed)
        // For example, if you have tags, bookmarks, etc.
        
        // Finally delete the article itself
        await prisma.articles.delete({
            where: {
                id: articleId,
            },
        });
        
        revalidatePath("/dashboard");
        return { success: true };
    } catch (error) {
        console.error("Error deleting article:", error);
        return { 
            success: false, 
            error: error instanceof Error ? error.message : 'An unknown error occurred' 
        };
    }
}