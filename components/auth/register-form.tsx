"use client";

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { RegisterSchema } from "@/schemas"

import { AuthCard } from "./card"
import { Social } from "./social";

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@nextui-org/react"
import Link from "next/link";

export const RegisterForm = () => {
    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    });

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        console.log(values)
    }

    return (
        <AuthCard
            headline="Create a mitism account"
        >
            <Form
                {...form}
            >
                <form
                    className="space-y-2"
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        label="Name"
                                        // placeholder="matthew@mitism.com"
                                        type="text"
                                        classNames={{
                                            inputWrapper: "rounded p-1 h-9",
                                        }}
                                        spellCheck={false}
                                        {...field}
                                    />
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
                                <FormControl>
                                    <Input
                                        label="Email"
                                        // placeholder="matthew@mitism.com"
                                        type="email"
                                        classNames={{
                                            inputWrapper: "rounded p-1 h-9",
                                        }}
                                        spellCheck={false}
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
                                <FormControl>
                                    <Input
                                        label="Password"
                                        type="password"
                                        classNames={{
                                            inputWrapper: "rounded p-1 h-9",
                                        }}
                                        spellCheck={false}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex justify-between items-center gap-4 !mt-5">
                        <Button variant="link" className="text-muted-foreground p-0" asChild>
                            <Link href="/signin">
                                Log in
                            </Link>
                        </Button>
                        <Button className="rounded" type="submit">
                            Sign up
                        </Button>
                    </div>
                </form>
            </Form>
            <Social type="up" />
        </AuthCard>
    )
}