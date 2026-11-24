import { useState } from 'react';
import ContactDetails from './ContactDetails';
import ProductCard, { ProductPrice } from './ProductCard';
import { faq } from './home-content';
import { address, mapWidget } from './contact-details';
import { products, tools } from './products';
import workshopPhoto from '../images/workshop-hero.jpg';

const categories = [
  { value: 'all', label: 'Все товары' },
  { value: 'power', label: 'Электроинструменты' },
  { value: 'garden', label: 'Садовая техника' },
  { value: 'accessories', label: 'Оснастка' },
  { value: 'cleaning', label: 'Пылесосы' },
];

const reviews = [
  {
    name: 'Алексей Морозов',
    initials: 'АМ',
    product: 'Дрель',
    quote: 'Сверлил отверстия под полки. Дрель удобно лежит в руке, а на малых оборотах легко начать отверстие точно по разметке.',
  },
  {
    name: 'Елена Волкова',
    initials: 'ЕВ',
    product: 'Шуруповёрт',
    quote: 'Собрала комод и два стеллажа. Удобно менять направление вращения, особенно когда приходится поправить крепёж.',
  },
  {
    name: 'Дмитрий Соколов',
    initials: 'ДС',
    product: 'Садовый триммер',
    quote: 'Подровнял траву вдоль дорожки и вокруг деревьев, куда газонокосилка не достаёт.',
  },
];

function Breadcrumbs({ current, parent }) {
  return (
    <nav className="breadcrumbs" aria-label="Хлебные крошки">
      <a href="index.html">Главная</a>
      {parent && <a href="catalog.html">Каталог</a>}
      <span aria-current="page">{current}</span>
    </nav>
  );
}

function ProductGrid({ items, onOrder }) {
  return (
    <div className="products-grid">
      {items.map((product) => <ProductCard product={product} key={product.name} onOrder={onOrder} />)}
    </div>
  );
}

export function HomePage({ onOrder }) {
  return (
    <>
      <section className="container hero" id="nav-site">
        <div className="hero__content">
          <h1>Инструменты для любых задач</h1>
          <p>Для ремонта, мастерской и ухода за домом.</p>
          <a className="button button--primary" href="catalog.html">Смотреть каталог</a>
        </div>
        <div className="hero__media" aria-hidden="true" />
      </section>

      <section className="container section category-section" id="advantages" aria-labelledby="categories-title">
        <h2 id="categories-title">Категории товаров</h2>
        <nav className="categories" aria-labelledby="categories-title">
          {categories.slice(1).map(({ value, label }) => (
            <a key={value} href={`catalog.html?category=${value}`}>{label}<span aria-hidden="true">→</span></a>
          ))}
        </nav>
      </section>

      <section className="container section" id="popular">
        <div className="section-heading">
          <h2>Популярные товары</h2>
          <a className="text-link" href="catalog.html">Весь каталог</a>
        </div>
        <ProductGrid items={tools} onOrder={onOrder} />
      </section>

      <section className="container section">
        <div className="drill-demo">
          <div>
            <h2>Дрель в работе</h2>
            <p>Как выглядит сверление направляющих отверстий в дереве нашей дрелью.</p>
            <a className="text-link" href="https://www.youtube.com/watch?v=iXBxhqKhG6A">Открыть на YouTube</a>
          </div>
          <iframe src="https://www.youtube-nocookie.com/embed/iXBxhqKhG6A" loading="lazy"
            title="Демонстрация сверления дерева" allowFullScreen />
        </div>
      </section>
    </>
  );
}

function readFilters() {
  const query = new URLSearchParams(window.location.search);
  return {
    category: categories.find(({ value }) => value === query.get('category'))?.value ?? 'all',
    maxPrice: query.get('max-price') ?? '',
  };
}

