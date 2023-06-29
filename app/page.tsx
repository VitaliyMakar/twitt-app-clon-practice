"use client";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import Header from "@/components/layout/Header";
import {Toaster} from "react-hot-toast";
import Sidebar from "@/components/layout/Sidebar";
import FollowBar from "@/components/layout/FollowBar";

export default function Home() {
  return (
      <>

      <Toaster />
    <div className="h-screen bg-blue-950">
        <div className="container h-full mx-auto xl:px-30 max-w-6xl">
            <div className="grid grid-cols-4 h-full">
                <Sidebar />
                <div className="col-span-3 lg:col-span-2 border-x-[1px] border-blue-300">
                    <LoginModal />
                    <RegisterModal />
                    <Header label="Home" />
                </div>
                <FollowBar />
            </div>
        </div>
    </div>

      </>
  )
}
