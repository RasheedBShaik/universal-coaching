const images = [
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1000&q=85",
];

export default function Gallery() {
  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Inside The Academy</span>

          <h2>
            A place designed
            <br />
            <span>for focused learning.</span>
          </h2>
        </div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div
              className={`gallery-image gallery-${index + 1}`}
              key={image}
            >
              <img src={image} alt="Learning environment" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}