export function CatalogPage({ onOrder }) {
  const [filters, setFilters] = useState(readFilters);
  const [maxPrice, setMaxPrice] = useState(filters.maxPrice);

  function applyFilters(next) {
    setFilters(next);
    const url = new URL(window.location.href);
    if (next.category === 'all') url.searchParams.delete('category');
    else url.searchParams.set('category', next.category);
    if (next.maxPrice === '') url.searchParams.delete('max-price');
    else url.searchParams.set('max-price', next.maxPrice);
    window.history.replaceState(null, '', url);
  }

  const visible = products.filter((product) =>
    (filters.category === 'all' || product.category === filters.category) &&
    (filters.maxPrice === '' || product.price <= Number(filters.maxPrice))
  );

  return (
    <div className="container page">
      <Breadcrumbs current="Каталог" />
      <h1>Каталог</h1>
      <div className="catalog-layout">
        <div className="filters" role="group" aria-label="Фильтры каталога">
          <div className="category-filter">
            <label htmlFor="category">Категория</label>
            <select id="category" value={filters.category}
              onChange={(event) => applyFilters({ ...filters, category: event.target.value })}>
              {categories.map(({ value, label }) => <option key={value} value={value}>{label}</option>)}
            </select>
          </div>
          <form className="price-filter" onSubmit={(event) => {
            event.preventDefault();
            applyFilters({ ...filters, maxPrice });
          }}>
            <label htmlFor="max-price">Цена до, ₽</label>
            <input id="max-price" type="number" min="0" value={maxPrice} placeholder="Например, 10 000"
              onChange={(event) => setMaxPrice(event.target.value)} />
            <button className="button button--outline" type="submit">Применить</button>
          </form>
          {(filters.category !== 'all' || maxPrice !== '' || filters.maxPrice !== '') && (
            <button type="button" className="text-link" onClick={() => {
              setMaxPrice('');
              applyFilters({ category: 'all', maxPrice: '' });
            }}>Сбросить фильтры</button>
          )}
        </div>
        <section className="catalog-results" aria-label="Товары">
          <p className="result-count" role="status">Товаров в подборке: {visible.length}</p>
          {visible.length ? <ProductGrid items={visible} onOrder={onOrder} />
            : <div className="empty-state"><h2>Товары не найдены</h2><p>Измените категорию или увеличьте максимальную цену.</p></div>}
        </section>
      </div>
    </div>
  );
}

function Reviews() {
  return (
    <section className="about-reviews" aria-labelledby="reviews-title">
      <h2 id="reviews-title">Отзывы</h2>
      <div className="about-reviews__grid">
        {reviews.map(({ name, initials, product, quote }) => (
          <figure className="about-reviews__item" key={name}>
            <blockquote><p>«{quote}»</p></blockquote>
            <figcaption>
              <span className="about-reviews__avatar" aria-hidden="true">{initials}</span>
              <span><strong>{name}</strong><span>{product}</span></span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function AboutPage() {
  return (
    <div className="container page">
      <Breadcrumbs current="О нас" />
      <h1>О нас</h1>
      <section className="about-intro" aria-labelledby="about-title">
        <div className="about-intro__content">
          <h2 id="about-title">Золотая дрель</h2>
          <p>Мы собрали инструменты для разных задач: от сборки мебели и работы в мастерской до ухода за садом и уборки дома.</p>
          <p>В каталоге можно сравнить цены, выбрать нужную категорию и подобрать оснастку для инструмента.</p>
          <a className="button button--primary" href="catalog.html">Смотреть каталог</a>
        </div>
        <img className="about-intro__image" src={workshopPhoto} width="1536" height="1024"
          alt="Аккумуляторная дрель и свёрла на верстаке" />
      </section>
      <Reviews />
    </div>
  );
}

export function ProductPage({ product, onOrder }) {
  return (
    <div className="container page">
      <Breadcrumbs current={product.name} parent />
      <article className="product-detail">
        <h1>{product.name}</h1>
        <div className="product-detail__media"><img src={product.image} alt={product.name} width="600" height="520" /></div>
        <div className="product-detail__body">
          <p className="page-lead">{product.detailIntro}</p>
          <ProductPrice product={product} />
          <button className="button button--primary" type="button" onClick={() => onOrder(product)}>Заказать</button>
          <section className="product-detail__description"><h2>О товаре</h2><p>{product.detail}</p></section>
        </div>
      </article>
    </div>
  );
}

export function ContactsPage({ onOrder }) {
  return (
    <div className="container page">
      <Breadcrumbs current="Контакты" />
      <h1>Контакты</h1>
      <section className="location" aria-labelledby="location-title">
        <div className="location__info">
          <h2 id="location-title">Как с нами связаться</h2>
          <ContactDetails />
          <div className="contact-panel" id="feedback">
            <h3>Обратная связь</h3>
            <p>Подготовьте вопрос о выборе инструмента, заказе или доставке.</p>
            <div className="contact-panel__actions">
              <button className="button button--primary" type="button" onClick={() => onOrder()}>Открыть форму</button>
              <a className="text-link" href="catalog.html">Выбрать товар</a>
            </div>
          </div>
        </div>
        <iframe className="location__map" src={mapWidget} loading="lazy" allowFullScreen
          title={`Яндекс Карты — ${address}`} />
      </section>
      <section className="faq" id="faq" aria-labelledby="faq-title">
        <div className="faq__intro">
          <h2 id="faq-title">Вопросы и ответы</h2>
          <p>О выборе инструмента, покупке и гарантийном обслуживании.</p>
          <a className="button button--outline" href="#feedback">Задать вопрос</a>
        </div>
        <div className="faq__groups">
          {faq.map(({ title, questions }) => (
            <div className="faq__group" key={title}>
              <h3>{title}</h3>
              {questions.map(({ question, answer }) => (
                <details className="faq__item" key={question}>
                  <summary>{question}<span className="faq__toggle" aria-hidden="true" /></summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
