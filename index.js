function _0x5736(_0xec5cd9,_0x4bb09d){const _0x57d516=_0x57d5();return _0x5736=function(_0x5736a8,_0x4c9321){_0x5736a8=_0x5736a8-0x1ab;let _0x2e0435=_0x57d516[_0x5736a8];return _0x2e0435;},_0x5736(_0xec5cd9,_0x4bb09d);}const _0x218b1f=_0x5736;(function(_0x2f3215,_0x2e486f){const _0x35b90f=_0x5736,_0x413031=_0x2f3215();while(!![]){try{const _0xc5036a=parseInt(_0x35b90f(0x20d))/0x1*(-parseInt(_0x35b90f(0x1c0))/0x2)+-parseInt(_0x35b90f(0x1f9))/0x3*(parseInt(_0x35b90f(0x211))/0x4)+-parseInt(_0x35b90f(0x1d5))/0x5*(-parseInt(_0x35b90f(0x206))/0x6)+parseInt(_0x35b90f(0x1af))/0x7*(-parseInt(_0x35b90f(0x234))/0x8)+parseInt(_0x35b90f(0x22b))/0x9*(parseInt(_0x35b90f(0x1ad))/0xa)+parseInt(_0x35b90f(0x1d0))/0xb+parseInt(_0x35b90f(0x228))/0xc;if(_0xc5036a===_0x2e486f)break;else _0x413031['push'](_0x413031['shift']());}catch(_0x3d8adb){_0x413031['push'](_0x413031['shift']());}}}(_0x57d5,0x53e2c));const {default:makeWASocket,useMultiFileAuthState,DisconnectReason,jidNormalizedUser,getContentType,fetchLatestBaileysVersion,Browsers}=require(_0x218b1f(0x21f)),l=console[_0x218b1f(0x215)],{getBuffer,getGroupAdmins,getRandom,h2k,isUrl,Json,runtime,sleep,fetchJson}=require(_0x218b1f(0x1c8)),fs=require('fs'),P=require(_0x218b1f(0x219)),config=require(_0x218b1f(0x1c2)),qrcode=require(_0x218b1f(0x202)),util=require('util'),{sms,downloadMediaMessage}=require(_0x218b1f(0x1d3)),axios=require(_0x218b1f(0x1f7)),{File}=require(_0x218b1f(0x1e4)),ownerNumber=['94742195461'];if(!fs[_0x218b1f(0x1bd)](__dirname+_0x218b1f(0x1df))){if(!config['SESSION_ID'])return console[_0x218b1f(0x215)](_0x218b1f(0x1ca));const sessdata=config[_0x218b1f(0x21c)],filer=File[_0x218b1f(0x223)]('https://mega.nz/file/'+sessdata);filer['download']((_0x1379ff,_0x862765)=>{const _0x2d6793=_0x218b1f;if(_0x1379ff)throw _0x1379ff;fs['writeFile'](__dirname+_0x2d6793(0x1df),_0x862765,()=>{const _0x5efa87=_0x2d6793;console[_0x5efa87(0x215)](_0x5efa87(0x237));});});}const express=require('express'),app=express(),port=process['env'][_0x218b1f(0x1cc)]||0x1f40;async function connectToWA(){const _0x169b1c=_0x218b1f,_0x508bd9=require(_0x169b1c(0x21a));_0x508bd9();const {readEnv:_0x1661b5}=require('./lib/database'),_0x4361e3=_0x1661b5(),_0x10b450=_0x4361e3['PREFIX'];console[_0x169b1c(0x215)](_0x169b1c(0x1d7));const {state:_0x48cd52,saveCreds:_0xb94cd8}=await useMultiFileAuthState(__dirname+_0x169b1c(0x214));var {version:_0x14afbc}=await fetchLatestBaileysVersion();const _0x302528=makeWASocket({'logger':P({'level':_0x169b1c(0x1eb)}),'printQRInTerminal':![],'browser':Browsers[_0x169b1c(0x221)]('Firefox'),'syncFullHistory':!![],'auth':_0x48cd52,'version':_0x14afbc});_0x302528['ev']['on']('connection.update',_0x5d0bbf=>{const _0xdeec7=_0x169b1c,{connection:_0x17bab7,lastDisconnect:_0x627532}=_0x5d0bbf;if(_0x17bab7==='close')_0x627532['error'][_0xdeec7(0x204)][_0xdeec7(0x22f)]!==DisconnectReason[_0xdeec7(0x1c7)]&&connectToWA();else{if(_0x17bab7===_0xdeec7(0x1c6)){console['log']('⭕\x20Plugins\x20Installing...');const _0x3a6137=require(_0xdeec7(0x203));fs[_0xdeec7(0x1fc)](_0xdeec7(0x213))[_0xdeec7(0x1fe)](_0x299fd0=>{const _0x52bb7c=_0xdeec7;_0x3a6137[_0x52bb7c(0x1f0)](_0x299fd0)[_0x52bb7c(0x1f2)]()==_0x52bb7c(0x1b1)&&require(_0x52bb7c(0x213)+_0x299fd0);}),console['log'](_0xdeec7(0x1e5)),console['log'](_0xdeec7(0x1d7));let _0x5b177a='SEON-MD\x20connected\x20successful\x20✅\x0a\x0aPREFIX:\x20'+_0x10b450;_0x302528[_0xdeec7(0x1b7)](ownerNumber+_0xdeec7(0x1cb),{'image':{'url':'https://telegra.ph/file/900435c6d3157c98c3c88.jpg'},'caption':_0x5b177a});}}}),_0x302528['ev']['on'](_0x169b1c(0x1bf),_0xb94cd8),_0x302528['ev']['on'](_0x169b1c(0x1b6),async _0xccec44=>{const _0x4555e5=_0x169b1c;_0x4361e3[_0x4555e5(0x1e7)]==='true'&&_0xccec44[_0x4555e5(0x1bb)]&&_0xccec44[_0x4555e5(0x1bb)][_0x4555e5(0x20a)]!=='status@broadcast'&&await _0x302528[_0x4555e5(0x1c3)]([_0xccec44[_0x4555e5(0x1bb)]]);_0xccec44=_0xccec44[_0x4555e5(0x220)][0x0];if(!_0xccec44[_0x4555e5(0x217)])return;_0xccec44[_0x4555e5(0x217)]=getContentType(_0xccec44[_0x4555e5(0x217)])===_0x4555e5(0x1ea)?_0xccec44[_0x4555e5(0x217)][_0x4555e5(0x1ea)][_0x4555e5(0x217)]:_0xccec44['message'];_0xccec44['key']&&_0xccec44['key'][_0x4555e5(0x20a)]==='status@broadcast'&&_0x4361e3[_0x4555e5(0x1ba)]===_0x4555e5(0x229)&&await _0x302528[_0x4555e5(0x1c3)]([_0xccec44[_0x4555e5(0x1bb)]]);const _0x1037e=sms(_0x302528,_0xccec44),_0x14e63=getContentType(_0xccec44['message']),_0x532013=JSON[_0x4555e5(0x227)](_0xccec44[_0x4555e5(0x217)]),_0x29b261=_0xccec44[_0x4555e5(0x1bb)][_0x4555e5(0x20a)],_0x589443=_0x14e63==_0x4555e5(0x1e9)&&_0xccec44[_0x4555e5(0x217)]['extendedTextMessage'][_0x4555e5(0x225)]!=null?_0xccec44[_0x4555e5(0x217)][_0x4555e5(0x1e9)][_0x4555e5(0x225)][_0x4555e5(0x1ed)]||[]:[],_0x2c240a=_0x14e63===_0x4555e5(0x1d1)?_0xccec44['message'][_0x4555e5(0x1d1)]:_0x14e63===_0x4555e5(0x1e9)?_0xccec44[_0x4555e5(0x217)][_0x4555e5(0x1e9)][_0x4555e5(0x1e3)]:_0x14e63==_0x4555e5(0x1f6)&&_0xccec44[_0x4555e5(0x217)][_0x4555e5(0x1f6)][_0x4555e5(0x1f4)]?_0xccec44[_0x4555e5(0x217)][_0x4555e5(0x1f6)]['caption']:_0x14e63==_0x4555e5(0x1d2)&&_0xccec44[_0x4555e5(0x217)]['videoMessage']['caption']?_0xccec44[_0x4555e5(0x217)][_0x4555e5(0x1d2)][_0x4555e5(0x1f4)]:'',_0x11862c=_0x2c240a[_0x4555e5(0x207)](_0x10b450),_0x4896b2=_0x11862c?_0x2c240a[_0x4555e5(0x20f)](_0x10b450[_0x4555e5(0x1b0)])['trim']()[_0x4555e5(0x1bc)]('\x20')[_0x4555e5(0x1c9)]()['toLowerCase']():'',_0x2d7e4b=_0x2c240a[_0x4555e5(0x222)]()[_0x4555e5(0x1bc)](/ +/)[_0x4555e5(0x20f)](0x1),_0x39949a=_0x2d7e4b['join']('\x20'),_0x1988fe=_0x29b261[_0x4555e5(0x226)](_0x4555e5(0x21b)),_0x23c57c=_0xccec44[_0x4555e5(0x1bb)][_0x4555e5(0x233)]?_0x302528[_0x4555e5(0x21e)]['id']['split'](':')[0x0]+_0x4555e5(0x1cb)||_0x302528[_0x4555e5(0x21e)]['id']:_0xccec44[_0x4555e5(0x1bb)][_0x4555e5(0x22e)]||_0xccec44[_0x4555e5(0x1bb)][_0x4555e5(0x20a)],_0x149268=_0x23c57c[_0x4555e5(0x1bc)]('@')[0x0],_0x3eaf16=_0x302528[_0x4555e5(0x21e)]['id'][_0x4555e5(0x1bc)](':')[0x0],_0x47e8f1=_0xccec44[_0x4555e5(0x1b2)]||_0x4555e5(0x1f5),_0x58e473=_0x3eaf16[_0x4555e5(0x212)](_0x149268),_0x3813b2=ownerNumber[_0x4555e5(0x212)](_0x149268)||_0x58e473,_0x564c37=await jidNormalizedUser(_0x302528[_0x4555e5(0x21e)]['id']),_0x3a36f2=_0x1988fe?await _0x302528[_0x4555e5(0x1ef)](_0x29b261)[_0x4555e5(0x1b3)](_0x42911e=>{}):'',_0xdb58eb=_0x1988fe?_0x3a36f2['subject']:'',_0x4497c3=_0x1988fe?await _0x3a36f2[_0x4555e5(0x22a)]:'',_0x21d15c=_0x1988fe?await getGroupAdmins(_0x4497c3):'',_0x351635=_0x1988fe?_0x21d15c[_0x4555e5(0x212)](_0x564c37):![],_0x4540db=_0x1988fe?_0x21d15c[_0x4555e5(0x212)](_0x23c57c):![],_0x23a740=_0x1037e[_0x4555e5(0x217)][_0x4555e5(0x1ab)]?!![]:![],_0x5a1135=_0x52676=>{const _0x384936=_0x4555e5;_0x302528[_0x384936(0x1b7)](_0x29b261,{'text':_0x52676},{'quoted':_0xccec44});};_0x302528[_0x4555e5(0x1ee)]=async(_0x205d71,_0x335998,_0x33a170,_0x4f77a3,_0x585a36={})=>{const _0x184e07=_0x4555e5;let _0x54fa1e='',_0xe04ea0=await axios[_0x184e07(0x1c5)](_0x335998);_0x54fa1e=_0xe04ea0[_0x184e07(0x1dd)][_0x184e07(0x200)];if(_0x54fa1e[_0x184e07(0x1bc)]('/')[0x1]===_0x184e07(0x1be))return _0x302528['sendMessage'](_0x205d71,{'video':await getBuffer(_0x335998),'caption':_0x33a170,'gifPlayback':!![],..._0x585a36},{'quoted':_0x4f77a3,..._0x585a36});let _0x4c072c=_0x54fa1e[_0x184e07(0x1bc)]('/')[0x0]+_0x184e07(0x208);if(_0x54fa1e===_0x184e07(0x235))return _0x302528['sendMessage'](_0x205d71,{'document':await getBuffer(_0x335998),'mimetype':_0x184e07(0x235),'caption':_0x33a170,..._0x585a36},{'quoted':_0x4f77a3,..._0x585a36});if(_0x54fa1e[_0x184e07(0x1bc)]('/')[0x0]===_0x184e07(0x216))return _0x302528['sendMessage'](_0x205d71,{'image':await getBuffer(_0x335998),'caption':_0x33a170,..._0x585a36},{'quoted':_0x4f77a3,..._0x585a36});if(_0x54fa1e['split']('/')[0x0]===_0x184e07(0x1b4))return _0x302528['sendMessage'](_0x205d71,{'video':await getBuffer(_0x335998),'caption':_0x33a170,'mimetype':'video/mp4',..._0x585a36},{'quoted':_0x4f77a3,..._0x585a36});if(_0x54fa1e[_0x184e07(0x1bc)]('/')[0x0]==='audio')return _0x302528[_0x184e07(0x1b7)](_0x205d71,{'audio':await getBuffer(_0x335998),'caption':_0x33a170,'mimetype':_0x184e07(0x1f3),..._0x585a36},{'quoted':_0x4f77a3,..._0x585a36});};if(_0x149268[_0x4555e5(0x212)](_0x4555e5(0x1cf))){if(_0x23a740)return;_0x1037e[_0x4555e5(0x1ac)]('❗');}if(_0x149268[_0x4555e5(0x212)](_0x4555e5(0x1d9))){if(_0x23a740)return;_0x1037e[_0x4555e5(0x1ac)]('🥷');}_0x11862c&&_0x4361e3[_0x4555e5(0x1b9)]==='true'&&_0x4361e3[_0x4555e5(0x1e7)]===_0x4555e5(0x1dc)&&await _0x302528[_0x4555e5(0x1c3)]([_0xccec44[_0x4555e5(0x1bb)]]);const _0x9de961=await fetchJson(_0x4555e5(0x232)),_0x41728a=_0x9de961[_0x4555e5(0x1bc)](','),_0x2f5cb6=[..._0x41728a]['map'](_0x1024c6=>_0x1024c6['replace'](/[^0-9]/g,'')+_0x4555e5(0x1cb))[_0x4555e5(0x212)](_0x23c57c),_0x5477b6=[_0x4555e5(0x201)][_0x4555e5(0x1b8)](_0x24586a=>_0x24586a['replace'](/[^0-9]/g,'')+_0x4555e5(0x1cb))[_0x4555e5(0x212)](_0x23c57c);if(!_0x3813b2&&_0x4361e3['MODE']===_0x4555e5(0x1e0))return;if(!_0x3813b2&&_0x1988fe&&_0x4361e3[_0x4555e5(0x1b5)]===_0x4555e5(0x1de))return;if(!_0x3813b2&&!_0x1988fe&&_0x4361e3['MODE']===_0x4555e5(0x1fd))return;if(_0x11862c&&_0x2f5cb6)return _0x5a1135(_0x4555e5(0x1db));const _0x3422ed=require(_0x4555e5(0x230)),_0x33650c=_0x11862c?_0x2c240a[_0x4555e5(0x20f)](0x1)[_0x4555e5(0x222)]()[_0x4555e5(0x1bc)]('\x20')[0x0][_0x4555e5(0x1f2)]():![];if(_0x11862c){const _0x2a97aa=_0x3422ed[_0x4555e5(0x1e1)][_0x4555e5(0x1fb)](_0x451f40=>_0x451f40[_0x4555e5(0x1d4)]===_0x33650c)||_0x3422ed[_0x4555e5(0x1e1)][_0x4555e5(0x1fb)](_0x369b02=>_0x369b02['alias']&&_0x369b02[_0x4555e5(0x1d8)]['includes'](_0x33650c));if(_0x2a97aa){if(_0x2a97aa['react'])_0x302528[_0x4555e5(0x1b7)](_0x29b261,{'react':{'text':_0x2a97aa[_0x4555e5(0x1ac)],'key':_0xccec44['key']}});try{_0x2a97aa[_0x4555e5(0x1ff)](_0x302528,_0xccec44,_0x1037e,{'from':_0x29b261,'quoted':_0x589443,'body':_0x2c240a,'isCmd':_0x11862c,'command':_0x4896b2,'args':_0x2d7e4b,'q':_0x39949a,'isGroup':_0x1988fe,'sender':_0x23c57c,'senderNumber':_0x149268,'botNumber2':_0x564c37,'botNumber':_0x3eaf16,'pushname':_0x47e8f1,'isMe':_0x58e473,'isOwner':_0x3813b2,'groupMetadata':_0x3a36f2,'groupName':_0xdb58eb,'participants':_0x4497c3,'groupAdmins':_0x21d15c,'isBotAdmins':_0x351635,'isAdmins':_0x4540db,'reply':_0x5a1135});}catch(_0x186d36){console[_0x4555e5(0x218)](_0x4555e5(0x1da)+_0x186d36);}}}_0x3422ed[_0x4555e5(0x1e1)][_0x4555e5(0x1b8)](async _0x27a17f=>{const _0x3c5b2f=_0x4555e5;if(_0x2c240a&&_0x27a17f['on']===_0x3c5b2f(0x1d6))_0x27a17f[_0x3c5b2f(0x1ff)](_0x302528,_0xccec44,_0x1037e,{'from':_0x29b261,'l':l,'quoted':_0x589443,'body':_0x2c240a,'isCmd':_0x11862c,'command':_0x27a17f,'args':_0x2d7e4b,'q':_0x39949a,'isGroup':_0x1988fe,'sender':_0x23c57c,'senderNumber':_0x149268,'botNumber2':_0x564c37,'botNumber':_0x3eaf16,'pushname':_0x47e8f1,'isMe':_0x58e473,'isOwner':_0x3813b2,'groupMetadata':_0x3a36f2,'groupName':_0xdb58eb,'participants':_0x4497c3,'groupAdmins':_0x21d15c,'isBotAdmins':_0x351635,'isAdmins':_0x4540db,'reply':_0x5a1135});else{if(_0xccec44['q']&&_0x27a17f['on']===_0x3c5b2f(0x1e3))_0x27a17f[_0x3c5b2f(0x1ff)](_0x302528,_0xccec44,_0x1037e,{'from':_0x29b261,'l':l,'quoted':_0x589443,'body':_0x2c240a,'isCmd':_0x11862c,'command':_0x27a17f,'args':_0x2d7e4b,'q':_0x39949a,'isGroup':_0x1988fe,'sender':_0x23c57c,'senderNumber':_0x149268,'botNumber2':_0x564c37,'botNumber':_0x3eaf16,'pushname':_0x47e8f1,'isMe':_0x58e473,'isOwner':_0x3813b2,'groupMetadata':_0x3a36f2,'groupName':_0xdb58eb,'participants':_0x4497c3,'groupAdmins':_0x21d15c,'isBotAdmins':_0x351635,'isAdmins':_0x4540db,'reply':_0x5a1135});else{if((_0x27a17f['on']==='image'||_0x27a17f['on']===_0x3c5b2f(0x236))&&_0xccec44[_0x3c5b2f(0x1cd)]===_0x3c5b2f(0x1f6))_0x27a17f['function'](_0x302528,_0xccec44,_0x1037e,{'from':_0x29b261,'l':l,'quoted':_0x589443,'body':_0x2c240a,'isCmd':_0x11862c,'command':_0x27a17f,'args':_0x2d7e4b,'q':_0x39949a,'isGroup':_0x1988fe,'sender':_0x23c57c,'senderNumber':_0x149268,'botNumber2':_0x564c37,'botNumber':_0x3eaf16,'pushname':_0x47e8f1,'isMe':_0x58e473,'isOwner':_0x3813b2,'groupMetadata':_0x3a36f2,'groupName':_0xdb58eb,'participants':_0x4497c3,'groupAdmins':_0x21d15c,'isBotAdmins':_0x351635,'isAdmins':_0x4540db,'reply':_0x5a1135});else _0x27a17f['on']===_0x3c5b2f(0x1c1)&&_0xccec44[_0x3c5b2f(0x1cd)]==='stickerMessage'&&_0x27a17f[_0x3c5b2f(0x1ff)](_0x302528,_0xccec44,_0x1037e,{'from':_0x29b261,'l':l,'quoted':_0x589443,'body':_0x2c240a,'isCmd':_0x11862c,'command':_0x27a17f,'args':_0x2d7e4b,'q':_0x39949a,'isGroup':_0x1988fe,'sender':_0x23c57c,'senderNumber':_0x149268,'botNumber2':_0x564c37,'botNumber':_0x3eaf16,'pushname':_0x47e8f1,'isMe':_0x58e473,'isOwner':_0x3813b2,'groupMetadata':_0x3a36f2,'groupName':_0xdb58eb,'participants':_0x4497c3,'groupAdmins':_0x21d15c,'isBotAdmins':_0x351635,'isAdmins':_0x4540db,'reply':_0x5a1135});}}});_0x4361e3[_0x4555e5(0x1e7)]==='true'&&_0x302528[_0x4555e5(0x224)](_0x4555e5(0x1fa));if(_0x149268['startsWith'](_0x4555e5(0x20c))&&_0x4361e3[_0x4555e5(0x1ce)]===_0x4555e5(0x229)){console['log'](_0x4555e5(0x1e2)+_0x149268['slice'](0x3)+'...');_0x29b261[_0x4555e5(0x226)](_0x4555e5(0x21b))?(await _0x302528['groupParticipantsUpdate'](_0x29b261,[_0x23c57c],_0x4555e5(0x1ae)),await _0x302528['sendMessage'](_0x29b261,{'text':'User\x20with\x20+212\x20number\x20detected\x20and\x20removed\x20from\x20the\x20group.'})):(await _0x302528[_0x4555e5(0x210)](_0x23c57c,_0x4555e5(0x20e)),console['log'](_0x4555e5(0x231)+_0x149268[_0x4555e5(0x20f)](0x3)+_0x4555e5(0x1c4)));return;}if(_0x4361e3[_0x4555e5(0x1e8)]=='true'){if(!_0x3813b2&&_0x1988fe&&_0x351635){if(_0x2c240a[_0x4555e5(0x1e6)]('chat.whatsapp.com')){if(_0x58e473)return await _0x5a1135(_0x4555e5(0x1f1));if(_0x21d15c[_0x4555e5(0x212)](_0x23c57c))return;await _0x302528[_0x4555e5(0x1b7)](_0x29b261,{'delete':_0xccec44[_0x4555e5(0x1bb)]}),await _0x302528[_0x4555e5(0x21d)](_0x29b261,[_0x23c57c],'remove');}}}const _0x987643=await fetchJson(_0x4555e5(0x1f8));if(_0x4361e3['ANTI_BAD']==_0x4555e5(0x229)){if(!_0x4540db&&!_0x58e473)for(any in _0x987643){if(_0x2c240a[_0x4555e5(0x1f2)]()[_0x4555e5(0x212)](_0x987643[any])){if(!_0x2c240a[_0x4555e5(0x212)](_0x4555e5(0x20b))){if(!_0x2c240a[_0x4555e5(0x212)](_0x4555e5(0x205))){if(!_0x2c240a['includes']('https')){if(_0x21d15c[_0x4555e5(0x212)](_0x23c57c))return;if(_0xccec44[_0x4555e5(0x1bb)][_0x4555e5(0x233)])return;await _0x302528[_0x4555e5(0x1b7)](_0x29b261,{'delete':_0xccec44['key']}),await _0x302528[_0x4555e5(0x1b7)](_0x29b261,{'text':_0x4555e5(0x209)});}}}}}}_0x4361e3['ANTI_BOT']==_0x4555e5(0x229)&&(_0x1988fe&&!_0x4540db&&!_0x58e473&&!_0x3813b2&&_0x351635&&(_0xccec44['id'][_0x4555e5(0x207)](_0x4555e5(0x238))&&(await _0x302528[_0x4555e5(0x1b7)](_0x29b261,{'text':'❌\x20```Another\x20Bot\x27s\x20message\x20Detected\x20:```\x20📚\x20*Removed\x20By\x20SEON-MD*\x20❗\x0aAnti\x20Bot\x20System\x20on...'}),_0x4361e3[_0x4555e5(0x22d)]=='true'&&_0x351635&&(await _0x302528[_0x4555e5(0x1b7)](_0x29b261,{'delete':_0xccec44[_0x4555e5(0x1bb)]}),await _0x302528['groupParticipantsUpdate'](_0x29b261,[_0x23c57c],_0x4555e5(0x1ae)))),_0xccec44['id'][_0x4555e5(0x207)](_0x4555e5(0x23a))&&(await _0x302528['sendMessage'](_0x29b261,{'text':'❌\x20```Another\x20Bot\x27s\x20message\x20Detected\x20:```\x20*SEON-MD*\x20❗\x0a*Removed\x20By\x20SEON-MD*\x20❗\x0aAnti\x20Bot\x20System\x20on...'}),_0x4361e3[_0x4555e5(0x22d)]==_0x4555e5(0x229)&&_0x351635&&(await _0x302528[_0x4555e5(0x1b7)](_0x29b261,{'delete':_0xccec44[_0x4555e5(0x1bb)]}),await _0x302528[_0x4555e5(0x21d)](_0x29b261,[_0x23c57c],'remove')))));});}function _0x57d5(){const _0x3a8b08=['macOS','trim','fromURL','sendPresenceUpdate','contextInfo','endsWith','stringify','1441908icQaHl','true','participants','4626RiayBM','🤖\x20Started\x20And\x20Connecting\x20Completed...✓','ANTI_BOT','participant','statusCode','./command','Blocked\x20+212','https://raw.githubusercontent.com/SEONMD1/SEON-MD-DATABASE/refs/heads/main/Banduser.json','fromMe','3131256XPSimH','application/pdf','photo','🤖\x20SEON\x20MD.\x20Session\x20Downloading\x20Completed...✓','BAE','Server\x20listening\x20on\x20port\x20http://localhost:','QUEENAMDI','reactionMessage','react','7570KCGLTb','remove','7ppSiPM','length','.js','pushName','catch','video','MODE','messages.upsert','sendMessage','map','READ_CMD','AUTO_READ_STATUS','key','split','existsSync','gif','creds.update','194KwHetO','sticker','./config','readMessages','\x20successfully.','head','open','loggedOut','./lib/functions','shift','Please\x20add\x20your\x20session\x20to\x20SESSION_ID\x20env\x20!!','@s.whatsapp.net','PORT','type','BAD_NO_BLOCK','94710513877','6491353SXWyvp','conversation','videoMessage','./lib/msg','pattern','15PAzIoz','body','🤖\x20Connecting\x20To\x20Whatsapp...','alias','94742195461','[PLUGIN\x20ERROR]\x20','❌\x20*You\x20are\x20banned\x20from\x20using\x20Commands.....*\x0a\x0a*_Please\x20contact\x20SEON-MD\x20Bot\x20Owner\x20<94742195461>\x20Remove\x20your\x20Ban_*\x20👨‍🔧\x0a','false','headers','inbox','/auth_info_baileys/creds.json','private','commands','Blocking\x20number\x20+212','text','megajs','⭕\x20Plugins\x20Installing\x20Completed...✓','match','ALLWAYS_OFFLINE','ANTI_LINK','extendedTextMessage','ephemeralMessage','silent','get','quotedMessage','sendFileUrl','groupMetadata','extname','Link\x20Derect\x20but\x20i\x20can\x27t\x20Delete\x20link','toLowerCase','audio/mpeg','caption','Sin\x20Nombre','imageMessage','axios','https://raw.githubusercontent.com/SEONMD1/SEON-MD-DATABASE/refs/heads/main/bad_word.json','1879137JlbIhp','unavailable','find','readdirSync','groups','forEach','function','content-type','94743381623,94714857323','qrcode-terminal','path','output','docu','881352aksLNt','startsWith','Message','*Bad\x20word\x20detected..!*','remoteJid','tent','212','1842NnhFtq','block','slice','updateBlockStatus','4WYNoLH','includes','./plugins/','/auth_info_baileys/','log','image','message','error','pino','./lib/mongodb','@g.us','SESSION_ID','groupParticipantsUpdate','user','@whiskeysockets/baileys','messages'];_0x57d5=function(){return _0x3a8b08;};return _0x57d5();}app[_0x218b1f(0x1ec)]('/',(_0x3db527,_0xeb78d6)=>{const _0x550047=_0x218b1f;_0xeb78d6['send'](_0x550047(0x22c));}),app['listen'](port,()=>console[_0x218b1f(0x215)](_0x218b1f(0x239)+port)),setTimeout(()=>{connectToWA();},0xfa0);
