import LandingCards from "../Components/LandingCards";
import LearnSVG from "./learn.svg"

const LandingPage = () => {
  return (
    <div>
      <div className="flex justify-center p-52">
        <div className="py-12 text-3xl slide-in-fwd-center">
          <h1 className="font-bold">Ahlan Wa Sahlan</h1>
          <h1 className="text-xl">
            Akses Materi TIK dan Bahasa Inggris serta Artikel bermanfaat di sini
          </h1>
        </div>
        <div className="slide-in-fwd-center2">
            <img src={LearnSVG} width="400px" alt="orang baca buku"/>
        </div>
      </div>
      <div className="pb-10">        
      <LandingCards />
      </div>
    </div>
  );
};
export default LandingPage;
