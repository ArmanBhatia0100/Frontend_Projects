import HeaderMainContent from "./HeaderMainContent";
import Navbar from "./Navbar";
import Overlay from "./Overlay";


const Header = () => {
  return (
    <header className="relative bg-[url('/Desktop-banner.jpg')] z-10 bg-cover min-w-full min-h-screen">
      <Overlay />
      <Navbar />
      <HeaderMainContent />
    </header>
  );
};

export default Header;
