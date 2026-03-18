# 璟程 APP - DCloud 云打包指南（使用公共证书）

---

## 📋 准备工作

**已准备好的文件**：
- ✅ www/ - 完整前端代码
- ✅ resources/icon.svg - 应用图标
- ✅ manifest.json - 应用配置

---

## 🚀 打包步骤（10 分钟搞定）

### 步骤 1：下载 HBuilderX

**下载地址**：
```
https://www.dcloud.io/hbuilderx.html
```

选择：
- **正式版**（稳定）
- 根据你的系统：Windows / Mac / Linux

---

### 步骤 2：创建 5+ 项目

1. 打开 HBuilderX
2. 文件 → 新建 → 项目
3. 选择 **"5+ 项目"** 或 **"uni-app 项目"**
4. 项目名称：`jingcheng-app`
5. 项目目录：选择一个空文件夹

---

### 步骤 3：导入代码

1. 将 `www/` 文件夹中的所有内容复制到新项目的 `www/` 或 `src/` 目录
2. 保留以下文件：
   - index.html
   - css/
   - js/
   - manifest.json（需要修改，见下方）

---

### 步骤 4：配置 manifest.json

**修改 manifest.json**（5+ 项目格式）：

```json
{
  "name": "璟程",
  "appid": "__UNI__JINGCHENG",
  "description": "AI 智能语音 + 酒店预订 + 会员分红一站式平台",
  "version": {
    "name": "2.0.0",
    "code": "1"
  },
  "transformPx": false,
  "app-plus": {
    "usingComponents": false,
    "nvueStyleCompiler": "uni-app",
    "compilerVersion": 3,
    "splashscreen": {
      "alwaysShowBeforeRender": true,
      "waiting": true,
      "autoclose": true,
      "delay": 0
    },
    "modules": {},
    "distribute": {
      "android": {
        "permissions": [
          "<uses-permission android:name=\"android.permission.INTERNET\"/>",
          "<uses-permission android:name=\"android.permission.ACCESS_NETWORK_STATE\"/>"
        ],
        "package": "com.jingcheng.app",
        "versionName": "2.0.0",
        "versionCode": "1"
      },
      "ios": {},
      "sdkConfigs": {}
    }
  },
  "quickapp": {},
  "mp-weixin": {},
  "h5": {}
}
```

---

### 步骤 5：云打包

1. 在 HBuilderX 中，右键点击项目
2. 选择 **"发行"** → **"原生 APP-云打包"**
3. 在弹出的窗口中：
   - **平台**：选择 "Android"
   - **证书**：选择 **"使用公共证书"**（免费！）
   - **包名**：com.jingcheng.app
   - **版本号**：2.0.0
   - **版本代码**：1

4. 点击 **"打包"**

---

### 步骤 6：等待并下载

- 打包时间：5-15 分钟
- 打包完成后会弹出下载链接
- 下载 APK 文件

---

### 步骤 7：安装测试

1. 将 APK 传到手机
2. 设置 → 安全 → 允许未知来源
3. 点击 APK 安装
4. 打开应用测试功能

---

## 📱 应用信息（填写用）

| 项目 | 内容 |
|------|------|
| **应用名称** | 璟程 |
| **包名** | com.jingcheng.app |
| **版本号** | 2.0.0 |
| **版本代码** | 1 |
| **证书** | 使用公共证书（免费） |

---

## ⚠️ 注意事项

### 公共证书限制：

- ✅ **免费使用**
- ✅ **适合测试**
- ⚠️ **有效期 30 天**
- ⚠️ **不能上架应用商店**（上架需要自有证书）

### 正式上架方案：

如果需要上架应用商店，需要：
1. 创建自有签名证书
2. 使用自有证书重新打包

---

## 🎯 快速方案对比

| 方案 | 费用 | 时间 | 难度 | 推荐 |
|------|------|------|------|------|
| DCloud 云打包（公共证书） | 免费 | 10 分钟 | ⭐⭐ | ✅ 测试用 |
| DCloud 云打包（自有证书） | 免费 | 15 分钟 | ⭐⭐⭐ | 上架用 |
| 应用公园 | 免费 | 20 分钟 | ⭐ | ✅ 简单 |
| 淘宝代打包 | 50-200 元 | 1 小时 | ⭐ | 省心 |

---

## 📞 遇到问题？

### 常见问题：

**Q: 没有 5+ 项目选项？**
- 选择 "uni-app 项目" 也可以
- 或者选择 "普通 H5 项目"

**Q: 云打包按钮是灰色？**
- 确保项目已保存
- 确保 manifest.json 配置正确

**Q: 打包失败？**
- 检查代码是否有语法错误
- 查看云打包日志

---

## ✅ 下一步

1. 下载 HBuilderX
2. 按上述步骤操作
3. 收到 APK 后测试
4. 满意后准备上架材料

**项目位置**：`/home/admin/openclaw/workspace/jingcheng-app`

---

**璟程 · AI 智能酒店预订平台**
Version 2.0.0
