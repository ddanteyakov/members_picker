import React from 'react';
import { render } from 'react-dom';
import { Panel } from './components/Panel';
import { style } from './styles/style';

const wrapper = document.createElement('div');

wrapper.style.zIndex = '2000';
wrapper.style.position = "absolute";
wrapper.style.top = "10px";
wrapper.style.right = "10px";
wrapper.style.width = "850px";
wrapper.style.height = "700px";
wrapper.style.border = "5px solid black";
wrapper.style.background = "white";
wrapper.style.color = "black";
wrapper.style.overflow = "auto";

document.head.append(style);
document.body.append(wrapper);



render(<Panel />, wrapper);