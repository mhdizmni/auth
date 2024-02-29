import Image from "next/image";
import Link from "next/link";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"

import { Social } from "./social";

interface AuthCardProps {
    children: React.ReactNode,
    title?: string,
    social?: boolean,
    backButtonText?: string,
    backButtonAction?: string,
    modal?: boolean,
}

export const AuthCard= ({
    children,
    title,
    social,
    backButtonText,
    backButtonAction,
    modal,
}: AuthCardProps) => {
    return (
        <Card className="w-[300px] flex flex-col justify-center items-center">
            <CardHeader className="flex flex-col justify-center items-center gap-1">
                <Link
                    href="/"
                >
                    <Image 
                        src="/logo.svg"
                        alt="mitism logo"
                        width={100}
                        height={50}
                    />
                </Link>
                <p className="text-muted-foreground text-sm">
                    action title here
                </p>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            <CardFooter className="w-full flex flex-col items-center justify-center gap-3">
                {social && (
                    <Social />
                )}
                <p className="text-muted-foreground text-sm">
                    back button here
                </p>
            </CardFooter>
        </Card>
    );
}