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
    headline?: string,
    social?: boolean,
    backButtonText?: string,
    backButtonAction?: string,
    modal?: boolean,
}

export const AuthCard= ({
    children,
    headline
}: AuthCardProps) => {
    return (
        <Card className="w-[360px] flex flex-col justify-center items-center rounded">
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
                    {headline}
                </p>
            </CardHeader>
            <CardContent className="space-y-4 w-full">
                {children}
            </CardContent>
        </Card>
    );
}