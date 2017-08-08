var tconfig={
    "zhonggong":[1,7],//中宫处理 阴遁1(+1)阳遁7(+1)
    "yuanstyle":"average",//"yuanstyle":"classic",
    "apptitle":"\u262F奇门遁甲",
}
var t={
    "":"",
    "gan":
        "甲 乙 丙 丁 戊 己 庚 辛 壬 癸".split(" "),
    "zhi":
        "子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥".split(" "),
    "jieqibyyinyang":
        "冬至 小寒 大寒 立春 雨水 惊蛰 春分 清明 谷雨 立夏 小满 芒种 夏至 小暑 大暑 立秋 处暑 白露 秋分 寒露 霜降 立冬 小雪 大雪".split(" "),
    "jieqibyyear":
        "小寒 大寒 立春 雨水 惊蛰 春分 清明 谷雨 立夏 小满 芒种 夏至 小暑 大暑 立秋 处暑 白露 秋分 寒露 霜降 立冬 小雪 大雪 冬至".split(" "),
    "liusan":
        "戊 己 庚 辛 壬 癸 丁 丙 乙".split(" "),
    "xunshou":
        "子 戌 申 午 辰 寅".split(" "),
    "zhibyjieqi":
        "丑 寅 卯 辰 巳 午 未 申 酉 戌 亥 子".split(" "),
    "baguabyyinyang":
        "坎 艮 震 巽 离 坤 兑 乾".split(" "),
    "baguabyhoutian":
        "坎 坤 震 巽 乾 兑 艮 离".split(" "),
    "baguabyG":
        "坎 坤 震 巽 中 乾 兑 艮 离".split(" "),
    "xingbyG":
        "蓬 芮 冲 辅 禽 心 柱 任 英".split(" "),
    "menbyG":
        "休 死 伤 杜 死 开 惊 生 景".split(" "),
    "zhibyG":
        "子 未申 卯 辰巳 _ 戌亥 酉 丑寅 午".split(" "),
    "menbyB":
        "休 生 伤 杜 景 死 惊 开".split(" "),
    "xingbyB":
        "辅 英 芮 柱 心 蓬 任 冲".split(" "),
    "shbyB":
        "值符 腾蛇 太阴 六合 白虎 玄武 九地 九天".split(" "),
    "shenbyB":
        "符 蛇 阴 合 虎 武 地 天".split(" "),
    "five":
        "木 火 土 金 水".split(" "),
    "zhibyS":
        "亥 午 寅 酉 寅 酉 巳 子 申 卯".split(" "),
    "sws":
        "长生 沐浴 冠带 临官 帝旺 衰 病 死 墓 绝 胎 养".split(" "),
    "no":
        "零一二三四五六七八九",
    "termyearlen":
        365.24219878,
    "terminfo":
        [0,1272494.4, 2548020.6, 3830143.8, 5120226.6, 6420865.8, 7732018.8, 9055272.6, 10388958, 11733065.4, 13084292.4, 14441592, 15800560.8, 17159347.2, 18513766.2, 19862002.2, 21201005.4, 22529659.8, 23846845.2, 25152606, 26447687.4, 27733451.4, 29011921.2, 30285477.6],
    "ordplate":
        [3,8,1,6,5,0,7,2],
    "ordreal":
        [3,8,1,2,4,6,7,0,5],
    "ordreal2":
        [7,0,5,2,4,6,3,8,1],
}
var rules=[
//十干克应"},
{tgan:"戊",dgan:"戊",title:"伏吟"},
{tgan:"戊",dgan:"乙",title:"青龙和会"},
{tgan:"戊",dgan:"丙",title:"青龙返首"},
{tgan:"戊",dgan:"丁",title:"青龙耀明"},
{tgan:"戊",dgan:"己",title:"贵人入狱"},
{tgan:"戊",dgan:"庚",title:"值符飞宫|飞宫格"},
{tgan:"戊",dgan:"辛",title:"青龙折足"},
{tgan:"戊",dgan:"壬",title:"青龙入天牢"},
{tgan:"戊",dgan:"癸",title:"青龙华盖|仪合"},
{tgan:"乙",dgan:"戊",title:"阴害阳门"},
{tgan:"乙",dgan:"乙",title:"伏吟"},
{tgan:"乙",dgan:"丙",title:"奇仪相佐"},
{tgan:"乙",dgan:"丁",title:"日奇入墓"},
{tgan:"乙",dgan:"己",title:"日奇入墓"},
{tgan:"乙",dgan:"庚",title:"日奇被刑|木入金乡|奇合"},
{tgan:"乙",dgan:"辛",title:"青龙逃走|木入金乡"},
{tgan:"乙",dgan:"壬",title:"日奇入地"},
{tgan:"乙",dgan:"癸",title:"华盖逢星"},
{tgan:"丙",dgan:"戊",title:"飞鸟归巢"},
{tgan:"丙",dgan:"乙",title:"日月并行"},
{tgan:"丙",dgan:"丙",title:"月奇悖师"},
{tgan:"丙",dgan:"丁",title:"星奇朱雀"},
{tgan:"丙",dgan:"己",title:"火悖入刑"},
{tgan:"丙",dgan:"庚",title:"荧入太白"},
{tgan:"丙",dgan:"辛",title:"丙辛相合|奇合"},
{tgan:"丙",dgan:"壬",title:"火入天罗"},
{tgan:"丙",dgan:"癸",title:"华盖悖师"},
{tgan:"丁",dgan:"戊",title:"青龙转光"},
{tgan:"丁",dgan:"乙",title:"人遁"},
{tgan:"丁",dgan:"丙",title:"星随月转"},
{tgan:"丁",dgan:"丁",title:"星奇入阴"},
{tgan:"丁",dgan:"己",title:"火入勾陈"},
{tgan:"丁",dgan:"庚",title:"文书阻隔"},
{tgan:"丁",dgan:"辛",title:"朱雀入狱"},
{tgan:"丁",dgan:"壬",title:"丁壬相合|奇合"},
{tgan:"丁",dgan:"癸",title:"朱雀投江"},
{tgan:"己",dgan:"戊",title:"犬遇青龙"},
{tgan:"己",dgan:"乙",title:"地户逢星"},
{tgan:"己",dgan:"丙",title:"火悖地户"},
{tgan:"己",dgan:"丁",title:"朱雀入墓"},
{tgan:"己",dgan:"己",title:"地户逢鬼"},
{tgan:"己",dgan:"庚",title:"刑格返名"},
{tgan:"己",dgan:"辛",title:"游魂入墓"},
{tgan:"己",dgan:"壬",title:"地网高张"},
{tgan:"己",dgan:"癸",title:"地刑玄武"},
{tgan:"庚",dgan:"戊",title:"天乙伏宫|伏宫格"},
{tgan:"庚",dgan:"乙",title:"太白逢星|合格"},
{tgan:"庚",dgan:"丙",title:"太白入荧|贼格"},
{tgan:"庚",dgan:"丁",title:"亭亭之格|破格"},
{tgan:"庚",dgan:"己",title:"官符刑格|刑格"},
{tgan:"庚",dgan:"庚",title:"太白同宫|战格"},
{tgan:"庚",dgan:"辛",title:"白虎干格"},
{tgan:"庚",dgan:"壬",title:"上格"},
{tgan:"庚",dgan:"癸",title:"大格"},
{tgan:"辛",dgan:"戊",title:"困龙被伤"},
{tgan:"辛",dgan:"乙",title:"白虎猖狂"},
{tgan:"辛",dgan:"丙",title:"干合悖师"},
{tgan:"辛",dgan:"丁",title:"狱神得奇"},
{tgan:"辛",dgan:"己",title:"入狱自刑"},
{tgan:"辛",dgan:"庚",title:"白虎出力"},
{tgan:"辛",dgan:"辛",title:"伏吟天庭"},
{tgan:"辛",dgan:"壬",title:"凶蛇入狱"},
{tgan:"辛",dgan:"癸",title:"天牢华盖"},
{tgan:"壬",dgan:"戊",title:"小蛇化龙"},
{tgan:"壬",dgan:"乙",title:"小蛇得势"},
{tgan:"壬",dgan:"丙",title:"水蛇入火"},
{tgan:"壬",dgan:"丁",title:"干合蛇刑"},
{tgan:"壬",dgan:"己",title:"反吟蛇刑"},
{tgan:"壬",dgan:"庚",title:"太白擒蛇"},
{tgan:"壬",dgan:"辛",title:"腾蛇相缠"},
{tgan:"壬",dgan:"壬",title:"蛇入地罗"},
{tgan:"壬",dgan:"癸",title:"幼女奸淫"},
{tgan:"癸",dgan:"戊",title:"天乙会合"},
{tgan:"癸",dgan:"乙",title:"华盖逢星"},
{tgan:"癸",dgan:"丙",title:"华盖悖师"},
{tgan:"癸",dgan:"丁",title:"腾蛇夭矫"},
{tgan:"癸",dgan:"己",title:"华盖地户"},
{tgan:"癸",dgan:"庚",title:"太白入网"},
{tgan:"癸",dgan:"辛",title:"网盖天牢"},
{tgan:"癸",dgan:"壬",title:"复见腾蛇"},
{tgan:"癸",dgan:"癸",title:"天网四张"},
//八门克应 p140"},
{title:"三奇贵人升殿",tgan:"丁",gua:"兑"},
{title:"三奇贵人升殿",tgan:"丙",gua:"离"},
{title:"三奇贵人升殿",tgan:"乙",gua:"震"},
//或需要三吉门"},
{title:"三奇之灵",tgan:"乙/丙/丁",men:"开/休/生",shen:"阴/合/地/天"},
{title:"奇游禄位",tgan:"乙",gua:"震"},
{title:"奇游禄位",tgan:"丙",gua:"巽"},
{title:"奇游禄位",tgan:"丁",gua:"离"},
{title:"天遁",tgan:"丙",men:"生",dgan:"丁"},
{title:"地遁",tgan:"乙",men:"开",dgan:"己"},
{title:"人遁",tgan:"丁",men:"休",shen:"阴"},
{title:"风遁",tgan:"乙",men:"开/休/生",gua:"巽"},
{title:"云遁",tgan:"乙",men:"开/休/生",dgan:"辛"},
{title:"龙遁",tgan:"乙",men:"开/休/生",gua:"坎"},
{title:"龙遁",tgan:"乙",men:"开/休/生",dgan:"癸"},
{title:"虎遁",tgan:"乙",men:"休/生",dgan:"辛",gua:"艮"},
{title:"虎遁",tgan:"庚",men:"开",gua:"兑"},
{title:"神遁",tgan:"丙",men:"生",shen:"天"},
{title:"鬼遁",tgan:"丁",men:"杜/开",shen:"地"},
{title:"三奇得使",tgan:"乙/丙/丁",men:"使"},
{title:"欢怡",tgan:"乙/丙/丁",star:"符"},
{title:"玉女守门",dgan:"丁",men:"使"},
{title:"真诈",tgan:"乙/丙/丁",men:"开/休/生",shen:"阴"},
{title:"重诈",tgan:"乙/丙/丁",men:"开/休/生",shen:"地"},
{title:"休诈",tgan:"乙/丙/丁",men:"开/休/生",shen:"合"},
{title:"天假",men:"景",tgan:"乙/丙/丁",shen:"天"},
{title:"地假",men:"杜",tgan:"丁/己/癸",shen:"地/阴/合"},
{title:"人假",men:"惊",tgan:"壬",shen:"天"},
{title:"神假",men:"伤",tgan:"丁/己/癸",shen:"地/合"},
{title:"鬼假",men:"死",tgan:"丁/己/癸",shen:"地"},
//凶格尚未校对
//六仪击刑"},
{title:"子刑卯",tgan:"戊",gua:"震"},
{title:"戌刑未",tgan:"己",gua:"坤"},
{title:"申刑寅",tgan:"庚",gua:"艮"},
{title:"午自刑",tgan:"辛",gua:"离"},
{title:"辰自刑",tgan:"壬",gua:"巽"},
{title:"寅刑巳",tgan:"癸",gua:"巽"},
//三奇入墓"},
{title:"三奇入墓",tgan:"乙",gua:"乾/坤"},
{title:"三奇入墓",tgan:"丙",gua:"乾"},
{title:"三奇入墓",tgan:"丁",gua:"艮"},
//三奇受刑"},
{title:"火入水乡",tgan:"丙/丁",gua:"坎"},
{title:"火入水乡",tgan:"丙/丁",dgan:"壬/癸"},
{title:"木入金乡",tgan:"乙",gua:"乾/兑"},
//门迫"},
{title:"门迫",men:"惊/开",gua:"震/巽"},
{title:"门迫",men:"休",gua:"离"},
{title:"门迫",men:"生/死",gua:"坎"},
{title:"门迫",men:"伤/杜",gua:"坤/艮"},
{title:"门迫",men:"景",gua:"乾/兑"},
//反吟（门星）"},
{title:"反吟",men:"休",gua:"离"},
{title:"反吟",men:"伤",gua:"兑"},
{title:"反吟",men:"景",gua:"坎"},
{title:"反吟",men:"惊",gua:"震"},
{title:"反吟",star:"蓬",gua:"离"},
{title:"反吟",star:"冲",gua:"兑"},
{title:"反吟",star:"英",gua:"坎"},
{title:"反吟",star:"柱",gua:"震"},
//悖格"},
{title:"悖格",tgan:"丙",dgan:"符"},
{title:"悖格",tgan:"符",dgan:"丙"},
{title:"悖格",tgan:"丙",dgan:"年干/月干/日干/时干"},
{title:"飞干格",tgan:"日干",dgan:"庚"},
{title:"岁格",tgan:"庚",dgan:"年干"},
{title:"月格",tgan:"庚",dgan:"月干"},
{title:"日格",tgan:"庚",dgan:"日干"},
//五不遇时
{title:"五不遇时",sizhu:"日干甲时干庚时支午"},
{title:"五不遇时",sizhu:"日干乙时干辛时支巳"},
{title:"五不遇时",sizhu:"日干丙时干壬时支辰"},
{title:"五不遇时",sizhu:"日干丁时干癸时支卯"},
{title:"五不遇时",sizhu:"日干戊时干甲时支寅"},
{title:"五不遇时",sizhu:"日干己时干乙时支丑"},
{title:"五不遇时",sizhu:"日干庚时干丙时支子"},
{title:"五不遇时",sizhu:"日干辛时干丁时支酉"},
{title:"五不遇时",sizhu:"日干壬时干戊时支申"},
{title:"五不遇时",sizhu:"日干癸时干己时支未"},
//时干入暮
{title:"时干丙入墓",sizhu:"时干丙",gua:"乾"},
{title:"时干丁入墓",sizhu:"时干丁",gua:"艮"},
{title:"时干壬入墓",sizhu:"时干壬",gua:"巽"},
{title:"时干癸入墓",sizhu:"时干癸",gua:"坤"},
{title:"时干戊入墓",sizhu:"时干戊",gua:"乾"},
{title:"时干己入墓",sizhu:"时干己",gua:"艮"},
{title:"时干乙入墓",sizhu:"时干乙",gua:"乾"},
{title:"时干庚入墓",sizhu:"时干庚",gua:"艮"},
{title:"时干辛入墓",sizhu:"时干辛",gua:"巽"},
{title:"时干甲入墓",sizhu:"时干甲",gua:"坤"},  
]
var qimen={
    dgan:"",
    tgan:"",
    sizhu:"",
    gua:t.baguabyG,   
    star:"",
    men:"",
    shen:"",
    dx:null,
    ju:null,
    box:null,
    boxres:null,
    boxhead:null,
}
function jieqivalue(yr,no){
    //从0开始，第一个节气是小寒
    var val,basedx;
    basedx=Date.parse("2016/01/06 06:08:21")+t.termyearlen*24*60*60*1000*(yr-2016);
    val=new Date();
    val.setTime(basedx+t.terminfo[no]*1000);
    return val;
}
function jieqi(dx){
    var y,m,d,d1,d2,r,r2,y2;
    y=dx.getFullYear();
    m=dx.getMonth();
    d=dx.getDate();
    d1=jieqivalue(y,m*2);
    d2=jieqivalue(y,m*2+1);
    if (dx<d1) 
        r=m*2-1
    else if(dx<d2)
        r=m*2
    else
        r=m*2+1
    if (r<0) {r=r+24;y=y-1;}
    r2=(r+1)%24;
    y2=y;
    if (r+1>23){y2=y2+1;}
    past=(dx-jieqivalue(y,r))/1000/3600/24;
    past=past.toFixed(2);
    percentage=(dx-jieqivalue(y,r))/(jieqivalue(y2,r2)-jieqivalue(y,r));
    return {"name":t.jieqibyyear[r],"past":past,"percentage":percentage};
}
function nianzhu(dx){
    var y,a,b,c;
    y=dx.getFullYear();
    a=y%10;
    a=a-3;
    if (a<=0) a=a+10;
    b=y%100;
    if (y>=1800 && y<=1899) 
        b=b+9
    else if (y<=1999)
        b=b+1
    else if (y<=2099)
        b=b+5
    b=b%12;
    if (b==0) b=12;
    return t.gan[a-1] + t.zhi[b-1];
}
function yuezhu(dx){
    var xs,a,b,c;
    xs=Array(2,4,6,8,0);
    b=Math.floor(t.jieqibyyear.indexOf(jieqi(dx).name)/2);
    c=t.gan.indexOf(nianzhu(dx).substr(0,1));
    a=xs[c%5]+b-1;
    a=a%10;
    return t.gan[a] + t.zhibyjieqi[b];
}
function rizhu(dx){
    var y,m,d,s,s2,r,u,x;
    var a,b;
    y=dx.getFullYear();
    s=Number(String(y).substr(-2))-1;
    s2=Math.floor(s/4);
    u=s%4;
    m=Number(Array(0,31,-1,30,0,31,1,32,3,33,4,34)[dx.getMonth()+1-1]);
    d=dx.getDate();
    x=Number(Array(3,47,31,15,0,44,28,12,57,41)[Math.floor((y-1)/100-16)]);
    r=s2*6+5*(s2*3+u)+m+d+x;
    if (((y%4==0 && y%100!=0) || (y%400==0)) && (dx.getMonth()+1>2)) r=r+1;
    //这里还有个当天23点之后也是下一天
    if (dx.getHours()>22) r=r+1;
    r=r%60;
    a=r%10;
    b=r%12;
    if (a==0) a=10;
    if (b==0) b=12;
    return t.gan[a-1] + t.zhi[b-1];
}
function shizhu(dx){
    var z,g;
    z=Math.floor(((dx.getHours()+1) % 24)/2)+1;
    g=(t.gan.indexOf(rizhu(dx).substr(0,1))+1)*2+z-2;
    g=g%10;
    if (g<=0) g=g+10;
    //console.log(g); 
    return t.gan[g-1] + t.zhi[z-1];
}
function sanyuan(dx,style){
    var yuan,k;
    var gi,zi,gs,zs,zi2,g,z;
    var ab,xo;
    //console.log(style);
    //茅山起局
    if (style=="maoshan"){
        yuan=Math.floor(jieqi(dx).past/5);
    }
    //平均分法
    else if (style=="average"){
        //console.log(jieqi(dx).percentage);
        k=jieqi(dx).percentage;
        if (k<1/3) 
            yuan=0
        else if (k<2/3)
            yuan=1
        else
            yuan=2
    }
    //根据日干计算
    else if (style="classic"){
        gs=["子午卯酉","寅申巳亥","辰戌丑未"];
        ab=rizhu(dx);
        gi=t.gan.indexOf(ab[0]);
        zi=t.zhi.indexOf(ab[1]);
        xo=gi%5;
        zi2=zi-xo;
        if (zi2<0) zi2=zi2+12;
        z=t.zhi[zi2];
        for (var i=0;i<3;i++){
            if (gs[i].indexOf(z)>-1) {yuan=i;break;};
        }
        //console.log("yuan",yuan);
            
    }

    return yuan;
}
function yinyangju(dx){
    var k,a,b,c,d,yy;
    //获取节气对应的阴阳变化顺序，0~3阳，4~7阴
    k=t.jieqibyyinyang.indexOf(jieqi(dx).name);
    a=Math.floor(k/3);
    b=k%3;
    //console.log(a,b);
    yy=(a<4)?1:-1;
    //获得节气对应八卦在九宫中的序号
    k=t.baguabyG.indexOf(t.baguabyyinyang[a]);
    //八卦中第一个节气上元局数为k+1
    c=k+1;
    //根据同一卦中节气的顺序变化
    c=b*yy+c;
    //上中下元
    c=c+sanyuan(dx,tconfig.yuanstyle)*6*yy;
    //归一化
    c=yy*((c+9*9)%9);
    if (c==0) c=yy*9;
    //console.log("c",c);
    return (c);
}

