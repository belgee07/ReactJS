const Featured = () => {
  return (
    <div className="flex flex-col gap-9 p-4 max-w-[1170px] w-full">
      <div className="flex items-center gap-4">
        <div className="w-5 h-10 bg-red-600 rounded"></div>
        <div className="text-red-600 text-lg font-medium">Featured</div>
      </div>

      <div className="text-4xl font-semibold">New Arrival</div>

      <div className="flex  gap-7">
        {/* Left section */}
        <div className="relative w-full max-w-[570px] h-[600px]">
          <div className="absolute inset-0 bg-black">
            <img
              className="absolute bottom-0 right-0 object-cover w-full h-full"
              src="./ps5.png"
              alt="PlayStation 5"
            />
            <div className="absolute bottom-0 left-0 p-6 text-white bg-gradient-to-t ">
              <p className="text-xl font-semibold">PlayStation 5</p>
              <p className="mt-2">
                Black and White version of the PS5 coming out on sale.
              </p>
              <p className="mt-4 font-semibold underline cursor-pointer">
                Shop now
              </p>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="flex flex-col gap-7 w-full max-w-[570px]">
          <div className="relative w-full h-[284px] bg-black">
            <div className="absolute inset-0 bg-black">
              <img
                className="absolute bottom-0 right-0 object-cover w-full h-full"
                src="./woman.png"
                alt="Women’s Collections"
              />
              <div className="absolute bottom-0 left-0 p-6 text-white bg-gradient-to-t ">
                <p className="text-xl font-semibold">Women’s Collections</p>
                <p className="mt-2">
                  Featured women collections that give you another vibe.
                </p>
                <p className="mt-4 font-semibold underline cursor-pointer">
                  Shop now
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-7">
            <div className="relative w-full max-w-[270px] h-[284px] bg-black">
              <div className="absolute flex justify-center items-center inset-0 bg-black">
                <img
                  className="w-[210px] h-[222px]"
                  src="./speaker.png"
                  alt="Speakers"
                />
                <div className="absolute bottom-0 left-0 p-6 text-white bg-gradient-to-t ">
                  <p className="text-xl font-semibold">Speakers</p>
                  <p className="mt-2">Amazon wireless speakers</p>
                  <p className="mt-4 font-semibold underline cursor-pointer">
                    Shop now
                  </p>
                </div>
              </div>
            </div>

            <div className="relative w-full max-w-[270px] h-[284px] bg-black">
              <div className="absolute flex justify-center items-center inset-0 bg-black">
                <img
                  className="w-[210px] h-[222px]"
                  src="./gucci.png"
                  alt="Gucci Perfume"
                />
                <div className="absolute bottom-0 left-0 p-6 text-white bg-gradient-to-t ">
                  <p className="text-xl font-semibold">Perfume</p>
                  <p className="mt-2">GUCCI INTENSE OUD EDP</p>
                  <p className="mt-4 font-semibold underline cursor-pointer">
                    Shop now
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
