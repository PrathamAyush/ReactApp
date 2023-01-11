import "./home.css";
function Slide() {
    return (
        <div id="carouselExampleInterval" class="carousel slide " data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">

                    <div class="container-fluid featured-product">
                        <div class="">
                            <div class="row">

                                {/* <div class="col-sm-3"> */}

                                <div class="col-sm-12 col-md-6 col-lg-3 ">
                                    <div class="card" style={{ width: "auto", alignItems: "center" }}>
                                        <img src={require("./img/blue-gown.jpg")} class="card-img-top" alt=""
                                            style={{ width: "auto", height: "200px" }} />
                                        <div class="card-body">
                                            <h5 class="card-title">Blue Gown</h5>
                                            <span style={{ fontWeight: "bolder" }}>$15</span>
                                            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                            </p>
                                        </div>
                                        <a href="/" type="button" class="btn-cart"><i class="fa-solid fa-cart-shopping"></i>
                                            Add To
                                            Cart</a>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-6 col-lg-3 ">
                                    <div class="card d-none d-md-block" style={{ width: "auto", alignItems: "center" }}>
                                        <img src={require("./img/Cheap-Mesh-Short-Sexy-Red-Clubwear-Dresses.webp")}
                                            class="card-img-top" alt="" style={{ width: "auto", height: "200px" }}></img>
                                        <div class="card-body">
                                            <h5 class="card-title">Red Skirt</h5>
                                            <span style={{ fontWeight: "bolder" }}>$15</span>
                                            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                            </p>
                                        </div>
                                        <a href="/" type="button" class="btn-cart"><i class="fa-solid fa-cart-shopping"></i>
                                            Add To
                                            Cart</a>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-6 col-lg-3 ">
                                    <div class="card d-none d-md-block" style={{ width: "auto", alignItems: "center" }}>
                                        <img src={require("./img/denim-jacket.webp")} class="card-img-top" alt=""
                                            style={{ width: "auto", height: "200px" }}></img>
                                        <div class="card-body">
                                            <h5 class="card-title">Denim-Jacket</h5>
                                            <span style={{ fontWeight: "bolder" }}>$15</span>
                                            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                            </p>
                                        </div>
                                        <a href="/" type="button" class="btn-cart"><i class="fa-solid fa-cart-shopping"></i>
                                            Add To
                                            Cart</a>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-6 col-lg-3 ">
                                    <div class="card d-none d-md-block" style={{ width: "auto", alignItems: "center" }}>
                                        <img src={require("./img/sherwani.webp")} class="card-img-top" alt=""
                                            style={{ width: "auto", height: "200px" }}></img>
                                        <div class="card-body">
                                            <h5 class="card-title">Sherwani</h5>
                                            <span style={{ fontWeight: "bolder" }}>$15</span>
                                            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                            </p>
                                        </div>
                                        <a href="/" type="button" class="btn-cart"><i class="fa-solid fa-cart-shopping"></i>
                                            Add To Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="carousel-item">

                    <div class="container-fluid featured-product">
                        <div class="">
                            <div class="row">
                                <div class="col-sm-12 col-md-6 col-lg-3 ">
                                    <div class="card" style={{ width: "auto", alignItems: "center" }}>
                                        <img src={require("./img/earbud.webp")} class="card-img-top" alt="blue-gown"
                                            style={{ width: "auto", height: "200px" }}></img>
                                        <div class="card-body">
                                            <h5 class="card-title">Ear Bud</h5>
                                            <span style={{ fontWeight: "bolder" }}>$15</span>
                                            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing
                                                elit.
                                            </p>
                                        </div>
                                        <a href="/" type="button" class="btn-cart"><i class="fa-solid fa-cart-shopping"></i>
                                            Add To
                                            Cart</a>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-6 col-lg-3 ">
                                    <div class="card d-none d-md-block" style={{ width: "auto", alignItems: "center" }}>
                                        <img src={require("./img/headphone.png")} class="card-img-top" alt=""
                                            style={{ width: "auto", height: "200px" }}></img>
                                        <div class="card-body">
                                            <h5 class="card-title">HeadPhone</h5>
                                            <span style={{ fontWeight: "bolder" }}>$15</span>
                                            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing
                                                elit.
                                            </p>
                                        </div>
                                        <a href="/" type="button" class="btn-cart"><i class="fa-solid fa-cart-shopping"></i>
                                            Add To
                                            Cart</a>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-6 col-lg-3 ">
                                    <div class="card d-none d-md-block" style={{ width: "auto", alignItems: "center" }}>
                                        <img src={require("./img/watch1.png")} class="card-img-top" alt=""
                                            style={{ width: "auto", height: "200px" }}></img>
                                        <div class="card-body">
                                            <h5 class="card-title">Watch</h5>
                                            <span style={{ fontWeight: "bolder" }}>$15</span>
                                            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing
                                                elit.
                                            </p>
                                        </div>
                                        <a href="/" type="button" class="btn-cart"><i class="fa-solid fa-cart-shopping"></i>
                                            Add To
                                            Cart</a>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-6 col-lg-3 ">
                                    <div class="card d-none d-md-block" style={{ width: "auto", alignItems: "center" }}>
                                        <img src={require("./img/nackband.png")} class="card-img-top" alt=""
                                            style={{ width: "auto", height: "200px" }}></img>
                                        <div class="card-body">
                                            <h5 class="card-title">NeckBand</h5>
                                            <span style={{ fontWeight: "bolder" }}>$15</span>
                                            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing
                                                elit.
                                            </p>
                                        </div>
                                        <a href="/" type="button" class="btn-cart"><i class="fa-solid fa-cart-shopping"></i>
                                            Add To Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="carousel-item">

                    <div class="container-fluid featured-product">
                        <div class="">
                            <div class="row">
                                <div class="col-sm-12 col-md-6 col-lg-3 ">
                                    <div class="card" style={{ width: "auto", alignItems: "center" }}>
                                        <img src={require("./img/blue-gown.jpg")} class="card-img-top" alt="blue-gown"
                                            style={{ width: "auto", height: "200px" }}></img>
                                        <div class="card-body">
                                            <h5 class="card-title">Blue Gown</h5>
                                            <span style={{ fontWeight: "bolder" }}>$15</span>
                                            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing
                                                elit.
                                            </p>
                                        </div>
                                        <a href="/" type="button" class="btn-cart"><i class="fa-solid fa-cart-shopping"></i>
                                            Add To Cart</a>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-6 col-lg-3 ">
                                    <div class="card d-none d-md-block" style={{ width: "auto", alignItems: "center" }}>
                                        <img src={require("./img/Cheap-Mesh-Short-Sexy-Red-Clubwear-Dresses.webp")}
                                            class="card-img-top" alt="" style={{ width: "auto", height: "200px" }}></img>
                                        <div class="card-body">
                                            <h5 class="card-title">Red Skirt</h5>
                                            <span style={{ fontWeight: "bolder" }}>$15</span>
                                            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing
                                                elit.
                                            </p>
                                        </div>
                                        <a href="/" type="button" class="btn-cart"><i class="fa-solid fa-cart-shopping"></i>
                                            Add To Cart</a>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-6 col-lg-3 ">
                                    <div class="card d-none d-md-block" style={{ width: "auto", alignItems: "center" }}>
                                        <img src={require("./img/denim-jacket.webp")} class="card-img-top" alt=""
                                            style={{ width: "auto", height: "200px" }}></img>
                                        <div class="card-body">
                                            <h5 class="card-title">Denim-Jacket</h5>
                                            <span style={{ fontWeight: "bolder" }}>$15</span>
                                            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing
                                                elit.
                                            </p>
                                        </div>
                                        <a href="/" type="button" class="btn-cart"><i class="fa-solid fa-cart-shopping"></i>
                                            Add To Cart</a>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-6 col-lg-3 ">
                                    <div class="card d-none d-md-block" style={{ width: "auto", alignItems: "center" }}>
                                        <img src={require("./img/sherwani.webp")} class="card-img-top" alt=""
                                            style={{ width: "auto", height: "200px" }}></img>
                                        <div class="card-body">
                                            <h5 class="card-title">Sherwani</h5>
                                            <span style={{ fontWeight: "bolder" }}>$15</span>
                                            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing
                                                elit.
                                            </p>
                                        </div>
                                        <a href="/" type="button" class="btn-cart"><i class="fa-solid fa-cart-shopping"></i>
                                            Add To Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <a class="prev" role="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev" href="#slid">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="next" role="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next" href="#slid">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    )
}
export default Slide;