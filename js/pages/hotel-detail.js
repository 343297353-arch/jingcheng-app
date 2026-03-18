// ============ 酒店详情页 ============
const HotelDetailPage = {
  setup() {
    const goBack = inject('goBack');
    const navigate = inject('navigate');
    const openHotelDetail = inject('openHotelDetail');
    const hotel = reactive(store.get('currentHotel', {}));
    const currentImg = ref(0);
    const showAllRooms = ref(false);
    
    if (!hotel.id) {
      const hotels = api.getAllHotels();
      Object.assign(hotel, hotels[0]);
    }
    
    const visibleRooms = computed(() => {
      return showAllRooms.value ? (hotel.rooms || []) : (hotel.rooms || []).slice(0, 3);
    });
    
    function bookRoom(room) {
      store.set('currentHotel', { ...hotel });
      store.set('currentRoom', room);
      navigate('booking');
    }
    
    return { hotel, currentImg, showAllRooms, visibleRooms, goBack, bookRoom };
  },
  template: `
    <div class="hotel-detail-page">
      <div class="header-bar" style="position:absolute;z-index:10;background:transparent">
        <div class="back-btn" style="background:rgba(0,0,0,0.3)" @click="goBack">
          <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
        </div>
        <div class="title">{{ hotel.name }}</div>
        <div style="width:40px"></div>
      </div>
      
      <!-- 图片轮播 -->
      <div class="carousel" style="height:280px">
        <div class="carousel-track" :style="{ transform: 'translateX(-' + currentImg*100 + '%)' }">
          <div class="carousel-item" v-if="hotel.images && hotel.images.length > 0">
            <img v-for="(img, idx) in hotel.images" :key="idx" :src="img" style="width:100%;height:280px;object-fit:cover">
          </div>
          <div class="carousel-item" v-else>
            <img :src="hotel.img" style="width:100%;height:280px;object-fit:cover">
          </div>
        </div>
        <div class="carousel-dots" v-if="hotel.images && hotel.images.length > 1">
          <div v-for="(img, idx) in hotel.images" :key="idx" class="carousel-dot" :class="{ active: currentImg === idx }"></div>
        </div>
      </div>
      
      <!-- 酒店信息 -->
      <div style="padding:16px;background:var(--white)">
        <div style="display:flex;align-items:baseline;gap:8px;flex-wrap:wrap">
          <span style="font-size:20px;font-weight:700">{{ hotel.name }}</span>
          <span class="tag tag-accent">{{ '★'.repeat(hotel.star || 5) }}</span>
          <span v-if="hotel.brand" class="tag tag-primary">{{ hotel.brand }}</span>
        </div>
        <div style="font-size:13px;color:var(--text-light);margin-top:8px">📍 {{ hotel.address }}</div>
        <div class="flex-between mt-12">
          <div class="rating" style="font-size:14px">
            <svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            <span>{{ hotel.rating }}分</span>
            <span style="color:var(--text-muted);font-weight:400;margin-left:4px">({{ hotel.reviews }}条评价)</span>
          </div>
          <div style="font-size:13px;color:var(--primary);cursor:pointer">查看地图 →</div>
        </div>
      </div>
      
      <div class="divider"></div>
      
      <!-- 酒店介绍 -->
      <div style="padding:16px;background:var(--white)">
        <div style="font-size:16px;font-weight:700;margin-bottom:12px">酒店介绍</div>
        <p style="font-size:14px;color:var(--text-light);line-height:1.8">{{ hotel.desc }}</p>
      </div>
      
      <div class="divider"></div>
      
      <!-- 设施 -->
      <div style="padding:16px;background:var(--white)">
        <div style="font-size:16px;font-weight:700;margin-bottom:12px">酒店设施</div>
        <div style="display:flex;flex-wrap:wrap;gap:8px">
          <span v-for="f in hotel.facilities" :key="f" class="tag tag-primary" style="font-size:12px">{{ f }}</span>
        </div>
      </div>
      
      <div class="divider"></div>
      
      <!-- 房型列表 -->
      <div style="padding:16px;background:var(--white)">
        <div style="font-size:16px;font-weight:700;margin-bottom:16px">选择房型</div>
        <div v-for="room in visibleRooms" :key="room.id" style="border:1px solid var(--gray-light);border-radius:12px;padding:14px;margin-bottom:12px">
          <div class="flex-between" style="align-items:flex-start">
            <div style="flex:1">
              <div style="font-size:15px;font-weight:600;margin-bottom:6px">{{ room.name }}</div>
              <div style="font-size:12px;color:var(--text-light);margin-bottom:8px">
                <span v-if="room.breakfast" class="tag tag-green" style="margin-right:6px">含早</span>
                {{ room.bed }} · {{ room.area }}㎡ · 可住 2 人
              </div>
              <div style="display:flex;gap:6px;flex-wrap:wrap">
                <span v-for="f in room.facilities" :key="f" style="font-size:11px;color:var(--text-muted);background:var(--bg);padding:3px 8px;border-radius:4px">{{ f }}</span>
              </div>
            </div>
            <div style="text-align:right;margin-left:12px">
              <div style="margin-bottom:8px">
                <span style="color:var(--primary);font-size:22px;font-weight:700">¥{{ room.price }}</span>
                <span style="font-size:12px;color:var(--text-muted)">/晚</span>
              </div>
              <button class="btn btn-primary btn-sm" @click="bookRoom(room)">预订</button>
            </div>
          </div>
        </div>
        <div v-if="!showAllRooms && hotel.rooms && hotel.rooms.length > 3" style="text-align:center;padding:8px">
          <button class="btn btn-outline btn-sm" @click="showAllRooms = true">查看更多房型 (共{{ hotel.rooms.length }}种)</button>
        </div>
      </div>
      
      <div style="height:80px"></div>
    </div>
  `
};
