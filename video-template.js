import { registerRoot, AbsoluteFill } from 'remotion';
import React from 'react';

const VideoLayout = ({ text }) => {
    // Falls back to a clean default quote if no text payload is passed
    const activeText = text || "Type your captivating content hook here!";

    return (
        <AbsoluteFill style={{
            backgroundColor: '#0f172a', // Clean, deep cinematic slate blue background
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '60px',
            fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
            <div style={{
                fontSize: '64px',
                fontWeight: '900',
                color: '#ffffff',
                textAlign: 'center',
                textTransform: 'uppercase',
                letterSpacing: '-1px',
                lineHeight: '1.2',
                maxWidth: '900px',
                wordWrap: 'break-word',
                textShadow: '0px 8px 24px rgba(0, 0, 0, 0.5)' // Gives depth to the text layer
            }}>
                {activeText}
            </div>
        </AbsoluteFill>
    );
};

export const HighRetentionShort = () => {
    return (
        <VideoLayout text={window.remotion_props?.text} />
    );
};

registerRoot(HighRetentionShort);
