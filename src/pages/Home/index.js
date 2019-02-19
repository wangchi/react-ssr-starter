import React, { Component } from 'react';
import { connect } from 'react-redux';


// class Home extends Component {
//   render() {
//     return <div onClick={() => alert('click')}>hello walker</div>
//   }
// }

const Home = (props) => {
  return (
    <div onClick={() => alert('click')}>hello {props.name}</div>
  );
}

const mapStateToProps = state => ({
  name: state.name
});

export default connect(mapStateToProps, null)(Home);
