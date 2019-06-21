/*eslint no-console: 0*/

import React from "react";

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: "Hello",
      lang: this.props.lang || "en"
    };
  }

  fetchLanguageAPI = lang => {
    const url = "https://fourtonfish.com/hellosalut/";
    fetch(`${url}?cc=${lang}`)
      .then(data => data.json())
      .then(response => {
        const hello = decodeURI(response["hello"]) || this.state.hello;
        this.setState({
          hello
        });
      })
      .catch(err => console.log(err));
  };

  componentDidUpdate(prevProps) {
    if (this.props.lang != prevProps.lang) {
      this.fetchLanguageAPI(this.props.lang);
    }
  }

  componentDidMount() {
    this.fetchLanguageAPI(this.state.lang);
  }

  render() {
    return <span dangerouslySetInnerHTML={{ __html: this.state.hello }} />;
  }
}

export default Hello;
