// Todo.jsx

import React from 'react';
import './Todo.css';

const Todo = () => {
    return(
        <div className='Todo'>
            <h2>ToDo List</h2>
            <ul>
                <li>空を飛ぶ</li>
                <li>夢を歩く</li>
                <li>底に落ちる</li>
            </ul>
        </div>
    )
}

export default Todo;