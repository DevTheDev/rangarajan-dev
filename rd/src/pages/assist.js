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
        I Need to justify my lightroom addiction somehow - if you want to punch
        up a photo feel free to dm me a raw file.
      </p>
      <h3>
        If you just landed in *city I am in* and want to get coffee (or tequila)
      </h3>
      <p>
        Always down - shoot me a dm. Or if you want to do a zoom/clubhouse
        during covid times, also down.
      </p>
      <h4>Last Updated: March 2021</h4>
    </div>
  </Layout>
);

export default Assist;
