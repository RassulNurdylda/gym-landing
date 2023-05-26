export const Type = () => {
  return (
    <div className="">
      <div className="w-full relative  ">
        <p className=" md:text-4xl text-2xl font-normal p-24 text-center">
          Направления спортивного <br /> клуба{" "}
          <span className="font-bold">KUSH</span>
        </p>
        <div className="bg-black md:h-52 text-white ">
          <div className="flex md:flex-row flex-col p-5">
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-1 flex flex-col text-center items-center">
              <img src="kot.png" className="mb-2 " />
              <p className="leading-relaxed text-2xl mb-4">Фитнес-бикини </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-1  flex flex-col text-center items-center">
              <img src="kot.png" className="mb-2 " />
              <p className="leading-relaxed text-2xl mb-4">Бодибилдинг </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-1 flex flex-col text-center items-center">
              <img src="kot.png" className="mb-2 " />
              <p className="leading-relaxed text-2xl mb-4">Пауэрлифтинг </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-1 flex flex-col text-center items-center">
              <img src="kot.png" className="mb-2 " />
              <p className="leading-relaxed text-2xl mb-4">Армспорт </p>
            </div>
          </div>
          <div className="text-center lg:mt-6 ">
            <button className="bg-redik hover:bg-red-700 text-white font-medium md:text-2xl text-xl  py-2 px-8 ">
              Оставить заявку
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
