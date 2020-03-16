import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'

import './nav.css'
export default class Manage extends Component{
constructor(props){
console.log(props)
    super()
    this.state={
    	info:true
	}

}
fanhui(){
console.log(1)
    window.history.go(-1)
}
tab(){
	this.setState({
	info:true
})
}
tab1(){
    this.setState({
    info:false
})
}
render(props){
    return(
        <div className="big">
        	<div className="l-header">
        		<div className="ret">
        			<img onClick={this.fanhui.bind(this)} src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u84.png?token=e8ab82840cf5fc5fa9515ba8535cc192cae0c094430019817ae3fa3a2304840f" alt="" />
        		</div>
        		<div className="nav">
        			<p onClick={this.tab.bind(this)} style={{ color: this.state.info==true ? '#fff' : '', backgroundColor: this.state.info == true ? '#199ED8' : '' }}>{this.props.left}</p>
        			<div onClick={this.tab1.bind(this)} style={{ color: this.state.info==false ? '#fff' : '', backgroundColor: this.state.info == false ? '#199ED8' : '' }}>{this.props.right}</div>
        		</div>
        		<div className="jia">
                    <NavLink to={this.props.a}>
        			<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u90.svg?token=4ddf99a2079d3e34859af879f98bf5622c9f7a00d9ad03a8c1c0fedde98c74db" alt=""/ >
                    </NavLink>
        		</div>
        	</div>
        </div>
    )
}
}
