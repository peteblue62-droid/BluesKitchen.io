# 一餐一谱

一个可以在电脑和手机上使用的食谱小应用。

## 直接使用

电脑上可以直接双击 `index.html` 打开。

## 当前完成状态

- 1000 道内置菜谱
- 每道菜有图片、用量、器具、时间安排和详细步骤
- 手机和电脑都可用
- 支持添加到手机主屏幕
- 支持免费 AI
- 在线 AI 不可用时，会自动用本地 1000 道菜谱生成推荐、菜谱和采购清单
- 支持豆包 API，使用 Cloudflare Worker 安全代理

完整部署步骤见 [DEPLOY.md](./DEPLOY.md)。

## 长期使用和手机使用

想要随时用，推荐把整个文件夹上传到静态网页托管服务，例如 GitHub Pages、Netlify、Vercel 或自己的服务器。发布后会得到一个网址，电脑和手机都可以打开。

iPhone 使用 Safari 打开网址，然后点分享按钮，选择“添加到主屏幕”。

Android 使用 Chrome 打开网址，点菜单，选择“安装应用”或“添加到主屏幕”。

电脑 Chrome 或 Edge 打开网址时，如果页面顶部出现“安装”按钮，可以直接安装到桌面。

## 需要上传的文件

- `index.html`
- `styles.css`
- `app.js`
- `manifest.webmanifest`
- `icon.svg`
- `sw.js`
- `.nojekyll`

## 保存说明

内置 1000 道菜谱会跟着网页一起发布，包含家常菜、主食、汤粥、早餐、凉拌、不同风味菜和甜品。你自己新增的菜谱会保存在当前设备的浏览器里；换手机或换浏览器时，需要重新添加。

## 图片和用量

菜谱详情里可以切换 1 人、2 人、4 人份，材料用量会跟着变化。部分菜谱使用 Wikimedia Commons 的公开图片；没有公开照片的菜谱会显示本地生成的菜品插画，也可以点“找菜品图片”在线搜索真实照片。

## 做菜辅助

每道菜会显示需要的器具、时间安排和可勾选的详细步骤。卡片上会显示菜品类型和冰箱食材匹配程度，方便快速决定今天做什么。

## 操作流程

首页有 4 步操作流程：填食材、筛选、调份量、照步骤做。手机上也可以直接按这个顺序使用。

## 长者大字模式

页面顶部有“大字”按钮，打开后会放大文字、按钮和菜谱详情行距，适合长者在手机和平板上阅读。

## 接入豆包 API

网站已经内置“AI 做菜助手”入口。默认使用 Pollinations 免费文本接口，基础使用不需要 API Key。

如果以后想换成豆包 API，API Key 不能放在网页前端。请使用 Cloudflare Worker 代理：

1. 在火山方舟控制台获取 `ARK_API_KEY`。
2. 部署本项目里的 `worker/doubao-worker.js`。
3. 在 Cloudflare Worker 环境变量里添加 `ARK_API_KEY`。
4. 如需换模型，修改 Worker 环境变量 `ARK_MODEL`。
5. 部署后得到 Worker 地址，例如 `https://recipe-doubao-proxy.xxx.workers.dev`。
6. 打开网站首页，在“AI 做菜助手”的“豆包 Worker 地址”里填入 Worker 地址并保存。

完成后，首页的“AI 做菜助手”会优先调用豆包生成推荐、菜谱和采购清单；没有配置 Worker 时，则使用免费 AI 接口。

当前 Worker 使用火山方舟 Responses API：

- Base URL：`https://ark.cn-beijing.volces.com/api/v3/responses`
- 默认模型：`doubao-seed-1-8-251228`
- 鉴权：Cloudflare Worker 环境变量 `ARK_API_KEY`
