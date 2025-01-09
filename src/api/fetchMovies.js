// API URL ve API anahtarınızı ayarlayın
const API_URL = 'http://www.omdbapi.com/';
const API_KEY = '11412db4'; // Kendi API anahtarınız

// Filmi sorgulamak için bir işlev
async function fetchMovie(title) {
  try {
    // API URL'sini oluştur
    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&t=${title}`;

    // API'ye istek gönder
    const response = await fetch(url);

    // Yanıtı kontrol et
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Yanıtı JSON'a dönüştür
    const movie = await response.json();
    console.log('Film Bilgileri (Başlık ile):', movie);

    // Veriyi kontrol et
    if (movie.Response === 'False') {
      console.log('Film bulunamadı:', movie.Error);
    } else {
      console.log('Film Bilgileri:', movie);
    }
  } catch (error) {
    console.error('Bir hata oluştu:', error);
  }
}

// Örnek kullanım
fetchMovie('Titanic');
