/**
 * 
 * @authors hanpanpan (2380272325@qq.com)
 * @date    2017-04-19 11:19:04
 * @version $Id$
 */

$(function () {
	var page = {
		init: function () {

			// $(".mui-header h1").touchend(function () {
					//touchend() 移动端点击事件

			// })

			// Mui.alert.show("普通弹出");

			Mui.alert.show({
				txt: "您确定要花费吗？",
			    btnN: "取消",
			    btnY: "确认",
			    callbackN: function () {
			    	//取消后的回调
			    	Mui.loading.show(); //打开loading
			    	setTimeout(function () { //关闭loading
			    		Mui.loading.hide()
			    	},3000)
			    },
			    callbackY: function () {
			    	// 确认后回调
			    	 Mui.toast("一个大傻逼啊！")
			    }
			})

			// Mui.loading.show(); //打开loading
			// setTimeout(function () { //关闭loading

			// 	Mui.loading.hide()
			// },3000)

			// Mui.loadingB.show()
			// setTimeout(function () { //关闭loadingB

			// 	Mui.loadingB.hide()
			// },3000)


			// Mui.toast("一个大傻逼啊！")


		}
	}

	page.init();
})