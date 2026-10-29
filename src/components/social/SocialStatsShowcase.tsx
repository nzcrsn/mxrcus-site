import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { socialStats } from "@/data/social-stats";

export function SocialStatsShowcase() {
  const channels = socialStats.filter((platform) => platform.profileUrl && !platform.handle.toLowerCase().includes("añadir"));

  return (
    <section className="section social-community social-channels" aria-labelledby="social-heading">
      <div className="container social-channels-layout">
        <Reveal className="social-channels-intro">
          <p className="eyebrow">04 / En otros espacios</p>
          <h2 id="social-heading">Las historias continúan.</h2>
          <p>Detrás de cada publicación hay personas, lugares y momentos que merecen ser compartidos. Sigue el trabajo y descubre nuevas historias.</p>
        </Reveal>
        <div className="social-channel-list">
          {channels.map((platform, index) => (
            <Reveal key={platform.name} delay={index * 90}>
              <Link className="social-channel-link" href={platform.profileUrl!} target="_blank" rel="noreferrer" aria-label={`Visitar ${platform.name}: ${platform.handle} (se abre en una pestaña nueva)`}>
                <span className="social-channel-index">0{index + 1}</span>
                <span className="social-channel-name">{platform.name}</span>
                <span className="social-channel-handle">{platform.handle}</span>
                <span className="social-channel-arrow" aria-hidden="true">↗</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
