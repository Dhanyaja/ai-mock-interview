import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../components/ui/tooltip"
import { Button } from "./ui/button";
import { Loader } from "lucide-react";

type ButtonVariant =
    | "ghost"
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | null
    | undefined;

interface TooltipButtonProps {
    content: string;
    icon: React.ReactNode;
    onClick: () => void;
    buttonVariant?: ButtonVariant;
    buttonClassName?: string;
    delay?: number;
    disabled?: boolean;
    loading?: boolean;
}

export const TooltipButton = ({
    content,
    icon,
    onClick,
    buttonVariant = "ghost",
    buttonClassName = "bg-white",
    delay = 0,
    disabled = false,
    loading = false
}: TooltipButtonProps) => {
    return (
        <TooltipProvider delayDuration={delay}>
            <Tooltip>
                <TooltipTrigger className={disabled ? "cursor-not-allowed" : "cursor-pointer"} asChild>
                    <Button 
                        size={"icon"}
                        disabled={disabled}
                        variant={buttonVariant}
                        className={buttonClassName}
                        onClick={onClick}
                        style={{backgroundColor : "white", border: "none", outline: "none" }}
                    >
                        {loading ? (
                            <Loader className="min-w-4 min-h-4 animate-spin text-emerald-400" />
                        ) : (
                            icon
                        )}
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{loading ? "Loading..." : content}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}