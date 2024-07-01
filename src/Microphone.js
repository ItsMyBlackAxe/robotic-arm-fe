
// // // // Microphone.js
// // // import React, { useState, useEffect } from 'react';
// // // import './App.css';
// // // import { Button } from '@mui/material';
// // // import MicIcon from '@mui/icons-material/Mic';
// // // import MicOffIcon from '@mui/icons-material/MicOff';

// // // const Microphone = () => {
// // //     const [isRecording, setIsRecording] = useState(false);
// // //     const [audioStream, setAudioStream] = useState(null);
// // //     const [spokenText, setSpokenText] = useState('');

// // //     useEffect(() => {
// // //         return () => {
// // //             if (audioStream) {
// // //                 audioStream.getTracks().forEach(track => track.stop());
// // //             }
// // //         };
// // //     }, [audioStream]);

// // //     const handleStartRecording = async () => {
// // //         try {
// // //             const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
// // //             setAudioStream(stream);
// // //             setIsRecording(true);
// // //             startSpeechRecognition();
// // //         } catch (error) {
// // //             console.error('Error accessing microphone:', error);
// // //         }
// // //     };

// // //     const handleStopRecording = () => {
// // //         console.log('Stop recording');
// // //         if (audioStream) {
// // //             console.log('Stop recording2');
// // //             audioStream.getTracks().forEach(track => track.stop());
// // //             setAudioStream(null);
// // //         }
// // //         console.log('Stop recording3');
// // //         setIsRecording(false);
// // //         stopSpeechRecognition();
// // //     };


// // //     let recognition;
// // //     if (!('webkitSpeechRecognition' in window)) {
// // //         console.warn('Speech Recognition API is not supported in this browser.');
// // //     } else {
// // //         recognition = new window.webkitSpeechRecognition();
// // //         recognition.continuous = true;
// // //         recognition.interimResults = true;

// // //         recognition.onresult = (event) => {
// // //             let interimTranscript = '';
// // //             let finalTranscript = '';

// // //             for (let i = event.resultIndex; i < event.results.length; i++) {
// // //                 const transcript = event.results[i][0].transcript;
// // //                 if (event.results[i].isFinal) {
// // //                     finalTranscript += transcript;
// // //                 } else {
// // //                     interimTranscript += transcript;
// // //                 }
// // //             }
// // //             setSpokenText(finalTranscript + interimTranscript);
// // //         };

// // //         recognition.onerror = (event) => {
// // //             console.error('Speech recognition error:', event.error);
// // //         };
// // //     }

// // //     const startSpeechRecognition = () => {
// // //         if (recognition) {
// // //             recognition.start();
// // //         }
// // //     };

// // //     const stopSpeechRecognition = () => {
// // //         if (recognition) {
// // //             recognition.stop();
// // //         }
// // //     };

// // //     return (
// // //         <div>
// // //             <h1>Hi there, I am your AI Assistant Buddy here!</h1>

// // //             {isRecording ? (
// // //                 <Button onClick={handleStopRecording}>
// // //                     <MicIcon style={{ fontSize: 60, color: 'blue' }} />
// // //                 </Button>
// // //             ) : (
// // //                 <Button onClick={handleStartRecording}>
// // //                     <MicOffIcon style={{ fontSize: 60, color: 'blue' }} />
// // //                 </Button>
// // //             )}

// // //             {spokenText && <p>Spoken Text: {spokenText}</p>}
// // //             <div className="iframe-container">
// // //                 <iframe
// // //                     width="600"
// // //                     // height="484"
// // //                     src="https://en.wikipedia.org/wiki/A._R._Rahman"
// // //                 ></iframe>
// // //             </div>

// // //         </div>
// // //         // </div>
// // //     );
// // // };

// // // export default Microphone;


// // // Microphone.js
// // import React, { useState, useEffect } from 'react';
// // import './App.css';
// // import { Button } from '@mui/material';
// // import MicIcon from '@mui/icons-material/Mic';
// // import MicOffIcon from '@mui/icons-material/MicOff';

// // const Microphone = () => {
// //     const [isRecording, setIsRecording] = useState(false);
// //     const [audioStream, setAudioStream] = useState(null);
// //     const [spokenText, setSpokenText] = useState('');

