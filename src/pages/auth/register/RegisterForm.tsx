"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCreateUserMutation } from "@/redux/api/auth";
import { FC } from "react";

const formSchema = z.object({
  name: z.string().min(6, {
    message: "Name must be at least 6 characters.",
  }),
  username: z.string().min(6, {
    message: "Username must be at least 6 characters.",
  }),
  email: z.string().min(6, {
    message: "Username must be at least 6 characters.",
  }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." }),
});

interface registerTypes {
  setIsOTP: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RegisterForm: FC<registerTypes> = ({ setIsOTP }) => {
  const [createUser, { isLoading }] = useCreateUserMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    localStorage.setItem("rUserInfo", JSON.stringify(values))

    createUser(values)
      .unwrap()
      .then((data) => {
        setIsOTP(true);
        localStorage.setItem("rUserId", data?.data?.userid);
      });
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3 min-w-72"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-normal text-secondary-grey-600 text-[.8125rem]">
                Enter your name
              </FormLabel>
              <FormControl>
                <Input
                  className="bg-white border border-slate-400 shadow-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-normal text-secondary-grey-600 text-[.8125rem]">
                Enter your username
              </FormLabel>
              <FormControl>
                <Input
                  className="bg-white border border-slate-400 shadow-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-normal text-secondary-grey-600 text-[.8125rem]">
                Enter your email
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  className="bg-white border border-slate-400 shadow-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-normal text-secondary-grey-600 text-[.8125rem]">
                Enter your password
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  className="bg-white border border-slate-400 shadow-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={isLoading}
          type="submit"
          className="w-full shadow-lg relative !mt-5 py-5 font-normal bg-gradient-to-b from-secondary-purple-900 to-secondary-purple-600 rounded-xl hover:brightness-110 active:-bottom-[.125rem] active:shadow-none transition-all duration-300"
        >
          {isLoading ? <div className="loader w-6 h-6"></div> : "Register"}
        </Button>
      </form>
    </Form>
  );
};
