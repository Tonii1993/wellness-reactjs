import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, openForm }) => {
  return (
    <>
      <Navbar openForm={openForm} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
