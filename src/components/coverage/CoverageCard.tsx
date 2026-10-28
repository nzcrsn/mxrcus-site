"use client";

import { useRef, useState } from "react";
import type { CoverageProject } from "@/types/coverage";

type CoverageCardProps = {
  project: CoverageProject;
  featured?: boolean;
};

export function CoverageCard({ project, featured = false }: CoverageCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <article className={`coverage-card${featured ? " coverage-card-featured" : ""}`}>
      <div className="coverage-media">
        <video
          ref={videoRef}
          src={project.video}
          poster={project.poster}

          playsInline
          preload="metadata"
          aria-label={`${project.title} video preview`}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />
        <button
          type="button"
          className="coverage-play"
          aria-label={playing ? `Pause ${project.title}` : `Play ${project.title}`}
          aria-pressed={playing}
          onClick={togglePlayback}
        >
          <span aria-hidden="true">{playing ? "Stop" : "Play"}</span>
        </button>
        <div className="coverage-media-label" aria-hidden="true">
          <span>{project.type}</span>
          <span>{project.year}</span>
        </div>
      </div>

      <div className="coverage-copy">
        <div>
          <p className="story-meta">{project.client} · {project.location}</p>
          <h3>{project.title}</h3>
        </div>
        <div className="coverage-details">
          <p>{project.description}</p>
          <p className="coverage-role">{project.role}</p>
        </div>
      </div>
    </article>
  );
}
