import React, {useState } from 'react'
import axios from 'axios';
import HazeIcon from "./Images/haze.png"
import {
  Button,
  Container,
  Formcontainer,
  HeaderText,
  Input, Display,
  Paragraph,
  ParaContainer, Span,Para
} from "./Components/Styled"
import { DateChanger } from './utils/DateChange';


const App = () => {
  let [weatherdata, setweatherdata] = useState([]);
  let [error, setError] = useState()
  let [country, setcountry] = useState("");
  let [city, setcity] = useState("");
  let [loading, setloading] = useState(false)



  let handlevalue = (e: Event) => {
    setloading(true)
    e.preventDefault();
    let WeatherApi: string = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=309dd5634d67c5db21a6a9f3e0e51215`
    const fetchData = async (api: string) => {
      try {
        const result = await axios.get(api);
        setweatherdata(result.data);
      } catch (err: any) {
        setError(err);
      }
    }
    fetchData(WeatherApi)
    setloading(false);
    setcountry("");
    setcity("");

  }


  let { name, main, sys,visibility, wind }:any = weatherdata;

  return (
    <Container>
      {error?<Span style={{color:"red"}}>Please Enter valid City Name</Span>:null}
      {console.log(weatherdata)}
      <HeaderText>Weather App</HeaderText>
      <Formcontainer onSubmit={handlevalue}>
        <Input placeholder="Enter Country" value={country} onChange={(e: any) => setcountry(e.target.value)} />
        <Input placeholder="Enter City" value={city} onChange={(e: any) => setcity(e.target.value)} />
        <Button type="submit" value={loading} background="green">Submit</Button>
      </Formcontainer>
      <Display>
        <Paragraph border={null}>{name} {sys?.country} Weather</Paragraph>
        <Para border={null}>{main ? Math.trunc(main.temp - 273.15) : null} <img src={HazeIcon} height="40px" width="40px"></img></Para>
      </Display>
      <ParaContainer>
        <Paragraph>High/Low  <Span>{main ?Math.trunc(main.temp - 273.15): null}</Span> </Paragraph>
        <Paragraph>Wind <Span>{wind ? wind.speed + " km/h" : null}</Span></Paragraph>
        <Paragraph>Humidity <Span>{main ? main.humidity + "%" : null}</Span></Paragraph>
        <Paragraph>Wind Direction <Span>{wind?wind.deg + " deg" :null}</Span></Paragraph>
        <Paragraph>Pressure <Span>{main ? main.pressure : null}</Span></Paragraph>
        <Paragraph>Sunrise <Span>{sys?DateChanger(sys.sunrise):null}</Span></Paragraph>
        <Paragraph>Visibility <Span>{visibility}Km</Span></Paragraph>
        <Paragraph>Sunset <Span>{sys?DateChanger(sys.sunset):null}</Span></Paragraph>
      </ParaContainer>

    </Container>
  )
}

export default App