import Header from "../components/Header";

function HearderOnly({children}) {
    return ( 
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
     );
}

export default HearderOnly;