/* eslint-disable */
import style from './List.module.css';
import Post from './Post';
import list from '../../../store/postList';

export const List = () => {
  return (
    <>
      <ul className={style.list}>
        {
          list.map(post =>(
            <Post postData={post} key={post.id} />
          ))
        }
      </ul>
    </>
  );
};
