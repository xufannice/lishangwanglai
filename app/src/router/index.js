import React,{Component} from 'react'
import {Switch,Redirect,Route} from 'react-router-dom'
import Header from '../component/header/header'
import index from '../component/index/index'
import Ceremony from '../component/Ceremony/Ceremony'
import account from '../component/account/account'
import my from '../component/my/my'
import Index from './index.css'
import SZ from '../component/my/sz/sz'
import GY from '../component/my/gy/gy'
import FX from '../component/my/fx/fx'
import FK from '../component/my/fk/fk'
import BJ from '../component/my/bj/bj'
import SL from '../component/shouli/shouli'
import LS from '../component/lishi/lishi'
function router() { 
    return(
        <div id="box">
            <Header></Header>
            <Switch>
                <Route exact path='/' component={my}/>
                <Route path='/account' component={account}/>
                <Route path='/Ceremony' component={Ceremony}/>
                <Route path='/my' component={my}/>
                <Route path='/sz' component={SZ}/>
                <Route path='/gy' component={GY}/>
                <Route path='/fx' component={FX}/>
                <Route path='/fk' component={FK}/>
                <Route path='/bj' component={BJ}/>
                <Route path='/shouli' component={SL}/>
                <Route path='/lishi' component={LS}/>
                <Route component={index}/>
                
                
            </Switch>
        </div>
    )
 }

  export default router