# wechat
手机存放的一个项目,用来做备用.
## 项目中应用到的技术点
1. 对http请求进行封装,使小程序可以接受promise方式发送请求并加入async await优化请求方式; 
2. 组件引入外部样式 - 如:组件使用 externalClasses: ['wrap-custom-row-num'],
3. 自定义封装组件 - components中都是自己封装的组件;
4. 引入tdesign组件库 - 使用它主要是创建项目中推荐,因此使用,目前其实它并不完善没有weui, iview, uni-ui方便;
5. 父子组件间传值 properties, triggerEvent;