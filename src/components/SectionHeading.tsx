interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionHeading = ({ title, subtitle, center = true }: SectionHeadingProps) => (
  <div className={`mb-12 ${center ? "text-center" : ""}`}>
    <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">{title}</h2>
    <div className={`w-16 h-1 bg-secondary rounded-full mb-4 ${center ? "mx-auto" : ""}`} />
    {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

export default SectionHeading;
