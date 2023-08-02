import hotel1 from "../../img/hotel-1.jpeg";
import hotel2 from "../../img/hotel-2.jpeg";
import hotel3 from "../../img/hotel-3.jpeg";
import hotel4 from "../../img/hotel-4.jpeg";
import Shadow from "../../img/image-shadow.png";

const Resorts = () => {
  return (
    <div className="container mx-auto p-4 ">
      <h3 className="text-2xl text-center text-gray-500 font-semibold mb-8">
        Conheça mais resorts
      </h3>
      <div className="grid grid-cols-4 grid-rows-4 gap-6 ">
        <div className="col-span-4 row-span-1 rounded-md overflow-hidden relative md:col-span-2 md:row-span-2 ">
          <p className="absolute bottom-0 p-4 text-white  font-bold z-20">
            Beach Park Resort
          </p>
          <img
            src={Shadow}
            alt="Sombra"
            className="absolute bottom-0 left-0 right-0 h-20 z-10"
          />
          <img
            src={hotel1}
            alt="Hotel 1"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="col-span-4 row-span-1 rounded-md overflow-hidden relative md:col-span-2 md:row-span-2">
          <p className="absolute bottom-0 p-4 text-white font-bold z-20">
            Salinas Maragogi Resort
          </p>
          <img
            src={Shadow}
            alt="Sombra"
            className="absolute bottom-0 left-0 right-0 h-20 z-10"
          />
          <img
            src={hotel2}
            alt="Hotel 2"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="col-span-4 row-span-1 rounded-md overflow-hidden relative md:col-span-2 md:row-span-2">
          <p className="absolute bottom-0 p-4 text-white font-bold z-20">
            Grand Palladium
          </p>
          <img
            src={Shadow}
            alt="Sombra"
            className="absolute bottom-0 left-0 right-0 h-20 z-10"
          />
          <img
            src={hotel3}
            alt="Hotel 3"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="col-span-4 row-span-1 rounded-md overflow-hidden relative md:col-span-2 md:row-span-2">
          <p className="absolute bottom-0 p-4 text-white font-bold z-20">
            Arrail Eco Resort
          </p>
          <img
            src={Shadow}
            alt="Sombra"
            className="absolute bottom-0 left-0 right-0 h-20 z-10"
          />
          <img
            src={hotel4}
            alt="Hotel 4"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Resorts;
