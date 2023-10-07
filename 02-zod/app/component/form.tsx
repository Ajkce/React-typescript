"use client";

import React from "react";
import { FieldValue, FieldValues, useForm } from "react-hook-form";

const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
    reset,
    getValues,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    // TODO: Sumit to server
    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} action="">
      <input
        {...register("name", {
          required: "Name is required",
          minLength: {
            value: 2,
            message: "Name must be longer than 2",
          },
        })}
        type="text"
        placeholder="Name"
      />
      {errors.name && (
        <p className="text-red-600">{`${errors.name.message}`}</p>
      )}
      <input
        {...register("email", {
          required: "Email is required",
        })}
        type="email"
        placeholder="Email"
      />
      <input
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Pasword must be longer than 8 characters",
          },
        })}
        type="password"
        placeholder="Password"
      />
      {errors.password && (
        <p className="text-red-600">{`${errors.password.message}`}</p>
      )}
      <input
        {...register("Confirmpassword", {
          required: "ConfirmPassword is required",
          validate: (value) =>
            value === getValues("password") || "Password must match",
          minLength: {
            value: 8,
            message: "ConfirmPasword must be longer than 8 characters",
          },
        })}
        type="password"
        placeholder="ConfirmPassword"
      />
      {errors.Confirmpassword && (
        <p className="text-red-600">{`${errors.Confirmpassword.message}`}</p>
      )}
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
};

export default Form;
