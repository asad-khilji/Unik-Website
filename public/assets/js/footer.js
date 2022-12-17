const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <footer>

    <div class="row">
    <div class="col-11">
    <a href="index.html">
        <img src="./assets/images/logo.jpg" alt="Unik Logo" width="100%">
        </a>
    </div>

    <div class="col-4-1">
      <h3>MAILING ADDRESS</h3>
      <p>Unik International Inc</p>
      <p>50 Richboynton Rd</p>
      <p>Dover, NJ 07801</p>
      <p>Toll Free: (800) 766-8645</p>
      <p>Fax: (973) 343-6129</p>
      <p>Email: info@unikinternational.com</p>
    </div>

    <div class="col-4-1">
      <h3>QUICK LINKS</h3>
      <p>Become a Dealer</p>
      <p>Dealer Login</p>
      <p>FAQ</p>
      <p>About us</p>
      <p>Return Policy</p>
      <p>Privacy Policy</p>
      <p>Terms of Service</p>
    </div>

    <div class="col-4-1">
      <h3>FOLLOW US</h3>
      <a href="https://www.facebook.com/unikleather" target="_blank"><p>Facebook</p></a>
      <a href="https://www.instagram.com/unikinternational" target="_blank"><p>Instagram</p></a>
    </div>
  </div>

  </footer>
    `;
}

createFooter();