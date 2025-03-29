
import { Track } from '@/components/PlaylistTrack';
import { MoodType } from '@/components/MoodCard';

// Album art placeholder URLs
const albumArts = [
  'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=200&auto=format',
  'https://images.unsplash.com/photo-1461784180009-21b424341324?q=80&w=200&auto=format',
  'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=200&auto=format',
  'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=200&auto=format',
  'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=200&auto=format',
  'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=200&auto=format',
  'https://images.unsplash.com/photo-1454922915609-78549ad709bb?q=80&w=200&auto=format',
  'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=200&auto=format',
  'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=200&auto=format',
  'https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=200&auto=format',
];

const getRandomDuration = (): string => {
  const minutes = Math.floor(Math.random() * 3) + 2; // 2-4 minutes
  const seconds = Math.floor(Math.random() * 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

const getRandomAlbumArt = (): string => {
  return albumArts[Math.floor(Math.random() * albumArts.length)];
};

// Mood-specific track lists
const tracksByMood: Record<MoodType, Track[]> = {
  happy: [
    { id: 'h1', title: 'Sunny Day', artist: 'Happy Vibes', duration: getRandomDuration(), albumArt: getRandomAlbumArt() },
    { id: 'h2', title: 'Good Times', artist: 'Smile Factory', duration: getRandomDuration(), albumArt: getRandomAlbumArt() },
    { id: 'h3', title: 'Upbeat Journey', artist: 'Positive Notes', duration: getRandomDuration(), albumArt: getRandomAlbumArt() },
    { id: 'h4', title: 'Cheerful Melody', artist: 'Bright Sounds', duration: getRandomDuration(), albumArt: getRandomAlbumArt() },
    { id: 'h5', title: 'Joy Ride', artist: 'Happy Vibes', duration: getRandomDuration(), albumArt: getRandomAlbumArt() },
    { id: 'h6', title: 'Dancing Away', artist: 'Smile Factory', duration: getRandomDuration(), albumArt: getRandomAlbumArt() },
    { id: 'h7', title: 'Sunshine Pop', artist: 'Positive Notes', duration: getRandomDuration(), albumArt: getRandomAlbumArt() },
  ],
  calm: [
    { id: 'c1', title: 'Ocean Waves', artist: 'Tranquil Dreams', duration: getRandomDuration(), albumArt: getRandomAlbumArt() },
    { id: 'c2', title: 'Peaceful Mind', artist: 'Serene Sounds', duration: getRandomDuration(), albumArt: getRandomAlbumArt() },
    { id: 'c3', title: 'Gentle Rain', artist: 'Nature Harmony', duration: getRandomDuration(), albumArt: getRandomAlbumArt() },
    { id: 'c4', title: 'Quiet Evening', artist: 'Calm Waters', duration: getRandomDuration(), albumArt: getRandomAlbumArt() },
    { id: 'c5', title: 'Whisper of Trees', artist: 'Tranquil Dreams', duration: getRandomDuration(), albumArt: getRandomAlbumArt() },
    { id: 'c6', title: 'Soft Melody', artist: 'Serene Sounds', duration: getRandomDuration(), albumArt: getRandomAlbumArt() },
    { id: 'c7', title: 'Moonlight Sonata', artist: 'Nature Harmony', duration: getRandomDuration(), albumArt: getRandomAlbumArt() },
  ],
  focus: [
    { id: 'f1', title: 'Deep Concentration', artist: 'Focus Flow', duration: getRandomDuration(), albumArt: getRandomAlbumArt() },
    { id: 'f2', title: 'Study Session', artist: 'Mind Space', duration: getRandomDuration(), albumArt: getRandomAlbumArt() },
    { id: 'f3', title: 'Clear Thoughts', artist: 'Cognitive Beats', duration: getRandomDuration(), albumArt: getRandomAlbumArt() },
    { id: 'f4', title: 'Workflow', artist: 'Productive Sounds', duration: getRandomDuration(), albumArt: getRandomAlbumArt() },
    { id: 'f5', title: 'Brain Waves', artist: 'Focus Flow', duration: getRandomDuration(), albumArt: getRandomAlbumArt() },
    { id: 'f6', title: 'Mindful Minutes', artist: 'Mind Space', duration: getRandomDuration(), albumArt: getRandomAlbumArt() },
    { id: 'f7', title: 'Concentration Zone', artist: 'Cognitive Beats', duration: getRandomDuration(), albumArt: getRandomAlbumArt() },
  ],
  energetic: [
    { id: 'e1', title: 'Power Up', artist: 'Energy Boost', duration: getRandomDuration(), albumArt: getRandomAlbumArt() },
    { id: 'e2', title: 'High Voltage', artist: 'Electric Vibes', duration: getRandomDuration(), albumArt: getRandomAlbumArt() },
    { id: 'e3', title: 'Maximum Drive', artist: 'Adrenaline Rush', duration: getRandomDuration(), albumArt: getRandomAlbumArt() },
    { id: 'e4', title: 'Unstoppable', artist: 'Power Beats', duration: getRandomDuration(), albumArt: getRandomAlbumArt() },
    { id: 'e5', title: 'Momentum', artist: 'Energy Boost', duration: getRandomDuration(), albumArt: getRandomAlbumArt() },
    { id: 'e6', title: 'Full Throttle', artist: 'Electric Vibes', duration: getRandomDuration(), albumArt: getRandomAlbumArt() },
    { id: 'e7', title: 'Supercharged', artist: 'Adrenaline Rush', duration: getRandomDuration(), albumArt: getRandomAlbumArt() },
  ],
  melancholy: [
    { id: 'm1', title: 'Raindrops', artist: 'Reflective Mood', duration: getRandomDuration(), albumArt: getRandomAlbumArt() },
    { id: 'm2', title: 'Distant Memory', artist: 'Thoughtful Space', duration: getRandomDuration(), albumArt: getRandomAlbumArt() },
    { id: 'm3', title: 'Quiet Thoughts', artist: 'Inner Journey', duration: getRandomDuration(), albumArt: getRandomAlbumArt() },
    { id: 'm4', title: 'Nostalgic Dreams', artist: 'Emotional Waves', duration: getRandomDuration(), albumArt: getRandomAlbumArt() },
    { id: 'm5', title: 'Autumn Leaves', artist: 'Reflective Mood', duration: getRandomDuration(), albumArt: getRandomAlbumArt() },
    { id: 'm6', title: 'Silent Echo', artist: 'Thoughtful Space', duration: getRandomDuration(), albumArt: getRandomAlbumArt() },
    { id: 'm7', title: 'Fading Light', artist: 'Inner Journey', duration: getRandomDuration(), albumArt: getRandomAlbumArt() },
  ]
};

// Generate playlist based on mood, duration and intensity
export const generatePlaylist = (mood: MoodType, duration: number, intensity: number): Track[] => {
  // Get tracks for the selected mood
  const moodTracks = [...tracksByMood[mood]];
  
  // Shuffle the tracks
  const shuffled = moodTracks.sort(() => 0.5 - Math.random());
  
  // Calculate how many tracks to include based on duration and intensity
  // Higher intensity = more tracks in the same duration (shorter tracks)
  const tracksPerHour = 15 + (intensity * 3);
  const numTracks = Math.max(4, Math.ceil((duration / 60) * tracksPerHour));
  
  // Return subset of tracks
  return shuffled.slice(0, Math.min(numTracks, shuffled.length));
};
