import React from 'react';
import Repo from './components/Repo';
import './App.css';

class App extends React.Component {
	constructor (props) {
		super (props);
		this.handleSearch=this.handleSearch.bind(this);
		this.state = {
			repos: [],
			search: ''
		}
	}

	componentDidMount () {
		fetch ('https://api.github.com/orgs/Adalab/repos')
			.then(response => response.json())
			.then(repos => {
				this.setState({ repos });
			});
	}

	writeRepos () {
		const { search, repos } = this.state;
		const list =	repos.filter(repos => repos.name.toUpperCase().includes(search));
		return(list.map(repos => <li className="repos">
		<Repo nombre={repos.name}
		descripcion={repos.description}
		lenguaje={repos.language}
		url={repos.html_url} />
		</li>));
	}
	handleSearch(event) {
		const searchValor = event.target.value.toUpperCase();
		this.setState({ search: searchValor  });
	}
  render() {
    return (
			<div className="main_container">
			<h1 className="title">Repos at Adalab en GitHub</h1>
			<div className="searcher">
				<label className="input-text">Search repositories</label>
				<input type="text" className="search-input" onChange={this.handleSearch} placeholder="  Search"/>
			</div>
			<ul className="characters-container">
				{this.writeRepos()}
	    </ul>
			</div>
    );
  }
}

export default App;
