import Header from "../Header/Header";
import PropTypes from 'prop-types';

const Layout = (props) => {
  return (
    <>
      <Header/>
      <main>{props.children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
