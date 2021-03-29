import React from 'react';
import Layout from 'components/layout';

import '../styles/apipages.scss';

const Help = () => (
  <Layout>
    <div className="apipage">
      <h1>What I need help with</h1>
      <h2>
        <a href="/blog/riff/personalapi/">Read the riff on personal apis</a>
      </h2>
      <h3>Agrarian Design Clients</h3>
      <p>
        The lifeblood of any agency - introductions to execs at sustainable
        companies who spend 4-10k/monthly on paid acq and who want to get to
        40-100k/monthly.
      </p>
      <p>
        DM me on twitter or email (dev@agrarian.design) - if we end up working
        with them we&#39;ll pay out a significant referral bonus
      </p>
      <h3>Connections to founders, digital nomads, writers, creatives</h3>
      <p>Always looking to make new friends and meet people in new scenes.</p>
      <h3>Intros to great media buyers, copywriters and marketers</h3>
      <p>
        In the same vein as clients - agencies compete for the best talent. If
        you know any great marketers who want to 100x their positive impact on
        the planet, send &#39;em my way.
      </p>
      <h3>Social media dopamine</h3>
      <p>Always feels good :)</p>
      <h4>Last Updated: March 2021</h4>
    </div>
  </Layout>
);

export default Help;
