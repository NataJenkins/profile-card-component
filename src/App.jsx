import ProfilePhoto from "./assets/image-victor.jpg";
import BgCard from "./assets/bg-pattern-card.svg";
import Pattern1 from "./assets/bg-pattern-top.svg";
import Pattern2 from "./assets/bg-pattern-bottom.svg";
import "./App.scss";

function App() {
    return (
        <main>
            <img src={Pattern1} alt="" className="pattern pattern-1" />
            <img src={Pattern2} alt="" className="pattern pattern-2" />
            <div className="card">
                <div className="banner">
                    <img src={BgCard} alt="" />
                </div>
                <div className="details">
                    <img src={ProfilePhoto} alt="" className="profile-pic" />
                    <h1>
                        Victor Crest <span>26</span>
                    </h1>
                    <p>London</p>
                </div>
                <div className="stats">
                    <div className="item">
                        <h2>80k</h2> <p>Followers</p>
                    </div>
                    <div className="item">
                        <h2>803k</h2> <p>Likes</p>
                    </div>
                    <div className="item">
                        <h2>1.4k</h2> <p>Photos</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default App;
