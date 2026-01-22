import { NextRequest, NextResponse } from 'next/server';
import { GoogleSearchResponse, BikeImage } from '@/app/types/types';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('q');

    if (!query) {
        return NextResponse.json(
            { success: false, error: 'Search query is required' },
            { status: 400 }
        );
    }

    const apiKey = process.env.SERPAPI_KEY;

    if (!apiKey) {
        return NextResponse.json(
            {
                success: false,
                error: 'API configuration missing. Please set up SERPAPI_KEY in .env'
            },
            { status: 500 }
        );
    }

    try {
        // Auto-append "bike" to the search query
        const searchQuery = `${query} bike`;

        // Build the SerpAPI URL for Google Images
        const apiUrl = new URL('https://serpapi.com/search');
        apiUrl.searchParams.append('api_key', apiKey);
        apiUrl.searchParams.append('engine', 'google_images');
        apiUrl.searchParams.append('q', searchQuery);

        const response = await fetch(apiUrl.toString());
        const data: any = await response.json();

        if (!response.ok) {
            console.error('SerpAPI Error:', data.error);
            return NextResponse.json(
                {
                    success: false,
                    error: data.error || 'Failed to fetch search results'
                },
                { status: response.status }
            );
        }

        // Transform the SerpAPI response to our format
        const images: BikeImage[] = (data.images_results || []).map((item: any) => ({
            title: item.title || '',
            link: item.original || item.thumbnail, // Use original (full res) or fallback to thumbnail
            thumbnailLink: item.thumbnail,
            contextLink: item.link, // Link to the page containing the image
            displayLink: item.source || '', // Domain name
        }));

        return NextResponse.json({
            success: true,
            images,
        });

    } catch (error) {
        console.error('Search API Error:', error);
        return NextResponse.json(
            {
                success: false,
                error: 'An error occurred while searching. Please try again.'
            },
            { status: 500 }
        );
    }
}
