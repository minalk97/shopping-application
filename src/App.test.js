import React from 'react';
import {configure , shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {  Route } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import ProtectedRoutes from "./Components/ProtectedRoutes";
import App from './App';
configure ({adapter:new Adapter()})

describe('1st',()=>{
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(<App/>);
  }))
  it('should run 7 times',()=>{
    // const wrapper = shallow(<App/>)
    expect(wrapper.find(Route)).toHaveLength(7)
  })

  it('should run 6 times',()=>{
    // const wrapper = shallow(<App />)
    // wrapper.setProps({isAuthenticated:true})
    expect(wrapper.find(ProtectedRoutes)).toHaveLength(1)
  })
})
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


