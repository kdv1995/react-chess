import { Figure } from "models/figures/Figure";
import React, { FC } from "react";

interface LostFiguresProps {
  title: string;
  figures: Figure[];
}

const LostFigures: FC<LostFiguresProps> = ({ title, figures }) => {
  return (
    <div className="lost">
      <h3>{title}</h3>
      {figures.map((figure) => (
        <div key={figure.id}>
          {figure.name}{" "}
          {figure.logo && (
            <img src={figure.logo} width={25} height={25} alt="lostFigure" />
          )}
        </div>
      ))}
    </div>
  );
};

export default LostFigures;
