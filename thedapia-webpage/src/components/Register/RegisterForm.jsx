const RegisterForm = () => {
  return (
    <div class="relative m-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-2xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
      <div class="w-full">
        <div class="text-center">
          <h1 class="text-3xl font-semibold text-gray-900">Crear Cuenta</h1>
          <p class="mt-2 text-gray-500">
            Registrate para comenzar tus compras!
          </p>
        </div>
        <div class="mt-5">
          <form action="">
            <div class="relative mt-6">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="name"
                class="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
              />
              <label
                for="name"
                class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Nombre
              </label>
            </div>
            <div class="relative mt-6">
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="lastname"
                class="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
              />
              <label
                for="lastname"
                class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Apellido
              </label>
            </div>
            <div class="relative mt-6">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                class="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                autocomplete="NA"
              />
              <label
                for="email"
                class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Dirección de correo electronico
              </label>
            </div>
            <div class="relative mt-6">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                class="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
              />
              <label
                for="password"
                class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Contraseña
              </label>
            </div>
            <div class="relative mt-6">
              <input
                type="password"
                name="password2"
                id="password2"
                placeholder="Password2"
                class="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
              />
              <label
                for="password2"
                class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Confirmar Contraseña
              </label>
            </div>

            <div class="my-6">
              <button
                type="submit"
                class="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
              >
                Crear Cuenta
              </button>
            </div>
            <p class="text-center text-sm text-gray-500">
                Ya tenes cuenta?
                <a
                  href="#!"
                  class="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
                >
                  Inicia Sesion
                </a>
                .
              </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
