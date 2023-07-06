"use client";

import Header from "@/components/layout/Header";
import useUser from "@/hooks/useUser";
import { ClipLoader } from "react-spinners";

const UserView = ({ params }: { params: { userId: string } }) => {
  const { data: fetchedUser, isLoading } = useUser(params.userId as string);

  if (isLoading || !fetchedUser) {
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader color="lightblue" size={80} />
      </div>
    );
  }
  return (
    <>
      <Header showBackArrow label={fetchedUser?.name} />
      <div>Hallo {params.userId}</div>
    </>
  );
};

export default UserView;
