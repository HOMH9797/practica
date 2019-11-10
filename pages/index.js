import ClassComponent from '../components/classComponent'
const matematicas =[{
    "id": 1,
    "first_name": "Philipa",
    "last_name": "Velez",
    "email": "pvelez0@yahoo.com",
    "foto": "https://robohash.org/earumvoluptatemarchitecto.png?size=50x50&set=set1"
  }, {
    "id": 2,
    "first_name": "Lynelle",
    "last_name": "Mccaull",
    "email": "lmccaull1@pbs.org",
    "foto": "https://robohash.org/autsuntexpedita.jpg?size=50x50&set=set1"
  }, {
    "id": 3,
    "first_name": "Fiona",
    "last_name": "Philott",
    "email": "fphilott2@dedecms.com",
    "foto": "https://robohash.org/temporecumnostrum.png?size=50x50&set=set1"
  }, {
    "id": 4,
    "first_name": "Pearline",
    "last_name": "Gilhooley",
    "email": "pgilhooley3@wikimedia.org",
    "foto": "https://robohash.org/omnisoccaecatiqui.png?size=50x50&set=set1"
  }, {
    "id": 5,
    "first_name": "Manolo",
    "last_name": "Novkovic",
    "email": "mnovkovic4@blogs.com",
    "foto": "https://robohash.org/voluptateminciduntipsum.bmp?size=50x50&set=set1"
  }, {
    "id": 6,
    "first_name": "Joelie",
    "last_name": "Steiner",
    "email": "jsteiner5@narod.ru",
    "foto": "https://robohash.org/etmolestiasvero.png?size=50x50&set=set1"
  }, {
    "id": 7,
    "first_name": "Emogene",
    "last_name": "Consterdine",
    "email": "econsterdine6@godaddy.com",
    "foto": "https://robohash.org/doloremqueetdebitis.png?size=50x50&set=set1"
  }, {
    "id": 8,
    "first_name": "Pepito",
    "last_name": "MacDermand",
    "email": "pmacdermand7@fotki.com",
    "foto": "https://robohash.org/facerenecessitatibusaliquam.bmp?size=50x50&set=set1"
  }, {
    "id": 9,
    "first_name": "Maria",
    "last_name": "de Clerc",
    "email": "mdeclerc8@instagram.com",
    "foto": "https://robohash.org/adquiatque.bmp?size=50x50&set=set1"
  }, {
    "id": 10,
    "first_name": "Vite",
    "last_name": "Bunny",
    "email": "vbunny9@naver.com",
    "foto": "https://robohash.org/nihilalaboriosam.bmp?size=50x50&set=set1"
  }]

const Saludos =(props)=>(
    <div>
        <p>Bienvenido a este curso, <b>{props.nombre}</b></p>
    </div>
)

export default () => (
    <div>
        <h1>Hola San Francisco</h1>
        <p>hey bro</p>
        <Saludos nombre="Andrea"/>
        <Saludos nombre="Juliana"/>
        <Saludos nombre="Carlos"/>
        <ClassComponent nombre="Fisica" clase={matematicas}/>
    </div>
)