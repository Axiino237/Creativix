import AnimatedBackground from "@/components/background/AnimatedBackground";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Chatbot from "@/components/chatbot/Chatbot";

const Layout = ({ children }) => {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
      <Chatbot />
    </>
  );
};

export default Layout;