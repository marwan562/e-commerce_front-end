import { z } from "zod";

const logInSchema = z.object({
  first_name: z.string().min(1, { message: "First name is required" }),
  passwoed: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, {
      message: "Password should be contain at least 1 special character",
    }),
});

type TLogInTypes = z.infer<typeof logInSchema>;

export { logInSchema, type TLogInTypes };
