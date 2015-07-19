import { React, View, BackButton } from 'reapp-kit';
import List from 'reapp-ui/components/List';
import Title from 'reapp-ui/components/Title';
import Conversation from '../Conversation'

export default class extends React.Component {
  render() {
    const backButton =
      <BackButton onTap={() => window.history.back()} />

    var conversation = Conversation.getCurrent();

    function sendTrend(trend) {
      var message = {
        messageClass: 'Trend',
        messageData: {
          value: trend
        }
      }

      conversation.addMessage(message);
    }

    return (
      <View {...this.props} title="Trends" titleLeft={backButton}>
        <List wrap>
        {
          [
            "#Haikalis","#Palmos Analysis","#Ελισαβετ","#Προεδρικο Μεγαρο","#χαικαλη","#fire","#ZaynAppreciationDay","#Σκυρο","#Αρκα","#καρεα"
          ].map(function (trend) {
            return <a href={'/chat#' + conversation.getChatId()} onClickCapture={() => sendTrend(trend)} >{trend}</a>
          })
        }
        </List>
      </View>
    );
  }
}
