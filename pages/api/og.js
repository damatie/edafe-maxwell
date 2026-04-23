import { ImageResponse } from 'next/og';

export const config = { runtime: 'edge' };

const INK = '#0E0E0C';
const PAPER = '#F2ECE0';
const ASH = '#9A9488';
const EMBER = '#C8533A';

const loadGoogleFont = async (family, weight = 400, italic = false) => {
  try {
    const name = family.replace(/ /g, '+');
    const axis = italic ? 'ital,wght@1,' : 'wght@';
    const url = `https://fonts.googleapis.com/css2?family=${name}:${axis}${weight}&display=swap`;
    const css = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0' },
    }).then((r) => r.text());
    const match = css.match(/src: url\((.+?)\) format/);
    if (!match) return null;
    return await fetch(match[1]).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
};

export default async function handler() {
  const [fraunces, frauncesItalic, mono] = await Promise.all([
    loadGoogleFont('Fraunces', 500),
    loadGoogleFont('Fraunces', 500, true),
    loadGoogleFont('JetBrains Mono', 500),
  ]);

  const fonts = [
    fraunces && { name: 'Fraunces', data: fraunces, style: 'normal', weight: 500 },
    frauncesItalic && {
      name: 'Fraunces',
      data: frauncesItalic,
      style: 'italic',
      weight: 500,
    },
    mono && { name: 'JetBrainsMono', data: mono, style: 'normal', weight: 500 },
  ].filter(Boolean);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: INK,
          color: PAPER,
          padding: '72px 88px',
          fontFamily: 'Fraunces',
        }}
      >
        {/* top kicker */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            fontFamily: 'JetBrainsMono',
            fontSize: 20,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: ASH,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                backgroundColor: EMBER,
              }}
            />
            EDAFE MAXWELL · EST 2018
          </div>
          <div>MANCHESTER, UK</div>
        </div>

        {/* name */}
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 0.88 }}>
          <div
            style={{
              fontSize: 188,
              letterSpacing: -6,
              color: PAPER,
            }}
          >
            Edafe
          </div>
          <div
            style={{
              fontSize: 188,
              letterSpacing: -6,
              color: ASH,
              fontStyle: 'italic',
              display: 'flex',
            }}
          >
            <span>Maxwell</span>
            <span style={{ color: EMBER, fontStyle: 'normal' }}>,</span>
          </div>
        </div>

        {/* role + tagline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <div style={{ width: 64, height: 1, backgroundColor: EMBER }} />
            <div
              style={{
                fontFamily: 'JetBrainsMono',
                fontSize: 22,
                color: ASH,
                letterSpacing: 4,
                textTransform: 'uppercase',
              }}
            >
              Senior Frontend Engineer · Founder
            </div>
          </div>
          <div
            style={{
              fontSize: 40,
              color: PAPER,
              fontStyle: 'italic',
              lineHeight: 1.2,
              maxWidth: 900,
            }}
          >
            Two AI products. One engineer.
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts,
    }
  );
}
