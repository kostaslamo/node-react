const apiUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : process.env.REACT_APP_API_HOST;

export { apiUrl };
