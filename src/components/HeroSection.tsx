import heroImage from "@/assets/hero-mushrooms.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Mushrooms among autumn leaves"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto animate-fade-in">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-primary-foreground/70 mb-6">
           &middot; Author &middot; 
        </p>
        <h1 className="font-heading text-6xl md:text-8xl font-light text-primary-foreground mb-8 leading-tight">
          Kathryn <br />
          <span className="italic font-light">LaSala</span>
        </h1>
        <div className="w-16 h-px bg-primary-foreground/50 mx-auto mb-8" />
        <p className="font-heading text-xl md:text-2xl italic text-primary-foreground/80 font-light">
          Creator of Small and Tall Tales.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
