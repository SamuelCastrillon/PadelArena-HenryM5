import React from "react";
import Link from "next/link";

export interface CristalCardProps {
  children: React.ReactNode;
  className?: string;
  href: string;
}

export const Card: React.FC<CristalCardProps> = ({ href, className, children }) => {
  return (
    <Link href={href}>
      <div
        className={`p-6 rounded-lg backdrop-filter backdrop-blur-lg bg-white/30 border border-white/30 shadow-lg shadow-b ${className}`}>
        <div className="text-center text-white">{children}</div>
      </div>
    </Link>
  );
};

export default Card;
