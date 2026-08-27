const reviewsUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL
const requestUrl = '/api/google-reviews'

function getReviewsUrl() {
    if (!reviewsUrl) {
        throw new Error('VITE_GOOGLE_SHEETS_URL is not configured')
    }
    return requestUrl
}

export async function fetchReviews() {
    const response = await fetch(getReviewsUrl())
    if (!response.ok) throw new Error('Failed to fetch reviews')

    const data = await response.json()
    return Array.isArray(data) ? data : data.reviews || []
}

export async function submitReview(review) {
    const response = await fetch(getReviewsUrl(), {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(review),
    })
    if (!response.ok) throw new Error('Failed to submit review')
    return response.json()
}