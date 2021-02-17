import PropTypes from "prop-types";
const Header = ({ title }) => {
  return (
    <>
      <h2>{title}</h2>
    </>
  );
};
Header.defaultProps = {
  title: "welcome home !",
};

Header.propTypes = {
  title: PropTypes.string,
};

const heafingStyle = {
  color: "steelblue",
  backgroundColor: "aliceblue",
};
export default Header;
