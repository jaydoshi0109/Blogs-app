"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative min-h-[700px] w-full overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-950 to-purple-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -left-20 top-20 h-[300px] w-[300px] rounded-full bg-blue-600/10 blur-[100px] animate-pulse" />
        <div className="absolute right-0 top-1/3 h-[250px] w-[250px] rounded-full bg-purple-600/10 blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 left-1/4 h-[200px] w-[200px] rounded-full bg-indigo-600/10 blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Decorative elements */}
        <div className="absolute left-10 top-10 h-6 w-6 rounded-full bg-blue-400/30 backdrop-blur-md" />
        <div className="absolute right-1/4 top-1/3 h-3 w-3 rounded-full bg-purple-400/30 backdrop-blur-md" />
        <div className="absolute bottom-20 left-1/3 h-4 w-4 rounded-full bg-indigo-400/30 backdrop-blur-md" />
      </div>

      <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 py-24 md:flex-row md:py-32">
        {/* Content */}
        <div className="flex-1 space-y-8 text-center md:text-left">
          <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-md">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
            Discover the latest in tech and programming
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Elevate Your <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                Knowledge
              </span>
              <span className="absolute -bottom-1 left-0 z-0 h-3 w-full bg-gradient-to-r from-blue-400/30 via-violet-400/30 to-purple-400/30 blur-md"></span>
            </span>
            <br />
            With Inspiring Content
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-gray-300 md:text-xl">
            Immerse yourself in a world of thought-provoking articles, cutting-edge technology insights, and expert perspectives that will transform your understanding.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row md:justify-start">
            <Link href="/articles">
              <Button size="lg" className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-6 text-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                <span className="relative z-10">Start Reading</span>
                <span className="absolute inset-0 z-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </Link>
            <Link href="/categories">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-white/20 bg-white/5 px-8 py-6 text-lg text-white backdrop-blur-md hover:bg-white/10 transition-all duration-300"
              >
                Explore Topics
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md md:max-w-md">
            <div className="space-y-2 text-center">
              <div className="text-3xl font-bold text-white">1K<span className="text-blue-400">+</span></div>
              <div className="text-sm text-gray-300">Articles</div>
            </div>
            <div className="space-y-2 text-center">
              <div className="text-3xl font-bold text-white">50<span className="text-purple-400">+</span></div>
              <div className="text-sm text-gray-300">Writers</div>
            </div>
            <div className="space-y-2 text-center">
              <div className="text-3xl font-bold text-white">10M<span className="text-indigo-400">+</span></div>
              <div className="text-sm text-gray-300">Readers</div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex-1 md:mt-0">
          <div className="relative mx-auto">
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-blue-500/10 backdrop-blur-md" />
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-purple-500/10 backdrop-blur-md" />
            
            {/* Main image container */}
            <div
              className={cn(
                "relative mx-auto h-80 w-80 rounded-2xl overflow-hidden",
                "bg-gradient-to-br from-white/10 to-white/5",
                "border border-white/20 backdrop-blur-lg",
                "shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/30 transition-all duration-500"
              )}
            >
              <Image
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Modern workspace with laptop and coffee"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 to-transparent" />
              
              {/* Featured tag */}
              <div className="absolute left-4 top-4 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                Featured
              </div>
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="text-sm font-medium text-white/80">Latest Article</div>
                <h3 className="text-lg font-bold text-white">The Future of Web Development in 2025</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="0.05" d="M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,165.3C672,171,768,149,864,149.3C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};
export default HeroSection;
