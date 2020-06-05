import gudlaug from '../images/gudlaug.jpg';
import breidin from '../images/breidin.jpg';
import elinarsaeti from '../images/elinarsaeti.jpg';
import byggdasafn from '../images/byggdasafn.jpg';
import akrafjall from '../images/akrafjall.jpg';
import langisandur from '../images/langisandur.jpg';

const markers = [
  {
    id: 'viti',
    position: { lat: 64.307169, lng: -22.096173 },
    info: {
      title: 'Breiðin',
      desc: `Breiðin is the southernmost part of Akranes peninsula and the site of one of the oldest concrete lighthouses in Iceland. From Breiðin there is a beautiful view of the entire Faxaflói bay, especially if the viewer ascends all the way up to the Akranes lighthouse, as from there it is possible to see everything between the peninsula Reykjanesskagi and the glacier Snæfellsjökull when visibility is good.`,
      cardImg: breidin,
      more: 'https://www.skagalif.is/is/utivist/breidin',
    },
    img: 'https://i.ibb.co/y5PNKZV/breidin.png',
  },
  {
    id: 'elin',
    position: { lat: 64.331978, lng: -22.060369 },
    info: {
      title: 'Elínarsæti',
      desc: `The cape Elínarhöfði gets its name from a mythical folk tale and people who walk along the bay Kalmansvík are in for an unforgettable experience. According to the folk tale, Elínarhöfði was named for Elín, the sister of Sæmundur the Learned. It is related in the tale that Elín was able to communicate with her sister Halla by taking a seat by the cape and waving her handkerchief to Halla, who would be sitting on the cliff named Höllubjarg by Straumfjörður.`,
      cardImg: elinarsaeti,
    },
    img: 'https://i.ibb.co/sy1CptC/Elin.png',
  },
  {
    id: 'safn',
    position: { lat: 64.319839, lng: -22.044944 },
    info: {
      title: 'The Akranes Folk Museum',
      desc:
        'The Akranes Folk Museum is the best place in Akranes to get familiar with history. The museum was established and opened in 1959 and is situated on the ancient manor of Gardar. The main exhibition highlights the history of fishing, farming, housekeeping and social conditions in and around Akranes in past times. Among the items on display is a rowing boat with full rigging from 1874, a selection of other items connected with seafaring and fishing, tools and equipment of doctors and midwives, old cars and much more. The latest addition to the museum is a lively forge where blacksmiths practice their skills. The forge is sometimes in operation for guests.',
      cardImg: byggdasafn,
    },
    img: 'https://i.ibb.co/qJT2p03/byggdasafn.png',
  },
  {
    id: 'gudlaug',
    position: { lat: 64.317826, lng: -22.064799 },
    info: {
      title: 'Guðlaug Natural Pool',
      desc:
        'At Langasandur beach you can bathe in the ocean and enjoy the view in Guðlaug, which is a hot pool located in the rockgarden of Langasandur.',
      cardImg: gudlaug,
    },
    img: 'https://i.ibb.co/SVJGzhK/gudlaug.png',
  },
  {
    id: 'akrafjall',
    position: { lat: 64.327371, lng: -21.983245 },
    info: {
      title: 'Akrafjall',
      desc:
        'Mount Akrafjall is a lone and eye-catching mountain that rises between the coastlines of Hvalfjörður Fjord and Leirárvogur Bay. The mountain covers most of its hosting peninsula’s landmass, as it rises close to the coastlines on each side. Its highest summit is Geirmundartindur with a peak of 643 metres.',
      cardImg: akrafjall,
    },
    img: 'https://i.ibb.co/0cLK0Dr/akrafjall.png',
  },
  {
    id: 'langisandur',
    position: { lat: 64.315472, lng: -22.057743 },
    info: {
      title: 'Langisandur',
      desc:
        'Langisandur is a sandy beach and one of the most popular outdoor areas of Akranes. Langisandur is one of three Blue Flag beaches in Iceland. Guests are welcome to join the local Sea Swimming Club at Langisandur Beach three times a week.',
      cardImg: langisandur,
    },
    img: 'https://i.ibb.co/s57brf9/langisandur.png',
  },
];
export default markers;
