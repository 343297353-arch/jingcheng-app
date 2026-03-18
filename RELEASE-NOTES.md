# 璟程 APP 内测版发布说明

## 📦 版本信息

- **版本号:** v2.0.0
- **发布日期:** 2026-03-17
- **类型:** PWA 内测版
- **公网访问:** https://s048yv-ip-47-121-87-99.tunnelmole.net/

---

## ✨ 功能特性

### 首页
- 🏨 智能搜索栏（目的地/酒店名称）
- 📅 日期选择器（入住/离店/人数）
- 🎯 分类导航（酒店/民宿/公寓/青旅）
- 🌆 热门城市快速选择
- ⭐ AI 智能推荐酒店
- 🎨 主题推荐卡片

### 酒店列表
- 🔍 筛选功能（城市/类型/价格）
- ⭐ 评分排序
- 💰 价格区间筛选
- 📍 位置筛选

### 酒店详情
- 🖼️ 高清图片展示
- 📝 详细信息（设施/地址/评价）
- 🛏️ 房型选择
- 💳 价格详情

### 预订功能
- 📅 入住信息确认
- 👤 住客信息填写
- 💳 支付方式选择
- ✅ 订单确认

### 订单管理
- 📋 订单列表
- 🔍 订单状态跟踪
- ❌ 订单取消
- 📄 订单详情

### AI 助手
- 💬 智能对话
- 🎯 酒店推荐
- ❓ 常见问题解答
- 🗣️ 语音交互（待实现）

### 个人中心
- 👤 用户信息
- 🎫 会员等级
- 🎁 积分系统
- 🔗 邀请码
- 💰 分享收益

---

## ️ 技术栈

- **前端框架:** Vue 3 (Composition API)
- **UI:** 自定义组件 + CSS 变量
- **移动端适配:** Capacitor 7
- **PWA:** Service Worker + Web App Manifest
- **数据存储:** localStorage
- **HTTP 服务:** Python http.server
- **内网穿透:** tunnelmole

---

## 📱 安装方式

### iPhone/iPad (Safari)
1. 打开链接：https://s048yv-ip-47-121-87-99.tunnelmole.net/install.html
2. 点击底部「分享」按钮
3. 选择「添加到主屏幕」
4. 点击右上角「添加」

### Android (Chrome)
1. 打开链接：https://s048yv-ip-47-121-87-99.tunnelmole.net/install.html
2. 点击右上角菜单 ⋮
3. 选择「安装应用」或「添加到主屏幕」
4. 点击「安装」

---

## 🔧 开发环境

### 启动本地服务
```bash
cd /home/admin/openclaw/workspace/jingcheng-app/www
python3 -m http.server 8081
```

### 启动内网穿透
```bash
cd /home/admin/openclaw/workspace/jingcheng-app
npx tunnelmole 8081
```

### 同步 Capacitor
```bash
npx cap sync
```

### 构建 Android APK (需要 Android Studio)
```bash
npx cap open android
# 在 Android Studio 中构建
```

---

## 📝 已知问题

1. **Service Worker 缓存** - 首次加载后需要清除缓存才能看到更新
2. **图片加载** - 部分 Unsplash 图片在国内访问较慢
3. **支付功能** - 目前仅为演示，未接入真实支付
4. **语音交互** - AI 助手语音功能待实现

---

## 🚀 后续计划

- [ ] 接入真实支付系统
- [ ] 实现语音交互功能
- [ ] 添加用户登录/注册
- [ ] 后台管理系统
- [ ] 推送通知
- [ ] 离线地图
- [ ] 多语言支持

---

## 📞 内测反馈

如有问题或建议，请联系开发团队。

**内测群:** [待添加]
**反馈邮箱:** [待添加]

---

## 🔐 注意事项

- 本版本为内测版，仅供测试使用
- 请勿用于商业用途
- 数据为演示数据，不构成真实预订
- 定期备份重要数据
