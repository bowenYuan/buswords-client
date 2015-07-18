import { Reapp, React, NestedViewList, View, Button, BackButton } from 'reapp-kit';
import ButtonGroup from 'reapp-ui/components/ButtonGroup';
import GitHubGravatarURL from '../Gravatar'
import { Container, Block } from 'reapp-ui/components/Grid';
import { Sticker } from './Stickers'


var ChatRoom = React.createClass({
  render: function () {
    var { width, pad, row, children, ...props } = this.props,
        style = {
          backgroundColor: 'white',
          padding: '32px',
          margin: '32px 0'
        };
    return <div style={style}>{children}</div>
  }
});

var ChatMessage = React.createClass({
  render: function () {
    var { width, pad, row, children, ...props } = this.props,
        style = {
          maxWidth: '40%',
          float: this.props.messagePosition,
          minHeight: '32px',
          minWidth: '32px',
          padding: '4px',
          lineHeight: '32px',
          marginBottom: '8px',
          marginTop: '8px',
          color: (this.props.messagePosition == 'left') ? '#111' : '#fafafa',
          backgroundColor: (this.props.messagePosition == 'left') ? '#f1f0f0' : '#0084ff',
          borderRadius: '4px'
        };

    return <container>
            <Block style={style}>{children}</Block>
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
              <Sticker stickerPath="25/0 1" ></Sticker>
            </ChatMessage>
              <ChatMessage messagePosition="left">
                #Haikalis
              </ChatMessage>
            <ChatMessage messagePosition="right">
              <Sticker stickerPath="15/3 1" ></Sticker>
            </ChatMessage>
          </ChatRoom>
          <ButtonGroup>
            <Button onTap={() => this.router().transitionTo('stickersView')} >Stickers</Button>
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
