const Footer = () => {
  return (
    <footer className="border-t border-cyan-100 bg-gradient-to-r from-slate-50 to-cyan-50 py-8">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-sm text-slate-600 font-medium">
          © {new Date().getFullYear()}{" "}
          <span className="font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
            UserHub
          </span>{" "}
          • Powered by React & Tailwind
        </p>
        <p className="text-xs text-slate-500 mt-2">
          Discover amazing user profiles • Built with ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
