const starterRecipes = [
  {
    id: "tomato-brisket",
    title: "番茄牛腩饭",
    description: "酸甜番茄和牛腩慢慢炖到浓稠，浇在米饭上很踏实。",
    time: "90 分钟",
    difficulty: "中等",
    category: ["protein"],
    ingredients: ["牛腩", "番茄", "洋葱", "姜", "生抽", "米饭"],
    steps: [
      "牛腩冷水下锅焯去血沫，捞出冲净。",
      "洋葱和番茄炒软，加入牛腩、姜片、生抽和热水。",
      "小火炖 70 分钟，开盖收汁，浇在热米饭上。"
    ],
    colors: ["#f7d7c9", "#c94838"]
  },
  {
    id: "egg-shrimp",
    title: "虾仁滑蛋",
    description: "蛋液嫩、虾仁弹，十几分钟就能端上桌。",
    time: "15 分钟",
    difficulty: "简单",
    category: ["quick", "protein"],
    ingredients: ["鸡蛋", "虾仁", "牛奶", "葱", "盐", "白胡椒"],
    steps: [
      "虾仁加盐和白胡椒抓匀，鸡蛋加少量牛奶打散。",
      "热锅少油先滑熟虾仁，倒入蛋液。",
      "用铲子轻推到蛋液刚凝固，撒葱花出锅。"
    ],
    colors: ["#fbefd1", "#e4b84b"]
  },
  {
    id: "broccoli-chicken",
    title: "西兰花鸡胸碗",
    description: "清爽但不寡淡，适合工作日午餐。",
    time: "25 分钟",
    difficulty: "简单",
    category: ["quick", "protein", "vegetable"],
    ingredients: ["鸡胸肉", "西兰花", "蒜", "黑胡椒", "橄榄油", "藜麦"],
    steps: [
      "鸡胸肉切片，用盐、黑胡椒和橄榄油腌 10 分钟。",
      "西兰花焯水，蒜末炒香后加入鸡胸肉煎熟。",
      "把藜麦、西兰花和鸡胸肉装碗，淋少量酱汁。"
    ],
    colors: ["#dceee0", "#4f9a62"]
  },
  {
    id: "miso-salmon",
    title: "味噌烤三文鱼",
    description: "甜咸味噌酱烤出焦香边缘，搭配青菜刚好。",
    time: "30 分钟",
    difficulty: "中等",
    category: ["protein"],
    ingredients: ["三文鱼", "味噌", "蜂蜜", "酱油", "柠檬", "小青菜"],
    steps: [
      "味噌、蜂蜜和酱油调成酱，抹在三文鱼表面。",
      "静置 15 分钟后放入烤箱，200 度烤 12 到 15 分钟。",
      "挤柠檬汁，搭配烫熟的小青菜。"
    ],
    colors: ["#fde0cc", "#e5794f"]
  },
  {
    id: "mushroom-noodle",
    title: "香菇青菜汤面",
    description: "汤底清亮，有香菇的鲜味，晚上吃很舒服。",
    time: "20 分钟",
    difficulty: "简单",
    category: ["quick", "vegetable"],
    ingredients: ["面条", "香菇", "小青菜", "鸡蛋", "生抽", "芝麻油"],
    steps: [
      "香菇切片煎出香味，加热水和生抽煮开。",
      "下面条，快熟时加入小青菜。",
      "卧一个鸡蛋，出锅前滴芝麻油。"
    ],
    colors: ["#e9e0d2", "#8a6b4f"]
  },
  {
    id: "tofu-veg",
    title: "家常豆腐煲",
    description: "豆腐吸满汤汁，蔬菜也有存在感。",
    time: "35 分钟",
    difficulty: "中等",
    category: ["vegetable", "protein"],
    ingredients: ["豆腐", "胡萝卜", "木耳", "青椒", "蒜", "蚝油"],
    steps: [
      "豆腐切块煎到两面金黄。",
      "蒜末炒香，加入胡萝卜、木耳和青椒翻炒。",
      "放入豆腐和调味汁，小火焖 8 分钟。"
    ],
    colors: ["#f6ead8", "#d99b45"]
  },
  {
    id: "cucumber-chicken",
    title: "青瓜鸡丝凉面",
    description: "清爽开胃，酱汁拌开后有芝麻香，适合没胃口的时候。",
    time: "22 分钟",
    difficulty: "简单",
    category: ["quick", "protein", "vegetable"],
    ingredients: ["鸡胸肉", "面条", "黄瓜", "芝麻酱", "生抽", "醋"],
    steps: [
      "鸡胸肉煮熟撕成丝，黄瓜切丝。",
      "芝麻酱、生抽、醋和少量温水调成顺滑酱汁。",
      "面条煮熟过凉水，加入鸡丝、黄瓜和酱汁拌匀。"
    ],
    colors: ["#dff1e8", "#3f8f78"]
  },
  {
    id: "pepper-beef",
    title: "黑椒牛肉粒",
    description: "牛肉外焦里嫩，黑椒味足，配米饭很下饭。",
    time: "28 分钟",
    difficulty: "中等",
    category: ["quick", "protein"],
    ingredients: ["牛肉", "彩椒", "洋葱", "黑胡椒", "蚝油", "蒜"],
    steps: [
      "牛肉切粒，用黑胡椒、蚝油和少量淀粉腌 15 分钟。",
      "热锅把牛肉煎到表面上色，盛出备用。",
      "炒香洋葱和彩椒，倒回牛肉快速翻匀。"
    ],
    colors: ["#e8ddd2", "#665044"]
  },
  {
    id: "pumpkin-risotto",
    title: "南瓜鸡肉焖饭",
    description: "米饭吸收南瓜甜味和鸡肉汤汁，一锅就能解决晚饭。",
    time: "45 分钟",
    difficulty: "简单",
    category: ["protein", "vegetable"],
    ingredients: ["鸡腿肉", "南瓜", "大米", "香菇", "生抽", "葱"],
    steps: [
      "鸡腿肉切块煎香，加入香菇和南瓜翻炒。",
      "倒入淘好的大米、生抽和适量清水。",
      "按煮饭程序焖熟，出锅撒葱花拌松。"
    ],
    colors: ["#fae8c8", "#d08a2e"]
  },
  {
    id: "lotus-pork-soup",
    title: "莲藕排骨汤",
    description: "汤清甜，莲藕粉糯，适合周末慢慢炖。",
    time: "100 分钟",
    difficulty: "中等",
    category: ["protein", "vegetable"],
    ingredients: ["排骨", "莲藕", "姜", "枸杞", "盐", "葱"],
    steps: [
      "排骨冷水下锅焯水，洗净浮沫。",
      "莲藕切块，和排骨、姜片一起加水炖煮。",
      "炖到排骨软烂后加盐调味，撒枸杞和葱花。"
    ],
    colors: ["#efe5dc", "#b88d72"]
  },
  {
    id: "garlic-spinach-egg",
    title: "蒜香菠菜炒蛋",
    description: "很家常的一盘菜，颜色漂亮，也能快速补一份蔬菜。",
    time: "12 分钟",
    difficulty: "简单",
    category: ["quick", "protein", "vegetable"],
    ingredients: ["菠菜", "鸡蛋", "蒜", "盐", "食用油"],
    steps: [
      "菠菜洗净切段，鸡蛋打散。",
      "先把鸡蛋炒到刚凝固，盛出备用。",
      "蒜末炒香后加入菠菜，回锅鸡蛋，加盐翻匀。"
    ],
    colors: ["#e2efd8", "#5e9b4a"]
  }
];

