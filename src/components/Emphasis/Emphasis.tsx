import emphasisImg from "../../img/featured-img.png";

const Emphasis = () => {
  return (
    <div className="container mx-auto px-4 py-10 text-gray-600">
      <div className="w-full flex flex-col-reverse md:flex-row md:justify-around md:items-center">
        <div className="w-full space-y-4 mt-4 md:mr-4 md:1/2">
          <p className="text-sm text-gray-400 font-medium text-center md:text-left">
            RESORT EM DESTAQUE
          </p>
          <h3 className="text-2xl">Ecoresort Praia do Forte Bahia</h3>
          <p className="text-sm text-gray-400 font-medium">
            Hotel de qualidade 5 estrelas
          </p>
          <p className="text-sm text-gray-400 font-medium">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint quia
            voluptas ad id, hic quis molestiae neque nobis reiciendis, adipisci
            sit tempore excepturi? Cupiditate, voluptate? Ipsum corrupti
            repellendus hic quia.
          </p>
          <p className="text-sm text-gray-400 font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            officia consectetur quod earum veniam.
          </p>

          <button className="text-yellow-900 bg-yellow-500 font-medium px-3 py-2 rounded flex flex-row items-center justify-center">
            Solicitar reserva
            <svg
              className="w-4 h-4 ml-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </button>
        </div>
        <div>
          <img src={emphasisImg} alt="Imagem do Resort em destaque" />
        </div>
      </div>
    </div>
  );
};

export default Emphasis;
