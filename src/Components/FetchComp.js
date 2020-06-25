import React, {Component} from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';

class Fetch extends Component{

    constructor(props){
        super(props)
        this.state = {
            dataArr : []
        }
    }

    fetchChars(){
        fetch('https://www.potterapi.com/v1/characters?key=$2a$10$98MHJlKaFoo0G7LAQUyAouANLhMbbUmGTzPt9RRp1KhevIyAee.uC')
            .then(res => {
                if (res.ok) {
                return res;
                }   else {
                var error = new Error('Error ' + res.status + ': ' + res.statusText);
                error.response = res;
                throw error;
                }
            },
            error => {
                    throw error;
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    dataArr: data
                })
            })
            .catch(err => alert("Something went wrong!"))
        }

        componentDidMount(){
            this.fetchChars()
        }

    render(){

        const value = this.props.value

        const name = this.state.dataArr.map((i) => {
            return i.name
        })

        const filtrd = name.filter(el => el.toLowerCase().indexOf(value.toLowerCase()) !== -1)

        const final = filtrd.map((e) => {
            return(
                <ListGroupItem className="bg-transparent text-white text-center" 
                    style={{fontSize: "30px", fontFamily: '"Jolly Lodger", cursive'}}
                >
                    {e}
                </ListGroupItem>
            )
        })


        return(
            <ListGroup>
                {final}
            </ListGroup>
        )
    }
}


export default Fetch