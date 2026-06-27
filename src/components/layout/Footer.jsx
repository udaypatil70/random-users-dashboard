const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white py-6">
      <div className="mx-auto max-w-7xl text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Random Users Dashboard • Built with React &
        Tailwind CSS
      </div>
    </footer>
  );
};

export default Footer;