import { Reapp, React, NestedViewList, View, Button } from 'reapp-kit';
import ButtonGroup from 'reapp-ui/components/ButtonGroup';
import { Container, Block } from 'reapp-ui/components/Grid';
import GitHubGravatarURL from './Gravatar'

var Avatar = React.createClass({
  render: function() {
    var style = {
      width: '128px',
      height: '128px',
      borderRadius: '128px'
    };

    return <a href= {"/chat#" + this.props.GitHubUserId}  >
             <img style={style} alt="Person avatar" src={GitHubGravatarURL(this.props.GitHubUserId, 128)} />
           </a>;
  }
});


var containerProps = {
  pad: true,
  styles: {
    self: {
      textAlign: 'center',
      marginTop: 0,
      marginBottom: 0
    }
  }
};


class People extends React.Component {
  render() {
    return (
      <NestedViewList {...this.props.viewListProps}>
        <View title="Cool people near me">
          <Container {...containerProps}>
            <Block>
              <Avatar GitHubUserId="788386" />
            </Block>
            <Block>
              <Avatar GitHubUserId="6293460" />
            </Block>
            <Block>
              <Avatar GitHubUserId="436509" />
            </Block>
            <Block>
              <Avatar GitHubUserId="3789226" />
            </Block>
          </Container>
          <Container {...containerProps}>
            <Block>
              <Avatar GitHubUserId="1188592" />
            </Block>
            <Block>
              <Avatar GitHubUserId="3427236" />
            </Block>
            <Block>
              <Avatar GitHubUserId="7421439" />
            </Block>
            <Block>
            </Block>
          </Container>
        </View>

        {this.props.child()}
      </NestedViewList>
    );
  }
}

export default Reapp(People);

/*
 This is your root route. When you wrap it with Reapp()
 it passes your class two properties:

  - viewListProps: Passes the scrollToStep to your ViewList so it animates
  - child: The child route
*/
