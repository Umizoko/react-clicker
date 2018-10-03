import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Title.jsxをインポートする
import Title from './components/Title/Title';
import Todo from './components/Todo/Todo';

class App extends Component {

  constructor(){
    super();
    this.state = { 
      version: '0'
    }
  }

  // eventhandler
  onClickHandler = () => {
    // parseIntは文字列を数字に変換する
    let nextVersion = parseInt(this.state.version, 10) + 1;

    // toFixedは小数点の桁数を指定
    // StateはsetStateメソッドで変更
    this.setState({version: nextVersion.toFixed(0)})

  }

  render() {

    // 
    // if文を用いてupgradeButtonの要素を書き換える
    // 
    // UpgradeButtonの初期要素
    let upgradeButton = (
      <p onClick={this.onClickHandler}
      id='upgradeButton'
      className="upgrade-button">
      UPGRADE</p>
    )

    if(this.state.version === '100' ){
      upgradeButton = (
        // バージョンが5.0になったときに表示されてほしいボタン
        <p 
        className='upgraded-button'>
        You accomplished</p>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            If You do button clicked reach 100 times,This Game will finish.
          </p>
          <div>
            {/* titleクラスにpropsとしてtitle,titlyStyleを設定 */}
            {/* この要素にクリックした場合、イベントハンドラを呼ぶ */}
            {/* spanの中だけを書き換えている */}
          <Title title="Hello World 3.0" titleStyle={{color : "orange"}}>
            CLICK <span id='versionCounter' style={{borderBottom: '1px solid orange'}}>{this.state.version}</span></Title>

            {upgradeButton}

          <Todo />
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React and Hello World.
          </a>
        </header>
      </div>
    );
  }
}

export default App;
