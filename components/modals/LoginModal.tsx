"use client";

import { useCallback, useState } from "react";
import useLoginModal from "@/hooks/useLoginModal";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import useRegisterModal from "@/hooks/useRegisterModal";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      await signIn("credentials", { email, password, redirect: false }).then(
        (res) => {
          if (!res?.error) {
            loginModal.onClose();
          } else {
            toast(res?.error);
          }
        }
      );
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }, [email, loginModal, password]);

  const onToggle = useCallback(() => {
    if (isLoading) {
      return;
    }
    loginModal.onClose();
    registerModal.onOpen();
  }, [isLoading, loginModal, registerModal]);

  const bodyContent = (
    <div className={"flex flex-col gap-4"}>
      <Input
        placeholder={"Email"}
        value={email}
        disabled={isLoading}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder={"Password"}
        value={password}
        disabled={isLoading}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );

  const footerContent = (
    <div className={"text-neutral-400 text-center mt-4"}>
      <p>
        Not registered?
        <span
          className={"text-white cursor-pointer hover:underline"}
          onClick={onToggle}
        >
          {" "}
          Register...
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      title={"LogIn"}
      actionLabel={"LogIn"}
      body={bodyContent}
      footer={footerContent}
      isOpen={loginModal.isOpen}
      onClose={loginModal.onClose}
      onSubmit={onSubmit}
    />
  );
};
export default LoginModal;
