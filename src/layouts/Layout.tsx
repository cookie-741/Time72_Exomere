import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  h: string;
}

const Layout: React.FC<LayoutProps> = ({ children, h }) => {
  return (
    <div>
      <Header h={h} />
      <div className="bg-white">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
