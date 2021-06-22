import React, { useEffect, useState } from 'react'
import WordsList from './WordsList'

export default function WordsContainer() {
    const [words,setWords] = useState([])
    useEffect(() => {
        const fetchWords = async () => {
            const resp = await fetch('http://localhost:3001/words')
            const words = await resp.json()
            setWords(words)
        }
        fetchWords()
    },[]) // BLOG POST ABOUT IMPORTANCE OF SECOND ARGUMENT

    return (
        <>
            <WordsList words={words}/>
        </>
    )
}