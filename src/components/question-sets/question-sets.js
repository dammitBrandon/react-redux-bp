import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Layout, Menu } from "antd";
import {Link} from 'react-router-dom';
import {QuestionSetList} from './question-set-list';

const {Footer, Content} = Layout;

class QuestionSetsPage extends Component {
  
  render() {
    const {questionSets, isLoading} = this.props;
    
    return (
      <Layout>
        <Content>
          <QuestionSetList qs={questionSets} isLoading={isLoading}/>
        </Content>
        <Footer>
          <Menu mode="horizontal" theme="light">
            <Menu.Item key={0}>
              <Link to="/question-sets?qs-filter=all">All</Link>
            </Menu.Item>
            <Menu.Item key={1}>
              <Link to="/question-sets?qs-filter=owned-by-me" >Active</Link>
            </Menu.Item>
          </Menu>
        </Footer>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    questionSets: state.app.questionSets.data,
    isLoading: state.app.questionSets.isLoading
  };
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionSetsPage);
