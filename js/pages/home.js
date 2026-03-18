// ============ 首页组件 ============
const HomePage = {
  setup() {
    const navigate = inject('navigate');
    const openHotelDetail = inject('openHotelDetail');
    const showToast = inject('showToast');
    
    const searchQuery = ref('');
    const checkIn = ref(new Date().toISOString().split('T')[0]);
    const checkOut = ref(new Date(Date.now() + 86400000).toISOString().split('T')[0]);
    const guests = ref(2);
    
    const hotCities = ref(api.getHotCities());
    const recommendations = ref(api.getRecommendations());
    const hotRecommends = ref(hotRecommendations);
    
    const categories = [
      { icon: '🏨', name: '酒店', type: 'hotel' },
      { icon: '🏡', name: '民宿', type: 'homestay' },
      { icon: '🏢', name: '公寓', type: 'apartment' },
      { icon: '🎒', name: '青旅', type: 'hostel' }
    ];
    
    function search() {
      if (searchQuery.value.trim()) {
        store.set('searchQuery', searchQuery.value);
        navigate('hotels');
      } else {
        showToast('请输入目的地或酒店名称');
      }
    }
    
    function selectCategory(type) {
      store.set('filterType', type);
      navigate('hotels');
    }
    
    function selectCity(city) {
      store.set('filterCity', city);
      navigate('hotels');
    }
    
    return {
      searchQuery, checkIn, checkOut, guests,
      hotCities, recommendations, hotRecommends, categories,
      search, selectCategory, selectCity, openHotelDetail, navigate
    };
  },
  template: `
    <div class="home-page">
      <!-- 搜索栏 -->
      <div class="search-bar">
        <div class="search-input-wrap">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
          <input v-model="searchQuery" placeholder="搜索目的地、酒店名称" @keyup.enter="search">
        </div>
      </div>
      
      <!-- 日期选择 -->
      <div style="padding:12px 16px;background:var(--white);display:flex;gap:12px">
        <div style="flex:1;padding:10px 14px;background:var(--bg);border-radius:10px">
          <div style="font-size:11px;color:var(--text-muted);margin-bottom:4px">入住</div>
          <input type="date" v-model="checkIn" style="width:100%;background:none;border:none;font-size:13px;font-weight:600">
        </div>
        <div style="flex:1;padding:10px 14px;background:var(--bg);border-radius:10px">
          <div style="font-size:11px;color:var(--text-muted);margin-bottom:4px">离店</div>
          <input type="date" v-model="checkOut" style="width:100%;background:none;border:none;font-size:13px;font-weight:600">
        </div>
        <div style="padding:10px 14px;background:var(--bg);border-radius:10px">
          <div style="font-size:11px;color:var(--text-muted);margin-bottom:4px">人数</div>
          <select v-model="guests" style="background:none;border:none;font-size:13px;font-weight:600">
            <option>1 人</option>
            <option>2 人</option>
            <option>3 人</option>
            <option>4 人+</option>
          </select>
        </div>
      </div>
      
      <!-- 分类导航 -->
      <div class="category-grid">
        <div v-for="cat in categories" :key="cat.name" class="category-item" @click="selectCategory(cat.type)">
          <div class="category-icon" style="background:linear-gradient(135deg, var(--primary), var(--primary-light))">{{ cat.icon }}</div>
          <div class="category-name">{{ cat.name }}</div>
        </div>
      </div>
      
      <div class="divider"></div>
      
      <!-- 热门城市 -->
      <div class="section-header">
        <div class="section-title">热门城市</div>
        <div class="section-more" @click="navigate('hotels')">全部 <svg viewBox="0 0 24 24" style="width:14px;height:14px;fill:currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg></div>
      </div>
      <div class="h-scroll">
        <div v-for="city in hotCities" :key="city.id" style="padding:8px 16px;background:var(--primary);color:#fff;border-radius:20px;font-size:13px;font-weight:500;cursor:pointer" @click="selectCity(city.name)">{{ city.name }}</div>
      </div>
      
      <div class="divider"></div>
      
      <!-- 智能推荐 -->
      <div class="section-header">
        <div class="section-title">
          <span style="background:var(--gradient-accent);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-weight:700">✨ AI 智能推荐</span>
        </div>
      </div>
      <div v-for="hotel in recommendations" :key="hotel.id" class="hotel-card" @click="openHotelDetail(hotel)">
        <div class="hotel-card-img">
          <img :src="hotel.img" :alt="hotel.name" loading="lazy">
          <div v-if="hotel.star >= 5" style="position:absolute;top:8px;left:8px;padding:3px 8px;background:var(--gradient-accent);border-radius:6px;font-size:10px;font-weight:600;color:var(--dark)">豪华</div>
        </div>
        <div class="hotel-card-info">
          <div>
            <div class="hotel-card-name ellipsis">{{ hotel.name }}</div>
            <div class="hotel-card-address ellipsis">📍 {{ hotel.city }}·{{ hotel.district }}</div>
            <div class="rating mt-8">
              <svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              <span>{{ hotel.rating }}</span>
              <span style="color:var(--text-muted);font-weight:400">({{ hotel.reviews }}条评价)</span>
            </div>
          </div>
          <div class="hotel-card-footer">
            <div class="price-tag">
              <span class="currency">¥</span>
              <span class="amount" style="color:var(--primary)">{{ hotel.rooms[0].price }}</span>
              <span style="font-size:12px;color:var(--text-muted)">起</span>
            </div>
            <button class="btn btn-primary btn-sm">预订</button>
          </div>
        </div>
      </div>
      
      <div class="divider"></div>
      
      <!-- 主题推荐 -->
      <div class="section-header">
        <div class="section-title">主题推荐</div>
      </div>
      <div class="h-scroll">
        <div v-for="rec in hotRecommends" :key="rec.id" style="width:200px;height:140px;border-radius:14px;overflow:hidden;position:relative;flex-shrink:0;cursor:pointer" @click="navigate('hotels')">
          <img :src="rec.img" style="width:100%;height:100%;object-fit:cover">
          <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.7),transparent)"></div>
          <div style="position:absolute;bottom:12px;left:12px;color:#fff">
            <div style="font-size:15px;font-weight:700">{{ rec.title }}</div>
            <div style="font-size:12px;opacity:0.9">{{ rec.subtitle }}</div>
          </div>
        </div>
      </div>
      
      <div style="height:20px"></div>
    </div>
  `
};
