 // 说明：
 //obj必须要有定位！！！！！！！！！！！！！！！！！！！！！！！
 // 当调用这个函数时，obj是你要做动画的名字，target是需要移动多少距离，带+-号，不带px单位
 // 有回调函数可以写，没有可以省略
 function animate(obj, target, callback) {
     // 先清除定时器，防止点击多次，出现多个定时器
     clearInterval(obj.timer);
     obj.timer = setInterval(function() {
         // 步长
         var step = (target - obj.offsetLeft) / 10;
         // 改为整数
         step = step > 0 ? Math.ceil(step) : Math.floor(step);
         if (obj.offsetLeft == target) {
             // 停止动画，停止定时器
             clearInterval(obj.timer)
                 // 判断是否有回调函数
             if (callback) {
                 callback();
             }
         }
         obj.style.left = obj.offsetLeft + step + 'px';
     }, 15);
 }