import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Title.jsxをインポートする
import Title from './components/Title/Title';

class App extends Component {

  constructor(){
    super();
    this.state = { 
      clickTotal: '0',
      timer: '0'
    }

    // timeUpdateのID
    this.timerObs = null;

    // Max Count
    this.maxCount = "100";
    
  }

  // Timer
  timerStart = () => {
    this.setState({timer: '0'});
    this.timerObs = setInterval(this.timerUpdate, 1000);
  }

  timerUpdate = () => {
    let nextTimer = parseInt(this.state.timer, 10) + 1;
    this.setState({timer: nextTimer});
  }

  timerStop = () => {
    clearInterval(this.timerObs);
  }

  // クリック時の処理
  onClickHandler = () => {

    // Timerの登録
    if(this.state.clickTotal === '0')   
      this.timerStart();
    
    // parseIntは文字列を数字に変換する
    let nextVersion = parseInt(this.state.clickTotal, 10) + 1;

    // toFixedは小数点の桁数を指定
    // StateはsetStateメソッドで変更
    this.setState({clickTotal: nextVersion.toFixed(0)})
  }

  // リセット時の処理
  onResetHandler = () => {

    // clickTotalを0にする
    this.setState({clickTotal: '0'});

    // App-resultを非表示にする
    const resultDiv = document.querySelector('.App-result');
    resultDiv.style.display = 'none';
  }

  render() {

    // クリックボタン
    let clickButton = (
      <p onClick={this.onClickHandler}
      id='clickButton'
      className="click-button">
      CLICK</p>
    )

    if(this.state.clickTotal === '0'){
      clickButton = (
        <p onClick={this.onClickHandler}
        id='clickButton'
        className='click-button'>
        START</p>
      );
    }

    if(this.state.clickTotal === this.maxCount ){
      clickButton = (
        <p 
        className='clickd-button'>
        CLEAR</p>
      );

      // Timerの解除
      this.timerStop();

      const resetDiv = document.querySelector('.App-result');
      resetDiv.style.display = 'block';
    }

    let resetButton = (
      <p onClick={this.onResetHandler}
      id='resetButton'
      className='reset-button'>
      RESET</p>
    );

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            This Game finish, if you do button clicked {this.maxCount} times.
          </p>
          <div>
          <Title title="Hello World 3.0" titleStyle={{color : "orange"}}>
            COUNT <span id='versionCounter' style={{borderBottom: '1px solid orange'}}>{this.state.clickTotal}</span></Title>
            {clickButton}
          </div>

          <div className='App-result'>
            <p>CLEAR</p>
            <p>TIME: {this.state.timer}s</p>              
            {resetButton}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
