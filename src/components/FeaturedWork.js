import { Component, h } from '@monygroupcorp/microact';

const FEATURED = [
  {
    title: 'ms2.fun',
    url: 'https://ms2.fun',
    description: 'Composable launchpad protocol for derivative art aligned to crypto communities. Artists choose an alignment target, pick a vault strategy, and deploy projects that structurally buy and LP the target community\u2019s token. New factory types and vault strategies plug in without redeployment \u2014 the protocol expands by design.',
    details: [
      'Ships with ERC404, ERC1155, ERC721 factories \u2014 designed to accept new primitives',
      'Multiple vault strategies (Uniswap V4, ZAMM, Algebra V2) \u2014 artist\u2019s choice per project',
      'DAO governance with 48h timelocked execution',
      '1/19/80 fee split \u2014 1% protocol, 19% alignment vault, 80% artist',
      '1130+ tests',
    ],
    tech: 'Solidity, Foundry, Microact, Micro-Web3',
    tags: ['Protocol', 'DeFi', 'Launchpad', 'Full Stack'],
  },
  {
    title: 'noema.art',
    url: 'https://noema.art',
    description: 'Agentic AI platform with on-chain credit system. Tools chain into spells \u2014 multi-step generation workflows that compose image, text, and model operations into single commands. Full NFT creation pipeline from generation to metadata to onchain deployment. We train every model ourselves.',
    details: [
      '200+ LoRA models trained in-house and deployed in production',
      'Agentic tool chaining \u2014 compose tools into spells for complex multi-step workflows',
      'End-to-end NFT pipeline \u2014 generate art, build metadata, deploy collection to chain',
      'On-chain Ethereum credit system for access and billing',
      'Telegram, Discord, and Web from a single codebase',
    ],
    tech: 'Node, Docker, Telegram, Discord, Microact, ComfyUI, ai-toolkit',
    tags: ['Agentic AI', 'NFT Pipeline', 'Model Training', 'On-chain Credit'],
  },
  {
    title: 'Microact',
    url: 'https://www.npmjs.com/package/@monygroupcorp/microact',
    description: 'Zero-dependency React-like framework for client-side applications. Built to ship lean static sites without the overhead of React or Next.js. Powers ms2.fun, MiladyCola, MiladyStation, and this site.',
    details: [
      'Virtual DOM, component lifecycle, state management \u2014 352KB unpacked, zero dependencies',
      'Micro-Web3 extension \u2014 wallet connection, IPFS, and Web3 UI primitives out of the box',
      'create-microact-app CLI scaffolding tool',
      'Published on npm as @monygroupcorp/microact',
    ],
    tech: 'JavaScript, Vite',
    tags: ['Framework', 'Open Source', 'Web3 Toolkit'],
  },
];

class FeaturedWork extends Component {
  render() {
    return h('section', null,
      h('h2', null, 'Featured Engagements'),
      ...FEATURED.map(project =>
        h('div', { className: 'featured' },
          h('h3', null,
            h('a', { href: project.url, target: '_blank', rel: 'noopener noreferrer' }, project.title)
          ),
          h('p', { className: 'featured__desc' }, project.description),
          h('ul', { className: 'featured__details' },
            ...project.details.map(d =>
              h('li', null, d)
            )
          ),
          h('div', { className: 'featured__meta' },
            h('span', { className: 'mono' }, project.tech),
          ),
          h('div', { className: 'featured__tags' },
            ...project.tags.map(tag =>
              h('span', { className: 'tag' }, tag)
            )
          )
        )
      )
    );
  }
}

export default FeaturedWork;
