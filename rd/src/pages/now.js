import React from 'react';
import Box from 'components/box';
import Layout from 'components/layout';

import '../styles/apipages.scss';

const Now = () => (
  <Layout>
    <div className="apipage">
      <h1>What I&#39;m Doing Now</h1>
      <h2>
        This is my now page{' '}
        <a
          href="https://nownownow.com/about"
          target="_blank"
          rel="noopener noreferrer"
        >
          (what is this?)
        </a>
      </h2>
      <h3>
        Building{' '}
        <a
          href="https://agrarian.design"
          target="_blank"
          rel="noopener noreferrer"
        >
          Agrarian.Design
        </a>
      </h3>
      <p>
        I started Agrarian Design in May of 2020, and we&#39;ve been steadily
        growing ever since.
      </p>
      <p>
        We work with climate tech companies who directly or indirectly improve
        the planet. A typical client is a series A or B startup who is using
        performance marketing to grow. We can handle everything from the ad down
        to the purchase, and attribute the entire journey. We also work with
        later stage companies on specific projects.
      </p>
      <p>
        It&#39;s been quite a journey becoming an entrepreneur. I&#39;ve been
        writing daily, and doing quarterly reflections. Eventually I&#39;ll
        publish something that more accurately captures the feeling of starting
        a company - most interviews with founders are after they&#39;re
        successful.
      </p>
      <h3>Doing some side projects</h3>
      <p>
        Everything from building the garden to tinkering with fintech apis.
        I&#39;m diving into a lot of stuff, and meandering through quite a few
        topics in my down time.
      </p>
      <h3>Moving to Miami (for a while)</h3>
      <p>
        I&#39;ll be in Brickell for at least 3 months starting in Jan 2022. If
        you&#39;re based in Miami, please shoot me a DM on twitter, would love
        to buy you coffee.
      </p>
      <h4>Last Updated: Dec 2021</h4>
    </div>
  </Layout>
);

export default Now;