const extraRecipes = [
  ["mapo-tofu", "麻婆豆腐", "麻辣鲜香，豆腐嫩滑，拌饭很稳。", "25 分钟", "中等", ["quick", "protein"], ["豆腐", "牛肉末", "豆瓣酱", "花椒粉", "蒜", "葱"], "豆瓣酱炒出红油，加入肉末和豆腐轻轻烧入味。", ["#f5d7cf", "#b94b38"]],
  ["kung-pao-chicken", "宫保鸡丁", "酸甜微辣，花生脆香，家常下饭菜。", "25 分钟", "中等", ["quick", "protein"], ["鸡腿肉", "花生", "干辣椒", "黄瓜", "生抽", "醋"], "鸡丁滑炒后回锅，倒入调好的宫保汁快速收亮。", ["#f7dfc7", "#b76c3a"]],
  ["braised-pork", "红烧肉", "肥瘦相间，酱香浓郁，适合周末慢炖。", "80 分钟", "中等", ["protein"], ["五花肉", "冰糖", "生抽", "老抽", "姜", "料酒"], "五花肉煸出油脂，炒糖色后加水小火焖到软糯。", ["#ead8cc", "#8b4936"]],
  ["sweet-sour-ribs", "糖醋排骨", "酸甜酱汁裹住排骨，冷热都好吃。", "55 分钟", "中等", ["protein"], ["排骨", "冰糖", "醋", "生抽", "姜", "芝麻"], "排骨煎香后加糖醋汁焖煮，最后大火收汁。", ["#f4d8c8", "#b84d3b"]],
  ["fish-fragrant-eggplant", "鱼香茄子", "没有鱼也很香，茄子软糯又下饭。", "30 分钟", "中等", ["vegetable"], ["茄子", "肉末", "泡椒", "蒜", "生抽", "醋"], "茄子煎软，和肉末、鱼香汁一起烧到入味。", ["#eadcf0", "#7f5792"]],
  ["shredded-potato", "酸辣土豆丝", "清脆酸辣，十分钟就能炒一盘。", "12 分钟", "简单", ["quick", "vegetable"], ["土豆", "干辣椒", "醋", "蒜", "盐"], "土豆丝冲去淀粉，大火快炒并沿锅边淋醋。", ["#f3edcf", "#d4ad42"]],
  ["tomato-egg", "番茄炒蛋", "酸甜软嫩，厨房新手也容易成功。", "15 分钟", "简单", ["quick", "protein", "vegetable"], ["番茄", "鸡蛋", "葱", "盐", "糖"], "先炒鸡蛋，再炒出番茄汁，回锅合炒。", ["#f9d6c9", "#d84c3d"]],
  ["twice-cooked-pork", "回锅肉", "蒜苗香气足，肉片焦香微辣。", "35 分钟", "中等", ["protein"], ["五花肉", "蒜苗", "豆瓣酱", "豆豉", "姜"], "五花肉煮后切片，煸出油再和蒜苗酱料同炒。", ["#ead1c0", "#9e5235"]],
  ["ants-tree", "蚂蚁上树", "粉丝吸满肉末汤汁，咸香微辣。", "25 分钟", "简单", ["quick", "protein"], ["粉丝", "猪肉末", "豆瓣酱", "葱", "生抽"], "肉末炒香后加汤汁，放入泡软粉丝煨到收汁。", ["#eadfcf", "#a76643"]],
  ["steamed-egg", "肉末蒸蛋", "蛋羹细滑，肉末咸香，很适合配米饭。", "22 分钟", "简单", ["quick", "protein"], ["鸡蛋", "猪肉末", "温水", "生抽", "葱"], "蛋液加温水过滤后蒸熟，铺上炒好的肉末。", ["#fbedd0", "#dfa94a"]],
  ["scallion-oil-noodle", "葱油拌面", "葱香浓，酱汁亮，简单但很解馋。", "18 分钟", "简单", ["quick"], ["面条", "小葱", "生抽", "老抽", "糖", "食用油"], "小火炸出葱油，和酱汁拌入煮好的面条。", ["#f0e4c8", "#476f3d"]],
  ["beef-noodle", "红烧牛肉面", "汤头浓，牛肉软，吃一碗很满足。", "95 分钟", "进阶", ["protein"], ["牛腩", "面条", "番茄", "豆瓣酱", "八角", "青菜"], "牛腩炖出浓汤，下面条和青菜后浇上牛肉。", ["#ead6ca", "#9b4635"]],
  ["dandan-noodle", "担担面", "芝麻酱香和辣油融合，肉臊是灵魂。", "25 分钟", "中等", ["quick", "protein"], ["面条", "猪肉末", "芝麻酱", "辣椒油", "花生", "青菜"], "炒香肉臊，调好碗底，面条煮熟后拌匀。", ["#f0d9bd", "#b6603f"]],
  ["yangzhou-fried-rice", "扬州炒饭", "米粒分明，配料丰富，适合处理剩饭。", "18 分钟", "简单", ["quick", "protein", "vegetable"], ["米饭", "鸡蛋", "虾仁", "火腿", "胡萝卜", "豌豆"], "先炒蛋和配料，再加入米饭大火炒散。", ["#f6e6c4", "#d9a841"]],
  ["claypot-rice", "腊味煲仔饭", "锅巴焦香，腊味油脂渗进米饭。", "45 分钟", "中等", ["protein"], ["大米", "腊肠", "腊肉", "青菜", "生抽", "姜丝"], "米饭煲到半熟铺腊味，出锅淋酱油拌开。", ["#efe0cf", "#a45c39"]],
  ["soy-sauce-chicken", "豉油鸡", "鸡肉嫩滑，酱油香气浓而不腻。", "55 分钟", "中等", ["protein"], ["鸡腿", "生抽", "老抽", "冰糖", "姜", "葱"], "酱汁煮开后放鸡腿小火浸煮，反复淋汁上色。", ["#e7d1bf", "#8d4a35"]],
  ["three-cup-chicken", "三杯鸡", "九层塔香气明显，酱汁浓亮。", "35 分钟", "中等", ["protein"], ["鸡腿肉", "米酒", "生抽", "芝麻油", "九层塔", "姜"], "姜片煸香后炒鸡肉，加入三杯调味焖到收汁。", ["#ead8c2", "#8f5638"]],
  ["coke-wings", "可乐鸡翅", "甜咸适中，鸡翅颜色漂亮。", "30 分钟", "简单", ["quick", "protein"], ["鸡翅", "可乐", "生抽", "姜", "料酒"], "鸡翅煎香后倒可乐和生抽，小火煮到浓稠。", ["#ead2c8", "#944638"]],
  ["braised-chicken-potato", "土豆烧鸡", "鸡肉香，土豆绵，汤汁很适合拌饭。", "45 分钟", "中等", ["protein", "vegetable"], ["鸡腿肉", "土豆", "胡萝卜", "生抽", "姜", "葱"], "鸡肉炒香后加入土豆和胡萝卜，焖到软烂。", ["#f0dfc4", "#bd7c38"]],
  ["spicy-chicken", "辣子鸡", "外酥里嫩，干香麻辣，适合重口味。", "45 分钟", "进阶", ["protein"], ["鸡腿肉", "干辣椒", "花椒", "蒜", "姜", "芝麻"], "鸡块炸到金黄，再和辣椒花椒快速翻炒。", ["#efd2c7", "#b23b32"]],
  ["cumin-lamb", "孜然羊肉", "孜然香气直接，羊肉嫩而不膻。", "25 分钟", "中等", ["quick", "protein"], ["羊肉", "洋葱", "孜然粉", "辣椒粉", "香菜"], "羊肉大火快炒，加入洋葱和孜然辣椒翻匀。", ["#ead8c5", "#9a5e38"]],
  ["lamb-carrot-stew", "胡萝卜炖羊肉", "汤味温和，胡萝卜甜味能压住膻味。", "90 分钟", "中等", ["protein", "vegetable"], ["羊肉", "胡萝卜", "姜", "葱", "料酒", "盐"], "羊肉焯水后和胡萝卜小火炖到软烂。", ["#f0ddc7", "#c47638"]],
  ["steamed-fish", "清蒸鲈鱼", "鱼肉细嫩，葱姜和蒸鱼豉油提鲜。", "20 分钟", "简单", ["quick", "protein"], ["鲈鱼", "葱", "姜", "蒸鱼豉油", "食用油"], "鱼身铺葱姜蒸熟，倒掉汤汁后淋热油和豉油。", ["#e0ebef", "#50849a"]],
  ["sour-soup-fish", "酸汤鱼片", "酸辣开胃，鱼片嫩滑，汤也好喝。", "35 分钟", "中等", ["protein", "vegetable"], ["鱼片", "酸菜", "金针菇", "泡椒", "姜", "蒜"], "酸菜炒香加水煮开，鱼片最后下锅烫熟。", ["#eee4c8", "#b5a23d"]],
  ["garlic-shrimp", "蒜蓉粉丝虾", "蒜香浓，粉丝吸汁，宴客也体面。", "25 分钟", "中等", ["quick", "protein"], ["虾", "粉丝", "蒜", "生抽", "葱", "小米椒"], "粉丝垫底摆虾，铺蒜蓉酱蒸熟。", ["#f4d7c8", "#d06b4a"]],
  ["salt-pepper-shrimp", "椒盐虾", "外壳酥香，椒盐味很上头。", "25 分钟", "中等", ["quick", "protein"], ["虾", "椒盐", "蒜", "青椒", "淀粉"], "虾拍粉煎炸后，和蒜末椒盐快速翻炒。", ["#f0ddc8", "#d08845"]],
  ["clam-egg", "蛤蜊蒸蛋", "海鲜鲜味进到蛋羹里，嫩滑清爽。", "25 分钟", "简单", ["quick", "protein"], ["蛤蜊", "鸡蛋", "温水", "姜", "葱", "生抽"], "蛤蜊吐沙焯开，倒入蛋液一起蒸熟。", ["#f2ead9", "#d7b86a"]],
  ["squid-celery", "芹菜炒鱿鱼", "芹菜脆，鱿鱼弹，清爽不油腻。", "18 分钟", "简单", ["quick", "protein", "vegetable"], ["鱿鱼", "芹菜", "姜", "蒜", "料酒", "盐"], "鱿鱼焯水后和芹菜大火快炒。", ["#e0efe2", "#4d9862"]],
  ["braised-yellow-croaker", "红烧黄花鱼", "鱼肉入味，酱汁咸鲜带甜。", "35 分钟", "中等", ["protein"], ["黄花鱼", "姜", "蒜", "生抽", "醋", "糖"], "鱼煎定型后加入酱汁，小火烧到入味。", ["#eadac7", "#9b5b3c"]],
  ["seaweed-egg-soup", "紫菜蛋花汤", "几分钟出锅，鲜味轻盈。", "8 分钟", "简单", ["quick", "protein"], ["紫菜", "鸡蛋", "虾皮", "葱", "盐", "香油"], "水开后放紫菜虾皮，淋入蛋液成蛋花。", ["#e7e2df", "#57515f"]],
  ["wintermelon-meatball-soup", "冬瓜丸子汤", "汤清甜，丸子弹嫩，适合晚餐。", "35 分钟", "中等", ["protein", "vegetable"], ["冬瓜", "猪肉末", "姜", "葱", "白胡椒", "盐"], "肉末调味挤成丸子，和冬瓜一起煮熟。", ["#e6f0df", "#80a86a"]],
  ["corn-pork-rib-soup", "玉米排骨汤", "玉米甜味进汤里，排骨软嫩。", "85 分钟", "简单", ["protein", "vegetable"], ["排骨", "玉米", "胡萝卜", "姜", "盐"], "排骨焯水后和玉米胡萝卜慢炖。", ["#f5e8bd", "#d4a63a"]],
  ["radish-beef-soup", "白萝卜牛肉汤", "汤清而鲜，萝卜吸满肉香。", "80 分钟", "中等", ["protein", "vegetable"], ["牛腩", "白萝卜", "姜", "香菜", "盐"], "牛腩炖软后加入萝卜继续煮到透明。", ["#eef0e5", "#8b7763"]],
  ["hot-sour-soup", "酸辣汤", "酸、辣、鲜都有，醒胃又暖身。", "20 分钟", "简单", ["quick", "protein", "vegetable"], ["豆腐", "木耳", "鸡蛋", "醋", "白胡椒", "香菇"], "配料煮开后勾薄芡，淋蛋液并加醋胡椒。", ["#ead9c4", "#9a6a47"]],
  ["wonton-soup", "鲜肉馄饨", "皮薄馅鲜，汤底清爽。", "45 分钟", "中等", ["protein"], ["馄饨皮", "猪肉末", "虾皮", "紫菜", "葱", "姜"], "肉馅调好包入皮中，煮熟后放入汤底。", ["#f1e5d5", "#c29a63"]],
  ["mushroom-chicken-soup", "香菇鸡汤", "香菇提鲜，鸡汤浓而不腻。", "90 分钟", "简单", ["protein"], ["鸡肉", "干香菇", "姜", "红枣", "盐"], "鸡肉焯水后和泡发香菇小火炖煮。", ["#eadfce", "#8d6b4d"]],
  ["cabbage-tofu-soup", "白菜豆腐汤", "清淡暖胃，适合想吃轻一点时。", "18 分钟", "简单", ["quick", "protein", "vegetable"], ["白菜", "豆腐", "姜", "盐", "白胡椒"], "白菜煮软后加入豆腐，小火煮到入味。", ["#e9f0df", "#7ba35c"]],
  ["loofah-egg-soup", "丝瓜蛋汤", "丝瓜清甜，蛋花柔软。", "12 分钟", "简单", ["quick", "protein", "vegetable"], ["丝瓜", "鸡蛋", "姜", "盐", "香油"], "丝瓜煮到变软后淋入蛋液，滴香油。", ["#e4f0d7", "#78a747"]],
  ["mung-bean-congee", "绿豆粥", "清爽软糯，夏天冰一下也舒服。", "50 分钟", "简单", ["vegetable"], ["绿豆", "大米", "冰糖", "清水"], "绿豆和大米一起煮到开花，按口味加糖。", ["#dfeedd", "#63a266"]],
  ["preserved-egg-congee", "皮蛋瘦肉粥", "米粥绵滑，皮蛋和瘦肉很搭。", "55 分钟", "简单", ["protein"], ["大米", "皮蛋", "瘦肉", "姜丝", "葱", "盐"], "粥煮绵后加入瘦肉和皮蛋，最后调味。", ["#ece5d8", "#77725e"]],
  ["garlic-broccoli", "蒜蓉西兰花", "脆嫩清香，几乎能搭所有主菜。", "12 分钟", "简单", ["quick", "vegetable"], ["西兰花", "蒜", "盐", "蚝油"], "西兰花焯水后，和蒜蓉蚝油快速翻炒。", ["#dceee0", "#3f8f55"]],
  ["oyster-lettuce", "蚝油生菜", "生菜脆嫩，酱汁咸鲜微甜。", "10 分钟", "简单", ["quick", "vegetable"], ["生菜", "蚝油", "蒜", "生抽", "糖"], "生菜焯烫后淋上煮开的蚝油蒜汁。", ["#e1f0d7", "#5fa448"]],
  ["dry-pot-cauliflower", "干锅花菜", "花菜干香脆嫩，带一点锅气。", "25 分钟", "中等", ["quick", "vegetable"], ["花菜", "五花肉", "干辣椒", "蒜", "生抽"], "五花肉煸香后加入花菜，大火炒到边缘微焦。", ["#efe3cf", "#b3763e"]],
  ["stir-fried-cabbage", "手撕包菜", "酸辣爽脆，便宜又好吃。", "12 分钟", "简单", ["quick", "vegetable"], ["包菜", "干辣椒", "蒜", "醋", "生抽"], "包菜手撕后大火快炒，出锅前淋醋。", ["#e7efd8", "#82a64a"]],
  ["mushroom-bokchoy", "香菇油菜", "香菇鲜，油菜嫩，颜色也好看。", "18 分钟", "简单", ["quick", "vegetable"], ["香菇", "油菜", "蒜", "蚝油", "淀粉"], "香菇煮出味后勾薄芡，铺在烫好的油菜上。", ["#e3efd9", "#5f8f4a"]],
  ["celery-cashew", "西芹腰果", "清脆带坚果香，素菜也有层次。", "15 分钟", "简单", ["quick", "vegetable"], ["西芹", "腰果", "胡萝卜", "盐", "食用油"], "西芹焯水后和腰果胡萝卜快速翻炒。", ["#e6f0d6", "#78a84a"]],
  ["eggplant-beans", "茄子烧豆角", "茄子软、豆角香，浓油赤酱很下饭。", "35 分钟", "中等", ["vegetable"], ["茄子", "豆角", "蒜", "生抽", "蚝油"], "茄子和豆角煸软后，加入酱汁烧到入味。", ["#e4d8eb", "#7860a3"]],
  ["bitter-melon-egg", "苦瓜炒蛋", "苦味清爽，鸡蛋能让口感更柔和。", "15 分钟", "简单", ["quick", "protein", "vegetable"], ["苦瓜", "鸡蛋", "盐", "蒜"], "苦瓜焯水去苦，和炒好的鸡蛋合炒。", ["#dfeecf", "#75a545"]],
  ["okra-garlic", "白灼秋葵", "做法简单，口感清脆滑嫩。", "10 分钟", "简单", ["quick", "vegetable"], ["秋葵", "蒜", "生抽", "香油", "小米椒"], "秋葵焯熟切开，淋上蒜蓉酱汁。", ["#dcefd8", "#5d9e4b"]],
  ["tomato-cauliflower", "番茄菜花", "酸甜开胃，小朋友也容易接受。", "20 分钟", "简单", ["quick", "vegetable"], ["菜花", "番茄", "番茄酱", "蒜", "盐"], "菜花焯水，和番茄酱汁一起炒到裹匀。", ["#f7d8ca", "#d34e3c"]],
  ["pan-fried-dumpling", "生煎饺子", "底部焦脆，内馅多汁。", "25 分钟", "中等", ["quick", "protein"], ["饺子", "食用油", "清水", "葱", "芝麻"], "饺子煎到底部金黄，加水焖熟后撒葱芝麻。", ["#f1e0c6", "#c28a42"]],
  ["scallion-pancake", "葱油饼", "外层酥，里面软，葱香明显。", "45 分钟", "中等", ["vegetable"], ["面粉", "小葱", "盐", "食用油", "温水"], "面团醒好擀开抹油撒葱，卷起再煎到两面金黄。", ["#f3e4bd", "#b08f38"]],
  ["beef-roll", "牛肉卷饼", "饼皮包住牛肉和蔬菜，早餐午餐都合适。", "30 分钟", "中等", ["quick", "protein", "vegetable"], ["薄饼", "牛肉", "黄瓜", "甜面酱", "葱"], "牛肉煎熟切片，和蔬菜酱料卷入薄饼。", ["#ead7bd", "#9b673d"]],
  ["egg-fried-noodle", "鸡蛋炒面", "面条焦香，配菜随手加。", "18 分钟", "简单", ["quick", "protein", "vegetable"], ["面条", "鸡蛋", "胡萝卜", "包菜", "生抽"], "面条煮到八分熟，和鸡蛋蔬菜大火炒匀。", ["#f0dfbd", "#c9973d"]],
  ["rice-noodle-beef", "干炒牛河", "河粉滑韧，牛肉嫩，锅气足。", "25 分钟", "中等", ["quick", "protein"], ["河粉", "牛肉", "豆芽", "韭黄", "生抽", "老抽"], "牛肉滑炒后加入河粉和豆芽，大火快速翻炒。", ["#ead8c2", "#94623d"]],
  ["seafood-porridge", "海鲜粥", "粥底鲜甜，虾和贝类让味道更丰富。", "45 分钟", "中等", ["protein"], ["大米", "虾", "蛤蜊", "姜丝", "葱", "白胡椒"], "粥煮绵后放入海鲜，煮熟再调味。", ["#e8e1d5", "#6c8fa0"]],
  ["kimchi-fried-rice", "泡菜炒饭", "酸辣开胃，剩饭变得很有精神。", "15 分钟", "简单", ["quick", "vegetable"], ["米饭", "泡菜", "鸡蛋", "韩式辣酱", "葱"], "泡菜炒香后加入米饭和辣酱，最后盖煎蛋。", ["#f4d6ca", "#c94d3a"]],
  ["curry-chicken-rice", "咖喱鸡饭", "咖喱浓稠，土豆和鸡肉都很入味。", "40 分钟", "简单", ["protein", "vegetable"], ["鸡腿肉", "土豆", "胡萝卜", "洋葱", "咖喱块", "米饭"], "鸡肉和蔬菜炒香后加水煮软，放咖喱块收浓。", ["#f4e0b5", "#d19a35"]],
  ["japanese-oyakodon", "亲子丼", "鸡肉和蛋液盖在米饭上，柔软鲜甜。", "20 分钟", "简单", ["quick", "protein"], ["鸡腿肉", "鸡蛋", "洋葱", "米饭", "生抽", "味淋"], "鸡肉洋葱煮入味，淋蛋液半凝固后盖饭。", ["#f5e5c6", "#d9a343"]],
  ["korean-bibimbap", "韩式拌饭", "蔬菜丰富，辣酱拌开很香。", "35 分钟", "中等", ["protein", "vegetable"], ["米饭", "牛肉", "菠菜", "豆芽", "胡萝卜", "韩式辣酱"], "配菜分别炒熟，和牛肉、煎蛋一起铺在米饭上。", ["#eadfca", "#c4493b"]],
  ["thai-basil-chicken", "罗勒鸡肉饭", "咸香微辣，罗勒香气很醒神。", "18 分钟", "简单", ["quick", "protein"], ["鸡肉末", "罗勒", "小米椒", "蒜", "鱼露", "米饭"], "鸡肉末炒散，加入调味和罗勒叶快速翻匀。", ["#e1eed5", "#4b9652"]],
  ["vietnam-spring-roll", "越式春卷", "清爽不腻，蘸汁酸甜。", "30 分钟", "中等", ["protein", "vegetable"], ["米纸", "虾仁", "生菜", "米粉", "薄荷", "花生酱"], "米纸泡软后包入虾仁蔬菜米粉，配蘸汁。", ["#e6f0df", "#5eaa73"]],
  ["pasta-bolognese", "肉酱意面", "番茄肉酱浓郁，适合一人食。", "35 分钟", "中等", ["protein"], ["意面", "牛肉末", "番茄", "洋葱", "蒜", "黑胡椒"], "肉末和番茄熬成酱，拌入煮好的意面。", ["#f1d4c8", "#ba4c38"]],
  ["creamy-mushroom-pasta", "奶油蘑菇意面", "奶香柔和，蘑菇鲜味明显。", "25 分钟", "简单", ["quick", "vegetable"], ["意面", "蘑菇", "淡奶油", "蒜", "黑胡椒", "芝士"], "蘑菇煎香后加奶油煮浓，拌入意面。", ["#efe4d2", "#9b8a69"]],
  ["tuna-sandwich", "金枪鱼三明治", "不用开火也能做，适合早餐。", "10 分钟", "简单", ["quick", "protein"], ["吐司", "金枪鱼罐头", "生菜", "黄瓜", "蛋黄酱"], "金枪鱼拌酱后夹入吐司和蔬菜。", ["#e9ead8", "#77905f"]],
  ["chicken-salad", "香煎鸡肉沙拉", "清爽有饱腹感，酱汁可以随口味调整。", "25 分钟", "简单", ["quick", "protein", "vegetable"], ["鸡胸肉", "生菜", "小番茄", "玉米", "黑胡椒", "油醋汁"], "鸡胸肉煎熟切片，和蔬菜油醋汁拌匀。", ["#e1efd8", "#5a9a4e"]],
  ["avocado-egg-toast", "牛油果鸡蛋吐司", "柔滑牛油果加蛋香，早餐很快。", "12 分钟", "简单", ["quick", "protein"], ["吐司", "牛油果", "鸡蛋", "黑胡椒", "柠檬汁"], "牛油果压泥抹吐司，放上煎蛋调味。", ["#e2efd8", "#6a9d4f"]],
  ["vegetable-omelette", "蔬菜欧姆蛋", "蛋香包住蔬菜，早午餐都合适。", "15 分钟", "简单", ["quick", "protein", "vegetable"], ["鸡蛋", "彩椒", "洋葱", "蘑菇", "芝士"], "蔬菜炒软后倒入蛋液，小火煎到凝固。", ["#f4e5c4", "#d6a33d"]],
  ["potato-beef-stew", "土豆炖牛肉", "牛肉软烂，土豆吸汁，非常下饭。", "90 分钟", "中等", ["protein", "vegetable"], ["牛腩", "土豆", "胡萝卜", "洋葱", "番茄", "生抽"], "牛腩炖软后加入土豆胡萝卜，继续焖到浓稠。", ["#eadbc9", "#9a5a3d"]],
  ["pumpkin-soup", "南瓜浓汤", "香甜顺滑，适合轻食晚餐。", "30 分钟", "简单", ["vegetable"], ["南瓜", "洋葱", "牛奶", "黄油", "黑胡椒"], "南瓜煮软后和牛奶打顺滑，再回锅调味。", ["#f7dfb5", "#d9902f"]],
  ["japanese-curry-beef", "日式咖喱牛肉", "温和浓郁，米饭杀手。", "70 分钟", "中等", ["protein", "vegetable"], ["牛肉", "土豆", "胡萝卜", "洋葱", "咖喱块", "米饭"], "牛肉炖软后加入蔬菜和咖喱块，煮到浓稠。", ["#f0d9ad", "#b97c2f"]],
  ["teriyaki-chicken", "照烧鸡腿", "皮香肉嫩，酱汁甜咸发亮。", "30 分钟", "简单", ["quick", "protein"], ["鸡腿", "生抽", "味淋", "蜂蜜", "姜"], "鸡腿煎到两面金黄，倒入照烧汁收浓。", ["#ead5c5", "#985438"]],
  ["grilled-chicken-leg", "香烤鸡腿", "外皮微焦，肉汁保留得很好。", "50 分钟", "简单", ["protein"], ["鸡腿", "蒜", "蜂蜜", "生抽", "黑胡椒"], "鸡腿腌好后进烤箱，中途刷一次酱汁。", ["#efd7c5", "#b7653d"]],
  ["honey-roast-pork", "蜜汁叉烧", "甜咸焦香，切片配饭或夹饼都好。", "75 分钟", "进阶", ["protein"], ["梅花肉", "叉烧酱", "蜂蜜", "生抽", "蒜"], "猪肉腌足后烤熟，中途多次刷蜜汁。", ["#f0d1c8", "#b5483d"]],
  ["steamed-pork-patty", "咸蛋蒸肉饼", "肉饼鲜嫩，咸蛋黄香气足。", "30 分钟", "简单", ["protein"], ["猪肉末", "咸蛋", "姜", "葱", "生抽", "淀粉"], "肉末调味铺盘，放咸蛋后蒸熟。", ["#eadbc8", "#bd8a45"]],
  ["minced-meat-tofu", "肉末豆腐", "豆腐嫩，肉末香，做法比麻婆更温和。", "20 分钟", "简单", ["quick", "protein"], ["豆腐", "猪肉末", "蒜", "生抽", "蚝油", "葱"], "肉末炒香后加豆腐和酱汁，小火烧入味。", ["#f1e3d0", "#b9824a"]],
  ["pork-cabbage-roll", "白菜肉卷", "白菜清甜，包着肉馅很鲜。", "40 分钟", "中等", ["protein", "vegetable"], ["白菜", "猪肉末", "香菇", "姜", "生抽"], "白菜叶焯软包肉馅，蒸熟后淋薄芡。", ["#e6efd8", "#78a24d"]],
  ["stuffed-pepper", "青椒酿肉", "青椒微辣，肉馅多汁。", "35 分钟", "中等", ["protein", "vegetable"], ["青椒", "猪肉末", "鸡蛋", "生抽", "蒜"], "青椒塞入肉馅，煎香后加酱汁焖熟。", ["#dcefd9", "#518e43"]],
  ["braised-duck", "酱香焖鸭", "鸭肉紧实入味，酱香很浓。", "75 分钟", "中等", ["protein"], ["鸭肉", "姜", "蒜", "生抽", "黄豆酱", "料酒"], "鸭肉煸出油脂后加酱料和水焖到软烂。", ["#ead4c5", "#8d4b34"]],
  ["beer-duck", "啤酒鸭", "啤酒去腥增香，鸭肉越焖越香。", "70 分钟", "中等", ["protein"], ["鸭肉", "啤酒", "青椒", "姜", "蒜", "生抽"], "鸭肉炒香后倒啤酒焖煮，最后加青椒收汁。", ["#ead7c1", "#986038"]],
  ["cold-cucumber", "拍黄瓜", "爽脆开胃，三分钟能调好。", "8 分钟", "简单", ["quick", "vegetable"], ["黄瓜", "蒜", "醋", "生抽", "香油", "辣椒油"], "黄瓜拍裂切段，和蒜末调味拌匀。", ["#dff0dc", "#4f9d55"]],
  ["spicy-shredded-chicken", "口水鸡", "麻辣鲜香，鸡肉嫩滑。", "45 分钟", "中等", ["protein"], ["鸡腿", "花椒", "辣椒油", "花生", "葱", "姜"], "鸡腿煮熟过凉，切块后淋麻辣红油汁。", ["#f0d3c9", "#b83f35"]],
  ["potato-salad", "土豆泥沙拉", "绵软清爽，冷藏后更好吃。", "30 分钟", "简单", ["vegetable"], ["土豆", "黄瓜", "胡萝卜", "鸡蛋", "蛋黄酱"], "土豆蒸熟压泥，加入配菜和酱料拌匀。", ["#f0e3c4", "#caa245"]],
  ["tofu-skin-salad", "凉拌豆皮", "豆皮有嚼劲，酱汁香辣。", "15 分钟", "简单", ["quick", "protein"], ["豆皮", "香菜", "蒜", "生抽", "醋", "辣椒油"], "豆皮焯水切丝，和香菜调味拌匀。", ["#efe4cf", "#b9864d"]],
  ["spinach-peanut", "菠菜拌花生", "菠菜柔嫩，花生香脆。", "12 分钟", "简单", ["quick", "vegetable"], ["菠菜", "花生", "蒜", "醋", "生抽"], "菠菜焯水攥干，和花生、蒜汁拌匀。", ["#dcefd7", "#579a48"]],
  ["lotus-root-salad", "凉拌藕片", "清脆酸辣，适合配重口主菜。", "15 分钟", "简单", ["quick", "vegetable"], ["莲藕", "醋", "小米椒", "蒜", "香油"], "藕片焯到断生，过凉后拌酸辣汁。", ["#f0e7dd", "#c89a8b"]],
  ["mango-shrimp-salad", "芒果虾仁沙拉", "酸甜清爽，虾仁增加饱腹感。", "20 分钟", "简单", ["quick", "protein", "vegetable"], ["芒果", "虾仁", "生菜", "小番茄", "柠檬汁"], "虾仁煮熟放凉，和芒果蔬菜轻轻拌匀。", ["#f6e5ba", "#e2a13a"]],
  ["fruit-yogurt-bowl", "水果酸奶碗", "轻盈甜口，早餐或加餐都方便。", "8 分钟", "简单", ["quick"], ["酸奶", "香蕉", "蓝莓", "草莓", "燕麦"], "水果切块，和酸奶燕麦装碗即可。", ["#f1dce4", "#bd6780"]],
  ["red-bean-ricecake", "红豆年糕汤", "红豆沙甜糯，年糕软弹。", "50 分钟", "简单", ["vegetable"], ["红豆", "年糕", "冰糖", "清水"], "红豆煮到开花后加糖和年糕，煮到软糯。", ["#ead4dc", "#954f63"]]
].map(([id, title, description, time, difficulty, category, ingredients, method, colors]) => ({
  id,
  title,
  description,
  time,
  difficulty,
  category,
  ingredients,
  steps: [
    `准备${ingredients.slice(0, 3).join("、")}，把需要切配的食材处理好。`,
    method,
    "出锅前尝味道，按需要补盐或酱油，趁热享用。"
  ],
  colors
}));

