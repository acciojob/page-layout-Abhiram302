
import React from "react";

export default function PageLayout({ header, footer, children }) {
  return (
    <div>
      {header}
      {children}
      {footer}
    </div>
  );
}
