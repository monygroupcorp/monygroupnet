import { Component, h } from '@monygroupcorp/microact';

const AUDITS = [
  { title: 'Cult Executives', scope: 'ERC721/ERC20 hybrid contract' },
  { title: 'MiladyStation', scope: 'NFT minting contract' },
  { title: 'CigStation', scope: 'NFT minting contract' },
  { title: 'TubbyStation', scope: 'NFT minting contract' },
];

class Audits extends Component {
  render() {
    return h('section', null,
      h('h2', null, 'Security Audits Performed'),
      h('div', { className: 'audit-list' },
        ...AUDITS.map(a =>
          h('div', { className: 'audit-row' },
            h('h3', null, a.title),
            h('span', { className: 'mono' }, a.scope),
          )
        )
      )
    );
  }
}

export default Audits;
