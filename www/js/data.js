// ============ 璟程 - 示例数据 ============
// 包含酒店、民宿、公寓等多种住宿类型

const hotels = [
  // ========== 高端酒店 ==========
  {
    id: 1,
    name: '璟程·丽思卡尔顿酒店',
    city: '上海',
    district: '陆家嘴',
    address: '上海市浦东新区陆家嘴环路 1000 号',
    star: 5,
    rating: 4.9,
    reviews: 2856,
    brand: '丽思卡尔顿',
    type: 'hotel',
    priceRange: 'high',
    img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800'
    ],
    desc: '坐落于陆家嘴金融中心，俯瞰黄浦江美景，提供顶级奢华住宿体验。配备行政酒廊、水疗中心和米其林餐厅。',
    facilities: ['免费 WiFi', '停车场', '健身房', '游泳池', 'SPA', '餐厅', '会议室', '礼宾服务'],
    rooms: [
      { id: 101, name: '豪华江景大床房', bed: '大床', area: 55, price: 2888, breakfast: true, facilities: ['江景', '浴缸', '迷你吧'] },
      { id: 102, name: '行政套房', bed: '大床', area: 85, price: 4588, breakfast: true, facilities: ['江景', '客厅', '行政酒廊'] },
      { id: 103, name: '总统套房', bed: '大床', area: 180, price: 18888, breakfast: true, facilities: ['全景江景', '私人管家', '厨房'] }
    ]
  },
  {
    id: 2,
    name: '璟程·华尔道夫酒店',
    city: '北京',
    district: '王府井',
    address: '北京市东城区金鱼胡同 8 号',
    star: 5,
    rating: 4.8,
    reviews: 3201,
    brand: '华尔道夫',
    type: 'hotel',
    priceRange: 'high',
    img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
    images: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800'
    ],
    desc: '位于王府井核心商圈，融合百年历史与现代奢华。步行可达故宫、天安门，地理位置绝佳。',
    facilities: ['免费 WiFi', '停车场', '健身房', '游泳池', 'SPA', '餐厅', '酒吧'],
    rooms: [
      { id: 201, name: '豪华客房', bed: '大床/双床', area: 48, price: 2588, breakfast: true, facilities: ['城景', '浴缸'] },
      { id: 202, name: '王府井套房', bed: '大床', area: 95, price: 5288, breakfast: true, facilities: ['街景', '客厅', '厨房'] }
    ]
  },
  {
    id: 3,
    name: '璟程·四季酒店',
    city: '广州',
    district: '珠江新城',
    address: '广州市天河区珠江西路 5 号',
    star: 5,
    rating: 4.9,
    reviews: 1987,
    brand: '四季',
    type: 'hotel',
    priceRange: 'high',
    img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800',
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800',
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800'
    ],
    desc: '占据 IFC 高层，俯瞰珠江新城天际线。设计融合岭南文化元素，提供粤式待客之道。',
    facilities: ['免费 WiFi', '停车场', '健身房', '游泳池', 'SPA', '餐厅'],
    rooms: [
      { id: 301, name: '豪华城景房', bed: '大床', area: 52, price: 2388, breakfast: true, facilities: ['城景', '浴缸'] },
      { id: 302, name: '行政套房', bed: '大床', area: 90, price: 4288, breakfast: true, facilities: ['珠江景', '客厅'] }
    ]
  },
  
  // ========== 中端酒店 ==========
  {
    id: 4,
    name: '璟程·亚朵酒店',
    city: '杭州',
    district: '西湖区',
    address: '杭州市西湖区文三路 128 号',
    star: 4,
    rating: 4.7,
    reviews: 4521,
    brand: '亚朵',
    type: 'hotel',
    priceRange: 'mid',
    img: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800',
    images: [
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800',
      'https://images.unsplash.com/photo-1551774889-c11a4043e6c3?w=800'
    ],
    desc: '人文主题酒店，配备竹居图书馆、属地摄影。步行可达西湖景区，周边美食云集。',
    facilities: ['免费 WiFi', '停车场', '健身房', '洗衣房', '图书馆', '餐厅'],
    rooms: [
      { id: 401, name: '高级大床房', bed: '大床', area: 30, price: 458, breakfast: true, facilities: ['城景', '书桌'] },
      { id: 402, name: '行政大床房', bed: '大床', area: 38, price: 598, breakfast: true, facilities: ['城景', '沙发', '浴缸'] }
    ]
  },
  {
    id: 5,
    name: '璟程·全季酒店',
    city: '成都',
    district: '春熙路',
    address: '成都市锦江区红星路三段 99 号',
    star: 4,
    rating: 4.6,
    reviews: 5632,
    brand: '全季',
    type: 'hotel',
    priceRange: 'mid',
    img: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800',
    images: [
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800'
    ],
    desc: '位于春熙路商圈，步行可达太古里、IFS。禅意设计风格，提供东方美学体验。',
    facilities: ['免费 WiFi', '健身房', '洗衣房', '餐厅', '会议室'],
    rooms: [
      { id: 501, name: '高级大床房', bed: '大床', area: 28, price: 398, breakfast: true, facilities: ['城景', '书桌'] },
      { id: 502, name: '家庭房', bed: '大床 + 双床', area: 45, price: 598, breakfast: true, facilities: ['城景', '沙发'] }
    ]
  },
  {
    id: 6,
    name: '璟程·希尔顿欢朋酒店',
    city: '深圳',
    district: '南山',
    address: '深圳市南山区科技园南区',
    star: 4,
    rating: 4.5,
    reviews: 3890,
    brand: '希尔顿欢朋',
    type: 'hotel',
    priceRange: 'mid',
    img: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800',
    images: [
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800'
    ],
    desc: '位于深圳科技园，毗邻腾讯、大疆等科技企业。配备会议室和商务中心，商务出行首选。',
    facilities: ['免费 WiFi', '停车场', '健身房', '洗衣房', '会议室', '商务中心'],
    rooms: [
      { id: 601, name: '标准大床房', bed: '大床', area: 32, price: 468, breakfast: true, facilities: ['城景', '书桌'] },
      { id: 602, name: '商务双床房', bed: '双床', area: 35, price: 498, breakfast: true, facilities: ['城景', '办公桌'] }
    ]
  },
  
  // ========== 经济型酒店 ==========
  {
    id: 7,
    name: '璟程·汉庭酒店',
    city: '南京',
    district: '新街口',
    address: '南京市鼓楼区中山路 188 号',
    star: 3,
    rating: 4.4,
    reviews: 6789,
    brand: '汉庭',
    type: 'hotel',
    priceRange: 'low',
    img: 'https://images.unsplash.com/photo-1608649237243-88408aa6ca47?w=800',
    images: [
      'https://images.unsplash.com/photo-1608649237243-88408aa6ca47?w=800'
    ],
    desc: '位于新街口核心商圈，地铁直达。干净舒适，性价比高，适合预算有限的旅行者。',
    facilities: ['免费 WiFi', '洗衣房', '24 小时前台'],
    rooms: [
      { id: 701, name: '经济大床房', bed: '大床', area: 20, price: 198, breakfast: false, facilities: ['城景', '书桌'] },
      { id: 702, name: '标准双床房', bed: '双床', area: 22, price: 218, breakfast: false, facilities: ['城景'] }
    ]
  },
  {
    id: 8,
    name: '璟程·锦江之星',
    city: '西安',
    district: '钟楼',
    address: '西安市碑林区东大街 208 号',
    star: 3,
    rating: 4.3,
    reviews: 5234,
    brand: '锦江之星',
    type: 'hotel',
    priceRange: 'low',
    img: 'https://images.unsplash.com/photo-1608649237243-88408aa6ca47?w=800',
    images: [
      'https://images.unsplash.com/photo-1608649237243-88408aa6ca47?w=800'
    ],
    desc: '步行可达钟楼、回民街。交通便利，周边美食众多，是探索古都的理想住宿点。',
    facilities: ['免费 WiFi', '24 小时前台', '行李寄存'],
    rooms: [
      { id: 801, name: '经济大床房', bed: '大床', area: 18, price: 168, breakfast: false, facilities: ['城景'] },
      { id: 802, name: '标准双床房', bed: '双床', area: 20, price: 188, breakfast: false, facilities: ['城景'] }
    ]
  },
  
  // ========== 民宿 ==========
  {
    id: 9,
    name: '璟程·丽江古城庭院民宿',
    city: '丽江',
    district: '古城区',
    address: '丽江市古城区五一街兴仁下段',
    star: 4,
    rating: 4.8,
    reviews: 1256,
    brand: '璟程精选民宿',
    type: 'homestay',
    priceRange: 'mid',
    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?w=800'
    ],
    desc: '纳西族传统庭院建筑，三坊一照壁。院内花草繁茂，茶室可俯瞰古城全景。提供纳西文化体验。',
    facilities: ['免费 WiFi', '庭院', '茶室', '接送机', '洗衣'],
    rooms: [
      { id: 901, name: '观景大床房', bed: '大床', area: 28, price: 368, breakfast: true, facilities: ['古城景', '阳台', '浴缸'] },
      { id: 902, name: '庭院套房', bed: '大床', area: 45, price: 568, breakfast: true, facilities: ['庭院景', '客厅', '茶台'] }
    ]
  },
  {
    id: 10,
    name: '璟程·莫干山竹海民宿',
    city: '湖州',
    district: '德清县',
    address: '湖州市德清县莫干山镇',
    star: 5,
    rating: 4.9,
    reviews: 892,
    brand: '璟程精选民宿',
    type: 'homestay',
    priceRange: 'high',
    img: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800',
    images: [
      'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800'
    ],
    desc: '隐于万亩竹海之中，现代设计与自然景观完美融合。配备无边泳池、星空露台，是度假放松的理想之地。',
    facilities: ['免费 WiFi', '停车场', '游泳池', '餐厅', '露台', '烧烤'],
    rooms: [
      { id: 1001, name: '竹景大床房', bed: '大床', area: 40, price: 888, breakfast: true, facilities: ['竹海景', '阳台', '浴缸'] },
      { id: 1002, name: '星空套房', bed: '大床', area: 65, price: 1388, breakfast: true, facilities: ['全景', '露台', '浴缸', '音响'] }
    ]
  },
  {
    id: 11,
    name: '璟程·大理洱海民宿',
    city: '大理',
    district: '双廊',
    address: '大理市双廊镇大建旁村',
    star: 4,
    rating: 4.7,
    reviews: 1567,
    brand: '璟程精选民宿',
    type: 'homestay',
    priceRange: 'mid',
    img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800',
    images: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800'
    ],
    desc: '一线洱海景，推窗见海。白族建筑风格，配备海景咖啡厅。步行可达双廊古镇。',
    facilities: ['免费 WiFi', '咖啡厅', '露台', '接送机', '自行车'],
    rooms: [
      { id: 1101, name: '海景大床房', bed: '大床', area: 35, price: 468, breakfast: true, facilities: ['洱海景', '阳台'] },
      { id: 1102, name: '豪华海景套房', bed: '大床', area: 55, price: 768, breakfast: true, facilities: ['全景洱海', '客厅', '浴缸'] }
    ]
  },
  
  // ========== 服务式公寓 ==========
  {
    id: 12,
    name: '璟程·雅诗阁服务公寓',
    city: '上海',
    district: '淮海中路',
    address: '上海市黄浦区淮海中路 381 号',
    star: 5,
    rating: 4.7,
    reviews: 2134,
    brand: '雅诗阁',
    type: 'apartment',
    priceRange: 'high',
    img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800'
    ],
    desc: '位于淮海中路核心商圈，配备全套厨房设施。适合长期住宿、家庭出行和商务差旅。',
    facilities: ['免费 WiFi', '停车场', '健身房', '游泳池', '洗衣房', '厨房', '会议室'],
    rooms: [
      { id: 1201, name: '一居室公寓', bed: '大床', area: 65, price: 1288, breakfast: true, facilities: ['城景', '厨房', '洗衣机'] },
      { id: 1202, name: '两居室公寓', bed: '大床 + 双床', area: 95, price: 1988, breakfast: true, facilities: ['城景', '厨房', '客厅', '洗衣机'] }
    ]
  },
  
  // ========== 青年旅舍 ==========
  {
    id: 13,
    name: '璟程·背包十年青旅',
    city: '大理',
    district: '古城',
    address: '大理市大理镇叶榆路',
    star: 3,
    rating: 4.6,
    reviews: 3456,
    brand: '背包十年',
    type: 'hostel',
    priceRange: 'low',
    img: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800',
    images: [
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800'
    ],
    desc: '知名连锁青旅，社交氛围浓厚。配备公共厨房、酒吧、电影室。是结识旅伴、分享故事的好地方。',
    facilities: ['免费 WiFi', '公共厨房', '酒吧', '电影室', '行李寄存', '洗衣'],
    rooms: [
      { id: 1301, name: '四人间床位', bed: '上下铺', area: 12, price: 68, breakfast: false, facilities: ['阅读灯', '插座'] },
      { id: 1302, name: '六人间床位', bed: '上下铺', area: 10, price: 48, breakfast: false, facilities: ['阅读灯', '插座'] },
      { id: 1303, name: '大床房', bed: '大床', area: 20, price: 168, breakfast: false, facilities: ['独立卫浴'] }
    ]
  },
  
  // ========== 更多酒店 ==========
  {
    id: 14,
    name: '璟程·万豪酒店',
    city: '重庆',
    district: '解放碑',
    address: '重庆市渝中区民族路 188 号',
    star: 5,
    rating: 4.7,
    reviews: 2567,
    brand: '万豪',
    type: 'hotel',
    priceRange: 'high',
    img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    desc: '俯瞰长江和嘉陵江交汇，地理位置绝佳。配备行政酒廊和多个餐厅。',
    facilities: ['免费 WiFi', '停车场', '健身房', '游泳池', 'SPA', '餐厅'],
    rooms: [
      { id: 1401, name: '豪华江景房', bed: '大床', area: 50, price: 1888, breakfast: true, facilities: ['江景', '浴缸'] },
      { id: 1402, name: '行政套房', bed: '大床', area: 80, price: 3288, breakfast: true, facilities: ['江景', '客厅', '行政酒廊'] }
    ]
  },
  {
    id: 15,
    name: '璟程·洲际酒店',
    city: '三亚',
    district: '海棠湾',
    address: '三亚市海棠区海棠北路',
    star: 5,
    rating: 4.8,
    reviews: 3890,
    brand: '洲际',
    type: 'hotel',
    priceRange: 'high',
    img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800',
    desc: '一线海景度假村，私人沙滩，多个泳池。配备儿童俱乐部，适合亲子度假。',
    facilities: ['免费 WiFi', '停车场', '健身房', '游泳池', 'SPA', '餐厅', '沙滩', '儿童俱乐部'],
    rooms: [
      { id: 1501, name: '海景大床房', bed: '大床', area: 55, price: 2188, breakfast: true, facilities: ['海景', '阳台', '浴缸'] },
      { id: 1502, name: '家庭套房', bed: '大床 + 双床', area: 90, price: 3688, breakfast: true, facilities: ['海景', '客厅', '儿童设施'] }
    ]
  },
  {
    id: 16,
    name: '璟程·智选假日酒店',
    city: '武汉',
    district: '光谷',
    address: '武汉市洪山区珞喻路 726 号',
    star: 3,
    rating: 4.5,
    reviews: 4123,
    brand: '智选假日',
    type: 'hotel',
    priceRange: 'low',
    img: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800',
    desc: '位于光谷商圈，交通便利。提供免费早餐和 WiFi，性价比高。',
    facilities: ['免费 WiFi', '免费早餐', '健身房', '商务中心'],
    rooms: [
      { id: 1601, name: '标准大床房', bed: '大床', area: 25, price: 258, breakfast: true, facilities: ['城景', '书桌'] },
      { id: 1602, name: '标准双床房', bed: '双床', area: 28, price: 278, breakfast: true, facilities: ['城景', '书桌'] }
    ]
  },
  {
    id: 17,
    name: '璟程·开元名都大酒店',
    city: '苏州',
    district: '工业园区',
    address: '苏州市工业园区星港街 168 号',
    star: 5,
    rating: 4.6,
    reviews: 2890,
    brand: '开元',
    type: 'hotel',
    priceRange: 'high',
    img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
    desc: '俯瞰金鸡湖，毗邻苏州中心。江南园林风格，现代设施完善。',
    facilities: ['免费 WiFi', '停车场', '健身房', '游泳池', 'SPA', '餐厅'],
    rooms: [
      { id: 1701, name: '豪华湖景房', bed: '大床', area: 48, price: 1588, breakfast: true, facilities: ['湖景', '浴缸'] },
      { id: 1702, name: '行政套房', bed: '大床', area: 85, price: 2888, breakfast: true, facilities: ['湖景', '客厅', '行政酒廊'] }
    ]
  },
  {
    id: 18,
    name: '璟程·美居酒店',
    city: '厦门',
    district: '思明区',
    address: '厦门市思明区厦禾路 888 号',
    star: 4,
    rating: 4.5,
    reviews: 3567,
    brand: '美居',
    type: 'hotel',
    priceRange: 'mid',
    img: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800',
    desc: '法式设计风格，位于市中心。步行可达中山路步行街和鼓浪屿码头。',
    facilities: ['免费 WiFi', '健身房', '餐厅', '酒吧', '会议室'],
    rooms: [
      { id: 1801, name: '舒适大床房', bed: '大床', area: 28, price: 398, breakfast: true, facilities: ['城景', '书桌'] },
      { id: 1802, name: '豪华双床房', bed: '双床', area: 32, price: 438, breakfast: true, facilities: ['城景', '书桌'] }
    ]
  },
  {
    id: 19,
    name: '璟程·安隅酒店',
    city: '阳朔',
    district: '遇龙河',
    address: '桂林市阳朔县遇龙河景区',
    star: 5,
    rating: 4.9,
    reviews: 756,
    brand: '璟程精选',
    type: 'homestay',
    priceRange: 'high',
    img: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800',
    desc: '隐于遇龙河畔，喀斯特地貌环绕。设计融合桂北民居特色，配备无边泳池。',
    facilities: ['免费 WiFi', '停车场', '游泳池', '餐厅', '自行车', '竹筏'],
    rooms: [
      { id: 1901, name: '山景大床房', bed: '大床', area: 45, price: 988, breakfast: true, facilities: ['山景', '阳台', '浴缸'] },
      { id: 1902, name: '河景套房', bed: '大床', area: 70, price: 1588, breakfast: true, facilities: ['河景', '客厅', '露台'] }
    ]
  },
  {
    id: 20,
    name: '璟程·桔子酒店',
    city: '长沙',
    district: '五一广场',
    address: '长沙市芙蓉区五一大道 389 号',
    star: 4,
    rating: 4.6,
    reviews: 5234,
    brand: '桔子',
    type: 'hotel',
    priceRange: 'mid',
    img: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800',
    desc: '位于五一广场核心，步行可达黄兴路步行街、坡子街。设计时尚，适合年轻人。',
    facilities: ['免费 WiFi', '健身房', '洗衣房', '餐厅', '机器人服务'],
    rooms: [
      { id: 2001, name: '舒适大床房', bed: '大床', area: 26, price: 328, breakfast: true, facilities: ['城景', '书桌'] },
      { id: 2002, name: '零压大床房', bed: '大床', area: 30, price: 398, breakfast: true, facilities: ['城景', '零压床垫'] }
    ]
  }
];

