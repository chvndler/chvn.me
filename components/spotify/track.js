import styles from './spotify.module.css'

const Track = track => {
  return (
    <div className={styles.track_container}>
      <p>{track.ranking}</p>
      <div className={styles.tracks}>
        <a href={track.songUrl} target="_blank" rel="noopener noreferrer">
          {track.title}
        </a>
        <p>{track.artist}</p>
      </div>
    </div>
  )
}

export default Track
