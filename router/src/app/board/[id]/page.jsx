"use client";

const db = {
  shovgor: {
    profilePic:
      "https://scontent.fuln2-2.fna.fbcdn.net/v/t39.30808-1/452636695_506084738756688_9170457313364813593_n.jpg?stp=c360.0.1200.1200a_dst-jpg_s480x480&_nc_cat=101&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=orMZBhS8q8gQ7kNvgEyoHd5&_nc_ht=scontent.fuln2-2.fna&oh=00_AYDHpPJIktzSq5280JDSsq9PfscuUC6B3ADpaHQtVmMNzQ&oe=66D1A88A",
    coverPic:
      "https://scontent.fuln2-2.fna.fbcdn.net/v/t39.30808-6/452646869_506083152090180_4321313206028606189_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=IPLFRIDE938Q7kNvgEQFtQf&_nc_ht=scontent.fuln2-2.fna&oh=00_AYA5Hp_mGZJnw9AiJgdsPFihEzgYP7pGFaBXJUoqPUE4rw&oe=66D1B1BD",
    username: "Shovgor channel",
    nickname: "yaanaa",
  },
  uzkhu: {
    profilePic:
      "https://scontent.fuln2-2.fna.fbcdn.net/v/t1.6435-9/205151252_567513271107984_227492859844272635_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=0nnrRaAs-x0Q7kNvgHxwy-7&_nc_ht=scontent.fuln2-2.fna&oh=00_AYA8DoRaYB1e2Bd2ojlYqt936Ltz4FRTpWKg5ck1EXgj8g&oe=66F367B1",
    coverPic:
      "https://scontent.fuln2-2.fna.fbcdn.net/v/t1.6435-9/164472035_516116216247690_7349938362276800987_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=D4eD3oxs65UQ7kNvgGDlGhZ&_nc_ht=scontent.fuln2-2.fna&oh=00_AYAIRYOL8O4tq5meMRmI5CaaNx1Rh80Lq2HlxtVkngg4hg&oe=66F36ACF",
    username: "New Hair Style Uzkhu",
    nickname: "eejee",
  },
  jambaa: {
    profilePic:
      "https://scontent.fuln2-2.fna.fbcdn.net/v/t39.30808-6/307505977_3040897042722709_1686564949089907199_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=gs8J_pdnvbsQ7kNvgEQ-2q0&_nc_ht=scontent.fuln2-2.fna&oh=00_AYC6VsC-OaI1yKWo13BxT4A5pMNcEGyf9c1hQE1HPl1AHQ&oe=66D1C58C",
    coverPic:
      "https://scontent.fuln2-2.fna.fbcdn.net/v/t1.6435-9/71044931_1904038943075197_8232923260950413312_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=2a1932&_nc_ohc=s9g4IOsuZLQQ7kNvgF68F1u&_nc_ht=scontent.fuln2-2.fna&oh=00_AYCN3p1HzAeQUFZdkNpW8c1Bnc64FoDyfcE2c0Ya6iveuQ&oe=66F35B73",
    username: "Jambaa",
    nickname: "Nigga",
  },
  tsovoo: {
    profilePic:
      "https://scontent.fuln2-2.fna.fbcdn.net/v/t39.30808-1/457148603_1675982349832527_6958497769675408450_n.jpg?stp=cp6_dst-jpg_s480x480&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=HvYK49hHm2MQ7kNvgEriHoS&_nc_ht=scontent.fuln2-2.fna&_nc_gid=AvjD5YTpUenb391aKBUDFN5&oh=00_AYBf7qpFpoFMG-Ax7CL0GJplnStV9EdKpYYjDkYjUVpBpg&oe=66D2F452",
    coverPic:
      "https://scontent.fuln2-2.fna.fbcdn.net/v/t39.30808-6/319036487_1313076939456405_7208815534923367231_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=SLtsP3NunaAQ7kNvgFQ3LnV&_nc_ht=scontent.fuln2-2.fna&oh=00_AYCr7eDvEKpWYW5BuZiagKyponx5uf_fBjyvxM9GPoUXYw&oe=66D30D0D",
    username: "Tsovoo",
    nickname: "Ganbold",
  },
};

const Board = ({ params }) => {
  const { id } = params;
  const { profilePic, coverPic, username, nickname } = db[id];

  return (
    <div className="flex flex-col items-center h-[1000px] p-4">
      <div className="relative w-full max-w-[900px]">
        <img src={coverPic} className="w-full h-[400px] object-cover" />
        <img
          src={profilePic}
          className="absolute -bottom-20 w-[200px] h-[200px] object-cover rounded-full border-4 border-white"
        />
      </div>
      <div className="flex justify-start flex-col items-start">
        <div className="text-white text-xl font-semibold">{username}</div>
        <div className="text-gray-600">{nickname}</div>
      </div>
    </div>
  );
};

export default Board;
