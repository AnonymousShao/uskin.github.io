import React from 'react';

function insertHTML (html) {
  return (<div dangerouslySetInnerHTML={{ __html: html}} />);
}

export default insertHTML;
