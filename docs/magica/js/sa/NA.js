/*! todestrieb: Magical Girls Gallery © 2021 LiviaMedeiros */
'use strict';((M,x)=>{var y={},r={},E={},N=null,F=null,G={},t={},H={},f={fix_scrollbug:!1,fix_titlebug:!1,keep_statbug:!1,keep_exbug:!1,limit_height:!1,hide_missing:!1,text_case:!1,font:"koruri",no_file:!1,all_discs:!1,mirror:!1};const I=a=>fetch("/magica/json/"+a+".json",{cache:"force-cache"}).then(b=>location.hostname.toLowerCase().startsWith(M)&&b.json()),O=a=>Object.assign(G,a),Z=(a,b=!1)=>{a||(f.no_file=!0,a='{"data":{}}');try{H=JSON.parse(a)}catch(c){return J(c)}if(b)try{b=JSON.parse(b)}catch{}Object.assign(f,
("object"===typeof b?b:{})||{},H.adjustments||{});return JSON.stringify(H)},z=a=>$("body")[a?"addClass":"removeClass"](["connecting"]),K=(a,b=[],c=2,d=100)=>{a.font&&b.push("@font-face{font-family:'Open Sans';src:url('data:font/ttf;base64,"+String(a.font)+"');}");a.raw&&b.push(...a.raw);a.href&&$("<link/>",{rel:"stylesheet",type:"text/css",href:a.href}).appendTo("head");(new Promise(e=>{const k=setInterval(()=>{var n=document.styleSheets[c];return n&&(clearInterval(k),e(n))},d)})).then(e=>b.forEach(k=>
e.insertRule(k,e.cssRules.length)))},P=()=>$("body").removeClass(["lm_touch","lm_click"]).addClass([navigator.userAgent.match(/ios|android/i)?"lm_touch":"lm_click"]),aa=a=>(a=a.originalEvent.state)&&a.h&&a.g?Q(a.h,a.g):($("#mainContent").removeClass(["hide"]),$("#cardDetail").addClass(["hide"]),R("status")),u=a=>{$("body").addClass(["lm_warn"]);$("#loading").attr({title:"An error occured. You can try to reload the page."}).on("pointerup",()=>location.reload());return console.warn(a),!1},J=a=>{$("body").addClass(["lm_error"]);
$("#loading").attr({title:"An error occured. You can report about it."}).find("p").on("pointerup",()=>location.assign("https://github.com/"+x+"/"+M+"/issues"));return console.error(a.originalEvent),!1},S=a=>Object.entries(Object.assign(E,a)).forEach(([b,c])=>(c=G[c])?($("[data-nativeimgkey="+b+"]").removeAttr("data-nativeimgkey").attr({src:"data:image/png;base64,"+c}),$("[data-nativebgkey="+b+"]").removeAttr("data-nativebgkey").css({backgroundImage:"url(data:image/png;base64,"+c+")"})):u(b)),A=()=>
{let a={};$("[data-nativeimgkey]").each((b,{dataset:c})=>(b=c.nativeimgkey)&&!E[b]?a[b]=c.src:!0);$("[data-nativebgkey]").each((b,{dataset:c})=>(b=c.nativebgkey)&&!E[b]?a[b]=c.src:!0);if(!Object.values(a).filter(b=>!(b in G)).length)return S(a);z(!0);Promise.all([...(new Set(Object.keys(a).filter(b=>/^card_\d{5}_c$/.test(b))))].map(b=>I("card_c_"+b.substr(5,4)))).then(b=>{b.forEach(O);S(a);z(!1)}).catch(u)},T=(a,b)=>f.card_probability?Math.random()<f.card_probability:r[a]&&r[a].includes(b),ba=a=>
f.chara_probability?Math.random()<f.chara_probability:r[a]&&0<r[a].length,ca=a=>$("<div>",{"class":"lm_missing chara commonFrame4 se_decide "+a.attributeId,title:a.name,data:{charaId:a.id,maxCardRank:0},append:[$("<div>",{"class":"nameWrap",append:[$("<span>",{"class":"att "+a.attributeId}),$("<p>",{"class":"name",text:a.name,append:$("<span>",{"class":"title",text:a.title})}),$("<p>",{"class":"kana",text:a.kana})]}),$("<div>",{"class":"charaIconWrap"})]}),B=(a,b)=>t[a].data.find(({id:c})=>c==b),
ea=a=>{const b=ba(a.id);if(f.hide_missing&&!b)return!1;const c=ca(a);(y[a.id]=t.card.data.filter(d=>d.charaNo==a.id)).forEach(d=>{var e=d.rank;const k=$("<div>",{"class":"userCharaIcon "+d.attributeId+" "+e});T(d.charaNo,d.cardId)?(e=+e.split("RANK_")[1],e>c.data("maxCardRank")&&c.data({maxCardId:d.cardId,maxCardRank:e}).removeClass(["lm_missing"]),c.attr({tabindex:"2"}),k.append(U(d))):k.append($("<span>",{"class":"closed"}));$(".charaIconWrap",c).append(k)});$("#charaWrapInner").append(b?c.on("pointerup",
da):c)},U=a=>[["att","att","attributeId"],["star","star","rank"],["rank","frame","rank"],[!1,"card","cardId","_f"],["bg","bg","attributeId"]].map(([b,c,d,e=""])=>(d=c+"_"+a[d].toString().toLowerCase()+e,b?$("<span>",{"class":b,"data-nativebgkey":d,"data-src":"resource/image_native/card/frame/"+d+".png"}):$("<img>",{"data-nativeimgkey":d,"data-src":"resource/image_native/card/image/"+d+".png"}))),da=a=>{if(!a.cancelable&&!a.isTrigger&&f.fix_scrollbug)return!0;a.preventDefault();const {charaId:b,maxCardId:c}=
$(a.currentTarget).data();history.pushState({page:"mgirl",h:b,g:c},"Magical Girl \u2116"+b);return Q(b,c)},Q=(a,b)=>{if(!fa(B("chara",a),t.card.data.find(c=>c.cardId==b)))return!1;A();$("#mainContent").addClass(["hide"]);$("#cardDetail").removeClass(["hide"])},V=a=>$("<div>",{"class":"detailWrap",append:[$("<p>",{"class":"name c_purple",text:a.name}),$("<div>",{"class":"common_line lc_beige"}),$("<p>",{"class":"detail",text:a.shortDescription})]}),fa=(a,b)=>{if(!b)return!1;const c=N.clone(),[d,e,
k,n,p,W,X,Y]=[a.id,a.attributeId,a.title,b.cardId,b.rank,b.miniCharaNo,b.maxPieceSkillId1,b.doppelMagiaId];var h=$("#detailCardName",c);$("#att",h).addClass([e.toLowerCase()]);$(".charaName",h).text(a.name).append(k&&$("<span>",{"class":"title ts_pink",text:k}));h="frame_"+e.toLowerCase()+"_"+p.toLowerCase();var l={alt:"",["data-nat"+x.substr(1,2)+"eimgkey"]:"card_"+n+"_c","data-src":"resource/image_native/card/image/card_"+n+"_c.png"};$("#detailCardImage",c).append($("<div>",{"data-nativebgkey":h,
"data-src":"resource/image_native/card/frame/"+h+".png","class":"cardFrame "+p+" "+e}),$("<img>",{"class":"cardImg se_tabs",title:"Tap to zoom in"}).attr(l),$("<img>",{"class":"zoomImg se_tabs",title:"Tap to zoom out"}).attr(l),$("<span>",{"class":"moviePlayBtn se_tabs TE",title:"Transformation videos are disabled in this version"}));h=+p.split("RANK_")[1];const [C,D,L]=["Status","Skill","Illust"].map(g=>$("#chara"+g,c));l=$("#cardDetailMiniChara",C);$("img",l).attr({"data-nativeimgkey":"mini_"+W+
"_s","data-src":"resource/image_native/mini/image/mini_"+W+"_s.png"});l=$("#rare",l).removeClass().addClass([p]);for(let g=h;0<g--;l.append($("<span>")));l=$(".statusWrap",C);$(".currentLv,.maxLv",$("#detailLv",l)).text([1,40,50,60,80,100][+p.split("RANK_")[1]]||1);$(".type>.tdStyle",l).text({BALANCE:"Balanced",ATTACK:"Attack",DEFENSE:"Defense",MAGIA:"Magia",HEAL:"Heal",SUPPORT:"Support",ULTIMATE:"Ultimate",CIRCLE_MAGIA:"Cycle Magia"}[b.initialType]);({BALANCE:[1,1,1],ATTACK:[.98,1.03,.97],DEFENSE:[.97,
.98,1.05],HP:[1.04,.97,.98],ATKDEF:[.99,1.02,1.01],ATKHP:[1.02,1.01,.99],DEFHP:[1.01,.99,1.02]})[b.growthType].map((g,m)=>$("#popupCharaStatus .c_red",C).eq(m).text(+b[["hp","attack","defense"][m]]*(1+(f.keep_statbug?3:[0,2,2.2,2.4,2.6,3][+p.split("RANK_")[1]]||1)*g)|0));[[".profileWrap>.detail",a.description],[".exProfile1>.tdStyle",a.school],[".selCharacterDesign",a.designer],[".selIllustTitle","\u2605"+h+" Illustrator"],[".selIllustrator",b.illustrator],[".selCharacterVoice",a.voiceActor]].forEach(([g,
m])=>$(g,C).text(m));[["skill",".connect"],["magia",".magiaDetail"]].map(([g,m])=>{m=$(m,D);const {groupId:q,name:v,shortDescription:w}=B(g,b[g+"Id"]);$("img",m).attr({"data-nativeimgkey":"icon_skill_"+q,"data-src":"resource/image_native/art/icon_skill_"+q+".png"});$(".name",m).text(v);$(".detail",m).text(w)});a=$(".commandList",D);for(h=0;5>h++;a.append($("<li>",{"class":f.all_discs||b["commandType"+h]})));X&&(a=B("pieceskill",X),h=a.groupId,$(".command",D).after($("<div>",{"class":"commonFrame3 connect",
append:[$("<p>",{"class":"common_title_frame",text:"EX Skill"}),$("<div>",{"class":f.keep_exbug?"flexbox":"flexBox",append:[$("<p>",{"class":"img",append:$("<img>",{"data-nativeimgkey":"icon_skill_"+h,"data-src":"resource/image_native/art/icon_skill_"+h+".png"})}),V(a)]})]})));Y&&(a=b.doppelCharaNo,$(".magia",D).append($("<div>",{"class":"doppel doppelDetail",append:$("<div>",{"class":"flexBox",append:[$("<p>",{"class":"img doppel",append:[$("<img>",{"data-nativeimgkey":"mini_"+a+"_dd","data-src":"resource/image_native/mini/image/mini_"+
a+"_dd.png"}),$("<span>",{"class":"bg"})]}),V(B("magia",Y))]})})));a=$("<img>",{"data-nativeimgkey":"card_"+n+"_d","data-src":"resource/image_native/card/image/card_"+n+"_d.png"});h=$(".discPreview",L);for(l=0;5>l++;h.append($("<div>",{"class":"discWrap "+b["commandType"+l],append:[$("<div>",{"class":"discText"}),a]}).clone()));y[d].forEach((g,m)=>{const q=g.cardId,v="\u2605"+ +g.rank.split("RANK_")[1],w=T(d,q);$(".miniCharaBtn",L).append($("<p>",w?{"class":"mb_pink se_decide"+(q==n?" selected":""),
tabindex:"4",data:{commandtype:"card",cardarrindex:m}}:{"class":"mb_pink off"}).text(v));$(".selIllustIcon",L).append($("<div>",{"class":"cardIllustWrap"}).append($("<div>",w?{"class":"userCharaIcon "+g.attributeId,append:U(g)}:{"class":"offIcon"}),$("<p>",w?{"class":"mb_pink se_decide"+(q==n?" selected":""),text:v,tabindex:"5",data:{cardarrindex:m}}:{"class":"mb_pink off",text:v})))});$("#cardDetail").data({charaId:d}).off().on("pointerup",".collectionBack",()=>history.back()).on("pointerup","#detailCardImage>.cardImg,#detailCardImage>.zoomImg",
()=>$("#detailCardImage").toggleClass("zoom")).on("pointerup","#detailTab>li",R).on("pointerup",".moviePlayBtn",()=>setTimeout(g=>g.removeClass(),1500,$("#ready").addClass(["preNativeFadeIn"]))).on("pointerup",".cardIllustWrap>.mb_pink",ha).on("pointerup",".miniCharaBtn>.mb_pink",ia).empty().append(c);return!0},R=a=>{a=a.currentTarget?$(a.currentTarget).attr("name"):a;$("#cardDetailWrap").removeClass().addClass([a]);$("#detailTab>li").removeClass(["current"]).filter("[name="+a+"]").addClass(["current"])},
ha=a=>{a.preventDefault();a=$(a.currentTarget);const {cardId:b,rank:c,attributeId:d,illustrator:e}=y[$("#cardDetail").data("charaId")][a.data("cardarrindex")];$(".cardIllustWrap>.selected").removeClass(["selected"]);a.addClass(["selected"]);a="frame_"+d.toLowerCase()+"_"+c.toLowerCase();const k=$("#detailCardImage");$(".cardImg,.zoomImg",k).attr({"data-nativeimgkey":"card_"+b+"_c","data-src":"resource/image_native/card/image/card_"+b+"_c.png"});$(".cardFrame",k).attr({["data-nat"+x.substr(1,2)+"ebgkey"]:a,
"data-src":"resource/image_native/card/frame/"+a+".png"});$(".illustrator").text(e);$(".selIllustTitle").text("\u2605"+ +c.split("RANK_")[1]+" Illustrator:");A()},ia=a=>{a.preventDefault();a=$(a.currentTarget);if(!a.is(".off,.selected")){$(".miniCharaBtn>.selected").removeClass("selected");var {cardarrindex:b,commandtype:c}=a.addClass(["selected"]).data(),{miniCharaNo:d,cardId:e}=y[$("#cardDetail").data("charaId")][b||0];"chara"==c?(b="mini/image/",c="mini_"+d+"_d"):(b="card/image/",c="card_"+e+"_d");
$(".discPreview>.discWrap>img").attr({["data-nat"+x.substr(1,2)+"eimgkey"]:c,"data-src":"resource/image_native/"+b+c+".png"});A()}},ja=a=>{a.preventDefault();$(".tabBtns>.current").removeClass(["current"]);$("#charaWrap").removeClass().addClass([$(a.currentTarget).addClass(["current"]).data("att").toLowerCase(),"commonFrame2"])};$(document).on("pointerdown",".TE",a=>$(a.currentTarget).not(".off,.current,.selected").addClass(["touch"])).on("pointermove pointerup",".TE",a=>$(a.currentTarget).removeClass(["touch"])).on("pointerdown",
"body",a=>setTimeout(b=>b.remove(),700,$("<div>",{"class":"commonEffect",css:{top:a.clientY-128+"px",left:a.clientX-128+"px"},append:[$("<div>",{"class":"effect01"}),$("<div>",{"class":"effect02"}),$("<div>",{"class":"effect03"})]}).appendTo("body"))).on("keydown","[tabindex]",a=>("Enter"==a.key&&$(a.currentTarget).trigger("pointerup"),!0)).on("contextmenu",a=>(a.preventDefault(),document.documentElement.requestFullscreen().catch(u))).one("DOMContentLoaded",()=>{z(!0);P();$(window).on({resize:()=>
F=F?clearTimeout(F):setTimeout(P,500),popstate:aa,"error unhandledrejection":J});history.replaceState({page:"mgirls"},"Magical Girls Gallery");const a=Z((document.cookie.match(/(?:^|; )gallery=([^;]*)/)||[0,null])[1],(document.cookie.match(/(?:^|; )adjustments=([^;]*)/)||[0,null])[1]);f.mirror&&$("body").addClass(["lm_rorrim"]);f.limit_height&&$("body").addClass(["lm_limit_height"]);f.fix_titlebug&&K({raw:["{margin-left:8px;}",'::before{content:"[";}','::after{content:"]";}'].map(b=>"#detailCardName>.charaName>.title"+
b)});f.no_file&&$("<a/>",{id:"lm_use_setup",href:"/setup"}).appendTo("body");f.text_case&&$("body").addClass(["lm_to"+f.text_case]);f.font?I("font/"+f.font).then(K).catch(u):K({href:"https://fonts.googleapis.com/css?family=Open+Sans:600"});Promise.all("art card_d card_f frame mini_d mini_dd mini_s mirrors".split(" ").map(I)).then(b=>{var c=b.pop().data;try{t=JSON.parse([...c].reverse().join(""))}catch(d){J(d)}b.forEach(O);r=JSON.parse(a).data||{};b=$("#charaWrapInner").css({display:"none"});N=$("#tmplCharaDetail").detach().removeAttr("id style");
t.chara.data.forEach(ea);A();z(!1);b.css({display:"block"});$("#tabArea>.tabBtns>li").on("pointerup",ja)}).catch(u)})})
("todestrieb", "LiviaMedeiros");
