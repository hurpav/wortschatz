// assets/data.js
async function loadData(filename) {
    const url = `https://raw.githubusercontent.com/hurpav/wortschatz/main/${filename}?_ts=${new Date().getTime()}`;
    const response = await fetch(url);
    const data = await response.json();
    
    // Automatické hledání pole slovíček v JSONu
    if (Array.isArray(data)) return data;
    const foundKey = Object.keys(data).find(key => Array.isArray(data[key]));
    return foundKey ? data[foundKey] : [];
