import { Component, h } from '@monygroupcorp/microact';

const DIAMOND_SVG = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="dg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#2feff4"/><stop offset="100%" stop-color="#2feff4" stop-opacity="0"/></linearGradient></defs><path d="M12 0 L24 12 L12 24 L0 12 Z" fill="url(#dg)"/></svg>';

class Header extends Component {
  render() {
    return h('header', { className: 'header' },
      h('div', { className: 'header__brand' },
        h('span', { className: 'header__diamond', innerHTML: DIAMOND_SVG }),
        h('h1', null, 'Mony Group'),
      ),
      h('p', { className: 'header__tagline' },
        'Smart contracts and AI infrastructure. One operator, end-to-end.'
      ),
      h('p', { className: 'header__sub' },
        'Available for contract work.'
      ),
      h('nav', { className: 'header__links' },
        h('a', { href: 'https://t.me/arthurtmonyman', target: '_blank', rel: 'noopener noreferrer' }, 'Telegram'),
        h('a', { href: 'https://x.com/miladystation', target: '_blank', rel: 'noopener noreferrer' }, 'X'),
        h('a', { href: 'https://app.ens.domains/name/mony.eth', target: '_blank', rel: 'noopener noreferrer' }, 'mony.eth')
      )
    );
  }
}

export default Header;
