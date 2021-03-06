import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Repo from './components/Repo';
import Search from './components/Search';
import Avatar from './components/Avatar';
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
			selection: '',
			avatar: ''
		}
	}
	componentDidMount () {
		fetch ('https://api.github.com/orgs/Adalab/repos')
			.then(response => response.json())
			.then(json => {
				this.setState({ repos : json });
			});
	}
	writeRepos() {
			 const reposList = this.state.repos.filter (repo => repo.language.includes(this.state.selection)).filter(repo => repo.name.toUpperCase().includes(this.state.search));
				 return (
						 <div >
						 	<ul className="repos-container">
					 		{ reposList.map (printRepo =>
									<li className="repos-list" key={printRepo.name}><Repo nombre={printRepo.name}
												url={printRepo.html_url}
												descripcion={printRepo.description?
                            printRepo.description:<img alt="repo sin descripción" className="nodescription-image" src={questionMark}/>}
												lenguaje={printRepo.language} />				</li>
								)
							}
						 </ul></div>);
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
			<ul className="window">
				<li><Link to='/'><div className="router-buttons">Repositories</div></Link>
				</li>
				<li><Link to='/Search repositories'><div className="router-buttons">Search repositories</div></Link>
				</li>
			</ul>
			<Switch>
				<Route exact path='/' component={Avatar} />
				<Route path='/Search repositories' render={() => <Search busqueda={this.handleSearch} seleccion={this.handleSelection}/> } />

			</Switch>

				{this.writeRepos()}
		}



			</div>
    );
  }
}
export default App;
