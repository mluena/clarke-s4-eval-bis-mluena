import React from 'react';


class Repo extends React.Component {

	render() {
		return(
			<ul className="repos-container">
				<li className="repos_list">
				<a className="name" href={this.props.url}><h2 className="repos_title">{this.props.nombre}</h2></a>
				<div>{this.props.descripcion}</div>
				<div>{this.props.lenguaje}</div>
				</li>
			</ul>
		);
	}
}
export default Repo;
