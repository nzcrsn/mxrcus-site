"use client";

import { useRef, useState } from "react";

// Replace this placeholder with the path to the single MP3 uploaded for this page.
const AUDIO_SRC = "/media/audio/REEMPLAZAR-POR-TU-ARCHIVO.mp3";

export function CoverageAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      try { await audio.play(); setPlaying(true); } catch { setPlaying(false); }
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="coverage-audio">
      <audio ref={audioRef} src={AUDIO_SRC} preload="none" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)} />
      <span className="coverage-audio-label">Banda sonora · Memorias y Trayectorias</span>
      <button className="coverage-audio-button" type="button" onClick={togglePlayback} aria-pressed={playing}>
        <span aria-hidden="true">{playing ? "Ⅱ" : "▶"}</span>
        {playing ? "Pausar" : "Escuchar"}
      </button>
    </div>
  );
}
