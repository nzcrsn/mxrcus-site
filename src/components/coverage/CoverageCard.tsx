"use client";

import { useRef, useState } from "react";
import type { CoverageProject } from "@/types/coverage";

type CoverageCardProps = { project: CoverageProject; featured?: boolean };

export function CoverageCard({ project, featured = false }: CoverageCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  // Drop an MP3 at public/media/audio/<project.slug>.mp3. No extra wiring is needed.
  const audioSrc = project.audio ?? `/media/audio/${project.slug}.mp3`;

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      try { await video.play(); setPlaying(true); } catch { setPlaying(false); }
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      try { await audio.play(); setAudioPlaying(true); } catch { setAudioPlaying(false); }
    } else {
      audio.pause();
      setAudioPlaying(false);
    }
  };

  return (
    <article className={`coverage-card${featured ? " coverage-card-featured" : ""}`}>
      <div className="coverage-card-frame">
        <div className="coverage-media" data-playing={playing}>
          <video ref={videoRef} src={project.video} poster={project.poster} playsInline muted loop preload="metadata" aria-label={`${project.title} video preview`} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)} />
          <button type="button" className="coverage-play" aria-label={playing ? `Pausar ${project.title}` : `Reproducir ${project.title}`} aria-pressed={playing} onClick={togglePlayback}>
            <span className={`coverage-play-icon${playing ? " is-playing" : ""}`} aria-hidden="true" />
            <span className="visually-hidden">{playing ? "Pausar vídeo" : "Reproducir vídeo"}</span>
          </button>
          <div className="coverage-media-label" aria-hidden="true"><span>{project.type}</span><span>{project.year}</span></div>
        </div>
      </div>
      <div className="coverage-copy">
        <div><p className="story-meta">{project.client} · {project.location}</p><h3>{project.title}</h3></div>
        <div className="coverage-details">
          <p>{project.description}</p>
          {project.role ? <p className="coverage-role">{project.role}</p> : null}
          <div className="coverage-audio-control">
            <audio ref={audioRef} src={audioSrc} preload="none" onPlay={() => setAudioPlaying(true)} onPause={() => setAudioPlaying(false)} onEnded={() => setAudioPlaying(false)} />
            <button type="button" className="coverage-audio-button" onClick={toggleAudio} aria-pressed={audioPlaying}>
              <span aria-hidden="true">{audioPlaying ? "Ⅱ" : "▶"}</span>
              {audioPlaying ? "Pausar audio" : "Escuchar audio"}
            </button>
            <span className="coverage-audio-caption">Registro sonoro</span>
          </div>
        </div>
      </div>
    </article>
  );
}
