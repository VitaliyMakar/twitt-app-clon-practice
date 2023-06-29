import { useRouter } from "next/navigation";
import { IconType } from "react-icons";
import React from "react";

interface IProps {
  label: string;
  href?: string;
  icon: IconType;
  onClick: () => void;
}

const SidebarItem: React.FC<IProps> = ({
  label,
  href,
  icon: Icon,
  onClick,
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className="flex flex-row items-center"
    >
      <div
        className="
        relative
        rounded-full
        h-14
        w-14
        p-4
        flex
        justify-center
        items-center
        hover:bg-blue-200
        hover:bg-opacity-10
        cursor-pointer
        lg:hidden
        "
      >
        <Icon size={28} color="white" />
      </div>
      <div className="relative hidden lg:flex items-center gap-4 p-4 rounded-full hover:bg-opacity-10 cursor-pointer">
        <Icon size={28} color="white" />
        <p className="hidden lg:block text-white text-xl">{label}</p>
      </div>
    </div>
  );
};

export default SidebarItem;
