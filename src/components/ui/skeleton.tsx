// Skeleton component — matches shadcn/ui skeleton exactly
// Source: https://ui.shadcn.com/docs/components/skeleton

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`animate-pulse rounded-md bg-stone-200/80 ${className ?? ''}`}
      {...props}
    />
  )
}

export { Skeleton }