const generatedRecipes = buildGeneratedRecipes();

function buildGeneratedRecipes() {
  const mains = [
    ["鸡腿肉", "protein", "鸡肉鲜嫩，适合日常快炒或焖烧"],
    ["鸡胸肉", "protein", "口感清爽，适合少油料理"],
    ["牛肉", "protein", "肉香浓，适合大火快炒"],
    ["牛腩", "protein", "适合慢炖，汤汁浓厚"],
    ["猪里脊", "protein", "肉质细嫩，适合滑炒"],
    ["五花肉", "protein", "油脂丰润，适合煸香后烧制"],
    ["排骨", "protein", "骨香足，适合焖烧或炖煮"],
    ["虾仁", "protein", "鲜甜弹嫩，熟得很快"],
    ["鱼片", "protein", "口感嫩滑，适合酸汤或清炒"],
    ["三文鱼", "protein", "油脂丰富，适合煎烤"],
    ["豆腐", "protein", "吸汁能力强，适合红烧或煲煮"],
    ["鸡蛋", "protein", "做法灵活，适合快手菜"],
    ["羊肉", "protein", "香味明显，适合孜然和葱姜"],
    ["鸭肉", "protein", "肉味浓，适合焖烧"],
    ["蛤蜊", "protein", "自带鲜味，适合汤和蒸蛋"],
    ["鱿鱼", "protein", "口感弹，适合大火快炒"],
    ["香菇", "vegetable", "菌菇鲜味足，适合素菜增香"],
    ["杏鲍菇", "vegetable", "有肉感，煎炒都好吃"],
    ["莲藕", "vegetable", "清脆微甜，适合酸辣或炖煮"],
    ["土豆", "vegetable", "绵软管饱，适合焖饭和炖菜"]
  ];
  const pairings = [
    ["西兰花", "蒜香", ["蒜", "生抽", "蚝油"], ["quick", "vegetable"], ["#dceee0", "#4f9a62"]],
    ["番茄", "茄汁", ["番茄酱", "生抽", "糖"], ["quick", "vegetable"], ["#f7d7c9", "#c94838"]],
    ["青椒", "黑椒", ["黑胡椒", "蚝油", "蒜"], ["quick", "vegetable"], ["#dcefd9", "#518e43"]],
    ["土豆", "酱烧", ["生抽", "老抽", "姜"], ["vegetable"], ["#f0dfc4", "#bd7c38"]],
    ["洋葱", "葱香", ["葱", "生抽", "白胡椒"], ["quick", "vegetable"], ["#efe3cf", "#b3763e"]],
    ["胡萝卜", "家常", ["生抽", "盐", "食用油"], ["vegetable"], ["#f0ddc7", "#c47638"]],
    ["香菇", "菌香", ["蚝油", "蒜", "葱"], ["vegetable"], ["#eadfce", "#8d6b4d"]],
    ["小青菜", "清炒", ["蒜", "盐", "芝麻油"], ["quick", "vegetable"], ["#e1f0d7", "#5fa448"]],
    ["木耳", "爽口", ["醋", "生抽", "蒜"], ["quick", "vegetable"], ["#e7e2df", "#57515f"]],
    ["南瓜", "软糯", ["姜", "盐", "食用油"], ["vegetable"], ["#f7dfb5", "#d9902f"]]
  ];

  return mains.flatMap(([main, mainCategory, mainNote], mainIndex) =>
    pairings.map(([side, flavor, seasonings, categories, colors], sideIndex) => {
      const id = `daily-${mainIndex + 1}-${sideIndex + 1}`;
      const isQuick = !["牛腩", "排骨", "鸭肉"].includes(main);
      const time = isQuick ? `${18 + ((mainIndex + sideIndex) % 4) * 5} 分钟` : `${55 + ((mainIndex + sideIndex) % 4) * 10} 分钟`;
      const difficulty = isQuick ? "简单" : "中等";
      const title = `${flavor}${main}${side}`;
      const category = Array.from(new Set([mainCategory, ...categories, ...(isQuick ? ["quick"] : [])]));
      const ingredients = Array.from(new Set([main, side, ...seasonings, "盐", "食用油"]));
      return {
        id,
        title,
        description: `${flavor}风味的${main}搭配${side}，${mainNote}，适合做成两人份家常菜。`,
        time,
        difficulty,
        category,
        ingredients,
        steps: buildDetailedSteps(title, ingredients, main, side, flavor, isQuick),
        colors
      };
    })
  );
}

