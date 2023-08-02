import BannerImg from "../../img/hero-image-1.png";
import Search from "../Search/Search";

const Banner = () => {
  return (
    <div
      className="container mx-auto px-4 flex flex-col items-center justify-center gap-1"
      style={{ backgroundImage: `url(${BannerImg})`, height: 450 }}
    >
      <h2 className="text-gray-100 text-3xl">Onde você quer ir?</h2>
      <p className="text-green-100 text-lg">
        Escolha os melhores estados e cidade para achar os melhores resorts.
      </p>

      <Search />
    </div>
  );
};

export default Banner;
