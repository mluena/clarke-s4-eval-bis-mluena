import Search from 'search';

class Search extends React.Component {
	constructor (props) {
		super (props);
		this.handleSearch=this.handleSearch.bind(this);
		this.state = {
			search: ''
		}
	}
	handleSearch(event) {
		const searchValor = event.target.value.toUpperCase();
		this.setState({ search: searchValor  });
	}
	render () {
		return (
			<div className="searcher">
				<Search /><label className="input-text">Search repositories</label>
				<input type="text" className="search-input" onChange={this.handleSearch} placeholder="  Search"/>
			</div>
		);
	}
}
export default Search;
