import React, {Component} from 'react';
import {connect} from 'react-redux';
import {findById} from '../../modules/app/redux/question-sets';
import {
  Collapse,
  Checkbox,
  Layout,
  List,
  Form,
  Input,
  Row,
  Col,
  Button
} from "antd";

const { Panel } = Collapse;

class QuestionSetPage extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('#handleSubmit');
  };
  
  callback = (key) => {
    console.log(key);
  };
  
  render() {
    const {questionSet: {title, questions}} = this.props;
    
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item label="Title">
          <Input placeholder="title" defaultValue={title} />
        </Form.Item>
        <Form.Item label="Question Statements">
          <List
            dataSource={questions}
            renderItem={question => (
              <List.Item>
                <Collapse onChange={this.callback}>
                  <Panel showArrow={false} header={question.questionStatement} key={question.id}>
                  
                  </Panel>
                </Collapse>
              </List.Item>
            )}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

function mapStateToProps(state, ownProps) {
  let questionSetId = ownProps.match.params.questionSetId;
  let questionSet = findById(state.app.questionSets.data, questionSetId);
  if (!questionSet) {
    questionSet = {
      "id": "5cdab9d7d7532844545f94d8",
      "title": "Post Man Test5",
      "questions": [
        {
          "id": "5cdab9d7d7532844545f94d9",
          "questionStatement": "qs 6",
          "possibleAnswers": [
            {
              "id": "5cdab9d7d7532844545f94dc",
              "answerStatement": "answer1",
              "isCorrect": true
            },
            {
              "id": "5cdab9d7d7532844545f94db",
              "answerStatement": "answer2",
              "isCorrect": false
            },
            {
              "id": "5cdab9d7d7532844545f94da",
              "answerStatement": "answer3",
              "isCorrect": false
            }
          ]
        },
        {
          "id": "5cdab9d7d7532844545f94dd",
          "questionStatement": "qs 4",
          "possibleAnswers": [
            {
              "id": "5cdab9d7d7532844545f94e0",
              "answerStatement": "answer1",
              "isCorrect": true
            },
            {
              "id": "5cdab9d7d7532844545f94df",
              "answerStatement": "answer2",
              "isCorrect": false
            },
            {
              "id": "5cdab9d7d7532844545f94de",
              "answerStatement": "answer3",
              "isCorrect": false
            }
          ]
        }
      ]
    };
  }
  
  return {
    questionSet: questionSet
  };
};

export default connect(mapStateToProps, {})(QuestionSetPage);