// //     useEffect(() => {
// //         return () => {
// //             if (audioStream) {
// //                 audioStream.getTracks().forEach(track => track.stop());
// //             }
// //         };
// //     }, [audioStream]);

// //     const handleStartRecording = async () => {
// //         try {
// //             const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
// //             setAudioStream(stream);
// //             setIsRecording(true);
// //             startSpeechRecognition();
// //         } catch (error) {
// //             console.error('Error accessing microphone:', error);
// //         }
// //     };

// //     const handleStopRecording = () => {
// //         if (audioStream) {
// //             audioStream.getTracks().forEach(track => track.stop());
// //             setAudioStream(null);
// //         }
// //         setIsRecording(false);
// //         stopSpeechRecognition();
// //     };

// //     let recognition;
// //     if ('webkitSpeechRecognition' in window) {
// //         recognition = new window.webkitSpeechRecognition();
// //         recognition.continuous = true;
// //         recognition.interimResults = true;

// //         recognition.onresult = (event) => {
// //             let finalTranscript = '';

// //             for (let i = event.resultIndex; i < event.results.length; i++) {
// //                 finalTranscript += event.results[i][0].transcript;
// //             }
// //             setSpokenText(finalTranscript);
// //             handleAssistantCommands(finalTranscript);
// //         };

// //         recognition.onerror = (event) => {
// //             console.error('Speech recognition error:', event.error);
// //         };
// //     } else {
// //         console.warn('Speech Recognition API is not supported in this browser.');
// //     }

// //     const startSpeechRecognition = () => {
// //         if (recognition) {
// //             recognition.start();
// //         }
// //     };

// //     const stopSpeechRecognition = () => {
// //         if (recognition) {
// //             recognition.stop();
// //         }
// //     };

// //     const handleAssistantCommands = (text) => {
// //         text = text.toLowerCase();
// //         console.log('User Said:', text);

// //         if (text.includes('time')) {
// //             const time = new Date().toLocaleTimeString();
// //             setSpokenText(`The time is ${time}`);
// //             speak(`The time is ${time}`);
// //         } else if (text.includes('date')) {
// //             const date = new Date().toLocaleDateString();
// //             setSpokenText(`Today's date is ${date}`);
// //             speak(`Today's date is ${date}`);
// //         } else if (text.includes('joke')) {
// //             const joke = 'Why don’t scientists trust atoms? Because they make up everything!';
// //             setSpokenText(joke);
// //             speak(joke);
// //         } else if (text.includes('wikipedia')) {
// //             const query = text.replace('wikipedia', '');
// //             searchWikipedia(query.trim());
// //         } else if (text.includes('open google')) {
// //             openUrl('https://www.google.com');
// //         } else if (text.includes('open google maps')) {
// //             openUrl('https://www.google.com/maps');
// //         } else if (text.includes('open gmail')) {
// //             openUrl('https://mail.google.com');
// //         } else if (text.includes('play')) {
// //             const searchTerm = text.replace('play', '').trim();
// //             playSpotify(searchTerm);
// //         } else {
// //             // Default response if command not recognized
// //             setSpokenText("Sorry, I didn't catch that. Can you repeat?");
// //             speak("Sorry, I didn't catch that. Can you repeat?");
// //         }
// //     };

// //     const speak = (text) => {
// //         // Implement text-to-speech logic here
// //         // Example: Use Web Speech API or another TTS service
// //         // For simplicity, you can use browser's built-in TTS like:
// //         if ('speechSynthesis' in window) {
// //             const utterance = new SpeechSynthesisUtterance(text);
// //             window.speechSynthesis.speak(utterance);
// //         }
// //     };

// //     const searchWikipedia = (query) => {
// //         // Implement Wikipedia search logic here
// //         // Example: Use Wikipedia API to fetch summaries
// //         // For demonstration, this is a basic placeholder:
// //         fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${query}`)
// //             .then(response => response.json())
// //             .then(data => {
// //                 const summary = data.extract;
// //                 setSpokenText(summary);
// //                 speak(summary);
// //             })
// //             .catch(error => {
// //                 console.error('Error fetching from Wikipedia:', error);
// //                 setSpokenText('Error fetching from Wikipedia');
// //                 speak('Error fetching from Wikipedia');
// //             });
// //     };

