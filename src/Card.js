import React from 'react';

const Card = ({name, email}) =>{
	
	return (
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 '>
			<img alt='robots'src='https://web.whatsapp.com/pp?e=https%3A%2F%2Fpps.whatsapp.net%2Fv%2Ft61.24694-24%2F70913517_2442059826041139_5257619528895954944_n.jpg%3Foe%3D5DCB713F%26oh%3D347e51cd38da1640c8fb0546b4390f19&t=l&u=553484068929%40c.us&i=1568746797' width="200" height="200"/>
			<div >
				<h2> {name} </h2>
				<p>{email}</p>
			</div>			
		</div>
		)
}

export default Card;