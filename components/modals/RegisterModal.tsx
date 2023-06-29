import { useCallback, useState } from "react";
import useLoginModal from "@/hooks/useLoginModal";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import useRegisterModal from "@/hooks/useRegisterModal";
import axios from "axios";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import bcrypt from "bcrypt";
import prisma from "@/libs/prismadb";

const RegisterModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      if (!password) return;

      await axios.post("/api/register", {
        name,
        userName,
        email,
        password,
      });

          // toast.success("Account created");
      //
      // await signIn("credentials", { email, password });

      registerModal.onClose();
    } catch (e) {
      console.log(e);
      toast.error("Did not work");
    } finally {
      setIsLoading(false);
    }
  }, [email, name, password, registerModal, userName]);

  const onToggle = useCallback(() => {
    if (isLoading) {
      return;
    }
    registerModal.onClose();
    loginModal.onOpen();
  }, [isLoading, loginModal, registerModal]);

  const bodyContent = (
    <div className={"flex flex-col gap-4"}>
      <Input
        placeholder={"Name"}
        value={name}
        disabled={isLoading}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder={"User Name"}
        value={userName}
        disabled={isLoading}
        onChange={(e) => setUserName(e.target.value)}
      />
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
        Already have one?
        <span
          className={"text-white cursor-pointer hover:underline"}
          onClick={onToggle}
        >
          {" "}
          Login...
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      title={"Create Account"}
      actionLabel={"Register"}
      body={bodyContent}
      footer={footerContent}
      isOpen={registerModal.isOpen}
      onClose={registerModal.onClose}
      onSubmit={onSubmit}
    />
  );
};
export default RegisterModal;