function normalizeRecipe(recipe) {
  const main = recipe.ingredients[0] || recipe.title;
  const side = recipe.ingredients[1] || "配菜";
  const flavor = recipe.title.slice(0, 2);
  return {
    ...recipe,
    description: recipe.description || `${recipe.title}适合日常做饭，按份量准备食材更容易成功。`,
    steps: recipe.steps.length >= 5 ? recipe.steps : buildDetailedSteps(recipe.title, recipe.ingredients, main, side, flavor, true)
  };
}

function buildDetailedSteps(title, ingredients, main, side, flavor, isQuick) {
  const prepItems = ingredients.slice(0, 4).join("、");
  const cookTime = isQuick ? "3 到 5 分钟" : "15 到 25 分钟";
  return [
    `备料：按用料表准备${prepItems}，肉类切成均匀小块或薄片，蔬菜洗净沥干。`,
    `腌制和调味：${main}加少量盐、生抽和淀粉抓匀，静置 10 分钟；素菜可省略腌制。`,
    `先处理主料：热锅放油，把${main}煎炒到表面变色或微微焦香，盛出备用。`,
    `炒香配菜：锅里留底油，放入蒜姜葱等香料，再加入${side}炒到断生。`,
    `合炒收汁：倒回${main}，加入${flavor}调味料和少量热水，翻炒或焖煮${cookTime}。`,
    `完成：尝一下咸淡，汤汁浓稠后出锅；想拌饭可以多留一点汁。`
  ];
}

