import { Component, h } from '@monygroupcorp/microact';

const PROJECTS = [
  {
    title: 'MiladyCola',
    url: 'https://miladycola.net',
    description: 'ZK-powered onchain VRF using beacon randomness. Cryptographic prize challenges for NFT holders.',
    tech: 'Solidity, ZK, VRF',
  },
  {
    title: 'Cult Executives',
    url: 'https://ms2.fun/cultexecs',
    description: 'ERC721/ERC20 hybrid with automated liquidity royalty. Original token architecture.',
    tech: 'Solidity, Viem, Foundry',
  },
  {
    title: 'MiladyStation',
    url: 'https://miladystation.net',
    description: 'First project. NFT minting platform. Artwork later appeared as an album cover.',
    tech: 'Solidity, React',
    auditUrl: '#/audits/MiladyStationA',
  },
];

class Projects extends Component {
  render() {
    return h('section', null,
      h('h2', null, 'Other Projects'),
      h('div', { className: 'project-list' },
        ...PROJECTS.map(p =>
          h('div', { className: 'project-row' },
            h('div', { className: 'project-row__title' },
              p.url
                ? h('h3', null, h('a', { href: p.url, target: '_blank', rel: 'noopener noreferrer' }, p.title))
                : h('h3', null, p.title),
              h('span', { className: 'mono' }, p.tech),
            ),
            h('p', { className: 'project-row__desc' }, p.description),
            p.auditUrl
              ? h('a', { href: p.auditUrl, className: 'audit-link' }, 'Audit report \u2192')
              : null,
          )
        ),
        h('div', { className: 'project-row project-row--minor' },
          h('p', { className: 'project-row__desc' }, 'Also: CigStation, TubbyStation, and other derivative collections.'),
        )
      ),
      h('div', { className: 'section-link' },
        h('a', { href: '#/audits' }, 'View all audit reports \u2192')
      )
    );
  }
}

export default Projects;
