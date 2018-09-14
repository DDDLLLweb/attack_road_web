import React from 'react';
import { Route } from 'react-router-dom';
import { MainContent,Metaqtable } from '../components/';
export const childRoutes = [
    {
      'path':'/app/dashboard',
      'component':MainContent,
    },
    {
      'path':'/app/mqctl/metaq',
      'component': Metaqtable,
    }
];

const routesNode = childRoutes.map((route,index)=>(
    <Route key={index} path={route.path} component={route.component} />
))

export {
  routesNode
}