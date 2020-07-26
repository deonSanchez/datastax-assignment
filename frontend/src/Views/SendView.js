import React from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';


class SendView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      path: "Choose File",
      file: null
    }
  }

  onChangeHandler(event) {
    if (event.target.files[0]) {
      this.setState({
        path: event.target.files[0].name,
        file: event.target.files[0]
      });
    }
  };

  onClickHandler(event) {
    event.preventDefault();

    const url = "/post-file";
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*'
      }
    }
    const data = new FormData();
    data.append("file", this.state.file);

    axios.post(url, data, config)
      .then(response => console.log(response))
      .catch(errors => console.log(errors))

    this.setState({
      path: "Choose File",
      file: null
    })
  };

  render() {
    return (
      <Container className="my-3">
        <h4 className="text-white" style={styles.textBorder}>Upload File to S3 Bucket</h4>

        <Form>
          <Form.File
            onChange={this.onChangeHandler.bind(this)}
            label={this.state.path}
            custom
          />
          <Button className="mt-3 text-white" style={styles.secondaryBGColor} disabled={this.state.file === null ? true : false} onClick={this.onClickHandler.bind(this)}>Upload File</Button>
        </Form>
      </Container>
    );
  }
};

let styles = {
  textBorder: {
    textShadow: '2px 2px #1F2438'
  },
  secondaryBGColor: {
    backgroundColor: '#1F2438'
  }
}

export default SendView;