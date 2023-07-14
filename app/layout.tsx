"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import NextAuthSessionProvider from "@/app/providers/sessionProvider";
import React from "react";
import { Toaster } from "react-hot-toast";
import Sidebar from "@/components/layout/Sidebar";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import Header from "@/components/layout/Header";
import FollowBar from "@/components/layout/FollowBar";
import EditModal from "@/components/modals/EditModal";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Twitt-App-Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="#" />
      </head>
      <body className={inter.className}>
        <NextAuthSessionProvider>
          <Toaster />
          <div className="h-screen bg-blue-950">
            <div className="container h-full mx-auto xl:px-30 max-w-6xl">
              <div className="grid grid-cols-4 h-full">
                <Sidebar />
                <div className="col-span-3 lg:col-span-2 border-x-[1px] border-blue-300">
                  <LoginModal />
                  <RegisterModal />
                  <EditModal />
                  {children}
                </div>
                <FollowBar />
              </div>
            </div>
          </div>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
