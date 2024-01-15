import Logo from "../../img/thedapia-logo.png";
import UserIcon from "../../img/user-icon.png";
import CartIcon from "../../img/cart-icon.png";

const Navbar = () => {
  return (
    <nav class="flex sticky w-screen h-36 top-0 z-50">
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

        <div class="w-44 m-auto flex items-center justify-around ">
          <div class="w-12 h-12 ">
            <a href="">
              <img src={UserIcon} alt="" />
            </a>
            
          </div>

          <div class="w-12 h-12 ">
            <a href="">
              <img src={CartIcon} alt="" />
            </a>
            
          </div>
        </div>
      </div>


      <div class="absolute bottom-0 flex w-screen h-12 bg-emerald-400 flex items-center justify-center">
        <ul class= "space-x-14">
            <li class="inline-block"> <a href="" class="text-base text-black  hover:text-white">INICI</a> </li>
            <li class="inline-block"> <a href="" class="text-base text-black  hover:text-white">LIBRERIA</a> </li>
            <li class="inline-block"> <a href="" class="text-base text-black  hover:text-white">JUGUETES</a> </li>
            <li class="inline-block"> <a href="" class="text-base text-black  hover:text-white">MARCAS</a> </li>
            <li class="inline-block"> <a href="" class="text-base text-black  hover:text-white">NOSOTROS</a> </li>
            <li class="inline-block"> <a href="" class="text-base text-black  hover:text-white">CONTACTO</a> </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
