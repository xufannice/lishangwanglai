import React,{Component} from 'react'
import './Home.css'
export default class Home extends Component{
	constructor(){
		super()
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
					<div id="home-bottom2">
						<span>1</span>
						<span>刘JAVSS</span>
						<span>95685.00</span>
						<span>4500.00</span>
					</div>
					<div id="home-bottom2">
						<span>1</span>
						<span>刘JAVSS</span>
						<span>95685.00</span>
						<span>4500.00</span>
					</div>
					<div id="home-bottom2">
						<span>1</span>
						<span>刘JAVSS</span>
						<span>95685.00</span>
						<span>4500.00</span>
					</div>
					<div id="home-bottom2">
						<span>1</span>
						<span>刘JAVSS</span>
						<span>95685.00</span>
						<span>4500.00</span>
					</div>
					<div id="home-bottom2">
						<span>1</span>
						<span>刘JAVSS</span>
						<span>95685.00</span>
						<span>4500.00</span>
					</div>
				</div>
			</div>
		)
	}
}
