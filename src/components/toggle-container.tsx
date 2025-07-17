import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import NavigationRoutes from "./navigation-routes"
import { useAuth } from "@clerk/clerk-react"
import { NavLink } from "react-router-dom"

const ToggleContainer = () => {

  const { userId } = useAuth()

  return (
    <Sheet>
      <SheetTrigger className="block md:hidden" asChild >
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle />
        </SheetHeader>
        <NavigationRoutes isMobile />
        {userId &&
          (<NavLink
            to={"/generate"}
            className={({ isActive }) => isActive ? "font-semibold ml-5 mt-3" : "text-base ml-5 mt-3"}
            style={({ isActive }) => { return isActive ? { color: "black" } : { color: "gray" } }}>
            Take An Interview
          </NavLink>)}
      </SheetContent>
    </Sheet>
  )
}

export default ToggleContainer
