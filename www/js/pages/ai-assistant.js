// ============ AI 助手页 ============
const AiAssistantPage = {
  setup() {
    const showToast = inject('showToast');
    const navigate = inject('navigate');
    
    const messages = ref([
      { id: 1, role: 'assistant', content: '您好！我是璟程 AI 助手，很高兴为您服务！👋\n\n我可以帮您：\n• 推荐合适的酒店\n• 查询订单信息\n• 解答入住问题\n• 处理退改签\n\n请问有什么可以帮您？', time: new Date().toISOString() }
    ]);
    
    const inputText = ref('');
    const isTyping = ref(false);
    
    const quickQuestions = [
      '帮我推荐上海的酒店',
      '如何取消订单？',
      '会员有什么权益？',
      '如何开发票？'
    ];
    
    function sendMessage() {
      if (!inputText.value.trim()) return;
      
      const userMsg = {
        id: Date.now(),
        role: 'user',
        content: inputText.value,
        time: new Date().toISOString()
      };
      
      messages.value.push(userMsg);
      inputText.value = '';
      isTyping.value = true;
      
      setTimeout(() => {
        const response = getAIResponse(userMsg.content);
        messages.value.push({
          id: Date.now() + 1,
          role: 'assistant',
          content: response,
          time: new Date().toISOString()
        });
        isTyping.value = false;
      }, 1000 + Math.random() * 1000);
    }
    
    function getAIResponse(question) {
      const q = question.toLowerCase();
      
      if (q.includes('上海')) {
        return '上海是热门旅游城市，我为您推荐几家优质酒店：\n\n🏨 **高端推荐**\n• 璟程·丽思卡尔顿酒店 - 陆家嘴金融中心，俯瞰黄浦江\n• 璟程·华尔道夫酒店 - 外滩核心地段\n\n🏨 **中端推荐**\n• 璟程·亚朵酒店 - 人文主题，服务优质\n• 璟程·全季酒店 - 简约设计，性价比高\n\n🏨 **经济推荐**\n• 璟程·汉庭酒店 - 干净舒适，价格亲民\n\n您想了解哪家酒店的详情呢？或者告诉我您的预算，我来精准推荐！😊';
      }
      
      if (q.includes('取消') || q.includes('退订')) {
        return '取消订单流程：\n\n1️⃣ 打开「订单」页面\n2️⃣ 找到待入住的订单\n3️⃣ 点击「取消」按钮\n4️⃣ 确认取消\n\n⏰ **取消政策**：\n• 入住当天 18:00 前免费取消\n• 18:00 后取消收取首晚房费\n• 部分特价房型不可取消\n\n如有问题，可随时联系我！😊';
      }
      
      if (q.includes('会员') || q.includes('权益')) {
        return '璟程会员权益介绍：\n\n🥉 **普通会员**\n• 预订累积积分\n• 会员专享价\n\n🥈 **银卡会员** (累计消费¥5000)\n• 积分 1.2 倍加速\n• 延迟退房至 14:00\n• 欢迎水果\n\n🥇 **金卡会员** (累计消费¥20000)\n• 积分 1.5 倍加速\n• 延迟退房至 16:00\n• 免费早餐\n• 房型升级\n\n💎 **钻石会员** (累计消费¥50000)\n• 积分 2 倍加速\n• 行政酒廊使用权\n• 免费接送机\n• 专属客服\n\n邀请好友还可获得分红奖励哦！💰';
      }
      
      if (q.includes('发票') || q.includes('开票')) {
        return '开发票流程：\n\n1️⃣ 入住完成后，在「订单」页面找到该订单\n2️⃣ 点击「申请开票」\n3️⃣ 填写发票抬头和税号\n4️⃣ 选择电子发票或纸质发票\n5️⃣ 提交后 1-3 个工作日开具\n\n📧 电子发票将发送至您的邮箱\n📮 纸质发票将邮寄至指定地址\n\n如有问题请联系客服！😊';
      }
      
      if (q.includes('推荐') || q.includes('有什么酒店')) {
        return '我来为您推荐酒店！请告诉我：\n\n📍 **目的地**：哪个城市？\n📅 **入住日期**：什么时候入住？\n👥 **入住人数**：几位成人/儿童？\n💰 **预算范围**：经济/中端/高端？\n🏨 **偏好类型**：酒店/民宿/公寓？\n\n告诉我这些信息，我来精准推荐！😊';
      }
      
      return '感谢您的咨询！我是璟程 AI 助手，可以帮您：\n\n• 🏨 推荐酒店和民宿\n• 📋 查询订单信息\n• 💳 处理退改签\n• 🎁 会员权益咨询\n• 📞 转接人工客服\n\n请告诉我您的具体需求，我会尽力为您解答！😊';
    }
    
    function askQuick(question) {
      inputText.value = question;
      sendMessage();
    }
    
    return {
      messages, inputText, isTyping, quickQuestions,
      sendMessage, askQuick
    };
  },
  template: `
    <div class="ai-assistant-page">
      <div class="header-bar">
        <div style="display:flex;align-items:center;gap:10px">
          <div style="width:36px;height:36px;border-radius:50%;background:var(--gradient-accent);display:flex;align-items:center;justify-content:center">
            <svg viewBox="0 0 24 24" style="width:20px;height:20px;fill:white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-4h2v2h-2zm0-2h2V7h-2z"/></svg>
          </div>
          <div>
            <div style="font-size:16px;font-weight:700">璟程 AI 助手</div>
            <div style="font-size:11px;color:rgba(255,255,255,0.8)">24 小时在线服务</div>
          </div>
        </div>
      </div>
      
      <!-- 聊天区域 -->
      <div class="chat-container" style="padding-bottom:140px">
        <div v-for="msg in messages" :key="msg.id" 
          class="chat-bubble" 
          :class="msg.role === 'user' ? 'right' : 'left'">
          <div style="white-space:pre-wrap">{{ msg.content }}</div>
          <div class="time">{{ new Date(msg.time).toLocaleTimeString('zh-CN', {hour: '2-digit', minute:'2-digit'}) }}</div>
        </div>
        
        <div v-if="isTyping" class="chat-bubble left">
          <div class="typing-dots">
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>
      
      <!-- 快捷问题 -->
      <div v-if="messages.length <= 2" style="padding:12px 16px;display:flex;flex-wrap:wrap;gap:8px;position:absolute;bottom:140px;left:0;right:0">
        <span v-for="q in quickQuestions" :key="q" 
          style="padding:8px 14px;background:var(--white);border:1px solid var(--gray-light);border-radius:20px;font-size:12px;cursor:pointer"
          @click="askQuick(q)">{{ q }}</span>
      </div>
      
      <!-- 输入区域 -->
      <div style="position:fixed;bottom:0;left:0;right:0;padding:12px 16px;background:var(--white);border-top:1px solid var(--gray-light);padding-bottom:calc(12px + var(--bottom-safe))">
        <div style="display:flex;gap:10px;align-items:center">
          <div style="flex:1;display:flex;align-items:center;background:var(--bg);border-radius:24px;padding:10px 16px;gap:10px">
            <input v-model="inputText" 
              placeholder="输入您的问题..." 
              @keyup.enter="sendMessage"
              style="flex:1;background:none;border:none;font-size:14px;outline:none">
          </div>
          <button class="btn btn-primary" 
            style="width:44px;height:44px;border-radius:50%;padding:0;display:flex;align-items:center;justify-content:center"
            @click="sendMessage">
            <svg viewBox="0 0 24 24" style="width:20px;height:20px;fill:white"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
          </button>
        </div>
      </div>
    </div>
  `
};
