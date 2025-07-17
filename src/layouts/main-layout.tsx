import { Footer } from "@/components/footer"
import Header from "@/components/header"
import { Outlet } from "react-router"

const MainLayout = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* handler to store the user data */}
      <Header />

      <main className="flex-grow">

        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default MainLayout
