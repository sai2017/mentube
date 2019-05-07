import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import List from './components/Body/List/List';
import Item from './components/Body/List/Item/Item';
import Video from './components/Body/Video/Video';
import YoutubeSearch from 'youtube-api-search';

const YOUTUBE_API_KEY = 'AIzaSyDef6s86Co5Fnt4K0Zn9EXPzcJ2MLWQdas'

// YoutubeSearch({key: YOUTUBE_API_KEY, term: '猫　きゅうり'}, (data) => {
//   console.log(data);
// });

class App extends Component {

  // stateの初期化
  state = { videos: [],
    selectedVideo: null
  }

  // componentDidMountでAPIリクエストを行う
  componentDidMount(){
    YoutubeSearch({key: YOUTUBE_API_KEY, term: 'ラーメン　二郎'}, (data) => {
      this.setState({videos: data, selectedVideo: data[1]})

    });
  }

  // clickされたら、その動画情報を取得
  onVideoClickedHandler = (video) => {
    this.setState({ selectedVideo: video })
  }

  // 検索バーに文字を打ち込むと、違う動画データを表示するようにする
  onKeywordChangedHandler = (keyword) => {
    let newTerm = 'ラーメン' + keyword;
    if(keyword === '') {
      newTerm = 'ラーメン　二郎';
    }

    YoutubeSearch({key: YOUTUBE_API_KEY, term: newTerm}, (data) => {
      this.setState({videos: data, selectedVideo: data[0]})
    });
  }

  render() {
    return (
      <div className="App">
        <Header onKeywordChanged={this.onKeywordChangedHandler}/>

        <Body>
          <Video video={this.state.selectedVideo} />
          <List
            videos={this.state.videos}
            onVideoClicked={this.onVideoClickedHandler}
            selectedVideo={this.state.selectedVideo}
          />
        </Body>
      </div>
    );
  }
}

export default App;
