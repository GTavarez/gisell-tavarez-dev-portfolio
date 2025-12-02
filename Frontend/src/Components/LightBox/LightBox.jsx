import "./Lightbox.css";

export default function Lightbox({ src, alt, onClose }) {
  if (!src) return null;

  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt} className="lightbox__img" />
        <button className="lightbox__close" onClick={onClose}>✕</button>
      </div>
    </div>
  );
}