// 城市列表
const cities = [
  { id: 1, name: '上海', hot: true },
  { id: 2, name: '北京', hot: true },
  { id: 3, name: '广州', hot: true },
  { id: 4, name: '深圳', hot: true },
  { id: 5, name: '杭州', hot: true },
  { id: 6, name: '成都', hot: true },
  { id: 7, name: '重庆', hot: true },
  { id: 8, name: '南京', hot: false },
  { id: 9, name: '西安', hot: true },
  { id: 10, name: '苏州', hot: false },
  { id: 11, name: '三亚', hot: true },
  { id: 12, name: '厦门', hot: false },
  { id: 13, name: '大理', hot: true },
  { id: 14, name: '丽江', hot: true },
  { id: 15, name: '武汉', hot: false },
  { id: 16, name: '长沙', hot: true }
];

// 热门推荐
const hotRecommendations = [
  {
    id: 1,
    title: '海岛度假',
    subtitle: '阳光沙滩',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400',
    hotels: [15]
  },
  {
    id: 2,
    title: '古城探秘',
    subtitle: '历史人文',
    img: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=400',
    hotels: [9, 11, 13]
  },
  {
    id: 3,
    title: '山水桂林',
    subtitle: '甲天下',
    img: 'https://images.unsplash.com/photo-1528659570430-2db8e7406b33?w=400',
    hotels: [19]
  },
  {
    id: 4,
    title: '魔都上海',
    subtitle: '繁华都市',
    img: 'https://images.unsplash.com/photo-1548266652-99cf2789ae73?w=400',
    hotels: [1, 12]
  }
];

