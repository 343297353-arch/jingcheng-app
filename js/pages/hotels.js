// ============ 酒店列表页 ============
const HotelsPage = {
  setup() {
    const navigate = inject('navigate');
    const openHotelDetail = inject('openHotelDetail');
    const showToast = inject('showToast');
    
    const searchQuery = ref(store.get('searchQuery', ''));
    const filterCity = ref(store.get('filterCity', ''));
    const filterType = ref(store.get('filterType', 'all'));
    const filterPrice = ref('all');
    const sortBy = ref('recommend');
    
    const allHotels = ref(api.getAllHotels());
    
    const filteredHotels = computed(() => {
      let result = [...allHotels.value];
      
      if (filterCity.value) {
        result = result.filter(h => h.city === filterCity.value);
      }
      
      if (filterType.value !== 'all') {
        result = result.filter(h => h.type === filterType.value);
      }
      
      if (filterPrice.value === 'low') {
        result = result.filter(h => h.priceRange === 'low');
      } else if (filterPrice.value === 'mid') {
        result = result.filter(h => h.priceRange === 'mid');
      } else if (filterPrice.value === 'high') {
        result = result.filter(h => h.priceRange === 'high');
      }
      
      if (searchQuery.value) {
        result = result.filter(h => 
          h.name.includes(searchQuery.value) ||
          h.city.includes(searchQuery.value) ||
          h.district.includes(searchQuery.value)
        );
      }
      
      if (sortBy.value === 'price_asc') {
        result.sort((a, b) => a.rooms[0].price - b.rooms[0].price);
      } else if (sortBy.value === 'price_desc') {
        result.sort((a, b) => b.rooms[0].price - a.rooms[0].price);
      } else if (sortBy.value === 'rating') {
        result.sort((a, b) => b.rating - a.rating);
      }
      
      return result;
    });
    
    const typeOptions = [
      { key: 'all', label: '全部', icon: '🏨' },
      { key: 'hotel', label: '酒店', icon: '🏨' },
      { key: 'homestay', label: '民宿', icon: '🏡' },
      { key: 'apartment', label: '公寓', icon: '🏢' },
      { key: 'hostel', label: '青旅', icon: '🎒' }
    ];
    
    const priceOptions = [
      { key: 'all', label: '全部价位' },
      { key: 'low', label: '经济型' },
      { key: 'mid', label: '中端' },
      { key: 'high', label: '高端' }
    ];
    
    function clearFilters() {
      filterCity.value = '';
      filterType.value = 'all';
      filterPrice.value = 'all';
      searchQuery.value = '';
      store.remove('filterCity');
      store.remove('filterType');
      store.remove('searchQuery');
    }
    
    return {
      searchQuery, filterCity, filterType, filterPrice, sortBy,
      filteredHotels, typeOptions, priceOptions,
      navigate, openHotelDetail, clearFilters
    };
  },
  template: `
    <div class="hotels-page">
      <div class="header-bar">
        <div class="back-btn" @click="navigate('home')">
          <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
        </div>
        <div class="title">酒店列表</div>
        <div style="width:40px"></div>
      </div>
      
      <!-- 搜索框 -->
      <div style="padding:12px 16px;background:var(--white);border-bottom:1px solid var(--gray-light)">
        <div class="search-input-wrap" style="box-shadow:none;border:1px solid var(--gray-light)">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
          <input v-model="searchQuery" placeholder="搜索酒店">
        </div>
      </div>
      
      <!-- 类型筛选 -->
      <div class="filter-bar">
        <div v-for="opt in typeOptions" :key="opt.key" class="filter-chip" :class="{ active: filterType === opt.key }" @click="filterType = opt.key">
          {{ opt.icon }} {{ opt.label }}
        </div>
      </div>
      
      <!-- 价格筛选 -->
      <div class="filter-bar" style="border-top:1px solid var(--gray-light)">
        <div v-for="opt in priceOptions" :key="opt.key" class="filter-chip" :class="{ active: filterPrice === opt.key }" @click="filterPrice = opt.key">
          {{ opt.label }}
        </div>
        <div style="margin-left:auto;display:flex;align-items:center;gap:8px">
          <span style="font-size:13px;color:var(--text-muted)">排序：</span>
          <select v-model="sortBy" style="padding:6px 10px;border:1px solid var(--gray-light);border-radius:6px;font-size:13px">
            <option value="recommend">推荐</option>
            <option value="rating">评分优先</option>
            <option value="price_asc">价格低到高</option>
            <option value="price_desc">价格高到低</option>
          </select>
        </div>
      </div>
      
      <!-- 结果统计 -->
      <div style="padding:12px 16px;font-size:13px;color:var(--text-muted)">
        共找到 <strong style="color:var(--primary)">{{ filteredHotels.length }}</strong> 家住宿
        <button v-if="filterCity || filterType !== 'all' || filterPrice !== 'all'" @click="clearFilters" style="margin-left:8px;color:var(--primary);background:none;border:none;font-size:13px;cursor:pointer">清空筛选</button>
      </div>
      
      <!-- 酒店列表 -->
      <div v-if="filteredHotels.length > 0">
        <div v-for="hotel in filteredHotels" :key="hotel.id" class="hotel-card" @click="openHotelDetail(hotel)">
          <div class="hotel-card-img">
            <img :src="hotel.img" :alt="hotel.name" loading="lazy">
            <div v-if="hotel.type === 'homestay'" style="position:absolute;top:8px;left:8px;padding:3px 8px;background:var(--gradient-coral);border-radius:6px;font-size:10px;font-weight:600">民宿</div>
            <div v-if="hotel.star >= 5" style="position:absolute;top:8px;right:8px;padding:3px 8px;background:rgba(0,0,0,0.6);border-radius:6px;font-size:10px;color:#fff">{{ '★'.repeat(hotel.star) }}</div>
          </div>
          <div class="hotel-card-info">
            <div>
              <div class="hotel-card-name ellipsis">{{ hotel.name }}</div>
              <div class="hotel-card-address ellipsis">📍 {{ hotel.address }}</div>
              <div style="display:flex;gap:8px;margin-top:6px;flex-wrap:wrap">
                <span v-if="hotel.brand" class="tag tag-primary">{{ hotel.brand }}</span>
                <span class="tag tag-blue">{{ hotel.type === 'hotel' ? '酒店' : hotel.type === 'homestay' ? '民宿' : hotel.type === 'apartment' ? '公寓' : '青旅' }}</span>
              </div>
              <div class="rating mt-8">
                <svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <span>{{ hotel.rating }}</span>
                <span style="color:var(--text-muted);font-weight:400">({{ hotel.reviews }}条)</span>
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
      </div>
      
      <!-- 空状态 -->
      <div v-else class="empty-state">
        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#ccc"/></svg>
        <p>暂无符合条件的住宿</p>
        <button class="btn btn-primary btn-sm mt-12" @click="clearFilters">清除筛选</button>
      </div>
      
      <div style="height:20px"></div>
    </div>
  `
};
