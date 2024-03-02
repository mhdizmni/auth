import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface ErrorNoteProps {
    message?: string | undefined
}
export const ErrorNote = ({
    message
}: ErrorNoteProps) => {
    return (
        message && (
            <div className="bg-destructive/15 p-3 rounded flex items-center gap-x-2 text-sm text-destructive border border-destructive">
                <ExclamationTriangleIcon className="h-4 w-4" />
                <p>{message}</p>
            </div>
        )
    )
}