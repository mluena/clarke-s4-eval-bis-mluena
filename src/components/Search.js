import React from 'react';

class Search extends React.Component {

	render () {
		return (
			<div className="searcher-selector">
				<label className="input-search">Search repositories   </label>
				<input type="text" className="search" onChange={this.props.busqueda} placeholder="   Search"/>
				<select className="languages-selector" name="languages" onClick={this.props.seleccion}>
					<option className="language-options" value="">Select a laguage</option>
				  <option className="language-options" value="CSS">CSS</option>
				  <option className="language-options" value="HTML">HTML</option>
				  <option className="language-options" value="JavaScript">JavaScript</option>
				</select>
			</div>
		);
	}
}
export default Search;
