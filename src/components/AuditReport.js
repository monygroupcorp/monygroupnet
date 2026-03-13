import { Component, h } from '@monygroupcorp/microact';
import { marked } from 'marked';
import { AUDITS } from '../data/audits.js';

class AuditReport extends Component {
  render() {
    const { slug } = this.props;
    const audit = AUDITS.find(a => a.slug === slug);

    if (!audit) {
      return h('div', { className: 'site' },
        h('a', { href: '#/audits', className: 'back-link' }, '\u2190 Back to Audits'),
        h('p', null, 'Audit not found.'),
      );
    }

    const html = marked(audit.content);

    return h('div', { className: 'site' },
      h('a', { href: '#/audits', className: 'back-link' }, '\u2190 Back to Audits'),
      h('article', { className: 'audit-report', innerHTML: html }),
    );
  }
}

export default AuditReport;
