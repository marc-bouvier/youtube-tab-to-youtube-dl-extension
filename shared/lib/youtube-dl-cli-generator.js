export function youtubeDLCommandForVideo(videoUrl){

    return `youtube-dl ${videoUrl}`

}

export function youtubeDLCommandForMp3(videoUrl){

    return `youtube-dl --extract-audio --audio-format mp3 ${videoUrl}`

}