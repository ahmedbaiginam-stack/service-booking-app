import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} Home Service Application. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#222",
    color: "white",
    textAlign: "center",
    padding: "15px",
    position: "relative",
    bottom: 0,
    width: "100%"
  }
};

export default Footer;