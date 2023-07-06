import React, { useCallback } from "react";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface IProps {
  userId: string;
  isLarge?: boolean;
  hasBorder?: boolean;
}

const Avatar: React.FC<IProps> = ({ userId, isLarge, hasBorder }) => {
  const { data: fetchedUser } = useUser(userId);
  const router = useRouter();

  const onClick = useCallback(
    (event: any) => {
      event.stopPropagation();
      const url = `/users/${userId}`;
      router.push(url);
    },
    [router, userId]
  );
  return (
    <div
      className={`
        ${hasBorder ? "border-4 border-black" : ""}
        ${isLarge ? "h-32 w-32" : "h-12 w-12"}
        rounded-full
        hover:opacity-90
        transition
        cursor-pointer
        relative
  `}
    >
      <Image
        fill
        style={{ objectFit: "cover", borderRadius: "100%" }}
        sizes={"h-32 w-32"}
        src={fetchedUser?.profileImage || "/images/placeholder.png"}
        alt="Avatar"
        onClick={onClick}
      />
    </div>
  );
};
export default Avatar;
