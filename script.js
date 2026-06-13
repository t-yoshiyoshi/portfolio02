
/* ── Cursor ── */
const cur=document.getElementById('cur'),crg=document.getElementById('crg');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;});
(function t(){
  cur.style.left=mx+'px'; cur.style.top=my+'px';
  rx+=(mx-rx)*.1; ry+=(my-ry)*.1;
  crg.style.left=rx+'px'; crg.style.top=ry+'px';
  requestAnimationFrame(t);
})();
document.querySelectorAll('a,button,.wc,.feat,.tab').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cur.classList.add('ex');crg.classList.add('ex');});
  el.addEventListener('mouseleave',()=>{cur.classList.remove('ex');crg.classList.remove('ex');});
});
 
/* ── Loader ── */
window.addEventListener('load',()=>{
  setTimeout(()=>document.getElementById('loader').classList.add('out'),2000);
  setTimeout(()=>document.getElementById('hbg').classList.add('ld'),2200);
});
 
/* ── Nav ── */
window.addEventListener('scroll',()=>document.getElementById('nav').classList.toggle('st',scrollY>60));
 
/* ── Tabs ── */
document.querySelectorAll('.tab').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.tab').forEach(b=>b.classList.remove('on'));
    document.querySelectorAll('.panel').forEach(p=>p.classList.remove('on'));
    btn.classList.add('on');
    const p=document.getElementById('p-'+btn.dataset.tab);
    p.classList.add('on');
    p.querySelectorAll('.rv').forEach(el=>{
      el.classList.remove('in');
      setTimeout(()=>el.classList.add('in'),60);
    });
  });
});
 
/* ── Scroll Reveal ── */
const ro=new IntersectionObserver(e=>{
  e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('in');});
},{threshold:.1});
document.querySelectorAll('.rv').forEach(el=>ro.observe(el));
 
/* ── Skill bars ── */
const so=new IntersectionObserver(e=>{
  e.forEach(x=>{
    if(x.isIntersecting)
      x.target.querySelectorAll('.skf').forEach(b=>b.style.width=b.dataset.w+'%');
  });
},{threshold:.3});
document.querySelectorAll('.sec-sk').forEach(el=>so.observe(el));
 
/* ── Parallax ── */
window.addEventListener('scroll',()=>{
  const b=document.querySelector('.h-bg');
  if(b) b.style.transform=`translateY(${scrollY*.2}px) scale(1.04)`;
});
 
