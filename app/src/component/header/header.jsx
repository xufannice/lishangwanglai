import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './header.css'
export default class Home extends Component{
constructor(){
    super()
}
render(){
    return(
        <div id="header">
			<div id="head">
				礼尚往来
			</div>
			
            <div id="u1">
				<li>
					<div style={{width:19,height:19,}}>
						<img  style={{width:19,height:19}} src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/首页/u12.svg?token=a192a5b0d8cad1f6c6f7903ba8e3702be64d247419c23d90aa64a33261dc2acf" alt=""/>
					</div>
				<NavLink to="/shouye">首页</NavLink></li>
				<li>
					<div style={{width:19,height:19,}}>
						<img  style={{width:19,height:19}} src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/首页/u19.svg?token=92bf1d0c18dad36befb4cee9872020c842120ecca21f2a56e448eefb07dcf425" alt=""/>
					</div><NavLink to="/account">礼账</NavLink></li>
					<li><img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/首页/u19.svg?token=92bf1d0c18dad36befb4cee9872020c842120ecca21f2a56e448eefb07dcf425" alt=""/></li>
				<li><div style={{width:19,height:19,}}>
						<img  style={{width:19,height:19}} src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/首页/u14.svg?token=7712a9fd65e81fb0e2c7b56144d3e1ea39b118b151df8da559a89e923f3ee14e" alt=""/>
					</div><NavLink to="/Ceremony">礼事</NavLink></li>
				<li><div style={{width:19,height:19,}}>
						<img  style={{width:19,height:19}} src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/首页/u11.svg?token=d10dbca774536e57237643c09f021ac1d5646bbd1a14aefc4963ed17cec1ad2a" alt=""/>
					</div><NavLink to="/my">我的</NavLink></li>
			</div>
        </div>
    )
}
}
