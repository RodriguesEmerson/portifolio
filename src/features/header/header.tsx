import { Nav } from "./nav";

export function Header() {
   return (
      <header className="flex justify-between items-center bg-(--main-color) h-12 p-2 sm:px-3">
         <div>
            <div className="h-10 w-30 bg-gray-400 rounded-md">
            </div>
         </div>
         <div className="mr-3">
            <Nav />
         </div>
      </header>
   )
}