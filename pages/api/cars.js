const tours = [
    {
        "Id": "1", 
        "Title": "Vans for rent in Spain",
        "MetaUri": "/spain/best-car-rental/van-in-spain",
        "Description": "Find cheap vans for rent in Spain. Compare 1 different car rental companies in Spain.",
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
        "Title": "small cars for rent in Spain",
        "MetaUri": "/spain/best-car-rental/small-car-in-spain",
        "Description": "Find cheap small cars for rent in Spain. Compare 1 different car rental companies in Spain.",
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
        "Title": "sports cars for rent in Spain",
        "MetaUri": "/spain/best-car-rental/sport-car-in-spain",
        "Description": "Find cheap sports cars for rent in Spain. Compare 1 different car rental companies in Spain.",
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
        "Title": "Jeeps for rent in Spain",
        "MetaUri": "/spain/best-car-rental/jeep-in-spain",
        "Description": "Find cheap Jeeps for rent in Spain. Compare 1 different car rental companies in Spain.",
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
        "Title": "Red for rent in Spain",
        "MetaUri": "/spain/best-car-rental/red-in-spain",
        "Description": "Find cheap Red for rent in Spain. Compare 1 different car rental companies in Spain.",
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
    const { carId } = req.query
    res.status(200).json(cars.find(x => x.Id === carId))
  }
  