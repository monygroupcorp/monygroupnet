import { Component, h } from '@monygroupcorp/microact';

const DIAMOND_SVG_SM = '<svg width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="dfg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#2feff4"/><stop offset="100%" stop-color="#2feff4" stop-opacity="0"/></linearGradient></defs><path d="M12 0 L24 12 L12 24 L0 12 Z" fill="url(#dfg)"/></svg>';

class Footer extends Component {
  render() {
    return h('footer', { className: 'footer' },
      h('div', { className: 'footer__top' },
        h('div', { className: 'footer__col' },
          h('span', { className: 'footer__label' }, 'Contact'),
          h('nav', { className: 'footer__links' },
            h('a', { href: 'https://t.me/arthurtmonyman', target: '_blank', rel: 'noopener noreferrer' }, 'Telegram'),
            h('a', { href: 'https://x.com/miladystation', target: '_blank', rel: 'noopener noreferrer' }, 'X'),
            h('a', { href: 'https://app.ens.domains/name/mony.eth', target: '_blank', rel: 'noopener noreferrer' }, 'mony.eth'),
          ),
        ),
        h('div', { className: 'footer__col' },
          h('span', { className: 'footer__label' }, 'Work'),
          h('nav', { className: 'footer__links' },
            h('a', { href: 'https://ms2.fun', target: '_blank', rel: 'noopener noreferrer' }, 'ms2.fun'),
            h('a', { href: 'https://noema.art', target: '_blank', rel: 'noopener noreferrer' }, 'noema.art'),
            h('a', { href: '#/audits' }, 'Audits'),
          ),
        ),
      ),
      h('div', { className: 'footer__bottom' },
        h('div', { className: 'footer__brand' },
          h('span', { className: 'footer__diamond', innerHTML: DIAMOND_SVG_SM }),
          h('span', { className: 'footer__copy' }, 'Mony Group \u00B7 2026'),
        ),
        h('p', { className: 'footer__tagline mono' }, 'Available for contract work'),
      ),
    );
  }
}

export default Footer;
