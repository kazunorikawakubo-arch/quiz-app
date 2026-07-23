const quizData = [
  // --- あ行 ---
  { kanji: "哀鴻遍野", reading: "あいこうへんや", meaning: "戦乱や災害などで流浪し、飢えや苦しみにあえぐ人々がいたるところに満ちているさま。", category: "あ行" },
  { kanji: "悪衣悪食", reading: "あくいあくしょく", meaning: "粗末な衣服と粗末な食べ物。また、そのような貧しい生活。", category: "あ行" },
  { kanji: "暗香浮動", reading: "あんこうふどう", meaning: "どこからともなく梅の花のよい香りが漂ってくるさま。", category: "あ行" },
  { kanji: "意気揚揚", reading: "いきようよう", meaning: "得意そうで誇らしげなさま。元気や満足感に満ちあふれているさま。", category: "あ行" },
  { kanji: "一言九鼎", reading: "いちげんきゅうてい", meaning: "一言の発言が九鼎（きわめて重い鼎）のように重みがあり、大きな影響力をもつこと。", category: "あ行" },
  { kanji: "雲心月性", reading: "うんしんげっせい", meaning: "雲や月のように、欲望に穢されず清らかでさっぱりとした心根のこと。", category: "あ行" },
  { kanji: "安車蒲輪", reading: "あんしゃほりん", meaning: "老人や賢者を優遇することのたとえ。蒲の葉で車輪を包んだ座り心地の良い車。", category: "あ行" },
  { kanji: "意気阻喪", reading: "いきそそう", meaning: "意気込みや元気が挫けて、すっかり失われてしまうこと。", category: "あ行" },
  { kanji: "一毫一厘", reading: "いちごういちりん", meaning: "ごくわずかな量や値のことのたとえ。", category: "あ行" },
  { kanji: "一闔一辟", reading: "いっこういっぺき", meaning: "ある時は閉じ、ある時は開くこと。万物の変化が絶え間ないこと。", category: "あ行" },

  // --- か行 ---
  { kanji: "佳人薄命", reading: "かじんはくめい", meaning: "美人にはとかく不幸な者や若死にする者が多いということ。", category: "か行" },
  { kanji: "夏炉冬扇", reading: "かろとうせん", meaning: "夏のいろりと冬のおうぎ。役に立たない無用なもののたとえ。", category: "か行" },
  { kanji: "巧言令色", reading: "こうげんれいしょく", meaning: "言葉を飾り、顔つきを繕って、人に気に入られようとすること。", category: "か行" },
  { kanji: "孤立無援", reading: "こりつむえん", meaning: "たった一人取り残されて、助けてくれる者が誰もいないこと。", category: "か行" },
  { kanji: "換骨奪胎", reading: "かんこつだったい", meaning: "古人の着想や表現を取り入れ、新しい作品を作り出すこと。", category: "か行" },
  { kanji: "刮目相待", reading: "かつもくそうたい", meaning: "目をこすって目を見張り、相手の進歩や成長を注意して見守ること。", category: "か行" },
  { kanji: "含憤蓄怨", reading: "がんふんちくえん", meaning: "怒りや怨みを心の中に溜め込むこと。", category: "か行" },
  { kanji: "曲学阿世", reading: "きょくがくあせい", meaning: "真理を曲げて、世間の人々や権力者に気に入られようとすること。", category: "きょくがくあせい" },
  { kanji: "錦衣玉食", reading: "きんいぎょくしょく", meaning: "贅沢な衣服を着て、おいしいごちそうを食べること。裕福な生活。", category: "か行" },
  { kanji: "矯角殺牛", reading: "きょうかくさつぎゅう", meaning: "欠点を直そうとして、かえって全体をだめにすることのたとえ。", category: "か行" },

  // --- さ行 ---
  { kanji: "三尺童子", reading: "さんしゃくどうじ", meaning: "背丈が三尺ほどの幼い子供。転じて、知識や経験の浅い者のたとえ。", category: "さ行" },
  { kanji: "紫気東来", reading: "しきとうらい", meaning: "めでたい気（めでたい兆し）が東から漂ってくること。吉兆のたとえ。", category: "さ行" },
  { kanji: "山紫水明", reading: "さんしすいめい", meaning: "山や川の風景が日光に映えて、美しく清らかなさま。", category: "さ行" },
  { kanji: "質実剛健", reading: "しつじつごうけん", meaning: "飾り気がなく誠実で、心身ともに強くたくましいさま。", category: "さ行" },
  { kanji: "肆行暴戻", reading: "しこうぼうれい", meaning: "勝手気ままにふるまい、荒々しく乱暴なことをすること。", category: "さ行" },
  { kanji: "徙木之信", reading: "しぼくのしん", meaning: "約束を必ず守り、実行して信頼を得ることのたとえ。", category: "さ行" },
  { kanji: "尸位素餐", reading: "しいそさん", meaning: "職責を果たさず、無為に給料や地位を得ていること。", category: "さ行" },
  { kanji: "洒脱無礙", reading: "しゃだつむげ", meaning: "俗っぽさがなく、こだわりなく伸び伸びとしているさま。", category: "さ行" },
  { kanji: "尺短寸長", reading: "せきたんすんちょう", meaning: "人や物に長所と短所の両方があることのたとえ。", category: "さ行" },
  { kanji: "削足適履", reading: "さくそくてきり", meaning: "無理に物事を適合させようとして、かえって本末転倒になること。", category: "さ行" },

  // --- た行 ---
  { kanji: "泰山北斗", reading: "たいざんほくと", meaning: "学問・芸術など、ある分野で第一人者として仰ぎ尊ばれる人のたとえ。", category: "た行" },
  { kanji: "大言壮語", reading: "たいげんそうご", meaning: "実力に見合わない大きなことを言うこと。また、その言葉。", category: "た行" },
  { kanji: "朝三暮四", reading: "ちょうさんぼし", meaning: "目先の違いにこだわり、結果が同じであることに気づかないこと。", category: "た行" },
  { kanji: "多岐亡羊", reading: "たきぼうよう", meaning: "方針が多すぎて、どれを選べばよいか迷ってしまうことのたとえ。", category: "た行" },
  { kanji: "断鶴続鴨", reading: "だんかくぞくおう", meaning: "自然の摂理に反して余計な手を加え、かえって害を与えることのたとえ。", category: "た行" },

  // --- な行 ---
  { kanji: "南船北馬", reading: "なんせんほくば", meaning: "各地を休む間もなく忙しく旅回ることのたとえ。", category: "な行" },
  { kanji: "内疎外親", reading: "ないそがいしん", meaning: "心の中では嫌っているが、表面上は親しく付き合うこと。", category: "な行" },
  { kanji: "難兄難弟", reading: "なんけいなんてい", meaning: "二人の能力や人物が甲乙つけがたくすぐれていること。また、ともに愚かなこと。", category: "な行" },

  // --- は行 ---
  { kanji: "百八煩悩", reading: "ひゃくはちぼんのう", meaning: "人間にあるすべての苦しみや迷いの原因となる悩みのこと。", category: "は行" },
  { kanji: "波瀾万丈", reading: "はらんばんじょう", meaning: "劇的な変化や事件が多く、変化に富んでいるさま。", category: "は行" },
  { kanji: "蓬頭垢面", reading: "ほうとうこうめん", meaning: "髪はボサボサで顔は汚れ、身なりを全く整えていないさま。", category: "は行" },
  { kanji: "白砂青松", reading: "はくしゃせいしょう", meaning: "白い砂浜と緑の松林。海岸の美しい景色のたとえ。", category: "は行" },
  { kanji: "暴虎馮河", reading: "ぼうこひょうが", meaning: "思慮分別もなく、無謀に命がけの行動をとることのたとえ。", category: "は行" },

  // --- ま行 ---
  { kanji: "明鏡止水", reading: "めいきょうしすい", meaning: "邪念がなく、静かに澄み切った心境のたとえ。", category: "ま行" },
  { kanji: "無病息災", reading: "むびょうそくさい", meaning: "病気をせず、健康で元気なこと。", category: "ま行" },
  { kanji: "慢蔵誨盗", reading: "まんぞうかいとう", meaning: "財産を無防備に保管しておくと、盗賊を誘い込む原因になるということ。", category: "ま行" },

  // --- や行 ---
  { kanji: "柳緑花紅", reading: "りゅうりょくかこう", meaning: "自然のままで美しい景色のこと。また、人の手が加わっていない美しい様。", category: "や行" },
  { kanji: "勇往邁進", reading: "ゆうおうまいしん", meaning: "自分の目指す方へ向かって、恐れることなく突き進むこと。", category: "や行" },
  { kanji: "羊頭狗肉", reading: "ようとうくにく", meaning: "見かけや看板だけ立派で、内容や品質が伴わないこと。", category: "や行" },

  // --- ら行 ---
  { kanji: "落花流水", reading: "らっかりゅうすい", meaning: "季節の移り変わり。または男女の情意が互いに通じ合うことのたとえ。", category: "ら行" },
  { kanji: "龍跳虎臥", reading: "りゅうちょうこが", meaning: "書道の筆づかいが伸びやかで力強いさまのたとえ。", category: "ら行" },
  { kanji: "藍田生玉", reading: "らんでんせいぎょく", meaning: "すぐれた父親から、すぐれた子が生まれることのたとえ。", category: "ら行" },

  // --- わ行 ---
  { kanji: "和光同塵", reading: "わこうどうじん", meaning: "自分の才能や徳を隠して、世間に目立たないように生活すること。", category: "わ行" }
];