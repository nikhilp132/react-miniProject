import React from 'react';
import Card from './Card';
import './style.css';

function App() {
  return (
    <>
      <Card
        posterSrc="https://terrigen-cdn-dev.marvel.com/content/prod/1x/punisher_s2_vertical-main_rgb.jpg"
        title="The Punisher"
        link="https://www.netflix.com/title/80117498"
      />
      <Card
        posterSrc="https://m.media-amazon.com/images/M/MV5BM2ZmYjUxZDYtMmZlMi00YjlkLTkwNTItMjcxZDRlOTI3ZTNmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
        title="The Spy"
        link="https://www.netflix.com/in/title/80178151"
      />
      <Card
        posterSrc="https://m.media-amazon.com/images/M/MV5BNzVkYWY4NzYtMWFlZi00YzkwLThhZDItZjcxYTU4ZTMzMDZmXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_.jpg"
        title="Brooklyn 99"
        link="https://www.netflix.com/in/title/70281562#:~:text=2013%20%7C%20U%2FA%2016%2B,Samberg%2CAndre%20Braugher%2CStephanie%20Beatriz"
      />
    </>
  );
}

export default App;
