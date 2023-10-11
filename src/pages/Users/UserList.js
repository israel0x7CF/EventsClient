import { List, Avatar } from "antd";
const UserList = (props) => {
  return (
    <div
        style={{
            width:"50%",
            margin:"0px 0px 0px 10%"
        }}
    >

    <List
      dataSource={props.users}
      renderItem={(user) => (
        <List.Item key={user.id}>
            <List.Item.Meta
                title={user.name}
                description={user.bio}
            >
            
            </List.Item.Meta>
                <button>follow</button>
        </List.Item>
  )}
    ></List>
</div>
  );
};

export default UserList;
