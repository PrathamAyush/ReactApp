import "./footer.css";

function Footer() {

    return (
        <footer>
            <div class="div1-foot">
                <div class="container-fluid">
                    <div class="foot-flex">
                        <div>
                            <ul>
                                <li>
                                    <a href="mens" style={{ fontWeight: "bolder", color: "white", textDecoration: "none" }}>Mens</a>
                                </li>
                                <li><a href="/" class="foot-link">All</a></li>
                                <li><a href="/" class="foot-link">Shirts</a></li>
                                <li><a href="/" class="foot-link">Paints</a></li>
                                <li><a href="/" class="foot-link">Winter Collection</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <a href="women" style={{ fontWeight: "bolder", color: "white", textDecoration: "none" }}>Womens</a>
                                </li>
                                <li><a href="/" class="foot-link">All</a></li>
                                <li><a href="/" class="foot-link">Tops/Kurtis</a></li>
                                <li><a href="/" class="foot-link">Skirts</a></li>
                                <li><a href="/" class="foot-link">Winter Collection</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <a href="kids" style={{ fontWeight: " bolder", color: " white", textDecoration: "none" }}>Kids</a>
                                </li>
                                <li>All</li>
                                <li>pants</li>
                                <li>T-Shirt</li>
                                <li>winter collection</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li style={{ fontWeight: "bolder" }}>
                                    Links
                                </li>
                                <li><a href="/" class="foot-link">Home</a></li>
                                <li><a href="/" class="foot-link">Login</a></li>
                                <li><a href="/" class="foot-link">Contact</a></li>
                                <li>About</li>
                            </ul>
                        </div>
                    </div>
                    <hr style={{ color: "white" }}></hr>
                    <h5 style={{ textAlign: "center", color: "white", paddingBottom: "2px" }}><em>All Right Reserved By The H3rmit
                        Corp. pvt. Ltd </em>
                        <i class="fa-regular fa-copyright"></i>
                    </h5>
                </div>
            </div>
        </footer>
    );
}
export default Footer;