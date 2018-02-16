import React from 'react';
import Repo from './components/Repo';
import Search from './components/Search';
import questionMark from './images/question.png';
import './App.css';

class App extends React.Component {
	constructor (props) {
		super (props);
		this.handleSearch=this.handleSearch.bind(this);
		this.handleSelection=this.handleSelection.bind(this);
		this.state = {
			repos: [],
			language: '',
			search: '',
			selection: ''
		}
	}
	componentDidMount () {
		fetch ('https://api.github.com/orgs/Adalab/repos')
			.then(response => response.json())
			.then(repos => {
				this.setState({ repos });
			});
	}
	writeRepos() {
			 const reposList = this.state.repos.filter (repo => repo.language.includes(this.state.selection)).filter(repo => repo.name.toUpperCase().includes(this.state.search));
				 return (
						 <div className="repos-container">
					 		{ reposList.map (printRepo =>
									<Repo nombre={printRepo.name}
												url={printRepo.html_url}
												descripcion={printRepo.description?
                            printRepo.description:<img alt="repo sin descripción" className="nodescription-image" src={questionMark}/>}  
												lenguaje={printRepo.language} />
								)
							}
						 </div>);
				 }

	handleSearch(event) {
		const searchValor = event.target.value.toUpperCase();
		this.setState({ search: searchValor });
	}
	handleSelection(event) {
		const selectOption = event.currentTarget.value;
		this.setState({ selection: selectOption });

	}
  render() {
    return (
			<div className="main-container">
				<h1 className="title">Repos at Adalab en GitHub</h1>
				<Search busqueda={this.handleSearch} seleccion={this.handleSelection}/>
				<ul>
					{this.writeRepos()}
				</ul>
			</div>
    );
  }
}
export default App;
