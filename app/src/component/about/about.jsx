import React,{Component} from 'react'
import './about.css'
import {NavLink} from 'react-router-dom'
export default class about extends Component{
constructor(){
    super()
}
render(){
    return(
        <div>
			<div id='me'>
				<div id="me-head">我的</div>
				<div id='me-img'>
					<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u895.svg?token=8c846f178ad9d122e5d76996572f7ff3d87805d8f57018e6b71ce9f58e0d32ee"/>
				</div>
			</div>
			<div id="dengl">
				<div id="dengl-img">
					<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u889.svg?token=766f3a3b70fe1c2f1d397328116c4a44b73fb4811e36cb9c8a48501b9a970562"/>
				</div>
				<div id="dengl-span">调用QQ,微信昵称</div>
				<div id="dengl-img2">
					<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u891.png?token=dd2f91adb6df8e454c5dfe73502c00195ca0a34cc9c2d2e32a80408a3d5d99c1"/>
				</div>
			</div>
			<NavLink to="/sz">
				<div id="gengd">
					<div id="gengd-img">
						<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=4e77da7d4f51db07c47f79cb5ad8fcb1979399ae51a0122ba2e1ed19ec5e09ec"/>
					</div>
					<div id="gengd-span">设置</div>
					<div id="gengd-img2">
						<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u900.png?token=cf7d4660c49326fff03635107793d0df3f007542e786949c7e931b3889aa8d8f"/>
					</div>
				</div>
			</NavLink>
			<NavLink to="/fk">
				<div id="gengd">
					<div id="gengd-img">
						<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=4e77da7d4f51db07c47f79cb5ad8fcb1979399ae51a0122ba2e1ed19ec5e09ec"/>
					</div>
					<div id="gengd-span">反馈</div>
					<div id="gengd-img2">
						<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u900.png?token=cf7d4660c49326fff03635107793d0df3f007542e786949c7e931b3889aa8d8f"/>
					</div>
				</div>
			</NavLink>
			<NavLink to='/bj'>
				<div id="gengd">
					<div id="gengd-img">
						<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=4e77da7d4f51db07c47f79cb5ad8fcb1979399ae51a0122ba2e1ed19ec5e09ec"/>
					</div>
					<div id="gengd-span">帮助</div>
					<div id="gengd-img2">
						<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u900.png?token=cf7d4660c49326fff03635107793d0df3f007542e786949c7e931b3889aa8d8f"/>
					</div>
				</div>
			</NavLink>
			<NavLink to='/gy'>
				<div id="gengd">
					<div id="gengd-img">
						<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=4e77da7d4f51db07c47f79cb5ad8fcb1979399ae51a0122ba2e1ed19ec5e09ec"/>
					</div>
					<div id="gengd-span">关于</div>
					<div id="gengd-img2">
						<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u900.png?token=cf7d4660c49326fff03635107793d0df3f007542e786949c7e931b3889aa8d8f"/>
					</div>
				</div>
			</NavLink>
			<NavLink to="/fx">
				<div id="gengd">
					<div id="gengd-img">
						<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=4e77da7d4f51db07c47f79cb5ad8fcb1979399ae51a0122ba2e1ed19ec5e09ec"/>
					</div>
					<div id="gengd-span">分享</div>
					<div id="gengd-img2">
						<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u900.png?token=cf7d4660c49326fff03635107793d0df3f007542e786949c7e931b3889aa8d8f"/>
					</div>
				</div>
			</NavLink>
		</div>
    )
}
}
