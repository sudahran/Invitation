/* ZIP STORE writer (UTF-8, CRC32), dependency free. */
window.makeZip = entries => {
 const enc=new TextEncoder(),table=new Uint32Array(256);for(let n=0;n<256;n++){let c=n;for(let k=0;k<8;k++)c=(c&1)?0xedb88320^(c>>>1):c>>>1;table[n]=c;}
 const locals=[],central=[];let offset=0,total=0;
 function header(size){const b=new Uint8Array(size);return [b,new DataView(b.buffer)];}
 for(const [path,content] of entries){const name=enc.encode(path),data=typeof content==='string'?enc.encode(content):content;let crc=0xffffffff;for(const byte of data)crc=table[(crc^byte)&255]^(crc>>>8);crc=(crc^0xffffffff)>>>0;
 const [h,v]=header(30);v.setUint32(0,0x04034b50,true);v.setUint16(4,20,true);v.setUint16(6,0x800,true);v.setUint16(12,0x21,true);v.setUint32(14,crc,true);v.setUint32(18,data.length,true);v.setUint32(22,data.length,true);v.setUint16(26,name.length,true);locals.push(h,name,data);
 const [ch,cv]=header(46);cv.setUint32(0,0x02014b50,true);cv.setUint16(4,20,true);cv.setUint16(6,20,true);cv.setUint16(8,0x800,true);cv.setUint16(14,0x21,true);cv.setUint32(16,crc,true);cv.setUint32(20,data.length,true);cv.setUint32(24,data.length,true);cv.setUint16(28,name.length,true);cv.setUint32(42,offset,true);central.push(ch,name);total+=46+name.length;offset+=30+name.length+data.length;
 }
 const [end,ev]=header(22);ev.setUint32(0,0x06054b50,true);ev.setUint16(8,entries.length,true);ev.setUint16(10,entries.length,true);ev.setUint32(12,total,true);ev.setUint32(16,offset,true);return new Blob([...locals,...central,end],{type:'application/zip'});
};
