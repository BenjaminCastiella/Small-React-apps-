import React, { useState } from 'react'

export function LikeButton(){
    const [likes, setLike] = useState(0)

    return <button className='like-btn' onClick={() => setLike(likes + 1)}>Likes <span>{likes}</span></button>
}