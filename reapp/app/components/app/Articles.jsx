import { React, View, BackButton } from 'reapp-kit';
import List from 'reapp-ui/components/List';
import Title from 'reapp-ui/components/Title';
import Conversation from '../Conversation'


function fetchArticles() {
  fetch('https://exdqcyue.apps.lair.io/koulouri').then(function (response) {
    return response.json()
  }).then(function(json) {
    localStorage.setItem('articles.articles', JSON.stringify(json));
    localStorage.setItem('articles.time', Math.round(new Date().getTime()/1000))
  });
}

function conditionalFetchArticles() {
  var now = new Date().getTime(),
      lastFetch = (localStorage.getItem('articles.time')) ? +localStorage.getItem('articles.time') : 0;

  /* Fetch articles only if they have not been fetched for 15 minutes at least */
  if ((now - lastFetch) > 900) {
    fetchArticles()
  }
}

conditionalFetchArticles();

export default class extends React.Component {
  render() {
    const backButton =
      <BackButton onTap={() => window.history.back()} />

    var conversation = Conversation.getCurrent();

    function sendArticle(article) {
      var message = {
        messageClass: 'Article',
        messageData: {
          title: article.title,
          text: article.description,
          html: article.html
        }
      }

      conversation.addMessage(message);
      window.history.back();
    }
    var style = {
      cursor: 'pointer'
    };

    var articles = JSON.parse(localStorage.getItem('articles.articles'));

    return (
      <View {...this.props} title="Articles" titleLeft={backButton}>
        <List wrap>
        {
          articles.map(function (article) {
            return <span style={style} onClickCapture={() => sendArticle(article)} >{article.title}</span>
          })
        }
        </List>
      </View>
    );
  }
}
