"use client";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import Header from "@/components/layout/Header";
import { Toaster } from "react-hot-toast";
import Sidebar from "@/components/layout/Sidebar";
import FollowBar from "@/components/layout/FollowBar";
import React from "react";
import { Metadata } from "next";

export default function Home() {
  return (
    <>
      <Header label="Home" />
    </>
  );
}
