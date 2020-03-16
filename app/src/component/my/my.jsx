import React,{Component} from 'react'
import './my.css'
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
					<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u895.svg?token=9dd78e0cf0b3ba9a5ac61f62f4a353a88a4f2799918927ec76f9f8b159e8c330"/>
				</div>
			</div>
			<div id="dengl">
				<div id="dengl-img">
					<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u889.svg?token=92545f2bf88d742363c33bb06eda8650950f2b5346f74726e10defecd495e990"/>
				</div>
				<div id="dengl-span">调用QQ,微信昵称</div>
				<div id="dengl-img2">
					<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u891.png?token=8c6df50e1c80bd312254b593bab5f904db6e897f4a385091eeaee207ef26b267"/>
				</div>
			</div>
			<NavLink to="/sz">
				<div id="gengd">
					<div id="gengd-img">
						<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=7f7cdce1e2f4ca317304f308ddef4157cac9028152e4ff8d5f6b0fddf0d2679b"/>
					</div>
					<div id="gengd-span">设置</div>
					<div id="gengd-img2">
						<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u905.png?token=469009e1e0868eea8e53dcfd60b0cd8de7775523d9f84d2177b1276655878d3b"/>
					</div>
				</div>
			</NavLink>
			<NavLink to="/fk">
				<div id="gengd">
					<div id="gengd-img">
						<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=7f7cdce1e2f4ca317304f308ddef4157cac9028152e4ff8d5f6b0fddf0d2679b"/>
					</div>
					<div id="gengd-span">反馈</div>
					<div id="gengd-img2">
						<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u905.png?token=469009e1e0868eea8e53dcfd60b0cd8de7775523d9f84d2177b1276655878d3b"/>
					</div>
				</div>
			</NavLink>
			<NavLink to='/bj'>
				<div id="gengd">
					<div id="gengd-img">
						<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=7f7cdce1e2f4ca317304f308ddef4157cac9028152e4ff8d5f6b0fddf0d2679b"/>
					</div>
					<div id="gengd-span">帮助</div>
					<div id="gengd-img2">
						<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u905.png?token=469009e1e0868eea8e53dcfd60b0cd8de7775523d9f84d2177b1276655878d3b"/>
					</div>
				</div>
			</NavLink>
			<NavLink to='/gy'>
				<div id="gengd">
					<div id="gengd-img">
						<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=7f7cdce1e2f4ca317304f308ddef4157cac9028152e4ff8d5f6b0fddf0d2679b"/>
					</div>
					<div id="gengd-span">关于</div>
					<div id="gengd-img2">
						<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u905.png?token=469009e1e0868eea8e53dcfd60b0cd8de7775523d9f84d2177b1276655878d3b"/>
					</div>
				</div>
			</NavLink>
			<NavLink to="/fx">
				<div id="gengd">
					<div id="gengd-img">
						<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=7f7cdce1e2f4ca317304f308ddef4157cac9028152e4ff8d5f6b0fddf0d2679b"/>
					</div>
					<div id="gengd-span">分享</div>
					<div id="gengd-img2">
						<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u905.png?token=469009e1e0868eea8e53dcfd60b0cd8de7775523d9f84d2177b1276655878d3b"/>
					</div>
				</div>
			</NavLink>
		</div>
    )
}
}
