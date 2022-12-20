import React, {useState} from 'react';
import { Button, Form, Input ,Spin} from 'antd';
import {useDispatch} from 'react-redux'
import { fetchImages } from '../Thunks/Ai_thunk';


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};


const Searchimg = () => {

  const [state,setState]=useState(false);

    const dispatch=useDispatch();
  const [form] = Form.useForm();

  const onFinish = (values) => {
   // console.log(values);

    values.size="256x256"
    values.n=Number(values.n);
    setState(true);

    // dispatching the action ---->
    dispatch(fetchImages(values)).then(data=>{
        setState(false);  // dispatch non async action 
    }).catch(err=>{
        setState(false);

    })
  };
  const onReset = () => {
    form.resetFields();
  };
  // const onFill = () => {
  //   form.setFieldsValue({
  //     note: 'Hello world!',
  //     gender: 'male',
  //   });
  // };
  return (
    <>
   

<Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item
        name="prompt"
        label="Search Text"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="n"
        label="Number Of Images"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      
   
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      
      </Form.Item>
    </Form><br></br>

    {
    state? <Spin size="large"  style={{marginLeft:"200px"}}/>:""
  }
    </>
   
  );
};
export default Searchimg;

