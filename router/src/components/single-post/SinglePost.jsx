"use client";
import React from "react";

export const SinglePost = ({ data }) => {
  const { title, cover_image, user, description, published_at } = data;
  return (
    <div className="flex flex-col gap-[32px] w-[800px]">
      <div className="text-2xl">{title}</div>
      <div className="flex items-center gap-6">
        <img
          className="w-[28px] h-[28px] rounded-full"
          src={user.profile_image}
          alt=""
          srcset=""
        />
        <div className="text-sm text-gray-400">{user.name}</div>
        <div className="text-xs text-gray-400">{published_at}</div>
      </div>

      <img
        className="h-[462px] rounded-xl"
        src={cover_image}
        alt=""
        srcset=""
      />
      <p className="text-2xl">{title}</p>
      <p className="text-base text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus odio
        beatae consequatur! Quibusdam, obcaecati quos. Distinctio quidem
        assumenda, quod officia magnam veritatis, repellendus, minus
        perspiciatis labore delectus aut dicta repudiandae facilis quisquam!
        Provident veritatis voluptatem, consequatur veniam velit accusamus at
        esse corporis repudiandae atque blanditiis quo laudantium optio quisquam
        rerum ipsam ad necessitatibus. Vero laborum nulla, temporibus error
        repellendus cupiditate!
      </p>
      <p className="text-2xl">{description}</p>
      <p className="text-base text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam atque
        fugiat laudantium ad hic, saepe rem accusamus quam doloribus beatae
        corporis similique quod, quae sequi exercitationem quo consequatur ab
        iure, impedit maiores dolore dolores sed facere. Vero nostrum eligendi
        quidem dicta excepturi. Aliquam, molestias laborum? Aliquam quas qui
        maxime earum?
      </p>
      <p className="text-2xl">{title}</p>
      <p className="text-base text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt autem
        voluptatem eaque aliquid doloremque pariatur tenetur tempora, nesciunt
        ex iste. Reprehenderit, eveniet laborum. Tenetur, blanditiis laboriosam
        harum doloribus inventore ipsum atque dolorem quasi ab? Harum quibusdam
        suscipit tempore, quis dolor recusandae laudantium nemo ex excepturi
        ullam reiciendis veritatis eaque illum earum pariatur iste accusamus
        similique odio, enim reprehenderit consequuntur sed omnis odit! A, iste
        incidunt, autem fuga assumenda animi exercitationem consectetur nesciunt
        unde officia est accusamus velit numquam ut molestias?
      </p>
    </div>
  );
};
