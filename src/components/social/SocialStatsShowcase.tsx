import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { socialStats } from "@/data/social-stats";

const completeStats = socialStats.filter(
  (platform) => typeof platform.followers === "number"
);
const totalFollowers = completeStats.reduce(
  (total, platform) => total + (platform.followers ?? 0),
  0
);
const maxFollowers = Math.max(
  0,
  ...completeStats.map((platform) => platform.followers ?? 0)
);
const allStatsAvailable = completeStats.length === socialStats.length;

function formatFollowers(value: number | null) {
  if (value === null) return "Por actualizar";
  return new Intl.NumberFormat("es-EC", { notation: "compact", maximumFractionDigits: 1 }).format(value);
}

export function SocialStatsShowcase() {
  return (
    <section className="section social-community" aria-labelledby="social-heading">
      <div className="container">
        <div className="social-intro">
          <Reveal>
            <p className="eyebrow">03 / Comunidad digital</p>
            <h2 id="social-heading">Las historias también conectan.</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="social-lede">
              Una comunidad que crece alrededor de la cultura, las personas y las historias que compartimos.
            </p>
          </Reveal>
        </div>

        <div className="social-total" aria-live="polite">
          <span className="social-total-label">Comunidad total</span>
          <strong>{allStatsAvailable ? formatFollowers(totalFollowers) : "Cifras por actualizar"}</strong>
          <span className="social-total-note">
            {allStatsAvailable ? "seguidores sumados entre las plataformas" : "Añade los datos reales en src/data/social-stats.ts"}
          </span>
        </div>

        <div className="social-bars">
          {socialStats.map((platform, index) => {
            const followers = platform.followers;
            const barWidth = followers !== null && maxFollowers > 0
              ? Math.max(2, (followers / maxFollowers) * 100)
              : 0;
            const details = (
              <>
                <span className="social-platform-name">{platform.name}</span>
                <span className="social-platform-handle">{platform.handle}</span>
              </>
            );

            return (
              <Reveal key={platform.name} delay={index * 90}>
                <div className="social-stat">
                  <div className="social-stat-heading">
                    <div className="social-platform">
                      {platform.profileUrl ? (
                        <Link href={platform.profileUrl} target="_blank" rel="noreferrer" aria-label={`Abrir perfil de ${platform.name} en una pestaña nueva`}>
                          {details}
                        </Link>
                      ) : (
                        <div>{details}</div>
                      )}
                    </div>
                    <strong className="social-stat-value">{formatFollowers(followers)}</strong>
                  </div>
                  <div
                    className="social-stat-track"
                    role="img"
                    aria-label={followers === null ? `Estadística de ${platform.name} pendiente de actualizar` : `${platform.name}: ${followers} seguidores`}
                  >
                    <span
                      className="social-stat-bar"
                      style={{ "--bar-width": `${barWidth}%`, "--bar-color": platform.accent } as React.CSSProperties}
                    />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
        <p className="social-footnote">Las cifras se muestran como datos editoriales y deben actualizarse con los conteos reales de cada perfil.</p>
      </div>
    </section>
  );
}
