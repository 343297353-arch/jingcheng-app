# 璟程 APP - 应用商城上架完整包

**版本**: v2.0.0  
**构建时间**: 2026-03-17  
**用途**: 应用商城上架

---

## ✅ 已为您准备好

### 1. 完整源码包
- **文件**: `jingcheng-app-release.zip` (848KB)
- **包含**: 
  - 完整前端源码 (www/)
  - Android 项目 (android/)
  - iOS 项目 (ios/)
  - 签名证书 (jingcheng.jks)
  - 配置文件

### 2. 签名证书
- **文件**: `android/jingcheng.jks`
- **密码**: `jingcheng2026`
- **别名**: `jingcheng`
- **有效期**: 27 年

### 3. 应用信息
- **应用名称**: 璟程
- **包名**: com.jingcheng.app
- **版本号**: 2.0.0
- **版本代码**: 1
- **最低 Android**: 7.0 (API 24)
- **目标 Android**: 14 (API 34)

---

## 🚀 立即构建 APK（3 种方式）

### 方式一：Ionic Appflow（推荐，10 分钟）

#### 步骤：

**1. 注册账号**
- 访问：https://ionic.io/appflow
- 点击「Get Started」
- 用邮箱注册（免费）

**2. 创建项目**
- 登录 Ionic Appflow
- 点击「Create Project」
- 选择「Capacitor」
- 项目名称：璟程 APP

**3. 上传代码**
- 方式 A: 连接 GitHub
  - 将代码 push 到 GitHub
  - 连接仓库
- 方式 B: 直接上传
  - 下载 Ionic CLI
  - 运行：`ionic upload`

**4. 配置签名**
- 进入项目 Settings → Android Signing
- 上传 Keystore: `jingcheng.jks`
- 填写信息:
  - Alias: `jingcheng`
  - Password: `jingcheng2026`

**5. 开始构建**
- 点击「Build」
- 选择「Release」
- 选择「Android」
- 点击「Run Build」
- 等待 5-10 分钟

**6. 下载 APK**
- 构建完成后点击「Download」
- 获取 APK 文件（约 30-50MB）

**费用**: 免费版每月 5 次构建（足够用）

---

### 方式二：Codemagic（备选）

**步骤**:

1. 访问：https://codemagic.io
2. 用 GitHub 登录
3. 添加项目
4. 选择「Capacitor」
5. 配置构建脚本:
```yaml
workflows:
  android:
    name: 璟程 Android
    instance_type: mac_mini_m1
    max_build_duration: 30
    environment:
      groups:
        - jingcheng_signing
    scripts:
      - npm install
      - cd android
      - ./gradlew assembleRelease
    artifacts:
      - android/app/build/outputs/apk/release/*.apk
```
6. 添加签名证书
7. 开始构建

**费用**: 免费版每月 500 分钟

---

### 方式三：本地构建（需要 Android Studio）

**如果您有 Mac/PC 且安装了 Android Studio**:

1. **下载源码包**
   - 解压 `jingcheng-app-release.zip`

2. **打开项目**
   - 启动 Android Studio
   - Open → 选择 `android` 目录

3. **配置签名**
   - File → Project Structure → Build Variants
   - 选择 Signing Config: release
   - 选择 `jingcheng.jks`

4. **构建 APK**
   - Build → Generate Signed Bundle / APK
   - 选择 APK
   - 选择 release
   - 点击 Finish

5. **获取 APK**
   - 位置：`android/app/build/outputs/apk/release/app-release.apk`

---

## 📱 应用市场上架指南

### 国内 Android 应用商店

#### 1. 小米应用商店
- **网址**: https://dev.mi.com/console/appservice/publish.html
- **费用**: 免费
- **审核时间**: 1-3 天
- **需要资质**:
  - 营业执照（企业）
  - ICP 许可证
  - 软件著作权（建议）
  - 隐私政策

**上架步骤**:
1. 注册小米开发者账号
2. 实名认证（上传营业执照）
3. 创建应用
4. 填写应用信息
5. 上传 APK
6. 上传截图（5-8 张）
7. 提交审核
8. 等待通过

---

#### 2. 华为应用市场
- **网址**: https://developer.huawei.com/consumer/cn/service/jsp/agreement/publish.jsp
- **费用**: 免费
- **审核时间**: 1-3 天
- **需要资质**:
  - 营业执照
  - ICP 许可证

**上架步骤**:
1. 注册华为开发者联盟账号
2. 实名认证
3. 创建应用
4. 填写信息
5. 上传 APK
6. 提交审核

---

#### 3. OPPO 软件商店
- **网址**: https://open.oppomobile.com/
- **费用**: 免费
- **审核时间**: 1-2 天

---

#### 4. vivo 应用商店
- **网址**: https://dev.vivo.com.cn/
- **费用**: 免费
- **审核时间**: 1-2 天

---

#### 5. 应用宝（腾讯）
- **网址**: https://open.qq.com/
- **费用**: 免费
- **审核时间**: 2-5 天

---

### iOS App Store

**需要**:
- Apple Developer 账号（$99/年 ≈ ¥700/年）
- Mac 电脑
- Xcode

