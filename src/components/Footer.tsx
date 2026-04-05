const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground">
        <span className="font-heading text-xl italic">K.L.</span>
        <span className="font-body text-xs tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Kathryn LaSala. All rights
          reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
