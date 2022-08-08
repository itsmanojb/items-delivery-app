import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const Breadcrumb = (props: Props) => {
  return (
    <div className="text-xs flex flex-wrap text-black font-medium">
      <span className="cursor-pointer hover:text-[#0c831f]">
        <Link to="/">Home</Link>
      </span>
      <span>&nbsp; / &nbsp;</span>
      <span className="cursor-pointer hover:text-[#0c831f]">
        <Link to="/">Munchies</Link>
      </span>
      <span>&nbsp; / &nbsp;</span>
      <span className="cursor-pointer hover:text-[#0c831f]">
        <Link to="/">Chips & Crisps</Link>
      </span>
      <span>&nbsp; / &nbsp;</span>
      <span className="_text-muted">
        Too Yumm Veggie Stix Sour Cream & Onion Crisps - Pack of 2
      </span>
    </div>
  );
};

export default Breadcrumb;
