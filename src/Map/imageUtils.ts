// normalImages
import sementsstrompur from './images/sementsstrompur.png';
import akrafjall from './images/akrafjall.png';
import gudlaug from './images/gudlaug.png';
import langisandur from './images/langisandur.png';
import breidin from './images/breidin.png';
import gardar from './images/byggdasafn.png';
// artwalk 1
import hringras from './images/hringras.png';
import thorgeir from './images/thorgeir.png';
import akratorg from './images/akratorg.png';
import hnottur from './images/hnottur.png';
import bowie from './images/bowie.png';
import stulka from './images/stulka.png';
import alfaborgir from './images/alfaborgir.png';
import vinaminni from './images/vinaminni.png';
import skvisurnar from './images/skvisurnar.png';
import hb from './images/hb.png';
import siberia from './images/siberia.png';
import hafmeyja from './images/hafmeyja.png';

// artwalk 2
import grasleppukarlar from './images/grasleppukarlar.png';
import jardbundinn from './images/jardbundinn.png';
import motthroi from './images/motthroi.png';
import pyramidisk from './images/pyramidisk.png';
import skutlan from './images/skutlan.png';
import talbeita from './images/talbeita.png';
import elinarsaeti from './images/elinarsaeti.png';

// artwalk 3
import bjartsynn from './images/bjartsynn.png';

// artwalk 4
import irski from './images/irski.png';
import jonasm from './images/jonasm.png';
import gudmundurj from './images/gudmundurj.png';

interface Dic {
  [key: string]: string;
}

const smallImageMapper: Dic = {
  irski: irski,
  jonasm: jonasm,
  gudmundurj: gudmundurj,
  bjartsynn: bjartsynn,
  grasleppukarlar: grasleppukarlar,
  jardbundinn: jardbundinn,
  motthroi: motthroi,
  pyramidisk: pyramidisk,
  skutlan: skutlan,
  talbeita: talbeita,
  elinarsaeti: elinarsaeti,
  hringras: hringras,
  thorgeir: thorgeir,
  akratorg: akratorg,
  hnottur: hnottur,
  bowie: bowie,
  stulka: stulka,
  alfaborgir: alfaborgir,
  vinaminni: vinaminni,
  skvisurnar: skvisurnar,
  hb: hb,
  siberia: siberia,
  hafmeyja: hafmeyja,
  sementsstrompur: sementsstrompur,
  gudlaug: gudlaug,
  akrafjall: akrafjall,
  langisandur: langisandur,
  breidin: breidin,
  gardar: gardar,
};

export function getCircleImage(pathID: string) {
  return smallImageMapper[pathID] || null;
}

export function getLargeImage(pathID: string) {
  return `/akranes-2.0/large/${pathID}.png`;
}
