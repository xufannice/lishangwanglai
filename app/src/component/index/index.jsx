import React,{Component} from 'react'
import './index.css'
export default class Home extends Component{
	constructor(){
		super()
		this.state={
			arr:[
				{
				a:1,
				b:'刘JAVSS',
				c:'95685.00',
				d:'4500.00'
				},
				{
				a:2,
				b:'吴佩奇xs',
				c:'33432.00',
				d:'1232.00'
				},
				{
				a:3,
				b:'小明ASX',
				c:'21122.00',
				d:'2132.00'
				},
				{
				a:4,
				b:'小红ASS',
				c:'32423.00',
				d:'5464.00'
				},
				{
				a:5,
				b:'小刚ABC',
				c:'65434.00',
				d:'3434.00'
				},
				{
				a:6,
				b:'阿毛FCV',
				c:'65432.00',
				d:'7687.00'
				},
				{
				a:7,
				b:'阿狗KJN',
				c:'34322.00',
				d:'2334.00'
				},
				{
				a:8,
				b:'啊尿CDI',
				c:'98704.00',
				d:'2314.00'
				}
			]
		}
	}
	render(){
		return(
			<div id="Home">
				<div id="home-top">
					<div id="home-top1">
						<div>
							<p>历史收礼</p>
							<p>5500.00</p>
						</div>
						<div style={{borderRadius: '50%',backgroundColor: '#bbb',}}>
							<p style={{color:'#fff',fontWeight:"700"}}>历史盈亏</p>
							<p style={{color:'#fff',fontWeight:"700"}}>2948.00</p>
						</div>
						<div>
							<p>历史送礼</p>
							<p>2500.00</p>
						</div>
					</div>
					<div id="home-top2">
						<div>
							<p>6月收礼</p>
							<p>5500.00</p>
						</div>
						<div style={{borderRadius: '50%',backgroundColor: 'skyblue',}}>
							<p style={{color:'#fff',fontWeight:"700"}}>本月盈亏</p>
							<p style={{color:'#fff',fontWeight:"700"}}>2948.00</p>
						</div>
						<div>
							<p>6月送礼</p>
							<p>2500.00</p>
						</div>
					</div>
				</div>
				<div id="home-bottom">
					<div id="home-bottom1">
						<span>排行</span>
						<span>用户</span>
						<span>历史盈亏</span>
						<span>本月盈亏</span>
						<span style={{marginRight:'0px',fontWeight:'300',}}>更多</span>
					</div>
					{this.state.arr.map((item,index)=>{
			
					return (
					<div id="home-bottom2" key={index}>
						<span>{item.a}</span>
						<span>{item.b}</span>
						<span>{item.c}</span>
						<span>{item.d}</span>
					</div>
			)})}
				</div>
			</div>
		)
	}
}
