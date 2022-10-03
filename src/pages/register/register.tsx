import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CreateUserInput } from "../../schema/user.schema";
import { trpc } from "../../utils/trpc";

const RegisterPage = () => {
  const { handleSubmit, register } = useForm<CreateUserInput>();

  const router = useRouter();

  const { mutate, error } = trpc.useMutation(["users.register-user"], {
    onSuccess: () => {
      router.push("/register/login");
    },
  });

  function onSubmit(values: CreateUserInput) {
    mutate(values);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {error && error.message}

        <h1>Register</h1>

        <input
          type="email"
          placeholder="mathias@email.com"
          {...register("email")}
        />

        <input type="text" placeholder="name" {...register("name")} />

        <button type="submit">Register</button>
      </form>

      <Link href="/register/login">Login</Link>
    </>
  );
};

export default RegisterPage;
