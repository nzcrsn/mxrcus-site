"use client";

import { useRef, useState } from "react";
import type { CoverageProject } from "@/types/coverage";

type CoverageCardProps = { project: CoverageProject; featured?: boolean };

export function CoverageCard({ project, featured = false }: CoverageCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

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

  return (
    <article className={`coverage-card editorial-coverage-card${featured ? " coverage-card-featured" : ""}`}>
      <div className="coverage-media editorial-coverage-media">
        <video ref={videoRef} src={project.video} poster={project.poster} playsInline muted loop preload="metadata" aria-label={`Vista previa: ${project.title}`} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)} />
        <span className="coverage-media-label">
          <span>{project.type}</span>
          <span>{project.year} <i aria-hidden="true">·</i> {project.location}</span>
        </span>
        <button type="button" className="coverage-play" aria-label={playing ? `Pausar ${project.title}` : `Reproducir ${project.title}`} aria-pressed={playing} onClick={togglePlayback}>
          <span className={`coverage-play-icon${playing ? " is-playing" : ""}`} aria-hidden="true" />
          <span className="visually-hidden">{playing ? "Pausar vídeo" : "Reproducir vídeo"}</span>
        </button>
      </div>
      <div className="coverage-copy editorial-coverage-copy">
        <div className="coverage-title-block">
          <p className="story-meta">{project.client}</p>
          <h3>{project.title}</h3>
        </div>
        <div className="coverage-details">
          <p>{project.description}</p>
          {project.role ? <p className="coverage-role"><span>Realización</span>{project.role}</p> : null}
        </div>
      </div>
    </article>
  );
}
