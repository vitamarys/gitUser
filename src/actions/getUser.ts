import axios from "axios"

const GITHUB_URL = 'https://api.github.com/users'


export const getUser = async (id: string ) =>{
    const data = await axios.get(`${GITHUB_URL}/${id}`)
    const {avatar_url , bio , html_url} = data.data;

    return {avatar_url, bio, html_url}

    
}