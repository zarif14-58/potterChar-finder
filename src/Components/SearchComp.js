import React, {Component} from 'react'
import { Form, FormGroup, Input, Col } from 'reactstrap';
import Fetch from './FetchComp'

class Search extends Component{

    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
        console.log(this.state.value)  
    }

    render(){

        

        return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10 col-sm-7">
                        <Form>
                            <FormGroup row>
                                <Col md={12}>
                                    <Input type="text" id="search" name="search"
                                        placeholder="Search a character"
                                        value={this.state.value}
                                        onChange={this.handleChange} 
                                    />
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
                <div>
                    <Fetch value={this.state.value} />
                </div>
            </div>
        )
    }
}

export default Search