import React from "react";
import { List, ListItem } from "../../components/List";
import UserInfo from "../../components/UserInfo";


const SearchResults = props => (
  <div>{props.coachList.length ? (
      <List>
        {props.coachList.map(user =>
          <ListItem key={user.id}>
            <UserInfo user_id={user.id} />
            <div className="user_prog_btn_group">
              <button className="prog-btn approve-btn">
                <a href={"/user/"+user.id} alt="coach">Profile</a>
              </button>
            </div>
          </ListItem>
        )}
      </List>
    ):""}</div>
)
export default SearchResults;


