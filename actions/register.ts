"use server"

import { z } from "zod";
import { RegisterSchema } from "@/schemas";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validate = RegisterSchema.safeParse(values);

    if (!validate.success) {
        return {
            error: "invalid fields!"
        }
    }
    
    return {
        success: "reg Form is sent!"
    }
}