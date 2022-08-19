import { URL_BASE } from "../../constants"

const urls = [
    { web:`${URL_BASE}/vps/1`, api: `${URL_BASE}/api/vps?vpId=1` },
    { web:`${URL_BASE}/vps/2`, api: `${URL_BASE}/api/vps?vpId=2` },
    { web:`${URL_BASE}/vps/3`, api: `${URL_BASE}/api/vps?vpId=3` },
    { web:`${URL_BASE}/vps/4`, api: `${URL_BASE}/api/vps?vpId=4` },
    { web:`${URL_BASE}/vps/5`, api: `${URL_BASE}/api/vps?vpId=5` },
    { web:`${URL_BASE}/stays/1`, api: `${URL_BASE}/api/stays?stayId=1` },
    { web:`${URL_BASE}/stays/2`, api: `${URL_BASE}/api/stays?stayId=2` },
    { web:`${URL_BASE}/stays/3`, api: `${URL_BASE}/api/stays?stayId=3` },
    { web:`${URL_BASE}/stays/4`, api: `${URL_BASE}/api/stays?stayId=4` },
    { web:`${URL_BASE}/stays/5`, api: `${URL_BASE}/api/stays?stayId=5` },
    { web:`${URL_BASE}/tours/1`, api: `${URL_BASE}/api/tours?tourId=1` },
    { web:`${URL_BASE}/tours/2`, api: `${URL_BASE}/api/tours?tourId=2` },
    { web:`${URL_BASE}/tours/3`, api: `${URL_BASE}/api/tours?tourId=3` },
    { web:`${URL_BASE}/tours/4`, api: `${URL_BASE}/api/tours?tourId=4` },
    { web:`${URL_BASE}/tours/5`, api: `${URL_BASE}/api/tours?tourId=5` },
    { web:`${URL_BASE}/cars/1`, api: `${URL_BASE}/api/cars?carId=1` },
    { web:`${URL_BASE}/cars/2`, api: `${URL_BASE}/api/cars?carId=2` },
    { web:`${URL_BASE}/cars/3`, api: `${URL_BASE}/api/cars?carId=3` },
    { web:`${URL_BASE}/cars/4`, api: `${URL_BASE}/api/cars?carId=4` },
    { web:`${URL_BASE}/cars/5`, api: `${URL_BASE}/api/cars?carId=5` },
    { web:`${URL_BASE}/flights/1`, api: `${URL_BASE}/api/flights?flightId=1` },
    { web:`${URL_BASE}/flights/2`, api: `${URL_BASE}/api/flights?flightId=2` },
    { web:`${URL_BASE}/flights/3`, api: `${URL_BASE}/api/flights?flightId=3` },
    { web:`${URL_BASE}/flights/4`, api: `${URL_BASE}/api/flights?flightId=4` },
    { web:`${URL_BASE}/flights/5`, api: `${URL_BASE}/api/flights?flightId=5` }
]

export default async function handler(req, res) {
    let response = [];
    
    for(const url of urls){
        const res = await fetch(url.api)
        const data = await res.json()
        data.WebUrl = url.web;
        response.push(data)
    }

    res.status(200).json(response)
  }
  