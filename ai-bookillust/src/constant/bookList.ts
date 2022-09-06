export interface bookInterface {
  title: string;
  titleId: string;
  auther: string;
  illustrator: 'DALL-E2' | 'StableDiffusion';
  headerPath: string;
};

export const booklist: Array<bookInterface> = [
  {
    title: '走れメロス',
    titleId: 'merosu',
    auther: '太宰 治',
    illustrator: 'StableDiffusion',
    headerPath: '0000000042_0000000000.jpg',
  },
  {
    title: '羅生門',
    titleId: 'rashomon',
    auther: '芥川 竜之介',
    illustrator: 'StableDiffusion',
    headerPath: '0000000042_0000000000.jpg',
  },
  {
    title: '蜘蛛の糸',
    titleId: 'kumo',
    auther: '芥川 竜之介',
    illustrator: 'StableDiffusion',
    headerPath: '0000000042_0000000000.jpg',
  },
  {
    title: '注文の多い料理店',
    titleId: 'chumon',
    auther: '宮沢 賢治',
    illustrator: 'StableDiffusion',
    headerPath: '0000000042_0000000000.jpg',
  },
  {
    title: 'ごん狐',
    titleId: 'gon',
    auther: '新美 南吉',
    illustrator: 'StableDiffusion',
    headerPath: '0000000042_0000000000.jpg',
  },
  {
    title: '雨ニモマケズ',
    titleId: 'ame',
    auther: '宮沢 賢治',
    illustrator: 'StableDiffusion',
    headerPath: '0000000042_0000000000.jpg',
  },
  {
    title: '檸檬',
    titleId: 'remon',
    auther: '梶井 基次郎',
    illustrator: 'StableDiffusion',
    headerPath: '0000000042_0000000000.jpg',
  },
  {
    title: '怪人二十面相',
    titleId: 'kaijin',
    auther: '江戸川 乱歩',
    illustrator: 'StableDiffusion',
    headerPath: '0000000042_0000000000.jpg',
  },
  {
    title: '怪人二十面相',
    titleId: 'kaijin',
    auther: '江戸川 乱歩',
    illustrator: 'DALL-E2',
    headerPath: '0000000042_0000000000.jpg',
  },
];
