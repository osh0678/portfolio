import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#080b10',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Background glow */}
        <div style={{
          position: 'absolute',
          top: '-100px', right: '-100px',
          width: '600px', height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(26,58,107,0.8) 0%, transparent 70%)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-100px', left: '-100px',
          width: '500px', height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(13,42,26,0.8) 0%, transparent 70%)',
        }} />

        {/* Domain badge */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '40px',
        }}>
          <div style={{
            width: '8px', height: '8px',
            borderRadius: '50%',
            background: '#3fb950',
            boxShadow: '0 0 12px #3fb950',
          }} />
          <span style={{
            fontFamily: 'monospace',
            fontSize: '18px',
            color: '#58a6ff',
            letterSpacing: '0.05em',
          }}>
            se0ng.dev
          </span>
        </div>

        {/* Name */}
        <div style={{
          fontSize: '88px',
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: '-3px',
          marginBottom: '24px',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <span style={{ color: '#e6edf3' }}>Seonghwan</span>
          <span style={{
            background: 'linear-gradient(135deg, #58a6ff 0%, #bc8cff 100%)',
            backgroundClip: 'text',
            color: 'transparent',
            WebkitBackgroundClip: 'text',
          }}>Oh.</span>
        </div>

        {/* Subtitle */}
        <div style={{
          fontSize: '24px',
          color: '#7d8590',
          fontFamily: 'monospace',
          marginBottom: '48px',
        }}>
          Full-stack Developer — Java · Spring Boot · React · Next.js
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', gap: '12px' }}>
          {['Backend', 'Frontend', 'DevOps', 'Blockchain'].map(tag => (
            <div key={tag} style={{
              padding: '8px 20px',
              borderRadius: '100px',
              border: '1px solid rgba(88,166,255,0.3)',
              background: 'rgba(88,166,255,0.08)',
              color: '#58a6ff',
              fontSize: '14px',
              fontFamily: 'monospace',
            }}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
