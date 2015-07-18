import { React, View, BackButton } from 'reapp-kit';
import { Container, Block } from 'reapp-ui/components/Grid';
import { StickerLink, StickerLinkContainer } from './Stickers'

export default class extends React.Component {
  render() {
    const backButton =
      <BackButton onTap={() => window.history.back()} />

    var containerProps = {
          pad: true,
          styles: {
            self: {
              textAlign: 'center',
              marginTop: '32px',
              marginBottom: '32px'
            }
          }
        },
        stickerFamilies = [];

    for (var i=25; i>=0; i--) {
      stickerFamilies.push(i);
    }

    return (
      <View {...this.props} title="Choose a Sticker" titleLeft={backButton}>
        {
          stickerFamilies.map(function (i) {
            var family = <div>
              {
                [0, 1, 2, 3].map(function (internalFamily) {
                  return <StickerLinkContainer containerId={i + "/" + internalFamily} ></StickerLinkContainer>
                })
              }
            </div>
            return family;
          })
        }
      </View>
    );
  }
};
