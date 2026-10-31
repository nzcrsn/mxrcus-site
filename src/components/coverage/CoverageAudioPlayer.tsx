"use client";

import { useRef, useState } from "react";

export function CoverageAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <aside className="coverage-audio" aria-label="Banda sonora de Memorias y Trayectorias">
      <div className="coverage-audio-copy">
        <p className="eyebrow">Escucha el archivo</p>
        <h3>Una memoria también se escucha.</h3>
        <p>Una pieza sonora que acompaña este recorrido por las historias y coberturas de nuestra comunidad.</p>
      </div>
      <audio ref={audioRef} src="/media/audio/memorias-y-trayectorias.mp3" preload="none" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)} />
      <button className="coverage-audio-button" type="button" onClick={togglePlayback} aria-pressed={playing}>
        <span aria-hidden="true">{playing ? "Ⅱ" : "▶"}</span>
        {playing ? "Pausar audio" : "Reproducir audio"}
      </button>
    </aside>
  );
}
