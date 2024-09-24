import BigCard from "../layouts/BigCard";
import TestimonialCarousel from "./TestimonialCarousel";
import ExpertTeam from "../layouts/ExpertTeam";
import VideoBackground from "../layouts/VideoBackground";
import GridGallery from "./GridGallery";
import backgroundvideo from "../assets/videos/backgroundVideo.mp4";
import PatientTestimonials from "./PatientTestimonials";
import CallToAction from "./CallToAction";

const Home = ({ openForm }) => {
  const handleOpenFrom = () => {
    openForm();
  };

  return (
    <>
      <VideoBackground
        videoSrc={backgroundvideo}
        text="Exlusive Beauty Clinic"
        buttonText="Contact us"
        onClick={handleOpenFrom}
      />
      <BigCard
        title="Welcome"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        imageSrc="https://images.pexels.com/photos/18252405/pexels-photo-18252405/free-photo-of-smiling-doctor-sitting-with-smartphone-and-tablet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <TestimonialCarousel />
      <GridGallery />
      <ExpertTeam />
      <PatientTestimonials />
      <CallToAction openForm={openForm} />
    </>
  );
};

export default Home;