// //     const openUrl = (url) => {
// //         // Implement URL opening logic here
// //         // Example: Use window.open or other browser API
// //         window.open(url, '_blank');
// //     };

// //     const playSpotify = (searchTerm) => {
// //         // Implement Spotify search and play logic here
// //         // Example: Open Spotify with search term
// //         console.log('Playing song:', searchTerm);   
// //         window.open(`https://open.spotify.com/search/${searchTerm}`, '_blank');
// //     };

// //     return (
// //         <div>
// //             <h1>Hi there, I am your AI Assistant Buddy here!</h1>

// //             {isRecording ? (
// //                 <Button onClick={handleStopRecording}>
// //                     <MicIcon style={{ fontSize: 60, color: 'blue' }} />
// //                 </Button>
// //             ) : (
// //                 <Button onClick={handleStartRecording}>
// //                     <MicOffIcon style={{ fontSize: 60, color: 'blue' }} />
// //                 </Button>
// //             )}

// //             {spokenText && <p>Spoken Text: {spokenText}</p>}
// //         </div>
// //     );
// // };

// // export default Microphone;


// import React, { useState, useEffect } from 'react';
// import './App.css';
// import { Button } from '@mui/material';
// import MicIcon from '@mui/icons-material/Mic';
// import MicOffIcon from '@mui/icons-material/MicOff';

// const Microphone = () => {
//     const [isRecording, setIsRecording] = useState(false);
//     const [audioStream, setAudioStream] = useState(null);
//     const [spokenText, setSpokenText] = useState('');

//     let recognition;

//     useEffect(() => {
//         return () => {
//             if (audioStream) {
//                 audioStream.getTracks().forEach(track => track.stop());
//             }
//         };
//     }, [audioStream]);

//     const handleStartRecording = async () => {
//         try {
//             const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//             setAudioStream(stream);
//             setIsRecording(true);
//             startSpeechRecognition();
//         } catch (error) {
//             console.error('Error accessing microphone:', error);
//         }
//     };

//     const handleStopRecording = () => {
//         if (audioStream) {
//             audioStream.getTracks().forEach(track => track.stop());
//             setAudioStream(null);
//         }
//         setIsRecording(false);
//         stopSpeechRecognition();
//     };

//     if ('webkitSpeechRecognition' in window) {
//         recognition = new window.webkitSpeechRecognition();
//         recognition.continuous = true;
//         recognition.interimResults = true;

//         recognition.onresult = (event) => {
//             let finalTranscript = '';

//             for (let i = event.resultIndex; i < event.results.length; i++) {
//                 finalTranscript += event.results[i][0].transcript;
//             }
//             setSpokenText(finalTranscript);
//             handleAssistantCommands(finalTranscript);
//         };

//         recognition.onerror = (event) => {
//             console.error('Speech recognition error:', event.error);
//         };
//     } else {
//         console.warn('Speech Recognition API is not supported in this browser.');
//     }

//     const startSpeechRecognition = () => {
//         if (recognition) {
//             recognition.start();
//         }
//     };

//     const stopSpeechRecognition = () => {
//         if (recognition) {
//             recognition.stop();
//         }
//     };

//     const handleAssistantCommands = (text) => {
//         text = text.toLowerCase();
//         console.log('User Said:', text);

//         if (text.includes('time')) {
//             const time = new Date().toLocaleTimeString();
//             setSpokenText(`The time is ${time}`);
//             speak(`The time is ${time}`);
//         } else if (text.includes('date')) {
//             const date = new Date().toLocaleDateString();
//             setSpokenText(`Today's date is ${date}`);
//             speak(`Today's date is ${date}`);
//         } else if (text.includes('joke')) {
//             const joke = 'Why don’t scientists trust atoms? Because they make up everything!';
//             setSpokenText(joke);
//             speak(joke);
//         } else if (text.includes('wikipedia')) {
//             const query = text.replace('wikipedia', '');
//             searchWikipedia(query.trim());
//         } else if (text.includes('open google')) {
//             openUrl('https://www.google.com');
//         } else if (text.includes('open google maps')) {
//             openUrl('https://www.google.com/maps');
//         } else if (text.includes('open gmail')) {
//             openUrl('https://mail.google.com');
//         } else if (text.includes('play')) {
//             const searchTerm = text.replace('play', '').trim();
//             playSpotify(searchTerm);
//         } else {
//             // Default response if command not recognized
//             setSpokenText("Sorry, I didn't catch that. Can you repeat?");
//             speak("Sorry, I didn't catch that. Can you repeat?");
//         }
//     };

