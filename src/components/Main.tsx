export const Main = () => {
  return (
    <div>
      <div className="header w-full relative bg-[url('/gym.jpg')] bg-center bg-no-repeat h-[1000px] md:h-[806px] pt-20">
        <div className=" bg-black/50 absolute inset-0"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-36 text-white pt-20 lg:p-32 z-10 relative justify-items-center">
          <div className="text-center md:text-left mt-10 ">
            <p className="md:text-3xl text-xl font-semibold">
              Улучшим твою форму в течение месяца.
            </p>
            <p className="md:text-3xl text-xl  mt-5 font-semibold">
              Тренер подберет индивидуально программу.
            </p>
            <p className="md:text-xl text-base  mt-5">880 м2 твоего развития!</p>
            <p className="md:text-3xl text-xl  mt-5 font-semibold">
              +7 777 777 77 77
            </p>
          </div>
          {/* <div className="relative pl-20 text-center ">
            <div className=" p-10 border-4 border-red-600 h-[444px] w-[419px]">
              <p className="p-8 mt-8 text-xl font-semibold">
                Оставляй заявку и получай -50% на первую тренировку
              </p>
              <button className="mt-14 bg-red-600 hover:bg-red-700 text-white font-medium text-2xl py-2 px-8 ">
                Оставить заявку
              </button>
            </div>
          </div> */}
          <div className="max-w-sm overflow-hidden border-4 border-redik text-center">
            <div className="px-6 py-12">
              <div className="font-semibold md:text-xl text-base  mb-2">
                Оставляй заявку и получай -50% на первую тренировку
              </div>
              <button className="mt-20 bg-redik hover:bg-red-700 text-white font-medium md:text-2xl text-base  py-2 px-8 ">
                Оставить заявку
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
