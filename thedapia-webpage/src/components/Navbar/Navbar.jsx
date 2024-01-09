import Logo from "../../img/thedapia-logo.png";

const Navbar = () => {
  return (
    <nav class="flex sticky w-screen h-36 top-0">
      <div class="absolute top-0 flex w-screen h-24 bg-fuchsia-400 justify-between border-b-2">
        <div class="w-16 h-16 m-auto">
          <img src={Logo} alt="" />
        </div>

        <div class="w-1/2 h-12 m-auto relative flex">
          <input
            type="search"
            className="w-full pl-4 rounded-l-2xl outline-none"
            placeholder="Buscar productos..."
          />
          <button
            class="w-16 rounded-r-2xl bg-white flex items-center justify-center"
            type="button"
          >
            <svg class="w-7 h-7" viewBox="0 0 1000 1000">
              <path
                class="path1"
                d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 
                                            55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 
                                            140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 
                                            79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 
                                            218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"
              ></path>
            </svg>
          </button>
        </div>

        <div class="w-44 h-16 bg-amber-200 m-auto flex items-center justify-around ">
          <div class="w-14 h-14 bg-black  "></div>

          <div class="w-14 h-14 bg-white  "></div>
        </div>
      </div>
      <div class="absolute bottom-0 flex w-screen h-12 bg-emerald-400 flex items-center justify-center ">
        <ul class= "space-x-14">
            <li class="inline-block"> <a href="" class="text-lg text-black  hover:text-white">Inicio</a> </li>
            <li class="inline-block"> <a href="" class="text-lg text-black  hover:text-white">Catalogo</a> </li>
            <li class="inline-block"> <a href="" class="text-lg text-black  hover:text-white">Juguetes</a> </li>
            <li class="inline-block"> <a href="" class="text-lg text-black  hover:text-white">Contacto</a> </li>
            <li class="inline-block"> <a href="" class="text-lg text-black  hover:text-white">Nosotros</a> </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
