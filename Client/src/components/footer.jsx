import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        bottom: 0,
        right: "43.5%",
        position: "absolute",
        textAlign: "center",
        color: "gray"
      }}>
      <h6>Hello Comono {year} from Medellín</h6>
    </footer>
  );
}

export default Footer;
