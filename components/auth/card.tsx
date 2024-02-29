import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import Image from "next/image";
import Link from "next/link";
import { Social } from "./social";

interface AuthCardProps {
    children: React.ReactNode,
    title?: string,
    backButtonText?: string,
    backButtonAction?: string,
    modal?: boolean,
}

export const AuthCard= ({
    children,
    title,
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
                <p>form here</p>
            </CardContent>
            <CardFooter className="w-full">
                <Social />
            </CardFooter>
        </Card>
    );
}