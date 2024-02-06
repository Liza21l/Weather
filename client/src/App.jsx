import axios from "axios"
import { useState } from "react"
import s from "../src/style.module.scss"

const App = () => {
    const [city, setCity] = useState("")
    const [weatherData, setWeatherData] = useState(null)
    const key = `191d9f54d54842afb5e113242231105`
    const url = `http://api.weatherapi.com/v1/current.json`

    const onChangeCity = (newValue) => {
        setCity(newValue)
        console.log(city)
    }
    const getWeather = () => {
        axios.get(`${url}?key=${key}&q=${city}`)
        .then(res => {
            console.log(res.data)
            setWeatherData(res.data)
        })
    }
    return (
        <>
        <div>
            <p className={s.logo}>WeatherCity</p>
            <input 
            className={s.inputWeather}
            onChange={(e) => {onChangeCity(e.target.value)}}
            value={city}
            placeholder="Write city"
            />
            <button className={s.btnSearch} onClick={getWeather}>Search</button>
        </div>
        <div className={s.blockCard}>
            {
                weatherData &&
                <div className={s.cardWeather}>
                    <p className={s.cardWeather_name}>{weatherData.location.name}</p>
                    <p className={s.cardWeather_temp}>Temp now: {weatherData.current.temp_c}°C</p>
                    <p className={s.cardWeather_feelslike}>Feelslike: {weatherData.current.feelslike_c}°C</p>
                    <p className={s.cardWeather_cloud}>Cloud now: {weatherData.current.cloud}</p>
                </div>
            }
        </div>
        </>
    )
}
export default App