const state = {
  recipes: loadRecipes(),
  pantry: JSON.parse(localStorage.getItem("pantry") || "[]"),
  favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
  filter: "all",
  query: "",
  featuredId: "tomato-brisket"
};

const recipeList = document.querySelector("#recipeList");
const recipeCount = document.querySelector("#recipeCount");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#searchInput");
const pantryForm = document.querySelector("#pantryForm");
const pantryInput = document.querySelector("#pantryInput");
const pantryTags = document.querySelector("#pantryTags");
const clearPantry = document.querySelector("#clearPantry");
const recipeDialog = document.querySelector("#recipeDialog");
const closeDialog = document.querySelector("#closeDialog");
const dialogFavorite = document.querySelector("#dialogFavorite");
const dialogPhoto = document.querySelector("#dialogPhoto");
const imageSearch = document.querySelector("#imageSearch");
const addDialog = document.querySelector("#addDialog");
const addRecipeForm = document.querySelector("#addRecipeForm");
const installApp = document.querySelector("#installApp");
let deferredInstallPrompt = null;
let activeServings = 2;

const ingredientAmounts = {
  牛腩: "300克",
  番茄: "2个",
  洋葱: "半个",
  姜: "3片",
  生抽: "2汤匙",
  米饭: "2碗",
  鸡蛋: "3个",
  虾仁: "180克",
  牛奶: "2汤匙",
  葱: "2根",
  盐: "2克",
  白胡椒: "少许",
  鸡胸肉: "250克",
  西兰花: "250克",
  蒜: "3瓣",
  黑胡椒: "少许",
  橄榄油: "1汤匙",
  藜麦: "120克",
  三文鱼: "2块",
  味噌: "1汤匙",
  蜂蜜: "1汤匙",
  酱油: "1汤匙",
  柠檬: "半个",
  小青菜: "200克",
  面条: "200克",
  香菇: "6朵",
  芝麻油: "1茶匙",
  豆腐: "400克",
  胡萝卜: "半根",
  木耳: "一小把",
  青椒: "1个",
  蚝油: "1汤匙",
  牛肉: "250克",
  排骨: "400克",
  莲藕: "300克",
  菠菜: "250克",
  食用油: "1汤匙"
};

