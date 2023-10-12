"use client";

import React from "react";
import { FieldValue, FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const signUpSchema = z
  .object({
    name: z
      .string()
      .min(2, "Name must be longer tha 2")
      .refine((value) => value.trim()),
    email: z.string(),
    password: z.string().min(8, "Password must be longer than 8"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password must match",
    path: ["confirmPassword"],
  });

type TSignUpSchema = z.infer<typeof signUpSchema>;

const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
    reset,
    getValues,
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    // TODO: Sumit to server
    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} action="">
      <input {...register("name")} type="text" placeholder="Name" />
      {errors.name && (
        <p className="text-red-600">{`${errors.name.message}`}</p>
      )}
      <input {...register("email")} type="email" placeholder="Email" />
      <input {...register("password")} type="password" placeholder="Password" />
      {errors.password && (
        <p className="text-red-600">{`${errors.password.message}`}</p>
      )}
      <input
        {...register("confirmPassword")}
        type="password"
        placeholder="confirmPassword"
      />
      {errors.confirmPassword && (
        <p className="text-red-600">{`${errors.confirmPassword.message}`}</p>
      )}
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
};

export default Form;
