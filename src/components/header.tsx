import { cn } from '@/lib/utils';
import { useAuth } from '@clerk/clerk-react'
import Container from './container';
import LogoContainer from './logo-container';
import NavigationRoutes from './navigation-routes';
import { NavLink } from 'react-router';
import ProfileContainer from './profile-container';
import ToggleContainer from './toggle-container';

const Header = () => {

  const { userId } = useAuth();

  return (
    <header className={cn("w-full border-b duration-150 transition-all ease-in-out")}>
      <Container>
        <div className='flex items-center gap-4 w-full'>

          {/* logo section */}
          <LogoContainer />
          {/* navigation section */}
          <nav className="hidden md:flex items-center gap-3">
            <NavigationRoutes />
            {userId && <NavLink
              to={"/generate"}
              className={({ isActive }) => isActive ? "font-semibold ml-4" : "text-base ml-4"}
              style={({ isActive }) => { return isActive ? { color: "black" } : { color: "gray" } }}
            >
              Take An Interview
            </NavLink>}
          </nav>

          {/* profile section */}
          <div className='ml-auto flex items-center gap-6'>
            {/* profile section */}
            <ProfileContainer />
            {/* mobile toggle section */}
            <ToggleContainer />
          </div>

        </div>
      </Container>
    </header>
  )
}

export default Header