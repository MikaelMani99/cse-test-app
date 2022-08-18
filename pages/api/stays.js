const stays = [
    {
        "Id": "1", 
        "Title": "Resorts in Spain",
        "MetaUri": "/spain/best-stays/easter-stays",
        "Description": "Find the best Resort Stays in more than 3 destinations in Spain",
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
        "Title": "Cottages in Spain",
        "MetaUri": "/spain/best-stays/cottage-stays",
        "Description": "Find the best Cottages Stays in more than 3 destinations in Spain",
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
        "Title": "Guesthouses in Spain",
        "MetaUri": "/spain/best-stays/guesthosue-stays",
        "Description": "Find the best Gesthouses Stays in more than 3 destinations in Spain",
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
        "Title": "Hostels in Spain",
        "MetaUri": "/spain/best-stays/parasailing-stays",
        "Description": "Find the best hostels Stays in more than 3 destinations in Spain",
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
        "Title": "Hotels in Spain",
        "MetaUri": "/spain/best-stays/hotels-stays",
        "Description": "Find the best Hotels Stays in more than 3 destinations in Spain",
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
    const { stayId } = req.query
    res.status(200).json(stays.find(x => x.Id === stayId))
  }
  