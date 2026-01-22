// TypeScript interfaces and types for the Bike Search application

export interface BikeImage {
  title: string;
  link: string;
  thumbnailLink: string;
  contextLink: string;
  displayLink: string;
}

export interface GoogleSearchResponse {
  items?: Array<{
    title: string;
    link: string;
    image: {
      thumbnailLink: string;
      contextLink: string;
    };
    displayLink: string;
  }>;
  error?: {
    code: number;
    message: string;
  };
}

export interface SearchAPIResponse {
  success: boolean;
  images?: BikeImage[];
  error?: string;
}

export interface SearchBarProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
}

export interface BikeImageGridProps {
  images: BikeImage[];
  isLoading: boolean;
}

export interface MusicPlayerProps {
  audioSrc: string;
  images?: BikeImage[]; // Trigger auto-play when images are available
}