function swsRel(sg,sz){
    var a,b,tk,sz2,ox;
    ox="";
    for (var i=0;i<sz.length;i++){
        sz2=sz[i];
        a=t.zhi.indexOf(sz2);
        b=t.zhi.indexOf(t.zhibyS[t.gan.indexOf(sg)]);
        tk=a-b;
        if(t.gan.indexOf(sg)%2!=0) tk=-tk;
        if(tk<0) tk=tk+12;//
        ox=ox+t.sws[tk]+"/";
    }
    return ox.substr(0,ox.length-1);
}


//判断是否匹配某个格局
function boxIs(boxid,ruleid){
    var k,vk,v1,v11,v2,k1,k2;
    var sub,insub,insubsub;
    var zs="年月日时",ks="干支";
    for (var key in rules[ruleid]){
        if (key=="tgan" || key=="dgan"){
            k="liusan"
            for (var i=0;i<zs.length;i++){
                //替换年干->对应的六三
                for (var j=0;j<ks.length;j++){
                    rules[ruleid][key]=rules[ruleid][key].replace(new RegExp(zs[i]+ks[j], 'g'),qimen.sizhu.substr(i*2+j,1));            
                    
                }
                
            }
        }
        else if (key=="shen") k="shenbyB"
        else if (key=="star") {
            k="xingbyG";
            rules[ruleid][key]=rules[ruleid][key].replace(new RegExp("符", 'g'),t.xingbyB[qimen.xid] );
            }
        else if (key=="men") {
            k="menbyB";
            rules[ruleid][key]=rules[ruleid][key].replace(new RegExp("使", 'g'),t.menbyB[qimen.xid] );            
            }
        else if (key=="gua") k="baguabyG"
        else if(key=="title") continue 
        v1=rules[ruleid][key].split("/"); 
        //sub：初始为错，如果有一次insub正，就无视以后，最终得到sub
        insub=false;
        for (vk in v1){
            v11=v1[vk];
            //子条件中，一个吻和就继续true
            if (insub) continue;
            //当前时间，都是并列
            if (key=="sizhu"){
                //subsub：初始为正，如果有一次错，就无视以后的计算，最终得到的insub是subsub
                insubsub=true;
                for (var i=0;i<v11.length/3;i++) {
                    if (insubsub==false) continue;
                    k1=v11.substr(i*3+2,1);
                    insubsub= (qimen[key].substr(zs.indexOf(v11.substr(i*3,1))*2+ks.indexOf(v11.substr(i*3+1,1)),1)==k1);
                }
                insub=insubsub;
            }
            else{

                v2=qimen[key][boxid];
                //insub= (t[k].indexOf(v11)==v2);
                //console.log("k",k);
                //insub= (v11==qimen[key][v2]);
                insub= (t[k].indexOf(v11)==v2);
                if (rules[ruleid]["men"]=="生/死"){
                }
            }
        }
        sub=insub;
        //sub指每个条件，只要有一项不正确就返回错
        if (!sub) return false;
    }
    
    return true;
}

