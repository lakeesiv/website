"use client";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import siteConfig from "site.config";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "components/ui/form";
import { Input } from "components/ui/input";
import { Button } from "components/ui/button";
import { Textarea } from "components/ui/textarea";
import { Card } from "components/ui/card";
import { ContactFormValues, contactFormSchema } from "./schema";

export function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  function onSubmit(values: ContactFormValues) {
    console.log(values);
  }

  return (
    <Card className="p-6 md:p-8">
      <h1 className="text-2xl font-extrabold mb-6 text-center">Contact</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-center px-4">
            <div className="hidden md:block">
              <HCaptcha
                sitekey={siteConfig.captchaSiteKey!}
                onVerify={(token, ekey) => form.setValue("token", token)}
                size="normal"
                theme="light"
              />
            </div>
            <div className="md:hidden">
              <HCaptcha
                sitekey={siteConfig.captchaSiteKey!}
                onVerify={(token, ekey) => form.setValue("token", token)}
                size="compact"
                theme="light"
              />
            </div>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </Card>
  );
}
