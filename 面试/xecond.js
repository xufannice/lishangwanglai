一.下面这串代码想要循环延时输出0，1，2，3，4，请问输出结果是否正确，如果不正确说明为什么？
并修改输出正确的结果。
    for(var i=0;i<5;i++){
    	setTimeout(function(){
    		console.log(i)
    	},100*i)
    }
   不正确，因为for循环是一次性执行完，走到定时器的时候i已经走到了5，所以会输出5个5。
   解决：var改成let。

二. javascript实现ajax的原理（实现过程）？
	// 1.创建请求对象
		let xhr = new XMLHttpRequest();
		// console.log(xhr)

		// 2.设置 :open(get/post, url, 是否异步(给true))
		xhr.open('post', `post.php`, true);

		// 3.设置请求头:post请求中放置参数
		xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

		// 4.发送请求:send()
		// post:请求的参数通过 send传递
		xhr.send(`a=${a.value}&b=${b.value}`);


		// 5.监听ajax状态码的变化
		xhr.onreadystatechange = function () {
			// console.log(this.readyState);
			// 服务器接收到了请求
			if (xhr.readyState == 4) {
				if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
					// xhr.response: 服务器返回的数据  默认类型是字符串 

					// json解析:
					// console.log(JSON.parse(xhr.response));
					// console.log(eval(`(${xhr.response})`));
					console.log(xhr.response)

				}
			}
		}

三. 下面的程序输出结果是什么？
	function doSomething(){
		for(var i=0;4>i;i++){
			var k=100
			aMrg+=','+(k+i)
		}
	}
	var k=1,aMrg=k
	doSomething()
	aMrg+=k

	console.log(aMrg)

	1,100,101,102,1031

四. 使用reduce将多维数据转换为一维数据？
	function fn(arr) { 
           return arr.reduce((a,b)=>{
               console.log(a)
               console.log(b)

               if(Array.isArray(b)){
                   return a.concat(fn(b))
               }else{
                   return a.concat(b)
               }
           },[])
       }
       var arr = [[1,2],[1,2,[3,4,5]],[5,6]]
       console.log(fn(arr))



五.null跟undefined有什么区别？
	null是js中的关键字，表示空值，null可以看作是object的一个特殊的值，如果一个object值为空，
	表示这个对象不是有效对象。
	以下情况会返回undefined:
	1.使用了一个未定义的变量；var i;
	2.使用了已定义但未声明的变量；
	3.使用了一个对象属性，但该属性不存在或者未赋值；

六. 对象与字符串的互相转换有什么方法？
	JSON.stringify JSON.parse

七. javascript对象深拷贝。
		function deepCopy(o) {
        var newO = {}
        for (var key in o) {
            // if (typeof o[key] == 'object') {
            // 	newO[key] = deepCopy(o[key]);
            // }else {
            // 	newO[key] = o[key];
            // }
            newO[key] = typeof o[key] == 'object' ? deepCopy(o[key]) : o[key];
        }
        return newO;
    }



八. javascript中==跟===有什么区别？

	===表示等同的意思，判断比较双方是否完全相等，包括类型和值。
	===比较的判断条件：
	1、如果比较双方的类型不相同，则不相等；
	2、如果都是数字，而且值相同，那么除非其中一个或两个都是NaN（NaN和NaN也是不相等的）时，比较双方是不相等的
	否则，是相等的；
	3、如果都是字符串，而且值相同，则相等；
	4、如果都是布尔类型，而且都为true或false，则相等；
	5、如果比较双方都是引用同一个对象、数组或函数，那么比较双方是相等的。否则，不相等，即使两个对象有完全相同的属性和方法，或者，
	数组内容完全相同；
	6、如果都是null或undefined，则相等。
	==表示等值的意思，判断比较双方的值是否相等；
	==比较的判断条件：
	如果比较双方类型相同，那么就比较他们的等同性，如果等同则相等，反之，不相等；
	如果比较双方类型不相同，使用下面规则进行比较判断：
	1、如果一个是数字，一个是字符串，则把字符串转换为数字，再进行比较；
	2、如果一个是数字，一个是布尔值，将true转换为1，false转换为0，再进行比较；
	3、如果一个是字符串，一个是布尔值，将他们都转换为数字，再进行比较；
	3、如果一个是对象，一个是数字或字符串，将对象转换为原始类型的值（valueOf或toString方法）
	再进行比较；
	4、如果一个是null，一个是undefined，那么他们相等；
	5、其它类型组合比较不相等。