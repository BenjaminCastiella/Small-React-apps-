import React, { useState } from 'react'

export function LikeButton(){
    const [isLiked, setIsLiked] = useState(false)
    const [likes, setLike] = useState(0)
    const [text, setText] = useState("Like")

    const handleClick = ()=>{
        if(!isLiked){
            setLike(likes + 1);
            setText("Dislike");
            setIsLiked(true);
        } else{
            setLike(likes - 1);
            setText("Like");
            setIsLiked(false);
        }
    } 

    return <button className='like-btn' onClick={() => handleClick()}>{text} <span>{likes}</span></button>
}