const VITE_API_KEY=import.meta.env.VITE_API_KEY;
const  requests = {
    trendingDay: `/trending/movie/day?api_key=${VITE_API_KEY}`,
    trendingWeek: `/trending/movie/week?api_key=${VITE_API_KEY}`,
    originals: `/discover/movie?with_companies=213&api_key=${VITE_API_KEY}`,
    action: `/discover/movie?with_genres=28&api_key=${VITE_API_KEY}`,
    comedy: `/discover/movie?with_genres=35&api_key=${VITE_API_KEY}`,
    scifi: `/discover/movie?with_genres=878&api_key=${VITE_API_KEY}`,
    horror: `/discover/movie?with_genres=27&api_key=${VITE_API_KEY}`,
    romance: `/discover/movie?with_genres=10749&api_key=${VITE_API_KEY}`,
    documentary: `/discover/movie?with_genres=99&api_key=${VITE_API_KEY}`
};
export default requests;