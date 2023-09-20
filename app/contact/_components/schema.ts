import * as z from "zod";

export const contactFormSchema = z.object({
  title: z.string().min(3).max(50),
  message: z.string().min(10).max(500),
  email: z.string().email(),
  name: z.string().min(3).max(50),
  token: z.string(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
