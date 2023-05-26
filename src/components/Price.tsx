const Price = () => {
  return (
    <div>
      {" "}
      <div className="px-8 mx-auto py-24">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8 p-6">
          <div className="bg-gradient-to-r from-redik to-recik rounded-xl text-center items-center pt-8">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-white mb-5 flex-shrink-0">
              <img src="icon.png" />
            </div>
            <p className="md:text-3xl text-xl font-semibold mt-6 ">
              12 тренировок
              <br /> (месячный)
            </p>
            <p className="md:text-2xl text-lg font-semibold p-14 text-white">
              30 000 тг
            </p>
          </div>
          <div className=" bg-gradient-to-r from-redik to-recik rounded-lg text-center items-center pt-8">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-white mb-5 flex-shrink-0">
              <img src="icon.png" />
            </div>
            <p className="lg:text-3xl text-xl font-semibold mt-6">
              Утренний 12 тренировок
              <br /> с 8:00-13:00
            </p>
            <p className="md:text-2xl text-lg font-semibold p-10 text-white">
              27 000 тг
            </p>
          </div>
          <div className="bg-gradient-to-r from-redik to-recik rounded-lg text-center items-center pt-8">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-white mb-5 flex-shrink-0">
              <img src="icon.png" />
            </div>
            <p className="lg:text-3xl text-xl font-semibold mt-6">
              Безлимит
              <br /> (месячный)
            </p>
            <p className="md:text-2xl text-lg font-semibold p-10 text-white">
              33 000 тг{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
