import Image from "next/image";

export const TouchIn = () => {
  return (
    <div className="flex flex-row justify-between container py-10 items-start px-5 max-md:flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h1>Ewt cargo</h1>
        {/* <p className="max-w-72">
          Манай хаяг: Буянтухаа спорт цогцолборын автобусны буудлын ард AERO
          TOWN хотхон 304-р байр 2 тоот
        </p> */}
      </div>
      <div className="flex flex-row w-full max-w-[400px] justify-between gap-10 max-sm:flex-col items-start">
        <div className="flex flex-col gap-2">
          <p>Холбогдох утас:</p>
          <p>☎️ 8821-2494</p>
          <p>☎️ 9641-3355</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <a
            href="https://www.facebook.com/profile.php?id=61584028961848"
            className="flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={"/images/facebook.png"}
              alt="niseh cargo facebook"
              width={25}
              height={24}
            />
            <span className="text-sm">Facebook</span>
          </a>
        </div>
      </div>
    </div>
  );
};
