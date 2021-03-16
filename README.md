# :tv:  Watchly: A Movie & TV Show App (Backend)
## Created by: Tyler Ivie
### Created in Node.js, Express.js, Mongoose, MongoDB on the backend. Svelte, JS, HTML, CSS on the frontend. This app will help you browse trending movies and add them to your watchlist

[Watchly App URL](https://dazzling-goldberg-74b32f.netlify.app/)

----------------------------------------------------------

## :truck:  Routes
### GET
1. As a user I can see all my movies (after adding at least one movie) in my watchlist. (api/movies)
```javascript 
router.get("/movies", async (req, res) => {
    const watchList = await WatchList.find()
    res.status(200).json({
        message: "Watchlist fetched!",
        watchList: watchList
    })
})
```
2. As a user I can see all my favorite movies. (api/favorites)
```javascript 
router.get("/favorites", async (req, res) => {
    const favorites = await FavList.find()
    res.status(200).json({
        message: "All favorite movies fetched!",
        favorites: favorites
    })
})
```
3. As a user I can see all my favorite movies. (api/movies)
4. As a user when navigated to the home screen, it is populated with currently trending movies for me to interact with. (https://dazzling-goldberg-74b32f.netlify.app)
### PUT
1. As a user I can check off a movie if I have watched it (api/updateList/:id)
2. As a user I can check off a movie if I have watched it (api/updateFavList/:id)
```javascript
router.put('/updateList/:id', (req, res) => {
    WatchList.findById(req.params.id, (err, list) => {
        if (err)
            console.log(handleError(err));
        list.update(req.body, (err) => {
            if (err)
                console.log(err);
            WatchList.find((err, list) => {
                if (err)
                    console.log(handleError(err));
                res.json(list);
            })
        })
    })
})
router.put('/updateFavList/:id', (req, res) => {
    FavList.findById(req.params.id, (err, list) => {
        if (err)
            console.log(handleError(err));
        list.update(req.body, (err) => {
            if (err)
                console.log(err);
            FavList.find((err, list) => {
                if (err)
                    console.log(handleError(err));
                res.json(list);
            })
        })
    })
})
```
### POST
1. As a user I can click on any trending movie and click by going to **ADD TO WATCHLIST**. This will add the following movie to my watchlist here (click on my Movies). (api/addList)
```javascript
router.post("/addList", async (req, res) => {
    WatchList.create({
        title: req.body.title,
        moviePoster: req.body.img, 
        dateReleased: req.body.dateReleased,
        watched: req.body.watched

    }, (err) => {
        if (err)
            console.log(err);
            WatchList.find((err, lists) => {
                
            if (err)
                console.log(handleError(err))
            res.status(200).json({
                message: "Movie added to watchlist!",
                lists: lists
            })
        })
    })
})
```
2. As a user I can click on any trending movie and click by going to the **HEART ICON**. This will add the following movie to my favorites list here (click on my Movies). (api/addFavorite)
```javascript 
router.post("/addFavorite", async (req, res) => {
    FavList.create({
        title: req.body.title,
        moviePoster: req.body.img,
        dateReleased: req.body.dateReleased,
        watched: req.body.watched

    }, (err) => {
        if (err)
            console.log(err);
            FavList.find((err, lists) => {
            if (err)
                console.log(handleError(err))
            res.status(200).json({
                message: "Movie added to your favorites!",
                lists: lists
            })
        })
    })
})
```
### DELETE
1. As a user I can removed a movie from my watchlist or favorites by clicking on the **TRASH ICON**. (api/deleteList/:id)
```javascript
router.delete('/deleteList/:id', (req, res) => {
    WatchList.remove({
        _id: req.params.id
    }, (err) => {
        if (err)
            console.log(handleError(err));
            WatchList.find((err, list) => {
                if (err)
                    console.log(handleError(err));
                res.status(200).json({
                    message: "Movie removed from your watchlist!",
                    list: list
                })
        })
    })
})
```