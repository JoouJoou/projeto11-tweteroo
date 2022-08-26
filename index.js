import express from "express";
import cors from "cors";


const app = express()
app.use(cors())
app.use(express.json())

const users = [{username: 'Luffy', avatar: 'https://i.pinimg.com/474x/7e/03/00/7e0300453428cdd3dd9883ebc35862f9.jpg'},
                {username: 'Zoro', avatar: 'https://johto.legiaodosherois.com.br/wp-content/uploads/2021/11/legiao_XHYJRSWAV1xl.jpg'},
                {username: 'Sanji', avatar: 'https://sm.ign.com/t/ign_br/screenshot/default/sanji-one-piece_fv5j.h720.jpg'},
]

const tweets = [
    {
    username: 'Luffy',
    avatar: 'https://i.pinimg.com/474x/7e/03/00/7e0300453428cdd3dd9883ebc35862f9.jpg',
    tweet: 'Eu vou ser o rei dos piratas!!'
    },
    {
    username: 'Luffy',
    avatar: 'https://i.pinimg.com/474x/7e/03/00/7e0300453428cdd3dd9883ebc35862f9.jpg',
    tweet: 'Eu vou ser o rei dos piratas!!'
    },
    {
    username: 'Luffy',
    avatar: 'https://i.pinimg.com/474x/7e/03/00/7e0300453428cdd3dd9883ebc35862f9.jpg',
    tweet: 'Eu vou ser o rei dos piratas!!'
    },
    {
    username: 'Luffy',
    avatar: 'https://i.pinimg.com/474x/7e/03/00/7e0300453428cdd3dd9883ebc35862f9.jpg',
    tweet: 'Eu vou ser o rei dos piratas!!'
    },
    {
    username: 'Luffy',
    avatar: 'https://i.pinimg.com/474x/7e/03/00/7e0300453428cdd3dd9883ebc35862f9.jpg',
    tweet: 'Eu vou ser o rei dos piratas!!'
    },
    {
    username: 'Luffy',
    avatar: 'https://i.pinimg.com/474x/7e/03/00/7e0300453428cdd3dd9883ebc35862f9.jpg',
    tweet: 'Eu vou ser o rei dos piratas!!'
    },
]


app.post("/sign-up", (req, res) => {
    users.push(req.body)
    res.send("OK")
})

app.get("/tweets", (req, res) => {
    const lastTweets = []
    if (tweets.length > 9) {
        for (let i = 0; i < 10; i++) {
            lastTweets.push(tweets.pop())
        }
    }
    else {
        for (let i of tweets) {
            lastTweets.push(i)
        }
    }
    res.send(lastTweets)
})

app.listen(5000, () => {console.log("Listen on 5000")})