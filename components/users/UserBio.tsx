import React, { useMemo } from "react";
import useUser from "@/hooks/useUser";
import useCurrentUser from "@/hooks/useCurrentUser";
import { format } from "date-fns";
import Button from "@/components/Button";
import { EditorLink } from "next/dist/client/components/react-dev-overlay/internal/components/Terminal/EditorLink";
import { BiCalendar } from "react-icons/bi";

interface IProps {
  userId: string;
}

const UserHero: React.FC<IProps> = ({ userId }) => {
  const { data: currentUser } = useCurrentUser();
  const { data: fetchedUser } = useUser(userId);
  const createdAt = useMemo(() => {
    if (!fetchedUser) {
      return null;
    }

    return format(new Date(fetchedUser.createdAt), "MMMM yyyy");
  }, [fetchedUser.createdAt]);

  return (
    <div className="border-b-[1px] border-blue-300 pb-4">
      <div className="flex justify-end p-2">
        {currentUser?.id === userId ? (
          <Button secondary label="Edit" onClick={() => {}} />
        ) : (
          <Button secondary label="Follow" onClick={() => {}} />
        )}
      </div>
      <div className="mt-8 px-4">
        <div className="flex flex-col">
          <p className="text-white text-2xl font-semibold">
            {fetchedUser?.name}
          </p>
          <p className="text-md text-neutral-500">@{fetchedUser?.userName}</p>
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-white">{fetchedUser?.bio}</p>
        </div>
        <div className="flex flex-row items-center gap-2 mt-4 text-neutral-500">
          <BiCalendar />
          <p>Joined {createdAt}</p>
        </div>
      </div>
    </div>
  );
};
export default UserHero;
