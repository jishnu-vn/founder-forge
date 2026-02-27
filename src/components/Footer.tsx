const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Jishnu V N. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground">
          Built with passion & precision.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
