
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button";

import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaApple } from "react-icons/fa6";

export const Social = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-2">
            <Separator />
            <div className="w-full flex items-center justify-between gap-1">
                <Button variant="outline" className="w-full">
                    <FcGoogle size={25} />
                </Button>
                <Button variant="outline">
                    <FaApple size={25} />
                </Button>
                <Button variant="outline">
                    <FaGithub size={25} />
                </Button>
            </div>
            <Separator />
        </div>
    )
}