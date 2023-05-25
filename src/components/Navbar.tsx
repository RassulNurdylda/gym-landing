export const Navbar = () => {
  return (
    <div>
      <header className="header fixed w-full left-0 top-0 filter backdrop-blur-sm bg-black/[0.05] z-40 text-white">
        <div className="mx-auto flex flex-wrap px-5 py-3 flex-col md:flex-row items-center">
          <a className="flex font-bold items-center mb-2 md:mb-0 md:w-1/5">
            <span className="ml-2 text-xl md:text-3xl uppercase">Kush</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base md:text-xl justify-center uppercase md:w-3/5">
            <a href="/#about" className="mr-5">
              Про клуб
            </a>
            <a href="/#photo" className="mr-5">
              Фотогалерея
            </a>
            <a href="/#price" className="mr-5">
              Цены
            </a>
            <a href="/#contact">Контакты</a>
          </nav>
          <p className="flex-col text-lg md:text-xl font-medium mt-2 md:mt-0 justify-end items-center md:w-1/5 ">
            <p>Пн-Пт 07:00 – 23:00</p>
            <p>Сб-Вс 09:00 – 22:00</p>
          </p>
        </div>
      </header>
    </div>
  );
};
