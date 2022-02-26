import Appbar from "../components/Appbar";
import Button from "../components/Common/Button";
import Footer from "../components/Footer";
import LandingLayout from "../layouts/LandingLayout";

const Fans = () => {
  return (
    <LandingLayout>
      <Appbar forCreators />
      <div className="min-h-[870px] flex flex-col items-center justify-center">
        <h1 className="text-center max-w-[800px] text-white text-5xl font-extrabold">
          Monetize your creative work securely
        </h1>
        <p className="text-center max-w-[700px] text-white mt-6">
          Let your most passionate fans support your creative work via monthly
          membership.
        </p>
        <div className="flex items-center justify-center space-x-4 mt-[60px]">
          <Button text="Connect your wallet now" url="/" />
        </div>
      </div>
      <Footer />
    </LandingLayout>
  );
};

export default Fans;
