# Simple Blog System

## Endpoint

### `/articles`

Functionality: create new article using three required string fields: `title,body,author`

Method: `post`

    URL example: `/articles`
    req.body: {
        title : "title of blog 1",
        body : "this is body of blog 1",
        author : "ahmed askora"
    }

### `/articles`

Functionality: get all articles

Method: `get`

    URL example: `/articles`

### `/articles/{id}`

Functionality: get specific article by id

Method: `get`

    URL example: `/articles/63caff32b9fcc7bf6ebd2f30`

### `/articles?q=YOUR_QUERY`

Functionality: search for an article by title or body or author

Method: `get`

    ULR example1: `/articles?q=title`
    ULR example2: `/articles?q=tit`
    ULR example3: `/articles?q=this`
    ULR example4: `/articles?q=askora`