/* ── Modal data ── */
/*
  bg: CSSクラス名のみ（プレースホルダー）
  または imgUrl: 実画像URL を指定することで実写真に切り替え可能
  例) imgUrl:'https://example.com/photo.jpg'
*/
const md={
  'dtp-m':{
    cat:'DTP / Editorial',
    title:'大学新聞広告 2021',
    desc:'国士舘大学で発行される大学新聞内の学生向けの広告。コロナ禍で学生の不安や生活の注意喚起や支援の情報を掲載。注意喚起は赤、支援関係の情報は緑で示しました。',
    bg:'pd-m',
    imgUrl:'https://t-yoshiyoshi.github.io/portfolio/img/news_01.png',
    meta:[['Year','2021'],['Size','H545mm × W812mm'],['Client','国士舘大学 広報課'],['Tools','Illustrator']]
  },
  'dtp-1':{
    cat:'DTP',
    title:'東京都立科学技術高等学校　イベントポスター',
    desc:'同校の文化祭で行われたイベントポスター。科学技術高校での電気を発生させ、対戦でどちらが早く発生させるかを競わせる実験なので、スピード感と電気を表現した画像を配置させました。',
    bg:'pd-1',
    imgUrl:'https://t-yoshiyoshi.github.io/portfolio/2023_netuden.jpg',
    meta:[['Year','2023'],['Size','A1'],['Client','科学技術高等学校'],['Tools','photoshop / Illustrator']]
  },
  'dtp-2':{cat:'DTP',title:'大学新聞広告2021',desc:'国士舘大学で発行されている大学新聞内の一面広告。在学生、卒業生達がオリンピック、パラリンピックに出場するため制作されました。国士舘カラーの国士舘ブルーをメインに、サブカラーの国士舘レッドを使用して動きのある表現にしました。',bg:'pd-2',meta:[['Year','2021'],['Size','H545mm × W812mm'],['Client','国士舘大学'],['Tools','photoshop / Illustrator']]},


  'dtp-3':{cat:'DTP / Poster',title:'大学新聞広告2021',desc:'国士舘大学で発行されている大学新聞内の一面広告。在学生を紹介するInstagramの告知広告。ペルソナは新入生。学生獲得のために学生のリアルを発信している。10代に刺さるよう柔らかい色味を沢山使用し、国士舘の硬いイメージを払拭する狙いで作成しました。',bg:'pd-3',meta:[['Year','2021'],['Size','H545mm × W812mm'],['Client','国士舘大学'],['Tools','Iphotoshop / Illustrator']]},

  'bn-m':{cat:'Web Banner',title:'「WORLD CUP2026」',desc:'共共同通信社ニュースサイトのWORLD CUP速報と現地リポートのサイトのバナーです。使用できる素材が、選手の画像と、サッカーボールのみで作成を依頼されました。使える素材が少ないため、日本の国旗を使用することを避けるようにとのことでしたが、色味を他の要素と全体的に馴染ませるようにし背景デザインとしてそこに注目されないようにしました。躍動的な背景とともに選手の動きやカラー処理でまとまりのあるバナーに仕上げました。（製作期間2日）同通信社ニュースサイトvisualNews「戦争と表現」バナー。作家のインタビューや紛争地の今をルポ。それぞれの背景を掛け合わせ、テーマの雰囲気に寄せました。',bg:'pb-m',meta:[['Year','2026'],['Sizes','1280px-730px'],['Client','共同通信社'],['Tools','Photoshop']]},

  'bn-1':{cat:'Web Banner',title:'「翻弄される五輪」',desc:'共同通信社ニュースサイトvisualNews「翻弄される五輪」バナー',bg:'pb-1',
  imgUrl:'https://t-yoshiyoshi.github.io/portfolio/img/konton_gorin_top.jpg',
  meta:[['Year','2025'],['Sizes','1280px-730px'],['Client','共同通信社'],['Tools','Photoshop']]},

  'bn-2':{cat:'web Banner',title:'「トランプ2.0 混沌の超大国」',desc:'共同通信社ニュースサイトvisualNews「トランプ2.0 混沌の超大国」バナー',bg:'pb-2',meta:[['Year','2025'],['Format','1280px-730px'],['Client','共同通信社'],['Tools','photoshop']]},

  'bn-3':{cat:'web Banner',title:'「YONTAKU AI」',desc:'共同通信社ニュースサイトvisualNews「YONTAKU AI」バナー',bg:'pb-3',meta:[['Year','2024'],['Format','1100px-360px'],['Client','共同通信社'],['Tools','Illustrator']]},

  'bn-4':{cat:'web Banner',title:'「PREMIR LWAGUE 巨大ビジネスの誕生」',desc:'共同通信社ニュースサイトvisualNews「PREMIR LWAGUE 巨大ビジネスの誕生」バナー',bg:'pb-4',meta:[['Year','2024'],['Format','I1280px-730px'],['Client','共同通信社'],['Tools','Illustrator']]},
  'web-m':{
    cat:'Web Design / UI',
    title:'YONTAKU AI',
    linkUrl:'https://sandbox.kyodo.media/ssl/demo/pc.html?sjkd_page=cont_KA68ccd737c2c52_KA695dfecec1928',
    idpass:{id:'shiodome', pass:'yurikamome'},
    desc:'AIが出題するクイズを解くエンタメサイト。スクロール連動で街のイラストが重なりタイトルが表示、UI/UXを意識し回答すると、正誤が判定され、解説と次の問題が自動スクロールされる仕組みを提案。10問解くとスコアが表示される。デザイン、コーディング、アニメーション、キャラクターデザインを担当。',
    bg:'pw-m',
    imgUrl:'https://t-yoshiyoshi.github.io/portfolio/img/anim_yontaku..png',
    meta:[['Year','2025'],['Type','Entertainment Site'],['Client','共同通信社'],['Tools','Figma / Illustrator / HTML / CSS / JS / GSAP']]
  },

  'web-1':{cat:'Web Design',title:'りんぺい先生の作って遊んでサイエンス　防災編',
    linkUrl:'https://sandbox.kyodo.media/ssl/demo/pc.html?sjkd_page=cont_KA65dd388d4bb8d_KA66e386a47fb4b',
    idpass:{id:'shiodome', pass:'yurikamome'},desc:'子ども向け工作サイトのシリーズ。夏の特別編。防災＋キャンプの要素を含んだ内容で、楽しく防災に活かせる知識を学べるコンテンツになっています。デザイン、動画編集、コーディングまで全て担当。有事の際は子どもでも身を守る対策をユーザーにわかりやすく制作しました。',bg:'pw-1',imgUrl:'https://t-yoshiyoshi.github.io/portfolio/img/bousai_02.png',
  meta:[['Year','2024'],['Type','Educational site'],['Client','共同通信社'],['Tools','Figma /HTML /css /Javascript /Illustrator /photoshop/premiere Pro']]},

  'web-2':{cat:'Web Design',title:'ミラノコルティナパラリンピック 特設サイト',
  linkUrl:'http://sandbox.kyodo.media/ssl/demo/pc.html?sjkd_page=cont_KA69a518db7812c_KA69a51fda70e81',
    idpass:{id:'shiodome', pass:'yurikamome'},
  desc:'ミラノコルティナで開催されたパラリンピックの特設サイト。現地での活躍を写真とともにリポート。サイトデザイン、イラストも一から作成しました。',bg:'pw-2',imgUrl:'https://t-yoshiyoshi.github.io/portfolio/img/mirano_02.jpg', meta:[['Year','2026'],['Type','sports site'],['Client','共同通信社'],['Tools','Figma /HTML /css /Javascript /Illustrator /photoshop']]},


  'web-3':{cat:'Web Design',title:'モンゴル 夏の祭典、小学生疾走',
    linkUrl:'https://sandbox.kyodo.media/ssl/demo/pc.html?sjkd_page=cont_KA6721a8dded758_KA6721a7dc2c77d',
    idpass:{id:'shiodome', pass:'yurikamome'},
  desc:'モンゴル最大のスポーツの祭典「ナーダム」で行われた伝統の馬レースのリポートサイト。写真と動画を沢山掲載するためパララックスを利用し、背景と前面に画像や動画を配置し、スクロールのみで全ての画像とテキストを見れるデザインにしました。',bg:'pw-3',
  imgUrl:'https://t-yoshiyoshi.github.io/portfolio/img/mongorian.jpg',
  meta:[['Year','2025'],['Type','Web Design'],['Client','共同通信社'],['Tools','Figma /HTML /css /Javascript /photoshop']]},
  
  'il-m':{cat:'Illustration',title:'WORLD CUP 2026',desc:'共同通信社ニュースサイト WORLD CUP 2026内の試合開始前のコンテンツに使用されたイラスト。多国の架空の選手をイメージしIllustratorを使用し、全て手描きで仕上げています。ユニフォームのシワや影も細かく入れています 使用ツール：Illustrator',bg:'pi-m',meta:[['Year','2026'],['Medium','Digital'],['Use','website'],['Tools','Illustrator']]},


  'il-1':{cat:'Illustration',title:'船井電機創業者 船井哲良',desc:'共同通信社のyoutube モヤモヤ経済学で使用されたイラスト。イラストレーターを使用し、なるべくリアルに仕上げました。',bg:'pi-1',meta:[['Year','2025'],['Medium','Digital'],['Use','youtube'],['Tools','Illustrator']]},

  'il-2':{cat:'Illustration',title:'ガダルカナル島の戦い',desc:'共同通信社ニュースサイトの「戦争の実相」に使用したイラスト。ガダルカナル島はジャングルで日が当たらないため全体的に暗く作成しました。',bg:'pi-2',meta:[['Year','2025'],['Medium','Digital'],['Use','website'],['Tools','Illustrator']]},
  'il-3':{cat:'Illustration',title:'ニュースがわかるキーワード',desc:'共同通信社の「ニュースがわかるキーワード」内で使用されたイラスト。政治献金、裏金がテーマのもの',bg:'pi-3',meta:[['Year','2024'],['Medium','Digital'],['Use','website'],['Tools','Illustrator']]},
};
 
