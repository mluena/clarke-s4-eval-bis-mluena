import React from 'react';
import Pulpo from '../images/xtocat.jpg';

class Avatar extends React.Component {
	render() {
		return(
			<div>
				<img className="logo" alt="Octodex Wolverine" src={Pulpo}/>
			</div>
		);
	}
}
export default Avatar;
