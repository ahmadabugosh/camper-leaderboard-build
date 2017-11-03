import React from 'react';
import CamperListItem from './CamperListItem';
const CamperList =({campers}) => {

	const Data=campers.map((camper, index)=>{
		return <CamperListItem camper={camper} number={index+1} key={index} />


	});

return(
			<div> 
			<table className="table table-striped">
			<thead>
				<tr>
				<th>#</th>
				<th>User</th>
				<th>Last 30 days points</th>
				<th>All time points</th>
				</tr>
				</thead>

				<tbody>
				{Data}
				</tbody>
			</table>

			 </div>

	);


};

export default CamperList;