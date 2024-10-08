import { useNavigate } from "react-router-dom";
import Align from "../Components/Align";
import Black from "../Components/Black";
import Describe from "../Components/Describe";
import Footer from "../Components/Footer";
import LandingCard from "../Components/LandingCard";
import Navbar from "../Components/Navbar";
import Para from "../Components/Para";
import Types from "../Components/Types";

const LandingPage = () => {
  const title = "Award-winning development studio based in Denmark.";
  const description =
    "We are a development studio working at the intersection of design and technology. It’s a really busy intersection though — a lot of our staff have been involved in hit and runs.";
  const title1 = "Harnessing technology for a brighter future";
  const description1 =
    "We believe technology is the answer to the world’s greatest challenges. It’s also the cause, so we find ourselves in a bit of a catch-22 situation.";
  const title2 = "We help you identify, explore and respond to new opportunities.";
  const description2 =
    "As long as those opportunities involve giving us money to re-purpose old projects — we can come up with an endless number of those.";

  const navigate = useNavigate();
  const handleEvent = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/blogs");
    } else {
      navigate("/signin");
    }
  };

  return (
    <div>
      {/* Pass the button component as a prop */}
      <Navbar logs={<ButtonComponent onClick={handleEvent} />} />
      <Describe title={title} description={description} />
      <Align />
      <Describe title={title1} description={description1} />
      <LandingCard />
      <Para />
      <Describe title={title2} description={description2} />
      <Types />
      <Black />
      <Footer />
    </div>
  );
};

// ButtonComponent now takes onClick as a prop and handles the click event
const ButtonComponent = ({ onClick }:any) => {
  return <button onClick={onClick} className="border border-slate-600 hover:bg-slate-900 hover:text-white p-2 rounded-full">Get Started</button>;
};

export default LandingPage;
