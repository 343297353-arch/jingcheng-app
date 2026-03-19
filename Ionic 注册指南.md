# Ionic + GitHub 注册指南

**时间**: 2026-03-18 14:48  
**目标**: 完成 Ionic 注册并创建项目

---

## 第一步：注册 GitHub（如果没有账号）

1. **访问**: https://github.com/signup

2. **填写信息**:
   - Email: `343297353@qq.com`（或您的其他邮箱）
   - Password: `Jingcheng2026!`
   - Username: `zjw110505`（如果被占用，试试 `zjw11050500`）

3. **验证**:
   - 完成拼图验证
   - 输入邮箱收到的验证码

4. **完成**！记住您的 GitHub 用户名和密码

---

## 第二步：登录 Ionic

1. **访问**: https://ionic.io/appflow

2. **点击**: "Start free →" 或 "Sign in"

3. **选择**: "Continue with GitHub"

4. **授权**: 点击 "Authorize Ionic" 允许访问

---

## 第三步：创建 Ionic 项目

1. **登录后**，点击 "Create Project"

2. **选择**: "Import from Git"

3. **连接 GitHub**: 选择您的账号

4. **选择仓库**: 找到 `jingcheng-app`（稍后会推送代码到 GitHub）

---

## 第四步：推送代码到 GitHub

**在终端执行**（复制粘贴）：

```bash
cd /home/admin/openclaw/workspace/jingcheng-app

# 1. 设置 Git 用户信息
git config user.email "343297353@qq.com"
git config user.name "Leon"

# 2. 添加远程仓库（替换为您的 GitHub 用户名）
git remote add origin https://github.com/zjw110505/jingcheng-app.git

# 3. 推送代码
git push -u origin master
```

**如果提示仓库不存在**：
1. 先访问 https://github.com/new
2. 创建新仓库，名称：`jingcheng-app`
3. 设为 Public
4. 不要勾选"Add README"
5. 创建后再执行上面的推送命令

---

## 第五步：配置 Ionic 项目

1. **在 Ionic Appflow 后台**：
   - 进入项目 Settings
   - 找到 "Android Signing"

2. **上传签名文件**：
   - 文件位置：`/home/admin/openclaw/workspace/jingcheng-app/android/jingcheng.jks`
   - Alias: `jingcheng`
   - Password: `jingcheng2026`

3. **保存设置**

---

## 第六步：开始构建 APK

1. **点击**: "Builds" → "New Build"

2. **配置**:
   - Platform: Android
   - Build Type: Release
   - Branch: master

3. **点击**: "Run Build"

4. **等待**: 5-10 分钟

5. **下载**: 构建完成后点击 "Download" 下载 APK

---

## 快速检查清单

- [ ] GitHub 账号已注册
- [ ] Ionic 账号已登录
- [ ] 代码已推送到 GitHub
- [ ] Ionic 项目已创建
- [ ] 签名文件已上传
- [ ] APK 构建已开始

---

## 遇到问题？

**问题 1**: GitHub 用户名被占用
- 解决：尝试 `zjw11050500`、`zjw110505000`、`leon-zjw` 等

**问题 2**: 推送代码失败
- 解决：检查仓库是否存在，重新执行 `git remote add`

**问题 3**: Ionic 找不到仓库
- 解决：确保代码已推送到 GitHub，刷新页面

---

**下一步**: 完成上述步骤后，告诉我，我帮您准备应用市场上架的材料！
