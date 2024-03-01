import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string({
        required_error: "Email is required."
    }).email({
        message: "Invalid email address."
    }),
    password: z.string().min(1, {
        message: "Password is required."
    }),
})

export const RegisterSchema = z.object({
    name: z.string({
        required_error: "Name is required."
    }).min(1, {
        message: "Name is required."
    }),
    email: z.string({
        required_error: "Email is required."
    }).email({
        message: "Invalid email address."
    }),
    password: z.string().min(6, {
        message: "Password must have at least 6 characters."
    }),
})