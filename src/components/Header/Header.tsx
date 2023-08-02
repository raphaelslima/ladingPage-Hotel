const Header = () => {
  return (
    <div className="container h-24 flex items-center justify-between">
      <h1 className="text-black-800">LOGO</h1>

      <nav className="hidden md:block">
        <ul className="flex gap-2">
          <li className="text-sm text-gray hover:text-gray-800 hover:underline transition ease-in-out duration-500 cursor-pointer">
            Como reservar
          </li>
          <li className="text-sm text-gray hover:text-gray-800 hover:underline transition ease-out duration-500 cursor-pointer">
            Sobre nós
          </li>
          <li className="text-sm text-gray hover:text-gray-800 hover:underline transition ease-out duration-500 cursor-pointer">
            Informações
          </li>
          <li className="text-sm text-gray hover:text-gray-800 hover:underline transition ease-out duration-500 cursor-pointer">
            Contato
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