const photoOverrides = {
  "kung-pao-chicken": "https://commons.wikimedia.org/wiki/Special:FilePath/KunG%20Pao%20Chicken.jpg",
  "mapo-tofu": "https://commons.wikimedia.org/wiki/Special:FilePath/MaPo%20Tofu%20%2827567004242%29.jpg",
  "tomato-egg": "https://commons.wikimedia.org/wiki/Special:FilePath/Tomato%20and%20eggs.JPG",
  "braised-pork": "https://commons.wikimedia.org/wiki/Special:FilePath/Red%20braised%20pork%20belly.jpg",
  "scallion-oil-noodle": "https://commons.wikimedia.org/wiki/Special:FilePath/Shanghai%20oil%20noodle.jpg",
  "sweet-sour-ribs": "https://commons.wikimedia.org/wiki/Special:FilePath/Sweet-and-sour%20pork.jpg",
  "cucumber-chicken": "https://commons.wikimedia.org/wiki/Special:FilePath/Sesame%20oil%20cold%20noodles.jpg"
};

function loadRecipes() {
  const saved = JSON.parse(localStorage.getItem("customRecipes") || "[]");
  return [...starterRecipes, ...extraRecipes, ...generatedRecipes, ...saved].map(normalizeRecipe);
}

function saveCustomRecipe(recipe) {
  const saved = JSON.parse(localStorage.getItem("customRecipes") || "[]");
  localStorage.setItem("customRecipes", JSON.stringify([...saved, recipe]));
}

