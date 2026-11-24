import ContactDetails from './ContactDetails';

export default function Footer({ brand }) {
  return (
    <footer className="site-footer" id="contacts">
      <div className="container site-footer__inner">
        {brand}
        <nav className="site-footer__nav" aria-labelledby="footer-nav-title">
          <h2 className="site-footer__title" id="footer-nav-title">Разделы</h2>
          <a href="index.html">Главная</a>
          <a href="catalog.html">Каталог</a>
          <a href="about.html">О нас</a>
          <a href="contacts.html#faq">Вопросы и ответы</a>
        </nav>
        <section className="site-footer__contacts" aria-labelledby="footer-contacts-title">
          <h2 className="site-footer__title" id="footer-contacts-title">
            <a href="contacts.html">Контакты</a>
          </h2>
          <ContactDetails />
        </section>
      </div>
      <div className="site-footer__bottom">
        <p className="container">© 2026 Золотая дрель. Все права защищены.</p>
      </div>
    </footer>
  );
}
