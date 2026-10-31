"use client";

import { useRef, useState } from "react";
import type { CoverageProject } from "@/types/coverage";

type CoverageCardProps = { project: CoverageProject; index?: number };

export function CoverageCard({ project, index = 0 }: CoverageCardProps) {
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
    <article className="coverage-list-item">
      <div className="coverage-list-media">
        <video ref={videoRef} src={project.video} poster={project.poster} playsInline muted loop preload="metadata" aria-label={`Vista previa: ${project.title}`} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)} />
        <span className="coverage-list-index" aria-hidden="true">0{index + 1}</span>
        <button type="button" className="coverage-play" aria-label={playing ? `Pausar ${project.title}` : `Reproducir ${project.title}`} aria-pressed={playing} onClick={togglePlayback}>
          <span className={`coverage-play-icon${playing ? " is-playing" : ""}`} aria-hidden="true" />
          <span className="visually-hidden">{playing ? "Pausar vídeo" : "Reproducir vídeo"}</span>
        </button>
      </div>
      <div className="coverage-list-copy">
        <p className="coverage-list-meta">{project.type} <span>·</span> {project.year} <span>·</span> {project.location}</p>
        <h4>{project.title}</h4>
        <p className="coverage-list-client">{project.client}</p>
        <p className="coverage-list-description">{project.description}</p>
        {project.role ? <p className="coverage-list-role"><span>Participación</span>{project.role}</p> : null}
      </div>
    </article>
  );
}
