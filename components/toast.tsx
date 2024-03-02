import { cn } from "@/lib/utils";
import { ExclamationTriangleIcon, CheckCircledIcon, InfoCircledIcon, Cross2Icon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

interface ToastProps {
    message?: string,
    type?: "error" | "success" | "info",
    onClick?: () => void
}
export const Toast = ({
    message,
    type = "success",
    onClick
}: ToastProps) => {
    return (
        <div className={cn(
            "p-3 relative rounded flex items-center gap-x-2 text-sm border text-ye",
            {"text-destructive border-destructive bg-destructive/15": type === "error"},
            {"text-emerald-900 border-emerald-900 bg-emerald-200": type === "success"},
            {"text-yellow-900 border-yellow-900 bg-yellow-200": type === "info"},
        )}>
            {type === "error" && <ExclamationTriangleIcon className="h-4 w-4" />}
            {type === "success" && <CheckCircledIcon className="h-4 w-4" />}
            {type === "info" && <InfoCircledIcon className="h-4 w-4" />}
            <p>{message}</p>
            {onClick && 
                <Button
                    onClick={onClick}
                    className="absolute top-0 right-0 p-1 h-auto"
                    variant="ghost"
                >
                    <Cross2Icon className="h-4 w-4"/>
                </Button>
            }
        </div>
    )
}