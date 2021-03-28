import React from 'react';
import PropTypes from 'prop-types';
import IO from 'components/io';

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
            <span className="toc-line"></span>
            <a
              className="toc-link"
              href={`#${heading.value
                .replace(/\s+/g, '-')
                .replace(/[^a-zA-Z0-9-_]/g, '') //Filter so the url is always valid.
                .toLowerCase()}`}
            >
              {heading.value}
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

/**
 * Step 1: know which section you're in
 * Always accent the tick mark for that section. Other tick marks greyed out
 * If you mouse over the toc, show the text and background box
 * If you mouse over a link in the toc, change the color (done)
 * for the link of the current section, change color and underline
 */
