import React from "react";
import "./Home.css"

function Home() {
    return (
        <div className="containter-fluid">
            <div className="row justify-content-around no-gutters">
                <div className="col-4">
                    <div className="card-img fluid rounded-0" id="home-photo1">
                        <h2 id="imgLabel">About</h2>
                    </div>
                </div>


                <div className="col-4">
                    <div className="card-img fluid rounded-0" id="home-photo2">
                        <h2 id="imgLabel">Portfolio</h2>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card-img fluid rounded-0" id="home-photo3">
                        <h2 id="imgLabel">Contact</h2>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home;






