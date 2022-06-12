export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "bc47830ddfmsh5050da6b2960e86p100f31jsn60bc5f43d83d",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "bc47830ddfmsh5050da6b2960e86p100f31jsn60bc5f43d83d",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  //if we use fetch not axios we have to extract the data
  const data = await response.json();

  return data;
};
