import React, {
  PureComponent
} from 'react';
import {
  Layout,
  message,
  Avatar,
  Tooltip
} from 'antd';
import Animate from 'rc-animate';


class HeaderView extends PureComponent {
  render() {
    const {
      name,
      avatar
    } = this.props;
    return (
      <div >
        <Avatar src={avatar} />
        <Tooltip title="prompt text">
        <h1>{name}</h1>
        </Tooltip>
      </div>
    );
  }
}

export default HeaderView;