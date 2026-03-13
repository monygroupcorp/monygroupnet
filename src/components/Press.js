import { Component, h } from '@monygroupcorp/microact';

const ITEMS = [
  {
    text: 'Art featured in Remilia Quarterly Vol. 1',
    url: 'https://house.remilia.org/products/remilia-quarterly-vol-1-ss24',
  },
  {
    text: 'MiladyStation artwork used as album cover \u2014 No No No by Black Spuma',
    url: 'https://lauer.bandcamp.com/album/no-no-no',
  },
];

class Press extends Component {
  render() {
    return h('section', null,
      h('h2', null, 'Recognition'),
      h('ul', { className: 'press-list' },
        ...ITEMS.map(item =>
          item.url
            ? h('li', null, h('a', { href: item.url, target: '_blank', rel: 'noopener noreferrer' }, item.text))
            : h('li', null, item.text)
        )
      ),
      h('div', { className: 'press-embed' },
        h('iframe', {
          style: 'border: 0; width: 100%; height: 120px;',
          src: 'https://bandcamp.com/EmbeddedPlayer/album=1540476579/size=large/bgcol=333333/linkcol=4ec5ec/tracklist=false/artwork=small/transparent=true/',
          seamless: true,
          title: 'No No No by Black Spuma',
        })
      )
    );
  }
}

export default Press;
