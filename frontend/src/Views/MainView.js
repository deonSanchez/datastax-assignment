import React from 'react';
import { Route } from "react-router-dom";

import GetView from './GetView';
import SendView from './SendView';

export default function MainView() {
  return (
    <div>
      <Route exact path="/" component={SendView} />
      <Route exact path="/get" component={GetView} />
    </div>
  );
}
