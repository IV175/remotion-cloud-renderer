import { registerRoot, Composition } from 'remotion';
import React from 'react';

// The Main Design component
const ShortTemplate = ({ text }) => {
    return (
        <div style={{
            flex: 1,
            backgroundColor: '#0f172a', // Cinematic slate blue background
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '60px',
            fontFamily: 'system-ui, sans-serif'
        }}>
            <h1 style={{
                color: '#ffffff', // Crisp white text
                fontSize: '5.5rem',
                fontWeight: '900',
                textAlign: 'center',
                textTransform: 'uppercase',
                lineHeight: '1.2',
                letterSpacing: '-2px',
                textShadow: '0px 12px 24px rgba(0, 0, 0, 0.6)' // Thick text depth shadow
            }}>
                {text || "Loading Content Hook..."}
            </h1>
        </div>
    );
};

// Setting up the video properties to match your cloud trigger
const RemotionVideo = () => {
    return (
        <Composition
            id="HighRetentionShort"
            component={ShortTemplate}
            durationInFrames={60}
            fps={30}
            width={1080}
            height={1920}
            defaultProps={{
                text: "Default Display Text"
            }}
        />
    );
};

registerRoot(RemotionVideo);
