import { NavLink } from "react-router-dom";
import { LayoutGrid, Clapperboard, Tv, Bookmark } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

// eslint-disable-next-line react/prop-types
const MainLayout = ({ children }) => {
  return (
    <div className="flex items-start gap-9 mt-8 ml-8">
      <aside className="h-[91vh] p-8 w-24 bg-[#161D2F] rounded-2xl">
        <NavLink to='/'>
          <img src="/logo.svg" alt="Logo" />
        </NavLink>
        {/* <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
            <button>Hover</button>
         </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider> */}
        <div className="flex h-full flex-col justify-between">
          <ul className="flex flex-col items-center gap-10">
            <li className="mt-[75px]">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                     <NavLink to='/'>
                        <LayoutGrid className="hover:stroke-[#9fabca]" color="#5A698F" />
                     </NavLink>
                  </TooltipTrigger>
                  <TooltipContent side='right'>
                    Home
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
            </li>
            <li>
            <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <NavLink to='/movies'>
                        <Clapperboard className="hover:stroke-[#9fabca]" color="#5A698F" />
                     </NavLink>
                  </TooltipTrigger>
                  <TooltipContent side='right'>
                    Movies
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
            </li>
            <li>
            <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                  <NavLink to='/'>
                <Tv className="hover:stroke-[#9fabca]" color="#5A698F" />
              </NavLink>
                  </TooltipTrigger>
                  <TooltipContent side='right'>
                    TV
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
            </li>
            <li>
            <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                  <NavLink to='/'>
                <Bookmark className="hover:stroke-[#9fabca]" color="#5A698F" />
              </NavLink>
                  </TooltipTrigger>
                  <TooltipContent side='right'>
                    Bookmarks
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
            </li>
          </ul>
          <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                  <NavLink to='/profile'>
                      <Avatar>
                         <AvatarImage src="https://github.com/shadcn.png" />
                         <AvatarFallback>FN</AvatarFallback>
                      </Avatar>
                  </NavLink>
                  </TooltipTrigger>
                  <TooltipContent side='top'>
                    Profile
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
         
        </div>
      </aside>
      <main>
        {children}
      </main>
    </div>
  )
}

export default MainLayout;
