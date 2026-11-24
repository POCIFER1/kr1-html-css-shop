import { address, mapsLink, phoneLink, phoneNumber } from './contact-details';

const socials = [
  {
    name: 'Telegram',
    url: 'https://telegram.org/',
    path: 'M21.7 3.4 2.8 10.7c-1.3.5-1.3 1.2-.2 1.5l4.9 1.5 1.9 5.6c.2.7.4 1 1 1 .5 0 .8-.3 1.1-.6l2.4-2.3 5 3.7c.9.5 1.6.2 1.8-.9l3.1-15.1c.3-1.3-.5-2-2.1-1.7ZM9.2 13.4l9.7-6.1c.5-.3.9-.1.5.3l-8 7.2-.3 3.3-1.9-4.7Z',
  },
  {
    name: 'ВКонтакте',
    url: 'https://vk.com/',
    path: 'M12.9 17.5c-6.3 0-9.9-4.3-10-11.5H6c.1 5.3 2.4 7.5 4.3 8V6h3v4.6c1.8-.2 3.7-2.3 4.4-4.6h3a9.2 9.2 0 0 1-3.8 5.7 9.8 9.8 0 0 1 4.4 5.8H18c-.7-2.2-2.5-3.9-4.7-4.1v4.1h-.4Z',
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/',
    path: 'M21.6 6.7a2.6 2.6 0 0 0-1.8-1.9C18.2 4.4 12 4.4 12 4.4s-6.2 0-7.8.4a2.6 2.6 0 0 0-1.8 1.9A27.3 27.3 0 0 0 2 12a27.3 27.3 0 0 0 .4 5.3 2.6 2.6 0 0 0 1.8 1.9c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.9A27.3 27.3 0 0 0 22 12a27.3 27.3 0 0 0-.4-5.3ZM10 15.2V8.8l5.2 3.2-5.2 3.2Z',
  },
];

function ContactIcon({ children }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor"
      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

export default function ContactDetails() {
  return (
    <div className="contact-details">
      <address className="contact-details__links">
        <a href="mailto:hello@example.com">
          <ContactIcon><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></ContactIcon>
          hello@example.com
        </a>
        <a href={phoneLink}>
          <ContactIcon><path d="M7 3H4.5A1.5 1.5 0 0 0 3 4.6 17.5 17.5 0 0 0 19.4 21a1.5 1.5 0 0 0 1.6-1.5V17l-5-2-1.5 2a12 12 0 0 1-7.5-7.5L9 8 7 3Z" /></ContactIcon>
          {phoneNumber}
        </a>
        <a href={phoneLink} aria-label="Позвонить в будни с 10 до 19 по Москве">
          <ContactIcon><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></ContactIcon>
          Звонки: пн–пт, 10:00–19:00 МСК
        </a>
        <a href={mapsLink} target="_blank" rel="noopener noreferrer">
          <ContactIcon>
            <path d="M19 10c0 5-7 11-7 11s-7-6-7-11a7 7 0 1 1 14 0Z" />
            <circle cx="12" cy="10" r="2.5" />
          </ContactIcon>
          {address}
        </a>
      </address>
      <div className="contact-details__socials" role="group" aria-label="Социальные сети">
        {socials.map(({ name, url, path }) => (
          <a href={url} key={name} target="_blank" rel="noopener noreferrer" aria-label={name}>
            <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true">
              <path d={path} />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}
