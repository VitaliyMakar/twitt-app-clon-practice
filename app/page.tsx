import Header from "@/components/layout/Header";
import React from "react";
import Form from "@/components/Form";

export default function Home() {
  return (
    <>
      <Header label="Home" />
      <Form placeholder="What's going on?" />
    </>
  );
}
