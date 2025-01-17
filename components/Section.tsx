interface SectionProps {
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
  return <section className="container md:py-20">{children}</section>;
};

export default Section;
