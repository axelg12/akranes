// artwalk 4
import irski from './images/irski.png';
import jonasm from './images/jonasm.png';
import gudmundurj from './images/gudmundurj.png';

//artwalk 3
import bjartsynn from './images/bjartsynn.png';

//artwalk 2
import grasleppukarlar from './images/grasleppukarlar.png';
import jardbundinn from './images/jardbundinn.png';
import motthroi from './images/motthroi.png';
import pyramidisk from './images/pyramidisk.png';
import skutlan from './images/skutlan.png';
import talbeita from './images/talbeita.png';
import elinarsaeti from './images/elinarsaeti.png';

//artwalk 1
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
};

export function getCircleImage(pathID: string) {
  return smallImageMapper[pathID] || null;
}
