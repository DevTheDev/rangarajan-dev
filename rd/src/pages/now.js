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
        Now we mostly work with clean tech startups who&#39;ve raised an early
        round and are trying to hit a growth target. We also work with
        sustainable/regenerative e-commerce and cpg companies.
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
      <h3>Riding out covid & plotting the next move</h3>
      <p>
        At the start of the pandemic I flew back home to California, and
        I&#39;ve been enjoying this time with family. You always see the graph
        that shows by 18 you&#39;ve spent 80% of the time you&#39;ll ever have
        with them, so this was a real silver lining.
      </p>
      <h4>Last Updated: March 2021</h4>
    </div>
  </Layout>
);

export default Now;
