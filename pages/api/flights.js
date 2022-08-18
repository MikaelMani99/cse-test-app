const flights = [
    {
        "Id": "1", 
        "Title": "Flights to the city of Barcelona, Spain, Spain",
        "MetaUri": "/spain/best-flights/to-barcelona",
        "Description": "Book cheap flights to the city of Barcelona starting at only 29.00 EUR from 199 countries. Browse 357 airlines offering 163 direct flights.",
        "DestinationId": "city:BCN",
        "DestinationCountry": "ES",
        "Image": {
            "Url":"https://i.imgur.com/iPfiZis.gif",
            "Handle":"58bQkmfPRTOA0hc9g7bq",
            "AltText":null,
            "GraphCmsId":null
        }
    },
    {
        "Id": "2", 
        "Title": "Flights to the city of Stockholm, Sweden, Sweden",
        "MetaUri": "/spain/best-flights/to-Stockholm",
        "Description": "Book cheap flights to the city of Stockholm starting at only 29.00 EUR from 199 countries. Browse 357 airlines offering 163 direct flights.",
        "DestinationId": "city:ARN",
        "DestinationCountry": "SE",
        "Image": {
            "Url":"https://i.imgur.com/iPfiZis.gif",
            "Handle":"58bQkmfPRTOA0hc9g7bq",
            "AltText":null,
            "GraphCmsId":null
        }
    },
    {
        "Id": "3", 
        "Title": "Flights to the city of Madrid, Spain, Spain",
        "MetaUri": "/spain/best-flights/to-Madrid",
        "Description": "Book cheap flights to the city of Madrid starting at only 29.00 EUR from 199 countries. Browse 357 airlines offering 163 direct flights.",
        "DestinationId": "city:MAD",
        "DestinationCountry": "ES",
        "Image": {
            "Url":"https://i.imgur.com/iPfiZis.gif",
            "Handle":"58bQkmfPRTOA0hc9g7bq",
            "AltText":null,
            "GraphCmsId":null
        }
    },
    {
        "Id": "4", 
        "Title": "Flights to the city of Granda, Spain, Spain",
        "MetaUri": "/spain/best-flights/to-granda",
        "Description": "Book cheap flights to the city of Granda starting at only 29.00 EUR from 199 countries. Browse 357 airlines offering 163 direct flights.",
        "DestinationId": "city:GRA",
        "DestinationCountry": "ES",
        "Image": {
            "Url":"https://i.imgur.com/iPfiZis.gif",
            "Handle":"58bQkmfPRTOA0hc9g7bq",
            "AltText":null,
            "GraphCmsId":null
        }
    },
    {
        "Id": "5", 
        "Title": "Flights to the city of Bilbao, Spain, Spain",
        "MetaUri": "/spain/best-flights/to-bilbao",
        "Description": "Book cheap flights to the city of Bilbao starting at only 29.00 EUR from 199 countries. Browse 357 airlines offering 163 direct flights.",
        "DestinationId": "city:BIL",
        "DestinationCountry": "ES",
        "Image": {
            "Url":"https://i.imgur.com/iPfiZis.gif",
            "Handle":"58bQkmfPRTOA0hc9g7bq",
            "AltText":null,
            "GraphCmsId":null
        }
    },
    {
        "Id": "6", 
        "Title": "Flights to the city of helsinki, Finland, Finland",
        "MetaUri": "/finland/best-flights/to-Helsinki",
        "Description": "Book cheap flights to the city of Helsinki starting at only 29.00 EUR from 199 countries. Browse 357 airlines offering 163 direct flights.",
        "DestinationId": "city:HEL",
        "DestinationCountry": "FI",
        "Image": {
            "Url":"https://i.imgur.com/iPfiZis.gif",
            "Handle":"58bQkmfPRTOA0hc9g7bq",
            "AltText":null,
            "GraphCmsId":null
        }
    },
    {
        "Id": "7", 
        "Title": "Flights to the city of Turku, Finland, Finland",
        "MetaUri": "/finland/best-flights/to-turku",
        "Description": "Book cheap flights to the city of Turku starting at only 29.00 EUR from 199 countries. Browse 357 airlines offering 163 direct flights.",
        "DestinationId": "city:TUK",
        "DestinationCountry": "FI",
        "Image": {
            "Url":"https://i.imgur.com/iPfiZis.gif",
            "Handle":"58bQkmfPRTOA0hc9g7bq",
            "AltText":null,
            "GraphCmsId":null
        }
    },
    {
        "Id": "8", 
        "Title": "Flights to the city of Tampere, Finland, Finland",
        "MetaUri": "/finland/best-flights/to-tampere",
        "Description": "Book cheap flights to the city of Tampere starting at only 29.00 EUR from 199 countries. Browse 357 airlines offering 163 direct flights.",
        "DestinationId": "city:TAP",
        "DestinationCountry": "FI",
        "Image": {
            "Url":"https://i.imgur.com/iPfiZis.gif",
            "Handle":"58bQkmfPRTOA0hc9g7bq",
            "AltText":null,
            "GraphCmsId":null
        }
    },
    {
        "Id": "9", 
        "Title": "Flights to the city of Gothenburg, Sweden, Sweden",
        "MetaUri": "/sweden/best-flights/to-gothenburg",
        "Description": "Book cheap flights to the city of Gothenburg starting at only 29.00 EUR from 199 countries. Browse 357 airlines offering 163 direct flights.",
        "DestinationId": "city:GOT",
        "DestinationCountry": "SE",
        "Image": {
            "Url":"https://i.imgur.com/iPfiZis.gif",
            "Handle":"58bQkmfPRTOA0hc9g7bq",
            "AltText":null,
            "GraphCmsId":null
        }
    },
    {
        "Id": "10", 
        "Title": "Flights to the city of Reykjavík, Iceland, Iceland",
        "MetaUri": "/iceland/best-flights/to-iceland",
        "Description": "Book cheap flights to the city of Iceland starting at only 29.00 EUR from 199 countries. Browse 357 airlines offering 163 direct flights.",
        "DestinationId": "city:REK",
        "DestinationCountry": "IS",
        "Image": {
            "Url":"https://i.imgur.com/iPfiZis.gif",
            "Handle":"58bQkmfPRTOA0hc9g7bq",
            "AltText":null,
            "GraphCmsId":null
        }
    }
]

export default function handler(req, res) {
    const { flightId } = req.query
    res.status(200).json(flights.find(x => x.Id === flightId))
  }
  