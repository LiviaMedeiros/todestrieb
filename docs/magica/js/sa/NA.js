/*! todestrieb: Magical Girls Gallery © 2021 LiviaMedeiros */
'use strict';((L,M)=>{var v={},q={},B={},N=null,C=null,D={},w={},E={},g={fix_scrollbug:!1,fix_titlebug:!1,keep_statbug:!1,keep_exbug:!1,limit_height:!1,hide_missing:!1,text_case:!1,font:"koruri",no_file:!1,all_discs:!1,mirror:!1};const F=a=>fetch("/magica/json/"+a+".json",{cache:"force-cache"}).then(b=>location.hostname.toLowerCase().startsWith(L)&&b.json()),O=a=>Object.assign(D,a),ba=(a,b=!1)=>{a||(g.no_file=!0,a='{"data":{}}');try{E=JSON.parse(a)}catch(c){return G(c)}if(b)try{b=JSON.parse(b)}catch{}Object.assign(g,
("object"===typeof b?b:{})||{},E.adjustments||{});return JSON.stringify(E)},x=a=>$("body")[a?"addClass":"removeClass"](["connecting"]),H=(a,b=[],c=2,e=100)=>{a.font&&b.push("@font-face{font-family:'Open Sans';src:url('data:font/ttf;base64,"+String(a.font)+"');}");a.raw&&b.push(...a.raw);a.href&&$("<link/>",{rel:"stylesheet",type:"text/css",href:a.href}).appendTo("head");(new Promise(f=>{const k=setInterval(()=>{var n=document.styleSheets[c];return n&&(clearInterval(k),f(n))},e)})).then(f=>b.forEach(k=>
f.insertRule(k,f.cssRules.length)))},P=()=>$("body").removeClass(["lm_touch","lm_click"]).addClass([navigator.userAgent.match(/ios|android/i)?"lm_touch":"lm_click"]),ca=a=>(a=a.originalEvent.state)&&a.h&&a.g?Q(a.h,a.g):($("#mainContent").removeClass(["hide"]),$("#cardDetail").addClass(["hide"]),R("status")),r=a=>{$("body").addClass(["lm_warn"]);$("#loading").attr({title:"An error occured. You can try to reload the page."}).on("pointerup",()=>location.reload());return console.warn(a),!1},G=a=>{$("body").addClass(["lm_error"]);
$("#loading").attr({title:"An error occured. You can report about it."}).find("p").on("pointerup",()=>location.assign("https://github.com/"+M+"/"+L+"/issues"));return console.error(a.originalEvent),!1},S=a=>Object.entries(Object.assign(B,a)).forEach(([b,c])=>(c=D[c])?($("[data-nativeimgkey="+b+"]").removeAttr("data-nativeimgkey").attr({src:"data:image/png;base64,"+c}),$("[data-nativebgkey="+b+"]").removeAttr("data-nativebgkey").css({backgroundImage:"url(data:image/png;base64,"+c+")"})):r(b)),y=()=>
{let a={};$("[data-nativeimgkey]").each((b,{dataset:c})=>(b=c.nativeimgkey)&&!B[b]?a[b]=c.src:!0);$("[data-nativebgkey]").each((b,{dataset:c})=>(b=c.nativebgkey)&&!B[b]?a[b]=c.src:!0);if(!Object.values(a).filter(b=>!(b in D)).length)return S(a);x(!0);Promise.all([...(new Set(Object.keys(a).filter(b=>/^card_\d{5}_c$/.test(b))))].map(b=>F("card_c_"+b.substr(5,4)))).then(b=>{b.forEach(O);S(a);x(!1)}).catch(r)},T=(a,b)=>g.card_probability?Math.random()<g.card_probability:q[a]&&q[a].includes(b),da=a=>
g.chara_probability?Math.random()<g.chara_probability:q[a]&&0<q[a].length,ea=({attributeId:a,name:b,id:c,title:e,kana:f})=>$("<div>",{"class":"lm_missing chara commonFrame4 se_decide "+a,title:b,data:{charaId:c,maxCardRank:0},append:[$("<div>",{"class":"nameWrap",append:[$("<span>",{"class":"att "+a}),$("<p>",{"class":"name",text:b,append:$("<span>",{"class":"title",text:e})}),$("<p>",{"class":"kana",text:f})]}),$("<div>",{"class":"charaIconWrap"})]}),t=(a,b,c="id")=>w[a].data.find(({[c]:e})=>e==
b),l=(a,b)=>({"data-nativeimgkey":a,"data-src":"resource/image_native/"+b+"/"+a+".png"}),I=(a,b)=>({["data-nat"+M.substr(1,2)+"ebgkey"]:a,"data-src":"resource/image_native/"+b+"/"+a+".png"}),ha=a=>{const b=da(a.id);if(g.hide_missing&&!b)return!1;const c=ea(a);(v[a.id]=w.card.data.filter(e=>e.charaNo==a.id)).forEach(e=>{var f=e.rank;const k=$("<div>",{"class":"userCharaIcon "+e.attributeId+" "+f});T(e.charaNo,e.cardId)?(f=+f.split("RANK_")[1],f>c.data("maxCardRank")&&c.data({maxCardId:e.cardId,maxCardRank:f}).removeClass(["lm_missing"]),
c.attr({tabindex:"2"}),k.append(U(e))):k.append($("<span>",{"class":"closed"}));$(".charaIconWrap",c).append(k)});$("#charaWrapInner").append(b?c.on("pointerup",fa):c)},U=a=>[["att","att","attributeId"],["star","star","rank"],["rank","frame","rank"],[!1,"card","cardId","_f"],["bg","bg","attributeId"]].map(([b,c,e,f=""])=>(e=c+"_"+a[e].toString().toLowerCase()+f,b?$("<span>",{"class":b,...I(e,"card/frame")}):$("<img>",l(e,"card/image")))),V=a=>$("<div>",{"class":"detailWrap",append:[$("<p>",{"class":"name c_purple",
text:a.name}),$("<div>",{"class":"common_line lc_beige"}),$("<p>",{"class":"detail",text:a.shortDescription})]}),fa=a=>{if(!a.cancelable&&!a.isTrigger&&g.fix_scrollbug)return!0;a.preventDefault();const {charaId:b,maxCardId:c}=$(a.currentTarget).data();history.pushState({page:"mgirl",h:b,g:c},"Magical Girl \u2116"+b);return Q(b,c)},Q=(a,b)=>{if(!ia(t("chara",a),t("card",b,"cardId")))return!1;y();$("#mainContent").addClass(["hide"]);$("#cardDetail").removeClass(["hide"])},ia=(a,b)=>{if(!b)return!1;
const c=N.clone(),{id:e,attributeId:f,title:k}=a,{cardId:n,rank:p,maxPieceSkillId1:W,doppelMagiaId:X}=b,Y=Array.from({length:5},(d,h)=>b["commandType"+(h+1)]);(d=>{$("#att",d).addClass([f.toLowerCase()]);$(".charaName",d).text(a.name).append(k&&$("<span>",{"class":"title ts_pink",text:k}))})($("#detailCardName",c));var u={alt:"",...l("card_"+n+"_c","card/image")};$("#detailCardImage",c).append($("<div>",{"class":"cardFrame "+p+" "+f,...I("frame_"+f.toLowerCase()+"_"+p.toLowerCase(),"card/frame")}),
$("<img>",{"class":"cardImg se_tabs",title:"Tap to zoom in",...u}),$("<img>",{"class":"zoomImg se_tabs",title:"Tap to zoom out",...u}),$("<span>",{"class":"moviePlayBtn se_tabs TE",title:"Transformation videos are disabled in this version"}));const Z=+p.split("RANK_")[1],[z,A,J]=["Status","Skill","Illust"].map(d=>$("#chara"+d,c));(d=>{$("img",d).attr(l("mini_"+b.miniCharaNo+"_s","mini/image"));$("#rare",d).removeClass().addClass([p]).append(Array(Z).fill("<span>").map(h=>$(h)))})($("#cardDetailMiniChara",
z));(d=>{$(".currentLv,.maxLv",$("#detailLv",d)).text([1,40,50,60,80,100][+p.split("RANK_")[1]]||1);$(".type>.tdStyle",d).text({BALANCE:"Balanced",ATTACK:"Attack",DEFENSE:"Defense",MAGIA:"Magia",HEAL:"Heal",SUPPORT:"Support",ULTIMATE:"Ultimate",CIRCLE_MAGIA:"Cycle Magia"}[b.initialType])})($(".statusWrap",z));(d=>({BALANCE:[1,1,1],ATTACK:[.98,1.03,.97],DEFENSE:[.97,.98,1.05],HP:[1.04,.97,.98],ATKDEF:[.99,1.02,1.01],ATKHP:[1.02,1.01,.99],DEFHP:[1.01,.99,1.02]})[b.growthType].map((h,m)=>d.eq(m).text(+b[["hp",
"attack","defense"][m]]*(1+(g.keep_statbug?3:[0,2,2.2,2.4,2.6,3][+p.split("RANK_")[1]]||1)*h)|0)))($("#popupCharaStatus .c_red",z));[[".profileWrap>.detail",a.description],[".exProfile1>.tdStyle",a.school],[".selCharacterDesign",a.designer],[".selIllustTitle","\u2605"+Z+" Illustrator"],[".selIllustrator",b.illustrator],[".selCharacterVoice",a.voiceActor]].forEach(([d,h])=>$(d,z).text(h));[["skill",".connect"],["magia",".magiaDetail"]].map(([d,h])=>{h=$(h,A);d=t(d,b[d+"Id"]);$("img",h).attr(l("icon_skill_"+
d.groupId,"art"));$(".name",h).text(d.name);$(".detail",h).text(d.shortDescription)});$(".commandList",A).append(Y.map(d=>$("<li>",{"class":g.all_discs||d})));W&&(u=t("pieceskill",W),$(".command",A).after($("<div>",{"class":"commonFrame3 connect",append:[$("<p>",{"class":"common_title_frame",text:"EX Skill"}),$("<div>",{"class":g.keep_exbug?"flexbox":"flexBox",append:[$("<p>",{"class":"img",append:$("<img>",l("icon_skill_"+u.groupId,"art"))}),V(u)]})]})));X&&$(".magia",A).append($("<div>",{"class":"doppel doppelDetail",
append:$("<div>",{"class":"flexBox",append:[$("<p>",{"class":"img doppel",append:[$("<img>",l("mini_"+b.doppelCharaNo+"_dd","mini/image")),$("<span>",{"class":"bg"})]}),V(t("magia",X))]})}));(d=>$(".discPreview",J).append(Y.map(h=>$("<div>",{"class":"discWrap "+h,append:[$("<div>",{"class":"discText"}),d]}).clone())))($("<img>",l("card_"+n+"_d","card/image")));v[e].forEach((d,h)=>{var m=d.cardId;const aa="mb_pink se_decide"+(m==n?" selected":""),K="\u2605"+ +d.rank.split("RANK_")[1];m=T(e,m);$(".miniCharaBtn",
J).append($("<p>",m?{"class":aa,tabindex:"4",data:{commandtype:"card",cardarrindex:h}}:{"class":"mb_pink off"}).text(K));$(".selIllustIcon",J).append($("<div>",{"class":"cardIllustWrap"}).append($("<div>",m?{"class":"userCharaIcon "+d.attributeId,append:U(d)}:{"class":"offIcon"}),$("<p>",m?{"class":aa,text:K,tabindex:"5",data:{cardarrindex:h}}:{"class":"mb_pink off",text:K})))});$("#cardDetail").data({charaId:e}).off().on("pointerup",".collectionBack",()=>history.back()).on("pointerup","#detailCardImage>img",
()=>$("#detailCardImage").toggleClass("zoom")).on("pointerup","#detailTab>li",R).on("pointerup",".moviePlayBtn",()=>setTimeout(d=>d.removeClass(),1500,$("#ready").addClass(["preNativeFadeIn"]))).on("pointerup",".cardIllustWrap>.mb_pink",ja).on("pointerup",".miniCharaBtn>.mb_pink",ka).empty().append(c);return!0},R=a=>{a=a.currentTarget?$(a.currentTarget).attr("name"):a;$("#cardDetailWrap").removeClass().addClass([a]);$("#detailTab>li").removeClass(["current"]).filter("[name="+a+"]").addClass(["current"])},
ja=a=>{a.preventDefault();$(".cardIllustWrap>.selected").removeClass(["selected"]);const {cardId:b,rank:c,attributeId:e,illustrator:f}=v[$("#cardDetail").data("charaId")][$(a.currentTarget).addClass(["selected"]).data("cardarrindex")];a=$("#detailCardImage");$("img",a).attr(l("card_"+b+"_c","card/image"));$(".cardFrame",a).attr(I("frame_"+e.toLowerCase()+"_"+c.toLowerCase(),"card/frame"));$(".illustrator").text(f);$(".selIllustTitle").text("\u2605"+ +c.split("RANK_")[1]+" Illustrator:");y()},ka=a=>
{a.preventDefault();a=$(a.currentTarget);if(!a.is(".off,.selected")){$(".miniCharaBtn>.selected").removeClass("selected");a=a.addClass(["selected"]).data();var b=v[$("#cardDetail").data("charaId")][a.cardarrindex||0];$(".discPreview>.discWrap>img").attr(l(...("chara"==a.commandtype?["mini_"+b.miniCharaNo+"_d","mini/image"]:["card_"+b.cardId+"_d","card/image"])));y()}},la=a=>{a.preventDefault();$(".tabBtns>.current").removeClass(["current"]);$("#charaWrap").removeClass().addClass([$(a.currentTarget).addClass(["current"]).data("att").toLowerCase(),
"commonFrame2"])};$(document).on("pointerdown",".TE",a=>$(a.currentTarget).not(".off,.current,.selected").addClass(["touch"])).on("pointermove pointerup",".TE",a=>$(a.currentTarget).removeClass(["touch"])).on("pointerdown","body",a=>setTimeout(b=>b.remove(),700,$("<div>",{"class":"commonEffect",css:{top:a.clientY-128+"px",left:a.clientX-128+"px"},append:[$("<div>",{"class":"effect01"}),$("<div>",{"class":"effect02"}),$("<div>",{"class":"effect03"})]}).appendTo("body"))).on("keydown","[tabindex]",
a=>("Enter"==a.key&&$(a.currentTarget).trigger("pointerup"),!0)).on("contextmenu",a=>(a.preventDefault(),document.documentElement.requestFullscreen().catch(r))).one("DOMContentLoaded",()=>{x(!0);P();$(window).on({resize:()=>C=C?clearTimeout(C):setTimeout(P,500),popstate:ca,"error unhandledrejection":G});history.replaceState({page:"mgirls"},"Magical Girls Gallery");const a=ba(...[/(?:^|; )gallery=([^;]*)/,/(?:^|; )adjustments=([^;]*)/].map(b=>(document.cookie.match(b)||[0,null])[1]));g.mirror&&$("body").addClass(["lm_rorrim"]);
g.limit_height&&$("body").addClass(["lm_limit_height"]);g.fix_titlebug&&H({raw:["{margin-left:8px;}",'::before{content:"[";}','::after{content:"]";}'].map(b=>"#detailCardName>.charaName>.title"+b)});g.no_file&&$("<a/>",{id:"lm_use_setup",href:"/setup"}).appendTo("body");g.text_case&&$("body").addClass(["lm_to"+g.text_case]);g.font?F("font/"+g.font).then(H).catch(r):H({href:"https://fonts.googleapis.com/css?family=Open+Sans:600"});Promise.all("art card_d card_f frame mini_d mini_dd mini_s mirrors".split(" ").map(F)).then(b=>
{var c=b.pop().data;try{w=JSON.parse([...c].reverse().join(""))}catch(e){G(e)}b.forEach(O);q=JSON.parse(a).data||{};b=$("#charaWrapInner").css({display:"none"});N=$("#tmplCharaDetail").detach().removeAttr("id style");w.chara.data.forEach(ha);y();x(!1);b.css({display:"block"});$("#tabArea>.tabBtns>li").on("pointerup",la)}).catch(r)})})
("todestrieb", "LiviaMedeiros");
