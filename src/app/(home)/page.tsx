import { BlogFooter } from "@/components/home/blog-footer";
import HeroSection from "@/components/home/hero-section";
import { TopArticles } from "@/components/home/top-articles";
import Link from "next/link";
import React, { Suspense } from "react";

const page = async () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-gray-950 dark:via-gray-900/50 dark:to-gray-950">
        <div className="container mx-auto px-4">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary-color/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/3 -right-32 w-80 h-80 bg-secondary-color/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative mb-20 text-center">
            <span className="inline-block px-4 py-1.5 mb-5 text-sm font-medium text-primary-color bg-primary-color/10 rounded-full">
              Latest Content
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              <span className="relative inline-block">
                Featured Articles
                <span className="absolute bottom-2 left-0 w-full h-3 bg-primary-color/20 -z-10"></span>
              </span>
            </h2>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our curated collection of insightful articles and stories
            </p>
          </div>

          {/* Top Articles */}
          <Suspense fallback={
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-96 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg animate-pulse" />
              ))}
            </div>
          }>
            <TopArticles />
          </Suspense>

          <div className="mt-20 text-center">
            <Link 
              href="/articles" 
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium text-white bg-primary-color rounded-xl hover:bg-primary-color/90 shadow-lg hover:shadow-xl hover:shadow-primary-color/20 transition-all duration-300"
            >
              View All Articles
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      <BlogFooter />
    </main>
  );
};

export default page;
