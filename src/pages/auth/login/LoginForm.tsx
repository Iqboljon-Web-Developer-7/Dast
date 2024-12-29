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

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." })
    .regex(/[A-Z]/, {
      message: "Password must include at least one uppercase letter.",
    })
    .regex(/[a-z]/, {
      message: "Password must include at least one lowercase letter.",
    })
    .regex(/[0-9]/, { message: "Password must include at least one number." })
});

export function LoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3 min-w-72"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-normal text-secondary-grey-600 text-[.8125rem]">
                enter email or username
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
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-normal text-secondary-grey-600 text-[.8125rem]">
                enter your password
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
          type="submit"
          className="w-full shadow-lg relative !mt-5 py-5 font-normal bg-gradient-to-b from-secondary-purple-900 to-secondary-purple-600 rounded-xl hover:brightness-110 active:-bottom-[.125rem] active:shadow-none transition-all duration-300"
        >
          Login
        </Button>
      </form>
    </Form>
  );
}
