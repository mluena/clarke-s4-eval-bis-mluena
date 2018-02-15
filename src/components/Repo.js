import React from 'react';

class Repo extends React.Component {

	render() {
		return(
			<ul className="repos-list-container">
				<li className="repos-list">
					<a className="name" href={this.props.url}>
						<h2 className="repos-title">{this.props.nombre}</h2>
					</a>
					<div className="repos-description">{this.props.descripcion}</div>
					<div className={`repos-language bullet-${this.props.lenguaje}`}>{this.props.lenguaje}</div>
				</li>
			</ul>
		);
	}
}
export default Repo;
