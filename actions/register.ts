"use server"

import { z } from "zod";
import bcrypt from "bcryptjs";
import { RegisterSchema } from "@/schemas";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validate = RegisterSchema.safeParse(values);

    if (!validate.success) {
        return {
            error: "invalid fields!"
        }
    }

    const { name, email, password } = validate.data;
    const hashedPass = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return {
            error: "This email is already taken and in use."
        }
    }

    await db.user.create({
        data: {
            name,
            email,
            password: hashedPass
        }
    })
    
    return {
        success: "reg Form is sent!"
    }
}