"use client";

import Header from "@/components/layout/Header";
import useUser from "@/hooks/useUser";
import { RingLoader } from "react-spinners";
import UserHero from "@/components/users/UserHero";
import UserBio from "@/components/users/UserBio";

const UserView = ({ params }: { params: { userId: string } }) => {
  const { data: fetchedUser, isLoading } = useUser(params.userId as string);

  if (isLoading || !fetchedUser) {
    return (
      <div className="flex justify-center items-center h-full">
        <RingLoader color="lightblue" size={80} />
      </div>
    );
  }
  return (
    <>
      <Header showBackArrow label={fetchedUser?.name} />
      <UserHero userId={params.userId as string} />
      <UserBio userId={params.userId as string} />
    </>
  );
};

export default UserView;
