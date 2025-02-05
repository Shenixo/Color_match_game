import { Link } from "react-router-dom";
import "./Tab.css";
import PropTypes from "prop-types";
import { TabClick } from "../Sound/Sound";
const Tab = ({ content, path = "", }) => {
  return (
    <Link to={path} style={{ textDecoration: "none" }}>
      <div
        onClick={() => {
          onClickTab();
          TabClick();
        }}
        className="tab"
      >
        <h1>{content}</h1>
      </div>
    </Link>
  );
};

Tab.propTypes = {
  content: PropTypes.node.isRequired,
  path: PropTypes.string,
  onClickTab: PropTypes.func,
};

export default Tab;
