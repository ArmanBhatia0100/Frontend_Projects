// import { FaSquareFacebook } from "react-icons/fa6";
// import { FaInstagramSquare } from "react-icons/fa";
// import { IconContext } from "react-icons";


function Navbar() {
  return (
    <nav className="relative z-30 py-3">
      {/* pl-28 is using to add left margining from the screen */}
      <div className="flex flex-wrap justify-between items-center p-4 pl-28 max-w-screen-xl">
        <h1 className="font-semibold text-[#EAEAEA] text-[48px] whitespace-nowrap self-center">
          GYM
        </h1>

        {/* SOCIAL MEDIA ICONS */}
        <div className="flex space-x-3 md:space-x-0 rtl:space-x-reverse md:order-2">
          {/* facebook Icon */}
          <button type="button" class="m-0 p-0 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="48"
              height="48"
              viewBox="0 0 48 48"
            >
              <path
                fill="#3F51B5"
                d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
              ></path>
              <path
                fill="#FFF"
                d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"
              ></path>
            </svg>
          </button>

          <button type="button" class="m-0 p-0 rounded-full">
            {/* Instagram Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="48"
              height="48"
              viewBox="0 0 48 48"
            >
              <radialGradient
                id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                cx="19.38"
                cy="42.035"
                r="44.899"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#fd5"></stop>
                <stop offset=".328" stop-color="#ff543f"></stop>
                <stop offset=".348" stop-color="#fc5245"></stop>
                <stop offset=".504" stop-color="#e64771"></stop>
                <stop offset=".643" stop-color="#d53e91"></stop>
                <stop offset=".761" stop-color="#cc39a4"></stop>
                <stop offset=".841" stop-color="#c837ab"></stop>
              </radialGradient>
              <path
                fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
              ></path>
              <radialGradient
                id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                cx="11.786"
                cy="5.54"
                r="29.813"
                gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#4168c9"></stop>
                <stop
                  offset=".999"
                  stop-color="#4168c9"
                  stop-opacity="0"
                ></stop>
              </radialGradient>
              <path
                fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
              ></path>
              <path
                fill="#fff"
                d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
              ></path>
              <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
              <path
                fill="#fff"
                d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
              ></path>
            </svg>
          </button>

          {/* HAM BURGER MENU */}
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex justify-center items-center md:hidden hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg w-10 h-10 text-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* NAVBAR MENU */}
        <div
          className="md:flex justify-between items-center md:order-1 hidden w-full md:w-auto"
          id="navbar-cta"
        >
          <ul className="flex md:flex-row flex-col md:space-x-8 rtl:space-x-reverse border-gray-100 md:border-0 mt-4 md:mt-0 p-4 md:p-0 border rounded-lg font-medium">
            <li>
              <a
                href="#"
                className="block md:bg-transparent px-3 py-2 md:p-0 rounded text-[#EAEAEA] text-[24px] md:text-[#EAEAEA] md:dark:text-[#EAEAEA] hover:text-[#699BF7]"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block dark:border-gray-700 md:hover:bg-transparent md:dark:hover:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 md:p-0 rounded text-[#EAEAEA] text-[24px] md:hover:text-[#699BF7] md:dark:hover:text-[#699BF7] dark:hover:text-[#699BF7] dark:text-white"
              >
                Classes
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block dark:border-gray-700 md:hover:bg-transparent md:dark:hover:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 md:p-0 rounded text-[#EAEAEA] text-[24px] md:hover:text-[#699BF7] md:dark:hover:text-[#699BF7] dark:hover:text-[#699BF7] dark:text-white"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block dark:border-gray-700 md:hover:bg-transparent md:dark:hover:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 md:p-0 rounded text-[#EAEAEA] text-[24px] md:hover:text-[#699BF7] md:dark:hover:text-[#699BF7] dark:hover:text-white dark:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
