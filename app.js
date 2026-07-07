const data=[['ア','아'],['イ','이'],['ウ','우'],['エ','에'],['オ','오'],['カ','카'],['キ','키'],['ク','쿠'],['ケ','케'],['コ','코'],['サ','사'],['シ','시'],['ス','스'],['セ','세'],['ソ','소'],['タ','타'],['チ','치'],['ツ','츠'],['テ','테'],['ト','토'],['ナ','나'],['ニ','니'],['ヌ','누'],['ネ','네'],['ノ','노'],['ハ','하'],['ヒ','히'],['フ','후'],['ヘ','헤'],['ホ','호'],['マ','마'],['ミ','미'],['ム','무'],['メ','메'],['モ','모'],['ヤ','야'],['ユ','유'],['ヨ','요'],['ラ','라'],['リ','리'],['ル','루'],['レ','레'],['ロ','로'],['ワ','와'],['ヲ','오'],['ン','응']];
let deck=[],cur,last=-1;
function sh(){deck=[...Array(data.length).keys()];for(let i=deck.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[deck[i],deck[j]]=[deck[j],deck[i]]}}
function nextKana(){if(deck.length===0)sh();let idx=deck.pop();if(idx===last&&deck.length){deck.unshift(idx);idx=deck.pop()}last=idx;cur=data[idx];kana.textContent=cur[0];ans.textContent='?';prog.textContent=(46-deck.length)+'/46';}
function showAns(){ans.textContent=cur[1]}
sh();nextKana();