import { useState, ReactNode } from "react";
import up from "../assets/arriba.png";
import down from "../assets/abajo.png";
import "../styles/DisplayInfo.css";

interface DisplayInfoProps {
  title: string;
  children: ReactNode;
}

export default function DisplayInfo({ title, children }: DisplayInfoProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="displayInfoContainer">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="displayInfoTitleContainer"
      >
        <div className="displayInfoTitle">{title}</div>
        <img src={isOpen ? up : down} alt="arrow" className="displayInfoIcon" />
      </div>
      {isOpen && <div className="displayInfoChildren"> {children}</div>}
    </div>
  );
}
