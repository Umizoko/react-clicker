// Title.jsx

// 外部のライブラリやファイルを参照するインポートの部分
import React from 'react';
import './Title.css';

// JSXやメソッドを定義する実質上の中身
const Title = (props) => {
    return(
        <div className='titleSection'>

            {/* porps.children: 親componentのなかで参照されたcomponentタグにあるJSXを全部挿入する */}
            <h2 
            style={props.titleStyle}
            id='versionStatement'>{props.children}</h2>
        </div>
    )
}

// 外部ファイルがこのcomponentを利用できるようにするエクスポートの部分
export default Title;