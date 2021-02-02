import React from 'react';
import { ModalStyles } from '../StyledComponents/ModalStyles';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      email: '',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const { name } = event.target;
    this.setState({
      [name]: event.target.value,
    });
  }

  render() {
    // Styles
    const { ReviewContainers, ReviewContent } = ModalStyles;
    // Page and containers
    const {
      Form,
      UserInfoContainer,
    } = ReviewContainers;
    // Content
    const {
      Input,
      H2,
    } = ReviewContent;
    const { author, email } = this.state;

    return (
      <UserInfoContainer>
        <H2>*Required</H2>
        <Form>
          <Input type="text" value={author} name="author" onChange={this.onChange} placeholder="Your name(*)" />
          <Input type="text" value={email} name="email" onChange={this.onChange} placeholder="Your email(*)" />
        </Form>
      </UserInfoContainer>
    );
  }
}

export default UserInfo;
