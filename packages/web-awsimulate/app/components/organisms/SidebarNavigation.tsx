import React, { useState } from 'react';
import { BsArrowLeftShort, BsSearch } from 'react-icons/bs';
import getMainMenus from '../../services/backend/getMainMenus';

const SidebarNavigation: React.FC = () => {
  const [open, setOpen] = useState(false);

  const menus = getMainMenus;

  return (
    <aside
      className={`
      bg-awsimulate-color-blue-dark 
      h-screen
      p-5
      pt-8
      ${open ? 'w-72' : 'w-24'}
      duration-300
      relative
    `}
    >
      <BsArrowLeftShort
        className={`
          bg-awsimulate-color-bg-white
          text-awsimulate-color-blue-dark
          text-3xl
          rounded-full
          border-2
            border-awsimulate-color-blue-dark
          cursor-pointer
          ${!open ? 'rotate-180' : ''}
          absolute
          -right-3
            top-9
        `}
        onClick={() => setOpen(!open)}
      />

      <div className="flex flex-row items-center">
        <img
          src="https://awsimulate.s3.amazonaws.com/imagens/AWSimulate_Logo.png"
          alt="Logo"
          className="w-12 h-12 mr-2"
        />
        <h1
          className={`
            text-awsimulate-color-bg-white
            origin-left 
            text-2xl 
            font-bold 
            duration-300
            ${!open && 'scale-0'}
          `}
        >
          AWSimulate
        </h1>
      </div>

      <div
        className="
        flex  
        items-center
        rounded-md
        bg-awsimulate-color-blue-darkest
        mt-6
        px-4
        py-2
      "
      >
        <BsSearch
          className="
          text-awsimulate-color-gray-dark 
          text-lg 
          block 
          float-left 
          cursor-pointer
          mr-2
        "
        />
        <input
          type="search"
          placeholder="Search"
          className={`
            text-base 
            bg-transparent 
            w-full
            text-awsimulate-color-bg-white
            focus:outline-none
            ${!open && 'hidden'}
          `}
        />
      </div>

      <ul className="pt-2">
        {menus.map((menu, indexMenu) => (
          <li
            key={indexMenu}
            className={`
              text-awsimulate-color-gray-darker
              text-sm
              flex-items-center
              gap-x-4
              cursor-pointer
              p-2
              hover:bg-awsimulate-color-gray-dark
              rounded-md
              mt-2 ${menu.spacing && 'mt-4'}

            `}
          >
            <span
              className={`
              text-awsimulate-color-bg-white
              text-sm
              font-semibold
              block
              mt-4
              ${!open && 'hidden'}
            `}
            >
              {menu.title}
            </span>
            <hr
              className={`
              border-awsimulate-color-blue-dark
              opacity-25
              ${!open && 'hidden'}
            `}
            />

            <ul
              className={`
              ${!open && 'hidden'}
            `}
            >
              {menu.submenu.map((submenu, indexSubMenu) => (
                <li key={indexSubMenu}>
                  <span
                    className={`
                    text-awsimulate-color-bg-white
                    text-sm
                    font-light
                    block
                    mt-4
                  `}
                  >
                    {submenu.title}
                  </span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SidebarNavigation;
