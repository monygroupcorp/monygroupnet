import { Component, h } from '@monygroupcorp/microact';
import Header from './Header.js';
import FeaturedWork from './FeaturedWork.js';
import Projects from './Projects.js';
import Press from './Press.js';
import About from './About.js';
import Footer from './Footer.js';
import AuditsIndex from './AuditsIndex.js';
import AuditReport from './AuditReport.js';

class App extends Component {
  render() {
    const path = this.props.path || '/';

    // Route: /audits/[slug]
    if (path.startsWith('/audits/')) {
      const slug = path.replace('/audits/', '');
      if (slug) {
        return h(AuditReport, { slug });
      }
      return h(AuditsIndex);
    }

    // Route: /audits
    if (path === '/audits') {
      return h(AuditsIndex);
    }

    // Route: / (home)
    return h('div', { className: 'site' },
      h(Header),
      h(FeaturedWork),
      h(Projects),
      h(Press),
      h(About),
      h(Footer),
    );
  }
}

export default App;
