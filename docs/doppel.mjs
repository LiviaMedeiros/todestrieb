/*! todestrieb: Magical Girls Gallery © 2021 LiviaMedeiros */
'use strict';const f=({pathname:a})=>{a="json"===a.split(".").pop();return new Response(a?"{}":null,{status:a?200:204,statusText:"Sool jim turn to greef sid",headers:{"Cache-Control":"no-store"}})},g=(a,d="")=>Object.entries(a).reduce((c,[e,b])=>(e=`${d}/${e}`,c=Object.assign(c,0===b?{[e]:b}:g(b,e)),c),{}),h="/ /todestrieb.webmanifest /doppel.mjs /familiar.mjs /404 /setup /mackingham /favicon.ico /css/supreme_body.css /magica/css/browser.css /magica/css/common.css /magica/js/sa/NA.js /magica/json/ENtropy.json /img/mokyukyu.png /magica/resource/image_web/common/tapEffect/tap_effect_circle.png /magica/resource/image_web/common/tapEffect/tap_effect_circle_s.png /magica/resource/image_web/common/tapEffect/tap_effect_glitter.png /img/misc/arrow_r.png /img/misc/global_etc.png /img/misc/icon_reset.png /img/misc/touch_screen.png /img/waru/halo_master.png /img/waru/halo_slave.png /img/waru/puru.png /magica/resource/image_web/common/global/global_ap_wrap.png /magica/resource/image_web/common/global/global_back.png /magica/resource/image_web/common/global/global_memoria.png /magica/resource/image_web/common/global/global_menu.png /magica/resource/image_web/common/global/global_shop.png /magica/resource/image_web/common/global/global_unit.png /magica/resource/image_web/common/icon/icon_checkbox.png /magica/resource/image_web/common/icon/icon_checkbox_check.png /magica/resource/image_web/common/icon/icon_help.png /magica/resource/image_web/common/popup/bg_popup.png /magica/resource/image_web/common/popup/bg_popup_title_c.png /magica/resource/image_web/common/popup/bg_popup_title_l.png /magica/resource/image_web/common/popup/bg_popup_title_r.png /magica/resource/image_web/common/popup/popup_close.png".split(" "),
k=Object.keys(g({404:0,CNAME:0,css:{"supreme_body.css":0},"doppel.mjs":0,"familiar.mjs":0,"favicon.ico":0,img:{ending:{"copy.png":0,"logo.png":0,"window.png":0},"gallery.png":0,icon:{"128.png":0,"16.png":0,"192.png":0,"24.png":0,"256.png":0,"32.png":0,"48.png":0,"512.png":0,"64.png":0,"96.png":0,"setup192.png":0,"setup96.png":0},misc:{"arrow_r.png":0,"global_etc.png":0,"icon_reset.png":0,"touch_screen.png":0},"mokyukyu.png":0,"mumiwhy.png":0,tutorial:{"NAgitan.png":0,"homuscreen.png":0},"use_setup.png":0,
waru:{"halo_master.png":0,"halo_slave.png":0,"puru.png":0}},index:0,magica:{css:{"browser.css":0,"common.css":0},js:{sa:{"NA.js":0}},json:{"ENtropy.json":0,"art.json":0,"card_d.json":0,"card_f.json":0,font:{"koruri.json":0,"meguca.json":0},"frame.json":0,"mini_d.json":0,"mini_dd.json":0,"mini_s.json":0,"mirrors.json":0},resource:{image_web:{common:{btn:{"btn_blue_c.png":0,"btn_blue_l.png":0,"btn_blue_r.png":0,"btn_circle_pink.png":0,"btn_common_l.png":0,"btn_common_mini.png":0,"btn_green_c.png":0,
"btn_green_l.png":0,"btn_green_r.png":0,"btn_m_pink.png":0,"btn_m_selected.png":0,"btn_m_white.png":0,"btn_pale_c.png":0,"btn_pale_l.png":0,"btn_pale_r.png":0,"btn_pink_c.png":0,"btn_pink_l.png":0,"btn_pink_r.png":0,"btn_purple_c.png":0,"btn_purple_l.png":0,"btn_purple_r.png":0,"btn_s_gold_01_c.png":0,"btn_s_gold_01_l.png":0,"btn_s_gold_01_r.png":0,"btn_s_gold_02_c.png":0,"btn_s_gold_02_l.png":0,"btn_s_gold_02_r.png":0,"btn_s_gold_03_c.png":0,"btn_s_gold_03_l.png":0,"btn_s_gold_03_r.png":0,"btn_s_pink02_01_c.png":0,
"btn_s_pink02_01_l.png":0,"btn_s_pink02_01_r.png":0,"btn_s_pink_c.png":0,"btn_s_pink_l.png":0,"btn_s_pink_r.png":0,"btn_voice.png":0,"btn_white_c.png":0,"btn_white_l.png":0,"btn_white_r.png":0,"tab_gold_off_b_c.png":0,"tab_gold_off_b_l.png":0,"tab_gold_off_b_r.png":0,"tab_gold_off_c.png":0,"tab_gold_off_l.png":0,"tab_gold_off_r.png":0,"tab_gold_on_b_c.png":0,"tab_gold_on_b_l.png":0,"tab_gold_on_b_r.png":0,"tab_gold_on_c.png":0,"tab_gold_on_l.png":0,"tab_gold_on_r.png":0,"tab_green_off_b_c.png":0,
"tab_green_off_b_l.png":0,"tab_green_off_b_r.png":0,"tab_green_on_b_c.png":0,"tab_green_on_b_l.png":0,"tab_green_on_b_r.png":0,"tab_pink_off_c.png":0,"tab_pink_off_l.png":0,"tab_pink_off_r.png":0,"tab_pink_on_c.png":0,"tab_pink_on_l.png":0,"tab_pink_on_r.png":0},chara:{"att_all.png":0,"att_all_f.png":0,"att_dark.png":0,"att_dark_f.png":0,"att_fire.png":0,"att_fire_f.png":0,"att_light.png":0,"att_light_f.png":0,"att_timber.png":0,"att_timber_f.png":0,"att_void.png":0,"att_void_f.png":0,"att_water.png":0,
"att_water_f.png":0,"bg_chara_list.png":0,"bg_chara_memoria_none_1.png":0,"bg_chara_memoria_none_1_a.png":0,"bg_chara_memoria_none_2.png":0,"bg_chara_memoria_none_2_a.png":0,"bg_chara_memoria_none_3.png":0,"bg_chara_memoria_none_3_a.png":0,"bg_chara_memoria_off.png":0,"bg_chara_memoria_on.png":0,"bg_detail_name.png":0,"bg_disc_accele.png":0,"bg_disc_blast.png":0,"bg_disc_charge.png":0,"bg_memoria_skill_name.png":0,"btn_chara_list.png":0,"chara_base_S.png":0,"chara_frame_S.png":0,"command_accele.png":0,
"command_blast.png":0,"command_blast_h.png":0,"command_blast_v.png":0,"command_charge.png":0,"disc_accele_text.png":0,"disc_blast_h_text.png":0,"disc_blast_v_text.png":0,"disc_charge_text.png":0,"eplv_gauge_c.png":0,"eplv_gauge_l.png":0,"eplv_gauge_r.png":0,"frame_doppel.png":0,"frame_live2d_select.png":0,"icon_chara_off.png":0,"icon_doppel.png":0,"icon_doppel_null.png":0,"icon_lb_none.png":0,"icon_lb_off.png":0,"icon_lb_on.png":0,"icon_live2d.png":0,"icon_magia_none.png":0,"icon_magia_off.png":0,
"icon_magia_on.png":0,"icon_select.png":0,"icon_skill_compose.png":0,"icon_voice.png":0,"lv_max.png":0,"result_arrow.png":0,"result_bg.png":0,"result_bg_name.png":0,"result_icon_equip.png":0,"result_icon_equip_b.png":0,"result_message_title.png":0,"result_mini_btn.png":0,"result_text_episode_level.png":0,"result_text_evolve.png":0,"result_text_level.png":0,"result_text_limit_break.png":0,"result_text_magia_level.png":0,"star_off.png":0,"star_on.png":0,"text_doppel.png":0},frame:{"common_frame.png":0,
"frame01.png":0,"frame02.png":0,"frame_title.png":0,"icon_header_star.png":0,"icon_line01_l.png":0,"icon_line01_r.png":0,"icon_line02_l.png":0,"icon_line02_r.png":0,"point_frame_b_bg.png":0,"point_frame_b_l.png":0,"point_frame_b_r.png":0,"point_frame_bg.png":0,"point_frame_l.png":0,"point_frame_lb_bg.png":0,"point_frame_lb_l.png":0,"point_frame_lb_r.png":0,"point_frame_r.png":0,"point_frame_r_bg.png":0,"point_frame_r_l.png":0,"point_frame_r_r.png":0,"title_frame_c.png":0,"title_frame_l.png":0,"title_frame_r.png":0,
"title_icon.png":0},global:{"apCureBg.png":0,"ap_base.png":0,"connecting.png":0,"gacha_badge.png":0,"gacha_badge_a.png":0,"global_ap_wrap.png":0,"global_back.png":0,"global_battle.png":0,"global_bigBtn_hover.png":0,"global_expframe.png":0,"global_gacha.png":0,"global_home.png":0,"global_memoria.png":0,"global_menu.png":0,"global_menu_hover.png":0,"global_menu_off.png":0,"global_mission.png":0,"global_money_wrap.png":0,"global_quest.png":0,"global_shop.png":0,"global_team.png":0,"global_unit.png":0,
"menu_hover_btn.png":0,"plus_btn.png":0,"plus_hover_btn.png":0},icon:{"icon_checkbox.png":0,"icon_checkbox_check.png":0,"icon_help.png":0},logo:{"logo.png":0},popup:{"bg_popup.png":0,"bg_popup_title_c.png":0,"bg_popup_title_l.png":0,"bg_popup_title_r.png":0,"popup_close.png":0,"userProfile_window_L.png":0,"userProfile_window_M.png":0,"userProfile_window_R.png":0},tapEffect:{"tap_effect_circle.png":0,"tap_effect_circle_s.png":0,"tap_effect_glitter.png":0}},page:{chara:{"arrow.png":0,"bg_chara_data.png":0,
"bg_compose_item_null.png":0,"bg_compose_item_null_s.png":0,"bg_customize_text.png":0,"bg_exp_gauge_c.png":0,"bg_exp_gauge_l.png":0,"bg_exp_gauge_r.png":0,"bg_gift_off.png":0,"bg_gift_on.png":0,"bg_gift_popup.png":0,"bg_magia_material.png":0,"bg_riche.png":0,"btn_chara_off.png":0,"btn_chara_off_a.png":0,"btn_chara_on.png":0,"btn_chara_on_a.png":0,"btn_convert.png":0,"btn_convert_gray.png":0,"btn_custome_main_off.png":0,"btn_custome_main_on.png":0,"btn_max.png":0,"btn_max_gray.png":0,"btn_memoria_equip.png":0,
"btn_minus.png":0,"btn_minus_gray.png":0,"btn_pink.png":0,"btn_plus.png":0,"btn_plus_gray.png":0,"btn_pose.png":0,"btn_top_compose.png":0,"btn_top_compose_a.png":0,"btn_top_customize.png":0,"btn_top_customize_a.png":0,"btn_top_emotion.png":0,"btn_top_emotion_off.png":0,"btn_top_equip.png":0,"btn_top_equip_a.png":0,"btn_top_limitbreak.png":0,"btn_top_limitbreak_a.png":0,"btn_top_magia.png":0,"btn_top_magia_a.png":0,"caption_all.png":0,"caption_dark.png":0,"caption_fire.png":0,"caption_light.png":0,
"caption_timber.png":0,"caption_water.png":0,"chara_sheet.png":0,"conf_leader_off.png":0,"conf_leader_on.png":0,"effect_limitbreak.png":0,"exp_gauge_c.png":0,"exp_gauge_l.png":0,"exp_gauge_r.png":0,"exp_gauge_up_c.png":0,"exp_gauge_up_l.png":0,"exp_gauge_up_r.png":0,"frame_compose_select.png":0,"icon_cc.png":0,"icon_compose_bonus.png":0,"icon_gift_add.png":0,"set_light_circle.png":0,"set_light_sphere.png":0,"success_01.png":0,"success_02.png":0,"success_03.png":0,"tag_cristal.png":0,"text_compose.png":0,
"text_compose_2.png":0,"text_customize.png":0,"text_limitbreak.png":0,"text_magia.png":0},collection:{"archive_base.png":0,"arrow_chara_collection.png":0,"bg_element_header.png":0,"bg_frame.png":0,"btn_collection_chara.png":0,"btn_collection_doppel.png":0,"btn_collection_doppel_gray.png":0,"btn_collection_memoria.png":0,"btn_collection_story.png":0,"btn_collection_witch.png":0,"btn_collection_witch_gray.png":0,"btn_doppel_back.png":0,"btn_doppel_zoom.png":0,"btn_movie.png":0,"btn_voice.png":0,"btn_voice_gray.png":0,
"collection_hover.png":0,"detail_line.png":0,"doppel_frame.png":0,"doppel_none.png":0,"header.png":0,"icon_unknown.png":0,"line_chara_collection.png":0,"line_chara_collection_2.png":0,"memoria_notopen_bg.png":0,"pan_down.png":0,"pan_up.png":0,"profile_header.png":0,"rumor_frame.png":0,"satellite_frame.png":0,"voice_girl_icon.png":0,"voice_sound_icon.png":0,"witch_frame.png":0,"witch_header.png":0}},test:{bg:{"web_common.jpg":0}}}}},"todestrieb.webmanifest":0,setup:0})),l=Array.from({length:Math.ceil(k.length/
50)},()=>k.splice(0,50)),m=(a,d,c=null)=>Promise.all(d.map(e=>self.caches.open(a).then(b=>b.addAll(e)).then(b=>c?.source?.postMessage({h:b}),b=>c?.source?.postMessage({g:b}))));
[["message",a=>{const d=a.data?.action;switch(d){case "grief":return self.caches.delete("todestrieb-web");case "saveMin":return m("todestrieb-vital",[h],a);case "saveMedia":return m("todestrieb-web",l,a);case "saveMeguca":return m("todestrieb-web",l,a).then(()=>m("todestrieb-web",[a.data.meguca.map(c=>`/magica/json/card_c_${c}.json`)],a));default:return a.source.postMessage({unknownAction:d})}}],["install",a=>a.waitUntil(m("todestrieb-vital",[h])),{once:!0}],["fetch",a=>a.respondWith(self.caches.match(a.request).then(d=>
{const c=fetch(a.request,{cache:"force-cache"}).then(e=>self.caches.open("todestrieb-web").then(b=>b.put(a.request,e.clone())).then(()=>e)).catch(()=>d??f(new URL(a.request.url)));return d??c}))]].forEach(a=>self.addEventListener(...a));
