export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-logo">Alex<span> </span>Vartanian</div>
          <p className="footer-copy">© {year} Alex Vartanian — Built with React</p>
        </div>
      </div>
    </footer>
  );
}
