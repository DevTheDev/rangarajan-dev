import React from 'react';
import PropTypes from 'prop-types';

import Scrollspy from 'react-scrollspy';

import './toc.scss';

//TODO: There's a slight bug where you can fall off of the toc between sections. not sure how to fix (prob a scrollspy setting)
//TODO: Interaction when you click on the link flashes the background (it shouldn't)
//TODO: If you have only 1 section cut it off, or if you have a bunch (I'll just remember this on my own for now)
export default function ToC({ headings }) {
  var values = [];

  for (var key in headings) {
    values.push(
      headings[key].value
        .replace(/\s+/g, '-')
        .replace(/[^a-zA-Z0-9-_]/g, '')
        .toLowerCase()
    );
  }

  return (
    <div className="toc" items={values}>
      <div className="innerscroll">
        <Scrollspy items={values} currentClassName="is-current" offset={0}>
          {headings.map((heading) => {
            if (heading.depth > 2) {
              //Only # or ## sections are worth it
              return <></>;
            }
            return (
              <li key={heading.value} className="toc-element">
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
              </li>
            );
          })}
        </Scrollspy>
      </div>
    </div>
  );
}

ToC.propTypes = {
  headings: PropTypes.object.isrequired,
};

/** In order to make this work I need to have something like Julian does. 
so each blog post should have a list of sections, but then each section should have a name.
And then the actual section header text shouldn't have to correspond to that name.
So it'd be like

- Start -> This is the story
- Middle -> All about how
- End -> fresh prince

And then I'll display that start, middle, end on both the sidebar as progress, and on the bottom of handbooks.

*/
