const CONFIG = {
	runPath: location.protocol + '//' + location.host + location.pathname + 'index.html',
	jumpPage: location.protocol + '//' + location.host + location.pathname + 'search.html?goto=%s&query=%s',
	engine: {
		/**
		 * 用“%s”代替搜索字词
		 */

		// 百度
		baidu: 'https://www.baidu.com/s?wd=%s',

		// 必应
		bing: 'https://www.bing.com/search?q=%s',

		// 谷歌
		google: 'https://www.google.com/search?q=%s',

		// 搜狗
		sogou: 'https://www.sogou.com/web?query=%s',

		// 360
		'360': 'https://www.so.com/s?q=%s',
	},
};


// 在原型链中添加一个函数
String.prototype.format = function() {
    var newStr = this, i = 0;
    while (/%s/.test(newStr))
        newStr = newStr.replace("%s", arguments[i++])
 
    return newStr;
}


/**
 * 获取url中只有一个参数的参数值]
 * @return {[string]}     [参数值]
 */
function getParam(name) {
	// 获取查询字符串
	var querystring = location.search;

	// 删除 第一个问号
	querystring = querystring.substr(1);

	// 切割参数
	var param_items = querystring.split('&');

	// 定义保存参数的对象
	var params = {};

	// 切割名字与值
	for (var i = 0; i < param_items.length; i++) {
		
		var key_val = param_items[i].split('=');

		var k = key_val[0];
		var v = key_val[1];

		// 添加到保存对象中
		params[k] = decodeURI(v);
		
	}
    return params[name] || null;
}


