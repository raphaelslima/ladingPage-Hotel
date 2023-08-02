const Search = () => {
  return (
    <form className="w-full mt-4 flex flex-col justify-center items-center gap-4 md:flex-row">
      <select className="bg-gray-50 px-3 py-2 border-gray-300 rounded text-gray-500 cursor-pointer">
        <option value="">Escolha o Estado</option>
      </select>
      <select className="bg-gray-50 px-3 py-2 border-gray-300 rounded text-gray-500 cursor-pointer">
        <option value="">Escolha a cidade</option>
      </select>

      <button className="text-yellow-900 bg-yellow-500 font-medium px-2 py-2 rounded flex flex-row items-center justify-center">
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
        Pesquisar Resorts
      </button>
    </form>
  );
};

export default Search;
