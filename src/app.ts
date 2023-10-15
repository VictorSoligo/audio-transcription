import { createTranscription } from "./use-cases/create-transcription"

async function main() {
  const { transcription } = await createTranscription()

  console.log(transcription)
}

main()