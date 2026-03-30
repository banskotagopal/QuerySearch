  const pexels_key = import.meta.env.VITE_PEXELS_KEY
  const unsplash_key = import.meta.env.VITE_UNSPLASH_KEY

export async function getPhoto(query) {
 
   const url =`https://api.unsplash.com/search/photos?page=1&query= ${query}&per_page=30`
   const response = await fetch(url,{
    headers:{
      Authorization : `Client-ID ${unsplash_key}`
    }
   })
   const data = await response.json()
   return data
  
}

export async function  getVideo(query) {
   const url = `https://api.pexels.com/v1/videos/search?query= ${query}&per_page=30&page=${3}`
   const response = await fetch(url,{
    headers:{
      Authorization: pexels_key
    }
   })
   const data = await response.json()
   return data
}