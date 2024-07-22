import * as Route from '@/constants/routes';
import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const { pathname } = useLocation();

  const visibleOnlyPath = [
    Route.HOME,
    Route.SHOP,
    Route.CUSTOMER_VIEW
  ];

  return !visibleOnlyPath.includes(pathname) ? null : (
    
    <footer className="footer">
      <div className="footer-col-1">
        <strong>
          <span>
            Developed by @KnotSolutions &copy;&nbsp;{new Date().getFullYear()}
          </span>
        </strong>
      </div>
      <div className="footer-col-2">
        <img alt="Footer logo" className="footer-logo" src='/src/images/logo-full.png' />
      </div>
      <div className="footer-col-3">
        <strong>
          <span>
            Amdoc
          </span>
        </strong>
      </div>
    </footer>
  );
};

export default Footer;
