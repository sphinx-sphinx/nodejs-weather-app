const path = require('path')
const express = require('express')
const hbs = require('hbs')

// console.log(__dirname)
// console.log(__filename)

const app = express()
const port = process.env.PORT || 3000

//Define paths for express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../template/views')
const partialsPath = path.join(__dirname,'../template/partials')

//Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve 
app.use(express.static(publicDirectoryPath))


app.get('', (req,res) => {
    res.render('index',{
        title: 'Weather App',
        name: 'Hermes Margiela'

    })
})

app.get('/about', (req,res) => {
    res.render('about',{
        title: 'About Me',
        name: 'Hermes Margiela'
    })
})

app.get('/help', (req,res) => {
    res.render('help',{
        title: 'Help Page',
        name: 'Hermes Margiela'
    })
})

app.get('/help/*', (req,res) => {
    res.render('404',{
        title: '404',
        name: 'Hermes Margiela',
        erroMessage: 'Help Article Not Found'
    })
})


app.get('*', (req,res) =>{
    res.render('404', {
        title: '404',
        name:'Hermes Margiela',
        errorMessage:'Page Not FOund'
    })
})


// app.get('',(req,res) =>{
//     res.send('Hello Express!')
// })

// app.get('/help',(req,res) =>{
//     res.send('Help Page')
// })

// app.get('/about',(req,res) =>{
//     res.send('About Page')
// })


app.get('/weather',(req,res) =>{
    res.send('Weather Page')
})


app.listen(port,() =>{
    console.log('Server is up and running on port' + port)
})

