import React from "react";
import { FaFeather } from "react-icons/fa";
import useLoginModal from "@/hooks/useLoginModal";

const SidebarTweetButton = () => {
  const loginModal = useLoginModal();

  return (
    <div
      onClick={() => {
        loginModal.onOpen();
      }}
    >
      <div
        className="
        mt-6
        lg:hidden
        rounded-full
        h-14
        w-14
        p-4
        flex
        items-center
        justify-center
        bg-sky-500
        hover:bg-opacity-80
        transition
        cursor-pointer
      "
      >
        <FaFeather size={24} color="white" />
      </div>
      <div
        className="
        mt-6
        hidden
        lg:block
        rounded-full
        px-4
        py-2
        bg-sky-500
        hover:bg-opacity-80
        transition
        cursor-pointer
      "
      >
        <p className="hidden lg:block text-center text-white text-xl">Tweet</p>
      </div>
    </div>
  );
};

export default SidebarTweetButton;
