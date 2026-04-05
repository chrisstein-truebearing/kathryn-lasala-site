import authorPortrait from "@/assets/author-portrait.jpeg";

const BioSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={authorPortrait}
              alt="Author portrait"
              loading="lazy"
              width={800}
              height={1000}
              className="w-full h-full object-cover object-[65%_20%] grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-full h-full border border-accent -z-10" />
        </div>

        <div className="space-y-6">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-body">
            Kathryn LaSala
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground">
            About the <span className="italic">Author</span>
          </h2>
          <div className="w-12 h-px bg-foreground" />
          <div className="space-y-4 text-muted-foreground font-body text-sm leading-relaxed tracking-wide">
            <p>
              Kathryn studied history and art in college, dipping a few toes into the realm of museums before
            diving head first into a master&#39;s in library science. This may account for the many research side
            quests she indulges in while drafting, though it hardly excuses the obscure references littered
            within her works. She began her career moonlighting as a special collections librarian, where she
            developed a love of Pacific Northwest history and a deep respect for its preservation. Kathryn
            now works for a city as its recorder, dedicating her non-writing hours to documenting the twists
            of politics and the dramatic turns in civic life.
            </p>
            <p>
              She primarily writes fantasy tomes, but likes to experiment with normal-sized novels and short
              tales in other genres when inspiration strikes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
