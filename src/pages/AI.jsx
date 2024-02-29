import React, { useState } from "react";


function Ai(){
    const [prompt, setPrompt] = useState("");

    //Handle prompt input
    const handleromptInput = async (event) => {
        setPrompt(event.target.value);
    }

    // Image generation function
    async function Generate(){
        const url = `https://text-to-image7.p.rapidapi.com/?prompt=${prompt}&batch_size=1&negative_prompt=ugly%2C%20duplicate%2C%20morbid%2C%20mutilated%2C%20%5Bout%20of%20frame%5D%2C%20extra%20fingers%2C%20mutated%20hands%2C%20poorly%20drawn%20hands%2C%20poorly%20drawn%20face%2C%20mutation%2C%20deformed%2C%20blurry%2C%20bad%20anatomy%2C%20bad%20proportions`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'da1f632e13msh98c3bdbdee4427cp1d6fd5jsnfe1d29bdd539',
                    'X-RapidAPI-Host': 'text-to-image7.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.text();
                console.log(result);
            } catch (error) {
                console.error(error);
            }
    }

    return(
        <div className="container mx-auto p-4">
            <h1 className="text-2x1 font-bold mb-4">Generated Images</h1>

            <div className="mb-4">
                <label htmlFor="prompt" className="block mb-2 font-semibold">Enter Prompt:</label>
                <input type="text" name="prompt" value={prompt} className="w-full px-3 py-2 border rounded-md border-gray-400 focus:outline-none focus:border-blue-500" placeholder="Say it, we Make it...." onChange={handlePromptInput} />
            </div>

            <div className="flex flex-wrap justify-center">
                <img  />
            </div>
        </div>
    )
}

export default Ai;