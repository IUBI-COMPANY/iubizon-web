import React from "react";

interface Props {
  children: React.ReactNode;
}

export const ContentWrapper = ({ children }: Props): React.ReactNode => (
  <div className="w-full max-w-[1370px] m-auto">{children}</div>
);
