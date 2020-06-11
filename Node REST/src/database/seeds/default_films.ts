import Knex from 'knex'
import axios from 'axios'

interface Filme{
    title: string,
    description: string,
    director: string,
    release_date: string,
    rt_score: string
}

export async function seed(knex: Knex){

    const result = await axios.get('https://ghibliapi.herokuapp.com/films')
    
    const map = result.data.map(({title, description, director, release_date, rt_score}: Filme) =>{
        return {
            title,
            description,
            director,
            release_date,
            rt_score,
            image: `${title.split(' ').join('')}.jpg`
        }
    })

    const filmes = {
        first: map[0],
        second: map[1],
        third: map[2],
        fourth: map[3],
        fifth: map[4],
        sixth: map[5],
        seventh: map[6],
        eighth: map[7],
        ninth: map[8],
        tenth: map[9],
        eleventh: map[10],
        twelfth: map[11],
        thirteenth: map[12],
        fourteenth: map[13],
        fifteenth: map[14],
        sixteenth: map[15],
        seventeenth: map[16],
        eighteenth: map[17],
        nineteenth: map[18],
        twentieth: map[19]
    }

    await knex('items').insert([
        filmes.first, filmes.second, filmes.third, filmes.fourth, filmes.fifth, filmes.sixth, filmes.seventh,
        filmes.eighth, filmes.ninth, filmes.tenth, filmes.eleventh, filmes.twelfth, filmes.thirteenth, filmes.fourteenth, filmes.fifteenth, filmes.sixteenth,
        filmes.seventeenth, filmes.eighteenth, filmes.nineteenth, filmes.twentieth
    ])
}