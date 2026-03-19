# 推送代码到 GitHub - 操作指南

**时间**: 2026-03-18 15:03

---

## 方法一：使用 GitHub Desktop（最简单）

### 1. 下载 GitHub Desktop
访问：https://desktop.github.com

### 2. 登录
- 打开 GitHub Desktop
- 使用您的 GitHub 账号登录（zjw110505）

### 3. 添加项目
- 点击 "Add an Existing Repository"
- 选择路径：`/home/admin/openclaw/workspace/jingcheng-app`
- 点击 "Add Repository"

### 4. 发布到 GitHub
- 点击右上角 "Publish repository"
- 名称：`jingcheng-app`
- 勾选 "Keep this code private"（可选）
- 点击 "Publish"

---

## 方法二：使用命令行（需要 Token）

### 1. 创建 GitHub Token
1. 访问：https://github.com/settings/tokens
2. 点击 "Generate new token (classic)"
3. 填写：
   - Note: `jingcheng-app-push`
   - Expiration: No expiration
   - Scopes: 勾选 `repo` (全部)
4. 点击 "Generate token"
5. **复制 Token**（只显示一次，保存好！）

### 2. 推送代码
```bash
cd /home/admin/openclaw/workspace/jingcheng-app

# 添加远程仓库（替换 YOUR_TOKEN 为实际 token）
git remote add origin https://zjw110505:YOUR_TOKEN@github.com/zjw110505/jingcheng-app.git

# 推送
git push -u origin master
```

---

## 方法三：在 GitHub 网页操作

### 1. 创建空仓库
1. 访问：https://github.com/new
2. Repository name: `jingcheng-app`
3. 点击 "Create repository"

### 2. 按页面提示推送
复制页面上的命令，在终端执行：
```bash
cd /home/admin/openclaw/workspace/jingcheng-app
git remote add origin https://github.com/zjw110505/jingcheng-app.git
git push -u origin master
```
（会提示输入密码，使用您的 Token 作为密码）

---

## 完成后的下一步

代码推送到 GitHub 后：

1. **回到 Ionic**：https://dashboard.ionicframework.com
2. **创建项目**：
   - 点击 "Create Project"
   - 选择 "Import from Git"
   - 选择 GitHub
   - 找到 `jingcheng-app` 仓库
3. **配置签名**：
   - Settings → Android Signing
   - 上传：`android/jingcheng.jks`
   - Alias: `jingcheng`
   - Password: `jingcheng2026`
4. **开始构建**：
   - Builds → New Build
   - Platform: Android
   - Build Type: Release
   - 点击 "Run Build"

---

## 需要帮助？

完成推送后告诉我，我帮您继续操作 Ionic！
