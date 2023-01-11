import "./home.css";
import React, { Fragment } from "react";
function HomeCover() {
    return (
        <Fragment>
            <div className="banner-img">
                <h4 class="text-style">Ecommerce
                    <p style={{ fontSize: "2vw", color: " rgb(221, 247, 247)" }}>
                        Clothes that talk on behalf of you.Something for all
                        Occassion</p>
                </h4>
            </div>
            <div>
                <h4 style={{
                    fontWeight: "bolder",
                    backgroundColor: "aqua", textAlign: "center", marginTop: "5px"
                }}>Featured Products</h4>
            </div>
        </Fragment>
    );
}
export default HomeCover;