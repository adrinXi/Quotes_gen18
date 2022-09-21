import React from 'react'

const Quotes = ({quotesRandom, colorRandom, getRandomAll}) => {

    return (
        <article className='card'>
            <p style={{color: colorRandom}} className='card__quote'><b>{quotesRandom.quote}</b></p>
            <h1 style={{color: colorRandom}} className='card__author'>{quotesRandom.author}</h1>
            <button onClick={getRandomAll} style={{backgroundColor: colorRandom}} className='card__button'>&#62;</button>
        </article>
    )
}

export default Quotes