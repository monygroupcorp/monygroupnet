import { Component, h } from '@monygroupcorp/microact';
import { AUDITS } from '../data/audits.js';

class AuditsIndex extends Component {
  render() {
    return h('div', { className: 'site' },
      h('header', { className: 'audits-header' },
        h('a', { href: '#/', className: 'back-link' }, '\u2190 Back'),
        h('h1', null, 'Security Audits'),
        h('p', { className: 'audits-header__desc' },
          'Audit reports performed by Mony Vault.'
        ),
      ),
      h('section', null,
        h('div', { className: 'project-list' },
          ...AUDITS.map(a =>
            h('div', { className: 'project-row' },
              h('div', { className: 'project-row__title' },
                h('h3', null,
                  h('a', { href: '#/audits/' + a.slug }, a.title)
                ),
                h('span', { className: 'mono' }, a.date),
              ),
              h('p', { className: 'project-row__desc' },
                'Critical: ' + a.severity.critical,
                ' \u00B7 High: ' + a.severity.high,
                ' \u00B7 Medium: ' + a.severity.medium,
                ' \u00B7 Low: ' + a.severity.low,
              ),
            )
          )
        )
      ),
    );
  }
}

export default AuditsIndex;
