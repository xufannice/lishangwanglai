import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './gy.css'

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
				<p>关于</p>
			</div>
			<div className="div">
				<div className="icon">icon</div>
				<div className="g-main">
					<p>礼尚往来</p>
					<span>
						V1.0.0
					</span>
					
				</div>
				<div className="footer">
				
						您身边的家庭礼尚往来记账管理专家，礼数清晰，礼事提醒，从此不再担忧送礼收礼问题
					
				</div>
			</div>
			
			
		</div>
    )
}
}
