import Container from "../ui/Container";

const Header = () => {
  const navLinks = ["Home", "Categories", "History"];
  return (
    <header className="py-2">
      <Container>
        {/* container for the logo and links/actions */}
        <div className="flex justify-between">
          {/* logo */}
          <div>
            <h2 className="text-3xl font-bold text-primary">Revyze</h2>
          </div>

          {/* container for the nav and actions */}
          <div className="flex justify-between gap-6">
            <ul className="flex gap-2 items-center">
              {navLinks.map((link, index) => {
                return (
                  <li key={index}>
                    <a href="" className="hover:text-primary-hover transition-all duration-200">{link}</a>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center justify-center">
              <button>Login</button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