//     const speak = (text) => {
//         // Implement text-to-speech logic here
//         // Example: Use Web Speech API or another TTS service
//         // For simplicity, you can use browser's built-in TTS like:
//         if ('speechSynthesis' in window) {
//             const utterance = new SpeechSynthesisUtterance(text);
//             window.speechSynthesis.speak(utterance);
//         }
//     };

//     const searchWikipedia = (query) => {
//         // Implement Wikipedia search logic here
//         // Example: Use Wikipedia API to fetch summaries
//         // For demonstration, this is a basic placeholder:
//         fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${query}`)
//             .then(response => response.json())
//             .then(data => {
//                 const summary = data.extract;
//                 setSpokenText(summary);
//                 speak(summary);
//             })
//             .catch(error => {
//                 console.error('Error fetching from Wikipedia:', error);
//                 setSpokenText('Error fetching from Wikipedia');
//                 speak('Error fetching from Wikipedia');
//             });
//     };

//     const openUrl = (url) => {
//         // Implement URL opening logic here
//         // Example: Use window.open or other browser API
//         window.open(url, '_blank');
//     };

//     const playSpotify = (searchTerm) => {
//         // Implement Spotify search and play logic here
//         // Example: Open Spotify with search term
//         window.open(`https://open.spotify.com/search/${searchTerm}`, '_blank');
//     };

//     return (
//         <div>
//             <h1>Hi there, I am your AI Assistant Buddy here!</h1>

//             {isRecording ? (
//                 <Button onClick={handleStopRecording}>
//                     <MicIcon style={{ fontSize: 60, color: 'blue' }} />
//                 </Button>
//             ) : (
//                 <Button onClick={handleStartRecording}>
//                     <MicOffIcon style={{ fontSize: 60, color: 'blue' }} />
//                 </Button>
//             )}

//             {spokenText && <p>Spoken Text: {spokenText}</p>}
//         </div>
//     );
// };

// export default Microphone;


import React, { useState, useEffect } from 'react';
import './App.css';
import { Button } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';

