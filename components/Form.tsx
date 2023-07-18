"use client";

import React, { useCallback, useState } from "react";
import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";
import useCurrentUser from "@/hooks/useCurrentUser";
import usePosts from "@/hooks/usePosts";
import { toast } from "react-hot-toast";
import axios from "axios";
import Button from "@/components/Button";
import Avatar from "@/components/Avatar";

interface IProps {
  placeholder: string;
  isComment?: boolean;
  postId?: string;
}
const Form: React.FC<IProps> = ({ placeholder, isComment, postId }) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const { data: currentUser } = useCurrentUser();
  const { mutate: mutatePosts } = usePosts();

  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      await axios.post("api/posts", { body, userId: currentUser?.id });
      toast.success("Tweet created");
      setBody("");
      await mutatePosts();
    } catch (error) {
      toast.error("Did not work");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [body, mutatePosts]);

  return (
    <div className="border-b border-blue-300 px-5 py-2">
      {currentUser ? (
        <div className="flex flex-row gap-4">
          <div>
            <Avatar userId={currentUser?.id} />
          </div>
          <div className="w-full">
            <textarea
              disabled={isLoading}
              onChange={(event) => setBody(event.target.value)}
              value={body}
              className="disabled:opacity-40 peer resize-none mt-3 w-full ring-0 bg-transparent outline-none text-2xl placeholder-neutral-500 text-white"
              placeholder={placeholder}
            />
            <hr className="opacity-0 peer-focus:opacity-100 h-1 w-full border-blue-300 transition" />
            <div className="mt-4 flex justify-end">
              <Button
                label={"Tweet"}
                disabled={isLoading || !body}
                onClick={onSubmit}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="py-8">
          <h1 className="text-white text-2xl text-center font-bold mb-4">
            Welcome to Tweeter
          </h1>
          <div className="flex items-center justify-center gap-4">
            <Button label={"Login"} onClick={loginModal.onOpen} />
            <Button
              label={"Register"}
              onClick={registerModal.onOpen}
              secondary
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
