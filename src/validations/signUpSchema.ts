import { z } from "zod";

const signUpSchema = z
  .object({
    first_name: z.string().min(1, { message: "First name is required" }),
    last_name: z.string().min(1, { message: "Last name is required" }),
    email: z.string().min(1, { message: "Email address is required" }).email(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, {
        message: "Password should be contain at least 1 special character",
      }),
    password_confirmation: z
      .string()
      .min(1, { message: "Password Confirmation is required" }),
  })
  .refine((input) => input.password === input.password_confirmation, {
    message: "Confirm Password does not match Password",
    path: ["password_confirmation"],
  });

type TSignUpTypes = z.infer<typeof signUpSchema>;

export { signUpSchema, type TSignUpTypes };
