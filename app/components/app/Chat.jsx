import { Reapp, React, NestedViewList, View, Button, BackButton } from 'reapp-kit';
import ButtonGroup from 'reapp-ui/components/ButtonGroup';
import GitHubGravatarURL from '../Gravatar'
import { Container, Block } from 'reapp-ui/components/Grid';


var ChatRoom = React.createClass({
  render: function () {
    var { width, pad, row, children, ...props } = this.props;
    return <div>{children}</div>
  }
});

var ChatMessage = React.createClass({
  render: function () {
    var { width, pad, row, children, ...props } = this.props;

    var leftBlock = <Block></Block>,
        rightBlock = <Block></Block>

    return <container>
            {leftBlock} {rightBlock}
           </container>
  }
});

class Chat extends React.Component {
  render() {
    const backButton =
      <BackButton onTap={() => window.history.back()} />

    var GitHubUserId = (location.hash) ? +location.hash.substring(1) : 1,
        AvatarURL = GitHubGravatarURL(GitHubUserId, 32);

    function getTitle () {
      var style = {
        borderRadius: '32px'
      };

      return <img src={AvatarURL} style={style}/>
    }

    return (
      <NestedViewList {...this.props.viewListProps}>
        <View title={getTitle()} titleLeft={backButton} >
          <ChatRoom>
            <ChatMessage messagePosition="left">
              😊
            </ChatMessage>
            <ChatMessage messagePosition="right">
              💩
            </ChatMessage>
          </ChatRoom>
          <ButtonGroup>
            <Button onTap={() => this.router().transitionTo('stickers')} >Stickers</Button>
            <Button onTap={() => this.router().transitionTo('trends')} >Trends</Button>
          </ButtonGroup>
        </View>

        {this.props.child()}
      </NestedViewList>
    );
  }
}

export default Reapp(Chat);

/*
 This is your root route. When you wrap it with Reapp()
 it passes your class two properties:

  - viewListProps: Passes the scrollToStep to your ViewList so it animates
  - child: The child route
*/
