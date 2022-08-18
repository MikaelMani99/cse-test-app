const vps = [
        {
            "Id": "1", 
            "Title": "Best nature trips starting in Madrid",
            "MetaUri": "/spain/best-vacation-packages/nature-trips-in-madrid",
            "Description": "Choose from 4 unique nature trips in Europe touring the city of Madrid.",
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
            "Title": "Best nature trips starting in Barcelona",
            "MetaUri": "/spain/best-vacation-packages/nature-trips-in-barcelona",
            "Description": "Choose from 4 unique nature trips in Europe touring the city of Barcelona.",
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
            "Title": "Best nature trips starting in Lleida",
            "MetaUri": "/spain/best-vacation-packages/nature-trips-in-lleida",
            "Description": "Choose from 4 unique nature trips in Europe touring the city of Lleida.",
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
            "Title": "Best nature trips starting in Rioja",
            "MetaUri": "/spain/best-vacation-packages/nature-trips-in-rioja",
            "Description": "Choose from 4 unique nature trips in Europe touring the city of Rioja.",
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
            "Title": "Best nature trips starting in Santiago de Composte",
            "MetaUri": "/spain/best-vacation-packages/nature-trips-in-santiago-de-omposte",
            "Description": "Choose from 4 unique nature trips in Europe touring the city of Santiago de Composte.",
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
    const { vpId } = req.query
    res.status(200).json(vps.find(x => x.Id === vpId))
}