function Footer () {
    var date = new Date();
    date = date.getFullYear();
  return (
    <footer className="footer">
        <p>Copyright {date}. All Rights Reserved</p>
    </footer>
  )
}

export default Footer;