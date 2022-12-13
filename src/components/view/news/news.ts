import './news.css';
import {newsAPI} from '../../../types/index';
class News {
    draw(data:Array<newsAPI>) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
        const fragment = document.createDocumentFragment() as DocumentFragment;


        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;
      
        news.forEach((item, idx:number)=> {
          // type newsClone={content:string}

            const newsClone:any= newsItemTemp.content.cloneNode(true) as DocumentFragment;

            if (idx % 2) newsClone.querySelector('.news__item').classList.add('alt');

            newsClone.querySelector('.news__meta-photo').style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            newsClone.querySelector('.news__meta-author').textContent = item.author || item.source.name;
            newsClone.querySelector('.news__meta-date').textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            newsClone.querySelector('.news__description-title').textContent = item.title;
            newsClone.querySelector('.news__description-source').textContent = item.source.name;
            newsClone.querySelector('.news__description-content').textContent = item.description;
            newsClone.querySelector('.news__read-more a').setAttribute('href', item.url);

            fragment.append(newsClone);
        });
        let asd=document.querySelector('.news') as HTMLTemplateElement;
        asd.innerHTML= '';
        asd.appendChild(fragment) ;
    }
}

export default News;
