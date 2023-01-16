const { spawn } = require("child_process");
const { resolve } = require("path");

const parent = process.argv[2]

let videos = []

if(process.argv[2]){
  const start = parseInt(process.argv[3])
  const end = parseInt(process.argv[4])

  for(let i = start; i <= end; i++){
    videos.push(i);
  }
  videos.reverse();
  processVideo()
} else {
  console.log('Necessario criar diretorio');
}

function resize(video, quality){
  const p = new Promise((res, rej) => {
    const ffmpeg = spawn('./ffmpeg/bin/ffmpeg', [
      '-i',
      `${parent}/${video}.mp4`,
      '-codec:v',
      'libx264',
      '-profile:v',
      'main',
      '-preset',
      'slow',
      '-b:v',
      '400k',
      '-bufsize',
      '800k',
      '-vf',
      `scale=-2:${quality}`,
      '-threads',
      '0',
      '-b:a',
      '128k',
      `${parent}/video/${video}-${quality}.mp4`
    ])
    ffmpeg.stderr.on('data', (data) => {
      console.log(`error: ${data}`);
    })
    ffmpeg.on('close', (code) => {
      resolve()
    })
  })
  return p
}

async function processVideo(){
  let video = videos.pop()
  if(video){
    try{
      await resize(video, 720)
      await resize(video, 480)
      await resize(video, 360)

      console.log(`Videos renderizados ${video}`);
      processVideo()
    } catch(e){
      console.log(`erro no catch ${e}`);
    }
  }
}