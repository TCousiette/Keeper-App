import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Timur Taisumov ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
