export const Info = () => {
  return (
    <div>
      <div className="w-full relative bg-redik  md:h-1 pt-5">
        <div className="w-full relative bg-black  lg:h-[1000px] pt-10">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 text-white ">
            <div className="md:p-24 p-8 lg:mt-24">
              <p className="md:text-4xl text-2xl font-semibold">Про KUSH</p>
              <p className="md:text-2xl text-xl font-medium mt-10">
                В спортивном клубе «KUSH» — физические занятия обязательно
                изменят вашу жизнь к лучшему. Вы имеете прекрасную возможность
                улучшить физическую форму, сбросить лишний вес, придайте больше
                выносливости своим мышцам, сформировать такое тело, о котором вы
                всегда мечтали. Это придаст большой толчок вашей самооценке и
                вере в свои силы.
              </p>
            </div>
            <div className=" ">
              <img src="kacok.png" className="lg:mt-44 xl:mt-10 xl:pl-52  2xl:mt-1 md:pl-20" />
            </div>
          </div>
        </div>
        <div className="w-full relative bg-redik  md:h-1 pt-5 z-10"></div>
      </div>
    </div>
  );
};
