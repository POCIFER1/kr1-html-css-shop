# ЗОЛОТАЯ ДРЕЛЬ

Витрина электроинструментов, садовой техники, оснастки и пылесосов.

## Запуск

Требуется Node.js 20.19+ в ветке 20 или Node.js 22.12+.

```sh
npm ci
npm run dev
```

`npm run build` собирает сайт в `dist/`. Команда `npm run preview` запускает локальный просмотр сборки. Для размещения на GitHub Pages публикуйте содержимое `dist/`. Относительные пути к ресурсам позволяют разместить сайт в подкаталоге репозитория.

## Структура

- HTML-файлы в корне служат точками входа Vite. Старый адрес раздела пылесосов ведёт в отфильтрованный каталог.
- `src/main.jsx` подключает React и общие элементы навигации.
- `src/pages.jsx` содержит главную, каталог, страницу «О нас», контакты с виджетом Яндекс Карт и шаблон страницы товара.
- `src/products.js` хранит описания, фотографии и цены товаров.
- `src/OrderDialog.jsx` показывает выбранный товар и проверяет поля заявки. Данные остаются в браузере.
- `css/style.css` содержит адаптивные стили, `public/sitemap.xml` — карту сайта.

## Фото первого экрана

`images/golden-drill-hero.jpg` создано встроенным ImageGen. Промпт:

> Premium industrial brand campaign photograph for a hardware storefront hero, ultra wide landscape 3:2 intended for a wide letterbox crop. An unbranded precision black cordless drill with subtle golden yellow housing accents, a black battery pack and a short steel bit, standing on a dark charcoal monolithic workbench. The drill is fully in frame standing in the right third, occupying about half the image height, with generous breathing room above and below for a 2.5:1 crop. The left half is near-black negative space for website typography. Deep black and graphite scene, hard directional studio side-light, restrained warm gold highlights on the drill and fine dust texture on the concrete, luxury industrial product photography, physically believable proportions. No text, logos, watermark, graphics, people, or orange hues.

## Фото новых товаров

Фотографии созданы встроенным ImageGen. Общий промпт:

> Square 1:1 product catalogue photo of one [subject]. Isolated and centered with 13% blank margins on every side on seamless pure neutral white studio background. Soft restrained shadows, sharply defined realistic retail hardware, no labels, no typography, no logos, no people, no additional objects.

- `images/angle-grinder.jpg` — compact black and muted brass-yellow cordless angle grinder with disc guard, viewed in three-quarter profile with the full tool visible.
- `images/jigsaw.jpg` — black and muted brass-yellow handheld cordless jigsaw with a flat steel sole plate and short blade, full product in three-quarter view.
- `images/garden-trimmer.jpg` — black and muted brass-yellow cordless garden grass string trimmer, full length diagonal from lower left to upper right, including shaft and cutting head.
- `images/drill-bits.jpg` — open compact matte black drill bit case with a neatly arranged set of silver twist drill bits and driver bits, viewed in three-quarter perspective.

## Автор

Перьков Иван Владимирович, группа ЭФБО-02-25.
