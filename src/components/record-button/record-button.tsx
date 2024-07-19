import React, { useState, useCallback } from 'react';
import classNames from 'classnames';
import styles from './record-button.module.scss';
import { useReactMediaRecorder } from 'react-media-recorder-2';

export interface RecordButtonProps {
    className?: string;
}

export const RecordButton = ({ className }: RecordButtonProps) => {
    const [isRecording, setIsRecording] = useState(false);
    const { startRecording, stopRecording, mediaBlobUrl, clearBlobUrl } = useReactMediaRecorder({
        audio: true,
    });

    const handleMouseDown = useCallback(() => {
        if (!isRecording) {
            setIsRecording(true);
            startRecording();
        }
    }, [isRecording, startRecording]);

    const handleMouseUp = useCallback(async () => {
        if (isRecording) {
            setIsRecording(false);
            stopRecording();

            if (mediaBlobUrl) {
                const formData = new FormData();
                const response = await fetch(mediaBlobUrl);
                const blob = await response.blob();
                formData.append('file', blob);

                try {
                    const result = await fetch('http://your-server-domain/upload', {
                        method: 'POST',
                        body: formData,
                    });
                    const data = await result.json();
                    console.log(data); // Handle the response from the server
                } catch (error) {
                    console.error('Error uploading file:', error);
                }
            }
        }
    }, [isRecording, mediaBlobUrl, stopRecording]);

    return (
        <div className={classNames(styles.root, className)}>
            <button
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                className={classNames(styles.recordButton, { [styles.recording]: isRecording })}
            >
                Hold to Speak with APJ{' '}
            </button>
            {mediaBlobUrl && <audio src={mediaBlobUrl} controls />}
        </div>
    );
};