function tellbox(boxid){
    var ox,rid,swstate;
    if (boxid!=4){
        swstate=t.liusan[qimen.tgan[boxid]]+" "+swsRel(t.liusan[qimen.tgan[boxid]],t.zhibyG[boxid])+"<br />";
        swstate=swstate+t.liusan[qimen.dgan[boxid]]+" "+swsRel(t.liusan[qimen.dgan[boxid]],t.zhibyG[boxid])+"<br />";
        ox="<h2>"+t.baguabyG[boxid]+t.no[boxid+1]+"宫</h2>"+swstate;
        for (var i=0;i<qimen.boxres[boxid].length;i++){
            rid=qimen.boxres[boxid][i];
            ox=ox+"<li>"+rules[rid].title+"</li>(";
            for (var k in rules[rid]){
                if (k!="detail" && k!="title") ox=ox+rules[rid][k]+"+";
            }
            ox=ox.substr(0,ox.length-1)+")";
        }
    }
    else {
        ox="";
    }
    return ox;
}

//计算九宫内的元素
function initQimen(dx){
    var ju=yinyangju(dx);
    var dgan=(ju>0)?"012345678":"087654321";
    var seq=(ju>0)?"01234567":"07654321";
    var tgan,star,men,shen;
    var k,xunshou,xid,xpos,xposzero,mid,mpos,spos
    var osx,jux,c,temp,temp2,temp3,temp4,temp5,dbg,spos0;
    var tg1,tg2,tg3,tg4,tg5,tg6,tg7,tg8;
    dbg="";
    //计算布局：地盘干
    jux=Math.abs(ju)-1;
    dgan=dgan.substr(-jux) + dgan.substr(0,9-jux); //if (k!=0)
    //根据时柱，计算天盘旬首：戊己庚辛壬癸0~5
    var vidx=[0,-10,-8,-6,-4,-2];
    ab=shizhu(dx);
    k=t.gan.indexOf(ab.substr(0,1))-t.zhi.indexOf(ab.substr(1,1));
    if (k>0) k=k-12;
    //console.log("k",k);
    k=vidx.indexOf(k);
    xunshou=k;
    //xid：旬首宫位，也是星（值符）的id
    //mid：门（值使）的序号，首先根据xid确定宫对应的门，需要再转换成八个里面的顺序
    xid=dgan.indexOf(xunshou);
    mid=t.menbyB.indexOf(t.menbyG[xid]);
    //初始坐标xpos：星（值符）位置即时干所在宫
    //因为现在时间的天干有10种，宫只有9个，所以如果时干为甲，那么转换成旬首对应的六仪所在宫
    k=t.liusan.indexOf(ab.substr(0,1));
    k=(k<0)?xunshou:k;
    xpos=dgan.indexOf(k);
    xposzero=xpos;
    //初始坐标mpos：门（值使）位置，根据 时支 与 旬首地支的差值，从 旬首宫位 开始，顺推门盘宫位
    k=t.zhi.indexOf(ab.substr(1,1))-t.zhi.indexOf(t.xunshou[xunshou]);
    if (k<0) k=k+12;
    k=(ju>0)?(xid+k):(xid-k);
    k=(k+18)%9
    mpos=k;
    //xpos作为时干在地盘中的宫位，不可以在中间，涉及后面的转盘
    if (mpos==4) mpos=tconfig.zhonggong[(Math.abs(ju)+ju)/ju/2];
    if (xpos==4) xpos=tconfig.zhonggong[(Math.abs(ju)+ju)/ju/2];
    //初始坐标spos：八神位置
    spos=xpos;
    //计算布局：天盘干，根据地盘干，进行旋转 时干所在宫位-旬首对应地盘
    var tgax=[9,9,9,9,9,9,9,9,9,9];
    var starx=[9,9,9,9,9,9,9,9,9,9];
    var menx=[9,9,9,9,9,9,9,9,9,9];
    var shenx=[9,9,9,9,9,9,9,9,9,9];
    ////旬首的地盘宫位不可为中宫，与上面xpos涉及转动
    temp2=dgan.indexOf(xunshou);
    //console.log(temp2);
    if (temp2==4) temp2=tconfig.zhonggong[(Math.abs(ju)+ju)/ju/2];
    temp5=temp2;
    temp2=(t.ordplate.indexOf(xpos)-t.ordplate.indexOf(temp2)+8)%8;
    tg3=xid;
    if (tg3==4) tg3=tconfig.zhonggong[(Math.abs(ju)+ju)/ju/2];
    tg1=t.ordplate.indexOf(xpos)-t.ordplate.indexOf(tg3);
    tg1=(tg1+8)%8;
    for (var i=0;i<9;i++){
        temp4=dgan.indexOf(i);        //若地盘干位于中宫，将移动后的天盘干数据存储到tgax[9]，小数点分隔为六三、宫位
        //天盘干
        if (temp4==4) {
            temp4=tconfig.zhonggong[(Math.abs(ju)+ju)/ju/2];
            temp3=t.ordplate[(temp2+t.ordplate.indexOf(temp4)+8)%8];
            tgax[9]=i+temp3/10;
        }
        else{
            temp3=t.ordplate[(temp2+t.ordplate.indexOf(temp4)+8)%8];
            tgax[temp3]=i;
        }
        
        //星盘 中宫就是在xid做处理，这里没有记录额外信息
        //tg2=t.ordplate[(t.ordplate.indexOf(i)+tg1)%8];
        tg2=t.ordplate[(t.ordplate.indexOf(i)-tg1+8)%8];
        //console.log(i,"tg2",t.ordplate.indexOf(i),tg1,tg2);
        starx[i]=tg2;
        //门盘 都是顺时针
        tg4=(mid+t.ordplate.indexOf(i)-t.ordplate.indexOf(mpos)+8)%8;
        menx[i]=tg4;
        //神盘 阳顺阴逆
        tg5=seq[(t.ordplate.indexOf(i)-t.ordplate.indexOf(xpos)+8)%8];
        shenx[i]=tg5;
        
      }
    tgan=tgax.join("");
    star=starx.join("");
    men=menx.join("");
    shen=shenx.join("");
    //格局分析
    qimen.dgan=dgan;
    qimen.tgan=tgan;
    qimen.star=star;
    qimen.gua="012345678";
    qimen.men=men;
    qimen.shen=shen;
    qimen.sizhu=nianzhu(dx)+yuezhu(dx)+rizhu(dx)+shizhu(dx);
    qimen.xid=xid;
    qimen.dx=dx;
    qimen.ju=ju;
    var boxres=[[],[],[],[],[],[],[],[],[]];
    //for (var i=0;i<1;i++){
    for (var i=0;i<9;i++){
        for (var j=0;j<rules.length;j++){
            if (boxIs(i,j)) {
                //console.log(t.baguabyG[i]+"宫 - "+rules[j].title);
                boxres[i].push(j);
            }
        }
    }
    qimen.boxres=boxres;
    //打印布局
    //osx="<h1><a style='text-decoration:none;' href='#now'>"+tconfig.apptitle+"</a></h1>";
    osx="<h1>"+tconfig.apptitle+"</h1>";
    osx=osx+"<br />" + "时间&nbsp;&nbsp;"+qimen.dx.toLocaleString();
    osx=osx+"<br />" + "节气&nbsp;&nbsp;"+"阴阳"[(Math.abs(qimen.ju)+qimen.ju)/qimen.ju/2]+"遁&nbsp;&nbsp;" + t.no[Math.abs(qimen.ju)]+"局&nbsp;&nbsp;"+jieqi(qimen.dx).name+"&nbsp;&nbsp;"+"上中下"[sanyuan(qimen.dx,tconfig.yuanstyle)]+"元("+jieqi(qimen.dx).past+"天) ";
    osx=osx+"<br />" +"四柱&nbsp;&nbsp;"+qimen.sizhu.substr(0,2)+"&nbsp;&nbsp;"+qimen.sizhu.substr(2,2)+"&nbsp;&nbsp;"+qimen.sizhu.substr(4,2)+"&nbsp;&nbsp;"+qimen.sizhu.substr(6,2)+"&nbsp;&nbsp;";
    qimen.boxhead=osx;
    //osx=osx+"<br /><br />"
    var boxes="........".split(".");
    for (var i=0;i<3;i++){
        for (var j=0;j<3;j++){
            //k为顺序数字
            k=j+i*3;tg6=k;
            //转换成宫格数字
            k=t.ordreal[k];
            if (k==4){
                temp4=tconfig.zhonggong[(Math.abs(ju)+ju)/ju/2];
                tg7=tconfig.zhonggong[(Math.abs(ju)+ju)/ju/2];
                tg8="&nbsp;&nbsp;&nbsp;&nbsp;寄&nbsp;&nbsp;&nbsp;&nbsp;";
                boxes[tg6]=t.liusan[tgan.substr(-3,1)] + tg8 + t.baguabyG[tgan.substr(-1,1)] + "<br /><br />" + t.liusan[dgan[k]]+ tg8 +t.baguabyG[temp4] + "<br />" +  t.xingbyG[k] + tg8 + t.baguabyG[star.indexOf(tg7)];
            }
            else{                
            //osx=osx + k + ".";
            /*
            显示格式：
            神   星   天盘干
            宫   门   地盘干
            */
            var xingstr=t.xingbyG[star[k]];
            var menstr=t.menbyB[men[k]];
            var shenstr=t.shenbyB[shen[k]];
            if (tg3==star[k]) xingstr="<span style='font-weight:bold;color:gold'>" + xingstr + "</span>";
            if (mpos==k) menstr="<span style='font-weight:bold;color:gold'>" + menstr + "</span>";
            if (xpos==k) shenstr="<span style='font-weight:bold;color:gold'>" + shenstr + "</span>";
            boxes[tg6]=shenstr + "&nbsp;&nbsp;&nbsp;&nbsp;" + xingstr + "&nbsp;&nbsp;&nbsp;&nbsp;" + t.liusan[tgan[k]] + "<br /><br />" + t.baguabyG[k] + "&nbsp;&nbsp;&nbsp;&nbsp;" + menstr  + "&nbsp;&nbsp;&nbsp;&nbsp;" + t.liusan[dgan[k]] + "<br /><br />";
            }
        }
    }
    qimen.box=boxes;

    /*
    dbg=dbg+"地盘干 -> "+dgan;
    dbg=dbg+"</li><li>"+ "旬首["+xunshou+"](+1) -> [甲"+t.xunshou[xunshou]+t.liusan[xunshou]+"] -> ["+t.liusan[xunshou]+"]在["+dgan.indexOf(xunshou)+"](+1)宫 -> ["+t.baguabyG[dgan.indexOf(xunshou)]+"]宫 -> xid:["+xid+"] -> 对应["+t.xingbyG[xid]+"]星(值符);["+t.menbyG[xid]+"]门(值使)";
    dbg=dbg+"</li><li>"+ "时干为["+ab.substr(0,1)+"] -> 在地盘中寻找 -> 位于["+t.baguabyG[xpos]+"]宫 -> ["+t.baguabyG[xpos]+"]宫即为["+t.xingbyG[xid]+"]星的位置";
    temp2=(t.zhi.indexOf(ab.substr(1,1))-t.zhi.indexOf(t.xunshou[xunshou])+12)%12;
    dbg=dbg+"</li><li>"+ "旬首地支为甲["+t.xunshou[xunshou]+ "]的["+t.xunshou[xunshou]+ "] -> 往后推["+temp2+"]个元素 -> " + "为["+ab.substr(1,1)+"]的时支 -> ["+"阴阳"[(Math.abs(ju)+ju)/ju/2]+"]遁就["+"逆顺"[(Math.abs(ju)+ju)/ju/2]+"]着值符位置["+t.baguabyG[xpos]+"]宫推["+temp2+"]个元素 -> ["+t.baguabyG[mpos]+"]宫即为["+t.menbyG[xid]+"]门(值使)位置";
    temp2=(t.ordplate.indexOf(xpos)-t.ordplate.indexOf(temp5)+8)%8;
    dbg=dbg+"</li><li>"+ "将旬首["+t.liusan[xunshou]+ "]放在时干["+ab.substr(0,1)+ "]的地盘宫位["+t.baguabyG[xpos]+"] -> 地盘的["+t.liusan[xunshou]+"]位于["+t.baguabyG[temp5]+"]宫("+dgan.indexOf(xunshou)+") -> 后者顺时针推["+temp2+"]个元素到达前者位置";
    dbg=dbg+"</li><li>";
    dbg=dbg+"<br />干 天盘对应宫格 地盘对应宫格<br />";
    for (var i=0;i<15;i++){dbg=dbg+">>"+t.baguabyG[t.ordplate[i%8]];}
    for (var i=0;i<9;i++){
        temp4=dgan.indexOf(i);
        if (temp4==4) temp4=tconfig.zhonggong[(Math.abs(ju)+ju)/ju/2];
        temp3=t.ordplate[(temp2+t.ordplate.indexOf(temp4)+8)%8];
        dbg=dbg+"<br />"+t.liusan[i]+"("+i+") -> "+t.baguabyG[dgan.indexOf(i)]+"("+dgan.indexOf(i)+") -> "+t.baguabyG[temp3]+"("+temp3+") -> "+(dgan.indexOf(i)-xid);
    }
    dbg=dbg+"</li><li>"+ t.xingbyG[xid]+ "(" + t.baguabyG[xpos] + ") " + t.menbyB[mid] + "(" + t.baguabyG[mpos] + ")" + t.ordplate
    dbg=dbg+"</li>"
    */
    osx=osx + dbg;
    return osx;
}
