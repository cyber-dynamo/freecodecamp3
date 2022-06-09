import React from 'react';
import '../App.css';

function Main() { 
  const[meme,setMeme]=React.useState({
    topText:"",
    bottomText:"",
    randomImage:"http://i.imgflip.com/1bij.jpg"
  })
const[allMemes,setAllMemes]=React.useState([])
React.useEffect(()=>{
  fetch("https://api.imgflip.com/get_memes")
       .then(res=>res.json())        
       .then(data=>setAllMemes(data.data.memes))
},[]) 
function handleChange(event){
    const {name,value}=event.target
    setMeme(prevMeme =>({
      ...prevMeme, [name]:value
    }))
  } 
    function getMemeImage(){
        const randomNumber = Math.floor(Math.random()*allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
          ...prevMeme,
          randomImage:url
        }))
  }
    return(
     <section>
         <div className="meme-boxes">
           <input
           type="text"
           placeholder ="Top text"
           className="memebox1"
           name="topText"
           onChange={handleChange}
           value={meme.topText}
           />
           <input
           type="text"
           placeholder = "Bottom text"
           className="memebox2"
           name="bottomText"
           onChange={handleChange}
           value={meme.bottomText}
           />
         </div> 
         <button className="meme-button"
        onClick={getMemeImage}>
        Get a new meme image
        </button>
        <img src={meme.randomImage}
        className="main-image"/>
        <h2 className="toptext">{meme.topText}</h2>
        <h2 className="bottomtext">{meme.bottomText}</h2>
     </section>
    )
}

export default Main;