**步骤**:
1. 注册 Apple Developer
2. 创建 App ID
3. 创建证书
4. 用 Xcode 打开 `ios/App/App.xcworkspace`
5. 配置签名
6. Product → Archive
7. 上传到 App Store Connect
8. 填写应用信息
9. 提交审核（24-48 小时）

---

## 📋 上架所需材料清单

### 必需资质
- [ ] **营业执照**（企业账号）
  - 扫描件（彩色）
  - 经营范围包含相关服务
  
- [ ] **ICP 许可证**
  - 增值电信业务经营许可证
  - 业务种类：信息服务业务
  
- [ ] **软件著作权**（建议办理）
  - 名称：璟程酒店预订软件 V1.0
  - 办理时间：约 30 个工作日
  - 办理机构：中国版权保护中心

### 应用材料
- [ ] **APK 文件**
  - 已签名
  - 版本：2.0.0
  
- [ ] **应用图标**
  - 512x512 像素
  - PNG 格式
  - 位置：`www/icon-512.png`
  
- [ ] **应用截图**（5-8 张）
  - 尺寸：1080x1920 或更高分辨率
  - 内容：首页、酒店列表、详情、预订、个人中心等
  
- [ ] **应用描述**（300 字以内）
```
璟程 APP 是一款 AI 智能酒店预订平台，提供酒店、民宿、公寓、青旅等多种住宿类型的在线预订服务。

【核心功能】
• 智能搜索 - 快速找到心仪酒店
• AI 推荐 - 个性化酒店推荐
• 在线预订 - 简单快捷的预订流程
• 订单管理 - 实时查看订单状态
• 会员系统 - 积分累积、等级特权
• 邀请返利 - 分享赚钱、收益提现

【设计特色】
• 深空蓝 + 鎏金色奢华设计
• 流畅的交互动画
• 沉浸式使用体验

立即下载，享受智能酒店预订新体验！
```

- [ ] **隐私政策**
  - 需要独立页面
  - 包含用户信息收集、使用、保护说明
  
- [ ] **用户协议**
  - 服务条款
  - 免责声明

---

## 🎯 快速上架流程（3 天搞定）

### 第 1 天：准备材料
- [ ] 注册各平台开发者账号
- [ ] 准备营业执照等资质
- [ ] 准备应用截图和描述
- [ ] 编写隐私政策

### 第 2 天：构建 APK
- [ ] 使用 Ionic Appflow 构建
- [ ] 或使用本地环境构建
- [ ] 测试 APK 安装
- [ ] 准备上架材料

### 第 3 天：提交审核
- [ ] 小米应用商店
- [ ] 华为应用市场
- [ ] OPPO 软件商店
- [ ] vivo 应用商店
- [ ] 应用宝

### 第 4-7 天：等待审核
- [ ] 关注审核状态
- [ ] 处理审核反馈
- [ ] 修改后重新提交

### 第 8 天：正式上线
- [ ] 所有商店审核通过
- [ ] 应用可搜索下载
- [ ] 开始推广

---

## 💡 上架技巧

### 提高审核通过率
1. **资质齐全** - 确保所有资质有效
2. **内容合规** - 不涉及敏感内容
3. **功能完整** - 无明显 bug
4. **隐私政策** - 符合法律要求
5. **联系方式** - 真实有效

### 优化应用展示
1. **精美截图** - 突出核心功能
2. **诱人描述** - 突出亮点
3. **关键词优化** - 提高搜索排名
4. **好评引导** - 鼓励用户好评

### 避免常见问题
1. **资质过期** - 及时更新
2. **内容违规** - 严格审核
3. **侵权问题** - 使用原创素材
4. **隐私问题** - 明确告知用户

---

## 📞 重要信息汇总

### 源码包
- **文件**: `jingcheng-app-release.zip`
- **大小**: 848KB
- **位置**: `/home/admin/openclaw/workspace/jingcheng-app/`

### 签名信息
- **Keystore**: `android/jingcheng.jks`
- **密码**: `jingcheng2026`
- **别名**: `jingcheng`
- **有效期**: 27 年

### 应用信息
- **名称**: 璟程
- **包名**: `com.jingcheng.app`
- **版本**: 2.0.0
- **版本代码**: 1

### 在线构建
- **Ionic Appflow**: https://ionic.io/appflow
- **Codemagic**: https://codemagic.io

### 应用商店
- **小米**: https://dev.mi.com
- **华为**: https://developer.huawei.com
- **OPPO**: https://open.oppomobile.com
- **vivo**: https://dev.vivo.com.cn
- **应用宝**: https://open.qq.com

---

## ⚠️ 注意事项

1. **签名证书**
   - 妥善保管，不要泄露
   - 丢失后无法更新应用
   - 建议备份到多个地方

2. **资质办理**
   - ICP 许可证：约 30-60 个工作日
   - 软件著作权：约 30 个工作日
   - 可找代办机构加速

3. **应用审核**
   - 首次审核较严格
   - 被拒后根据反馈修改
   - 保持耐心

4. **更新维护**
   - 定期更新版本
   - 及时响应用户反馈
   - 遵守平台规则

---

**璟程 APP · 应用商城上架包**

版本：v2.0.0  
构建日期：2026-03-17  
用途：应用商城上架

---

*祝您上架顺利！*
