interface newsAPI {
  title:string,
  url:string,
  source:{
    name:string,
    id:string
  }
  author:string,
  description:string,
  urlToImage:string,
  publishedAt:string
} ;

export {newsAPI}