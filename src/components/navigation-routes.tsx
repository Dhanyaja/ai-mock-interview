import { MainRoutes } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router";
// import { NavLink } from "react-router";

interface NavigationRoutesProps {
    isMobile?: boolean;
}


const NavigationRoutes = ({ isMobile = false }: NavigationRoutesProps) => {
    return (
        <ul className={cn("flex items-center gap-6", isMobile && "items-start flex-col gap-8 ml-5")}>
            {MainRoutes.map((route) => (
                <NavLink
                    key={route.href}
                    to={route.href}
                    className={({ isActive }) => isActive ? "font-semibold" : "text-base"}
                    style={({isActive}) => {return isActive ? {color: "black" } : {color: "gray"}}}
                    >
                        {route.label}
                </NavLink>
            ))}
        </ul>
    )
}

export default NavigationRoutes 

