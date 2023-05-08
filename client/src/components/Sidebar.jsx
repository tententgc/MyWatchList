import { Disclosure, Transition } from "@headlessui/react";
import iconclose_menu from "../images/icon-close-menu.svg";
const Sidebar = ({ open = false, setOpen }) => {
  return (
    <>
      <Transition show={open}>
        {/* Sliding sidebar */}
        <Transition.Child
          className="fixed right-0 top-0 w-[250px] z-30 h-screen"
          enter="transition ease-in-out duration-300 transform"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <div
            id="sidebar"
            className={`fixed right-0 top-0 w-[250px] h-screen bg-almost-white pt-20 p-8 z-50`}
          >
            <button
              onClick={() => setOpen(false)}
              aria-expanded={open}
              aria-controls="sidebar"
            >
              <img
                className="absolute top-5 right-5"
                src={iconclose_menu}
                alt="Close Menu"
              />
            </button>
            <ul className="flex flex-col space-y-3">
              <li>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex items-center text-left">
                        <span className="mr-4">Collections</span>
                      </Disclosure.Button>
                    </>
                  )}
                </Disclosure>
              </li>
              <li>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex items-center text-left">
                        <span className="mr-4">History</span>
                        
                      </Disclosure.Button>
                    </>
                  )}
                </Disclosure>
              </li>
              <li>Discuss</li>
              <li>About</li>
            </ul>

            <div className="flex flex-col space-y-5 items-center justify-items-center pt-8">
              <div className="hover:text-almost-black cursor-pointer">
                Login
              </div>
              <div className="w-full">
                <button className="w-full border-2 hover:border-almost-black hover:text-almost-black rounded-xl px-4 py-2">
                  Register
                </button>
              </div>
            </div>
          </div>
          {/* ... */}
        </Transition.Child>
        <Transition.Child
          enter="transition-opacity ease-linear duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {/* ... */}
          <div
            onClick={() => setOpen(false)}
            className={`"w-full h-full fixed bg-black opacity-80 z-10 inset-0`}
          ></div>
        </Transition.Child>
      </Transition>
    </>
  );
};

export default Sidebar;
