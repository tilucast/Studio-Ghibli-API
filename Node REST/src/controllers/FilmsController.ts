import knex from '../database/connection'
import {Response, Request} from 'express'

class FilmsController {
    static async get(request: Request, response: Response){
        const films = await knex('items').select('*')

        const images = films.map(({id,title,description,director,release_date,rt_score,image}) =>{
            return {
                id,
                title,
                description,
                director,
                release_date,
                rt_score,
                image,
                image_url: `http://localhost:3333/uploads/${image}`
            }
        })

        return response.json(images)
    }
}

export default FilmsController