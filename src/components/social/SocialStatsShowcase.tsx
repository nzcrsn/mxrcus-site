import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { socialStats } from "@/data/social-stats";

export function SocialStatsShowcase() {
  return (
    <section className="section social-community social-channels social-stats-section" aria-labelledby="social-heading">
      <div className="container social-channels-layout">
        <Reveal className="social-channels-intro">
          <p className="eyebrow">05 / Comunidad digital</p>
          <h2 id="social-heading">Las historias continúan.</h2>
          <p>Las historias salen del archivo y encuentran nuevas comunidades en cada plataforma.</p>
          <span className="stats-demo-note">Cifras de muestra · reemplazar por datos reales antes de publicar</span>
        </Reveal>
        <div className="social-stats-grid">
          {socialStats.map((platform, index) => {
            const content = <>
              <span className="social-stat-topline"><span>0{index + 1} / SOCIAL</span><span aria-hidden="true">↗</span></span>
              <span className="social-stat-platform">{platform.name}</span>
              <strong className="social-stat-count">{platform.followersLabel}</strong>
              <span className="social-stat-followers">seguidores <span className="social-stat-demo-tag">EJEMPLO</span></span>
              <span className="social-stat-handle">{platform.handle}</span>
            </>;
            const cardStyle = { "--social-accent": platform.accent } as React.CSSProperties;
            return <Reveal key={platform.name} delay={index * 100} className="social-stat-reveal">
              {platform.profileUrl ? <Link className="social-stat-card" href={platform.profileUrl} target="_blank" rel="noreferrer" style={cardStyle} aria-label={`Visitar ${platform.name}, se abre en una pestaña nueva`}>{content}</Link> : <div className="social-stat-card social-stat-card-disabled" style={cardStyle}>{content}</div>}
            </Reveal>;
          })}
        </div>
      </div>
    </section>
  );
}
