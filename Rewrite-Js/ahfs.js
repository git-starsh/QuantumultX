/**********************************************

> 应用名称：ahhhhfs网站净化
> 网站地址：https://www.ahhhhfs.com
> 脚本说明：去除网页推广、网页广告


[rewrite_local]

^https?:\/\/.*(xbwpys|ahhhhfs)\.com\/($|[0-9a-zA-Z_/]+\/$) url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/ahfs.js

[mitm]

hostname = *.xbwpys.com, *.ahhhhfs.com

**********************************************/





























var body = $response.body.replace(/<head>/, '<head><style>.top, .bottum, .sidebar-column, .m-menubar, .google-auto-placed, #rizhuti_v2_module_division-2, #related_posts, .post-note, .entry-share, .related-posts, #comments, #ad_position_box, .entry-copyright, .sidebar-wrapper, .home-division, #ri_home_division_widget-2, #ri_home_cmspost_widget-2, #ri_home_slider_widget-2, #ri_home_background_widget-2{display:none!important} </style>');
$done({ body });