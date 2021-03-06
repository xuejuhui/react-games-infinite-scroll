const express = require('express');
require('dotenv').config();
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors())


app.get('/api/games', async (req, res) => {
    try {
        const response = await axios({
            url: 'https://api-v3.igdb.com/games/',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'user-key': process.env.API_KEY
            },
            data: `fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,collection,cover,created_at,dlcs,expansions,external_games,first_release_date,follows,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,popularity,pulse_count,rating,rating_count,release_dates,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,time_to_beat,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites,cover.*; offset ${req.query.startIndex};limit 30; `
        })
        const resJson = response.data
        res.send(resJson);
    } catch (err) {
        console.log(err)
    }


})

const port = process.env.port || 5000;

app.listen(port, () => console.log(`app is running on port ${port}`))
