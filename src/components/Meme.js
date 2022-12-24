import React, { useEffect, useState } from "react"

export default function Meme(){

    const [meme, setmeme]= useState({
        toptext: "",
        bottext: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allmemey,setallmemey]= useState([])

    useEffect(()=> {
        async function getmemey(){
            const response= await fetch("https://api.imgflip.com/get_memes")
            const outer= await response.json()
            setallmemey(outer.data.memes)
        }
        getmemey()
    },[])

    function getmeme(){
        
        const randomNumber = Math.floor(Math.random() * allmemey.length)
        const url= allmemey[randomNumber].url
        setmeme(prev=> ({
            ...prev,
            randomImage: url
        }))

    }
    function handlechange(event){
        const{name,value}= event.target
        setmeme(prev=>({
            ...prev,
            [name]: value
        }))
    }
    return(
        <main>
            <div className="form">
                <input type="text"
                className="form-input"
                placeholder="Top text"
                name="toptext"
                value={meme.toptext}
                onChange={handlechange}
                 />
                <input type="text" placeholder="Bottom text" 
                className="form-input"
                name="bottext"
                value={meme.bottext}
                onChange={handlechange}
                 />
                <button className="form-button" onClick={getmeme}>GET MEME BUTTON</button>
            </div>
            <div className="meme">
            
            <img src= {meme.randomImage} alt ="imageys" className="meme-image" />  
            <h1 class="meme-text top" >{meme.toptext}</h1>
            <h1 class="meme-text bot">{meme.bottext}</h1>
        
            </div>
        </main>
    )
}