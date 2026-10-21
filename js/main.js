// Получаем модальное окно по id.
const orderDialog = document.getElementById('order-dialog');

// Получаем все кнопки заказа в карточках товаров.
const orderButtons = document.querySelectorAll('.product-card__button');

// Получаем кнопку закрытия модального окна.
const closeDialogButton = document.getElementById('close-order-dialog');


// Получаем скрытое поле, в которое будет записан выбранный товар.
const selectedProductInput = document.getElementById('selected-product');

const productTitle = document.getElementById('order-product-title');
const productPrice = document.getElementById('order-product-price');
const productImage = document.getElementById('order-product-image');

// Перебираем все кнопки «Заказать».
orderButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Получаем название товара из data-атрибута.
    const productName = button.dataset.product;
    const price = button.dataset.price;
    const image = button.dataset.image;

    // Записываем название товара в скрытое поле формы.
    selectedProductInput.value = productName;

    productTitle.textContent = productName || 'Товар не выбран';
    productPrice.textContent = price || 'Цена не указана';

    if (image) {
      productImage.src = image;
      productImage.alt = productName
        ? productName
        : 'Изображение товара';

        productImage.hidden = false;
    } else {
      productImage.removeAttribute('src');
      productImage.alt = '';
      productImage.hidden = true;
    }


    // Открываем модальное окно.
    orderDialog.showModal();
  });
});

// Закрываем модальное окно по кнопке «Закрыть».
closeDialogButton.addEventListener('click', () => {
  orderDialog.close();
});

// Получаем форму заявки.
const orderForm = document.getElementById('order-form');

// Получаем сообщение об успешной отправке.
const successMessage = document.getElementById('success-message');

// Обрабатываем отправку формы.
const submitBtn = orderForm.querySelector('.button--primary');
const btnText = submitBtn.querySelector('.button__text');

orderForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Сбрасываем предыдущие признаки ошибок.
  const formElements = Array.from(orderForm.elements);
  formElements.forEach((element) => {
    if (element.willValidate) {
      element.removeAttribute('aria-invalid');
    }
  });

  // Проверяем встроенные HTML-ограничения формы.
  if (!orderForm.checkValidity()) {
    formElements.forEach((element) => {
      if (element.willValidate && !element.checkValidity()) {
        element.setAttribute('aria-invalid', 'true');
      }
    });

    orderForm.reportValidity();
    return;
  }

  // --- ЛОГИКА ЗАГРУЗКИ (ФОРМА ВАЛИДНА) ---
  
  // 1. Включаем спиннер и блокируем кнопку
  submitBtn.classList.add('is-loading');
  submitBtn.disabled = true;
  if (btnText) btnText.textContent = 'Отправка...';

  // 2. Запускаем искусственную задержку в 1.5 секунды
  setTimeout(() => {
    
    // Показываем сообщение об успешной отправке.
    successMessage.hidden = false;

    // Очищаем форму.
    orderForm.reset();

    // Возвращаем кнопку в исходное состояние (чтобы при следующем открытии модалки она была активна)
    submitBtn.classList.remove('is-loading');
    submitBtn.disabled = false;
    if (btnText) btnText.textContent = 'Отправить заявку';

    // Закрываем модальное окно.
    orderDialog.close();
    
  }, 1500); // 1500 миллисекунд задержки
});


