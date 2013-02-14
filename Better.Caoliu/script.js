// ==UserScript==
// @name           Better.Caoliu
// @namespace      Better.Caoliu
// @version        1.52
// @updateURL      https://userscripts.org/scripts/source/122991.meta.js
// @downloadURL    https://userscripts.org/scripts/source/122991.user.js
// @description    This script removes redirection or ads in Caoliu, linkbucks, adf.ly, imagedunk, imageporter, imgchili, rmdown, ilix.in, 400kb.com, jptorrent.org, ref.so, imagekitty.com and etc.
// t66y:
// @match          http://t66y.com/htm_data/*
// @match          http://www.t66y.com/htm_data/*
// @match          http://cl.eye.rs/htm_data/*
// @match          http://cl.orc.st/htm_data/*
// viidii.com
// @match          http://www.viidii.com/?*
// linkbucks
// @match          http://*.allanalpass.com/*
// @match          http://*.amy.gs/*
// @match          http://*.any.gs/*
// @match          http://*.baberepublic.com/*
// @match          http://*.deb.gs/*
// @match          http://*.drstickyfingers.com/*
// @match          http://*.dyo.gs/*
// @match          http://*.fapoff.com/*
// @match          http://*.filesonthe.net/*
// @match          http://*.galleries.bz/*
// @match          http://*.hornywood.tv/*
// @match          http://*.linkbabes.com/*
// @match          http://*.linkbucks.com/*
// @match          http://*.linkgalleries.net/*
// @match          http://*.linkseer.net/*
// @match          http://*.miniurls.co/*
// @match          http://*.picbucks.com/*
// @match          http://*.picturesetc.net/*
// @match          http://*.placepictures.com/*
// @match          http://*.poontown.net/*
// @match          http://*.qqc.co/*
// @match          http://*.qvvo.com/*
// @match          http://*.realfiles.net/*
// @match          http://*.rqq.co/*
// @match          http://*.seriousdeals.net/*
// @match          http://*.seriousfiles.com/*
// @match          http://*.seriousurls.com/*
// @match          http://*.sexpalace.gs/*
// @match          http://*.seriousfiles.com/*
// @match          http://*.theseblogs.com/*
// @match          http://*.thesefiles.com/*
// @match          http://*.theseforums.com/*
// @match          http://*.thosegalleries.com/*
// @match          http://*.tinybucks.net/*
// @match          http://*.tinylinks.co/*
// @match          http://*.tnabucks.com/*
// @match          http://*.tubeviral.com/*
// @match          http://*.uberpicz.com/*
// @match          http://*.ubervidz.com/*
// @match          http://*.ubucks.net/*
// @match          http://*.ugalleries.net/*
// @match          http://*.ultrafiles.net/*
// @match          http://*.urlbeat.net/*
// @match          http://*.urlpulse.net/*
// @match          http://*.whackyvidz.com/*
// @match          http://*.youfap.me/*
// @match          http://*.yyv.co/*
// @match          http://*.zxxo.net/*
// @match          http://*.zff.co/*
// @match          http://*.freegaysitepass.com/*
// adf.ly
// @match          http://adf.ly/*
// @match          http://www.adf.ly/*
// @match          http://9.bb/*
// @match          http://u.bb/*
// @match          http://j.gs/*
// @match          http://q.gs/*
// imagedunk
// @match          http://picleet.com/*
// @match          http://imagedunk.com/*
// imageporter
// @match          http://imageporter.com/*
// @match          http://www.imageporter.com/*
// @match          http://picturedip.com/*
// @match          http://piclambo.net/*
// imgchili
// @match          http://imgchili.com/show/*
// rmdown
// @match          http://www.rmdown.com/link.php?hash=*
// ilix.in
// @match          http://ilix.in/*
// 400kb.com
// @match          http://www.400kb.com/go.php?ref=*
// jptorrent.org
// @match          http://www.jptorrent.org/link.php?ref=*
// ref.so
// @match          http://ref.so/*
// pixhub.eu
// @match          http://pixhub.eu/images/show/*
// imagekitty.com
// @match          http://www.imagekitty.com/*
// imagetwist.com
// @match          http://imagetwist.com/*
// @match          http://www.imagetwist.com/*
// imagehyper.com
// @match          http://serve.imagehyper.com/img.php?*
// imagebam.com
// @match          http://www.imagebam.com/image/*
// upsimple.com
// @match          http://upsimple.com/view/*
// imagevenue.com
// @match          http://*.imagevenue.com/img.php?image=*
// wvw.fs-dy.com
// @match          http://wvw.fs-dy.com/link.php?ref=*
// @match          http://torrents.jav-board.com/downxx.php?aid=*
// tiung.com
// @match          http://www.tiung.com/x/download.php?file=*
// javjunkies.com
// @match          http://javjunkies.com/*
// adfoc.us
// @match          http://adfoc.us/*
// adcrun.ch
// @match          http://adcrun.ch/*
// ==/UserScript==
(function () {
	'use strict';
	var UTILS = {
		isArrayLike: function (obj) {
			if (typeof obj !== 'object') {
				return false;
			}
			var types = ['Array', 'NodeList', 'HTMLCollection'];
			for (var i = 0; i < types.length; ++i) {
				if (Object.prototype.toString.call(obj).indexOf(types[i]) !== -1) {
					return true;
				}
			}
			return false;
		},
		forEach: function (arr, callback) {
			if ((typeof arr === 'object') && UTILS.isArrayLike(arr) && UTILS.isFunction(callback)) {
				for (var i = 0; i < arr.length; ++i) {
					callback.call(arr[i], arr[i]);
				}
				return;
			}
			if((typeof arr === 'string') && UTILS.isFunction(callback)){
				arr = document.querySelectorAll(arr);
				UTILS.forEach(arr,callback);
			}
		},
		remove: function (dom) {
			if (typeof dom === 'string') {
				UTILS.remove(document.querySelectorAll(dom));
				return;
			}
			if ((typeof dom === 'object') && UTILS.isArrayLike(dom)) {
				UTILS.forEach(dom, function () {
					UTILS.remove(this);
				});
				return;
			}
			if (dom && dom.parentNode && dom.parentNode.removeChild) {
				dom.parentNode.removeChild(dom);
			}
		},
		die: function (dom) {
			if (typeof dom === 'string') {
				UTILS.die(document.querySelectorAll(dom));
				return;
			}
			if ((typeof dom === 'object') && UTILS.isArrayLike(dom)) {
				UTILS.forEach(dom, function () {
					UTILS.die(this);
				});
				return;
			}
			var attrs = ['onclick', 'onsubmit', 'style', 'onmouseover', 'onmouseout'];
			UTILS.forEach(attrs, function (a) {
				if (dom && dom[a]) {
					try {
						dom[a] = null;
					} catch (e) {}
				}
				if (dom && dom.removeAttribute) {
					dom.removeAttribute(a);
				}
			});
		},
		addCss: function (str) {
			var style = document.createElement('style');
			style.textContent = str;
			document.head.appendChild(style);
		},
		isFunction: function (func) {
			return typeof func === 'function';
		},
		proxy: function (callback) {
			var script = document.createElement('script');
			script.textContent = 'try{(' + callback.toString() + ')();}catch(e){}';
			document.body.appendChild(script);
		},
		tips: function () {
			var html = '<div class="tips_container">Better.Caoliu \u5DF2\u542F\u7528&emsp;<a href="http://userscripts.org/scripts/show/122991/" style="color:blue" target="_blank" title="\u6709\u95EE\u9898\u70B9\u6B64\u53CD\u9988">\u53CD\u9988</a>&emsp;<a href="http://opengg.me/donation/" style="color:red" title="\u6211\u8981\u6350\u52A9\u6B64\u9879\u76EE" target="_blank">\u6350\u52A9</a></div>';
			var css = '.tips_container{position:fixed;top:2em;right:2em;color:green;opacity:0.4}.tips_container:hover{opacity:0.8}.tips_container #toggleGoogle{color:red;cursor:pointer}';
			UTILS.addCss(css);
			var div = document.createElement('div');
			// div.style.position = 'relative';
			div.innerHTML = html;
			document.body.insertBefore(div, document.body.childNodes[0]);
		},
		clearCookies: function(){
			var cookies = document.cookie.split(";");
			for (var i = 0; i < cookies.length; i++) {
				var cookie = cookies[i];
				var eqPos = cookie.indexOf("=");
				var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
				document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
			}
		}
	};
	var Caoliu = [
		{
			hosts: ['t66y.com', 'cl.eye.rs', 'cl.orc.st'],
			fn: function () {
				// UTILS.remove('.tips');
				// DO NOT UNCOMMENT THIS
				UTILS.die('.tpc_content img,.tpc_content a');
				UTILS.forEach('.tpc_content a', function () {
					this.href = this.href.replace(/http\:\/\/www\.viidii\.com\/\?(.*?)&z/, '$1').replace(/______/ig, '.');
				});
			}
		}, {
			hosts: ['viidii.com'],
			fn: function () {
				var a = document.querySelector('#directlink');
				if (a && a.href) {
					location.href = a.href;
				}
			}
		}, {
			hosts: ['allanalpass.com', 'amy.gs', 'any.gs', 'baberepublic.com', 'deb.gs', 'drstickyfingers.com', 'dyo.gs', 'fapoff.com', 'filesonthe.net', 'galleries.bz', 'hornywood.tv', 'linkbabes.com', 'linkbucks.com', 'linkgalleries.net', 'linkseer.net', 'miniurls.co', 'picbucks.com', 'picturesetc.net', 'placepictures.com', 'poontown.net', 'qqc.co', 'qvvo.com', 'realfiles.net', 'rqq.co', 'seriousdeals.net', 'seriousfiles.com', 'seriousurls.com', 'sexpalace.gs', 'seriousfiles.com', 'theseblogs.com', 'thesefiles.com', 'theseforums.com', 'thosegalleries.com', 'tinybucks.net', 'tinylinks.co', 'tnabucks.com', 'tubeviral.com', 'uberpicz.com', 'ubervidz.com', 'ubucks.net', 'ugalleries.net', 'ultrafiles.net', 'urlbeat.net', 'urlpulse.net', 'whackyvidz.com', 'youfap.me', 'yyv.co', 'zxxo.net', 'zff.co', 'freegaysitepass.com'],
			fn: function () {
				UTILS.proxy(function(){
					var ad = Lbjs;
					if (ad && ad.TargetUrl) {
						document.body.innerHTML = '';
						ad.IsClick = true;
						location.href = ad.TargetUrl;
					}
				});
			}
		}, {
			hosts: ['adf.ly', '9.bb', 'u.bb', 'j.gs', 'q.gs'],
			fn: function () {
				if(location.pathname.indexOf('/1market.php')!==-1){
					document.body.innerHTML = '';
					return;
				}
				var conti = document.querySelector('#continue a');
				if(conti){
					conti.click();
					return;
				}
				UTILS.proxy(UTILS.clearCookies);
				UTILS.proxy(function(){
					if(counter){
						var url;
						url = counter.toString().match(/var\s+zzz\s*=\s*["']([^"']+)["']/)[1];
						if(url){
							location.href = url;
							document.body.innerHTML = '';
						}
					}
				});
			}
		}, {
			hosts: ['imagedunk.com', 'picleet.com'],
			fn: function () {
				UTILS.proxy(function(){
					splashpage.closeit();
				});
				UTILS.forEach('body>*', function () {
					if (this.tagName !== 'CENTER') {
						UTILS.remove(this);
					}
				});
			}
		}, {
			hosts: ['imageporter.com', 'picturedip.com', 'piclambo.net'],
			fn: function () {
				UTILS.proxy(function(){
					jsm_url = "";
					popunder = function () {};
					splashpage.closeit();
				});
				UTILS.remove('iframe,script');
				UTILS.forEach('body>div', function () {
					if (this.querySelector('script')) {
						UTILS.remove(this);
					}
				});
			}
		}, {
			hosts: ['imgchili.com'],
			fn: function () {
				if (document.title.indexOf('imgChili') !== -1) {
					UTILS.remove('#ad,.sidebar2,.sidebar,script');
					UTILS.forEach('body tr', function () {
						if (this.querySelector('iframe')) {
							UTILS.remove(this);
						}
					});
					var all = document.querySelector('#all');
					all.style.display = 'block';
				} else {
					location.reload();
				}
			}
		}, {
			hosts: ['rmdown.com'],
			fn: function () {
				UTILS.remove('img');
				var btn = document.querySelector('input[type="submit"]');
				if (btn) {
					UTILS.die(btn);
					btn.click();
				}
			}
		}, {
			hosts: ['ilix.in'],
			fn: function () {
				UTILS.addCss('.blockUI{display:none}');
				UTILS.proxy(function(){
					if (seconds) {
						seconds = 0;
						var input = document.querySelector('#captcha-form');
						if (input) {
							input.focus();
						} else {
							setInterval(function () {
								var form = document.querySelector('form');
								if (form && form.submit) {
									form.submit();
								}
							}, 100);
						}
					}
				});
				var iframe = document.querySelector('iframe[name="ifram"][src]');
				if (iframe) {
					location.href = iframe.src;
				}
			}
		}, {
			hosts: ['400kb.com'],
			fn: function () {
				UTILS.proxy(function(){
					if (update) {
						update = function () {};
						timer();
						clearInterval(MyMar1);
					}
				});
				UTILS.forEach('script,#wrap>*', function () {
					if (!this.querySelector('form')) {
						UTILS.remove(this);
					}
				});
				UTILS.die('form,input');
				document.querySelector('form').submit();
			}
		}, {
			hosts: ['jptorrent.org'],
			fn: function () {
				UTILS.forEach('body>*', function () {
					if (!this.querySelector('form')) {
						UTILS.remove(this);
					}
				});
				var btn = document.querySelector('input[type="submit"]');
				if (btn) {
					btn.click();
				}
			}
		}, {
			hosts: ['ref.so'],
			fn: function () {
				var a = document.querySelector('#btn_open>a');
				if (a) {
					document.body.innerHTML = '';
					location.href = a.href;
				}
			}
		}, {
			hosts: ['pixhub.eu'],
			fn: function () {
				UTILS.addCss('.adult,.adult body{overflow:scroll !important}');
				UTILS.remove('.adultpage');
			}
		}, {
			hosts: ['imagekitty.com'],
			fn: function () {
				UTILS.remove('#dhtmlwindowholder');
			}
		}, {
			hosts: ['imagetwist.com'],
			fn: function () {
				UTILS.proxy(function(){
					doClose();
				});
			}
		}, {
			hosts: ['imagehyper.com'],
			fn: function () {
				UTILS.proxy(function(){
					$('#dialog-confirm').dialog('close');
					createCookie('hasVisitedBefore', 'true', 1000);
				});
				UTILS.remove('#h,#l,#r');
			}
		}, {
			hosts: ['imagebam.com'],
			fn: function () {
				UTILS.proxy(function(){
					closeOverlay();
				});
			}
		}, {
			hosts: ['upsimple.com'],
			fn: function () {
				UTILS.remove('#disclaimer');
				UTILS.die(document);
				UTILS.proxy(function(){
					SetCookie('pf', 1, '');
				});
			}
		}, {
			hosts: ['imagevenue.com'],
			fn: function () {
				UTILS.proxy(function(){
					interstitialBox.closeit();
				});
			}
		}, {
			hosts: ['wvw.fs-dy.com', 'jav-board.com'],
			fn: function () {
				UTILS.die('form');
				var input = document.querySelector('input[type="submit"]');
				if (input && input.click) {
					input.click();
				}
			}
		}, {
			hosts: ['tiung.com'],
			fn: function () {
				function noPop() {
					UTILS.die([document, document.body]);
				}
				setInterval(noPop, 100);
				UTILS.proxy(function(){
					var url;
					url = countdown.toString().match(/http[:a-zA-Z0-9\.?\/&=]+/)[0];
					if (url) {
						document.body.innerHTML = '';
						location.href = url;
					}
				});
			}
		}, {
			hosts: ['javjunkies.com'],
			fn: function () {
				if(location.pathname.indexOf('/main/attention/') !== -1){
					location.pathname = '/main/';
				}
				UTILS.forEach('a[onclick][href="/JAV.php"]',function(){
					var match = this.getAttribute('onclick').match(/location\.href\s*=\s*"([^"]+)"/);
					if(match && match[1]){
						this.href = match[1];
						this.removeAttribute('target');
						UTILS.die(this);
					}
				});
			}
		}, {
			hosts: ['adfoc.us'],
			fn: function () {
				UTILS.proxy(function(){
					if(click_url.indexOf('http://adfoc.us/serve/click/') !== -1) {
						document.body.innerHTML = '';
						location.replace(click_url);
					}
				});
			}
		}, {
			hosts: ['adcrun.ch'],
			fn: function () {
				UTILS.proxy(function(){
					var script = document.body.querySelector('iframe.fly_frame+script');
					if(script){
						var src = script.innerHTML.replace(/^\s+|\s+$/g,'');
						if(src.indexOf('eval(') === 0){
							src = src.replace(/^eval\(/g,'String(');
							src = eval(src);
							src = src.match(/skip_ad\.click\(function\(\)\{(.*),function\(/)[1];
							src += ',function(r){\
								var o = JSON.parse(r);\
								if(o.message.url.length>4){\
									location.href = o.message.url;\
									document.body.innerHTML = "";\
								};\
							});';
							eval(src);
						}
					}
				});
			}
		}
	];
	var host = location.host;
	UTILS.tips();
	for (var i = 0; i < Caoliu.length; ++i) {
		for (var j = 0; j < Caoliu[i].hosts.length; ++j) {
			if (host.indexOf(Caoliu[i].hosts[j]) !== -1) {
				Caoliu[i].fn();
				return;
			}
		}
	}
})();