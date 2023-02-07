import React, { View, Button } from "react";
import Card from "react-bootstrap/Card";

const TodoCard = () => {
  // const [title, setTitle] = useState("");
  // const [detail, setDetails] = useState("");

  return (
    <section className="d-flex justify-content-center">
      <Card className="col-lg-5 shadow m-5 mt-0" style={{ width: "100%" }}>
        <Card.Header as="h5">New Notes</Card.Header>
        <Card.Body>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Card.Text>2022-09-04</Card.Text>
          <View>
            <Button
              variant="info"
              //   type="submit"
              style={{
                color: "white",
                background: "#17a2b8",
                fontWeight: 500,
              }}
              onClick={() => {
                navigate("/login");
              }}
            >
              Read More
            </Button>
          </View>
        </Card.Body>
      </Card>
    </section>
  );
};

export default TodoCard;
