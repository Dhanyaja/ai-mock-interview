import { BrowserRouter as Router, Route, Routes } from 'react-router'
import PublicLayout from './layouts/public-layout'
import HomePage from './routes/home'
import AuthenticationLayout from './layouts/auth-layout'
import SignInPage from './routes/sign-in'
import SignUpPage from './routes/sign-up'
import ProtectRoutes from './layouts/protected-routes'
import MainLayout from './layouts/main-layout'

function App() {
  return (
    <Router>
      <Routes>
        {/* public routes */}
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
        </Route>

        {/* authentication layout */}
        <Route element={<AuthenticationLayout />}>
          <Route path='/signin/*' element={<SignInPage />} />
          <Route path='/signup/*' element={<SignUpPage />} />
        </Route>

        {/* protected routes */}
        <Route
          element={
            <ProtectRoutes>
              <MainLayout />
            </ProtectRoutes>}>

            {/* add all the protected routes */}
            

        </Route>
      </Routes>
    </Router>
  )
}

export default App
