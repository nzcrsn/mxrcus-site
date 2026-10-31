"use client";

import { useRef, useState } from "react";
import type { CoverageProject } from "@/types/coverage";

type CoverageCardProps = { project: CoverageProject; index?: number };

const shapes = ["wide", "tall", "square", "wide"] as const;

export function CoverageCard({ project, index = 0 }: CoverageCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const shape = shapes[index % shapes.length];

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
    <figure className={`media-mosaic-item media-mosaic-${shape} coverage-mosaic-item`}>
      <div className="media-mosaic-image coverage-mosaic-image">
        <video ref={videoRef} src={project.video} poster={project.poster} playsInline muted loop preload="metadata" aria-label={`${project.title} video preview`} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)} />
        <span className="media-mosaic-index" aria-hidden="true">0{index + 1}</span>
        <button type="button" className="coverage-play" aria-label={playing ? `Pausar ${project.title}` : `Reproducir ${project.title}`} aria-pressed={playing} onClick={togglePlayback}>
          <span className={`coverage-play-icon${playing ? " is-playing" : ""}`} aria-hidden="true" />
          <span className="visually-hidden">{playing ? "Pausar vídeo" : "Reproducir vídeo"}</span>
        </button>
      </div>
      <figcaption className="coverage-mosaic-caption">
        <span className="coverage-mosaic-meta">{project.type} · {project.year} · {project.location}</span>
        <strong>{project.title}</strong>
        <span className="coverage-mosaic-client">{project.client}</span>
        <span className="coverage-mosaic-description">{project.description}</span>
      </figcaption>
    </figure>
  );
}
