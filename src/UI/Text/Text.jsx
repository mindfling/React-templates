import React from 'react';
import classNames from 'classnames';
import style from './Text.module.css';


export const Text = (props) => {
  const {
    As = 'span',
    color = 'grey',
    size,
    tsize,
    dsize,
    className,
    children,
  } = props;
  console.log('props: ', props);

  const classes = classNames(
    className,
    style[color],
    { [style[`fs${size}`]]: size },
    { [style[`fst${tsize}`]]: tsize },
    { [style[`fsd${dsize}`]]: dsize },
  );

  console.log('classes: ', classes);
  return (
    <>
      <As className={classes}>
        {children}
      </As>
    </>
  );
};
