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
							<p style={{color:'#fff'}}>历史盈亏</p>
							<p style={{color:'#fff'}}>2948.00</p>
						</div>
						<div>
							<p>历史送礼</p>
							<p>2500.00</p>
						</div>
					</div>
					<div id="home-top2">
						<div id="home-top1">
						<div>
							<p>六月收礼</p>
							<p>5500.00</p>
						</div>
						<div style={{borderRadius: '50%',backgroundColor: 'blue',}}>
							<p style={{color:'#fff'}}>本月盈亏</p>
							<p style={{color:'#fff'}}>2948.00</p>
						</div>
						<div>
							<p>六月送礼</p>
							<p>2500.00</p>
						</div>
					</div>
					</div>
				</div>
				<div className="main">
					<div class="header">
						<div>排行</div>
						<div>用户</div>
						<div>历史盈亏</div>
						<div>本月盈亏</div>
						<div>更多</div>
					</div>
					<div className="g-main">
						<div>1</div>
						<div>JAMES 刘</div>
						<div>95685.00</div>
						<div>4500.00</div>
					</div>
					<div className="g-main">
						<div>2</div>
						<div>JAMES 刘</div>
						<div>95685.00</div>
						<div>4500.00</div>
					</div>
					<div className="g-main">
						<div>3</div>
						<div>JAMES 刘</div>
						<div>95685.00</div>
						<div>4500.00</div>
					</div>
					<div className="g-main">
						<div>4</div>
						<div>JAMES 刘</div>
						<div>95685.00</div>
						<div>4500.00</div>
					</div>
					<div className="g-main">
						<div>5</div>
						<div>JAMES 刘</div>
						<div>95685.00</div>
						<div>4500.00</div>
					</div>
					<div className="g-main">
						<div>6</div>
						<div>JAMES 刘</div>
						<div>95685.00</div>
						<div>4500.00</div>
					</div>
					<div className="g-main">
						<div>7</div>
						<div>JAMES 刘</div>
						<div>95685.00</div>
						<div>4500.00</div>
					</div>
				</div>
			</div>
		)
	}
}
