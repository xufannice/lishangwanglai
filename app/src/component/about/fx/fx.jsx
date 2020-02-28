import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './fx.css'

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
				<p>分享</p>
			</div>
			<div className="m-main">
				
通过推荐让您的其他朋友知道礼尚往来
			</div>
			<ul id="sz-ul">
				<li><p><img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/婚柬分享/u852.svg?token=2ca30e01133ef7214baca00664846292545256a7c64d1b73e47a2207df98a93b" /></p><p>微信好友</p><img className="img" src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/婚柬分享/u851.png?token=7884574f48058820d8b1d831c25809a693a66bffae7d6ba955e3422a010b9272" alt=""/></li>
				<li><p><img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/婚柬分享/u857.svg?token=124c3c136888a29a715c83b359983fb59fae4e3ca4b4d48fb9d0327f104758d4" /></p><p>qq好友</p><img className="img" src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/婚柬分享/u851.png?token=7884574f48058820d8b1d831c25809a693a66bffae7d6ba955e3422a010b9272" alt=""/></li>
				<li><p><img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/婚柬分享/u862.svg?token=619f65e5144fe48e461a5a8e7128134d6048c6e91987787f39374cc8d9f90b3f" /></p><p>微信朋友圈</p><img className="img" src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/婚柬分享/u851.png?token=7884574f48058820d8b1d831c25809a693a66bffae7d6ba955e3422a010b9272" alt=""/></li>
				<li><p><img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/婚柬分享/u867.svg?token=49a464d62b326043df692e7964e6f8e2f15b0fc57e2f44636a459a30c4711e1d" /></p><p>通讯录好友</p><img className="img" src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/婚柬分享/u851.png?token=7884574f48058820d8b1d831c25809a693a66bffae7d6ba955e3422a010b9272" alt=""/></li>
			</ul>
		</div>
    )
}
}
