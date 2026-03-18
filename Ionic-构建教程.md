# Ionic Appflow - 10 分钟构建 APK 教程

**最简单、最快的 APK 构建方式，无需配置环境！**

---

## 📋 准备工作

### 需要的时间
- 注册账号：2 分钟
- 上传代码：3 分钟
- 配置签名：2 分钟
- 构建 APK：5-10 分钟
- **总计**: 约 15 分钟

### 需要的文件
- ✅ `jingcheng-app-release.zip`（已准备好）
- ✅ `jingcheng.jks`（已包含在 zip 中）
- ✅ 密码：`jingcheng2026`

---

## 🚀 详细步骤（带截图说明）

### 第 1 步：注册 Ionic 账号

1. **访问 Ionic Appflow**
   ```
   https://ionic.io/appflow
   ```

2. **点击「Get Started」**
   - 选择「Sign Up」
   - 用邮箱注册
   - 或使用 GitHub/Google 账号登录

3. **验证邮箱**
   - 检查邮箱
   - 点击验证链接

---

### 第 2 步：创建项目

1. **登录后进入 Dashboard**
   - 点击「Create Project」

2. **选择项目类型**
   - 选择「Capacitor」
   - 项目名称：`璟程 APP`
   - 点击「Create」

---

### 第 3 步：上传代码

#### 方式 A：使用 Git（推荐）

1. **创建 GitHub 仓库**
   - 访问：https://github.com/new
   - 创建新仓库：`jingcheng-app`
   - 设为私有（可选）

2. **上传代码到 GitHub**
   ```bash
   cd /home/admin/openclaw/workspace/jingcheng-app
   
   # 初始化 git
   git init
   
   # 添加所有文件
   git add .
   
   # 提交
   git commit -m "Initial commit - 璟程 APP v2.0"
   
   # 添加远程仓库
   git remote add origin https://github.com/你的用户名/jingcheng-app.git
   
   # 推送
   git push -u origin main
   ```

3. **连接 Ionic**
   - 在 Ionic Dashboard
   - 选择「Connect Git Repository」
   - 选择 GitHub
   - 授权 Ionic 访问
   - 选择 `jingcheng-app` 仓库
   - 点击「Connect」

#### 方式 B：使用 Ionic CLI（无需 Git）

1. **安装 Ionic CLI**
   ```bash
   npm install -g @ionic/cli
   ```

2. **登录 Ionic**
   ```bash
   ionic login
   ```

3. **上传代码**
   ```bash
   cd /home/admin/openclaw/workspace/jingcheng-app
   ionic upload
   ```

---

### 第 4 步：配置签名

1. **进入项目 Settings**
   - 在 Ionic Dashboard
   - 点击项目名称
   - 进入「Settings」

2. **配置 Android Signing**
   - 找到「Android Signing」部分
   - 点击「Upload Keystore」

3. **上传签名文件**
   - 选择文件：`android/jingcheng.jks`
   - 填写信息：
     - **Alias**: `jingcheng`
     - **Keystore Password**: `jingcheng2026`
     - **Key Password**: `jingcheng2026`
   - 点击「Save」

---

### 第 5 步：开始构建

1. **进入 Builds 页面**
   - 点击「Builds」标签
   - 点击「New Build」

2. **配置构建参数**
   - **Platform**: Android
   - **Build Type**: Release
   - **Signing Mode**: Signed
   - **Signing Profile**: 选择刚才配置的签名

3. **开始构建**
   - 点击「Run Build」
   - 等待构建完成（5-10 分钟）
   - 可以在「Build History」查看进度

---

### 第 6 步：下载 APK

1. **构建完成后**
   - 构建状态变为「Success」
   - 点击「Download APK」

2. **保存 APK**
   - 选择保存位置
   - 文件名：`jingcheng-app-release.apk`
   - 大小：约 30-50MB

---

## ✅ 验证 APK

### 在手机上测试安装

1. **传输 APK 到手机**
   - 用 USB 连接电脑
   - 复制 APK 到手机
   - 或通过微信/QQ 发送

2. **安装 APK**
   - 在手机上找到 APK
   - 点击安装
   - 允许「未知来源」
   - 等待安装完成

3. **测试功能**
   - 打开 APP
   - 测试各个功能
   - 确保正常运行

---

## 📤 分发 APK

### 方式一：蒲公英（推荐）

1. **访问蒲公英**
   ```
   https://www.pgyer.com
   ```

