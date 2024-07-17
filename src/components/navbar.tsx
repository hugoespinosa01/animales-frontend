import Link from 'next/link'
import { PanelsTopLeft } from "lucide-react";

function NavBar() {
  return (
    <div className='z-[50] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40'>
      <div className="container h-14 flex items-center">
        <Link
          href="/animals"
          className="flex justify-start items-center hover:opacity-85 transition-opacity duration-300"
        > 
          <span className="font-bold">Animales</span>
        </Link>

      </div>
    </div>

  )
}

export default NavBar
