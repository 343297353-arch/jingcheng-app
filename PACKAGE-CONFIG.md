# 璟程 APP - 打包配置文件

## 📦 应用信息

- **应用名称**: 璟程
- **包名**: com.jingcheng.app
- **版本号**: 2.0.0
- **版本代码**: 1
- **最低 Android 版本**: 7.0 (API 24)
- **目标 Android 版本**: 14 (API 34)
- **最低 iOS 版本**: 14.0

---

## 🤖 Android 打包

### 方式一：使用在线构建服务（推荐）

#### 1. Ionic Appflow
1. 访问：https://ionic.io/appflow
2. 注册账号
3. 创建新项目
4. 上传项目代码
5. 配置签名
6. 点击构建 → 生成 APK

#### 2. Codemagic
1. 访问：https://codemagic.io
2. 选择 Capacitor 项目
3. 连接 GitHub 仓库
4. 配置构建参数
5. 自动生成 APK

#### 3. 本地构建（需要 Android Studio）
```bash
cd android
./gradlew assembleDebug
# APK 位置：android/app/build/outputs/apk/debug/app-debug.apk
```

### 签名配置

创建 `android/key.properties`:
```properties
storePassword=你的密码
keyPassword=你的密码
keyAlias=你的别名
storeFile=/path/to/keystore.jks
```

修改 `android/app/build.gradle`:
```gradle
android {
    ...
    signingConfigs {
        release {
            keyAlias 'jingcheng'
            keyPassword '你的密码'
            storeFile file('jingcheng.jks')
            storePassword '你的密码'
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
        }
    }
}
```

生成签名文件:
```bash
keytool -genkey -v -keystore jingcheng.jks -keyalg RSA -keysize 2048 -validity 10000 -alias jingcheng
```

---

## 🍎 iOS 打包

### 方式一：使用 Xcode（需要 Mac）

1. 打开 `ios/App/App.xcworkspace`
2. 选择开发团队
3. 配置 Bundle Identifier: `com.jingcheng.app`
4. 点击 Product → Archive
5. 导出 IPA 文件

### 方式二：使用在线构建服务

#### 1. Ionic Appflow
- 支持 iOS 云构建
- 自动签名
- 直接导出 IPA

#### 2. Codemagic
- 支持 iOS 构建
- 需要上传证书和 Provisioning Profile

### 证书配置

需要以下文件:
- **Distribution Certificate** (.p12)
- **Provisioning Profile** (.mobileprovision)
- **App Store Connect API Key** (可选)

---

## 🌐 PWA 版本（立即可用）

### 部署到 Vercel（推荐）

```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
cd www
vercel --prod
```

部署后获得 HTTPS 链接，可直接用于:
- 微信扫码访问
- Safari 添加到主屏幕
- 招商演示

### 部署到 Netlify

```bash
# 安装 Netlify CLI
npm i -g netlify-cli

# 部署
cd www
netlify deploy --prod
```

---

## 📱 内测分发

### Android

1. **蒲公英** (pgyer.com)
   - 上传 APK
   - 生成下载二维码
   - 设置密码保护

2. **fir.im**
   - 免费内测分发
   - 支持二维码下载

3. **小米应用商店**
   - 需要开发者账号
   - 审核较快

### iOS

1. **TestFlight** (推荐)
   - 需要 Apple Developer 账号 ($99/年)
   - 最多 10000 名测试用户
   - 审核较快（24-48 小时）

2. **蒲公英**
   - 支持 iOS IPA 分发
   - 需要用户信任企业证书

3. **fir.im**
   - 支持 iOS 分发
   - 同样需要企业证书

---

## 🎯 招商演示版本配置

### 修改应用名称

`capacitor.config.json`:
```json
{
  "appId": "com.jingcheng.app",
  "appName": "璟程 - 招商演示版",
  "webDir": "www",
  "bundledWebRuntime": false
}
```

### 添加演示数据标识

在 `www/js/data.js` 顶部添加:
```javascript
// 演示版本标识
window.IS_DEMO_VERSION = true;
```

在 `www/index.html` 添加演示提示:
```html
<div style="position:fixed;top:0;left:0;right:0;background:#d4af37;color:#1a1a2e;text-align:center;padding:8px;font-size:12px;z-index:99999;font-weight:600;">
  🎯 招商演示版 · 数据仅供参考
</div>
```

---

## 📊 打包清单

### Android APK
- [ ] 修改版本号
- [ ] 配置签名
- [ ] 构建 Release 版本
- [ ] 测试安装
- [ ] 上传到分发平台

### iOS IPA
- [ ] 准备开发者账号
- [ ] 配置证书
- [ ] Archive 构建
- [ ] 导出 IPA
- [ ] 上传 TestFlight

### PWA
- [ ] 部署到 Vercel/Netlify
- [ ] 配置自定义域名
- [ ] 配置 HTTPS
- [ ] 测试 PWA 安装

---

## 🚀 快速部署（推荐用于招商）

**最简单方案：PWA + 蒲公英**

1. 部署 PWA 到 Vercel（5 分钟）
2. 获取 HTTPS 链接
3. 生成二维码
4. 招商时直接扫码演示
5. 客户可添加到主屏幕使用

**优势:**
- ✅ 无需审核
- ✅ 立即可用
- ✅ 自动更新
- ✅ 跨平台
- ✅ 零成本

---

## 📞 技术支持

如需协助打包，请联系:
- 技术支持邮箱
- 微信客服
- 电话支持

---

**璟程 APP v2.0.0**
更新日期：2026-03-17
