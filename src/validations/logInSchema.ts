import { z } from "zod";

const logInSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email(),
  password: z.string().min(1, { message: "Password is required" }),
});

type TLogInTypes = z.infer<typeof logInSchema>;

export { logInSchema, type TLogInTypes };
