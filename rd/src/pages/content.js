import React from 'react';
import Layout from 'components/layout';

import '../styles/apipages.scss';

const Content = () => (
  <Layout>
    <div className="apipage">
      <h1>My content recommendations</h1>
      <h2>things worth consuming</h2>
      <h3>Books</h3>
      <p>Michael Gerber - The E-myth revisited</p>
      <p>
        The Art of Learning - Josh Waitzkin (& all his Tim Ferriss Pod
        appearances)
      </p>
      <p>Oren Klaff - Pitch Anything</p>
      <h3>Songs</h3>
      <p>Saba - Monday to Monday</p>
      <p>Jean Sibelius (finnish composer)</p>
      <p>Anything Nipsey Hussle - RIP.</p>
      <h3>Blogs</h3>
      <p>Patio11 - Kalzumeus</p>
      <p>Farnam Street</p>
      <p>Melting Asphalt</p>
      <h3>TV</h3>
      <p>Billions</p>
      <p>Desus and Mero</p>
      <p>House of Lies</p>
      <h4>Last Updated: March 2021</h4>
    </div>
  </Layout>
);

export default Content;
