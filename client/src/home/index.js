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
    const [gender, setGender] = useState("girls");
    

    const generateText = async (prompt, gender) => {
        const response = await fetch(`/api/generate?gender=${gender}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt
            }),
        });
        if (!response.ok) {
            throw new Error('The data could not be fetched');
        }
        saveDataToGoogleSheet();
        const data = await response.json();
        let linesFetched = data.data.slice(1);
        let formattedLines = linesFetched.split('\n');
        // let formattedLines = [
        //     "",
        //     "1. \"If I could rearrange the alphabet, I'd put U and I together.\"",
        //     "2. \"Are you from Korea? Because you're my Seoulmate!\""
        // ]
        // console.log("formattedLines - ", formattedLines.slice(1));
        setPickupLines(formattedLines.slice(1).filter((item) => item !== ""));
    }

    const saveDataToGoogleSheet = async () => {
        await fetch('/api/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }

    

    const inputChange = (event) => {
        const { value } = event.target;
        setPrompt(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        generateText(prompt, gender);
        setPrompt("");
    }

    const handleNextClick = (activePage, totalPages, clickAction) => {
        if (activePage === totalPages.length - 1) return
        clickAction(activePage + 1)
    }

    const handlePrevClick = (activePage, clickAction) => {
        if (activePage !== 0) clickAction(activePage - 1)
    }

    const handleGenderChange = (event) => {
        const { value } = event.target;
        setGender(value);
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
                    Pick your favourite line to flat your <span className="hightlight-text">partner!</span>
                </div>
                <div className="sub-heading">
                Not able to start conversation even after getting matched? Here is a ChatGPT powered pickup line generator for you!!
                </div>
            </section>

            <section className="main-content-container">
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
                        <section className="gender-dropdown">
                            <label htmlFor="gender">Select gender</label>
                            <select name="gender" id="cars" onChange={handleGenderChange} value={gender}>
                                <option value="girls">Lines For Girls</option>
                                <option value="boys">Lines For Boys</option>
                            </select>
                        </section>
                    </form>
                </section>
                <List pickupLines={pickupLines}
                    handleNextClick={handleNextClick}
                    handlePrevClick={handlePrevClick}
                />
            </section>
            </section>
            
        </div>
        <footer>
            <section className="footer-logo">
                <div className="logo"><img className="logo-img" src={Logo} alt="logo" />
                    <div className="logo-text">Pick My Line</div></div>
            </section>
            <section className="links">
                <div><a href="https://linktr.ee/pickmyline" target="_blank" rel="noreferrer">Team</a></div>
                <div><a href="https://forms.gle/zujJufCBbWvVVofS6" target="_blank" rel="noreferrer">Contact Us</a></div>
            </section>
            <section className="social-handles">
                <img src={facebook} alt="facebook_icon" onClick={saveDataToGoogleSheet}/>
                <img src={twitter} alt="twitter_icon" onClick={saveDataToGoogleSheet}/>
                <img src={instagram} alt="instagram" onClick={saveDataToGoogleSheet}/>
                <img src={linkedin} alt="linkedin" onClick={saveDataToGoogleSheet}/>
            </section>
            <section className="links">
                <div>Designed with love by <a href="https://destlab.in/" target="_blank" rel="noreferrer" >DestLab</a></div>
            </section>
        </footer>
    </>
    )
}

export default PickMyLine