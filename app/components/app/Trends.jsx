import { React, View, BackButton } from 'reapp-kit';
import List from 'reapp-ui/components/List';
import Title from 'reapp-ui/components/Title';

export default class extends React.Component {
  render() {
    const backButton =
      <BackButton onTap={() => window.history.back()} />

    return (
      <View {...this.props} title="Trends" titleLeft={backButton}>
        <List wrap>
          {
["#Haikalis","#Palmos Analysis","#Ελισαβετ","#Προεδρικο Μεγαρο","#χαικαλη","#fire","#ZaynAppreciationDay","#Σκυρο","#Αρκα","#καρεα"]}
        </List>
      </View>
    );
  }
}
