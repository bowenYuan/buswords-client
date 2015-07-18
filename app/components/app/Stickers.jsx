import { React, View, BackButton } from 'reapp-kit';
import { Container, Block } from 'reapp-ui/components/Grid';

export default class extends React.Component {
render() {
const backButton =
  <BackButton onTap={() => window.history.back()} />

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

  function stickerRequire(name) {
    return 'http://localhost:3011/assets/shared/facebook-stickers/stickers/' + name + '.png';
  }

return (
  <View {...this.props} title="Choose a Sticker" titleLeft={backButton}>
    <Container {...containerProps}>
      <Block>
        <img src={stickerRequire('25/0 0')} alt="Sticker" />
      </Block>
      <Block>
        <img src={stickerRequire('25/0 1')} alt="Sticker" />
      </Block>
      <Block>
        <img src={stickerRequire('25/0 2')} alt="Sticker" />
      </Block>
      <Block>
        <img src={stickerRequire('25/0 3')} alt="Sticker" />
      </Block>
    </Container>
    <Container {...containerProps}>
      <Block>
        <img src={stickerRequire('25/1 0')} alt="Sticker" />
      </Block>
      <Block>
        <img src={stickerRequire('25/1 1')} alt="Sticker" />
      </Block>
      <Block>
        <img src={stickerRequire('25/1 2')} alt="Sticker" />
      </Block>
      <Block>
        <img src={stickerRequire('25/1 3')} alt="Sticker" />
      </Block>
    </Container>
    <Container {...containerProps}>
      <Block>
        <img src={stickerRequire('25/2 0')} alt="Sticker" />
      </Block>
      <Block>
        <img src={stickerRequire('25/2 1')} alt="Sticker" />
      </Block>
      <Block>
        <img src={stickerRequire('25/2 2')} alt="Sticker" />
      </Block>
      <Block>
        <img src={stickerRequire('25/2 3')} alt="Sticker" />
      </Block>
    </Container>
    <Container {...containerProps}>
      <Block>
        <img src={stickerRequire('25/3 0')} alt="Sticker" />
      </Block>
      <Block>
        <img src={stickerRequire('25/3 1')} alt="Sticker" />
      </Block>
      <Block>
        <img src={stickerRequire('25/3 2')} alt="Sticker" />
      </Block>
      <Block>
        <img src={stickerRequire('25/3 3')} alt="Sticker" />
      </Block>
    </Container>
    <Container {...containerProps}>
      <Block>
        <img src={stickerRequire('0/0 0')} alt="Sticker" />
      </Block>
      <Block>
        <img src={stickerRequire('0/0 1')} alt="Sticker" />
      </Block>
      <Block>
        <img src={stickerRequire('0/0 2')} alt="Sticker" />
      </Block>
      <Block>
        <img src={stickerRequire('0/0 3')} alt="Sticker" />
      </Block>
    </Container>
    <Container {...containerProps}>
      <Block>
        <img src={stickerRequire('0/1 0')} alt="Sticker" />
      </Block>
      <Block>
        <img src={stickerRequire('0/1 1')} alt="Sticker" />
      </Block>
      <Block>
        <img src={stickerRequire('0/1 2')} alt="Sticker" />
      </Block>
      <Block>
        <img src={stickerRequire('0/1 3')} alt="Sticker" />
      </Block>
    </Container>
    <Container {...containerProps}>
      <Block>
        <img src={stickerRequire('0/2 0')} alt="Sticker" />
      </Block>
      <Block>
        <img src={stickerRequire('0/2 1')} alt="Sticker" />
      </Block>
      <Block>
        <img src={stickerRequire('0/2 2')} alt="Sticker" />
      </Block>
      <Block>
        <img src={stickerRequire('0/2 3')} alt="Sticker" />
      </Block>
    </Container>
    <Container {...containerProps}>
      <Block>
        <img src={stickerRequire('0/3 0')} alt="Sticker" />
      </Block>
      <Block>
        <img src={stickerRequire('0/3 1')} alt="Sticker" />
      </Block>
      <Block>
        <img src={stickerRequire('0/3 2')} alt="Sticker" />
      </Block>
      <Block>
        <img src={stickerRequire('0/3 3')} alt="Sticker" />
      </Block>
    </Container>
  </View>
);
}
}
