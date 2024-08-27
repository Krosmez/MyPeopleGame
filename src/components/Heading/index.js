import "./style.css";

const Heading = ({ As = "h1", children, className }) => {
  return (
    <As className={`heading ${className ? className : ""}`}>{children}</As>
  );
};

export default Heading;
