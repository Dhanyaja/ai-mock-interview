import {Footer} from "@/components/footer"
import Header from "@/components/header"
import AuthHandler from "@/handlers/auth-handler"
import { Outlet } from "react-router"

const PublicLayout = () => {
  return (
    <div className="flex flex-col h-full">
      <AuthHandler />
      <Header />

      {/* <Container className="flex-grow"> */}
        {/* <main className="flex-grow"> */}
          <Outlet />
        {/* </main> */}
      {/* </Container> */}

      <Footer />
    </div>
  )
}

export default PublicLayout
