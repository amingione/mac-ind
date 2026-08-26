import { readdir, readFile, mkdir, stat, writeFile } from 'node:fs/promises'
import { extname, basename, join } from 'node:path'
import { spawn } from 'node:child_process'

const projectRoot = process.cwd()
const sourceDirectory = join(projectRoot, 'public/images/jobsitePICS')
const outputDirectory = join(projectRoot, 'public/images/jobsite-thumbnails')
const versionFile = join(outputDirectory, '.thumbnail-version')
const thumbnailVersion = 'width-720-quality-55-v1'
const supportedExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp'])

function runSips(sourcePath, outputPath) {
  return new Promise((resolve, reject) => {
    const process = spawn(
      'sips',
      [
        '-Z',
        '720',
        '-s',
        'format',
        'jpeg',
        '-s',
        'formatOptions',
        '55',
        sourcePath,
        '--out',
        outputPath,
      ],
      { stdio: 'ignore' },
    )

    process.on('error', reject)
    process.on('exit', (code) => {
      if (code === 0) resolve()
      else reject(new Error(`sips exited with code ${code} for ${sourcePath}`))
    })
  })
}

await mkdir(outputDirectory, { recursive: true })

const sourceFiles = (await readdir(sourceDirectory))
  .filter((fileName) => supportedExtensions.has(extname(fileName).toLowerCase()))
  .sort((a, b) => a.localeCompare(b))

let generated = 0
let current = 0
const savedVersion = await readFile(versionFile, 'utf8').catch(() => '')
const settingsChanged = savedVersion.trim() !== thumbnailVersion

for (const fileName of sourceFiles) {
  const sourcePath = join(sourceDirectory, fileName)
  const outputPath = join(outputDirectory, `${basename(fileName, extname(fileName))}.jpg`)
  const sourceStats = await stat(sourcePath)
  const outputStats = await stat(outputPath).catch(() => null)

  if (!settingsChanged && outputStats && outputStats.mtimeMs >= sourceStats.mtimeMs) {
    current += 1
    continue
  }

  await runSips(sourcePath, outputPath)
  generated += 1
}

await writeFile(versionFile, `${thumbnailVersion}\n`)

console.log(
  `Gallery thumbnails ready: ${generated} generated, ${current} already current, ${sourceFiles.length} total.`,
)
