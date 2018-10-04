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

    this.timerObs = null;
  }

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

  // eventhandler
  // let timerObs;
  onClickHandler = () => {
    if(this.state.clickTotal === '0')   
      this.timerStart();
    
    // parseIntは文字列を数字に変換する
    let nextVersion = parseInt(this.state.clickTotal, 10) + 1;

    // toFixedは小数点の桁数を指定
    // StateはsetStateメソッドで変更
    this.setState({clickTotal: nextVersion.toFixed(0)})
  }

  onResetHandler = () => {

    // clickTotalを0にする
    this.setState({clickTotal: '0'});

    // App-resultを非表示にする
    const resultDiv = document.querySelector('.App-result');
    resultDiv.style.display = 'none';
  }

  render() {

    let upgradeButton = (
      <p onClick={this.onClickHandler}
      id='upgradeButton'
      className="upgrade-button">
      CLICK</p>
    )

    if(this.state.clickTotal === '0'){
      upgradeButton = (
        <p onClick={this.onClickHandler}
        id='upgradeButton'
        className='upgrade-button'>
        START</p>
      );
    }

    if(this.state.clickTotal === '50' ){
      upgradeButton = (
        <p 
        className='upgraded-button'>
        CLEAR</p>
      );

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

    // console.log(this.state.timer);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            100回クリックできれば、このゲームはクリアだ！
          </p>
          <div>
          <Title title="Hello World 3.0" titleStyle={{color : "orange"}}>
            COUNT <span id='versionCounter' style={{borderBottom: '1px solid orange'}}>{this.state.clickTotal}</span></Title>
            {upgradeButton}
          </div>

          <div className='App-result'>
            <p>
              このゲームは大切ものを盗んでいきました。あなたの時間です。
              経過時間 {this.state.timer}秒
            </p>
            {resetButton}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
