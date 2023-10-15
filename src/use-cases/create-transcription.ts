import path from 'path'
import { createReadStream } from 'fs'
import { openai } from '../lib/openai'

export async function createTranscription() {
  const videoPath = path.resolve(__dirname, '../../example.mp3')

  const audioReadStream = createReadStream(videoPath)

  const response = await openai.audio.transcriptions.create({
    file: audioReadStream,
    model: 'whisper-1',
    language: 'pt',
    response_format: 'json',
    temperature: 0,
  })

  const transcription = response.text

  return {
    transcription,
  }
}