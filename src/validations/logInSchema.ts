import { z } from "zod";

const logInSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, {
      message: "Password should be contain at least 1 special character",
    }),
});

type TLogInTypes = z.infer<typeof logInSchema>;

export { logInSchema, type TLogInTypes };
