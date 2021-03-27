import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import './toc.scss';

const ToC = ({ headings }) => (
  <div className="toc">
    <div className="innerscroll">
      {headings.map((heading) => {
        if (heading.depth > 2) {
          //Only # or ## sections are worth it
          return <div />;
        }

        return (
          <div className="toc-element" key={heading.value}>
            <a
              className="toc-link"
              href={`#${heading.value
                .replace(/\s+/g, '-')
                .replace(/[^a-zA-Z0-9-_]/g, '') //Filter so the url is always valid.
                .toLowerCase()}`}
            >
              -{heading.value}
            </a>
          </div>
        );
      })}
    </div>
  </div>
);

ToC.propTypes = {
  headings: PropTypes.object.isrequired,
};

export default ToC;

/** In order to make this work I need to have something like Julian does. 
so each blog post should have a list of sections, but then each section should have a name.
And then the actual section header text shouldn't have to correspond to that name.
So it'd be like

- Start -> This is the story
- Middle -> All about how
- End -> fresh prince

And then I'll display that start, middle, end on both the sidebar as progress, and on the bottom of handbooks.
*/
