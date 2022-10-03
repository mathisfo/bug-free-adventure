import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CreateUserInput } from "../../schema/user.schema";
import { trpc } from "../../utils/trpc";

const RegisterPage = () => {
  const { handleSubmit, register } = useForm<CreateUserInput>();
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const { mutate, error } = trpc.useMutation(["users.register-user"], {
    onSuccess: () => {
      setSuccess(true);
    },
  });

  const onSubmit = (values: CreateUserInput) => {
    mutate(values);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        {success && <p>Check your email</p>}

        <input
          type="email"
          placeholder="mathias@email.com"
          {...register("email")}
        />

        <button type="submit">Login</button>
      </form>

      <Link href="/register/register">Register</Link>
    </>
  );
};

export default RegisterPage;
