import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Beauty from "./components/Beauty";
import Blogs from "./components/Blogs";
import Services from "./components/Services";
import Location from "./layouts/Location";
import NotFoundPage from "./layouts/NotFoundPage";
import BreastRecontruction from "./components/BreastRecontruction";
import BeforeAndAfter from "./components/BeforeAndAfter";
import ExlusiveLiveStyle from "./components/ExlusiveLiveStyle";
import DoctorDetails from "./layouts/DoctorDetails";
import Overview from "./layouts/Surgical/Overview";
import Breast from "./layouts/Surgical/Breast";
import Body from "./layouts/Surgical/Body";
import Eyes from "./layouts/Surgical/Eyes";
import Face from "./layouts/Surgical/Face";
import Contacts from "./models/Contacts";

const App = () => {
  const [showForm, setShowForm] = useState(false);

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout openForm={openForm}>
                <Home openForm={openForm} />
              </Layout>
            }
          />
          <Route
            path="/aboutus"
            element={
              <Layout openForm={openForm}>
                <About openForm={openForm} />
              </Layout>
            }
          />
          <Route
            path="/beautyallure"
            element={
              <Layout openForm={openForm}>
                <Beauty openForm={openForm} />
              </Layout>
            }
          />
          <Route
            path="/livestyle"
            element={
              <Layout openForm={openForm}>
                <ExlusiveLiveStyle openForm={openForm} />
              </Layout>
            }
          />
          <Route
            path="/breastreconstruction"
            element={
              <Layout openForm={openForm}>
                <BreastRecontruction openForm={openForm} />
              </Layout>
            }
          />
          <Route
            path="/blog"
            element={
              <Layout openForm={openForm}>
                <Blogs openForm={openForm} />
              </Layout>
            }
          />
          <Route
            path="/services"
            element={
              <Layout openForm={openForm}>
                <Services openForm={openForm} />
              </Layout>
            }
          />

          <Route
            path="/findus"
            element={
              <Layout openForm={openForm}>
                <Location openForm={openForm} />
              </Layout>
            }
          />
          <Route
            path="/beforeandafter"
            element={
              <Layout openForm={openForm}>
                <BeforeAndAfter openForm={openForm} />
              </Layout>
            }
          />
          <Route
            path="/doctor/:id"
            element={
              <Layout openForm={openForm}>
                <DoctorDetails openForm={openForm} />
              </Layout>
            }
          />
          <Route
            path="/surgical/overview"
            element={
              <Layout openForm={openForm}>
                <Overview openForm={openForm} />
              </Layout>
            }
          />
          <Route
            path="/surgical/breast"
            element={
              <Layout openForm={openForm}>
                <Breast openForm={openForm} />
              </Layout>
            }
          />
          <Route
            path="/surgical/body"
            element={
              <Layout openForm={openForm}>
                <Body openForm={openForm} />
              </Layout>
            }
          />
          <Route
            path="/surgical/eyes"
            element={
              <Layout openForm={openForm}>
                <Eyes openForm={openForm} />
              </Layout>
            }
          />
          <Route
            path="/surgical/face"
            element={
              <Layout openForm={openForm}>
                <Face openForm={openForm} />
              </Layout>
            }
          />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>

      {showForm && <Contacts closeForm={closeForm} />}
    </>
  );
};

export default App;
