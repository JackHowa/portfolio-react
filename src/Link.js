import React from 'react';

const Link = props => {
  const { linkTitle, iconTitle, linkURL } = props;
  return <a href={linkURL} className={`${iconTitle}`}
                target="_blank"
                rel="noopener noreferrer">{linkTitle}</a>;
};

export default Link;
