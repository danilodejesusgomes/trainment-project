import { useState} from 'react';
import { BsArrowLeftShort } from "react-icons/bs"

const SidebarNavigation: React.FC = () => {

  const [open, setOpen] = useState(false)

  return (
    <aside className={`
      bg-awsimulate-color-blue-dark 
      h-screen
      p-5
      pt-8
      ${open ? 'w-72' : 'w-24'}
      duration-300
      relative
    `}>
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
          src="/home/danilo-gomes/git-workspace/trainment-project/packages/web-awsimulate/app/assets/AWSimulate_Logo.png" alt="Logo" 
          className="w-10 h-10 border mr-2" />
        { open ?
          <h1 className="text-awsimulate-color-bg-white text-2xl font-bold mt-2">AWSimulate</h1>
        : null 
        }
      </div>
    </aside>
  );
};

export default SidebarNavigation;