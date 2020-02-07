import React from 'react';
import {List, Spin} from "antd";
import { Link } from "react-router-dom";
import loadingSpinner from "../../lib/components/loadingSpinner";
const {SpinProps} = Spin;
const {Item} = List;

export const QuestionSetList = ({qs, isLoading}) => {
  return (
    <List
      loading={SpinProps}
      
      dataSource={qs}
      renderItem={_qs => (
        <Item>
          <Link to={`/question-sets/${_qs.id}`} >
            {_qs.title}
          </Link>
        </Item>
      )}
    />
  )
}
