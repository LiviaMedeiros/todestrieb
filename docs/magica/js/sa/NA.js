/*! todestrieb: Magical Girls Gallery © 2021 LiviaMedeiros */
'use strict';((R,S)=>{var v=null,I={},h={fix_scrollbug:!1,fix_titlebug:!1,keep_statbug:!1,keep_exbug:!1,limit_height:!1,hide_missing:!1,show_kana:!1,text_case:!1,font:"koruri",no_file:!1,all_discs:!1,mirror:!1},T=null,J=null;const w=new Map,K=new Map,B=new Map,C=new Map,U=["lm_click","lm_touch"],L=(a,b=189)=>{a=a.replace(/[^A-Za-z0-9\+\/]/g,"");for(var c=a.length,d=Math.ceil(3*c+1>>2),f=new Uint8Array(d),g,n=0,p=0,q=0;q<c;q++){g=q&3;let k=a.charCodeAt(q);n|=(64<k&&91>k?k-65:96<k&&123>k?k-71:47<k&&
58>k?k+4:43===k?62:47===k?63:0)<<6*(3-g);if(3===g||1===c-q){for(g=0;3>g&&p<d;g++,p++)f[p]=n>>>(16>>>g&24)&255^b;n=0}}return f},u=document.getElementById.bind(document);document.querySelectorAll.bind(document);const l=(a="div",b={},c=[])=>{const {d={},c:f={},g={}}=b;(a=Object.assign(document.createElement(a),g)).append(...c);Object.assign(a.dataset,d);a.classList.add(...f);return a},M=a=>fetch(new URL("magica/json/"+a+".json",location.origin),{cache:"force-cache"}).then(b=>location.hostname.toLowerCase().startsWith(R)&&
b.json()),V=a=>Object.entries(a).forEach(([b,c])=>C.set(b,new URL(URL.createObjectURL(new Blob([L(c,0)],{type:"image/png"}))))),fa=(a,b=!1)=>{a||(h.no_file=!0,a='{"data":{}}');try{I=Object.freeze(JSON.parse(a))}catch(c){return N(c)}if(b)try{b=JSON.parse(b)}catch{}Object.assign(h,("object"===typeof b?b:{})||{},I.adjustments||{});return I},D=a=>document.documentElement.classList.toggle("connecting",a),ha=a=>{a=(new TextDecoder).decode(L(a));try{v=Object.freeze(JSON.parse(a))}catch(b){N(b)}v.chara.forEach(({id:b})=>
w.set(b,v.card.filter(c=>c.charaNo===b)))},O=(a,b=[],c=2,d=100)=>{a.font&&b.push("@font-face{font-family:'Open Sans';src:url("+URL.createObjectURL(new Blob([L(a.font)],{type:"font/ttf"}))+");}");a.raw&&b.push(...a.raw);a.href&&document.head.append(l("link",{g:{rel:"stylesheet",type:"text/css",href:a.href}}));(new Promise(f=>{const g=setInterval(()=>{var n=document.styleSheets[c];return n&&(clearInterval(g),f(n))},d)})).then(f=>b.forEach(g=>f.insertRule(g,f.cssRules.length)))},W=(a=document.documentElement.classList)=>
{a.remove(...U);a.add([U[+/ios|android/i.test(navigator.userAgent)]])},ia=a=>(a=a.originalEvent?.state)&&a.chara&&a.card?X(a):(u("mainContent").classList.remove("hide"),u("cardDetail").classList.add("hide"),Y("status")),x=a=>{document.documentElement.classList.add("lm_warn");Object.assign(u("loading")??{},{title:"An error occured. You can try to reload the page.",onpointerup:()=>location.reload()});return console.warn(a),!1},N=a=>{document.documentElement.classList.add("lm_error");$("#loading").attr({title:"An error occured. You can report about it."}).find("p").on("pointerup",
()=>location.assign(new URL(S+"/"+R+"/issues","https://github.com")));return console.error(a.originalEvent),!1},Z=a=>{a.forEach((b,c)=>B.set(c,b));B.forEach((b,c)=>(b=C.get(b))?($("img[data-nativeimgkey="+c+"]").removeAttr("data-nativeimgkey data-src").attr({src:b}),$(".lm_ob[data-nativebgkey="+c+"]").removeClass(["lm_ob"]).removeAttr("data-nativebgkey data-src").css({backgroundImage:"url("+b+")"})):x(c))},E=(a=new Map)=>{$("img").filter("[data-nativeimgkey]").each((b,{dataset:c})=>(b=c.nativeimgkey)&&
!B.has(b)?a.set(b,c.src):!0);$(".lm_ob").filter("[data-nativebgkey]").each((b,{dataset:c})=>(b=c.nativebgkey)&&!B.has(b)?a.set(b,c.src):!0);if([...a.values()].every(C.has.bind(C)))return Z(a);D(!0);Promise.all([...(new Set([...a.keys()].filter(b=>/^card_\d{5}_c$/.test(b))))].map(b=>M("card_c_"+b.substr(5,4)))).then(b=>{b.forEach(V);Z(a);D(!1)}).catch(x)},aa=(a,b)=>h.card_probability?Math.random()<h.card_probability:K.get(a)?.has(b),ja=({attributeId:a,name:b,id:c,title:d,kana:f})=>l("div",{c:["lm_missing",
"chara","commonFrame4","se_decide",a],g:{title:b},d:{charaId:c,maxCardRank:0}},[l("div",{c:["nameWrap"]},[l("span",{c:["att",a]}),l("p",{c:["name"],g:{textContent:b}},[l("span",{c:["title"],g:{textContent:d}})]),l("p",{c:["kana"],g:{textContent:f}})]),l("div",{c:["charaIconWrap"]})]),y=(a,b,c="id")=>v[a].find(({[c]:d})=>d===b),t=(a,b)=>({alt:"","data-nativeimgkey":a,"data-src":"resource/image_native/"+b+"/"+a+".png"}),P=(a,b)=>({["data-nat"+S.substr(1,2)+"ebgkey"]:a,"data-src":"resource/image_native/"+
b+"/"+a+".png"}),la=a=>{const b=a.id,c=h.chara_probability?Math.random()<h.chara_probability:K.get(b)?.size;if(h.hide_missing&&!c)return!1;const d=ja(a);w.get(b).forEach(f=>{var g=$(d);const {id:n,rank:p}=f,q=$("<div>",{"class":"userCharaIcon "+f.attributeId+" "+p});if(aa(f.charaNo,n)){const k=+p.split("RANK_")[1];k>g.data("maxCardRank")&&g.data({maxCardId:n,maxCardRank:k}).removeClass(["lm_missing"]);g.attr({tabindex:"2"});q.append(ba(f))}else q.append($("<span>",{"class":"closed"}));$(".charaIconWrap",
g).append(q)});c&&d.addEventListener("pointerup",ka);u("charaWrapInner").append(d)},ba=a=>[["att","att","attributeId"],["star","star","rank"],["rank","frame","rank"],[!1,"card","id","_f"],["bg","bg","attributeId"]].map(([b,c,d,f=""])=>(d=c+"_"+String(a[d]).toLowerCase()+f,b?$("<span>",{"class":"lm_ob "+b,...P(d,"card/frame")}):$("<img>",t(d,"card/image")))),ka=a=>{if(!a.cancelable&&!a.isTrigger&&h.fix_scrollbug)return!0;a.preventDefault();const {charaId:b,maxCardId:c}=$(a.currentTarget).data();a=
{page:"mgirl",chara:b,card:c};history.pushState(a,"Magical Girl \u2116"+b);return X(a)},X=({chara:a,card:b})=>{if(!ma(y("chara",a),y("card",b)))return!1;E();u("mainContent").classList.add("hide");u("cardDetail").classList.remove("hide")},ca=a=>l("div",{c:["detailWrap"]},[l("p",{c:["name","c_purple"],g:{innerText:a.name}}),l("div",{c:["common_line","lc_beige"]}),l("p",{c:["detail"],g:{innerText:a.shortDescription}})]),ma=(a,b)=>{if(!b)return!1;const c=T.clone(),{id:d,attributeId:f,title:g}=a,{id:n,
rank:p,maxPieceSkillId:[q],doppelMagiaId:k,commandType:da}=b;(e=>{$("#att",e).addClass([f.toLowerCase()]);$(".charaName",e).text(a.name).append(g&&$("<span>",{"class":"title ts_pink",text:g}))})($("#detailCardName",c));var z=t("card_"+n+"_c","card/image");$("#detailCardImage",c).append($("<div>",{"class":"lm_ob cardFrame "+p+" "+f,...P("frame_"+f.toLowerCase()+"_"+p.toLowerCase(),"card/frame")}),$("<img>",{"class":"cardImg se_tabs",title:"Tap to zoom in",...z}),$("<img>",{"class":"zoomImg se_tabs",
title:"Tap to zoom out",...z}),$("<span>",{"class":"moviePlayBtn se_tabs TE",title:"Transformation videos are disabled in this version"}));const ea=+p.split("RANK_")[1],[F,G,Q]=["Status","Skill","Illust"].map(e=>$("#chara"+e,c));(e=>{$("img",e).attr(t("mini_"+b.miniCharaNo+"_s","mini/image"));$("#rare",e).removeClass().addClass([p]).append(Array(ea).fill("<span>").map(m=>$(m)))})($("#cardDetailMiniChara",F));(e=>{$(".currentLv,.maxLv",$("#detailLv",e)).text([1,40,50,60,80,100][+p.split("RANK_")[1]]||
1);$(".type>.tdStyle",e).text({BALANCE:"Balanced",ATTACK:"Attack",DEFENSE:"Defense",MAGIA:"Magia",HEAL:"Heal",SUPPORT:"Support",ULTIMATE:"Ultimate",CIRCLE_MAGIA:"Cycle Magia"}[b.initialType])})($(".statusWrap",F));(e=>({BALANCE:[1,1,1],ATTACK:[.98,1.03,.97],DEFENSE:[.97,.98,1.05],HP:[1.04,.97,.98],ATKDEF:[.99,1.02,1.01],ATKHP:[1.02,1.01,.99],DEFHP:[1.01,.99,1.02]})[b.growthType].map((m,r)=>e.eq(r).text(+b[["hp","attack","defense"][r]]*(1+(h.keep_statbug?3:[0,2,2.2,2.4,2.6,3][+p.split("RANK_")[1]]||
1)*m)|0)))($("#popupCharaStatus .c_red",F));[[".profileWrap>.detail",a.description],[".exProfile1>.tdStyle",a.school],[".selCharacterDesign",a.designer],[".selIllustTitle","\u2605"+ea+" Illustrator"],[".selIllustrator",b.illustrator],[".selCharacterVoice",a.voiceActor]].forEach(([e,m])=>$(e,F).text(m));[["skill",".connect"],["magia",".magiaDetail"]].map(([e,m])=>{m=$(m,G);const {groupId:r,name:H,shortDescription:A}=y(e,b[e+"Id"]);$("img",m).attr(t("icon_skill_"+r,"art"));$(".name",m).text(H);$(".detail",
m).text(A)});$(".commandList",G).append(da.map(e=>$("<li>",{"class":h.all_discs||e})));$(".discPreview",Q).append(da.map(e=>$("<div>",{"class":"discWrap "+e,append:[$("<div>",{"class":"discText"}),$("<img>",t("card_"+n+"_d","card/image"))]}).clone()));q&&(z=y("pieceskill",q),$(".command",G).after($("<div>",{"class":"commonFrame3 connect",append:[$("<p>",{"class":"common_title_frame",text:"EX Skill"}),$("<div>",{"class":h.keep_exbug?"flexbox":"flexBox",append:[$("<p>",{"class":"img",append:$("<img>",
t("icon_skill_"+z.groupId,"art"))}),$(ca(z))]})]})));k&&$(".magia",G).append($("<div>",{"class":"doppel doppelDetail",append:$("<div>",{"class":"flexBox",append:[$("<p>",{"class":"img doppel",append:[$("<img>",t("mini_"+b.doppelCharaNo+"_dd","mini/image")),$("<span>",{"class":"bg"})]}),$(ca(y("magia",k)))]})}));w.get(d).forEach((e,m)=>{var r=e.id;const H="mb_pink se_decide"+(r===n?" selected":""),A="\u2605"+ +e.rank.split("RANK_")[1];r=aa(d,r);$(".miniCharaBtn",Q).append($("<p>",r?{"class":H,tabindex:"4",
data:{commandtype:"card",cardarrindex:m}}:{"class":"mb_pink off"}).text(A));$(".selIllustIcon",Q).append($("<div>",{"class":"cardIllustWrap"}).append($("<div>",r?{"class":"userCharaIcon "+e.attributeId,append:ba(e)}:{"class":"offIcon"}),$("<p>",r?{"class":H,text:A,tabindex:"5",data:{cardarrindex:m}}:{"class":"mb_pink off",text:A})))});$("#cardDetail").data({charaId:d}).off().on("pointerup",".collectionBack",()=>history.back()).on("pointerup","#detailCardImage>img",()=>u("detailCardImage").classList.toggle("zoom")).on("pointerup",
"#detailTab>li",Y).on("pointerup",".moviePlayBtn",()=>setTimeout(e=>e.removeClass(),1500,$("#ready").addClass(["preNativeFadeIn"]))).on("pointerup",".cardIllustWrap>.mb_pink",na).on("pointerup",".miniCharaBtn>.mb_pink",oa).empty().append(c);return!0},Y=a=>{a=a.currentTarget?$(a.currentTarget).attr("data-type"):a;$("#cardDetailWrap").removeClass().addClass([a]);$("#detailTab>li").removeClass(["current"]).filter("[data-type="+a+"]").addClass(["current"])},na=a=>{a.preventDefault();$(".cardIllustWrap>.selected").removeClass(["selected"]);
const {id:b,rank:c,attributeId:d,illustrator:f}=w.get($("#cardDetail").data("charaId"))[$(a.currentTarget).addClass(["selected"]).data("cardarrindex")];a=$("#detailCardImage");$("img",a).attr(t("card_"+b+"_c","card/image"));$(".cardFrame",a).addClass(["lm_ob"]).attr(P("frame_"+d.toLowerCase()+"_"+c.toLowerCase(),"card/frame"));$(".illustrator").text(f);$(".selIllustTitle").text("\u2605"+ +c.split("RANK_")[1]+" Illustrator:");E()},oa=a=>{a.preventDefault();a=$(a.currentTarget);if(!a.is(".off,.selected")){$(".miniCharaBtn>.selected").removeClass("selected");
a=a.addClass(["selected"]).data();var b=w.get($("#cardDetail").data("charaId"))[a.cardarrindex||0];$(".discPreview>.discWrap>img").attr(t(...("chara"===a.commandtype?["mini_"+b.miniCharaNo+"_d","mini/image"]:["card_"+b.id+"_d","card/image"])));E()}},pa=a=>{a.preventDefault();$(".tabBtns>.current").removeClass(["current"]);$("#charaWrap").removeClass().addClass([$(a.currentTarget).addClass(["current"]).data("att").toLowerCase(),"commonFrame2"])};$(document).on("pointerdown",".TE",({currentTarget:a})=>
$(a).not(".off,.current,.selected").addClass(["touch"])).on("pointermove pointerup",".TE",({currentTarget:a})=>$(a).removeClass(["touch"])).on("pointerdown","body",a=>setTimeout(b=>b.remove(),700,(b=>$("<div>",{"class":"commonEffect",css:{top:b.clientY-128+"px",left:b.clientX-128+"px"},append:Array.from({length:3},(c,d)=>l("div",{c:["effect0"+(d+1)]}))}).appendTo("body"))(a))).on("keydown","[tabindex]",a=>("Enter"===a.key&&$(a.currentTarget).trigger("pointerup"),!0)).on("contextmenu",a=>(a.preventDefault(),
document.documentElement.requestFullscreen().catch(x))).one("DOMContentLoaded",()=>{D(!0);W();$(window).on({resize:()=>J=J?clearTimeout(J):setTimeout(W,500),popstate:ia,"error unhandledrejection":N});history.replaceState({page:"mgirls"},"Magical Girls Gallery");const a=fa(...["gallery","adjustments"].map(b=>document.cookie.match(new RegExp("(?:^|;)\\s*"+b+"\\s*=\\s*([^;]*)"))?.pop()||null));h.mirror&&document.documentElement.classList.add("lm_rorrim");h.limit_height&&document.documentElement.classList.add("lm_limit_height");
h.fix_titlebug&&O({raw:["{margin-left:8px;}",'::before{content:"[";}','::after{content:"]";}'].map(b=>"#detailCardName>.charaName>.title"+b)});h.no_file&&document.body.append(l("a",{g:{id:"lm_use_setup",href:new URL("setup",location.origin)}}));h.text_case&&document.documentElement.classList.add("lm_to"+h.text_case);h.show_kana&&document.documentElement.classList.add("lm_kana");h.font?M("font/"+h.font).then(O).catch(x):O({href:new URL("css?family=Open+Sans:600","https://fonts.googleapis.com")});Promise.all("art card_d card_f frame mini_d mini_dd mini_s mirrors".split(" ").map(M)).then(b=>
{ha(b.pop().data);b.forEach(V);Object.entries(a.data).forEach(([c,d])=>K.set(+c,new Set(d.map(Number))));b=u("charaWrapInner");b.style.display="none";T=$($("#tmplCharaDetail").detach()[0].content);v.chara.forEach(la);E();D(!1);b.style.display="block";$("#tabArea>.tabBtns>li").on("pointerup",pa)}).catch(x)})})
("todestrieb", "LiviaMedeiros");
