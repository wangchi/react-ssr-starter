import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHomeList } from './store/actions';


class Home extends Component {
  componentDidMount() {
    if (this.props.list.length === 0) {
      this.props.getHomeList();
    }
  }

  render() {
    return (
      <div>
        {
          this.props.list.map(item => <div key={item.id}>{item.title}</div>)
        }
        <div onClick={() => alert('click')}>hello {this.props.name}</div>
      </div>
    );
  }
}

Home.loadData = (store) => {
  return store.dispatch(getHomeList());
}

const mapStateToProps = state => ({
  name: state.home.name,
  list: state.home.newsList
});

const mapDispatchToProps = dispatch => ({
  getHomeList() {
    console.log('home list');
    dispatch(getHomeList());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
