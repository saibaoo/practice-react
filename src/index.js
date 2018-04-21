import React from 'react'
import ReactDOM from 'react-dom'

function Cartoon(props) {
	return <h1>hello, {props.name} on {props.show}</h1>
}
// class Cartoon extends React.Component{
// 	render(){
// 		return <h1>Hello,{this.props.name}</h1>
// 	}
// }
function Show(){
	return <div>
						<Cartoon name="Sai" show="Pokemoon"/>
						<Cartoon name="Jassmine" show="Alladin"/>
					</div>
}
ReactDOM.render(
	 <Show/>,
	document.getElementById('root')
	);
