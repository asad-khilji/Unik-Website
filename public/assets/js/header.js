const createHeader = () => {
    let header = document.querySelector('header');

    header.innerHTML = `
    <!-- Header Section -->

        <!-- First Section in the Header -->
        <section class="header-1">
        <header>
            <div class="logo">
              <a href="index.html">
                <img src="./assets/images/logo.jpg" alt="Unik Logo">
                </a>
                <input type="text" class="search" placeholder="Search..">
                <button class="submit">Search</button>
            </div>
          
        </section>

        <!-- Second Section in the Header -->
        <section class="header-2">
            <nav>
                <a href="#">Jackets</a>
                <a href="#">Vests</a>
                <a href="#">Chaps</a>
                <a href="#">Flannels</a>
                <a href="#">Hoodies</a>
                <a href="#">Rainsuits</a>
                <a href="#">Kids Apparel</a>
                <a href="#">Luggage</a>
                <a href="#">Ladies Bags</a>
                <a href="#">Gloves</a>
                <a href="#">Headwear</a>
                <a href="#">Accessories</a>
                <a href="#">Dealer Login</a>
            </nav>

        <div class="topnav" id="myTopnav">
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>    
    <a href="#">Jackets</a>
    <a href="#">Vests</a>
    <a href="#">Chaps</a>
    <a href="#">Flannels</a>
    <a href="#">Hoodies</a>
    <a href="#">Rainsuits</a>
    <a href="#">Kids Apparel</a>
    <a href="#">Luggage</a>
    <a href="#">Ladies Bags</a>
    <a href="#">Gloves</a>
    <a href="#">Headwear</a>
    <a href="#">Accessories</a>
    <a href="#">Dealer Login</a>
  </a>
</div>
        </section>

    </header>
    <!-- Load icon library -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    `;
}

createHeader();