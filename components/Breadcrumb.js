import React from "react";
import { matchRoutes } from "react-router-config";
import routes from "../routes";
const styles = require("./breadcrumb.module.css");

const homeBread = (
  <li key="home" className="breadcrumb-item">
    <a href="/">首頁</a>
  </li>
);

const Breadcrumb = ({ locationPath, onMatchedRoutes }) => {
  let matchedRoutes = matchRoutes(routes, locationPath);

  if (typeof onMatchedRoutes === "function") {
    matchedRoutes = onMatchedRoutes(matchedRoutes);
  }

  return (
    <nav className={styles.nav}>
      <ol className={styles.breadcrumb}>
        {homeBread}
        {matchedRoutes.map((matchRoute, i) => {
          const { path, breadcrumbName } = matchRoute.route;
          const isActive = path !== '/' || path === locationPath;

          return isActive ? (
            <li key={i} className="breadcrumb-item active">
              {breadcrumbName}
            </li>
          ) : (
            <li key={i} className="breadcrumb-item">
              <a href={path}>{breadcrumbName} </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