const Microphone = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [audioStream, setAudioStream] = useState(null);
    const [spokenText, setSpokenText] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);

    let searchQuery;

    let recognition;

    useEffect(() => {
        return () => {
            if (audioStream) {
                audioStream.getTracks().forEach(track => track.stop());
            }
        };
    }, [audioStream]);

    useEffect(() => {
        if ('webkitSpeechRecognition' in window) {
            recognition = new window.webkitSpeechRecognition();
            recognition.continuous = true;
            recognition.interimResults = true;

            // setTimeout(() => {
            recognition.onstart = () => {
                speak('Hi there');
                console.log('Speech recognition started');
            };
            // }, 2000)

            // recognition.onresult = (event) => {
            //     let finalTranscript = '';

            //     for (let i = event.resultIndex; i < event.results.length; i++) {
            //         finalTranscript += event.results[i][0].transcript;
            //     }

            //     setSpokenText(finalTranscript);
            //     handleAssistantCommands(finalTranscript);
            // };

            recognition.onresult = (event) => {
                let finalTranscript = '';

                for (let i = event.resultIndex; i < event.results.length; i++) {
                    finalTranscript += event.results[i][0].transcript;
                }

                setSpokenText(finalTranscript);

                // Clear any existing timeout to ensure only one delay is active
                if (recognition.timeoutId) {
                    clearTimeout(recognition.timeoutId);
                }

                // Set a new timeout to execute handleAssistantCommands after 4 seconds of silence
                recognition.timeoutId = setTimeout(() => {
                    handleAssistantCommands(finalTranscript);
                    recognition.timeoutId = null; // Reset timeout ID after execution
                }, 2000);
            };


            recognition.onerror = (event) => {
                console.error('Speech recognition error:', event.error);
            };

            recognition.onend = () => {
                console.log('Speech recognition ended');
                if (isRecording) {
                    startSpeechRecognition();
                }
            };
        } else {
            console.warn('Speech Recognition API is not supported in this browser.');
        }
    }, [isRecording]);

    const handleStartRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            setAudioStream(stream);
            setIsRecording(true);
            startSpeechRecognition();
        } catch (error) {
            console.error('Error accessing microphone:', error);
        }
    };

    const handleStopRecording = () => {
        if (audioStream) {
            audioStream.getTracks().forEach(track => track.stop());
            setAudioStream(null);
        }
        setIsRecording(false);
        stopSpeechRecognition();
    };

    const startSpeechRecognition = () => {
        if (recognition && !isProcessing) {
            setIsProcessing(true);
            setTimeout(() => {
                recognition.start();
                setIsProcessing(false);
            }, 2000); // Start recognition after 2 seconds of silence
        }
    };

    const stopSpeechRecognition = () => {
        if (recognition) {
            recognition.stop();
        }
    };

    const handleAssistantCommands = (text) => {
        text = text.toLowerCase().trim();
        console.log('User Said:', text);

        if (text.includes('time')) {
            const time = new Date().toLocaleTimeString();
            setSpokenText(`The time is ${time}`);
            speak(`The time is ${time}`);
        } else if (text.includes('date')) {
            const date = new Date().toLocaleDateString();
            setSpokenText(`Today's date is ${date}`);
            speak(`Today's date is ${date}`);
        } else if (text.includes('joke')) {
            const joke = 'Why don’t scientists trust atoms? Because they make up everything!';
            setSpokenText(joke);
            speak(joke);
        } else if (text.includes('wikipedia')) {
            const query = text.replace('wikipedia', '').trim();
            searchWikipedia(query);
        } else if (text.includes('find')) {
            const findQuery = text.replace('find', '').trim();
            // findQuery(findQuery);
            openUrl(findQuery);
        } else if (text.includes('open google maps')) {
            openUrl('https://www.google.com/maps');
        } else if (text.includes('open gmail')) {
            openUrl('https://mail.google.com');
        } else if (text.includes('play')) {
            speak('Playing song...');
            setSpokenText('Playing song...');
            const searchTerm = text.replace('play', '').trim();
            playSpotify(searchTerm);
        } else if (text.includes('stop')) {
            speak('Stopping...');
            setSpokenText('Stopping...');
            stopSpeechRecognition();
        } else if (text.includes('thank you')) {
            speak('You are welcome');
            setSpokenText('You are welcome');
        } else {
            // Default response if command not recognized
            setSpokenText("Sorry, I didn't catch that. Can you repeat?");
            speak("Sorry, I didn't catch that. Can you repeat?");
        }
    };

    const speak = (text) => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(utterance);
        }
    };


    const searchWikipedia = (query) => {
        fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${query}`)
            .then(response => response.json())
            .then(data => {
                const summary = data.extract;
                setSpokenText(summary);
                speak(summary);
            })
            .catch(error => {
                console.error('Error fetching from Wikipedia:', error);
                setSpokenText('Error fetching from Wikipedia');
                speak('Error fetching from Wikipedia');
            });
    };

    const openUrl = (url) => {
        speak('Here is more information on' + url);
        searchQuery = `https://www.google.com/search?q=${url}`;
        window.open(searchQuery, '_blank');
    };

    const playSpotify = (searchTerm) => {
        window.open(`https://open.spotify.com/search/${searchTerm}`, '_blank');
    };

    return (
        <div>
            <h1>Hi there, I am your AI Assistant Buddy here!</h1>

            {isRecording ? (
                <Button onClick={handleStopRecording}>
                    <MicIcon style={{ fontSize: 60, color: 'blue' }} />
                </Button>
            ) : (
                <Button onClick={handleStartRecording}>
                    <MicOffIcon style={{ fontSize: 60, color: 'blue' }} />
                </Button>
            )}


            {spokenText && <p>Spoken Text: {spokenText}</p>}


        </div>
    );
};

export default Microphone;
