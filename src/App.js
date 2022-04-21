function Player({name,picture}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>  
 );
}

const playerILike = [
  {
    name: 'Cristiano Ronaldo',
    image: 'https://img.sbs.co.kr/newimg/news/20210912/201591158_1280.jpg'
  },
  {
    name: 'Lionel Messi',
    image: 'http://newsimg.hankookilbo.com/2018/06/27/201806270548089865_4.jpg'
  },
  {
    name: 'Heung-Min Son',
    image: 'http://www.ejanews.co.kr/news/photo/201711/2017110645376426.jpg'
  },
  {
    name: 'Neymar',
    image: 'http://db.kookje.co.kr/news2000/photo/2021/0615/L20210615.22018004169i1.jpg'
  }
];

function App() {
  return (
   <div>
     {playerILike.map(footballer => <Player key={footballer.name} name={footballer.name} picture={footballer.image}/>)}
   </div>
  ); 
}

export default App;