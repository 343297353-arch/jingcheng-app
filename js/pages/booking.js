// ============ 预订页面 ============
const BookingPage = {
  setup() {
    const goBack = inject('goBack');
    const navigate = inject('navigate');
    const showToast = inject('showToast');
    const user = inject('user');
    const saveUser = inject('saveUser');
    
    const hotel = reactive(store.get('currentHotel', {}));
    const room = reactive(store.get('currentRoom', {}));
    const step = ref(1);
    
    const guestName = ref(user.nickname || '');
    const guestPhone = ref(user.phone || '');
    const guestId = ref('');
    const payMethod = ref('wechat');
    
    const today = new Date();
    const checkIn = ref(today.toISOString().split('T')[0]);
    const tom = new Date(today);
    tom.setDate(today.getDate() + 1);
    const checkOut = ref(tom.toISOString().split('T')[0]);
    
    const nights = computed(() => {
      const d1 = new Date(checkIn.value);
      const d2 = new Date(checkOut.value);
      return Math.max(1, Math.round((d2 - d1) / 86400000));
    });
    
    const totalPrice = computed(() => (room.price || 0) * nights.value);
    const serviceFee = computed(() => Math.round(totalPrice.value * 0.05));
    const grandTotal = computed(() => totalPrice.value + serviceFee.value);
    
    function confirmBooking() {
      if (!guestName.value.trim()) {
        showToast('请输入入住人姓名');
        return;
      }
      if (!guestPhone.value.trim() || guestPhone.value.length < 11) {
        showToast('请输入正确手机号');
        return;
      }
      if (!guestId.value.trim()) {
        showToast('请输入身份证号');
        return;
      }
      if (new Date(checkOut.value) <= new Date(checkIn.value)) {
        showToast('离店日期需晚于入住日期');
        return;
      }
      step.value = 2;
    }
    
    function submitPayment() {
      const orders = store.get('orders', []);
      orders.unshift({
        id: 'JC' + Date.now(),
        hotel_id: hotel.id,
        hotel_name: hotel.name,
        hotel_city: hotel.city,
        hotel_img: hotel.img,
        room_type: room.name,
        check_in: checkIn.value,
        check_out: checkOut.value,
        nights: nights.value,
        total: grandTotal.value,
        status: 'pending',
        created_at: new Date().toISOString(),
        guest: guestName.value,
        phone: guestPhone.value,
        pay_method: payMethod.value
      });
      store.set('orders', orders);
      
      user.total_spent += grandTotal.value;
      user.points += Math.round(grandTotal.value / 10);
      saveUser();
      
      showToast('🎉 预订成功！祝您入住愉快');
      setTimeout(() => navigate('orders'), 1500);
    }
    
    return {
      hotel, room, step, guestName, guestPhone, guestId, checkIn, checkOut,
      nights, payMethod, totalPrice, serviceFee, grandTotal,
      confirmBooking, submitPayment, goBack
    };
  },
  template: `
    <div class="booking-page">
      <div class="header-bar">
        <div class="back-btn" @click="goBack">
          <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
        </div>
        <div class="title">{{ step === 1 ? '确认预订' : '支付订单' }}</div>
        <div style="width:40px"></div>
      </div>
      
      <template v-if="step === 1">
        <!-- 酒店摘要 -->
        <div class="card" style="padding:14px">
          <div style="display:flex;gap:12px">
            <div style="width:90px;height:70px;border-radius:10px;overflow:hidden;flex-shrink:0;background:var(--gray-light)">
              <img :src="hotel.img" style="width:100%;height:100%;object-fit:cover">
            </div>
            <div style="flex:1">
              <div style="font-size:15px;font-weight:600">{{ hotel.name }}</div>
              <div style="font-size:13px;color:var(--text-light);margin-top:4px">{{ room.name }}</div>
              <div class="rating mt-6">
                <svg viewBox="0 0 24 24" style="width:14px;height:14px"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <span>{{ hotel.rating }}</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 日期选择 -->
        <div class="card" style="padding:14px">
          <div style="font-size:15px;font-weight:600;margin-bottom:12px">入住信息</div>
          <div style="display:flex;gap:12px">
            <div style="flex:1">
              <div style="font-size:12px;color:var(--text-muted);margin-bottom:6px">入住日期</div>
              <input type="date" v-model="checkIn" style="width:100%;padding:12px;border:1px solid var(--gray-light);border-radius:10px;font-size:14px">
            </div>
            <div style="display:flex;align-items:center;padding-top:24px;color:var(--text-muted)">→</div>
            <div style="flex:1">
              <div style="font-size:12px;color:var(--text-muted);margin-bottom:6px">离店日期</div>
              <input type="date" v-model="checkOut" :min="checkIn" style="width:100%;padding:12px;border:1px solid var(--gray-light);border-radius:10px;font-size:14px">
            </div>
          </div>
          <div style="text-align:center;margin-top:12px;font-size:14px;color:var(--primary);font-weight:600">共 {{ nights }} 晚</div>
        </div>
        
        <!-- 入住人信息 -->
        <div class="card" style="padding:14px">
          <div style="font-size:15px;font-weight:600;margin-bottom:12px">入住人信息</div>
          <div style="margin-bottom:12px">
            <div style="font-size:12px;color:var(--text-muted);margin-bottom:6px">姓名</div>
            <input v-model="guestName" placeholder="请输入入住人姓名" style="width:100%;padding:12px;border:1px solid var(--gray-light);border-radius:10px;font-size:14px">
          </div>
          <div style="margin-bottom:12px">
            <div style="font-size:12px;color:var(--text-muted);margin-bottom:6px">手机号</div>
            <input v-model="guestPhone" placeholder="请输入手机号" maxlength="11" type="tel" style="width:100%;padding:12px;border:1px solid var(--gray-light);border-radius:10px;font-size:14px">
          </div>
          <div>
            <div style="font-size:12px;color:var(--text-muted);margin-bottom:6px">身份证号</div>
            <input v-model="guestId" placeholder="请输入身份证号" maxlength="18" style="width:100%;padding:12px;border:1px solid var(--gray-light);border-radius:10px;font-size:14px">
          </div>
        </div>
        
        <!-- 价格明细 -->
        <div class="card" style="padding:14px">
          <div style="font-size:15px;font-weight:600;margin-bottom:12px">价格明细</div>
          <div class="flex-between" style="font-size:14px;margin-bottom:8px">
            <span style="color:var(--text-light)">房费 ¥{{ room.price }} × {{ nights }}晚</span>
            <span>¥{{ totalPrice }}</span>
          </div>
          <div class="flex-between" style="font-size:14px;margin-bottom:8px">
            <span style="color:var(--text-light)">服务费</span>
            <span>¥{{ serviceFee }}</span>
          </div>
          <div style="border-top:1px dashed var(--gray-light);padding-top:12px;margin-top:8px" class="flex-between">
            <span style="font-size:16px;font-weight:700">合计</span>
            <span style="font-size:20px;font-weight:700;color:var(--primary)">¥{{ grandTotal }}</span>
          </div>
        </div>
        
        <div style="padding:16px">
          <button class="btn btn-primary full" @click="confirmBooking">确认预订</button>
        </div>
      </template>
      
      <template v-if="step === 2">
        <div class="card" style="padding:24px;text-align:center;margin-top:16px">
          <div style="font-size:14px;color:var(--text-light);margin-bottom:8px">应付金额</div>
          <div style="font-size:42px;font-weight:700;color:var(--primary)">¥{{ grandTotal }}</div>
        </div>
        
        <div class="card" style="padding:14px">
          <div style="font-size:15px;font-weight:600;margin-bottom:12px">支付方式</div>
          <label style="display:flex;align-items:center;gap:12px;padding:14px;border:2px solid;border-radius:12px;margin-bottom:10px;cursor:pointer" :style="{borderColor: payMethod === 'wechat' ? '#07C160' : 'var(--gray-light)'}">
            <span style="font-size:28px">📱</span>
            <div style="flex:1">
              <div style="font-size:15px;font-weight:600">微信支付</div>
              <div style="font-size:12px;color:var(--text-light)">推荐使用</div>
            </div>
            <div style="width:22px;height:22px;border-radius:50%;border:2px solid;display:flex;align-items:center;justify-content:center" :style="{borderColor: payMethod === 'wechat' ? '#07C160' : '#ccc'}">
              <div v-if="payMethod === 'wechat'" style="width:14px;height:14px;border-radius:50%;background:#07C160"></div>
            </div>
            <input type="radio" v-model="payMethod" value="wechat" style="display:none">
          </label>
          
          <label style="display:flex;align-items:center;gap:12px;padding:14px;border:2px solid;border-radius:12px;cursor:pointer" :style="{borderColor: payMethod === 'alipay' ? '#1677FF' : 'var(--gray-light)'}">
            <span style="font-size:28px">💳</span>
            <div style="flex:1">
              <div style="font-size:15px;font-weight:600">支付宝</div>
              <div style="font-size:12px;color:var(--text-light)">快捷支付</div>
            </div>
            <div style="width:22px;height:22px;border-radius:50%;border:2px solid;display:flex;align-items:center;justify-content:center" :style="{borderColor: payMethod === 'alipay' ? '#1677FF' : '#ccc'}">
              <div v-if="payMethod === 'alipay'" style="width:14px;height:14px;border-radius:50%;background:#1677FF"></div>
            </div>
            <input type="radio" v-model="payMethod" value="alipay" style="display:none">
          </label>
        </div>
        
        <div class="card" style="padding:14px">
          <div style="font-size:14px;font-weight:600;margin-bottom:8px">{{ hotel.name }}</div>
          <div style="font-size:13px;color:var(--text-light)">{{ room.name }} · {{ nights }}晚</div>
          <div style="font-size:13px;color:var(--text-light);margin-top:4px">入住人：{{ guestName }}</div>
        </div>
        
        <div style="padding:16px">
          <button class="btn btn-primary full" @click="submitPayment">立即支付 ¥{{ grandTotal }}</button>
        </div>
      </template>
    </div>
  `
};
