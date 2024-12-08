import { cn } from "../lib/utils";
import NextLink from "next/link";

interface LinkProps extends React.ComponentProps<typeof NextLink> {
  className?: string;
}

export function Link({ className, ...props }: LinkProps) {
  return (
    <NextLink
      className={cn(
        "text-blue-500 hover:underline hover:text-blue-600 transition-colors",
        className
      )}
      {...props}
      target="_blank"
      rel="noopener noreferrer"
    />
  );
}
