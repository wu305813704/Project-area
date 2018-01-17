
1.viewerJs

	HOSTED_VIEWER_ORIGINS  跨域设置

	DEFAULT_URL            默认展示pdf地址

2.后台返回pdf文件流时，该插件置于项目中
	var file = new File([res.data], "文件名", {type: ''});//type空可接收任意文件类型

	<!-- viewer.html 打开展示默认地址pdf 拼接file参数可预览后台返回pdf -->
	window.open(`${__static}/pdfView/web/viewer.html?file=${window.URL.createObjectURL(file)}`)
	<!-- window.open('../../static/generic/web/viewer.html?file='+ window.URL.createObjectURL(file)) -->
3.后台返回url，可直接展示

