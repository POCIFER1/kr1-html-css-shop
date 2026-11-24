import grinderImage from '../images/angle-grinder.jpg';
import jigsawImage from '../images/jigsaw.jpg';
import trimmerImage from '../images/garden-trimmer.jpg';
import bitsImage from '../images/drill-bits.jpg';

export const tools = [
  {
    page: "product.html",
    name: "Дрель",
    category: "power",
    image: "https://media.istockphoto.com/id/1169548847/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B6%D0%B5%D0%BB%D1%82%D1%8B%D0%B9-%D0%B1%D0%B5%D1%81%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%BD%D0%BE%D0%B9-%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%BD%D0%BE%D0%B9-%D0%BE%D1%82%D0%B2%D0%B5%D1%80%D1%82%D0%BA%D0%B8-%D1%81%D0%B2%D0%B5%D1%80%D0%BB%D0%B8%D1%82%D1%8C-%D1%80%D1%83%D1%87%D0%BD%D0%BE%D0%B9-%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D1%85-%D0%B1%D0%B5%D0%BB%D1%8B%D0%B9.jpg?s=612x612&w=is&k=20&c=DPGDD1NXeDnv_kTtmiTWGEQvLBY9-UdxS_wVv22GhuI=",
    description: "Мощный инструмент для дома и ремонта.",
    price: 5999,
    oldPrice: 7999,
    detailIntro: "Мощная дрель для домашних и ремонтных работ!",
    detail: "Универсальный инструмент для ремонта и работы в домашних условиях. Компактный корпус и удобная рукоятка помогают комфортно выполнять повседневные задачи."
  },
  {
    page: "screwdriver.html",
    name: "Шуруповёрт",
    category: "power",
    image: "https://media.istockphoto.com/id/926681604/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F-%D0%BE%D1%82%D0%B2%D0%B5%D1%80%D1%82%D0%BA%D0%B0-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B0-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5.jpg?s=612x612&w=0&k=20&c=gP_P_5YoQEJgeh1knS-XA0ih1tMYr47GTqsppFHQLXY=",
    description: "Для сборки мебели и монтажных работ.",
    price: 4999,
    oldPrice: 6999,
    detailIntro: "Удобный шуруповёрт для сборки мебели, монтажа и домашних ремонтных работ.",
    detail: "Шуруповёрт подходит для закручивания крепежа и выполнения различных монтажных задач. Компактный инструмент удобно использовать дома и в мастерской."
  },
  {
    page: "lawnmower.html",
    name: "Газонокосилка",
    category: "garden",
    image: "https://media.istockphoto.com/id/171269002/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B3%D0%B0%D0%B7%D0%BE%D0%BD%D0%BE%D0%BA%D0%BE%D1%81%D0%B8%D0%BB%D0%BA%D0%B0.jpg?s=612x612&w=is&k=20&c=M7o5ctBusw19-Oy3au2PeRp7Y1UEClGovOaDitjLARo=",
    description: "Для ухода за газоном и садовым участком.",
    price: 11999,
    oldPrice: 14999,
    detailIntro: "Практичная газонокосилка для ухода за садом и придомовой территорией.",
    detail: "Газонокосилка помогает поддерживать аккуратный вид газона и ухаживать за зелёными участками. Подойдёт для сезонных работ на даче и в саду."
  }
];

const vacuums = [
  {
    name: "Вертикальный пылесос",
    category: "cleaning",
    image: "https://media.istockphoto.com/id/2208194789/sv/foto/modern-wireless-handheld-vacuum-cleaner-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=kPM69lgcfC1ietMppVXBbDo44ZSRFEMDWXDg7lMsFGg=",
    description: "Лёгкий и удобный для ежедневной уборки.",
    price: 7990
  },
  {
    name: "Робот-пылесос",
    category: "cleaning",
    image: "https://media.istockphoto.com/id/2153345100/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B4%D0%BE%D0%BC%D0%B0%D1%88%D0%BD%D0%B8%D0%B9-%D1%80%D0%BE%D0%B1%D0%BE%D1%82-%D0%BF%D1%8B%D0%BB%D0%B5%D1%81%D0%BE%D1%81-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5.jpg?b=1&s=612x612&w=0&k=20&c=q_t6JaP6J7IOTj4T3-XHyS9rHrv-XDuYAw-I9l2hxqk=",
    description: "Автоматическая уборка без лишних усилий.",
    price: 12990
  },
  {
    name: "Компактный пылесос",
    category: "cleaning",
    image: "https://media.istockphoto.com/id/637077872/sv/foto/vacuum-cleaner.jpg?s=612x612&w=0&k=20&c=C0-UZAt6mSzAhruTo4rcefsrvhA6ABUB8QNvw5m3dLA=",
    description: "Компактный корпус и высокая мощность.",
    price: 5990
  }
];

const additions = [
  {
    name: "Угловая шлифмашина",
    category: "power",
    image: grinderImage,
    description: "Для резки металла и зачистки поверхностей.",
    price: 8490
  },
  {
    name: "Аккумуляторный лобзик",
    category: "power",
    image: jigsawImage,
    description: "Для прямых и фигурных пропилов в дереве.",
    price: 6990
  },
  {
    name: "Садовый триммер",
    category: "garden",
    image: trimmerImage,
    description: "Для стрижки травы вдоль дорожек и ограждений.",
    price: 7490
  },
  {
    name: "Набор свёрл и бит",
    category: "accessories",
    image: bitsImage,
    description: "Оснастка для сверления и работы с крепежом.",
    price: 1890
  }
];

export const products = [...tools, ...additions, ...vacuums];

const priceFormatter = new Intl.NumberFormat('ru-RU');

export const formatPrice = (price) => priceFormatter.format(price) + ' ₽';
