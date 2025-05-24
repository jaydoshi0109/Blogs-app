"use client";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import {
  BarChart,
  FileText,
  LayoutDashboard,
  MessageCircle,
  Settings,
} from "lucide-react";
import Link from "next/link";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Mobile Sidebar */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" className="md:hidden m-4">
            <LayoutDashboard className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[250px]">
          <DashboardSidebar closeSheet={() => setIsOpen(false)} />
        </SheetContent>
      </Sheet>
      <div className="hidden md:block h-screen w-[250px] border-r bg-background">
        <DashboardSidebar />
      </div>
    </div>
  );
};

export default Sidebar;

function DashboardSidebar({ closeSheet }: { closeSheet?: () => void }) {
  return (
    <div className="h-full px-4 py-6 bg-white dark:bg-gray-900">
      <div className="flex items-center gap-2 mb-8 px-2">
        <Link href={"/"} className="flex items-center">
          <span className="text-xl font-bold">
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
              Blogs
            </span>
          </span>
        </Link>
      </div>
      <nav className="space-y-2">
        <Link href={"/dashboard"}>
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-700 dark:text-gray-300 hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-900/20 dark:hover:text-blue-400 rounded-lg font-medium transition-colors"
            onClick={closeSheet}
          >
            <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg mr-3">
              <LayoutDashboard className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            Dashboard
          </Button>
        </Link>
        <Link href={"/dashboard/articles/create"}>
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-700 dark:text-gray-300 hover:bg-green-50 hover:text-green-700 dark:hover:bg-green-900/20 dark:hover:text-green-400 rounded-lg font-medium transition-colors"
            onClick={closeSheet}
          >
            <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg mr-3">
              <FileText className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            Create Article
          </Button>
        </Link>
        <Button
          variant="ghost"
          className="w-full justify-start text-gray-700 dark:text-gray-300 hover:bg-yellow-50 hover:text-yellow-700 dark:hover:bg-yellow-900/20 dark:hover:text-yellow-400 rounded-lg font-medium transition-colors"
          onClick={closeSheet}
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          Comments
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={closeSheet}
        >
          <BarChart className="mr-2 h-4 w-4" />
          Analytics
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={closeSheet}
        >
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </nav>
    </div>
  );
}
