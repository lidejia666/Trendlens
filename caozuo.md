# 操作文档

## 前端部分

### 第一步：vite搭建前端
- npm init vite@latest 用vite脚手架搭建前端项目
- 安装依赖  `npm install`
- 启动项目  `npm run dev`

### 第二步：安装依赖
 - tailwindcss 原子类样式 
 npm install tailwindcss @tailwindcss/vite
 配置vite.config.ts
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
- 路由，状态管理,提供http服务
npm i react-router-dom zustand axios

- 组件图标库 
npm i lucide-react  # 图标库
npm i embla-carousel-react embla-carousel-autoplay  # 轮播图

- 模拟假数据的mockjs
npm i -D @types/node vite-plugin-mock mockjs

- 安装路径别名alias
   在tsconfig.json中配置 
   "compilerOptions": {
      "baseUrl": ".",
     "paths": {
      "@/*": ["src/*"]
     }
   },

- 在vite.config中配置alias
   "resolve":{
    alias:{
      '@':path.resolve(__dirname,'src'), 
    }
  }
- 初始化shadcn,后按需加载(add )
 npx shadcn@latest init

### 第三步 搭建路由

在src目录下创建routers目录，在目录下创建index.tsx文件，配置路由
Suspense,lazy 实现路由懒加载 并跳转页面


### 第四步 页面搭建
- 在pages目录下创建Home.tsx等文件，编写Home组件
