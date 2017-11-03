import React from 'react';


const CamperListItem =(props) => {

	console.log("camper data is:",props.camper);

	   // TEMP ***************
    const tempStyle = {
  height:'40px'
    };


return(
		
			<tr>
			<td>
			{props.number}
			</td>
			<td>
			<img src={props.camper.img} style={tempStyle}/>
			<a href={`https://freecodecamp.com/${props.camper.username}`} target="_blank" > {props.camper.username}</a>
			</td>
			<td>
			{props.camper.recent}
			</td>
			<td>
			{props.camper.alltime}
			</td>
			</tr>

		

	);


};

export default CamperListItem;