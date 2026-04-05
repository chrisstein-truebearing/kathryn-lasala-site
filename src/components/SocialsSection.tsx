import { Mail } from "lucide-react";

const socials = [
  { name: "Instagram", href: "#", label: "@katie.lasala" },
];

const SocialsSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-body mb-4">
          Stay Connected
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-light mb-6">
          Find me <span className="italic">elsewhere</span>
        </h2>
        <div className="w-12 h-px bg-foreground mx-auto mb-12" />

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-300"
            >
              <span className="font-body text-xs tracking-[0.2em] uppercase">
                {s.name}
              </span>
              <span className="font-heading text-lg italic">{s.label}</span>
            </a>
          ))}

          <a
            href="mailto:fatedauthor@gmail.com"
            className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-300"
          >
            <span className="font-body text-xs tracking-[0.2em] uppercase flex items-center gap-2">
              <Mail className="w-3.5 h-3.5" />
              Email
            </span>
            <span className="font-heading text-lg italic">fatedauthor@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialsSection;
