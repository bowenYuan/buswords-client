import { React, View, BackButton } from 'reapp-kit';
import List from 'reapp-ui/components/List';
import Title from 'reapp-ui/components/Title';
import Conversation from '../Conversation'

export default class extends React.Component {
  render() {
    const backButton =
      <BackButton onTap={() => window.history.back()} />

    var article = (location.hash) ? location.hash.substring(1) : null,
        title = (article) ? article : 'No article given',
        iframeStyle = {
          width: '100%',
          height: '100%',
          margin: 0,
          padding: 0,
          border: 0,
          position: 'absolute'
        };

    return (
      <View {...this.props} title={title} titleLeft={backButton}>
        <iframe style={iframeStyle} src={article}></iframe>
      </View>
    );
  }
}
