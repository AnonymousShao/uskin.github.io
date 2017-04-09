require('babel-core/register')({
   presets: [ 'es2015', 'react' ]
});

import React from 'react';
import { Switch } from 'uskin';

export default <Switch
  onChange={function listener(){}}
  labelOn="ON"
  labelOff="OFF"
  checked={true}
  width={50}
  disabled={false} />;
