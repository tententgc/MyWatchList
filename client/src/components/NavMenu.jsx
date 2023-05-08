import { Menu, Transition } from "@headlessui/react";
import imagearrow_down from "../images/icon-arrow-down.svg";
import icontodo from "../images/icon-todo.svg";
const NavMenu = () => {
  return (
    <nav>
      <ul class="hidden lg:flex lg:space-x-7 lg:ml-14">
        <li>
          <Menu>
            <Menu.Button className="hover:text-almost-black">
              Collections
            </Menu.Button>
          </Menu>
        </li>
        <li>
          <Menu>
            <Menu.Button className="hover:text-almost-black">
              History
            </Menu.Button>
          </Menu>
        </li>
        <li className="cursor-pointer hover:text-almost-black">discuss</li>
        <li className="cursor-pointer hover:text-almost-black">About</li>
      </ul>
    </nav>
  );
};

export default NavMenu;