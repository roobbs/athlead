import arrow from "../assets/right-arrow.png";
import "../styles/WhiteButton.css";

interface WhiteButtonProps {
  text: string;
}

export default function WhiteButton({ text }: WhiteButtonProps) {
  return (
    <div className="whiteButtonContainer">
      <div className="whiteButton">
        <div>{text}</div>
        <img src={arrow} alt="" className="whiteButtonIcon" />
      </div>
    </div>
  );
}
