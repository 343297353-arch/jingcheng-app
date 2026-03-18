// ============ 个人中心页 ============
const ProfilePage = {
  setup() {
    const user = inject('user');
    const saveUser = inject('saveUser');
    const navigate = inject('navigate');
    const showToast = inject('showToast');
    
    const memberLevels = {
      normal: { name: '普通会员', icon: '🥉', color: 'member-normal', next: '银卡', need: 5000 },
      silver: { name: '银卡会员', icon: '🥈', color: 'member-silver', next: '金卡', need: 20000 },
      gold: { name: '金卡会员', icon: '🥇', color: 'member-gold', next: '钻石', need: 50000 },
      diamond: { name: '钻石会员', icon: '💎', color: 'member-diamond', next: null, need: 0 }
    };
    
    const currentLevel = computed(() => memberLevels[user.member_level] || memberLevels.normal);
    
    const progress = computed(() => {
      if (!currentLevel.value.need) return 100;
      return Math.min(100, Math.round((user.total_spent / currentLevel.value.need) * 100));
    });
    
    const menuGroups = [
      {
        title: '我的服务',
        items: [
          { icon: '📋', name: '我的订单', action: () => navigate('orders') },
          { icon: '❤️', name: '我的收藏', action: () => showToast('收藏功能即将上线') },
          { icon: '🎫', name: '优惠券', action: () => showToast('优惠券功能即将上线') },
          { icon: '🧾', name: '发票管理', action: () => showToast('发票功能即将上线') }
        ]
      },
      {
        title: '会员权益',
        items: [
          { icon: '🎁', name: '积分商城', action: () => showToast('积分商城即将上线') },
          { icon: '💰', name: '邀请分红', action: () => showToast('分红系统即将上线') },
          { icon: '👥', name: '我的邀请', info: `已邀请${user.invite_count}人`, action: () => showToast('邀请功能即将上线') }
        ]
      },
      {
        title: '帮助与支持',
        items: [
          { icon: '📞', name: '联系客服', action: () => showToast('客服热线：400-888-8888') },
          { icon: '❓', name: '常见问题', action: () => showToast('帮助中心即将上线') },
          { icon: '📝', name: '关于我们', action: () => showToast('璟程 v2.0.0') }
        ]
      }
    ];
    
    function copyInviteCode() {
      navigator.clipboard?.writeText(user.invite_code);
      showToast('邀请码已复制：' + user.invite_code);
    }
    
    return {
      user, currentLevel, progress, menuGroups,
      copyInviteCode
    };
  },
  template: `
    <div class="profile-page">
      <!-- 会员卡片 -->
      <div class="member-card" :class="currentLevel.color">
        <div style="display:flex;justify-content:space-between;align-items:flex-start">
          <div>
            <div style="font-size:14px;opacity:0.9">尊敬的</div>
            <div style="font-size:24px;font-weight:700;margin:8px 0">{{ user.nickname }}</div>
            <div style="display:flex;align-items:center;gap:8px;margin-top:12px">
              <span style="font-size:28px">{{ currentLevel.icon }}</span>
              <div>
                <div style="font-size:16px;font-weight:600">{{ currentLevel.name }}</div>
                <div style="font-size:12px;opacity:0.8">累计消费 ¥{{ user.total_spent }}</div>
              </div>
            </div>
          </div>
          <div style="text-align:right">
            <div style="font-size:12px;opacity:0.8">积分</div>
            <div style="font-size:28px;font-weight:700">{{ user.points }}</div>
          </div>
        </div>
        
        <div v-if="currentLevel.next" style="margin-top:20px">
          <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:8px">
            <span>升级进度</span>
            <span>距{{ currentLevel.next }}还差 ¥{{ currentLevel.need - user.total_spent }}</span>
          </div>
          <div class="progress-bar" style="background:rgba(255,255,255,0.3)">
            <div class="progress-fill" :style="{width: progress + '%', background: '#fff'}"></div>
          </div>
        </div>
        
        <div style="margin-top:20px;padding-top:16px;border-top:1px solid rgba(255,255,255,0.2);display:flex;gap:16px">
          <div style="text-align:center">
            <div style="font-size:20px;font-weight:700">{{ user.invite_count }}</div>
            <div style="font-size:11px;opacity:0.8">已邀请</div>
          </div>
          <div style="text-align:center">
            <div style="font-size:20px;font-weight:700">¥{{ user.share_earnings }}</div>
            <div style="font-size:11px;opacity:0.8">分红收益</div>
          </div>
          <div style="text-align:center" @click="copyInviteCode">
            <div style="font-size:14px;font-weight:600;font-family:monospace;background:rgba(255,255,255,0.2);padding:4px 10px;border-radius:6px">{{ user.invite_code }}</div>
            <div style="font-size:11px;opacity:0.8;margin-top:4px">点击复制</div>
          </div>
        </div>
      </div>
      
      <div class="divider"></div>
      
      <!-- 菜单列表 -->
      <div v-for="group in menuGroups" :key="group.title">
        <div style="padding:12px 16px 8px;font-size:13px;color:var(--text-muted)">{{ group.title }}</div>
        <div style="background:var(--white)">
          <div v-for="item in group.items" :key="item.name" 
            style="display:flex;align-items:center;gap:14px;padding:14px 16px;border-bottom:1px solid var(--gray-light);cursor:pointer"
            @click="item.action">
            <span style="font-size:22px">{{ item.icon }}</span>
            <span style="flex:1;font-size:15px">{{ item.name }}</span>
            <span v-if="item.info" style="font-size:13px;color:var(--text-muted);margin-right:8px">{{ item.info }}</span>
            <svg viewBox="0 0 24 24" style="width:18px;height:18px;color:var(--text-muted)"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill="currentColor"/></svg>
          </div>
        </div>
        <div class="divider-sm"></div>
      </div>
      
      <div style="padding:24px 16px;text-align:center">
        <div style="font-size:12px;color:var(--text-muted)">璟程 · AI 智能酒店预订平台</div>
        <div style="font-size:12px;color:var(--text-muted);margin-top:4px">Version 2.0.0</div>
      </div>
      
      <div style="height:20px"></div>
    </div>
  `
};
