import React, {Component} from 'react'
import Home from './HomeComp'
import Search from './SearchComp'


class Main extends Component{

    render(){
        return(
            <React.Fragment>
                <Home />
                <Search />
            </React.Fragment>
        )
    }
}

export default Main