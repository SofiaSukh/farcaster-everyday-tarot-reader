import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1a1a2e',
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
          color: 'white',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Stars background effect */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'radial-gradient(2px 2px at 20px 30px, #eee, transparent), radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent), radial-gradient(1px 1px at 90px 40px, #fff, transparent), radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.6), transparent), radial-gradient(2px 2px at 160px 30px, #ddd, transparent)',
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 100px',
            opacity: 0.3,
          }}
        />
        
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: 120,
              marginBottom: 20,
            }}
          >
            🔮
          </div>
          
          <h1
            style={{
              fontSize: 64,
              fontWeight: 'bold',
              margin: '0 0 20px 0',
              background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Daily Tarot Reader
          </h1>
          
          <p
            style={{
              fontSize: 32,
              color: '#b8c5d6',
              margin: '0 0 30px 0',
              maxWidth: '800px',
            }}
          >
            Discover what the universe has in store for you today
          </p>
          
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: 10,
              padding: '10px 20px',
              fontSize: 24,
              color: '#4ecdc4',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            ✨ Farcaster Mini App
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
