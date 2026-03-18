// ============ 璟程 v2.0 - 主应用逻辑 ============
const { createApp, ref, reactive, computed, onMounted, provide } = Vue;

const app = createApp({
  setup() {
    const currentPage = ref('home');
    const pageHistory = ref([]);
    const pageTransition = ref('slide-left');
    const loading = ref(false);
    
    const toast = reactive({
      show: false,
      msg: '',
      timer: null
    });
    
    const showTabBar = computed(() => {
      return ['home', 'hotels', 'orders', 'ai-assistant', 'profile'].includes(currentPage.value);
    });
    
    const user = reactive(store.get('user', {
      id: null,
      nickname: '璟程用户',
      phone: '',
      avatar: null,
      member_level: 'normal',
      total_spent: 0,
      points: 0,
      invite_code: 'JC' + Math.random().toString(36).substr(2, 6).toUpperCase(),
      invite_count: 0,
      share_earnings: 0
    }));
    
    function showToast(msg, duration = 2000) {
      if (toast.timer) clearTimeout(toast.timer);
      toast.msg = msg;
      toast.show = true;
      toast.timer = setTimeout(() => { toast.show = false; }, duration);
    }
    
    function saveUser() {
      store.set('user', { ...user });
    }
    
    function navigate(page, pushHistory = true) {
      if (page === currentPage.value) return;
      if (pushHistory) pageHistory.value.push(currentPage.value);
      pageTransition.value = 'slide-left';
      currentPage.value = page;
      location.hash = `#/${page}`;
    }
    
    function goBack() {
      const prev = pageHistory.value.pop();
      if (prev) {
        pageTransition.value = 'slide-right';
        currentPage.value = prev;
      } else {
        navigate('home', false);
      }
    }
    
    function openHotelDetail(hotel) {
      store.set('currentHotel', hotel);
      navigate('hotel-detail');
    }
    
    function handleHash() {
      const hash = location.hash.replace('#/', '') || 'home';
      const validPages = ['home', 'hotels', 'hotel-detail', 'booking', 'orders', 'ai-assistant', 'profile'];
      if (validPages.includes(hash)) {
        pageHistory.value = [];
        currentPage.value = hash;
      }
    }
    
    onMounted(() => {
      window.addEventListener('hashchange', handleHash);
      handleHash();
    });
    
    provide('showToast', showToast);
    provide('navigate', navigate);
    provide('goBack', goBack);
    provide('user', user);
    provide('saveUser', saveUser);
    provide('loading', loading);
    provide('openHotelDetail', openHotelDetail);
    
    return {
      currentPage, pageTransition, loading, toast, showTabBar, user,
      navigate, goBack, showToast
    };
  }
});

// 注册所有页面组件
app.component('home-page', HomePage);
app.component('hotels-page', HotelsPage);
app.component('hotel-detail-page', HotelDetailPage);
app.component('booking-page', BookingPage);
app.component('orders-page', OrdersPage);
app.component('ai-assistant-page', AIAssistantPage);
app.component('profile-page', ProfilePage);

app.mount('#app');
window.__app = app;
