import { Link } from "react-router-dom";
import "../styles/ErrorScreen.css";

const ErrorPage = () => {
  return (
    <div className="error">
      <h1 className="errorTitle">Oh no, this page doesn't exist! ☹</h1>
      <Link to="/" className="errorLink">
        Go back to home page by clicking here, though! 😛
      </Link>
    </div>
  );
};

export default ErrorPage;
