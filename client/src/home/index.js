import React, { useState } from 'react';
import "./home.scss";
import List from './List';
import Logo from "../images/logo.svg"
import facebook from "../images/facebook.svg"
import twitter from "../images/twitter.svg"
import instagram from "../images/instagram.svg"
import linkedin from "../images/linkedin.svg"

function PickMyLine() {

    const [prompt, setPrompt] = useState("");
    const [pickupLines, setPickupLines] = useState([]);

    const generateText = async (prompt) => {
        // const response = await fetch('/api/generate', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         prompt
        //     }),
        // });
        // if (!response.ok) {
        //     throw new Error('That image could not be generated');
        //   }

        // const data = await response.json();
        // let linesFetched = data.data.slice(1);
        // let formattedLines = linesFetched.split('\n');
        let formattedLines = [
            "",
            "1. \"If I could rearrange the alphabet, I'd put U and I together.\"",
            "2. \"Are you from Korea? Because you're my Seoulmate!\""
        ]
        // console.log("formattedLines - ", formattedLines.slice(1));
        setPickupLines(formattedLines.slice(1));
    }

    // useEffect(() => {
    //     generateText("asian girls");
    // }, [])

    const inputChange = (event) => {
        const { value } = event.target;
        setPrompt(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("values - ", prompt);
        generateText(prompt);
        setPrompt("");
    }


    return (<>
        <div className="content">
            <header className="header-section">
                <section className="left-section">
                    <div className="logo"><img className="logo-img" src={Logo} alt="logo" />
                    <div className="logo-text">Pick My Line</div></div>
                </section>
                <section className="right-section"></section>
            </header>
            <section className="center-heading">
                <div className="bold-heading">
                    Pick your favourite line to flat your <span class="hightlight-text">partner!</span>
                </div>
                <div className="sub-heading">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </div>
            </section>


            <section className="main-content">
                <section>
                    <form onSubmit={handleSubmit}>
                        <section className="search-container">
                            <input type="text"
                                    placeholder="Enter your text"
                                    required
                                    name="prompt"
                                    value={prompt}
                                onChange={inputChange}
                                className="search-box"
                                />
                            <button type="submit" className="search-button">
                                    Get your Line
                            </button>
                        </section>
                        {/* <section className="gender-dropdown">
                        <label for="gender">Select gender</label>
                            <select name="gender" id="cars">
                                <option value="girls">Lines For Girls</option>
                                <option value="boys">Lines For Boys</option>
                            </select>
                        </section> */}
                    </form>
                </section>
                <List pickupLines={pickupLines} />
            </section>
        </div>
        <footer>
            <section className="footer-logo">
        <div className="logo"><img className="logo-img" src={Logo} alt="logo" />
        <div className="logo-text">Pick My Line</div></div>
            </section>
            {/* <section className="links">
                <div>Overview</div>
                <div>Teams</div>
                <div>Jobs</div>
                <div>Overview</div>
                <div>Overview</div>
            </section> */}
            <section className="social-handles">
                <img src={facebook} alt="facebook_icon"/>
                <img src={twitter} alt="twitter_icon"/>
                <img src={instagram} alt="instagram"/>
                <img src={linkedin} alt="linkedin"/>
            </section>
         </footer>
        </>
    )
}

export default PickMyLine