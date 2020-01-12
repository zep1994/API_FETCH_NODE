const path = require('path')
const express = require('express')

const app = express()

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use('/', (req, res, next) => {
    res.render('index.html.ejs')
})

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404'));
});

app.listen(3000)