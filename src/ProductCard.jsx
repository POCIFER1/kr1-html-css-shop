import { formatPrice } from './products';

export function ProductPrice({ product }) {
  return (
    <div className="product-price">
      <strong>{formatPrice(product.price)}</strong>
      {product.oldPrice && <del>{formatPrice(product.oldPrice)}</del>}
    </div>
  );
}

export default function ProductCard({ product, onOrder }) {
  const heading = (
    <>
      <div className="product-card__media"><img src={product.image} alt="" loading="lazy" width="400" height="300" /></div>
      <h3>{product.name}</h3>
    </>
  );

  return (
    <article className="product-card">
      {product.page ? <a className="product-card__heading" href={product.page}>{heading}</a> : heading}
      <div className="product-card__body">
        <p>{product.description}</p>
        <ProductPrice product={product} />
        <button className="button button--primary" type="button" aria-label={`Заказать: ${product.name}`}
          onClick={() => onOrder(product)}>Заказать</button>
      </div>
    </article>
  );
}
