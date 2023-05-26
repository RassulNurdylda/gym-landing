const About = () => {
  return (
    <div>
      <div className="px-8 mx-auto py-24">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-3xl tracking-widest font-bold mb-4 uppercase">
            Наши преимущества
          </h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg mb-4">
            Мы организовали зоны клуба для вашего комфорта во время тренировок и
            отдыха.
          </p>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">
            Профессиональные тренажеры и современная система вентиляции - для
            самых требовательных любителей здорового образа жизни.
          </p>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8 p-6">
          <div className="bg-gradient-to-r from-redik to-recik rounded-xl text-center items-center pt-8">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-white mb-5 flex-shrink-0">
              <img src="icon.png" />
            </div>
            <p className="md:text-3xl text-xl font-semibold mt-6">1500 м²</p>
            <br />
            <p className="md:text-xl text-lg font-normal p-14">
              Площадь спортивного клуба
            </p>
          </div>
          <div className=" bg-gradient-to-r from-redik to-recik rounded-lg text-center items-center pt-8">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-white mb-5 flex-shrink-0">
              <img src="icon.png" />
            </div>
            <p className="lg:text-3xl text-xl font-semibold mt-6">
              Квалифицированные <br /> тренера
            </p>
            <p className="md:text-xl text-lg font-normal p-10">
              Заслуженные мастера спорта, мастера спорта международного класса,
              мастера спорта
            </p>
          </div>
          <div className="bg-gradient-to-r from-redik to-recik rounded-lg text-center items-center pt-8">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-white mb-5 flex-shrink-0">
              <img src="icon.png" />
            </div>
            <p className="lg:text-3xl text-xl font-semibold mt-6">
              Профессиональное <br /> оборудование
            </p>
            <p className="md:text-xl text-lg font-normal p-10">
              Новое профессиональное американское и итальянское оборудование
            </p>
          </div>
        </div>
        <div className="text-center">
          <button className="mt-10 bg-redik hover:bg-red-700 text-white font-medium md:text-2xl text-xl  py-2 px-8 ">
            Оставить заявку
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
