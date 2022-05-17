import { Box, Img, Text, Heading, Skeleton } from '@chakra-ui/react'
import React from 'react'
import backgroundSummer from '../weatherdisplay-icons/backgrounds/background-summer.png'
import backgroundWinter from '../weatherdisplay-icons/backgrounds/background-winter.png'
import backgroundSpring from '../weatherdisplay-icons/backgrounds/background-spring.jpg'
import backgroundAutumn from '../weatherdisplay-icons/backgrounds/background-Autumn.jpg'
import logo from '../weatherdisplay-icons/alpin11-font-dark.svg'
import storm from '../weatherdisplay-icons/weather/sturm.png'
import fog from '../weatherdisplay-icons/weather/fog.png'
import rain from '../weatherdisplay-icons/weather/regen.png'
import snow from '../weatherdisplay-icons/weather/schnee.png'
import sun from '../weatherdisplay-icons/weather/sonne.png'
import cloud from '../weatherdisplay-icons/weather/wolke.png'
import cloudy from '../weatherdisplay-icons/weather/wolkig.png'
import unknown from '../weatherdisplay-icons/weather/unknown.png'
import umbrella from '../weatherdisplay-icons/weather/regenschirm.png'
import humidity from '../weatherdisplay-icons/weather/Luftfeuchtigkeit.png'
import wind from '../weatherdisplay-icons/weather/wind.png'
import qrcode from '../weatherdisplay-icons/frame.png'
import dayjs from 'dayjs'
import { useQuery } from 'react-query'

const App = () => {
  const date = dayjs().format('D.MM.YYYY')
  const day = dayjs().format('dddd')
  const { data, isLoading } = useQuery('todos', async ({ signal }) => {
    return await fetch('https://api.weatherbit.io/v2.0/current?postal_code=6370&country=AT&key=bfb34b901f5845c5b384ba57c47fdf37', { signal })
      .then(res => res.json())
      .then(res => res.data[0])
      .catch(err => console.log(err))
  })
  const code = data?.weather.code
  let jahresZeit
  const m = dayjs().format('MMMM')
  if ((m < 'March') || ((m === 'March'))) { jahresZeit = backgroundWinter } else
  if ((m < 'June') || ((m === 'June'))) { jahresZeit = backgroundSpring } else
  if ((m < 'September') || ((m === 'September'))) { jahresZeit = backgroundSummer } else { jahresZeit = backgroundAutumn }

  let weatherIcon = null

  if (code <= 233) {
    weatherIcon = storm
  } else if ((code <= 522) && (code >= 234)) {
    weatherIcon = rain
  } else if ((code <= 623) && (code >= 523)) {
    weatherIcon = snow
  } else if ((code <= 751) && (code >= 624)) {
    weatherIcon = fog
  } else if ((code <= 801) && (code >= 752)) {
    weatherIcon = sun
  } else if (code === 802) {
    weatherIcon = cloudy
  } else if (code === 803) {
    weatherIcon = cloudy
  } else if (code === 804) {
    weatherIcon = storm
  } else if (code === 900) {
    weatherIcon = unknown
  }

  return (
    <Box w="100vw" h="100vh">
      <Img src={jahresZeit} w="100%" h="100%" position="relative" opacity="0.5"/>
      <Box position="absolute" alignItems="center" justifyContent="end" right="50px" bottom="full" top="50px" display="flex">
        <Img src={logo} h={['25px', '30px', '38px', '43px']} pr="50px" justifyContent="center"/>
        <Heading fontSize={['45px', '50px', '58px', '63px']} color="black">Country Club</Heading>
      </Box>
      <Box pos="absolute" bottom="0" w="full" display="flex" justifyContent="center" top="150px" h={['45px', '50px', '58px', '63px']}>
        <Heading fontSize="63px">Weather today in Kitzbühel</Heading>
      </Box>
      <Box position="absolute" w="full" display="flex" justifyContent="center" textAlign="center" flexDir="column" gap="30px" flexWrap="wrap" alignContent="center" bottom="160px">
        <Heading fontSize={['16px', '26px', '36px', '46px']} fontWeight={500}>{date}</Heading>
        <Box mb="15px">
          <Heading fontSize={['16px', '26px', '36px', '46px']} fontWeight={500}>{day}</Heading>
        </Box>
        <Img src={weatherIcon} h="220px" w="220px" ml="auto" mr="auto"/>
        <Skeleton isLoaded={!isLoading} mt="20px" display="flex" textAlign="center" justifyContent="center">
          <Text fontSize={['16px', '26px', '36px', '46px']} fontWeight={600} mr="50px">{data?.app_temp?.toFixed(0)}°</Text>
          <Text fontSize={['16px', '26px', '36px', '46px']} fontWeight={300}>{data?.dewpt?.toFixed(0)}°</Text>
        </Skeleton>
        <Skeleton isLoaded={!isLoading} display="flex" justifyContent="center">
          <Img src={umbrella} w="78px" h="78px" mr="50px"/>
          <Text fontSize={['16px', '26px', '36px', '46px']} fontWeight={300}>{data?.precip?.toFixed(0)}%</Text>
        </Skeleton>
        <Skeleton isLoaded={!isLoading} display="flex" justifyContent="center">
          <Img src={humidity} w="78px" h="78px" mr="50px"/>
          <Text fontSize={['16px', '26px', '36px', '46px']} fontWeight={300}>{data?.rh?.toFixed(0)}%</Text>
        </Skeleton>
        <Skeleton isLoaded={!isLoading} display="flex" justifyContent="center">
          <Img src={wind} w="78px" h="78px" mr="50px"/>
          <Text fontSize={['16px', '26px', '36px', '46px']} fontWeight={300}>{(data?.wind_spd ?? 0 * 3.6).toFixed(0)} km/h</Text>
        </Skeleton>
      </Box>
      <Box display="flex" flexDir="column" w="auto" textAlign="center" bottom="50px" position="absolute" right="50px" left="full">
        <Heading fontSize="66px" fontWeight={500}>Events:</Heading>
        <Img src={qrcode} w="220px" h="270px" ml="auto" mr="auto"/>
      </Box>
    </Box>
  )
}

export default App
