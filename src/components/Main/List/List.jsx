/* eslint-disable */
import style from './List.module.css';
import Post from './Post';
// import podcast from './json/';
import {podcast} from './qwenlist';
console.log('podcast: ', podcast);


export const List = () => {
  // console.log('Functional List loaded');
  const postData = {
    thumbnail: '',
    title: 'Title Заголовок',
    text: 'lorem ipsut verdane cantaristo mare',
    author: 'John Doe',
    ups: 124,
    date: '2025-02-24T12:05:00.000Z',
  };
  
  return (
    <>
      <ul className={style.list}>
        {
          podcast.map(post =>(
            <Post postData={post} key={post.id} />
          ))
        }
      </ul>
    </>
  );
};
