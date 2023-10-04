import img from "../assets/img.png";
function Footer() {
  return (
    <div className=" bg-yellow-700 bottom-0 w-full ">
      <div className="rounded-tl-[70%]  h-[25vh] bg-yellow-300  bottom-0 w-full pt-10">
        <div className="flex justify-evenly items-start ">
          <img src={img} className="w-[10%]" alt="" />
          <div className="mx auto w-[50ch]">
            <h1 className=" font-bold text-3xl mt-0 mb-3">
              Who are we <span>❔</span>
            </h1>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Corrupti, deserunt. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Modi dignissimos, saepe aliquid maxime
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
