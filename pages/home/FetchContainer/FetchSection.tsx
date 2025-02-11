import useSWR from 'swr'
import Image from 'next/image'
import { useState } from 'react'
import { fetchAPI } from './_data/fetchAPI'
import styles from './FetchSection.module.scss'
import JSONMirror from './_components/JSONMirror'
import SearchAPI from './_components/SearchBar'
import DeathStarSVG from '@public/illustrations/death-star-bg.svg'
import { Typography } from '@mui/material'

/// Section for the search bar and codemirror
export default function FetchSection() {
  const [url, setURL] = useState<string>('https://swapi.dev/api/starships/10/')
  const { data, error } = useSWR(url, fetchAPI)

  return (
    <section className={styles.content}>
      <Typography variant="h4" className={styles.subtitle}>
        Take a look at the data below...
      </Typography>

      <SearchAPI searchRequest={(request) => setURL(request)} />
      <JSONMirror data={data ?? error} />

      <Image
        alt={'An illustration of the Death Star'}
        className={styles.DeathStar}
        src={DeathStarSVG}
        draggable={false}
      />
    </section>
  )
}
