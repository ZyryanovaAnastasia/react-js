import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// const films = [{title: 'film1', year: 2020}, {title: 'film2', year: 2020}]
// реакт элемент (дерево)
// const ReactElm = (
//  <div>
//    <h1>ReactElm</h1>
//    <div>
//      {films.map(({title, year}) => (
//        // нельзя вернуть список элементов, нужно оборачивать в 1 родительский
//        <div>
//          <div>title:{title}</div>
//          <div>title:{year}</div>
//        </div>
//      ))}
//    </div>
//  </div>
// );
 
// const FunctionComponent = () => {
//  return ReactElm;
// }

const Message = ({messageText}) => {
  return (
    <div>{messageText}</div>
  )
};

const App = ({...rest}) => {
  return (
    <div>
      <Message {...rest}/>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
     <App 
     messageText="Текст сообщения"
     />
  </React.StrictMode>,
  document.getElementById('root')
);