function render() {
  renderFeatured();
  renderPantry();
  renderRecipes();
}

function scoreRecipe(recipe) {
  return state.pantry.reduce((score, item) => {
    const matched = recipe.ingredients.some((ingredient) => ingredient.includes(item) || item.includes(ingredient));
    return matched ? score + 1 : score;
  }, 0);
}

function getVisibleRecipes() {
  return state.recipes
    .filter((recipe) => {
      const haystack = [recipe.title, recipe.description, ...recipe.ingredients].join(" ");
      const matchesQuery = haystack.toLowerCase().includes(state.query.toLowerCase());
      const matchesFilter =
        state.filter === "all" ||
        recipe.category.includes(state.filter) ||
        (state.filter === "favorite" && state.favorites.includes(recipe.id));
      return matchesQuery && matchesFilter;
    })
    .sort((a, b) => scoreRecipe(b) - scoreRecipe(a));
}

function renderRecipes() {
  const recipes = getVisibleRecipes();
  recipeList.innerHTML = "";
  recipeCount.textContent = `${recipes.length} 道`;
  emptyState.classList.toggle("hidden", recipes.length > 0);

  recipes.forEach((recipe) => {
    const card = document.createElement("article");
    const photo = getRecipePhoto(recipe);
    card.className = "recipe-card";
    card.innerHTML = `
      <div class="recipe-art ${photo ? "has-photo" : ""}" style="--art-bg: ${recipe.colors[0]}; --art-main: ${recipe.colors[1]}; ${photo ? `background-image: url('${photo}')` : ""}"></div>
      <div class="card-topline">
        <h3>${escapeHtml(recipe.title)}</h3>
        <button class="mini-fav" type="button" aria-label="收藏 ${escapeHtml(recipe.title)}">${state.favorites.includes(recipe.id) ? "♥" : "♡"}</button>
      </div>
      <p>${escapeHtml(recipe.description)}</p>
      <div class="card-meta">
        <span>${escapeHtml(recipe.time)}</span>
        <span>${escapeHtml(recipe.difficulty)}</span>
        <span>匹配 ${scoreRecipe(recipe)}</span>
      </div>
    `;
    card.addEventListener("click", () => openRecipe(recipe.id));
    card.querySelector(".mini-fav").addEventListener("click", (event) => {
      event.stopPropagation();
      toggleFavorite(recipe.id);
    });
    recipeList.appendChild(card);
  });
}

function renderPantry() {
  pantryTags.innerHTML = "";
  state.pantry.forEach((item) => {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.innerHTML = `${escapeHtml(item)}<button type="button" aria-label="移除 ${escapeHtml(item)}">×</button>`;
    tag.querySelector("button").addEventListener("click", () => {
      state.pantry = state.pantry.filter((pantryItem) => pantryItem !== item);
      persistPantry();
      render();
    });
    pantryTags.appendChild(tag);
  });
}

function renderFeatured() {
  const recipe = state.recipes.find((item) => item.id === state.featuredId) || state.recipes[0];
  document.querySelector("#featuredTitle").textContent = recipe.title;
  document.querySelector("#featuredSummary").textContent = recipe.description;
}

