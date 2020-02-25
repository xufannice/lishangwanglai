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
					<div id="home-top2"></div>
				</div>
			</div>
		)
	}
}
