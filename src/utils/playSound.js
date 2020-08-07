export default function playSound (audioURL) {
  const audio = new Audio(audioURL)
  audio.play()
}
