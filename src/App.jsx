import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from 'react-router-dom';
import { Navibar } from './components/Navibar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Users } from './components/Users';

function App() {
return <div>
    <Navibar/>
    <Routes>
        <Route path={'/'} element={<Home/>} />
        <Route path={'/about'} element={<About/>} />
        <Route  path={'/users'} element={<Users/>}/>
    </Routes>
</div>
  // return (
  //     <Container>
  //         <Row className="justify-content-md-center">
  //             <Col xs lg="2">
  //                 1 of 3
  //             </Col>
  //             <Col md="auto">Variable width content</Col>
  //             <Col xs lg="2">
  //                 3 of 3
  //             </Col>
  //         </Row>
  //         <Row>
  //             <Col>1 of 3</Col>
  //             <Col md="auto">Variable width content</Col>
  //             <Col xs lg="2">
  //                 3 of 3
  //             </Col>
  //         </Row>
  //     </Container>
  // );
}


export default App;