// 品牌列表
const brands = [
  { id: 1, name: '丽思卡尔顿', logo: '🏨', type: 'luxury' },
  { id: 2, name: '华尔道夫', logo: '🏨', type: 'luxury' },
  { id: 3, name: '四季', logo: '🏨', type: 'luxury' },
  { id: 4, name: '洲际', logo: '🏨', type: 'luxury' },
  { id: 5, name: '万豪', logo: '🏨', type: 'luxury' },
  { id: 6, name: '亚朵', logo: '🏨', type: 'mid' },
  { id: 7, name: '全季', logo: '🏨', type: 'mid' },
  { id: 8, name: '希尔顿欢朋', logo: '🏨', type: 'mid' },
  { id: 9, name: '美居', logo: '🏨', type: 'mid' },
  { id: 10, name: '桔子', logo: '🏨', type: 'mid' },
  { id: 11, name: '汉庭', logo: '🏨', type: 'budget' },
  { id: 12, name: '锦江之星', logo: '🏨', type: 'budget' },
  { id: 13, name: '智选假日', logo: '🏨', type: 'budget' },
  { id: 14, name: '璟程精选民宿', logo: '🏡', type: 'homestay' },
  { id: 15, name: '背包十年', logo: '🎒', type: 'hostel' },
  { id: 16, name: '雅诗阁', logo: '🏢', type: 'apartment' }
];

