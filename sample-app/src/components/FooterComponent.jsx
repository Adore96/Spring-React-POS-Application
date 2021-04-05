import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'

class FooterComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <footer className="footer">

                    <div className="text-center p-3 bg-dark text-white"
                         style={{position: "fixed", bottom: "0", width: "100%"}}>
                        © 2020 Copyright :
                        <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
                    </div>

                </footer>
            </div>
        );
    }
}

export default FooterComponent;
