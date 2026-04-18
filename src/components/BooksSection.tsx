const books = [
  {
    title: "The Lost Ones",
    subtitle: "Title of Anthology - Coming Soon",
    year: "Fall - 2026",
    description: "Short Story — Urban Fantasy; Dark Fantasy",
  },
];

const BooksSection = () => {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        
        <h2 className="font-heading text-4xl md:text-5xl font-light text-center mb-16">
          Published <span className="italic">Works</span>
        </h2>

        <div className="space-y-0">
          {books.map((book, i) => (
            <div
              key={book.title}
              className="group border-t border-border py-10 flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12"
            >
              <span className="text-muted-foreground font-body text-xs tracking-widest md:w-28 md:shrink-0">
                {book.year}
              </span>
              <div className="flex-1">
                <h3 className="font-heading text-2xl md:text-3xl font-light group-hover:text-accent transition-colors duration-300">
                  {book.title}
                </h3>
                {book.subtitle && (
                  <h4 className="font-heading text-lg md:text-xl font-light italic text-muted-foreground mt-1">
                    {book.subtitle}
                  </h4>
                )}
                {book.description && (
                  <p className="text-muted-foreground font-body text-sm mt-2 tracking-wide">
                    {book.description}
                  </p>
                )}
              </div>
            </div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
