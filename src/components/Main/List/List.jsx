/* eslint-disable */
import style from './List.module.css';
import Post from './Post';
// import podcast from './json/';
// import podcast from '../../../store/postList.js ';
// console.log('podcast: ', podcast);

import list from '../../../store/postList';
console.log(list);

export const List = () => {
  
  return (
    <>
      <ul className={style.list}>
        {
          list.map(post =>(
            <Post postData={post} key={post.id} title={post.id} />
          ))
        }
      </ul>
    </>
  );
};
