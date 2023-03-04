import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <main className="min-h-screen">
      <Header />
      {children}
    </main>
  );
};

export default Layout;
