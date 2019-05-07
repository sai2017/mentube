import React from 'react';

const Video = (props) => {

  // const videoURLのコードが実行される前に、データがnullの時の条件分岐を実装
  if(!props.video) {
    return(
     <div className="video col-md-8">
       動画を読み込み中です。
     </div>
   );
  }

  const videoURL = 'https://www.youtube.com/embed/' + props.video.id.videoId;

  return(
    <div className="video col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={videoURL}></iframe>
      </div>
      <div className="info">
        <h4 className="mt-2 font-weight-bold">{props.video.snippet.title}</h4>
        <p>{[props.video.snippet.description]}</p>
      </div>
    </div>
  );
}

export default Video;