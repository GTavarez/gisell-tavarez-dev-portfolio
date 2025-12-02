import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">
          © {new Date().getFullYear()} Gisell Tavarez — Built with React & Express
        </p>
        <p className="footer__text">Portfolio v1.0</p>
      </div>
    </footer>
  );
}
