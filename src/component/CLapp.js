import React, {Component} from 'react'
import EventCalendar from './EventCalendar';
import {database} from './fire'
import Dropdown from './dropdown'
import { Row, Col, Button } from 'react-bootstrap';

database.ref("users").on('value', function(snapshot) {
  console.log(snapshot.val())
});



export default class CLapp extends Component {
  
    render() {
        var requests = ["Sam <-----> You","David <---> Anyone"];
        var pending = ["Hunter <-----> Phoebe",
        "Dave <---> Holden", "You <-----> David"];
        var history = ["Hunter <-----> Phoebe",
        "Dave <---> Holden", "You <-----> David"];
        var commons = ["Rec Room","Laundry Room","N Breezeway"
        ,"S Breezeway","N Lobbies","S Lobbies","N Halls","S Halls"];
        var bathroom = ["NW1","NW2","NE1","NE2","SE1", "SE2", "SW1", "SW2"];

        return( 
          <div className='app-main'>
              <div className="topBar"><h1 className="title">CLapp</h1></div>
              <Row>
              <div className="sideBar">
                  <div className = 'buffer'></div>
                  <Button>+</Button>
                </div>
                <Col sm={8}><EventCalendar/></Col>
                <Col>
                  <Row><Col>
                    <Dropdown title={"Requests"}list={requests}n={2}/>
                  </Col></Row>
                  <Row><Col>
                    <Dropdown title="Pending"list={pending}n={3}/>
                  </Col></Row>
                  <Row><Col>
                  <Dropdown title="History"list={history}n={3}/>
                  </Col></Row>
                </Col>
                <Col>
                  <Row><Col>
                    <Dropdown title="Commons" list={commons} n={commons.length}/>
                  </Col></Row>
                  <Row><Col>
                    <Dropdown title="Bathroom" list={bathroom} n={bathroom.length}/>
                  </Col></Row>
                </Col>
              </Row>

          </div>
        )
    }
}