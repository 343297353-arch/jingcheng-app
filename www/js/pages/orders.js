// ============ 订单管理页 ============
const OrdersPage = {
  setup() {
    const navigate = inject('navigate');
    const showToast = inject('showToast');
    
    const activeTab = ref('all');
    const tabs = [
      { key: 'all', label: '全部' },
      { key: 'pending', label: '待入住' },
      { key: 'completed', label: '已完成' },
      { key: 'cancelled', label: '已取消' }
    ];
    
    const statusLabels = {
      pending: '待入住',
      completed: '已完成',
      cancelled: '已取消'
    };
    
    const statusColors = {
      pending: 'var(--primary)',
      completed: 'var(--success)',
      cancelled: 'var(--text-muted)'
    };
    
    const orders = ref(store.get('orders', []));
    
    const filteredOrders = computed(() => {
      if (activeTab.value === 'all') return orders.value;
      return orders.value.filter(o => o.status === activeTab.value);
    });
    
    function formatDate(d) {
      return new Date(d).toLocaleDateString('zh-CN');
    }
    
    function cancelOrder(order) {
      if (!confirm('确定要取消这个订单吗？')) return;
      order.status = 'cancelled';
      store.set('orders', [...orders.value]);
      showToast('订单已取消');
    }
    
    function reviewOrder(order) {
      showToast('评价功能即将上线');
    }
    
    return {
      activeTab, tabs, statusLabels, statusColors,
      orders: filteredOrders, formatDate, cancelOrder, reviewOrder, navigate
    };
  },
  template: `
    <div class="orders-page">
      <div class="header-bar">
        <div style="font-size:17px;font-weight:700">我的订单</div>
      </div>
      
      <!-- 订单 Tab -->
      <div style="display:flex;background:var(--white);border-bottom:1px solid var(--gray-light)">
        <div v-for="tab in tabs" :key="tab.key" 
          style="flex:1;text-align:center;padding:14px 0;font-size:14px;position:relative;cursor:pointer"
          :style="{color: activeTab === tab.key ? 'var(--primary)' : 'var(--text-light)', fontWeight: activeTab === tab.key ? '600' : '400'}"
          @click="activeTab = tab.key">
          {{ tab.label }}
          <div v-if="activeTab === tab.key" style="position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:32px;height:3px;background:var(--primary);border-radius:2px"></div>
        </div>
      </div>
      
      <!-- 订单列表 -->
      <div v-if="orders.length > 0" style="padding:12px 16px">
        <div v-for="order in orders" :key="order.id" class="card" style="margin:12px 0;padding:16px">
          <div class="flex-between mb-8">
            <span style="font-size:12px;color:var(--text-muted)">订单号：{{ order.id }}</span>
            <span style="font-size:13px;font-weight:600" :style="{color: statusColors[order.status]}">{{ statusLabels[order.status] }}</span>
          </div>
          
          <div style="display:flex;gap:12px">
            <div style="width:80px;height:60px;border-radius:10px;overflow:hidden;flex-shrink:0;background:var(--gray-light)">
              <img v-if="order.hotel_img" :src="order.hotel_img" style="width:100%;height:100%;object-fit:cover">
              <div v-else class="placeholder-img ph-1" style="width:100%;height:100%;font-size:10px">{{ order.hotel_city }}</div>
            </div>
            <div style="flex:1;min-width:0">
              <div style="font-size:15px;font-weight:600" class="ellipsis">{{ order.hotel_name }}</div>
              <div style="font-size:12px;color:var(--text-light);margin-top:2px">{{ order.room_type }}</div>
              <div style="font-size:12px;color:var(--text-light);margin-top:2px">{{ order.check_in }} ~ {{ order.check_out }} · {{ order.nights }}晚</div>
            </div>
          </div>
          
          <div class="flex-between mt-12" style="border-top:1px solid var(--gray-light);padding-top:12px">
            <span style="font-size:13px;color:var(--text-muted)">入住人：{{ order.guest }}</span>
            <div style="display:flex;gap:12px;align-items:center">
              <span style="font-size:18px;font-weight:700;color:var(--primary)">¥{{ order.total }}</span>
              <button v-if="order.status === 'pending'" class="btn btn-outline btn-sm" @click="cancelOrder(order)">取消</button>
              <button v-if="order.status === 'completed'" class="btn btn-primary btn-sm" @click="reviewOrder(order)">评价</button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 空状态 -->
      <div v-else class="empty-state">
        <svg viewBox="0 0 24 24" style="width:80px;height:80px"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" fill="#e0e0e0"/><path d="M14 2v6h6" fill="none" stroke="#ccc" stroke-width="1.5"/></svg>
        <p>暂无订单</p>
        <button class="btn btn-primary btn-sm mt-16" @click="navigate('hotels')">去订酒店</button>
      </div>
      
      <div style="height:20px"></div>
    </div>
  `
};
