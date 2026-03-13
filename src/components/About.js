import { Component, h } from '@monygroupcorp/microact';

class About extends Component {
  render() {
    return h('section', null,
      h('h2', null, 'About'),
      h('div', { className: 'about' },
        h('p', null, 'Building onchain since 2022. Background in mechanical engineering and patent law. Every project ships complete \u2014 from contract architecture to art pipeline to frontend to deployment.'),
        h('p', null, 'Deep crypto and deep AI, in one operator. Protocol design, security auditing, LoRA training, generation infrastructure, full-stack applications. No handoffs.'),
        h('p', null, 'All work is original. All work is public.'),
        h('p', { className: 'mono' }, 'Solidity \u00B7 Foundry \u00B7 Uniswap V4 \u00B7 React \u00B7 Viem \u00B7 ComfyUI \u00B7 LoRA \u00B7 IPFS'),
      )
    );
  }
}

export default About;
