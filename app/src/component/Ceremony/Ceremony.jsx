import React,{Component} from 'react'
import './Ceremony.css'
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
				name:'王大锤搬家请客',
				fullName:'北京',
				money:'待参加',
				timer:'2016.10.10'
			},
			{
				name:'王大锤搬家请客',
				fullName:'太原',
				money:'已参加',
				timer:'2016.10.10'
			},
			
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
        	<Nav left="已参加" right="未参加" a="/lishi"></Nav>
        	<Time></Time>
        	{this.state.arr.map((item,index)=>{
			
					return (
					<div className="list" key={index}>
						<div className="u4" style={{marginBottom:20}}>
							<div className="u1">
							<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=817ee4fc48887071adaf411dc2ed55dc011f73054ad5716876b5176401fb1872" alt=""/>
						</div>
						<div className="u2">
							{item.valType}
						</div>
						<p className="u3" style={{fontSize:13}}>{item.valMoney}</p>
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
						<div className="u4" style={{marginBottom:20}}>
							<div className="u1">
							<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=817ee4fc48887071adaf411dc2ed55dc011f73054ad5716876b5176401fb1872" alt=""/>
						</div>
						<div className="u2">
							{item.name}
						</div>
						<p className="u3" style={{fontSize:13}}>{item.money}</p>
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