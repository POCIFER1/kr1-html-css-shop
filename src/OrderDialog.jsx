import { useEffect, useRef } from 'react';
import { formatPrice } from './products';

export default function OrderDialog({ order, onClose, onSuccess }) {
  const dialogRef = useRef(null);
  const product = order.product;

  useEffect(() => {
    dialogRef.current.showModal();
  }, []);

  function submitOrder(event) {
    event.preventDefault();
    const form = event.currentTarget;
    for (const field of form.elements) {
      if (field.willValidate) {
        if (field.validity.valid) field.removeAttribute('aria-invalid');
        else field.setAttribute('aria-invalid', 'true');
      }
    }
    if (!form.reportValidity()) return;

    onSuccess();
    dialogRef.current.close();
  }

  function clearValidField(event) {
    const field = event.target;
    if (field.validity?.valid) field.removeAttribute('aria-invalid');
  }

  return (
    <dialog className="order-dialog" ref={dialogRef} onClose={onClose}
      aria-labelledby="order-dialog-title">
      <h2 className="order-dialog__title" id="order-dialog-title">Оформление заявки</h2>
      <p className="order-dialog__note">Форма проверяет данные в браузере. Онлайн-отправка пока недоступна.</p>
      {product && (
        <div className="order-dialog__product">
          <img className="order-dialog__product-image" src={product.image} alt={product.name} />
          <div className="order-dialog__product-info">
            <p className="order-dialog__product-label">Вы оформляете заявку на:</p>
            <h3 className="order-dialog__product-title">{product.name}</h3>
            <p className="order-dialog__product-price">{formatPrice(product.price)}</p>
          </div>
        </div>
      )}

      <form className="order-form" noValidate onSubmit={submitOrder} onChange={clearValidField}>
        {product && <input name="selected-product" type="hidden" value={product.name} />}
        <div className="order-form__field">
          <label className="order-form__label" htmlFor="order-name">Имя</label>
          <input className="order-form__input" id="order-name" name="name" type="text"
            placeholder="Введите ваше имя" minLength={2} autoComplete="given-name" required />
        </div>

        <div className="order-form__field">
          <label className="order-form__label" htmlFor="order-email">E-mail</label>
          <input className="order-form__input" id="order-email" name="email" type="email"
            placeholder="example@mail.ru" autoComplete="email" required />
        </div>

        <div className="order-form__field">
          <label className="order-form__label" htmlFor="order-phone">Телефон</label>
          <input className="order-form__input" id="order-phone" name="phone" type="tel"
            inputMode="tel" autoComplete="tel" aria-describedby="order-phone-format"
            placeholder="+7 (900) 000-00-00" pattern={String.raw`\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}`} required />
          <small id="order-phone-format">Формат: +7 (900) 000-00-00</small>
        </div>

        <div className="order-form__field">
          <label className="order-form__label" htmlFor="order-date">Дата связи</label>
          <input className="order-form__input" id="order-date" name="date" type="date" />
        </div>

        <div className="order-form__field">
          <label className="order-form__label" htmlFor="order-topic">Тема заявки</label>
          <select className="order-form__select" id="order-topic" name="topic" required>
            <option value="">Выберите тему</option>
            <option value="product">Заказ товара</option>
            <option value="consultation">Консультация</option>
            <option value="delivery">Доставка</option>
          </select>
        </div>

        <div className="order-form__field">
          <label className="order-form__label" htmlFor="order-comment">Комментарий</label>
          <textarea className="order-form__textarea" id="order-comment" name="comment" rows={4}
            placeholder="Укажите дополнительную информацию" />
        </div>

        <div className="form-field form-field--checkbox">
          <label>
            <input name="agreement" type="checkbox" required /> Я согласен на обработку данных
          </label>
        </div>

        <div className="order-form__actions">
          <button className="button button--secondary" type="button"
            onClick={() => dialogRef.current.close()}>Закрыть</button>
          <button className="button button--primary" type="submit">Проверить заявку</button>
        </div>
      </form>
    </dialog>
  );
}
