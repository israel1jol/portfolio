const Header = () => {
    return(
        <div className="cont">
            <div className="vh-75 my-1 custom-header">
                <div className="w-medium px-3">
                    <p className="leadFont">React + node . Laravel</p>
                    <div className="customFont">
                        Hey!, I'm Israel Adigun.
                    </div>
                    <div className="customFont">
                        A Full Stack Software Developer.
                    </div>
                    <br /><br />
                    <hr className="w-75"/>
                    <br />
                    <div>
                        <p className="lead text-success font">"Programming isn't about what you know; it's about what you can figure out.”</p>
                        <span className="text-primary">- Chris Pine</span>
                    </div>
                    <br /><br />
                    <button className="btn btn-outline-primary btn-lg">Contact Me</button>
                    
                    <br />
                    
                </div>
                <div className="header-right my-5">
                    <div className="box"></div>
                    <div className="box-1"></div>
                    <div className="box-2"></div>
                </div>
            </div>
        </div>
    )
}

export default Header