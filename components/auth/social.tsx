
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button";

import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaApple, FaMicrosoft } from "react-icons/fa6";

interface SocialProps {
    type?: "up" | "in"
}

export const Social = ({
    type = "in"
}: SocialProps) => {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-2">
            <div className="flex items-center gap-1 w-full">
                <p className="text-muted-foreground text-xs">or sign {type} via</p>
                <Separator className="flex-1" />
            </div>
            <div className="w-full flex flex-col items-center justify-between gap-1">
                <Button variant="outline" className="w-full rounded">
                    <FcGoogle size={25} />
                </Button>
                <div className="w-full flex items-center justify-between gap-1">
                    <Button variant="outline" className="w-full rounded">
                        <FaGithub size={25} />
                    </Button>
                    <Button variant="outline" className="w-full rounded" disabled>
                        <FaMicrosoft size={25} />
                    </Button>
                    <Button variant="outline" className="w-full rounded" disabled>
                        <FaApple size={25} />
                    </Button>
                </div>
            </div>
        </div>
    )
}