// 工具函数
const api = {
  // 获取所有酒店
  getAllHotels() {
    return hotels;
  },
  
  // 根据 ID 获取酒店
  getHotel(id) {
    return hotels.find(h => h.id === id);
  },
  
  // 根据城市筛选
  getByCity(city) {
    return hotels.filter(h => h.city === city);
  },
  
  // 根据价格区间筛选
  getByPriceRange(range) {
    return hotels.filter(h => h.priceRange === range);
  },
  
  // 根据类型筛选
  getByType(type) {
    return hotels.filter(h => h.type === type);
  },
  
  // 搜索酒店
  search(keyword) {
    const lower = keyword.toLowerCase();
    return hotels.filter(h => 
      h.name.toLowerCase().includes(lower) ||
      h.city.toLowerCase().includes(lower) ||
      h.district.toLowerCase().includes(lower) ||
      h.brand.toLowerCase().includes(lower)
    );
  },
  
  // 获取推荐酒店
  getRecommendations() {
    return hotels.filter(h => h.rating >= 4.7).slice(0, 6);
  },
  
  // 获取热门城市酒店
  getHotCities() {
    return cities.filter(c => c.hot);
  }
};

// 本地存储工具
const store = {
  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
      return defaultValue;
    }
  },
  
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('存储失败:', e);
    }
  },
  
  remove(key) {
    localStorage.removeItem(key);
  }
};

// 暴露到全局作用域
window.api = api;
window.store = store;
window.hotels = hotels;
window.cities = cities;
window.hotRecommendations = hotRecommendations;
window.brands = brands;
console.log("✅ 数据模块已加载");

