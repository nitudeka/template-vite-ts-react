import React from "react";
import { RouteObject } from "react-router-dom";
import appRouterConfigs from "pages/routerConfig";

export interface IRoute {
  path: string;
  element: React.ReactNode;
}

const getRoutes = () => {
  const routes: RouteObject[] = appRouterConfigs.reduce(
    (prev: RouteObject[], curr) => {
      prev.push({
        path: curr.path,
        element: curr.element,
      });

      return prev;
    },
    []
  );

  return routes;
};

export default getRoutes;
