import React from 'react';
import { Route,} from 'react-router-dom';
import { MainContent } from '../components/';
const childRoutes = [
    {
      'path':'/dashboard',
      'component': MainContent,
    },
];

const routesNode = childRoutes.map((route,index)=>(
    <Route key={index} path={route.path} component={route.component} />
))

export {
  routesNode
}