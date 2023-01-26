import React, { useState } from 'react';
import "./home.css";
import List from './List';

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


    return (
        <div>
            <header>
            PickMyLine
            </header>
            <section>
                
            </section>
           

            <section style={{padding: "20px 30px"}}>
            <div id="cover">
                <form onSubmit={handleSubmit}>
                    <div class="tb">
                        <div class="td"><input type="text"
                            placeholder="Search"
                            required
                            name="prompt"
                            value={prompt}
                            onChange={inputChange}
                        />
                        </div>
                    <div class="td" id="s-cover">
                        <button type="submit">
                        <div id="s-circle"></div>
                        <span></span>
                        </button>
                    </div>
                    </div>
                </form>
                </div>
                <List pickupLines={pickupLines}/>
            </section>
            <footer>
            </footer>

        </div>
    )
}

export default PickMyLine