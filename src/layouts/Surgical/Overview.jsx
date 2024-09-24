import CallToAction from "../../components/CallToAction";
import CardDetails from "../../components/CardDetails";
import imageWoman from "../../assets/img/womanoverview.jpg";

const Overview = ({ openForm }) => {
  return (
    <div className="flex-col pt-20 justify-center items-center min-h-screen">
      <CardDetails
        imageSrc={imageWoman}
        title="Surgical"
        subtitle="overview"
        sectionTitle="Lip Lift"
        description="A lip lift is a cosmetic surgical procedure designed to enhance the appearance of the upper lip by reducing the distance between the nose and the upper lip. This results in a more pronounced and youthful look by increasing the amount of pink lip tissue that is visible. The procedure is particularly popular among individuals seeking to improve the balance and proportion of their facial features."
        procedureTitle="What to Expect:"
        procedureDetails="The lip lift involves making a small incision under the base of the nose (subnasal) and removing a strip of skin. This lifts the upper lip, exposing more of the natural lip tissue. The procedure is typically performed under local anesthesia and is minimally invasive."
        benefitsTitle="Benefits:"
        benefits={[
          "Enhances the natural shape of the lips.",
          "Creates a fuller and more youthful appearance.",
          "Reduces the need for frequent lip fillers.",
          "Improves the overall balance and harmony of facial features.",
        ]}
        recoveryTitle="Recovery:"
        recoveryDetails="Recovery time is relatively quick, with most patients returning to normal activities within a week. Swelling and bruising are common but usually subside within a few days."
        additionalInfo="At Max Clinique, our experienced surgeons use the latest techniques to ensure natural-looking results with minimal scarring. Consult with our specialists to see if a lip lift is the right option for you."
        relatedProceduresTitle="Related Procedures:"
        relatedProcedures={[
          "Brow Lift",
          "Bichectomy",
          "Lipofilling Full Face",
          "Rhinoplasty (Rhino-filler)",
          "Chin Filler",
          "Malar Filler",
        ]}
      />
      <CallToAction openForm={openForm} />
    </div>
  );
};

export default Overview;
