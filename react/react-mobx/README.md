# Mobx

## 基础使用

1.初始化mobx的过程

  声明数据 -> 响应式处理 -> 定义action函数 -> 实例化导出

2.mobx如何配合react，需要依赖什么包

  mobx-react-lite为链接包，导出observer方法，包裹组件

3.模块化解决了什么问题

  维护性问题

4.如何实现mobx的模块化

  按照功能拆分store模块，根模块汇总组合子模块，利用context机制依赖注入
