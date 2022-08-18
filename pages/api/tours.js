const tours = [
    {
        "Id": "1", 
        "Title": "Easter Tours in Spain",
        "MetaUri": "/spain/best-tours-and-tickets/easter-tours",
        "Description": "Find the best Easter Tours in more than 3 destinations in Spain",
        "DestinationCountryCode": "ES",
        "Image": {
            "Url":"https://i.imgur.com/iPfiZis.gif",
            "Handle":"iPfiZis",
            "AltText":null,
            "GraphCmsId":null
        }
    },
    {
        "Id": "2", 
        "Title": "Jet Boating Tours in Spain",
        "MetaUri": "/spain/best-tours-and-tickets/jet-boating-tours",
        "Description": "Find the best Jet Boating Tours in more than 3 destinations in Spain",
        "DestinationCountryCode": "ES",
        "Image": {
            "Url":"https://i.imgur.com/iPfiZis.gif",
            "Handle":"iPfiZis",
            "AltText":null,
            "GraphCmsId":null
        }
    },
    {
        "Id": "3", 
        "Title": "Caving Tours in Spain",
        "MetaUri": "/spain/best-tours-and-tickets/caving-tours",
        "Description": "Find the best Caving Tours in more than 3 destinations in Spain",
        "DestinationCountryCode": "ES",
        "Image": {
            "Url":"https://i.imgur.com/iPfiZis.gif",
            "Handle":"iPfiZis",
            "AltText":null,
            "GraphCmsId":null
        }
    },
    {
        "Id": "4", 
        "Title": "Parasailing Tours in Spain",
        "MetaUri": "/spain/best-tours-and-tickets/parasailing-tours",
        "Description": "Find the best Parasailing Tours in more than 3 destinations in Spain",
        "DestinationCountryCode": "ES",
        "Image": {
            "Url":"https://i.imgur.com/iPfiZis.gif",
            "Handle":"iPfiZis",
            "AltText":null,
            "GraphCmsId":null
        }
    },
    {
        "Id": "5", 
        "Title": "Motorcycle Tours in Spain",
        "MetaUri": "/spain/best-tours-and-tickets/motorcycle-tours",
        "Description": "Find the best Motorcycle Tours in more than 3 destinations in Spain",
        "DestinationCountryCode": "ES",
        "Image": {
            "Url":"https://i.imgur.com/iPfiZis.gif",
            "Handle":"iPfiZis",
            "AltText":null,
            "GraphCmsId":null
        }
    },
]

export default function handler(req, res) {
    const { tourId } = req.query
    res.status(200).json(tours.find(x => x.Id === tourId))
  }
  