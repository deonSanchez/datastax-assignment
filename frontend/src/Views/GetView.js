import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import Countdown from "react-countdown";
import axios from 'axios';


class GetView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileList: [],
      file: undefined,
      url: "",
      timer: false
    }
  }

  onChangeHandler(event) {
    this.setState({
      file: event.target.value,
      timer: false
    });
  };

  onClickHandler(event) {
    event.preventDefault();

    const url = "/put-url";
    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }
    const data = new FormData();
    data.append("file", this.state.file);

    axios.put(url, data, config)
      .then(response => { this.setState({ url: response.data, timer: true }) })
      .catch(errors => console.log(errors))
  };

  componentDidMount() {
    const url = "/get-list";
    axios.get(url)
      .then(reponse => {
        this.setState({
          fileList: reponse.data.items,
          file: reponse.data.items[0]
        });
      })
      .catch(errors => console.log(errors))
  }

  render() {
    return (
      <ScrollAnimation animateIn="fadeInUp">
        <Container className="my-3">
          <h4 className="text-white" style={styles.borders}>Download File from S3 Bucket</h4>

          <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Control as="select" onChange={this.onChangeHandler.bind(this)} value={this.state.file}>
                {this.state.fileList.map((value, index) =>
                  <option key={index}>{value}</option>
                )}
              </Form.Control>
            </Form.Group>

            <Button className="text-white" style={styles.secondaryBGColor} disabled={this.state.file === undefined ? true : false} onClick={this.onClickHandler.bind(this)}>
              Create Link
        </Button>
          </Form>

          <h4 className="text-white pt-5" style={styles.borders}>Downloadable Link</h4> 
          {this.state.timer === false ? <p className="text-white">Select a file then press "Create Link" Button</p> :
          <div>
            <a className="text-white" href={this.state.url}>{this.state.url}</a>
            <h5 className="text-white pt-3" style={styles.borders}>Link will expire in <Countdown date={Date.now() + 59000} renderer={props =><span>{props.seconds} seconds</span>}/></h5>
            </div>
          }

        </Container>
      </ScrollAnimation>
    );
  }
};

let styles = {
  borders: {
    textShadow: '2px 2px #1F2438'
  },
  secondaryBGColor: {
    backgroundColor: '#1F2438'
  },
  secondaryColor: {
    color: '#1F2438'
  }
}

export default GetView;
