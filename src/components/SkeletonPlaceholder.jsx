import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonPlaceholder = () => {
  return (
    <div className="grid gap-4">
      {Array.from({ length: 10 }).map((_, index) => (
        <Skeleton key={index} className="h-24 w-full" />
      ))}
    </div>
  );
};