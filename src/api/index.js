import {v4} from 'uuid';
import mockQuestionSets from './mock-question-sets';

let questionSets = [...mockQuestionSets];

// console.log('mockQuestionSets: ', questionSets);

const fakeDatabase = {
  questionSets: questionSets,
};

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchQuestionSets = async () => {
  console.log('#fetchQuestionSets, start');
  
  return await delay(1000).then(() => {
    let data =  {
      status: 'ok',
      statusCode: 200,
      data: fakeDatabase.questionSets
    };
    console.log('#fetchQuestionSets, done');
    return data;
  });
};

export const signupUser = ({firstName, lastName, creativeName, email, password}) => (
  delay(500).then(() => {
    console.log('API#signupUser, fields: %s %s %s %s', firstName, lastName, creativeName, email, password);
    return {
      status: 'created',
      statusCode: 201,
    };
  })
);

export const okResponse = () =>
  delay(500).then(() => {
    console.log('#okResponse, done');
    return {
      status: 'ok',
      statusCode: 200,
    };
    
    // return JSON.stringify({
    //   status: 'ok',
    //   statusCode: 200
    // });
  });
