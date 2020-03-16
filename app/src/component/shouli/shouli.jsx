import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import Nav from '../nav/nav'
import './shouli.css'
export default class Home extends Component{
constructor(){
    super()
    this.state={
		valMoney:'0.00',
		valDescribe:'请输入备注信息，最多可输入100字。如“孩子满月，请亲戚吃饭，共收礼8000元',
		valTimer:'2020.3.15',
		valType:'结婚类型'
	}	
}
btn(){
	this.setState({
		valMoney:this.refs.valMoney.value,
		valDescribe:this.refs.valDescribe.value,
		valTimer:this.refs.valTimer.value,
		valType:this.refs.valType.value,

	},function(){
	console.log(this.state)
})
	
}
render(){
    return(
        <div className="big">
				<Nav left="收礼" right="送礼" a="/shouli"></Nav>
				<div className="no">
					<div className="no1"><b>￥</b><input ref="valMoney" type="text" defaultValue={this.state.valMoney}/></div>
					<div className="no2">
						<textarea ref="valDescribe" name="" id="" cols="30" rows="10">{this.state.valDescribe}</textarea>
					</div>
					<div className="no3">
						<div className="no5">
							<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=817ee4fc48887071adaf411dc2ed55dc011f73054ad5716876b5176401fb1872" alt=""/>
						</div>
						<input type="text" ref="valTimer" defaultValue={this.state.valTimer}/>
					</div>
					<div className="no4">
						<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=817ee4fc48887071adaf411dc2ed55dc011f73054ad5716876b5176401fb1872" alt=""/>
						<input type="text" ref="valType" defaultValue={this.state.valType}/>
					</div>
					<div><button onClick={this.btn.bind(this)}>
						保存
					</button></div>
					<NavLink
						to = {
                {
                    pathname:'/account',
                    
                    state:this.state
                 }
        } 
					><div className="no6" onClick={this.btn.bind(this)}>提交</div></NavLink>
				</div>
        </div>
    )
}
}
