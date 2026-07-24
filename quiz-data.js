const quizData = [
  // --- 四字熟語 ---
  {
    genre: "四字熟語",
    category: "あ行",
    kanji: "暗雲低迷",
    reading: "あんうんていめい",
    meaning: "不穏な情勢や立ち込める暗い雲が垂れ込めている様子。"
  },
  {
    genre: "四字熟語",
    category: "か行",
    kanji: "孤立無援",
    reading: "こりつむえん",
    meaning: "助けてくれる人もなく、一人で取り残されている様子。"
  },

  // --- 動詞・形容詞 ---
  {
    genre: "動詞・形容詞",
    category: "あ行",
    kanji: "蠢く",
    reading: "うごめく",
    meaning: "虫などがもぞもぞと動くさま。"
  },
  {
    genre: "動詞・形容詞",
    category: "か行",
    kanji: "軋む",
    reading: "きしむ",
    meaning: "固い物どうしがこすれ合って音を立てる。"
  },

  // --- 故事・成句 📜 ---
  {
    genre: "故事・成句",
    category: "か行",
    kanji: "膾炙",
    reading: "かいしゃ",
    meaning: "人々の評判になって、広く知れ渡りもてはやされること。"
  },
  {
    genre: "故事・成句",
    category: "さ行",
    kanji: "杜撰",
    reading: "ずさん",
    meaning: "著作などに間違いが多く雑なこと。また、投げやりでいいかげんなさま。"
  },
  {
    genre: "故事・成句",
    category: "た行",
    kanji: "蛇足",
    reading: "だそく",
    meaning: "付け加える必要のない余計なもの。"
  },
  {
    genre: "故事・成句",
    category: "は行",
    kanji: "背水之陣",
    reading: "はいすいのじん",
    meaning: "絶体絶命の立場で、一歩も引けない覚悟で事に当たること。"
  },

  // --- 故事・成句（追加分） 📜 ---
  {
    genre: "故事・成句",
    category: "か行",
    kanji: "蛍雪之功",
    reading: "けいせつのこう",
    meaning: "苦労して学問に励むこと。"
  },
  {
    genre: "故事・成句",
    category: "さ行",
    kanji: "推敲",
    reading: "すいこう",
    meaning: "詩や文章の字句を何度も練り直すこと。"
  },
  {
    genre: "故事・成句",
    category: "か行",
    kanji: "完璧",
    reading: "かんぺき",
    meaning: "欠点がまったくなく、完全無欠なさま。"
  },
  {
    genre: "故事・成句",
    category: "さ行",
    kanji: "塞翁失馬",
    reading: "さいおうがうま",
    meaning: "人生の禍福や吉凶は予測しがたいことの例え。"
  },
  {
    genre: "故事・成句",
    category: "や行",
    kanji: "羊頭狗肉",
    reading: "ようとうくにく",
    meaning: "見かけや看板は立派だが、内容が伴わないこと。"
  },
  {
    genre: "故事・成句",
    category: "か行",
    kanji: "杞憂",
    reading: "きゆう",
    meaning: "無用な心配や取り越し苦労をすること。"
  },
  {
    genre: "故事・成句",
    category: "た行",
    kanji: "多々益々弁ず",
    reading: "たたますますべんず",
    meaning: "数が多ければ多いほど都合がよく、うまく処理できること。"
  },
  {
    genre: "故事・成句",
    category: "た行",
    kanji: "登竜門",
    reading: "とうりゅうもん",
    meaning: "立身出世のための厳しい関門・難関のこと。"
  },
  {
    genre: "故事・成句",
    category: "は行",
    kanji: "破天荒",
    reading: "はてんこう",
    meaning: "誰も成し得なかった前人未到の偉業を成し遂げること。"
  },
  {
    genre: "故事・成句",
    category: "は行",
    kanji: "覆水難返",
    reading: "ふくすいかえりがたし",
    meaning: "一度起きてしまったことは、決して元には戻らないこと。"
  },
  {
    genre: "故事・成句",
    category: "ま行",
    kanji: "矛盾",
    reading: "むじゅん",
    meaning: "つじつまが合わないこと。"
  },
  {
    genre: "故事・成句",
    category: "は行",
    kanji: "背水陣",
    reading: "はいすいのじん",
    meaning: "一歩も引けない絶体絶命の立場で全力を尽くすこと。"
  },
  {
    genre: "故事・成句",
    category: "か行",
    kanji: "蛍窓",
    reading: "けいそう",
    meaning: "苦学すること。また、そのための部屋や窓辺。"
  },
  {
    genre: "故事・成句",
    category: "ら行",
    kanji: "洛陽紙価高",
    reading: "らくようのしかをたかからしむ",
    meaning: "著書が評判になり、ベストセラーになることの例え。"
  },
  {
    genre: "故事・成句",
    category: "か行",
    kanji: "呉越同舟",
    reading: "ごえつどうしゅう",
    meaning: "仲の悪い者同士が同じ場所に居合わせたり協力したりすること。"
  }
];