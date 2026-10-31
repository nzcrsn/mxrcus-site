"use client";

import { useRef, useState } from "react";
import type { CoverageProject } from "@/types/coverage";

type CoverageCardProps = { project: CoverageProject; index: number };

export function CoverageCard({ project, index }: CoverageCardProps) {
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
    <figure className="media-mosaic-item coverage-mosaic-item">
      <div className="media-mosaic-image coverage-mosaic-image">
        <video
          ref={videoRef}
          src={project.video}
          poster={project.poster}
          playsInline
          muted
          loop
          preload="metadata"
          aria-label={`Vista previa: ${project.title}`}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
        />
        <span className="media-mosaic-index" aria-hidden="true">0{index + 1}</span>
        <button
          type="button"
          className="coverage-play"
          aria-label={playing ? `Pausar ${project.title}` : `Reproducir ${project.title}`}
          aria-pressed={playing}
          onClick={togglePlayback}
        >
          <span className={`coverage-play-icon${playing ? " is-playing" : ""}`} aria-hidden="true" />
          <span className="visually-hidden">{playing ? "Pausar vídeo" : "Reproducir vídeo"}</span>
        </button>
      </div>
      <figcaption className="coverage-mosaic-caption">
        <p className="coverage-mosaic-meta">{project.client} <span>·</span> {project.year}</p>
        <h3>{project.title}</h3>
        <p className="coverage-mosaic-description">{project.description}</p>
        <div className="coverage-mosaic-credit">
          <span>{project.type}</span>
          <span>{project.location}</span>
        </div>
        {project.role ? <p className="coverage-mosaic-role"><span>Participación</span>{project.role}</p> : null}
      </figcaption>
    </figure>
  );
}
