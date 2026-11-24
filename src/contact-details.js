export const address = 'Москва, Тверская улица, 12, строение 1';
export const phoneNumber = '+7 (900) 000-00-00';
export const phoneLink = 'tel:+79000000000';

const coordinates = '37.608200,55.763660';
export const mapsLink = `https://yandex.ru/maps/?text=${encodeURIComponent(address)}`;
export const mapWidget = `https://yandex.ru/map-widget/v1/?ll=${coordinates}&z=16&pt=${coordinates},pm2rdm`;
