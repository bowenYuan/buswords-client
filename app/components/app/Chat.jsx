import { Reapp, React, NestedViewList, View, Button, BackButton } from 'reapp-kit';
import ButtonGroup from 'reapp-ui/components/ButtonGroup';


function getGravatarURL (GitHubUserId) {
  return "https://avatars3.githubusercontent.com/u/" + GitHubUserId + "?v=3&s=32";
}


class Chat extends React.Component {
  render() {
    const backButton =
      <BackButton onTap={() => window.history.back()} />

    var GitHubUserId = (location.hash) ? +location.hash.substring(1) : 1,
        AvatarURL = getGravatarURL(GitHubUserId);

    function getTitle () {
      var style = {
        borderRadius: '32px'
      };

      return <img src={AvatarURL} style={style}/>
    }

    return (
      <NestedViewList {...this.props.viewListProps}>
        <View title={getTitle()} titleLeft={backButton} >
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
