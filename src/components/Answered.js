import React, { Component } from 'react';
import { Col, CardImg, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Answered extends Component {

    render() {
      const { allUsers, answeredArray } = this.props;
  
      return (
        <Row>
          {answeredArray !== undefined && answeredArray.length > 0 &&
            answeredArray.map(question => (
              <Col className="question-card" key={question.id} sm="12">
                <Row>
                  <Col className="author-image" sm={{ size: 4 }}>
                    {allUsers
                      .filter(item => item.id === question.author)
                      .map(user => (
                        <CardImg
                          key={user.id}
                          src={user.avatarURL}
                          alt="Card image cap"
                        />
                      ))}
                    <p className="question-author">By: {question.author}</p>
                  </Col>
                  <Col className="user-name" sm={{ size: 8 }}>
                    <p className="text-left">
                      <strong>Would you rather .. !</strong>
                    </p>
                    <p className="question-text text-left">
                      {question.optionOne.text}
                    </p>
                    <p>
                      <Link
                        className="question-link"
                        to={`/question/${question.id}`}>
                        View poll
                      </Link>
                    </p>
                  </Col>
                </Row>
              </Col>
            ))}
        </Row>
      );
    }
  }
  