function openRecipe(id) {
  const recipe = state.recipes.find((item) => item.id === id);
  if (!recipe) return;
  state.activeRecipeId = id;
  activeServings = 2;
  document.querySelector("#dialogMeta").textContent = `${recipe.time} · ${recipe.difficulty}`;
  document.querySelector("#dialogTitle").textContent = recipe.title;
  document.querySelector("#dialogDescription").textContent = recipe.description;
  renderServings(recipe);
  document.querySelector("#stepList").innerHTML = recipe.steps.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  dialogFavorite.textContent = state.favorites.includes(id) ? "♥" : "♡";
  const photo = getRecipePhoto(recipe);
  dialogPhoto.classList.toggle("hidden", !photo);
  if (photo) dialogPhoto.style.backgroundImage = `url("${photo}")`;
  imageSearch.href = `https://www.bing.com/images/search?q=${encodeURIComponent(`${recipe.title} 菜品 图片`)}`;
  recipeDialog.showModal();
}

function renderServings(recipe) {
  document.querySelector("#ingredientTitle").textContent = `用料（${activeServings}人份）`;
  document.querySelectorAll(".serving-button").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.serving) === activeServings);
  });
  document.querySelector("#ingredientList").innerHTML = recipe.ingredients
    .map((item) => `<li>${escapeHtml(item)}：${escapeHtml(getIngredientAmount(item, activeServings))}</li>`)
    .join("");
}

function getIngredientAmount(name, servings) {
  const base = ingredientAmounts[name] || inferIngredientAmount(name);
  return scaleAmount(base, servings / 2);
}

function inferIngredientAmount(name) {
  if (/(油|醋|酱|料酒|辣椒油|香油|鱼露|味淋|淡奶油|芝麻酱|番茄酱|咖喱块)/.test(name)) return "1汤匙";
  if (/(糖|冰糖|花椒粉|孜然粉|辣椒粉|白胡椒|黑胡椒|椒盐|盐)/.test(name)) return "少许";
  if (/(葱|香菜|薄荷|罗勒|九层塔)/.test(name)) return "2根";
  if (/(姜|蒜)/.test(name)) return "3片/瓣";
  if (/(鸡腿|鸡翅|鱼|虾|肉|牛|羊|鸭|排骨|蛤蜊|鱿鱼)/.test(name)) return "250克";
  if (/(面|粉丝|河粉|意面|米粉|年糕|大米|米饭|吐司|薄饼|饺子|馄饨皮)/.test(name)) return "200克";
  if (/(鸡蛋|皮蛋|咸蛋)/.test(name)) return "2个";
  if (/(花生|腰果|芝麻|虾皮|枸杞|燕麦)/.test(name)) return "一小把";
  return "200克";
}

function scaleAmount(amount, factor) {
  if (amount === "少许" || amount.includes("小把") || amount.includes("半")) return factor === 2 ? amount.replace("半", "1") : amount;
  return amount.replace(/(\d+(?:\.\d+)?)/g, (value) => {
    const scaled = Number(value) * factor;
    return Number.isInteger(scaled) ? String(scaled) : scaled.toFixed(1).replace(/\.0$/, "");
  });
}

function getRecipePhoto(recipe) {
  return photoOverrides[recipe.id] || buildRecipeImage(recipe);
}

function buildRecipeImage(recipe) {
  const [bg, main] = recipe.colors || ["#f6ead8", "#d99b45"];
  const garnish = recipe.category.includes("protein") ? "#c94838" : "#4f9a62";
  const title = escapeSvgText(recipe.title.slice(0, 10));
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 420">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="${bg}"/>
          <stop offset="1" stop-color="#fffaf0"/>
        </linearGradient>
      </defs>
      <rect width="640" height="420" fill="url(#bg)"/>
      <ellipse cx="320" cy="240" rx="220" ry="118" fill="#fffdf7"/>
      <ellipse cx="320" cy="240" rx="168" ry="84" fill="${main}"/>
      <circle cx="250" cy="212" r="34" fill="#fff4dc" opacity="0.9"/>
      <circle cx="366" cy="246" r="42" fill="${garnish}" opacity="0.9"/>
      <circle cx="423" cy="206" r="24" fill="#fff8e8" opacity="0.85"/>
      <path d="M214 277c78 44 178 44 252 0" fill="none" stroke="#202321" stroke-opacity="0.15" stroke-width="18" stroke-linecap="round"/>
      <text x="320" y="365" text-anchor="middle" font-size="36" font-weight="700" fill="#202321" font-family="PingFang SC, Microsoft YaHei, sans-serif">${title}</text>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function escapeSvgText(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function toggleFavorite(id) {
  state.favorites = state.favorites.includes(id)
    ? state.favorites.filter((favoriteId) => favoriteId !== id)
    : [...state.favorites, id];
  localStorage.setItem("favorites", JSON.stringify(state.favorites));
  render();
  if (state.activeRecipeId === id) {
    dialogFavorite.textContent = state.favorites.includes(id) ? "♥" : "♡";
  }
}

function persistPantry() {
  localStorage.setItem("pantry", JSON.stringify(state.pantry));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

document.querySelectorAll(".filter-pill").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".filter-pill.active").classList.remove("active");
    button.classList.add("active");
    state.filter = button.dataset.filter;
    renderRecipes();
  });
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim();
  renderRecipes();
});

pantryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = pantryInput.value.trim();
  if (!value || state.pantry.includes(value)) return;
  state.pantry = [...state.pantry, value];
  pantryInput.value = "";
  persistPantry();
  render();
});

clearPantry.addEventListener("click", () => {
  state.pantry = [];
  persistPantry();
  render();
});

closeDialog.addEventListener("click", () => recipeDialog.close());
dialogFavorite.addEventListener("click", () => toggleFavorite(state.activeRecipeId));
document.querySelectorAll(".serving-button").forEach((button) => {
  button.addEventListener("click", () => {
    const recipe = state.recipes.find((item) => item.id === state.activeRecipeId);
    if (!recipe) return;
    activeServings = Number(button.dataset.serving);
    renderServings(recipe);
  });
});

document.querySelector("#viewFeatured").addEventListener("click", () => openRecipe(state.featuredId));
document.querySelector("#randomRecipe").addEventListener("click", () => {
  const currentIndex = state.recipes.findIndex((recipe) => recipe.id === state.featuredId);
  const nextIndex = (currentIndex + 1) % state.recipes.length;
  state.featuredId = state.recipes[nextIndex].id;
  renderFeatured();
});

document.querySelector("#openAddRecipe").addEventListener("click", () => addDialog.showModal());
document.querySelector("#closeAddDialog").addEventListener("click", () => addDialog.close());

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  installApp.classList.remove("hidden");
});

installApp.addEventListener("click", async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  installApp.classList.add("hidden");
});

window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  installApp.classList.add("hidden");
});

addRecipeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(addRecipeForm);
  const ingredients = formData
    .get("ingredients")
    .split(/[，,]/)
    .map((item) => item.trim())
    .filter(Boolean);
  const steps = formData
    .get("steps")
    .split(/\n+/)
    .map((item) => item.trim())
    .filter(Boolean);
  const recipe = {
    id: `custom-${Date.now()}`,
    title: formData.get("title").trim(),
    description: formData.get("description").trim(),
    time: formData.get("time").trim(),
    difficulty: formData.get("difficulty"),
    category: formData.getAll("category").length ? formData.getAll("category") : ["quick"],
    ingredients,
    steps,
    colors: ["#e8f0ec", "#2f6c4f"]
  };
  state.recipes = [...state.recipes, recipe];
  saveCustomRecipe(recipe);
  state.featuredId = recipe.id;
  addRecipeForm.reset();
  addDialog.close();
  render();
});

render();

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  navigator.serviceWorker.register("./sw.js");
}
