import React from 'react';
import Layout from 'components/layout';

import '../styles/apipages.scss';

const Assist = () => (
  <Layout>
    <div className="apipage">
      <h1>What I can do for you</h1>
      <h2>
        <a href="/blog/riff/personalapi/">Read the riff on personal apis</a>
      </h2>
      <h3>Growth Marketing Stratgies</h3>
      <p>
        Shoot me a dm on twitter and explain your project/company - I&apos;ll
        give you 2 off-the-wall low cost acq strategies to help you grow.
      </p>
      <h3>IG edits</h3>
      <p>
        I need to justify my lightroom addiction somehow - if you want to punch
        up a photo feel free to dm me a raw file.
      </p>

      <h3>Intros/Hiring</h3>
      <p>
        Need to meet someone in climate or one of my social media mutuals?
        Hiring a new PM/Designer/Engineer/Growth person for your startup? I can
        help with both.
      </p>
      <h3>Restaurant/Hotel/Nightclub Recommendations</h3>
      <p>
        Out in NYC/Miami/SF/Chicago and really tired of using yelp? Dm me and
        I&apos;ll share my running lists of the best places.
      </p>
      <h3>
        If you just landed in *city I am in* and want to get coffee (or tequila)
      </h3>
      <p>Always down - dm me.</p>
      <h4>Last Updated: December 2021</h4>
    </div>
  </Layout>
);

export default Assist;
