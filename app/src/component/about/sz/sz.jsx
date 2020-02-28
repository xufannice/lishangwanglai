import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './sz.css'
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
				<p>设置</p>
			</div>
			
			<ul id="sz-ul">
				<li><p><img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/设置/刷新_u1148.svg?token=a1652c5b20946be2d1e8d6d16377f091121fd79153b17893cf5c574900ace632" /></p><p>检查更新</p></li>
				<li><p><img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/记账发布/删除_u380.svg?token=bc7814530bc309b87e5b32faf7b098997014f09916456d83b546214621549acc" /></p><p>初始化</p></li>
				<li><p><img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/设置/u1156.svg?token=1e8af3ecc6d64b3314958bf8d5708aee6c6f559a91d7079d2c3c916c8da678fa" /></p><p>密码锁</p></li>
				<li><p><img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u895.svg?token=8c846f178ad9d122e5d76996572f7ff3d87805d8f57018e6b71ce9f58e0d32ee" /></p><p>记账提醒</p></li>
			</ul>
		</div>
    )
}
}
