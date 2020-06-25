import React from 'react'
import hp from '../Images/hp.png'

function Home(props){
    return(
        <React.Fragment>
            <div className="text-center">
                <img className="img-fluid" src={hp} alt="hogwarts logo" style={{width: "200px", height: "200px"}} />
            </div>
            <h1 className="text-center text-light display-4" style={{fontFamily: "Harry P"}}>Hogwarts Alumni</h1>
            <h3 className="text-center text-light" style={{fontFamily: "Harry P"}}>Here is a list of characters appeared in the Harry Potter series</h3>
        </React.Fragment>
    )
}

export default Home