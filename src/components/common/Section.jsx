const Section = ({ children, className = "", id }) => {
  return (
    <section id={id} className={`py-20 md:py-32 px-4 md:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;