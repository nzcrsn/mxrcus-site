"use client";

import { useRef, useState } from "react";

// Add your uploaded MP3 path here when it is ready.
const AUDIO_SRC = "";

export function CoverageAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio || !AUDIO_SRC) return;
    if (audio.paused) {
      try { await audio.play(); setPlaying(true); } catch { setPlaying(false); }
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="coverage-audio">
      {AUDIO_SRC ? <audio ref={audioRef} src={AUDIO_SRC} preload="none" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)} /> : null}
      <div className="coverage-audio-copy">
        <span className="coverage-audio-label">Paisaje sonoro</span>
        <span className="coverage-audio-note">Una pieza musical para acompañar este recorrido por el archivo.</span>
      </div>
      <button className="coverage-audio-button" type="button" onClick={togglePlayback} disabled={!AUDIO_SRC} aria-pressed={playing} aria-label={playing ? "Pausar música" : "Reproducir música"}>
        <span aria-hidden="true">{playing ? "Ⅱ" : "▶"}</span>
        {playing ? "Pausar" : "Audio próximamente"}
      </button>
    </div>
  );
}
