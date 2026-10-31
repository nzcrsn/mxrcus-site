"use client";

import { useRef, useState } from "react";
import type { CoverageProject } from "@/types/coverage";

type CoverageCardProps = { project: CoverageProject; featured?: boolean; index?: number };

export function CoverageCard({ project, featured = false, index = 0 }: CoverageCardProps) {
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
    <article className={`coverage-card${featured ? " coverage-card-featured" : ""}`}>
      <div className="coverage-media">
        <video ref={videoRef} src={project.video} poster={project.poster} playsInline muted loop preload="metadata" aria-label={`${project.title} video preview`} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)} />
        <button type="button" className="coverage-play" aria-label={playing ? `Pausar ${project.title}` : `Reproducir ${project.title}`} aria-pressed={playing} onClick={togglePlayback}>
          <span className={`coverage-play-icon${playing ? " is-playing" : ""}`} aria-hidden="true" />
          <span className="visually-hidden">{playing ? "Pausar vídeo" : "Reproducir vídeo"}</span>
        </button>
      </div>
      <div className="coverage-caption">
        <div className="coverage-caption-meta"><span>0{index + 1} / {project.type}</span><span>{project.year} · {project.location}</span></div>
        <h3>{project.title}</h3>
        <p className="coverage-client">{project.client}</p>
        <p className="coverage-description">{project.description}</p>
        {project.role ? <p className="coverage-role">{project.role}</p> : null}
      </div>
    </article>
  );
}
