import { Navbar } from "@/components/home/header/navbar";
import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";
import "@/styles/global.css";
import { ThemeProvider } from "@/components/theme-provider";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const user = await currentUser();
  if (!user) {
    return null;
  }
  try {
    const loggedInUser = await prisma.user.findUnique({
      where: { clerkUserId: user.id },
    });
    if (!loggedInUser) {
      await prisma.user.create({
        data: {
          name: `${user.fullName} ${user.lastName}`,
          clerkUserId: user.id,
          email: user.emailAddresses[0].emailAddress,
          imageUrl: user.imageUrl,
        },
      });
    }
  } catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'P2002') {
      console.log('User already exists with this clerkUserId');
    } else {
      console.error('Error creating user:', error);
    }
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        {children}
      </div>
    </ThemeProvider>
  );
};

export default layout;
