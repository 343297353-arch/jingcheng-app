# 璟程 APP - 打包指南

## ✅ 已完成

- [x] Capacitor 项目初始化
- [x] Android 平台添加
- [x] iOS 平台添加
- [x] 前端代码（20+ 酒店数据）

---

## 📱 打包成 APK/IPA

### 方式 A：Android APK（推荐先做这个）

#### 在 Windows/Mac 上操作：

```bash
# 1. 进入项目目录
cd jingcheng-app

# 2. 同步代码到原生项目
npx cap sync

# 3. 打开 Android Studio
npx cap open android

# 4. 在 Android Studio 中：
#    - 点击 Build → Build Bundle(s) / APK(s) → Build APK(s)
#    - 等待编译完成
#    - APK 位置：android/app/build/outputs/apk/debug/app-debug.apk
```

#### 生成正式签名版 APK：

1. **创建签名密钥**（首次需要）：
```bash
keytool -genkey -v -keystore jingcheng.keystore -alias jingcheng -keyalg RSA -keysize 2048 -validity 10000
```

2. **配置签名**（android/app/build.gradle）：
```gradle
android {
    ...
    signingConfigs {
        release {
            storeFile file('jingcheng.keystore')
            storePassword '你的密码'
            keyAlias 'jingcheng'
            keyPassword '你的密码'
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
        }
    }
}
```

3. **生成正式 APK**：
```bash
./gradlew assembleRelease
```

---

### 方式 B：iOS IPA（需要 Mac）

#### 前提条件：
- Mac 电脑
- Xcode（App Store 下载）
- Apple Developer 账号（$99/年）

#### 步骤：

```bash
# 1. 同步代码
npx cap sync

# 2. 打开 Xcode
npx cap open ios

# 3. 在 Xcode 中：
#    - 选择 Team（需要 Apple Developer 账号）
#    - Product → Archive
#    - 等待归档完成
#    - 在 Organizer 中点击 Distribute App
#    - 选择 App Store Connect 或 Ad Hoc
```

---

## 🎨 应用图标和启动屏

### 使用官方工具生成：

```bash
# 安装资源生成工具
npm install -g @capacitor/assets

# 准备素材（在项目根目录创建 resources 文件夹）：
# - resources/icon.png (1024x1024 PNG)
# - resources/splash.png (2732x2732 PNG)

# 生成所有尺寸
npx @capacitor/assets generate
```

### 手动准备图标：

**应用图标**（1024x1024 PNG）：
- 深蓝色背景
- 白色"璟"字
- 圆角由系统自动处理

**启动屏**（2732x2732 PNG）：
- 与应用图标一致的设计
- 居中放置

---

## 📦 上传应用商店

### 安卓商店上架材料：

| 商店 | 费用 | 审核时间 | 材料 |
|------|------|----------|------|
| 华为 | 免费 | 1-3 天 | 营业执照、软著（建议） |
| 小米 | 免费 | 1-2 天 | 营业执照、ICP 备案 |
| OPPO | 免费 | 1-3 天 | 营业执照 |
| vivo | 免费 | 1-3 天 | 营业执照 |
| 应用宝 | 免费 | 2-5 天 | 营业执照、软著 |

### 需要准备的材料：

1. **应用截图**（至少 3 张）
   - 6.5 寸：1242x2688
   - 5.5 寸：1242x2208

2. **应用描述**（300 字以内）
   ```
   璟程 - AI 智能酒店预订平台
   
   【核心功能】
   • 智能推荐：AI 助手根据您的偏好推荐酒店
   • 全类型住宿：酒店/民宿/公寓/青旅全覆盖
   • 会员体系：四级会员 + 积分 + 分红奖励
   • 高端设计：深空蓝 + 鎏金色，商务奢华风格
   
   【覆盖城市】
   北京、上海、广州、深圳、杭州、成都等 16 个热门城市，20+ 精选酒店任选。
   
   【会员权益】
   普通会员→银卡→金卡→钻石，消费累积积分，邀请好友享分红！
   ```

3. **隐私政策**（必须）
4. **用户协议**（必须）
5. **营业执照**（支付功能需要）
6. **软件著作权**（建议，非必须）

---

## 🔧 常用命令

```bash
# 同步代码到原生项目
npx cap sync

# 打开 Android Studio
npx cap open android

# 打开 Xcode
npx cap open ios

# 在设备上运行（需要连接设备）
npx cap run android
npx cap run ios

# 浏览器预览
npx cap open
```

---

## 📊 项目结构

```
jingcheng-app/
├── www/                    # Web 代码（会自动同步）
│   ├── index.html
│   ├── css/
│   └── js/
├── android/                # Android 原生项目
│   └── app/
│       └── src/main/
│           ├── assets/public/    # Web 代码（自动复制）
│           └── java/             # 原生代码
├── ios/                    # iOS 原生项目
│   └── App/
│       └── App/
│           ├── public/           # Web 代码（自动复制）
│           └── AppDelegate.swift
├── capacitor.config.json   # Capacitor 配置
└── package.json            # npm 配置
```

---

## ⚠️ 注意事项

### Android：

1. **最低 Android 版本**：5.1 (API 21)
2. **目标版本**：Android 14 (API 34)
3. **权限配置**（android/app/src/main/AndroidManifest.xml）：
   - 网络访问：已默认包含
   - 定位：需要时添加
   - 相机：需要时添加

### iOS：

1. **最低 iOS 版本**：13.0
2. **需要真机测试**：模拟器无法测试所有功能
3. **审核较严格**：确保功能完整

---

## 🚀 快速测试（无需编译）

### 方式 1：Capacitor Live Reload

```bash
# 1. 确保手机和电脑在同一 WiFi
# 2. 查看电脑 IP 地址
ipconfig  # Windows
ifconfig  # Mac/Linux

# 3. 修改 capacitor.config.json
{
  "server": {
    "url": "http://你的电脑 IP:8080"
  }
}

# 4. 同步并运行
npx cap sync
npx cap run android
```

### 方式 2：直接安装 APK

编译好的 APK 可以通过以下方式分发：
- 微信/QQ 直接发送
- 百度网盘分享
- 应用分发平台（fir.im、蒲公英）

---

## 📞 需要帮助？

遇到问题可以：
1. 查看 Capacitor 文档：https://capacitorjs.com
2. 检查 Android Studio 日志
3. 运行 `npx cap doctor` 诊断环境

---

**下一步**：
1. 在电脑上安装 Android Studio
2. 运行 `npx cap open android`
3. 点击 Build → Build APK
4. 安装到手机测试

**璟程 · AI 智能酒店预订平台**
Version 2.0.0
