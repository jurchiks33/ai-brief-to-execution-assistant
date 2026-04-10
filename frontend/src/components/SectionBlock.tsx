interface SectionBlockProps {
  title: string;
  items: string[];
}

export default function SectionBlock({ title, items }: SectionBlockProps) {
  return (
    <section className="section-block">
      <h3>{title}</h3>
      {items.length > 0 ? (
        <ul>
          {items.map((item, index) => (
            <li key={`${title}-${index}`}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>No items available.</p>
      )}
    </section>
  );
}