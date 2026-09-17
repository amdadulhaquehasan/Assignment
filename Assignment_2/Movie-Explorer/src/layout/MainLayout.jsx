import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div>
      <div className="min-h-screen bg-black bg-[radial-gradient(circle_at_top_right,#2E1065,transparent_40%)]">
        <Navbar />
        <main className="min-h-screen flex justify-center items-center">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}