/* ── openModal ──
   linkUrl: タイトルにリンクを設定（任意）
   idpass : {id, pass} でID/Passを表示（任意）
   imgUrl : 実画像URL（任意。なければCSSグラデーション）
   ── */
function openM(id){
  const d=md[id]; if(!d) return;
 
  // カテゴリ
  document.getElementById('mcat').textContent = d.cat;
 
  // タイトル — linkUrlがあればリンク化、なければテキストのみ
  const titleEl = document.getElementById('mtitle');
  if(d.linkUrl){
    titleEl.innerHTML =
      `<a href="${d.linkUrl}" target="_blank" rel="noopener">${d.title} <span style="font-family:var(--sans);font-size:.55rem;font-weight:300;letter-spacing:.1em;vertical-align:middle;opacity:.6;">↗</span></a>`;
  } else {
    titleEl.textContent = d.title;
  }
 
  // ID / Pass（任意）
  const idpassEl = document.getElementById('midpass');
  if(d.idpass){
    idpassEl.innerHTML =
      `ID &nbsp;<strong>${d.idpass.id}</strong> &ensp;/&ensp; Pass &nbsp;<strong>${d.idpass.pass}</strong>`;
    idpassEl.style.display = 'block';
  } else {
    idpassEl.style.display = 'none';
  }
 
  // 説明文
  document.getElementById('mdesc').textContent = d.desc;
 
  // 画像
  const im = document.getElementById('mimg');
  if(d.imgUrl){
    im.innerHTML = `<div class="mimg-fill" style="background-image:url('${d.imgUrl}');background-repeat:no-repeat;"></div>`;
  } else {
    im.innerHTML = `<div class="mimg-fill ${d.bg}"></div>`;
  }
 
  // メタ情報
  document.getElementById('mmeta').innerHTML =
    d.meta.map(([l,v])=>`<div class="mrow"><span class="mlbl">${l}</span><span class="mval">${v}</span></div>`).join('');
 
  document.getElementById('mbk').classList.add('on');
  document.getElementById('mdl').classList.add('on');
  document.body.style.overflow = 'hidden';
}
 
function closeM(){
  document.getElementById('mbk').classList.remove('on');
  document.getElementById('mdl').classList.remove('on');
  document.body.style.overflow = '';
}
document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeM(); });
 
/* ── Smooth scroll ── */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const t=document.querySelector(a.getAttribute('href'));
    if(t){ e.preventDefault(); t.scrollIntoView({behavior:'smooth'}); }
  });
});
