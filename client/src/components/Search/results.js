import React from "react";
import { List, ListItem } from "../../components/List";
import UserInfo from "../../components/UserInfo";
import { Container, Card, CardHeader, CardBody, Row, Col } from 'reactstrap';


const SearchResults = props => (
  <div>{props.coachList.length ? (
       <Row>
       <Col>
         <Card className="mb-3">
           <CardHeader><h2>Results</h2></CardHeader>
           <CardBody>
      <List>
        {props.coachList.map(user =>
          <ListItem key={user.id}>
            <UserInfo className="mb-3" user_id={user.id} />
            <div className="user_prog_btn_group">
              <button className="profile-btn btn-outline-light">
                <a href={"/user/"+user.id} alt="coach">Profile</a>
              </button>
            </div>
          </ListItem>
        )}
      </List>
      </CardBody>
         </Card>
       </Col>
     </Row>
    ):""}</div>
)
export default SearchResults;


