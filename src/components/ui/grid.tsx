import * as React from "react"
import { cn } from "@/lib/utils"

export function Grid({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4", className)} {...props} />
}
