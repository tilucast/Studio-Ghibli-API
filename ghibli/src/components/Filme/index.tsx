import React, {useState, useEffect} from 'react'
import './styles.css'
import api from '../../services/api'

interface Filme {
    id: number,
    title: string,
    description: string,
    director: string,
    release_date: string,
    rt_score: string,
    image_url: string
}

const Filme = () =>{
    const [filmes, setFilmes] = useState<Filme[]>([])

    useEffect(() =>{
        api.get('/').then(res => {
            
        setFilmes(res.data)
        })
    }, [])

    function RandomHex ()  {
        return Math.floor(Math.random()*16777215).toString(16)
    }

    return (
        <main className="filmes">
            {filmes.map(({id, title, description, director, release_date, rt_score, image_url}) =>(
                <main className="filme" key={id}>

                    <div style={{backgroundImage: `linear-gradient(to left, #${RandomHex()}, #${RandomHex()})`}} className="filme-title">
                        <h2>{title}</h2>
                    </div>

                    <div className="image-description">
                        <p className="description">{description}</p>

                        <img src={image_url} alt="filme-imagem"/>
                    </div>

                    <h3>Director: {director}</h3>
                    <p className="release_date">Release Date: {release_date}</p>
                    <p className="rt_score">Rotten Tomatoes: {rt_score}</p>

                </main>
        ))}
        </main>
    )
}

export default Filme