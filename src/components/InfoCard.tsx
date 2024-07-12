import React, { FC } from "react";

type InfoCardProps = {
  title: string;
  paragraph: string;
};

export const InfoCard: FC<InfoCardProps> = ({
  title,
  paragraph,
}: InfoCardProps) => (
  <div>
    <h2>{title}</h2>
    <p>{paragraph}</p>
  </div>
);
