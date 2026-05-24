import { registerRoot, Composition, registerComposition } from 'remotion';
import React from 'react';

// 1. This is the design layout of your Short
const HighRetentionShortComposition = ({ text }) => {
    return (
        <div style={{
            flex: 1,
            backgroundColor: '#000000', // Deep black background
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'system-ui, sans-serif'
        }}>
            <h1 style={{
                color: '#ffffff', // Clean white text
                fontSize: '5rem',
                fontWeight: '900',
                textAlign: 'center',
                padding: '0 40px',
                textTransform: 'uppercase',
                textShadow: '0px 10px 20px rgba(0, 0, 0, 0.8)' // High-retention shadow pop
            }}>
                {text || "AI Content Loading..."}
            </h1>
        </div>
    );
};

// 2. This registers the video settings (1080x1920 portrait format, 30 FPS, 2 seconds long)
const RemotionVideo = () => {
    return (
        <>
            <Composition
                id="HighRetentionShort"
                component={HighRetentionShortComposition}
                durationInFrames={60}
                fps={30}
                width={1080}
                height={1920}
                defaultProps={{
                    text: "Default Display Text"
                }}
            />
        </>
    );
};

registerRoot(RemotionVideo);
      
