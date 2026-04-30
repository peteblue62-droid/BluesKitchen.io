# 完整上线步骤

## 你需要准备

- 一个 Cloudflare 账号
- 一个火山方舟 API Key，也就是 `ARK_API_KEY`
- 一个静态网页托管位置，例如 GitHub Pages、Netlify、Vercel 或 Cloudflare Pages

## 1. 部署豆包 Worker

在本文件夹里运行：

```bash
npm install
npm run worker:secret
npm run worker:deploy
```

运行 `npm run worker:secret` 时，把火山方舟 API Key 粘贴进去。这个 Key 会作为 Cloudflare Secret 保存，不会进入网站前端代码。

部署成功后，会得到类似这样的 Worker 地址：

```text
https://recipe-doubao-proxy.xxx.workers.dev
```

## 2. 发布网站

把下面这些文件上传到你的网页托管服务：

- `index.html`
- `styles.css`
- `app.js`
- `manifest.webmanifest`
- `icon.svg`
- `sw.js`
- `.nojekyll`

## 3. 在网站里填豆包地址

打开网站首页，找到“AI 做菜助手”，在“豆包 Worker 地址”输入框里填入 Worker 地址，然后点“保存豆包地址”。

保存后，AI 做菜助手会优先调用豆包。如果没有填地址，会使用免费 AI 接口。

## 4. 测试

在 AI 做菜助手里输入：

```text
家里有鸡蛋、番茄、豆腐，老人小孩都能吃，今晚做什么？
```

如果返回菜谱建议，说明豆包接入成功。

## 常见问题

如果提示缺少 `ARK_API_KEY`，说明 Worker Secret 没设置成功，重新运行：

```bash
npm run worker:secret
npm run worker:deploy
```

如果手机上还是旧界面，说明浏览器缓存还没刷新。关闭网页重新打开，或删除主屏幕图标后重新添加。
