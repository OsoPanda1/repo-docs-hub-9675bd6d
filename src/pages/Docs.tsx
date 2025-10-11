import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocsSidebar from "@/components/DocsSidebar";
import StarfieldBackground from "@/components/StarfieldBackground";

const Docs = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <StarfieldBackground />
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="flex gap-8">
          <DocsSidebar />
          <main className="flex-1 max-w-4xl glass-effect p-8 rounded-lg border border-aqua/20">
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Docs;
