import React, {Component} from 'react'

class Input extends Component{
    state={
            value: '',
    }
    chengeValue =(el)=>{
        this.setState({
            value: el.target.value
        })
    }
    sendText =()=>{
        const txt = this.state.value
        console.log(txt)
        this.setState({
            value: ''
        })
    }
// hook
    render(){
            return ( 
                <div>
                  <input type='text' value={this.state.value} onChange={this.chengeValue}/>
                   <button type="button" className="btn btn-dark" onClick={this.sendText}>send DZ</button>
                </div>
            )
    }
}

  export default Input 