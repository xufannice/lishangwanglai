import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './fk.css'
export default class about extends Component{
constructor(){
    super()
}
render(){
    return(
        <div>
			<div id="sz">
				<NavLink to="/about">
					<div id="sz-img"><img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u84.png?token=33322991ede4fde3424b1dc4dc59c0daeffe02755274fee6b5bd9b4a11eb5627" /></div>
				</NavLink>
				<p>建议反馈</p>
			</div>
			<div className="main">感谢您对礼尚往来的支持，点击输入反馈信息...</div>
			<div className="content">
				<p>邮箱：</p>
				<span>输入邮箱</span>
			</div>
		</div>
    )
}
}