// import './App.css';
import { Col, Row } from 'antd';
import Searchimg from './Components/Searchimg';
import Images from './Components/Images'

function App() {

  const AiSlice = (state => state.AiSlice);


  return (
    <>

<Row style={{margin:'20vh 0'}}>
      <Col span={12}>

    <Searchimg/>
      </Col>
      <Col span={12}>
      { AiSlice.images.map(ele=>(

        <Images url={ele.url}/>
      )) 
      }
      </Col>
    </Row>
    </>
  );
}

export default App;
