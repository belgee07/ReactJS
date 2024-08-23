import React from "react";

export const Introduction = () => {
  return (
    <div className="bg-gray-50 flex flex-col gap-12 px-12 justify-center ">
      <div className="flex justify-center w-[105px] py-0.5 px-4 rounded-full text-gray-600 bg-gray-200">
        About me
      </div>
      <div className="flex gap-12 ">
        <div className="w-[584px]">
          {/* <div className="w-[400px] h-[480px] z-0 bg-gray-200 "></div> */}

          <img className="w-[400px] h-[480px] z-10" src="pro.jpg" alt="" />
        </div>

        <div className="w-[503px]">
          <h1>Curious about me? Here you have it:</h1>
          <p className="text-grey-600 text-base">
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me. <br />I began my
            journey as a web developer in 2015, and since then, I've continued
            to grow and evolve as a developer, taking on new challenges and
            learning the latest technologies along the way. Now, in my early
            thirties, 7 years after starting my web development journey, I'm
            building cutting-edge web applications using modern technologies
            such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much
            more. <br /> I am very much a progressive thinker and enjoy working
            on products end to end, from ideation all the way to development.
            <br />
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
            <br />
            Finally, some quick bits about me.
          </p>
        </div>
      </div>
    </div>
  );
};
