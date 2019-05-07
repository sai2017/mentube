import React from 'react';
import Item from './Item/Item';
const List = (props) => {

  const Items = props.videos.map((video, index) => {

    // 再生中の動画ではなかった場合のみ、Item componentを変数Itemsに追加する
    if (props.selectedVideo !== video) {
      return(
        <Item
          video={video}
          key={index}
          onVideoClicked={props.onVideoClicked}
        />
      );
    }
    return false;
  });

  return(
    <ul className="col-md-4 list-group">
      { Items }
    </ul>
  );
};

export default List;