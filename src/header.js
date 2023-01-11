import "./header.css";

function Header() {
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-light"
                style={{ backgroundImage: "linear-gradient(315deg,rgba(41, 41, 212,0.8),rgb(230, 62, 90))" }}>
                <div class="container-fluid">
                    <h3 class="b-logo font-effect-emboss">Ecomerce</h3>
                    <div class="nav-sbox ">
                        <input class="input1" type="text" placeholder="style,fashion,winter,shose,casuals,etc."></input>
                        <button class="btn1" style={{ backgroundColor: "coral" }}>Search</button>
                    </div>
                    <div class="nav-log-cart">
                        <a href="/"><button class="btn2" style={{ backgroundColor: "coral" }}>Login</button></a>
                        <a href="/"><i class="fa-solid fa-cart-shopping fa-2x i-1"></i></a>
                    </div>
                </div>
            </nav>

            <div style={{ backgroundColor: "rgb(198, 218, 235)" }}>
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link1" aria-current="page" href="home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link1" href="all_product">All Products</a>
                    </li>
                    <li class="dropdown">
                        <a role="button" class="nav-link1 dropdown-toggle" data-bs-toggle="dropdown" href="/">Mens</a>
                        <ul class="dropdown-menu">
                            <li>
                                <a class="dropdown-items nav-link1" href="/">Shirts</a>
                            </li>
                            <li>
                                <a class="dropdown-items nav-link1" href="/">Paints</a>
                            </li>
                            <li>
                                <a class="dropdown-items nav-link1" href="/">Winter Collection</a>
                            </li>
                            <li>
                                <a class="dropdown-items nav-link1" href="/">All</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a role="button" class="nav-link1 dropdown-toggle" data-bs-toggle="dropdown" href="/">Womens</a>
                        <ul class="dropdown-menu">
                            <li>
                                <a class="dropdown-items nav-link1" href="/">All</a>
                            </li>
                            <li>
                                <a class="dropdown-items nav-link1" href="/">Tops/Kurtis</a>
                            </li>
                            <li>
                                <a class="dropdown-items nav-link1" href="/">Skirt</a>
                            </li>
                            <li>
                                <a class="dropdown-items nav-link1" href="/">Winter Collection</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link1" href="/">Kids</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link1" href="/">Contact</a>
                    </li>
                </ul>
            </div>
        </header>
    );
}
export default Header;