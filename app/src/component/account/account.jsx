import React,{Component} from 'react'
import './account.css'
import Time from '../time/time'
import Nav from '../nav/nav'
export default class Manage extends Component{
constructor(){
    super()
    this.state={
    	arr:[
			
    	],	
    	accept:[
			{
				name:'结婚收礼',
				fullName:'徐凡',
				money:'1000',
				timer:'2016.10.10'
			},
			{
				name:'结婚收礼',
				fullName:'徐凡',
				money:'1000',
				timer:'2018.11.11'
			},
			{
				name:'结婚收礼',
				fullName:'徐凡',
				money:'1000',
				timer:'2020.12.12'
			}
    	]
	}

}

componentWillMount(){
    if(this.props.location.state){
        console.log(this.props.location.state)
 this.state.arr.push(this.props.location.state)
 console.log(this.state.arr)
    }
}
render(props){

    return(
        <div>
        	<Nav left="收礼" right="送礼" a="/shouli"></Nav>
        	<Time></Time>
        	{this.state.arr.map((item,index)=>{
			
					return (
					<div className="list" key={index}>
						<div className="u4">
							<div className="u1">
							<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=7f7cdce1e2f4ca317304f308ddef4157cac9028152e4ff8d5f6b0fddf0d2679b" alt=""/>
						</div>
						<div className="u2">
							{item.valType}
						</div>
						<p className="u3">{item.valMoney}</p>
						</div>
						<div className="u5">
							<p className="u6">收</p>
							<span className="u8">{item.valDescribe}</span>
							<span className="u7">{item.valTimer}</span>
						</div>
					</div>
			)})}
        	{this.state.accept.map((item,index)=>{
			
					return (

					<div className="list" key={index}>
						<div className="u4">
							<div className="u1">
							<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=7f7cdce1e2f4ca317304f308ddef4157cac9028152e4ff8d5f6b0fddf0d2679b" alt=""/>
						</div>
						<div className="u2">
							{item.name}
						</div>
						<p className="u3">{item.money}</p>
						</div>
						<div className="u5">
							<p className="u6">收</p>
							<span className="u8">{item.fullName}</span>
							<span className="u7">{item.timer}</span>
						</div>
					</div>
			)})}
        </div>
    )}}