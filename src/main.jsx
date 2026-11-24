import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { phoneLink, phoneNumber } from './contact-details';
import Footer from './Footer';
import OrderDialog from './OrderDialog';
import { AboutPage, CatalogPage, ContactsPage, HomePage, ProductPage } from './pages';
import { tools } from './products';
import drillLogo from '../images/brand-drill.svg';
import '../css/style.css';

const page = document.getElementById('root').dataset.page;
const product = tools.find((item) => item.page === page + '.html');

function Brand() {
  return (
    <a className="brand" href="index.html">
      <img className="brand__mark" src={drillLogo} alt="" width="36" height="36" />
      <span className="brand__text">
        <span>Золотая дрель</span>
        <span className="brand__tagline">Инструменты и техника для дома</span>
      </span>
    </a>
  );
}

function Header({ headerRef }) {
  const current = product ? 'catalog' : page;
  const links = [
    ['index', 'Главная'], ['catalog', 'Каталог'], ['about', 'О нас'], ['contacts', 'Контакты'],
  ];

  return (
    <header className="site-header" ref={headerRef} tabIndex={-1}>
      <a className="skip-link" href="#main">К содержанию</a>
      <div className="container site-header__inner">
        <Brand />
        <nav className="site-nav" aria-label="Основная навигация">
          {links.map(([id, label]) => (
            <a className="site-nav__link" href={id + '.html'} key={id}
              aria-current={current === id ? (product ? 'location' : 'page') : undefined}>{label}</a>
          ))}
        </nav>
        <div className="site-header__contacts">
          <a className="site-header__phone" href={phoneLink}>{phoneNumber}</a>
          <a className="button button--outline" href="contacts.html#feedback">Связаться</a>
        </div>
      </div>
    </header>
  );
}

function BackToTop({ headerRef }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function updateVisibility() {
      setVisible(window.scrollY >= 320);
    }

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  if (!visible) return null;

  function scrollToTop() {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    headerRef.current?.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'instant' : 'smooth' });
  }

  return (
    <button className="button button--primary back-to-top" type="button"
      aria-label="Наверх страницы" onClick={scrollToTop}>
      <span className="back-to-top__icon" aria-hidden="true" />
    </button>
  );
}

function App() {
  const headerRef = useRef(null);
  const [order, setOrder] = useState(null);
  const [success, setSuccess] = useState(false);

  useLayoutEffect(() => {
    const id = window.location.hash.slice(1);
    if (id) document.getElementById(id)?.scrollIntoView();
  }, []);

  function openOrder(selectedProduct) {
    setSuccess(false);
    setOrder({ product: selectedProduct });
  }

  const pages = {
    index: <HomePage onOrder={openOrder} />,
    catalog: <CatalogPage onOrder={openOrder} />,
    contacts: <ContactsPage onOrder={openOrder} />,
    about: <AboutPage />,
  };

  return (
    <>
      <Header headerRef={headerRef} />
      <main id="main" tabIndex={-1}>
        {product ? <ProductPage product={product} onOrder={openOrder} /> : pages[page]}
      </main>
      <Footer brand={<Brand />} />
      <BackToTop headerRef={headerRef} />
      <div className="status-region" role="status">
        {success && <div className="success-message">
          <span>Заявка проверена. Данные остались в браузере.</span>
          <button type="button" className="icon-button" aria-label="Скрыть сообщение" onClick={() => setSuccess(false)}>×</button>
        </div>}
      </div>
      {order && <OrderDialog order={order} onClose={() => setOrder(null)} onSuccess={() => setSuccess(true)} />}
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