2. **注册账号**
   - 用邮箱注册
   - 免费账号

3. **上传 APK**
   - 登录后点击「上传应用」
   - 选择 APK 文件
   - 填写应用信息
   - 点击「上传」

4. **获取下载链接**
   - 上传完成后生成下载二维码
   - 分享给客户/内测用户
   - 扫码即可下载

**费用**: 免费版够用

---

### 方式二：fir.im

1. **访问 fir.im**
   ```
   https://fir.im
   ```

2. **注册并上传**
   - 注册账号
   - 上传 APK
   - 获取下载链接

---

### 方式三：直接分享

- 通过微信、QQ、邮件直接发送 APK 文件
- 用户下载后安装

---

## 🏪 上架应用商店

### 准备材料

1. **APK 文件**
   - 已签名
   - 版本：2.0.0

2. **应用图标**
   - 512x512 像素
   - PNG 格式
   - 位置：`www/icon-512.png`

3. **应用截图**（5-8 张）
   - 尺寸：1080x1920
   - 内容：首页、列表、详情、预订、个人中心

4. **应用描述**
```
璟程 APP - AI 智能酒店预订平台

【核心功能】
• 智能搜索 - 快速找到心仪酒店
• AI 推荐 - 个性化酒店推荐
• 在线预订 - 简单快捷
• 订单管理 - 实时查看
• 会员系统 - 积分返利
• 邀请分享 - 赚钱提现

【设计特色】
• 深空蓝 + 鎏金色奢华设计
• 流畅动画体验
• 沉浸式使用

立即下载体验！
```

5. **资质文件**
   - 营业执照
   - ICP 许可证
   - 隐私政策

---

### 上架流程

#### 小米应用商店

1. **注册开发者账号**
   ```
   https://dev.mi.com
   ```
   - 企业账号需要营业执照

2. **创建应用**
   - 登录开发者后台
   - 应用开发 → 应用发布
   - 创建新应用

3. **填写信息**
   - 应用名称：璟程
   - 包名：com.jingcheng.app
   - 分类：旅游出行
   - 上传 APK
   - 上传图标和截图
   - 填写描述

4. **提交审核**
   - 检查所有信息
   - 提交审核
   - 等待 1-3 天

5. **上线**
   - 审核通过后自动上线
   - 用户可搜索下载

---

#### 华为应用市场

1. **注册华为开发者联盟**
   ```
   https://developer.huawei.com
   ```

2. **实名认证**
   - 上传营业执照

3. **创建应用**
   - AppGallery Connect
   - 创建应用
   - 填写信息

4. **上传 APK**
   - 选择上传的 APK
   - 完善应用信息

5. **提交审核**
   - 提交审核
   - 等待 1-3 天

---

#### 其他商店

流程类似，按照各平台指引操作即可。

---

## 💡 常见问题

### Q: 构建失败怎么办？
A: 查看构建日志，通常是配置问题。检查：
- 签名配置是否正确
- 代码是否有错误
- 网络连接是否正常

### Q: 构建太慢怎么办？
A: Ionic 免费版构建较慢，可以：
- 等待免费版（5-10 分钟）
- 或升级到付费版（更快）

### Q: APK 安装失败？
A: 检查：
- 手机是否允许「未知来源」
- APK 是否完整下载
- Android 版本是否兼容（需要 7.0+）

### Q: 应用商店审核被拒？
A: 根据反馈修改：
- 资质不全 → 补充资质
- 内容问题 → 修改内容
- 功能问题 → 修复 bug

### Q: 免费版够用吗？
A: 够用！免费版包含：
- 每月 5 次构建
- 基础功能
- 社区支持

---

## 📞 重要信息

### Ionic Appflow
- **网址**: https://ionic.io/appflow
- **免费版**: 每月 5 次构建
- **付费版**: $19/月起

### 签名信息
- **Keystore**: `jingcheng.jks`
- **密码**: `jingcheng2026`
- **别名**: `jingcheng`

### 应用信息
- **名称**: 璟程
- **包名**: `com.jingcheng.app`
- **版本**: 2.0.0

### 分发平台
- **蒲公英**: https://www.pgyer.com
- **fir.im**: https://fir.im

### 应用商店
- **小米**: https://dev.mi.com
- **华为**: https://developer.huawei.com
- **OPPO**: https://open.oppomobile.com
- **vivo**: https://dev.vivo.com.cn
- **应用宝**: https://open.qq.com

---

**祝您构建顺利！**

如有问题，随时联系。
