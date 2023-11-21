type HeaderProps = {
  bgImage: string;
  title: string;
};

const Header = ({ bgImage, title }: HeaderProps) => {
  return (
    <header
      className="flex h-80  flex-col items-center justify-center bg-center text-3xl font-bold text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {title}
    </header>
  );
};

export default Header;
