 import 'antd/dist/antd.css'
 import React from 'react';
 import ReactDOM from 'react-dom';
 import {
 	Button,
 	Switch
 } from 'antd';

 import AutoSuggest from './autosuggest';
 import Header from './header';

 const suggestions = ['C', 'C++', 'Python', 'Java', 'Javascript', 'PHP'];
 const handleSelect = selection => alert(`You selected ${selection}`);

 const menuData = [{
 	name: "baidu",
 	link: "http://www.baidu.com"
 }, {
 	name: "baidu",
 	link: "http://www.baidu.com"
 }]

 ReactDOM.render(
 	<div>
 	<Header name="hello,world" avatar="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"></Header>
 	<AutoSuggest suggestions={suggestions} onSelect={handleSelect}/>
 	</div>, document.getElementById('app'));