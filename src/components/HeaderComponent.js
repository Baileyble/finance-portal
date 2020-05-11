import React from "react";
import {Jumbotron} from "reactstrap";

function Header(props) {
    return (
        <>
            <Jumbotron fluid className="mainHeader">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>Financial Portal</h1>
                            <h2>A great way to track your spending!</h2>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        </>
    )
}

export default Header