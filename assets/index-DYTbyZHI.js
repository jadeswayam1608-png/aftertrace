(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Or="170",uc=0,io=1,fc=2,Tl=1,Al=2,gn=3,Nn=0,Rt=1,en=2,In=0,Ti=1,so=2,ao=3,ro=4,pc=5,qn=100,mc=101,gc=102,vc=103,_c=104,yc=200,xc=201,Sc=202,Mc=203,$a=204,Za=205,wc=206,bc=207,Ec=208,Tc=209,Ac=210,Cc=211,Rc=212,Pc=213,Lc=214,ja=0,Ka=1,Ja=2,Ri=3,Qa=4,er=5,tr=6,nr=7,Cl=0,Dc=1,Ic=2,Un=0,Uc=1,Nc=2,Fc=3,Oc=4,Bc=5,kc=6,zc=7,Rl=300,Pi=301,Li=302,Ks=303,ir=304,sa=306,Zn=1e3,jn=1001,sr=1002,Ht=1003,Hc=1004,ms=1005,qt=1006,ha=1007,Kn=1008,Mn=1009,Pl=1010,Ll=1011,os=1012,Br=1013,Jn=1014,rn=1015,hs=1016,kr=1017,zr=1018,Di=1020,Dl=35902,Il=1021,Ul=1022,nn=1023,Nl=1024,Fl=1025,Ai=1026,Ii=1027,Hr=1028,Vr=1029,Ol=1030,Gr=1031,Wr=1033,Xs=33776,qs=33777,Ys=33778,$s=33779,ar=35840,rr=35841,or=35842,lr=35843,cr=36196,hr=37492,dr=37496,ur=37808,fr=37809,pr=37810,mr=37811,gr=37812,vr=37813,_r=37814,yr=37815,xr=37816,Sr=37817,Mr=37818,wr=37819,br=37820,Er=37821,Zs=36492,Tr=36494,Ar=36495,Bl=36283,Cr=36284,Rr=36285,Pr=36286,Vc=3200,Gc=3201,kl=0,Wc=1,Dn="",kt="srgb",Fi="srgb-linear",aa="linear",ot="srgb",ni=7680,oo=519,Xc=512,qc=513,Yc=514,zl=515,$c=516,Zc=517,jc=518,Kc=519,Lr=35044,lo="300 es",_n=2e3,Js=2001;class Oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let co=1234567;const as=Math.PI/180,ls=180/Math.PI;function yn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mt[i&255]+Mt[i>>8&255]+Mt[i>>16&255]+Mt[i>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]).toLowerCase()}function Ct(i,e,t){return Math.max(e,Math.min(t,i))}function Xr(i,e){return(i%e+e)%e}function Jc(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Qc(i,e,t){return i!==e?(t-i)/(e-i):0}function rs(i,e,t){return(1-t)*i+t*e}function eh(i,e,t,n){return rs(i,e,1-Math.exp(-t*n))}function th(i,e=1){return e-Math.abs(Xr(i,e*2)-e)}function nh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ih(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function sh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ah(i,e){return i+Math.random()*(e-i)}function rh(i){return i*(.5-Math.random())}function oh(i){i!==void 0&&(co=i);let e=co+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lh(i){return i*as}function ch(i){return i*ls}function hh(i){return(i&i-1)===0&&i!==0}function dh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function uh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function fh(i,e,t,n,s){const a=Math.cos,r=Math.sin,o=a(t/2),l=r(t/2),c=a((e+n)/2),h=r((e+n)/2),d=a((e-n)/2),u=r((e-n)/2),p=a((n-e)/2),g=r((n-e)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function tn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function at(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Gi={DEG2RAD:as,RAD2DEG:ls,generateUUID:yn,clamp:Ct,euclideanModulo:Xr,mapLinear:Jc,inverseLerp:Qc,lerp:rs,damp:eh,pingpong:th,smoothstep:nh,smootherstep:ih,randInt:sh,randFloat:ah,randFloatSpread:rh,seededRandom:oh,degToRad:lh,radToDeg:ch,isPowerOfTwo:hh,ceilPowerOfTwo:dh,floorPowerOfTwo:uh,setQuaternionFromProperEuler:fh,normalize:at,denormalize:tn};class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*n-r*s+e.x,this.y=a*s+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,n,s,a,r,o,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,l,c)}set(e,t,n,s,a,r,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=a,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],v=s[0],m=s[3],f=s[6],w=s[1],b=s[4],y=s[7],U=s[2],T=s[5],C=s[8];return a[0]=r*v+o*w+l*U,a[3]=r*m+o*b+l*T,a[6]=r*f+o*y+l*C,a[1]=c*v+h*w+d*U,a[4]=c*m+h*b+d*T,a[7]=c*f+h*y+d*C,a[2]=u*v+p*w+g*U,a[5]=u*m+p*b+g*T,a[8]=u*f+p*y+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*o*c-n*a*h+n*o*l+s*a*c-s*r*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*r-o*c,u=o*l-h*a,p=c*a-r*l,g=t*d+n*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*r)*v,e[3]=u*v,e[4]=(h*t-s*l)*v,e[5]=(s*a-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(r*t-n*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-s*c,s*l,-s*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(da.makeScale(e,t)),this}rotate(e){return this.premultiply(da.makeRotation(-e)),this}translate(e,t){return this.premultiply(da.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const da=new We;function Hl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Qs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ph(){const i=Qs("canvas");return i.style.display="block",i}const ho={};function ts(i){i in ho||(ho[i]=!0,console.warn(i))}function mh(i,e,t){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function gh(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function vh(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Qe={enabled:!0,workingColorSpace:Fi,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ot&&(i.r=xn(i.r),i.g=xn(i.g),i.b=xn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ot&&(i.r=Ci(i.r),i.g=Ci(i.g),i.b=Ci(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Dn?aa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ci(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const uo=[.64,.33,.3,.6,.15,.06],fo=[.2126,.7152,.0722],po=[.3127,.329],mo=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),go=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qe.define({[Fi]:{primaries:uo,whitePoint:po,transfer:aa,toXYZ:mo,fromXYZ:go,luminanceCoefficients:fo,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:uo,whitePoint:po,transfer:ot,toXYZ:mo,fromXYZ:go,luminanceCoefficients:fo,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}});let ii;class _h{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ii===void 0&&(ii=Qs("canvas")),ii.width=e.width,ii.height=e.height;const n=ii.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ii}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=xn(a[r]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xn(t[n]/255)*255):t[n]=xn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yh=0;class Vl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=yn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(ua(s[r].image)):a.push(ua(s[r]))}else a=ua(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function ua(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_h.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xh=0;class bt extends Oi{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,n=jn,s=jn,a=qt,r=Kn,o=nn,l=Mn,c=bt.DEFAULT_ANISOTROPY,h=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xh++}),this.uuid=yn(),this.name="",this.source=new Vl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zn:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case sr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zn:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case sr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=Rl;bt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,s=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s+r[12]*a,this.y=r[1]*t+r[5]*n+r[9]*s+r[13]*a,this.z=r[2]*t+r[6]*n+r[10]*s+r[14]*a,this.w=r[3]*t+r[7]*n+r[11]*s+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,y=(p+1)/2,U=(f+1)/2,T=(h+u)/4,C=(d+v)/4,L=(g+m)/4;return b>y&&b>U?b<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(b),s=T/n,a=C/n):y>U?y<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(y),n=T/s,a=L/s):U<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(U),n=C/a,s=L/a),this.set(n,s,a,t),this}let w=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(d-v)/w,this.z=(u-h)/w,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sh extends Oi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new bt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Vl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qn extends Sh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Gl extends bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mh extends bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ds{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,r,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3];const u=a[r+0],p=a[r+1],g=a[r+2],v=a[r+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==u||c!==p||h!==g){let m=1-o;const f=l*u+c*p+h*g+d*v,w=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){const U=Math.sqrt(b),T=Math.atan2(U,f*w);m=Math.sin(m*T)/U,o=Math.sin(o*T)/U}const y=o*w;if(l=l*m+u*y,c=c*m+p*y,h=h*m+g*y,d=d*m+v*y,m===1-o){const U=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=U,c*=U,h*=U,d*=U}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,a,r){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=a[r],u=a[r+1],p=a[r+2],g=a[r+3];return e[t]=o*g+h*d+l*p-c*u,e[t+1]=l*g+h*u+c*d-o*p,e[t+2]=c*g+h*p+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(a/2),u=l(n/2),p=l(s/2),g=l(a/2);switch(r){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],r=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(a-c)*p,this._z=(r-s)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(a+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(a-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(r-s)/p,this._x=(a+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,r=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+r*o+s*c-a*l,this._y=s*h+r*l+a*o-n*c,this._z=a*h+r*c+n*l-s*o,this._w=r*h-n*o-s*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,a=this._z,r=this._w;let o=r*e._w+n*e._x+s*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=s,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*r+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=r*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=a*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,r=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*r,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*r,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*s-o*n),h=2*(o*t-a*s),d=2*(a*n-r*t);return this.x=t+l*c+r*d-o*h,this.y=n+l*h+o*c-a*d,this.z=s+l*d+a*h-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,r=t.x,o=t.y,l=t.z;return this.x=s*l-a*o,this.y=a*r-n*l,this.z=n*o-s*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fa.copy(this).projectOnVector(e),this.sub(fa)}reflect(e){return this.sub(fa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fa=new P,vo=new ds;class ei{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Kt):Kt.fromBufferAttribute(a,r),Kt.applyMatrix4(e.matrixWorld),this.expandByPoint(Kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gs.copy(n.boundingBox)),gs.applyMatrix4(e.matrixWorld),this.union(gs)}const s=e.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kt),Kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wi),vs.subVectors(this.max,Wi),si.subVectors(e.a,Wi),ai.subVectors(e.b,Wi),ri.subVectors(e.c,Wi),En.subVectors(ai,si),Tn.subVectors(ri,ai),Bn.subVectors(si,ri);let t=[0,-En.z,En.y,0,-Tn.z,Tn.y,0,-Bn.z,Bn.y,En.z,0,-En.x,Tn.z,0,-Tn.x,Bn.z,0,-Bn.x,-En.y,En.x,0,-Tn.y,Tn.x,0,-Bn.y,Bn.x,0];return!pa(t,si,ai,ri,vs)||(t=[1,0,0,0,1,0,0,0,1],!pa(t,si,ai,ri,vs))?!1:(_s.crossVectors(En,Tn),t=[_s.x,_s.y,_s.z],pa(t,si,ai,ri,vs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hn=[new P,new P,new P,new P,new P,new P,new P,new P],Kt=new P,gs=new ei,si=new P,ai=new P,ri=new P,En=new P,Tn=new P,Bn=new P,Wi=new P,vs=new P,_s=new P,kn=new P;function pa(i,e,t,n,s){for(let a=0,r=i.length-3;a<=r;a+=3){kn.fromArray(i,a);const o=s.x*Math.abs(kn.x)+s.y*Math.abs(kn.y)+s.z*Math.abs(kn.z),l=e.dot(kn),c=t.dot(kn),h=n.dot(kn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const wh=new ei,Xi=new P,ma=new P;class us{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):wh.setFromPoints(e).getCenter(n);let s=0;for(let a=0,r=e.length;a<r;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xi.subVectors(e,this.center);const t=Xi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Xi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ma.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xi.copy(e.center).add(ma)),this.expandByPoint(Xi.copy(e.center).sub(ma))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dn=new P,ga=new P,ys=new P,An=new P,va=new P,xs=new P,_a=new P;class Wl{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dn.copy(this.origin).addScaledVector(this.direction,t),dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ga.copy(e).add(t).multiplyScalar(.5),ys.copy(t).sub(e).normalize(),An.copy(this.origin).sub(ga);const a=e.distanceTo(t)*.5,r=-this.direction.dot(ys),o=An.dot(this.direction),l=-An.dot(ys),c=An.lengthSq(),h=Math.abs(1-r*r);let d,u,p,g;if(h>0)if(d=r*l-o,u=r*o-l,g=a*h,d>=0)if(u>=-g)if(u<=g){const v=1/h;d*=v,u*=v,p=d*(d+r*u+2*o)+u*(r*d+u+2*l)+c}else u=a,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;else u=-a,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-r*a+o)),u=d>0?-a:Math.min(Math.max(-a,-l),a),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-a,-l),a),p=u*(u+2*l)+c):(d=Math.max(0,-(r*a+o)),u=d>0?a:Math.min(Math.max(-a,-l),a),p=-d*d+u*(u+2*l)+c);else u=r>0?-a:a,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ga).addScaledVector(ys,u),p}intersectSphere(e,t){dn.subVectors(e.center,this.origin);const n=dn.dot(this.direction),s=dn.dot(dn)-n*n,a=e.radius*e.radius;if(s>a)return null;const r=Math.sqrt(a-s),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(a=(e.min.y-u.y)*h,r=(e.max.y-u.y)*h):(a=(e.max.y-u.y)*h,r=(e.min.y-u.y)*h),n>r||a>s||((a>n||isNaN(n))&&(n=a),(r<s||isNaN(s))&&(s=r),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,dn)!==null}intersectTriangle(e,t,n,s,a){va.subVectors(t,e),xs.subVectors(n,e),_a.crossVectors(va,xs);let r=this.direction.dot(_a),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;An.subVectors(this.origin,e);const l=o*this.direction.dot(xs.crossVectors(An,xs));if(l<0)return null;const c=o*this.direction.dot(va.cross(An));if(c<0||l+c>r)return null;const h=-o*An.dot(_a);return h<0?null:this.at(h/r,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,n,s,a,r,o,l,c,h,d,u,p,g,v,m){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,l,c,h,d,u,p,g,v,m)}set(e,t,n,s,a,r,o,l,c,h,d,u,p,g,v,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=a,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/oi.setFromMatrixColumn(e,0).length(),a=1/oi.setFromMatrixColumn(e,1).length(),r=1/oi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const u=r*h,p=r*d,g=o*h,v=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=u-v*c,t[9]=-o*l,t[2]=v-u*c,t[6]=g+p*c,t[10]=r*l}else if(e.order==="YXZ"){const u=l*h,p=l*d,g=c*h,v=c*d;t[0]=u+v*o,t[4]=g*o-p,t[8]=r*c,t[1]=r*d,t[5]=r*h,t[9]=-o,t[2]=p*o-g,t[6]=v+u*o,t[10]=r*l}else if(e.order==="ZXY"){const u=l*h,p=l*d,g=c*h,v=c*d;t[0]=u-v*o,t[4]=-r*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=r*h,t[9]=v-u*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const u=r*h,p=r*d,g=o*h,v=o*d;t[0]=l*h,t[4]=g*c-p,t[8]=u*c+v,t[1]=l*d,t[5]=v*c+u,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const u=r*l,p=r*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-u*d,t[8]=g*d+p,t[1]=d,t[5]=r*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+g,t[10]=u-v*d}else if(e.order==="XZY"){const u=r*l,p=r*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+v,t[5]=r*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*h,t[10]=v*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bh,e,Eh)}lookAt(e,t,n){const s=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),Cn.crossVectors(n,Nt),Cn.lengthSq()===0&&(Math.abs(n.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),Cn.crossVectors(n,Nt)),Cn.normalize(),Ss.crossVectors(Nt,Cn),s[0]=Cn.x,s[4]=Ss.x,s[8]=Nt.x,s[1]=Cn.y,s[5]=Ss.y,s[9]=Nt.y,s[2]=Cn.z,s[6]=Ss.z,s[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],v=n[6],m=n[10],f=n[14],w=n[3],b=n[7],y=n[11],U=n[15],T=s[0],C=s[4],L=s[8],M=s[12],x=s[1],R=s[5],k=s[9],O=s[13],z=s[2],X=s[6],q=s[10],J=s[14],G=s[3],re=s[7],ie=s[11],_e=s[15];return a[0]=r*T+o*x+l*z+c*G,a[4]=r*C+o*R+l*X+c*re,a[8]=r*L+o*k+l*q+c*ie,a[12]=r*M+o*O+l*J+c*_e,a[1]=h*T+d*x+u*z+p*G,a[5]=h*C+d*R+u*X+p*re,a[9]=h*L+d*k+u*q+p*ie,a[13]=h*M+d*O+u*J+p*_e,a[2]=g*T+v*x+m*z+f*G,a[6]=g*C+v*R+m*X+f*re,a[10]=g*L+v*k+m*q+f*ie,a[14]=g*M+v*O+m*J+f*_e,a[3]=w*T+b*x+y*z+U*G,a[7]=w*C+b*R+y*X+U*re,a[11]=w*L+b*k+y*q+U*ie,a[15]=w*M+b*O+y*J+U*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],r=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+a*l*d-s*c*d-a*o*u+n*c*u+s*o*p-n*l*p)+v*(+t*l*p-t*c*u+a*r*u-s*r*p+s*c*h-a*l*h)+m*(+t*c*d-t*o*p-a*r*d+n*r*p+a*o*h-n*c*h)+f*(-s*o*h-t*l*d+t*o*u+s*r*d-n*r*u+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],w=d*m*c-v*u*c+v*l*p-o*m*p-d*l*f+o*u*f,b=g*u*c-h*m*c-g*l*p+r*m*p+h*l*f-r*u*f,y=h*v*c-g*d*c+g*o*p-r*v*p-h*o*f+r*d*f,U=g*d*l-h*v*l-g*o*u+r*v*u+h*o*m-r*d*m,T=t*w+n*b+s*y+a*U;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=w*C,e[1]=(v*u*a-d*m*a-v*s*p+n*m*p+d*s*f-n*u*f)*C,e[2]=(o*m*a-v*l*a+v*s*c-n*m*c-o*s*f+n*l*f)*C,e[3]=(d*l*a-o*u*a-d*s*c+n*u*c+o*s*p-n*l*p)*C,e[4]=b*C,e[5]=(h*m*a-g*u*a+g*s*p-t*m*p-h*s*f+t*u*f)*C,e[6]=(g*l*a-r*m*a-g*s*c+t*m*c+r*s*f-t*l*f)*C,e[7]=(r*u*a-h*l*a+h*s*c-t*u*c-r*s*p+t*l*p)*C,e[8]=y*C,e[9]=(g*d*a-h*v*a-g*n*p+t*v*p+h*n*f-t*d*f)*C,e[10]=(r*v*a-g*o*a+g*n*c-t*v*c-r*n*f+t*o*f)*C,e[11]=(h*o*a-r*d*a-h*n*c+t*d*c+r*n*p-t*o*p)*C,e[12]=U*C,e[13]=(h*v*s-g*d*s+g*n*u-t*v*u-h*n*m+t*d*m)*C,e[14]=(g*o*s-r*v*s-g*n*l+t*v*l+r*n*m-t*o*m)*C,e[15]=(r*d*s-h*o*s+h*n*l-t*d*l-r*n*u+t*o*u)*C,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,r=e.x,o=e.y,l=e.z,c=a*r,h=a*o;return this.set(c*r+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*r,0,c*l-s*o,h*l+s*r,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,r){return this.set(1,n,a,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,r=t._y,o=t._z,l=t._w,c=a+a,h=r+r,d=o+o,u=a*c,p=a*h,g=a*d,v=r*h,m=r*d,f=o*d,w=l*c,b=l*h,y=l*d,U=n.x,T=n.y,C=n.z;return s[0]=(1-(v+f))*U,s[1]=(p+y)*U,s[2]=(g-b)*U,s[3]=0,s[4]=(p-y)*T,s[5]=(1-(u+f))*T,s[6]=(m+w)*T,s[7]=0,s[8]=(g+b)*C,s[9]=(m-w)*C,s[10]=(1-(u+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let a=oi.set(s[0],s[1],s[2]).length();const r=oi.set(s[4],s[5],s[6]).length(),o=oi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],Jt.copy(this);const c=1/a,h=1/r,d=1/o;return Jt.elements[0]*=c,Jt.elements[1]*=c,Jt.elements[2]*=c,Jt.elements[4]*=h,Jt.elements[5]*=h,Jt.elements[6]*=h,Jt.elements[8]*=d,Jt.elements[9]*=d,Jt.elements[10]*=d,t.setFromRotationMatrix(Jt),n.x=a,n.y=r,n.z=o,this}makePerspective(e,t,n,s,a,r,o=_n){const l=this.elements,c=2*a/(t-e),h=2*a/(n-s),d=(t+e)/(t-e),u=(n+s)/(n-s);let p,g;if(o===_n)p=-(r+a)/(r-a),g=-2*r*a/(r-a);else if(o===Js)p=-r/(r-a),g=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,a,r,o=_n){const l=this.elements,c=1/(t-e),h=1/(n-s),d=1/(r-a),u=(t+e)*c,p=(n+s)*h;let g,v;if(o===_n)g=(r+a)*d,v=-2*d;else if(o===Js)g=a*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const oi=new P,Jt=new ct,bh=new P(0,0,0),Eh=new P(1,1,1),Cn=new P,Ss=new P,Nt=new P,_o=new ct,yo=new ds;class ln{constructor(e=0,t=0,n=0,s=ln.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ct(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _o.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_o,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yo.setFromEuler(this),this.setFromQuaternion(yo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ln.DEFAULT_ORDER="XYZ";class qr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Th=0;const xo=new P,li=new ds,un=new ct,Ms=new P,qi=new P,Ah=new P,Ch=new ds,So=new P(1,0,0),Mo=new P(0,1,0),wo=new P(0,0,1),bo={type:"added"},Rh={type:"removed"},ci={type:"childadded",child:null},ya={type:"childremoved",child:null};class pt extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new P,t=new ln,n=new ds,s=new P(1,1,1);function a(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new We}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return li.setFromAxisAngle(e,t),this.quaternion.multiply(li),this}rotateOnWorldAxis(e,t){return li.setFromAxisAngle(e,t),this.quaternion.premultiply(li),this}rotateX(e){return this.rotateOnAxis(So,e)}rotateY(e){return this.rotateOnAxis(Mo,e)}rotateZ(e){return this.rotateOnAxis(wo,e)}translateOnAxis(e,t){return xo.copy(e).applyQuaternion(this.quaternion),this.position.add(xo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(So,e)}translateY(e){return this.translateOnAxis(Mo,e)}translateZ(e){return this.translateOnAxis(wo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ms.copy(e):Ms.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(qi,Ms,this.up):un.lookAt(Ms,qi,this.up),this.quaternion.setFromRotationMatrix(un),s&&(un.extractRotation(s.matrixWorld),li.setFromRotationMatrix(un),this.quaternion.premultiply(li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bo),ci.child=e,this.dispatchEvent(ci),ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rh),ya.child=e,this.dispatchEvent(ya),ya.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),un.multiply(e.parent.matrixWorld)),e.applyMatrix4(un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bo),ci.child=e,this.dispatchEvent(ci),ci.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,e,Ah),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,Ch,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];a(e.shapes,d)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));s.material=o}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(a(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),d=r(e.shapes),u=r(e.skeletons),p=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}pt.DEFAULT_UP=new P(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qt=new P,fn=new P,xa=new P,pn=new P,hi=new P,di=new P,Eo=new P,Sa=new P,Ma=new P,wa=new P,ba=new lt,Ea=new lt,Ta=new lt;class Wt{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Qt.subVectors(e,t),s.cross(Qt);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){Qt.subVectors(s,t),fn.subVectors(n,t),xa.subVectors(e,t);const r=Qt.dot(Qt),o=Qt.dot(fn),l=Qt.dot(xa),c=fn.dot(fn),h=fn.dot(xa),d=r*c-o*o;if(d===0)return a.set(0,0,0),null;const u=1/d,p=(c*l-o*h)*u,g=(r*h-o*l)*u;return a.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,pn)===null?!1:pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getInterpolation(e,t,n,s,a,r,o,l){return this.getBarycoord(e,t,n,s,pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,pn.x),l.addScaledVector(r,pn.y),l.addScaledVector(o,pn.z),l)}static getInterpolatedAttribute(e,t,n,s,a,r){return ba.setScalar(0),Ea.setScalar(0),Ta.setScalar(0),ba.fromBufferAttribute(e,t),Ea.fromBufferAttribute(e,n),Ta.fromBufferAttribute(e,s),r.setScalar(0),r.addScaledVector(ba,a.x),r.addScaledVector(Ea,a.y),r.addScaledVector(Ta,a.z),r}static isFrontFacing(e,t,n,s){return Qt.subVectors(n,t),fn.subVectors(e,t),Qt.cross(fn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),Qt.cross(fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return Wt.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return Wt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let r,o;hi.subVectors(s,n),di.subVectors(a,n),Sa.subVectors(e,n);const l=hi.dot(Sa),c=di.dot(Sa);if(l<=0&&c<=0)return t.copy(n);Ma.subVectors(e,s);const h=hi.dot(Ma),d=di.dot(Ma);if(h>=0&&d<=h)return t.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(n).addScaledVector(hi,r);wa.subVectors(e,a);const p=hi.dot(wa),g=di.dot(wa);if(g>=0&&p<=g)return t.copy(a);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(di,o);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Eo.subVectors(a,s),o=(d-h)/(d-h+(p-g)),t.copy(s).addScaledVector(Eo,o);const f=1/(m+v+u);return r=v*f,o=u*f,t.copy(n).addScaledVector(hi,r).addScaledVector(di,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},ws={h:0,s:0,l:0};function Aa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Qe.workingColorSpace){if(e=Xr(e,1),t=Ct(t,0,1),n=Ct(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,r=2*n-a;this.r=Aa(r,a,e+1/3),this.g=Aa(r,a,e),this.b=Aa(r,a,e-1/3)}return Qe.toWorkingColorSpace(this,s),this}setStyle(e,t=kt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){const n=Xl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xn(e.r),this.g=xn(e.g),this.b=xn(e.b),this}copyLinearToSRGB(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return Qe.fromWorkingColorSpace(wt.copy(this),e),Math.round(Ct(wt.r*255,0,255))*65536+Math.round(Ct(wt.g*255,0,255))*256+Math.round(Ct(wt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(wt.copy(this),t);const n=wt.r,s=wt.g,a=wt.b,r=Math.max(n,s,a),o=Math.min(n,s,a);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const d=r-o;switch(c=h<=.5?d/(r+o):d/(2-r-o),r){case n:l=(s-a)/d+(s<a?6:0);break;case s:l=(a-n)/d+2;break;case a:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=kt){Qe.fromWorkingColorSpace(wt.copy(this),e);const t=wt.r,n=wt.g,s=wt.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Rn),this.setHSL(Rn.h+e,Rn.s+t,Rn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Rn),e.getHSL(ws);const n=rs(Rn.h,ws.h,t),s=rs(Rn.s,ws.s,t),a=rs(Rn.l,ws.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wt=new Ke;Ke.NAMES=Xl;let Ph=0;class Bi extends Oi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=yn(),this.name="",this.blending=Ti,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$a,this.blendDst=Za,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Ri,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ni,this.stencilZFail=ni,this.stencilZPass=ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ti&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$a&&(n.blendSrc=this.blendSrc),this.blendDst!==Za&&(n.blendDst=this.blendDst),this.blendEquation!==qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ri&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==oo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(t){const a=s(e.textures),r=s(e.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class on extends Bi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=Cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new P,bs=new Oe;class Yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Lr,this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)bs.fromBufferAttribute(this,t),bs.applyMatrix3(e),this.setXY(t,bs.x,bs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array),a=at(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lr&&(e.usage=this.usage),e}}class ql extends Yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Yl extends Yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gt extends Yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Lh=0;const Gt=new ct,Ca=new pt,ui=new P,Ft=new ei,Yi=new ei,yt=new P;class Zt extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hl(e)?Yl:ql)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new We().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,n){return Gt.makeTranslation(e,t,n),this.applyMatrix4(Gt),this}scale(e,t,n){return Gt.makeScale(e,t,n),this.applyMatrix4(Gt),this}lookAt(e){return Ca.lookAt(e),Ca.updateMatrix(),this.applyMatrix4(Ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,a=e.length;s<a;s++){const r=e[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new gt(n,3))}else{for(let n=0,s=t.count;n<s;n++){const a=e[n];t.setXYZ(n,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];Ft.setFromBufferAttribute(a),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new us);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){const o=t[a];Yi.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(Ft.min,Yi.min),Ft.expandByPoint(yt),yt.addVectors(Ft.max,Yi.max),Ft.expandByPoint(yt)):(Ft.expandByPoint(Yi.min),Ft.expandByPoint(Yi.max))}Ft.getCenter(n);let s=0;for(let a=0,r=e.count;a<r;a++)yt.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(yt));if(t)for(let a=0,r=t.length;a<r;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)yt.fromBufferAttribute(o,c),l&&(ui.fromBufferAttribute(e,c),yt.add(ui)),s=Math.max(s,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yt(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new P,l[L]=new P;const c=new P,h=new P,d=new P,u=new Oe,p=new Oe,g=new Oe,v=new P,m=new P;function f(L,M,x){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,x),u.fromBufferAttribute(a,L),p.fromBufferAttribute(a,M),g.fromBufferAttribute(a,x),h.sub(c),d.sub(c),p.sub(u),g.sub(u);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(R),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(R),o[L].add(v),o[M].add(v),o[x].add(v),l[L].add(m),l[M].add(m),l[x].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let L=0,M=w.length;L<M;++L){const x=w[L],R=x.start,k=x.count;for(let O=R,z=R+k;O<z;O+=3)f(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const b=new P,y=new P,U=new P,T=new P;function C(L){U.fromBufferAttribute(s,L),T.copy(U);const M=o[L];b.copy(M),b.sub(U.multiplyScalar(U.dot(M))).normalize(),y.crossVectors(T,M);const R=y.dot(l[L])<0?-1:1;r.setXYZW(L,b.x,b.y,b.z,R)}for(let L=0,M=w.length;L<M;++L){const x=w[L],R=x.start,k=x.count;for(let O=R,z=R+k;O<z;O+=3)C(e.getX(O+0)),C(e.getX(O+1)),C(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const s=new P,a=new P,r=new P,o=new P,l=new P,c=new P,h=new P,d=new P;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,v),r.fromBufferAttribute(t,m),h.subVectors(r,a),d.subVectors(s,a),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),a.fromBufferAttribute(t,u+1),r.fromBufferAttribute(t,u+2),h.subVectors(r,a),d.subVectors(s,a),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new Yt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=e(u,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],d=a[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const To=new ct,zn=new Wl,Es=new us,Ao=new P,Ts=new P,As=new P,Cs=new P,Ra=new P,Rs=new P,Co=new P,Ps=new P;class A extends pt{constructor(e=new Zt,t=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(a&&o){Rs.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],d=a[l];h!==0&&(Ra.fromBufferAttribute(d,e),r?Rs.addScaledVector(Ra,h):Rs.addScaledVector(Ra.sub(t),h))}t.add(Rs)}return t}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere),Es.applyMatrix4(a),zn.copy(e.ray).recast(e.near),!(Es.containsPoint(zn.origin)===!1&&(zn.intersectSphere(Es,Ao)===null||zn.origin.distanceToSquared(Ao)>(e.far-e.near)**2))&&(To.copy(a).invert(),zn.copy(e.ray).applyMatrix4(To),!(n.boundingBox!==null&&zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zn)))}_computeIntersections(e,t,n){let s;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,u=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,v=u.length;g<v;g++){const m=u[g],f=r[m.materialIndex],w=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=w,U=b;y<U;y+=3){const T=o.getX(y),C=o.getX(y+1),L=o.getX(y+2);s=Ls(this,f,e,n,c,h,d,T,C,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const w=o.getX(m),b=o.getX(m+1),y=o.getX(m+2);s=Ls(this,r,e,n,c,h,d,w,b,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,v=u.length;g<v;g++){const m=u[g],f=r[m.materialIndex],w=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=w,U=b;y<U;y+=3){const T=y,C=y+1,L=y+2;s=Ls(this,f,e,n,c,h,d,T,C,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const w=m,b=m+1,y=m+2;s=Ls(this,r,e,n,c,h,d,w,b,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Dh(i,e,t,n,s,a,r,o){let l;if(e.side===Rt?l=n.intersectTriangle(r,a,s,!0,o):l=n.intersectTriangle(s,a,r,e.side===Nn,o),l===null)return null;Ps.copy(o),Ps.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ps);return c<t.near||c>t.far?null:{distance:c,point:Ps.clone(),object:i}}function Ls(i,e,t,n,s,a,r,o,l,c){i.getVertexPosition(o,Ts),i.getVertexPosition(l,As),i.getVertexPosition(c,Cs);const h=Dh(i,e,t,n,Ts,As,Cs,Co);if(h){const d=new P;Wt.getBarycoord(Co,Ts,As,Cs,d),s&&(h.uv=Wt.getInterpolatedAttribute(s,o,l,c,d,new Oe)),a&&(h.uv1=Wt.getInterpolatedAttribute(a,o,l,c,d,new Oe)),r&&(h.normal=Wt.getInterpolatedAttribute(r,o,l,c,d,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new P,materialIndex:0};Wt.getNormal(Ts,As,Cs,u.normal),h.face=u,h.barycoord=d}return h}class Y extends Zt{constructor(e=1,t=1,n=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:r};const o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,n,t,e,r,a,0),g("z","y","x",1,-1,n,t,-e,r,a,1),g("x","z","y",1,1,e,n,t,s,r,2),g("x","z","y",1,-1,e,n,-t,s,r,3),g("x","y","z",1,-1,e,t,n,s,a,4),g("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(d,2));function g(v,m,f,w,b,y,U,T,C,L,M){const x=y/C,R=U/L,k=y/2,O=U/2,z=T/2,X=C+1,q=L+1;let J=0,G=0;const re=new P;for(let ie=0;ie<q;ie++){const _e=ie*R-O;for(let Ie=0;Ie<X;Ie++){const ze=Ie*x-k;re[v]=ze*w,re[m]=_e*b,re[f]=z,c.push(re.x,re.y,re.z),re[v]=0,re[m]=0,re[f]=T>0?1:-1,h.push(re.x,re.y,re.z),d.push(Ie/C),d.push(1-ie/L),J+=1}}for(let ie=0;ie<L;ie++)for(let _e=0;_e<C;_e++){const Ie=u+_e+X*ie,ze=u+_e+X*(ie+1),Z=u+(_e+1)+X*(ie+1),ee=u+(_e+1)+X*ie;l.push(Ie,ze,ee),l.push(ze,Z,ee),G+=6}o.addGroup(p,G,M),p+=G,u+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Y(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ui(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Tt(i){const e={};for(let t=0;t<i.length;t++){const n=Ui(i[t]);for(const s in n)e[s]=n[s]}return e}function Ih(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function $l(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const Uh={clone:Ui,merge:Tt};var Nh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends Bi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nh,this.fragmentShader=Fh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ui(e.uniforms),this.uniformsGroups=Ih(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Zl extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=_n}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pn=new P,Ro=new Oe,Po=new Oe;class zt extends Zl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ls*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(as*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ls*2*Math.atan(Math.tan(as*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pn.x,Pn.y).multiplyScalar(-e/Pn.z),Pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pn.x,Pn.y).multiplyScalar(-e/Pn.z)}getViewSize(e,t){return this.getViewBounds(e,Ro,Po),t.subVectors(Po,Ro)}setViewOffset(e,t,n,s,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(as*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,t-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fi=-90,pi=1;class Oh extends pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new zt(fi,pi,e,t);s.layers=this.layers,this.add(s);const a=new zt(fi,pi,e,t);a.layers=this.layers,this.add(a);const r=new zt(fi,pi,e,t);r.layers=this.layers,this.add(r);const o=new zt(fi,pi,e,t);o.layers=this.layers,this.add(o);const l=new zt(fi,pi,e,t);l.layers=this.layers,this.add(l);const c=new zt(fi,pi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,r,o,l]=t;for(const c of t)this.remove(c);if(e===_n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Js)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,a),e.setRenderTarget(n,1,s),e.render(t,r),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class jl extends bt{constructor(e,t,n,s,a,r,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Pi,super(e,t,n,s,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bh extends Qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new jl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Y(5,5,5),a=new Fn({name:"CubemapFromEquirect",uniforms:Ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rt,blending:In});a.uniforms.tEquirect.value=t;const r=new A(s,a),o=t.minFilter;return t.minFilter===Kn&&(t.minFilter=qt),new Oh(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,s){const a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,s);e.setRenderTarget(a)}}const Pa=new P,kh=new P,zh=new We;class Wn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Pa.subVectors(n,t).cross(kh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Pa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||zh.getNormalMatrix(e),s=this.coplanarPoint(Pa).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hn=new us,Ds=new P;class Yr{constructor(e=new Wn,t=new Wn,n=new Wn,s=new Wn,a=new Wn,r=new Wn){this.planes=[e,t,n,s,a,r]}set(e,t,n,s,a,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=_n){const n=this.planes,s=e.elements,a=s[0],r=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],p=s[8],g=s[9],v=s[10],m=s[11],f=s[12],w=s[13],b=s[14],y=s[15];if(n[0].setComponents(l-a,u-c,m-p,y-f).normalize(),n[1].setComponents(l+a,u+c,m+p,y+f).normalize(),n[2].setComponents(l+r,u+h,m+g,y+w).normalize(),n[3].setComponents(l-r,u-h,m-g,y-w).normalize(),n[4].setComponents(l-o,u-d,m-v,y-b).normalize(),t===_n)n[5].setComponents(l+o,u+d,m+v,y+b).normalize();else if(t===Js)n[5].setComponents(o,d,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(e){return Hn.center.set(0,0,0),Hn.radius=.7071067811865476,Hn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ds.x=s.normal.x>0?e.max.x:e.min.x,Ds.y=s.normal.y>0?e.max.y:e.min.y,Ds.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ds)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kl(){let i=null,e=!1,t=null,n=null;function s(a,r){t(a,r),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Hh(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){const g=d[u],v=d[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){const v=d[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}class Sn extends Zt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,r=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,p=[],g=[],v=[],m=[];for(let f=0;f<h;f++){const w=f*u-r;for(let b=0;b<c;b++){const y=b*d-a;g.push(y,-w,0),v.push(0,0,1),m.push(b/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<o;w++){const b=w+c*f,y=w+c*(f+1),U=w+1+c*(f+1),T=w+1+c*f;p.push(b,y,T),p.push(y,U,T)}this.setIndex(p),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(v,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$h=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Kh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ed=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,td=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,id=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,od=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ld=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,dd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ud=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,md=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_d="gl_FragColor = linearToOutputTexel( gl_FragColor );",yd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Sd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Md=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ed=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Td=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ad=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ld=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Id=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ud=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Nd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Od=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$d=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Kd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,su=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,au=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ru=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ou=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,du=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_u=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Su=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,bu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Eu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Tu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Au=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ru=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Du=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Iu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ou=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ku=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$u=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ju=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ku=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ju=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ef=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,af=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,of=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,df=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ff=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_f=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:Vh,alphahash_pars_fragment:Gh,alphamap_fragment:Wh,alphamap_pars_fragment:Xh,alphatest_fragment:qh,alphatest_pars_fragment:Yh,aomap_fragment:$h,aomap_pars_fragment:Zh,batching_pars_vertex:jh,batching_vertex:Kh,begin_vertex:Jh,beginnormal_vertex:Qh,bsdfs:ed,iridescence_fragment:td,bumpmap_pars_fragment:nd,clipping_planes_fragment:id,clipping_planes_pars_fragment:sd,clipping_planes_pars_vertex:ad,clipping_planes_vertex:rd,color_fragment:od,color_pars_fragment:ld,color_pars_vertex:cd,color_vertex:hd,common:dd,cube_uv_reflection_fragment:ud,defaultnormal_vertex:fd,displacementmap_pars_vertex:pd,displacementmap_vertex:md,emissivemap_fragment:gd,emissivemap_pars_fragment:vd,colorspace_fragment:_d,colorspace_pars_fragment:yd,envmap_fragment:xd,envmap_common_pars_fragment:Sd,envmap_pars_fragment:Md,envmap_pars_vertex:wd,envmap_physical_pars_fragment:Ud,envmap_vertex:bd,fog_vertex:Ed,fog_pars_vertex:Td,fog_fragment:Ad,fog_pars_fragment:Cd,gradientmap_pars_fragment:Rd,lightmap_pars_fragment:Pd,lights_lambert_fragment:Ld,lights_lambert_pars_fragment:Dd,lights_pars_begin:Id,lights_toon_fragment:Nd,lights_toon_pars_fragment:Fd,lights_phong_fragment:Od,lights_phong_pars_fragment:Bd,lights_physical_fragment:kd,lights_physical_pars_fragment:zd,lights_fragment_begin:Hd,lights_fragment_maps:Vd,lights_fragment_end:Gd,logdepthbuf_fragment:Wd,logdepthbuf_pars_fragment:Xd,logdepthbuf_pars_vertex:qd,logdepthbuf_vertex:Yd,map_fragment:$d,map_pars_fragment:Zd,map_particle_fragment:jd,map_particle_pars_fragment:Kd,metalnessmap_fragment:Jd,metalnessmap_pars_fragment:Qd,morphinstance_vertex:eu,morphcolor_vertex:tu,morphnormal_vertex:nu,morphtarget_pars_vertex:iu,morphtarget_vertex:su,normal_fragment_begin:au,normal_fragment_maps:ru,normal_pars_fragment:ou,normal_pars_vertex:lu,normal_vertex:cu,normalmap_pars_fragment:hu,clearcoat_normal_fragment_begin:du,clearcoat_normal_fragment_maps:uu,clearcoat_pars_fragment:fu,iridescence_pars_fragment:pu,opaque_fragment:mu,packing:gu,premultiplied_alpha_fragment:vu,project_vertex:_u,dithering_fragment:yu,dithering_pars_fragment:xu,roughnessmap_fragment:Su,roughnessmap_pars_fragment:Mu,shadowmap_pars_fragment:wu,shadowmap_pars_vertex:bu,shadowmap_vertex:Eu,shadowmask_pars_fragment:Tu,skinbase_vertex:Au,skinning_pars_vertex:Cu,skinning_vertex:Ru,skinnormal_vertex:Pu,specularmap_fragment:Lu,specularmap_pars_fragment:Du,tonemapping_fragment:Iu,tonemapping_pars_fragment:Uu,transmission_fragment:Nu,transmission_pars_fragment:Fu,uv_pars_fragment:Ou,uv_pars_vertex:Bu,uv_vertex:ku,worldpos_vertex:zu,background_vert:Hu,background_frag:Vu,backgroundCube_vert:Gu,backgroundCube_frag:Wu,cube_vert:Xu,cube_frag:qu,depth_vert:Yu,depth_frag:$u,distanceRGBA_vert:Zu,distanceRGBA_frag:ju,equirect_vert:Ku,equirect_frag:Ju,linedashed_vert:Qu,linedashed_frag:ef,meshbasic_vert:tf,meshbasic_frag:nf,meshlambert_vert:sf,meshlambert_frag:af,meshmatcap_vert:rf,meshmatcap_frag:of,meshnormal_vert:lf,meshnormal_frag:cf,meshphong_vert:hf,meshphong_frag:df,meshphysical_vert:uf,meshphysical_frag:ff,meshtoon_vert:pf,meshtoon_frag:mf,points_vert:gf,points_frag:vf,shadow_vert:_f,shadow_frag:yf,sprite_vert:xf,sprite_frag:Sf},he={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},an={basic:{uniforms:Tt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Tt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Tt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Tt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Tt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Tt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Tt([he.points,he.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Tt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Tt([he.common,he.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Tt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Tt([he.sprite,he.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Tt([he.common,he.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Tt([he.lights,he.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};an.physical={uniforms:Tt([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Is={r:0,b:0,g:0},Vn=new ln,Mf=new ct;function wf(i,e,t,n,s,a,r){const o=new Ke(0);let l=a===!0?0:1,c,h,d=null,u=0,p=null;function g(w){let b=w.isScene===!0?w.background:null;return b&&b.isTexture&&(b=(w.backgroundBlurriness>0?t:e).get(b)),b}function v(w){let b=!1;const y=g(w);y===null?f(o,l):y&&y.isColor&&(f(y,1),b=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,r):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,b){const y=g(b);y&&(y.isCubeTexture||y.mapping===sa)?(h===void 0&&(h=new A(new Y(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:Ui(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Vn.copy(b.backgroundRotation),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Mf.makeRotationFromEuler(Vn)),h.material.toneMapped=Qe.getTransfer(y.colorSpace)!==ot,(d!==y||u!==y.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,p=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new A(new Sn(2,2),new Fn({name:"BackgroundMaterial",uniforms:Ui(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(y.colorSpace)!==ot,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,p=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function f(w,b){w.getRGB(Is,$l(i)),n.buffers.color.setClear(Is.r,Is.g,Is.b,b,r)}return{getClearColor:function(){return o},setClearColor:function(w,b=1){o.set(w),l=b,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,f(o,l)},render:v,addToRenderList:m}}function bf(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let a=s,r=!1;function o(x,R,k,O,z){let X=!1;const q=d(O,k,R);a!==q&&(a=q,c(a.object)),X=p(x,O,k,z),X&&g(x,O,k,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(X||r)&&(r=!1,y(x,R,k,O),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function d(x,R,k){const O=k.wireframe===!0;let z=n[x.id];z===void 0&&(z={},n[x.id]=z);let X=z[R.id];X===void 0&&(X={},z[R.id]=X);let q=X[O];return q===void 0&&(q=u(l()),X[O]=q),q}function u(x){const R=[],k=[],O=[];for(let z=0;z<t;z++)R[z]=0,k[z]=0,O[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:k,attributeDivisors:O,object:x,attributes:{},index:null}}function p(x,R,k,O){const z=a.attributes,X=R.attributes;let q=0;const J=k.getAttributes();for(const G in J)if(J[G].location>=0){const ie=z[G];let _e=X[G];if(_e===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(_e=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(_e=x.instanceColor)),ie===void 0||ie.attribute!==_e||_e&&ie.data!==_e.data)return!0;q++}return a.attributesNum!==q||a.index!==O}function g(x,R,k,O){const z={},X=R.attributes;let q=0;const J=k.getAttributes();for(const G in J)if(J[G].location>=0){let ie=X[G];ie===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(ie=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(ie=x.instanceColor));const _e={};_e.attribute=ie,ie&&ie.data&&(_e.data=ie.data),z[G]=_e,q++}a.attributes=z,a.attributesNum=q,a.index=O}function v(){const x=a.newAttributes;for(let R=0,k=x.length;R<k;R++)x[R]=0}function m(x){f(x,0)}function f(x,R){const k=a.newAttributes,O=a.enabledAttributes,z=a.attributeDivisors;k[x]=1,O[x]===0&&(i.enableVertexAttribArray(x),O[x]=1),z[x]!==R&&(i.vertexAttribDivisor(x,R),z[x]=R)}function w(){const x=a.newAttributes,R=a.enabledAttributes;for(let k=0,O=R.length;k<O;k++)R[k]!==x[k]&&(i.disableVertexAttribArray(k),R[k]=0)}function b(x,R,k,O,z,X,q){q===!0?i.vertexAttribIPointer(x,R,k,z,X):i.vertexAttribPointer(x,R,k,O,z,X)}function y(x,R,k,O){v();const z=O.attributes,X=k.getAttributes(),q=R.defaultAttributeValues;for(const J in X){const G=X[J];if(G.location>=0){let re=z[J];if(re===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(re=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(re=x.instanceColor)),re!==void 0){const ie=re.normalized,_e=re.itemSize,Ie=e.get(re);if(Ie===void 0)continue;const ze=Ie.buffer,Z=Ie.type,ee=Ie.bytesPerElement,fe=Z===i.INT||Z===i.UNSIGNED_INT||re.gpuType===Br;if(re.isInterleavedBufferAttribute){const te=re.data,le=te.stride,ae=re.offset;if(te.isInstancedInterleavedBuffer){for(let Ce=0;Ce<G.locationSize;Ce++)f(G.location+Ce,te.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Ce=0;Ce<G.locationSize;Ce++)m(G.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let Ce=0;Ce<G.locationSize;Ce++)b(G.location+Ce,_e/G.locationSize,Z,ie,le*ee,(ae+_e/G.locationSize*Ce)*ee,fe)}else{if(re.isInstancedBufferAttribute){for(let te=0;te<G.locationSize;te++)f(G.location+te,re.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let te=0;te<G.locationSize;te++)m(G.location+te);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let te=0;te<G.locationSize;te++)b(G.location+te,_e/G.locationSize,Z,ie,_e*ee,_e/G.locationSize*te*ee,fe)}}else if(q!==void 0){const ie=q[J];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(G.location,ie);break;case 3:i.vertexAttrib3fv(G.location,ie);break;case 4:i.vertexAttrib4fv(G.location,ie);break;default:i.vertexAttrib1fv(G.location,ie)}}}}w()}function U(){L();for(const x in n){const R=n[x];for(const k in R){const O=R[k];for(const z in O)h(O[z].object),delete O[z];delete R[k]}delete n[x]}}function T(x){if(n[x.id]===void 0)return;const R=n[x.id];for(const k in R){const O=R[k];for(const z in O)h(O[z].object),delete O[z];delete R[k]}delete n[x.id]}function C(x){for(const R in n){const k=n[R];if(k[x.id]===void 0)continue;const O=k[x.id];for(const z in O)h(O[z].object),delete O[z];delete k[x.id]}}function L(){M(),r=!0,a!==s&&(a=s,c(a.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:M,dispose:U,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function Ef(i,e,t){let n;function s(c){n=c}function a(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function r(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];t.update(p,n,1)}function l(c,h,d,u){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)r(c[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v]*u[v];t.update(g,n,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Tf(i,e,t,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(C){return!(C!==nn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const L=C===hs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Mn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==rn&&!L)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:U,maxSamples:T}}function Af(i){const e=this;let t=null,n=0,s=!1,a=!1;const r=new Wn,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||s;return s=u,n=d.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||a&&!m)a?h(null):c();else{const w=a?0:n,b=w*4;let y=f.clippingState||null;l.value=y,y=h(g,u,b,p);for(let U=0;U!==b;++U)y[U]=t[U];f.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,p,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=p+v*4,w=u.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,y=p;b!==v;++b,y+=4)r.copy(d[b]).applyMatrix4(w,o),r.normal.toArray(m,y),m[y+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Cf(i){let e=new WeakMap;function t(r,o){return o===Ks?r.mapping=Pi:o===ir&&(r.mapping=Li),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===Ks||o===ir)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Bh(l.height);return c.fromEquirectangularTexture(i,r),e.set(r,c),r.addEventListener("dispose",s),t(c.texture,r.mapping)}else return null}}return r}function s(r){const o=r.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class Jl extends Zl{constructor(e=-1,t=1,n=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,r=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const wi=4,Lo=[.125,.215,.35,.446,.526,.582],Yn=20,La=new Jl,Do=new Ke;let Da=null,Ia=0,Ua=0,Na=!1;const Xn=(1+Math.sqrt(5))/2,mi=1/Xn,Io=[new P(-Xn,mi,0),new P(Xn,mi,0),new P(-mi,0,Xn),new P(mi,0,Xn),new P(0,Xn,-mi),new P(0,Xn,mi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Uo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Da=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Da,Ia,Ua),this._renderer.xr.enabled=Na,e.scissorTest=!1,Us(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pi||e.mapping===Li?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Da=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:hs,format:nn,colorSpace:Fi,depthBuffer:!1},s=No(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=No(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rf(a)),this._blurMaterial=Pf(a,e,t)}return s}_compileMaterial(e){const t=new A(this._lodPlanes[0],e);this._renderer.compile(t,La)}_sceneToCubeUV(e,t,n,s){const o=new zt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Do),h.toneMapping=Un,h.autoClear=!1;const p=new on({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),g=new A(new Y,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Do),v=!0);for(let f=0;f<6;f++){const w=f%3;w===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):w===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const b=this._cubeSize;Us(s,w*b,f>2?b:0,b,b),h.setRenderTarget(s),v&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Pi||e.mapping===Li;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fo());const a=s?this._cubemapMaterial:this._equirectMaterial,r=new A(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;Us(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,La)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Io[(s-a-1)%Io.length];this._blur(e,a-1,a,r,o)}t.autoClear=n}_blur(e,t,n,s,a){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,s,"latitudinal",a),this._halfBlur(r,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new A(this._lodPlanes[s],c),u=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Yn-1),v=a/g,m=isFinite(a)?1+Math.floor(h*v):Yn;m>Yn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yn}`);const f=[];let w=0;for(let C=0;C<Yn;++C){const L=C/v,M=Math.exp(-L*L/2);f.push(M),C===0?w+=M:C<m&&(w+=2*M)}for(let C=0;C<f.length;C++)f[C]=f[C]/w;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:b}=this;u.dTheta.value=g,u.mipInt.value=b-n;const y=this._sizeLods[s],U=3*y*(s>b-wi?s-b+wi:0),T=4*(this._cubeSize-y);Us(t,U,T,3*y,2*y),l.setRenderTarget(t),l.render(d,La)}}function Rf(i){const e=[],t=[],n=[];let s=i;const a=i-wi+1+Lo.length;for(let r=0;r<a;r++){const o=Math.pow(2,s);t.push(o);let l=1/o;r>i-wi?l=Lo[r-i+wi-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,v=3,m=2,f=1,w=new Float32Array(v*g*p),b=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let T=0;T<p;T++){const C=T%3*2/3-1,L=T>2?0:-1,M=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];w.set(M,v*g*T),b.set(u,m*g*T);const x=[T,T,T,T,T,T];y.set(x,f*g*T)}const U=new Zt;U.setAttribute("position",new Yt(w,v)),U.setAttribute("uv",new Yt(b,m)),U.setAttribute("faceIndex",new Yt(y,f)),e.push(U),s>wi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function No(i,e,t){const n=new Qn(i,e,t);return n.texture.mapping=sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Us(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Pf(i,e,t){const n=new Float32Array(Yn),s=new P(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$r(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Fo(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$r(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Oo(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$r(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function $r(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Lf(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ks||l===ir,h=l===Pi||l===Li;if(c||h){let d=e.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Uo(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Uo(i)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function Df(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&ts("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function If(i,e,t,n){const s={},a=new WeakMap;function r(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)e.remove(v[m])}u.removeEventListener("dispose",r),delete s[u.id];const p=a.get(u);p&&(e.remove(p),a.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)e.update(u[g],i.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const v=p[g];for(let m=0,f=v.length;m<f;m++)e.update(v[m],i.ARRAY_BUFFER)}}function c(d){const u=[],p=d.index,g=d.attributes.position;let v=0;if(p!==null){const w=p.array;v=p.version;for(let b=0,y=w.length;b<y;b+=3){const U=w[b+0],T=w[b+1],C=w[b+2];u.push(U,T,T,C,C,U)}}else if(g!==void 0){const w=g.array;v=g.version;for(let b=0,y=w.length/3-1;b<y;b+=3){const U=b+0,T=b+1,C=b+2;u.push(U,T,T,C,C,U)}}else return;const m=new(Hl(u)?Yl:ql)(u,1);m.version=v;const f=a.get(d);f&&e.remove(f),a.set(d,m)}function h(d){const u=a.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Uf(i,e,t){let n;function s(u){n=u}let a,r;function o(u){a=u.type,r=u.bytesPerElement}function l(u,p){i.drawElements(n,p,a,u*r),t.update(p,n,1)}function c(u,p,g){g!==0&&(i.drawElementsInstanced(n,p,a,u*r,g),t.update(p,n,g))}function h(u,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,a,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function d(u,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/r,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,a,u,0,v,0,g);let f=0;for(let w=0;w<g;w++)f+=p[w]*v[w];t.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Nf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ff(i,e,t){const n=new WeakMap,s=new lt;function a(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let x=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var p=x;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let U=o.attributes.position.count*y,T=1;U>e.maxTextureSize&&(T=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const C=new Float32Array(U*T*4*d),L=new Gl(C,U,T,d);L.type=rn,L.needsUpdate=!0;const M=y*4;for(let R=0;R<d;R++){const k=f[R],O=w[R],z=b[R],X=U*T*4*R;for(let q=0;q<k.count;q++){const J=q*M;g===!0&&(s.fromBufferAttribute(k,q),C[X+J+0]=s.x,C[X+J+1]=s.y,C[X+J+2]=s.z,C[X+J+3]=0),v===!0&&(s.fromBufferAttribute(O,q),C[X+J+4]=s.x,C[X+J+5]=s.y,C[X+J+6]=s.z,C[X+J+7]=0),m===!0&&(s.fromBufferAttribute(z,q),C[X+J+8]=s.x,C[X+J+9]=s.y,C[X+J+10]=s.z,C[X+J+11]=z.itemSize===4?s.w:1)}}u={count:d,texture:L,size:new Oe(U,T)},n.set(o,u),o.addEventListener("dispose",x)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:a}}function Of(i,e,t,n){let s=new WeakMap;function a(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function r(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:r}}class Ql extends bt{constructor(e,t,n,s,a,r,o,l,c,h=Ai){if(h!==Ai&&h!==Ii)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ai&&(n=Jn),n===void 0&&h===Ii&&(n=Di),super(null,s,a,r,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ht,this.minFilter=l!==void 0?l:Ht,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ec=new bt,Bo=new Ql(1,1),tc=new Gl,nc=new Mh,ic=new jl,ko=[],zo=[],Ho=new Float32Array(16),Vo=new Float32Array(9),Go=new Float32Array(4);function ki(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let a=ko[s];if(a===void 0&&(a=new Float32Array(s),ko[s]=a),e!==0){n.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,i[r].toArray(a,o)}return a}function vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function _t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ra(i,e){let t=zo[e];t===void 0&&(t=new Int32Array(e),zo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Bf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function kf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2fv(this.addr,e),_t(t,e)}}function zf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;i.uniform3fv(this.addr,e),_t(t,e)}}function Hf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4fv(this.addr,e),_t(t,e)}}function Vf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,n))return;Go.set(n),i.uniformMatrix2fv(this.addr,!1,Go),_t(t,n)}}function Gf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,n))return;Vo.set(n),i.uniformMatrix3fv(this.addr,!1,Vo),_t(t,n)}}function Wf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,n))return;Ho.set(n),i.uniformMatrix4fv(this.addr,!1,Ho),_t(t,n)}}function Xf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function qf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2iv(this.addr,e),_t(t,e)}}function Yf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3iv(this.addr,e),_t(t,e)}}function $f(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4iv(this.addr,e),_t(t,e)}}function Zf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function jf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2uiv(this.addr,e),_t(t,e)}}function Kf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3uiv(this.addr,e),_t(t,e)}}function Jf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4uiv(this.addr,e),_t(t,e)}}function Qf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(Bo.compareFunction=zl,a=Bo):a=ec,t.setTexture2D(e||a,s)}function ep(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||nc,s)}function tp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ic,s)}function np(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||tc,s)}function ip(i){switch(i){case 5126:return Bf;case 35664:return kf;case 35665:return zf;case 35666:return Hf;case 35674:return Vf;case 35675:return Gf;case 35676:return Wf;case 5124:case 35670:return Xf;case 35667:case 35671:return qf;case 35668:case 35672:return Yf;case 35669:case 35673:return $f;case 5125:return Zf;case 36294:return jf;case 36295:return Kf;case 36296:return Jf;case 35678:case 36198:case 36298:case 36306:case 35682:return Qf;case 35679:case 36299:case 36307:return ep;case 35680:case 36300:case 36308:case 36293:return tp;case 36289:case 36303:case 36311:case 36292:return np}}function sp(i,e){i.uniform1fv(this.addr,e)}function ap(i,e){const t=ki(e,this.size,2);i.uniform2fv(this.addr,t)}function rp(i,e){const t=ki(e,this.size,3);i.uniform3fv(this.addr,t)}function op(i,e){const t=ki(e,this.size,4);i.uniform4fv(this.addr,t)}function lp(i,e){const t=ki(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function cp(i,e){const t=ki(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function hp(i,e){const t=ki(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function dp(i,e){i.uniform1iv(this.addr,e)}function up(i,e){i.uniform2iv(this.addr,e)}function fp(i,e){i.uniform3iv(this.addr,e)}function pp(i,e){i.uniform4iv(this.addr,e)}function mp(i,e){i.uniform1uiv(this.addr,e)}function gp(i,e){i.uniform2uiv(this.addr,e)}function vp(i,e){i.uniform3uiv(this.addr,e)}function _p(i,e){i.uniform4uiv(this.addr,e)}function yp(i,e,t){const n=this.cache,s=e.length,a=ra(t,s);vt(n,a)||(i.uniform1iv(this.addr,a),_t(n,a));for(let r=0;r!==s;++r)t.setTexture2D(e[r]||ec,a[r])}function xp(i,e,t){const n=this.cache,s=e.length,a=ra(t,s);vt(n,a)||(i.uniform1iv(this.addr,a),_t(n,a));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||nc,a[r])}function Sp(i,e,t){const n=this.cache,s=e.length,a=ra(t,s);vt(n,a)||(i.uniform1iv(this.addr,a),_t(n,a));for(let r=0;r!==s;++r)t.setTextureCube(e[r]||ic,a[r])}function Mp(i,e,t){const n=this.cache,s=e.length,a=ra(t,s);vt(n,a)||(i.uniform1iv(this.addr,a),_t(n,a));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||tc,a[r])}function wp(i){switch(i){case 5126:return sp;case 35664:return ap;case 35665:return rp;case 35666:return op;case 35674:return lp;case 35675:return cp;case 35676:return hp;case 5124:case 35670:return dp;case 35667:case 35671:return up;case 35668:case 35672:return fp;case 35669:case 35673:return pp;case 5125:return mp;case 36294:return gp;case 36295:return vp;case 36296:return _p;case 35678:case 36198:case 36298:case 36306:case 35682:return yp;case 35679:case 36299:case 36307:return xp;case 35680:case 36300:case 36308:case 36293:return Sp;case 36289:case 36303:case 36311:case 36292:return Mp}}class bp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ip(t.type)}}class Ep{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wp(t.type)}}class Tp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const o=s[a];o.setValue(e,t[o.id],n)}}}const Fa=/(\w+)(\])?(\[|\.)?/g;function Wo(i,e){i.seq.push(e),i.map[e.id]=e}function Ap(i,e,t){const n=i.name,s=n.length;for(Fa.lastIndex=0;;){const a=Fa.exec(n),r=Fa.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){Wo(t,c===void 0?new bp(o,i,e):new Ep(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Tp(o),Wo(t,d)),t=d}}}class js{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=e.getActiveUniform(t,s),r=e.getUniformLocation(t,a.name);Ap(a,r,this)}}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,r=t.length;a!==r;++a){const o=t[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const r=e[s];r.id in t&&n.push(r)}return n}}function Xo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Cp=37297;let Rp=0;function Pp(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=s;r<a;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const qo=new We;function Lp(i){Qe._getMatrix(qo,Qe.workingColorSpace,i);const e=`mat3( ${qo.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case aa:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Yo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const r=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Pp(i.getShaderSource(e),r)}else return s}function Dp(i,e){const t=Lp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ip(i,e){let t;switch(e){case Uc:t="Linear";break;case Nc:t="Reinhard";break;case Fc:t="Cineon";break;case Oc:t="ACESFilmic";break;case kc:t="AgX";break;case zc:t="Neutral";break;case Bc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ns=new P;function Up(){Qe.getLuminanceCoefficients(Ns);const i=Ns.x.toFixed(4),e=Ns.y.toFixed(4),t=Ns.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Np(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ns).join(`
`)}function Fp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Op(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(e,s),r=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:i.getAttribLocation(e,r),locationSize:o}}return t}function ns(i){return i!==""}function $o(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dr(i){return i.replace(Bp,zp)}const kp=new Map;function zp(i,e){let t=Xe[e];if(t===void 0){const n=kp.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Dr(t)}const Hp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jo(i){return i.replace(Hp,Vp)}function Vp(i,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Ko(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Gp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Tl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Al?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===gn&&(e="SHADOWMAP_TYPE_VSM"),e}function Wp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Pi:case Li:e="ENVMAP_TYPE_CUBE";break;case sa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Xp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Li:e="ENVMAP_MODE_REFRACTION";break}return e}function qp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Cl:e="ENVMAP_BLENDING_MULTIPLY";break;case Dc:e="ENVMAP_BLENDING_MIX";break;case Ic:e="ENVMAP_BLENDING_ADD";break}return e}function Yp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function $p(i,e,t,n){const s=i.getContext(),a=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=Gp(t),c=Wp(t),h=Xp(t),d=qp(t),u=Yp(t),p=Np(t),g=Fp(a),v=s.createProgram();let m,f,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ns).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ns).join(`
`),f.length>0&&(f+=`
`)):(m=[Ko(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ns).join(`
`),f=[Ko(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Un?Ip("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Dp("linearToOutputTexel",t.outputColorSpace),Up(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ns).join(`
`)),r=Dr(r),r=$o(r,t),r=Zo(r,t),o=Dr(o),o=$o(o,t),o=Zo(o,t),r=jo(r),o=jo(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===lo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=w+m+r,y=w+f+o,U=Xo(s,s.VERTEX_SHADER,b),T=Xo(s,s.FRAGMENT_SHADER,y);s.attachShader(v,U),s.attachShader(v,T),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(R){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(v).trim(),O=s.getShaderInfoLog(U).trim(),z=s.getShaderInfoLog(T).trim();let X=!0,q=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,U,T);else{const J=Yo(s,U,"vertex"),G=Yo(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+k+`
`+J+`
`+G)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(O===""||z==="")&&(q=!1);q&&(R.diagnostics={runnable:X,programLog:k,vertexShader:{log:O,prefix:m},fragmentShader:{log:z,prefix:f}})}s.deleteShader(U),s.deleteShader(T),L=new js(s,v),M=Op(s,v)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,Cp)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Rp++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=U,this.fragmentShader=T,this}let Zp=0;class jp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Kp(e),t.set(e,n)),n}}class Kp{constructor(e){this.id=Zp++,this.code=e,this.usedTimes=0}}function Jp(i,e,t,n,s,a,r){const o=new qr,l=new jp,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,x,R,k,O){const z=k.fog,X=O.geometry,q=M.isMeshStandardMaterial?k.environment:null,J=(M.isMeshStandardMaterial?t:e).get(M.envMap||q),G=J&&J.mapping===sa?J.image.height:null,re=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const ie=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,_e=ie!==void 0?ie.length:0;let Ie=0;X.morphAttributes.position!==void 0&&(Ie=1),X.morphAttributes.normal!==void 0&&(Ie=2),X.morphAttributes.color!==void 0&&(Ie=3);let ze,Z,ee,fe;if(re){const Ze=an[re];ze=Ze.vertexShader,Z=Ze.fragmentShader}else ze=M.vertexShader,Z=M.fragmentShader,l.update(M),ee=l.getVertexShaderID(M),fe=l.getFragmentShaderID(M);const te=i.getRenderTarget(),le=i.state.buffers.depth.getReversed(),ae=O.isInstancedMesh===!0,Ce=O.isBatchedMesh===!0,Ye=!!M.map,Be=!!M.matcap,$e=!!J,D=!!M.aoMap,Re=!!M.lightMap,Le=!!M.bumpMap,Ue=!!M.normalMap,ye=!!M.displacementMap,rt=!!M.emissiveMap,Ae=!!M.metalnessMap,E=!!M.roughnessMap,_=M.anisotropy>0,B=M.clearcoat>0,j=M.dispersion>0,Q=M.iridescence>0,$=M.sheen>0,Se=M.transmission>0,de=_&&!!M.anisotropyMap,me=B&&!!M.clearcoatMap,je=B&&!!M.clearcoatNormalMap,ne=B&&!!M.clearcoatRoughnessMap,ge=Q&&!!M.iridescenceMap,xe=Q&&!!M.iridescenceThicknessMap,De=$&&!!M.sheenColorMap,ve=$&&!!M.sheenRoughnessMap,qe=!!M.specularMap,ke=!!M.specularColorMap,tt=!!M.specularIntensityMap,I=Se&&!!M.transmissionMap,oe=Se&&!!M.thicknessMap,W=!!M.gradientMap,K=!!M.alphaMap,ue=M.alphaTest>0,ce=!!M.alphaHash,Ne=!!M.extensions;let He=Un;M.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(He=i.toneMapping);const nt={shaderID:re,shaderType:M.type,shaderName:M.name,vertexShader:ze,fragmentShader:Z,defines:M.defines,customVertexShaderID:ee,customFragmentShaderID:fe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ce,batchingColor:Ce&&O._colorsTexture!==null,instancing:ae,instancingColor:ae&&O.instanceColor!==null,instancingMorph:ae&&O.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Fi,alphaToCoverage:!!M.alphaToCoverage,map:Ye,matcap:Be,envMap:$e,envMapMode:$e&&J.mapping,envMapCubeUVHeight:G,aoMap:D,lightMap:Re,bumpMap:Le,normalMap:Ue,displacementMap:u&&ye,emissiveMap:rt,normalMapObjectSpace:Ue&&M.normalMapType===Wc,normalMapTangentSpace:Ue&&M.normalMapType===kl,metalnessMap:Ae,roughnessMap:E,anisotropy:_,anisotropyMap:de,clearcoat:B,clearcoatMap:me,clearcoatNormalMap:je,clearcoatRoughnessMap:ne,dispersion:j,iridescence:Q,iridescenceMap:ge,iridescenceThicknessMap:xe,sheen:$,sheenColorMap:De,sheenRoughnessMap:ve,specularMap:qe,specularColorMap:ke,specularIntensityMap:tt,transmission:Se,transmissionMap:I,thicknessMap:oe,gradientMap:W,opaque:M.transparent===!1&&M.blending===Ti&&M.alphaToCoverage===!1,alphaMap:K,alphaTest:ue,alphaHash:ce,combine:M.combine,mapUv:Ye&&v(M.map.channel),aoMapUv:D&&v(M.aoMap.channel),lightMapUv:Re&&v(M.lightMap.channel),bumpMapUv:Le&&v(M.bumpMap.channel),normalMapUv:Ue&&v(M.normalMap.channel),displacementMapUv:ye&&v(M.displacementMap.channel),emissiveMapUv:rt&&v(M.emissiveMap.channel),metalnessMapUv:Ae&&v(M.metalnessMap.channel),roughnessMapUv:E&&v(M.roughnessMap.channel),anisotropyMapUv:de&&v(M.anisotropyMap.channel),clearcoatMapUv:me&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:je&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:De&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:ve&&v(M.sheenRoughnessMap.channel),specularMapUv:qe&&v(M.specularMap.channel),specularColorMapUv:ke&&v(M.specularColorMap.channel),specularIntensityMapUv:tt&&v(M.specularIntensityMap.channel),transmissionMapUv:I&&v(M.transmissionMap.channel),thicknessMapUv:oe&&v(M.thicknessMap.channel),alphaMapUv:K&&v(M.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ue||_),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(Ye||K),fog:!!z,useFog:M.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:le,skinning:O.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Ie,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:He,decodeVideoTexture:Ye&&M.map.isVideoTexture===!0&&Qe.getTransfer(M.map.colorSpace)===ot,decodeVideoTextureEmissive:rt&&M.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(M.emissiveMap.colorSpace)===ot,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===en,flipSided:M.side===Rt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ne&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&M.extensions.multiDraw===!0||Ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}function f(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const R in M.defines)x.push(R),x.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(w(x,M),b(x,M),x.push(i.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function w(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function b(M,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),M.push(o.mask)}function y(M){const x=g[M.type];let R;if(x){const k=an[x];R=Uh.clone(k.uniforms)}else R=M.uniforms;return R}function U(M,x){let R;for(let k=0,O=h.length;k<O;k++){const z=h[k];if(z.cacheKey===x){R=z,++R.usedTimes;break}}return R===void 0&&(R=new $p(i,x,M,a),h.push(R)),R}function T(M){if(--M.usedTimes===0){const x=h.indexOf(M);h[x]=h[h.length-1],h.pop(),M.destroy()}}function C(M){l.remove(M)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:U,releaseProgram:T,releaseShaderCache:C,programs:h,dispose:L}}function Qp(){let i=new WeakMap;function e(r){return i.has(r)}function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function s(r,o,l){i.get(r)[o]=l}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:a}}function em(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Jo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Qo(){const i=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function r(d,u,p,g,v,m){let f=i[e];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},i[e]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=v,f.group=m),e++,f}function o(d,u,p,g,v,m){const f=r(d,u,p,g,v,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(d,u,p,g,v,m){const f=r(d,u,p,g,v,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(d,u){t.length>1&&t.sort(d||em),n.length>1&&n.sort(u||Jo),s.length>1&&s.sort(u||Jo)}function h(){for(let d=e,u=i.length;d<u;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:o,unshift:l,finish:h,sort:c}}function tm(){let i=new WeakMap;function e(n,s){const a=i.get(n);let r;return a===void 0?(r=new Qo,i.set(n,[r])):s>=a.length?(r=new Qo,a.push(r)):r=a[s],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function nm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ke};break;case"SpotLight":t={position:new P,direction:new P,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function im(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let sm=0;function am(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function rm(i){const e=new nm,t=im(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,a=new ct,r=new ct;function o(c){let h=0,d=0,u=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,w=0,b=0,y=0,U=0,T=0,C=0;c.sort(am);for(let M=0,x=c.length;M<x;M++){const R=c[M],k=R.color,O=R.intensity,z=R.distance,X=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=k.r*O,d+=k.g*O,u+=k.b*O;else if(R.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(R.sh.coefficients[q],O);C++}else if(R.isDirectionalLight){const q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const J=R.shadow,G=t.get(R);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=R.shadow.matrix,w++}n.directional[p]=q,p++}else if(R.isSpotLight){const q=e.get(R);q.position.setFromMatrixPosition(R.matrixWorld),q.color.copy(k).multiplyScalar(O),q.distance=z,q.coneCos=Math.cos(R.angle),q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),q.decay=R.decay,n.spot[v]=q;const J=R.shadow;if(R.map&&(n.spotLightMap[U]=R.map,U++,J.updateMatrices(R),R.castShadow&&T++),n.spotLightMatrix[v]=J.matrix,R.castShadow){const G=t.get(R);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=X,y++}v++}else if(R.isRectAreaLight){const q=e.get(R);q.color.copy(k).multiplyScalar(O),q.halfWidth.set(R.width*.5,0,0),q.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=q,m++}else if(R.isPointLight){const q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),q.distance=R.distance,q.decay=R.decay,R.castShadow){const J=R.shadow,G=t.get(R);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,G.shadowCameraNear=J.camera.near,G.shadowCameraFar=J.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=R.shadow.matrix,b++}n.point[g]=q,g++}else if(R.isHemisphereLight){const q=e.get(R);q.skyColor.copy(R.color).multiplyScalar(O),q.groundColor.copy(R.groundColor).multiplyScalar(O),n.hemi[f]=q,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const L=n.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==w||L.numPointShadows!==b||L.numSpotShadows!==y||L.numSpotMaps!==U||L.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+U-T,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,L.directionalLength=p,L.pointLength=g,L.spotLength=v,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=w,L.numPointShadows=b,L.numSpotShadows=y,L.numSpotMaps=U,L.numLightProbes=C,n.version=sm++)}function l(c,h){let d=0,u=0,p=0,g=0,v=0;const m=h.matrixWorldInverse;for(let f=0,w=c.length;f<w;f++){const b=c[f];if(b.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(b.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),r.identity(),a.copy(b.matrixWorld),a.premultiply(m),r.extractRotation(a),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),g++}else if(b.isPointLight){const y=n.point[u];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function el(i){const e=new rm(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function a(h){t.push(h)}function r(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function om(i){let e=new WeakMap;function t(s,a=0){const r=e.get(s);let o;return r===void 0?(o=new el(i),e.set(s,[o])):a>=r.length?(o=new el(i),r.push(o)):o=r[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class lm extends Bi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Vc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cm extends Bi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function um(i,e,t){let n=new Yr;const s=new Oe,a=new Oe,r=new lt,o=new lm({depthPacking:Gc}),l=new cm,c={},h=t.maxTextureSize,d={[Nn]:Rt,[Rt]:Nn,[en]:en},u=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:hm,fragmentShader:dm}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new Zt;g.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new A(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tl;let f=this.type;this.render=function(T,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const M=i.getRenderTarget(),x=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),k=i.state;k.setBlending(In),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const O=f!==gn&&this.type===gn,z=f===gn&&this.type!==gn;for(let X=0,q=T.length;X<q;X++){const J=T[X],G=J.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const re=G.getFrameExtents();if(s.multiply(re),a.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/re.x),s.x=a.x*re.x,G.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/re.y),s.y=a.y*re.y,G.mapSize.y=a.y)),G.map===null||O===!0||z===!0){const _e=this.type!==gn?{minFilter:Ht,magFilter:Ht}:{};G.map!==null&&G.map.dispose(),G.map=new Qn(s.x,s.y,_e),G.map.texture.name=J.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const ie=G.getViewportCount();for(let _e=0;_e<ie;_e++){const Ie=G.getViewport(_e);r.set(a.x*Ie.x,a.y*Ie.y,a.x*Ie.z,a.y*Ie.w),k.viewport(r),G.updateMatrices(J,_e),n=G.getFrustum(),y(C,L,G.camera,J,this.type)}G.isPointLightShadow!==!0&&this.type===gn&&w(G,L),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(M,x,R)};function w(T,C){const L=e.update(v);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Qn(s.x,s.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,L,u,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,L,p,v,null)}function b(T,C,L,M){let x=null;const R=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)x=R;else if(x=L.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const k=x.uuid,O=C.uuid;let z=c[k];z===void 0&&(z={},c[k]=z);let X=z[O];X===void 0&&(X=x.clone(),z[O]=X,C.addEventListener("dispose",U)),x=X}if(x.visible=C.visible,x.wireframe=C.wireframe,M===gn?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:d[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const k=i.properties.get(x);k.light=L}return x}function y(T,C,L,M,x){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===gn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const O=e.update(T),z=T.material;if(Array.isArray(z)){const X=O.groups;for(let q=0,J=X.length;q<J;q++){const G=X[q],re=z[G.materialIndex];if(re&&re.visible){const ie=b(T,re,M,x);T.onBeforeShadow(i,T,C,L,O,ie,G),i.renderBufferDirect(L,null,O,ie,T,G),T.onAfterShadow(i,T,C,L,O,ie,G)}}}else if(z.visible){const X=b(T,z,M,x);T.onBeforeShadow(i,T,C,L,O,X,null),i.renderBufferDirect(L,null,O,X,T,null),T.onAfterShadow(i,T,C,L,O,X,null)}}const k=T.children;for(let O=0,z=k.length;O<z;O++)y(k[O],C,L,M,x)}function U(T){T.target.removeEventListener("dispose",U);for(const L in c){const M=c[L],x=T.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const fm={[ja]:Ka,[Ja]:tr,[Qa]:nr,[Ri]:er,[Ka]:ja,[tr]:Ja,[nr]:Qa,[er]:Ri};function pm(i,e){function t(){let I=!1;const oe=new lt;let W=null;const K=new lt(0,0,0,0);return{setMask:function(ue){W!==ue&&!I&&(i.colorMask(ue,ue,ue,ue),W=ue)},setLocked:function(ue){I=ue},setClear:function(ue,ce,Ne,He,nt){nt===!0&&(ue*=He,ce*=He,Ne*=He),oe.set(ue,ce,Ne,He),K.equals(oe)===!1&&(i.clearColor(ue,ce,Ne,He),K.copy(oe))},reset:function(){I=!1,W=null,K.set(-1,0,0,0)}}}function n(){let I=!1,oe=!1,W=null,K=null,ue=null;return{setReversed:function(ce){if(oe!==ce){const Ne=e.get("EXT_clip_control");oe?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT);const He=ue;ue=null,this.setClear(He)}oe=ce},getReversed:function(){return oe},setTest:function(ce){ce?te(i.DEPTH_TEST):le(i.DEPTH_TEST)},setMask:function(ce){W!==ce&&!I&&(i.depthMask(ce),W=ce)},setFunc:function(ce){if(oe&&(ce=fm[ce]),K!==ce){switch(ce){case ja:i.depthFunc(i.NEVER);break;case Ka:i.depthFunc(i.ALWAYS);break;case Ja:i.depthFunc(i.LESS);break;case Ri:i.depthFunc(i.LEQUAL);break;case Qa:i.depthFunc(i.EQUAL);break;case er:i.depthFunc(i.GEQUAL);break;case tr:i.depthFunc(i.GREATER);break;case nr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=ce}},setLocked:function(ce){I=ce},setClear:function(ce){ue!==ce&&(oe&&(ce=1-ce),i.clearDepth(ce),ue=ce)},reset:function(){I=!1,W=null,K=null,ue=null,oe=!1}}}function s(){let I=!1,oe=null,W=null,K=null,ue=null,ce=null,Ne=null,He=null,nt=null;return{setTest:function(Ze){I||(Ze?te(i.STENCIL_TEST):le(i.STENCIL_TEST))},setMask:function(Ze){oe!==Ze&&!I&&(i.stencilMask(Ze),oe=Ze)},setFunc:function(Ze,Dt,It){(W!==Ze||K!==Dt||ue!==It)&&(i.stencilFunc(Ze,Dt,It),W=Ze,K=Dt,ue=It)},setOp:function(Ze,Dt,It){(ce!==Ze||Ne!==Dt||He!==It)&&(i.stencilOp(Ze,Dt,It),ce=Ze,Ne=Dt,He=It)},setLocked:function(Ze){I=Ze},setClear:function(Ze){nt!==Ze&&(i.clearStencil(Ze),nt=Ze)},reset:function(){I=!1,oe=null,W=null,K=null,ue=null,ce=null,Ne=null,He=null,nt=null}}}const a=new t,r=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,p=[],g=null,v=!1,m=null,f=null,w=null,b=null,y=null,U=null,T=null,C=new Ke(0,0,0),L=0,M=!1,x=null,R=null,k=null,O=null,z=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,J=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(G)[1]),q=J>=1):G.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),q=J>=2);let re=null,ie={};const _e=i.getParameter(i.SCISSOR_BOX),Ie=i.getParameter(i.VIEWPORT),ze=new lt().fromArray(_e),Z=new lt().fromArray(Ie);function ee(I,oe,W,K){const ue=new Uint8Array(4),ce=i.createTexture();i.bindTexture(I,ce),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ne=0;Ne<W;Ne++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(oe+Ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return ce}const fe={};fe[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),fe[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),fe[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),te(i.DEPTH_TEST),r.setFunc(Ri),Le(!1),Ue(io),te(i.CULL_FACE),D(In);function te(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function le(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function ae(I,oe){return d[I]!==oe?(i.bindFramebuffer(I,oe),d[I]=oe,I===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=oe),I===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function Ce(I,oe){let W=p,K=!1;if(I){W=u.get(oe),W===void 0&&(W=[],u.set(oe,W));const ue=I.textures;if(W.length!==ue.length||W[0]!==i.COLOR_ATTACHMENT0){for(let ce=0,Ne=ue.length;ce<Ne;ce++)W[ce]=i.COLOR_ATTACHMENT0+ce;W.length=ue.length,K=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,K=!0);K&&i.drawBuffers(W)}function Ye(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const Be={[qn]:i.FUNC_ADD,[mc]:i.FUNC_SUBTRACT,[gc]:i.FUNC_REVERSE_SUBTRACT};Be[vc]=i.MIN,Be[_c]=i.MAX;const $e={[yc]:i.ZERO,[xc]:i.ONE,[Sc]:i.SRC_COLOR,[$a]:i.SRC_ALPHA,[Ac]:i.SRC_ALPHA_SATURATE,[Ec]:i.DST_COLOR,[wc]:i.DST_ALPHA,[Mc]:i.ONE_MINUS_SRC_COLOR,[Za]:i.ONE_MINUS_SRC_ALPHA,[Tc]:i.ONE_MINUS_DST_COLOR,[bc]:i.ONE_MINUS_DST_ALPHA,[Cc]:i.CONSTANT_COLOR,[Rc]:i.ONE_MINUS_CONSTANT_COLOR,[Pc]:i.CONSTANT_ALPHA,[Lc]:i.ONE_MINUS_CONSTANT_ALPHA};function D(I,oe,W,K,ue,ce,Ne,He,nt,Ze){if(I===In){v===!0&&(le(i.BLEND),v=!1);return}if(v===!1&&(te(i.BLEND),v=!0),I!==pc){if(I!==m||Ze!==M){if((f!==qn||y!==qn)&&(i.blendEquation(i.FUNC_ADD),f=qn,y=qn),Ze)switch(I){case Ti:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case so:i.blendFunc(i.ONE,i.ONE);break;case ao:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ro:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ti:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case so:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ao:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ro:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}w=null,b=null,U=null,T=null,C.set(0,0,0),L=0,m=I,M=Ze}return}ue=ue||oe,ce=ce||W,Ne=Ne||K,(oe!==f||ue!==y)&&(i.blendEquationSeparate(Be[oe],Be[ue]),f=oe,y=ue),(W!==w||K!==b||ce!==U||Ne!==T)&&(i.blendFuncSeparate($e[W],$e[K],$e[ce],$e[Ne]),w=W,b=K,U=ce,T=Ne),(He.equals(C)===!1||nt!==L)&&(i.blendColor(He.r,He.g,He.b,nt),C.copy(He),L=nt),m=I,M=!1}function Re(I,oe){I.side===en?le(i.CULL_FACE):te(i.CULL_FACE);let W=I.side===Rt;oe&&(W=!W),Le(W),I.blending===Ti&&I.transparent===!1?D(In):D(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),a.setMask(I.colorWrite);const K=I.stencilWrite;o.setTest(K),K&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),rt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):le(i.SAMPLE_ALPHA_TO_COVERAGE)}function Le(I){x!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),x=I)}function Ue(I){I!==uc?(te(i.CULL_FACE),I!==R&&(I===io?i.cullFace(i.BACK):I===fc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):le(i.CULL_FACE),R=I}function ye(I){I!==k&&(q&&i.lineWidth(I),k=I)}function rt(I,oe,W){I?(te(i.POLYGON_OFFSET_FILL),(O!==oe||z!==W)&&(i.polygonOffset(oe,W),O=oe,z=W)):le(i.POLYGON_OFFSET_FILL)}function Ae(I){I?te(i.SCISSOR_TEST):le(i.SCISSOR_TEST)}function E(I){I===void 0&&(I=i.TEXTURE0+X-1),re!==I&&(i.activeTexture(I),re=I)}function _(I,oe,W){W===void 0&&(re===null?W=i.TEXTURE0+X-1:W=re);let K=ie[W];K===void 0&&(K={type:void 0,texture:void 0},ie[W]=K),(K.type!==I||K.texture!==oe)&&(re!==W&&(i.activeTexture(W),re=W),i.bindTexture(I,oe||fe[I]),K.type=I,K.texture=oe)}function B(){const I=ie[re];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function je(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function De(I){ze.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),ze.copy(I))}function ve(I){Z.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Z.copy(I))}function qe(I,oe){let W=c.get(oe);W===void 0&&(W=new WeakMap,c.set(oe,W));let K=W.get(I);K===void 0&&(K=i.getUniformBlockIndex(oe,I.name),W.set(I,K))}function ke(I,oe){const K=c.get(oe).get(I);l.get(oe)!==K&&(i.uniformBlockBinding(oe,K,I.__bindingPointIndex),l.set(oe,K))}function tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},re=null,ie={},d={},u=new WeakMap,p=[],g=null,v=!1,m=null,f=null,w=null,b=null,y=null,U=null,T=null,C=new Ke(0,0,0),L=0,M=!1,x=null,R=null,k=null,O=null,z=null,ze.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:te,disable:le,bindFramebuffer:ae,drawBuffers:Ce,useProgram:Ye,setBlending:D,setMaterial:Re,setFlipSided:Le,setCullFace:Ue,setLineWidth:ye,setPolygonOffset:rt,setScissorTest:Ae,activeTexture:E,bindTexture:_,unbindTexture:B,compressedTexImage2D:j,compressedTexImage3D:Q,texImage2D:ge,texImage3D:xe,updateUBOMapping:qe,uniformBlockBinding:ke,texStorage2D:je,texStorage3D:ne,texSubImage2D:$,texSubImage3D:Se,compressedTexSubImage2D:de,compressedTexSubImage3D:me,scissor:De,viewport:ve,reset:tt}}function tl(i,e,t,n){const s=mm(n);switch(t){case Il:return i*e;case Nl:return i*e;case Fl:return i*e*2;case Hr:return i*e/s.components*s.byteLength;case Vr:return i*e/s.components*s.byteLength;case Ol:return i*e*2/s.components*s.byteLength;case Gr:return i*e*2/s.components*s.byteLength;case Ul:return i*e*3/s.components*s.byteLength;case nn:return i*e*4/s.components*s.byteLength;case Wr:return i*e*4/s.components*s.byteLength;case Xs:case qs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ys:case $s:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case rr:case lr:return Math.max(i,16)*Math.max(e,8)/4;case ar:case or:return Math.max(i,8)*Math.max(e,8)/2;case cr:case hr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case dr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ur:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fr:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case pr:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case mr:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case gr:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case vr:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case _r:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case yr:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case xr:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Sr:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Mr:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case wr:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case br:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Er:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Zs:case Tr:case Ar:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Bl:case Cr:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Rr:case Pr:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mm(i){switch(i){case Mn:case Pl:return{byteLength:1,components:1};case os:case Ll:case hs:return{byteLength:2,components:1};case kr:case zr:return{byteLength:2,components:4};case Jn:case Br:case rn:return{byteLength:4,components:1};case Dl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function gm(i,e,t,n,s,a,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Oe,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return p?new OffscreenCanvas(E,_):Qs("canvas")}function v(E,_,B){let j=1;const Q=Ae(E);if((Q.width>B||Q.height>B)&&(j=B/Math.max(Q.width,Q.height)),j<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const $=Math.floor(j*Q.width),Se=Math.floor(j*Q.height);d===void 0&&(d=g($,Se));const de=_?g($,Se):d;return de.width=$,de.height=Se,de.getContext("2d").drawImage(E,0,0,$,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+Se+")."),de}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function m(E){return E.generateMipmaps}function f(E){i.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(E,_,B,j,Q=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let $=_;if(_===i.RED&&(B===i.FLOAT&&($=i.R32F),B===i.HALF_FLOAT&&($=i.R16F),B===i.UNSIGNED_BYTE&&($=i.R8)),_===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.R8UI),B===i.UNSIGNED_SHORT&&($=i.R16UI),B===i.UNSIGNED_INT&&($=i.R32UI),B===i.BYTE&&($=i.R8I),B===i.SHORT&&($=i.R16I),B===i.INT&&($=i.R32I)),_===i.RG&&(B===i.FLOAT&&($=i.RG32F),B===i.HALF_FLOAT&&($=i.RG16F),B===i.UNSIGNED_BYTE&&($=i.RG8)),_===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RG8UI),B===i.UNSIGNED_SHORT&&($=i.RG16UI),B===i.UNSIGNED_INT&&($=i.RG32UI),B===i.BYTE&&($=i.RG8I),B===i.SHORT&&($=i.RG16I),B===i.INT&&($=i.RG32I)),_===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGB8UI),B===i.UNSIGNED_SHORT&&($=i.RGB16UI),B===i.UNSIGNED_INT&&($=i.RGB32UI),B===i.BYTE&&($=i.RGB8I),B===i.SHORT&&($=i.RGB16I),B===i.INT&&($=i.RGB32I)),_===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGBA8UI),B===i.UNSIGNED_SHORT&&($=i.RGBA16UI),B===i.UNSIGNED_INT&&($=i.RGBA32UI),B===i.BYTE&&($=i.RGBA8I),B===i.SHORT&&($=i.RGBA16I),B===i.INT&&($=i.RGBA32I)),_===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),_===i.RGBA){const Se=Q?aa:Qe.getTransfer(j);B===i.FLOAT&&($=i.RGBA32F),B===i.HALF_FLOAT&&($=i.RGBA16F),B===i.UNSIGNED_BYTE&&($=Se===ot?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function y(E,_){let B;return E?_===null||_===Jn||_===Di?B=i.DEPTH24_STENCIL8:_===rn?B=i.DEPTH32F_STENCIL8:_===os&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Jn||_===Di?B=i.DEPTH_COMPONENT24:_===rn?B=i.DEPTH_COMPONENT32F:_===os&&(B=i.DEPTH_COMPONENT16),B}function U(E,_){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ht&&E.minFilter!==qt?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function T(E){const _=E.target;_.removeEventListener("dispose",T),L(_),_.isVideoTexture&&h.delete(_)}function C(E){const _=E.target;_.removeEventListener("dispose",C),x(_)}function L(E){const _=n.get(E);if(_.__webglInit===void 0)return;const B=E.source,j=u.get(B);if(j){const Q=j[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(E),Object.keys(j).length===0&&u.delete(B)}n.remove(E)}function M(E){const _=n.get(E);i.deleteTexture(_.__webglTexture);const B=E.source,j=u.get(B);delete j[_.__cacheKey],r.memory.textures--}function x(E){const _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(_.__webglFramebuffer[j]))for(let Q=0;Q<_.__webglFramebuffer[j].length;Q++)i.deleteFramebuffer(_.__webglFramebuffer[j][Q]);else i.deleteFramebuffer(_.__webglFramebuffer[j]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[j])}else{if(Array.isArray(_.__webglFramebuffer))for(let j=0;j<_.__webglFramebuffer.length;j++)i.deleteFramebuffer(_.__webglFramebuffer[j]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let j=0;j<_.__webglColorRenderbuffer.length;j++)_.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[j]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const B=E.textures;for(let j=0,Q=B.length;j<Q;j++){const $=n.get(B[j]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),r.memory.textures--),n.remove(B[j])}n.remove(E)}let R=0;function k(){R=0}function O(){const E=R;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),R+=1,E}function z(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function X(E,_){const B=n.get(E);if(E.isVideoTexture&&ye(E),E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){const j=E.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(B,E,_);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+_)}function q(E,_){const B=n.get(E);if(E.version>0&&B.__version!==E.version){Z(B,E,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+_)}function J(E,_){const B=n.get(E);if(E.version>0&&B.__version!==E.version){Z(B,E,_);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+_)}function G(E,_){const B=n.get(E);if(E.version>0&&B.__version!==E.version){ee(B,E,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+_)}const re={[Zn]:i.REPEAT,[jn]:i.CLAMP_TO_EDGE,[sr]:i.MIRRORED_REPEAT},ie={[Ht]:i.NEAREST,[Hc]:i.NEAREST_MIPMAP_NEAREST,[ms]:i.NEAREST_MIPMAP_LINEAR,[qt]:i.LINEAR,[ha]:i.LINEAR_MIPMAP_NEAREST,[Kn]:i.LINEAR_MIPMAP_LINEAR},_e={[Xc]:i.NEVER,[Kc]:i.ALWAYS,[qc]:i.LESS,[zl]:i.LEQUAL,[Yc]:i.EQUAL,[jc]:i.GEQUAL,[$c]:i.GREATER,[Zc]:i.NOTEQUAL};function Ie(E,_){if(_.type===rn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===qt||_.magFilter===ha||_.magFilter===ms||_.magFilter===Kn||_.minFilter===qt||_.minFilter===ha||_.minFilter===ms||_.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,re[_.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,re[_.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,re[_.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ie[_.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ie[_.minFilter]),_.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,_e[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ht||_.minFilter!==ms&&_.minFilter!==Kn||_.type===rn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ze(E,_){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",T));const j=_.source;let Q=u.get(j);Q===void 0&&(Q={},u.set(j,Q));const $=z(_);if($!==E.__cacheKey){Q[$]===void 0&&(Q[$]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,B=!0),Q[$].usedTimes++;const Se=Q[E.__cacheKey];Se!==void 0&&(Q[E.__cacheKey].usedTimes--,Se.usedTimes===0&&M(_)),E.__cacheKey=$,E.__webglTexture=Q[$].texture}return B}function Z(E,_,B){let j=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(j=i.TEXTURE_3D);const Q=ze(E,_),$=_.source;t.bindTexture(j,E.__webglTexture,i.TEXTURE0+B);const Se=n.get($);if($.version!==Se.__version||Q===!0){t.activeTexture(i.TEXTURE0+B);const de=Qe.getPrimaries(Qe.workingColorSpace),me=_.colorSpace===Dn?null:Qe.getPrimaries(_.colorSpace),je=_.colorSpace===Dn||de===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let ne=v(_.image,!1,s.maxTextureSize);ne=rt(_,ne);const ge=a.convert(_.format,_.colorSpace),xe=a.convert(_.type);let De=b(_.internalFormat,ge,xe,_.colorSpace,_.isVideoTexture);Ie(j,_);let ve;const qe=_.mipmaps,ke=_.isVideoTexture!==!0,tt=Se.__version===void 0||Q===!0,I=$.dataReady,oe=U(_,ne);if(_.isDepthTexture)De=y(_.format===Ii,_.type),tt&&(ke?t.texStorage2D(i.TEXTURE_2D,1,De,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,De,ne.width,ne.height,0,ge,xe,null));else if(_.isDataTexture)if(qe.length>0){ke&&tt&&t.texStorage2D(i.TEXTURE_2D,oe,De,qe[0].width,qe[0].height);for(let W=0,K=qe.length;W<K;W++)ve=qe[W],ke?I&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,ve.width,ve.height,ge,xe,ve.data):t.texImage2D(i.TEXTURE_2D,W,De,ve.width,ve.height,0,ge,xe,ve.data);_.generateMipmaps=!1}else ke?(tt&&t.texStorage2D(i.TEXTURE_2D,oe,De,ne.width,ne.height),I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ne.width,ne.height,ge,xe,ne.data)):t.texImage2D(i.TEXTURE_2D,0,De,ne.width,ne.height,0,ge,xe,ne.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ke&&tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,De,qe[0].width,qe[0].height,ne.depth);for(let W=0,K=qe.length;W<K;W++)if(ve=qe[W],_.format!==nn)if(ge!==null)if(ke){if(I)if(_.layerUpdates.size>0){const ue=tl(ve.width,ve.height,_.format,_.type);for(const ce of _.layerUpdates){const Ne=ve.data.subarray(ce*ue/ve.data.BYTES_PER_ELEMENT,(ce+1)*ue/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,ce,ve.width,ve.height,1,ge,Ne)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,ve.width,ve.height,ne.depth,ge,ve.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,De,ve.width,ve.height,ne.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?I&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,ve.width,ve.height,ne.depth,ge,xe,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,W,De,ve.width,ve.height,ne.depth,0,ge,xe,ve.data)}else{ke&&tt&&t.texStorage2D(i.TEXTURE_2D,oe,De,qe[0].width,qe[0].height);for(let W=0,K=qe.length;W<K;W++)ve=qe[W],_.format!==nn?ge!==null?ke?I&&t.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,ve.width,ve.height,ge,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,W,De,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?I&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,ve.width,ve.height,ge,xe,ve.data):t.texImage2D(i.TEXTURE_2D,W,De,ve.width,ve.height,0,ge,xe,ve.data)}else if(_.isDataArrayTexture)if(ke){if(tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,De,ne.width,ne.height,ne.depth),I)if(_.layerUpdates.size>0){const W=tl(ne.width,ne.height,_.format,_.type);for(const K of _.layerUpdates){const ue=ne.data.subarray(K*W/ne.data.BYTES_PER_ELEMENT,(K+1)*W/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,ne.width,ne.height,1,ge,xe,ue)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ge,xe,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,ne.width,ne.height,ne.depth,0,ge,xe,ne.data);else if(_.isData3DTexture)ke?(tt&&t.texStorage3D(i.TEXTURE_3D,oe,De,ne.width,ne.height,ne.depth),I&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ge,xe,ne.data)):t.texImage3D(i.TEXTURE_3D,0,De,ne.width,ne.height,ne.depth,0,ge,xe,ne.data);else if(_.isFramebufferTexture){if(tt)if(ke)t.texStorage2D(i.TEXTURE_2D,oe,De,ne.width,ne.height);else{let W=ne.width,K=ne.height;for(let ue=0;ue<oe;ue++)t.texImage2D(i.TEXTURE_2D,ue,De,W,K,0,ge,xe,null),W>>=1,K>>=1}}else if(qe.length>0){if(ke&&tt){const W=Ae(qe[0]);t.texStorage2D(i.TEXTURE_2D,oe,De,W.width,W.height)}for(let W=0,K=qe.length;W<K;W++)ve=qe[W],ke?I&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,ge,xe,ve):t.texImage2D(i.TEXTURE_2D,W,De,ge,xe,ve);_.generateMipmaps=!1}else if(ke){if(tt){const W=Ae(ne);t.texStorage2D(i.TEXTURE_2D,oe,De,W.width,W.height)}I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge,xe,ne)}else t.texImage2D(i.TEXTURE_2D,0,De,ge,xe,ne);m(_)&&f(j),Se.__version=$.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function ee(E,_,B){if(_.image.length!==6)return;const j=ze(E,_),Q=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+B);const $=n.get(Q);if(Q.version!==$.__version||j===!0){t.activeTexture(i.TEXTURE0+B);const Se=Qe.getPrimaries(Qe.workingColorSpace),de=_.colorSpace===Dn?null:Qe.getPrimaries(_.colorSpace),me=_.colorSpace===Dn||Se===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const je=_.isCompressedTexture||_.image[0].isCompressedTexture,ne=_.image[0]&&_.image[0].isDataTexture,ge=[];for(let K=0;K<6;K++)!je&&!ne?ge[K]=v(_.image[K],!0,s.maxCubemapSize):ge[K]=ne?_.image[K].image:_.image[K],ge[K]=rt(_,ge[K]);const xe=ge[0],De=a.convert(_.format,_.colorSpace),ve=a.convert(_.type),qe=b(_.internalFormat,De,ve,_.colorSpace),ke=_.isVideoTexture!==!0,tt=$.__version===void 0||j===!0,I=Q.dataReady;let oe=U(_,xe);Ie(i.TEXTURE_CUBE_MAP,_);let W;if(je){ke&&tt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,qe,xe.width,xe.height);for(let K=0;K<6;K++){W=ge[K].mipmaps;for(let ue=0;ue<W.length;ue++){const ce=W[ue];_.format!==nn?De!==null?ke?I&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue,0,0,ce.width,ce.height,De,ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue,qe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue,0,0,ce.width,ce.height,De,ve,ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue,qe,ce.width,ce.height,0,De,ve,ce.data)}}}else{if(W=_.mipmaps,ke&&tt){W.length>0&&oe++;const K=Ae(ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,qe,K.width,K.height)}for(let K=0;K<6;K++)if(ne){ke?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ge[K].width,ge[K].height,De,ve,ge[K].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,qe,ge[K].width,ge[K].height,0,De,ve,ge[K].data);for(let ue=0;ue<W.length;ue++){const Ne=W[ue].image[K].image;ke?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue+1,0,0,Ne.width,Ne.height,De,ve,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue+1,qe,Ne.width,Ne.height,0,De,ve,Ne.data)}}else{ke?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,De,ve,ge[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,qe,De,ve,ge[K]);for(let ue=0;ue<W.length;ue++){const ce=W[ue];ke?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue+1,0,0,De,ve,ce.image[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue+1,qe,De,ve,ce.image[K])}}}m(_)&&f(i.TEXTURE_CUBE_MAP),$.__version=Q.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function fe(E,_,B,j,Q,$){const Se=a.convert(B.format,B.colorSpace),de=a.convert(B.type),me=b(B.internalFormat,Se,de,B.colorSpace),je=n.get(_),ne=n.get(B);if(ne.__renderTarget=_,!je.__hasExternalTextures){const ge=Math.max(1,_.width>>$),xe=Math.max(1,_.height>>$);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,$,me,ge,xe,_.depth,0,Se,de,null):t.texImage2D(Q,$,me,ge,xe,0,Se,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),Ue(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,Q,ne.__webglTexture,0,Le(_)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,Q,ne.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function te(E,_,B){if(i.bindRenderbuffer(i.RENDERBUFFER,E),_.depthBuffer){const j=_.depthTexture,Q=j&&j.isDepthTexture?j.type:null,$=y(_.stencilBuffer,Q),Se=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=Le(_);Ue(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,$,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,$,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,$,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,E)}else{const j=_.textures;for(let Q=0;Q<j.length;Q++){const $=j[Q],Se=a.convert($.format,$.colorSpace),de=a.convert($.type),me=b($.internalFormat,Se,de,$.colorSpace),je=Le(_);B&&Ue(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,je,me,_.width,_.height):Ue(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,je,me,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,me,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function le(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(_.depthTexture);j.__renderTarget=_,(!j.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X(_.depthTexture,0);const Q=j.__webglTexture,$=Le(_);if(_.depthTexture.format===Ai)Ue(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(_.depthTexture.format===Ii)Ue(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ae(E){const _=n.get(E),B=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const j=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),j){const Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,j.removeEventListener("dispose",Q)};j.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=j}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");le(_.__webglFramebuffer,E)}else if(B){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]===void 0)_.__webglDepthbuffer[j]=i.createRenderbuffer(),te(_.__webglDepthbuffer[j],E,!1);else{const Q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=_.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,$)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),te(_.__webglDepthbuffer,E,!1);else{const j=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,Q)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ce(E,_,B){const j=n.get(E);_!==void 0&&fe(j.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&ae(E)}function Ye(E){const _=E.texture,B=n.get(E),j=n.get(_);E.addEventListener("dispose",C);const Q=E.textures,$=E.isWebGLCubeRenderTarget===!0,Se=Q.length>1;if(Se||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=_.version,r.memory.textures++),$){B.__webglFramebuffer=[];for(let de=0;de<6;de++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[de]=[];for(let me=0;me<_.mipmaps.length;me++)B.__webglFramebuffer[de][me]=i.createFramebuffer()}else B.__webglFramebuffer[de]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let de=0;de<_.mipmaps.length;de++)B.__webglFramebuffer[de]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Se)for(let de=0,me=Q.length;de<me;de++){const je=n.get(Q[de]);je.__webglTexture===void 0&&(je.__webglTexture=i.createTexture(),r.memory.textures++)}if(E.samples>0&&Ue(E)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let de=0;de<Q.length;de++){const me=Q[de];B.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[de]);const je=a.convert(me.format,me.colorSpace),ne=a.convert(me.type),ge=b(me.internalFormat,je,ne,me.colorSpace,E.isXRRenderTarget===!0),xe=Le(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,ge,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,B.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),te(B.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,_);for(let de=0;de<6;de++)if(_.mipmaps&&_.mipmaps.length>0)for(let me=0;me<_.mipmaps.length;me++)fe(B.__webglFramebuffer[de][me],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,me);else fe(B.__webglFramebuffer[de],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(_)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let de=0,me=Q.length;de<me;de++){const je=Q[de],ne=n.get(je);t.bindTexture(i.TEXTURE_2D,ne.__webglTexture),Ie(i.TEXTURE_2D,je),fe(B.__webglFramebuffer,E,je,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,0),m(je)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(de=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,j.__webglTexture),Ie(de,_),_.mipmaps&&_.mipmaps.length>0)for(let me=0;me<_.mipmaps.length;me++)fe(B.__webglFramebuffer[me],E,_,i.COLOR_ATTACHMENT0,de,me);else fe(B.__webglFramebuffer,E,_,i.COLOR_ATTACHMENT0,de,0);m(_)&&f(de),t.unbindTexture()}E.depthBuffer&&ae(E)}function Be(E){const _=E.textures;for(let B=0,j=_.length;B<j;B++){const Q=_[B];if(m(Q)){const $=w(E),Se=n.get(Q).__webglTexture;t.bindTexture($,Se),f($),t.unbindTexture()}}}const $e=[],D=[];function Re(E){if(E.samples>0){if(Ue(E)===!1){const _=E.textures,B=E.width,j=E.height;let Q=i.COLOR_BUFFER_BIT;const $=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(E),de=_.length>1;if(de)for(let me=0;me<_.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let me=0;me<_.length;me++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),de){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[me]);const je=n.get(_[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,je,0)}i.blitFramebuffer(0,0,B,j,0,0,B,j,Q,i.NEAREST),l===!0&&($e.length=0,D.length=0,$e.push(i.COLOR_ATTACHMENT0+me),E.depthBuffer&&E.resolveDepthBuffer===!1&&($e.push($),D.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$e))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let me=0;me<_.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,Se.__webglColorRenderbuffer[me]);const je=n.get(_[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,je,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Le(E){return Math.min(s.maxSamples,E.samples)}function Ue(E){const _=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ye(E){const _=r.render.frame;h.get(E)!==_&&(h.set(E,_),E.update())}function rt(E,_){const B=E.colorSpace,j=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==Fi&&B!==Dn&&(Qe.getTransfer(B)===ot?(j!==nn||Q!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),_}function Ae(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=k,this.setTexture2D=X,this.setTexture2DArray=q,this.setTexture3D=J,this.setTextureCube=G,this.rebindTextures=Ce,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Ue}function vm(i,e){function t(n,s=Dn){let a;const r=Qe.getTransfer(s);if(n===Mn)return i.UNSIGNED_BYTE;if(n===kr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===zr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pl)return i.BYTE;if(n===Ll)return i.SHORT;if(n===os)return i.UNSIGNED_SHORT;if(n===Br)return i.INT;if(n===Jn)return i.UNSIGNED_INT;if(n===rn)return i.FLOAT;if(n===hs)return i.HALF_FLOAT;if(n===Il)return i.ALPHA;if(n===Ul)return i.RGB;if(n===nn)return i.RGBA;if(n===Nl)return i.LUMINANCE;if(n===Fl)return i.LUMINANCE_ALPHA;if(n===Ai)return i.DEPTH_COMPONENT;if(n===Ii)return i.DEPTH_STENCIL;if(n===Hr)return i.RED;if(n===Vr)return i.RED_INTEGER;if(n===Ol)return i.RG;if(n===Gr)return i.RG_INTEGER;if(n===Wr)return i.RGBA_INTEGER;if(n===Xs||n===qs||n===Ys||n===$s)if(r===ot)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Xs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ys)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$s)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Xs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ys)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$s)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ar||n===rr||n===or||n===lr)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===ar)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===rr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===or)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===lr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===cr||n===hr||n===dr)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===cr||n===hr)return r===ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===dr)return r===ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ur||n===fr||n===pr||n===mr||n===gr||n===vr||n===_r||n===yr||n===xr||n===Sr||n===Mr||n===wr||n===br||n===Er)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===ur)return r===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fr)return r===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pr)return r===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mr)return r===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===gr)return r===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vr)return r===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_r)return r===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yr)return r===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xr)return r===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sr)return r===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mr)return r===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wr)return r===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===br)return r===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Er)return r===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zs||n===Tr||n===Ar)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Zs)return r===ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Tr)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ar)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bl||n===Cr||n===Rr||n===Pr)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Zs)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Cr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Rr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pr)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Di?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class _m extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ve extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ym={type:"move"};class Oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ym)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ve;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const xm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Mm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new bt,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Fn({vertexShader:xm,fragmentShader:Sm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new A(new Sn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wm extends Oi{constructor(e,t){super();const n=this;let s=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null;const v=new Mm,m=t.getContextAttributes();let f=null,w=null;const b=[],y=[],U=new Oe;let T=null;const C=new zt;C.viewport=new lt;const L=new zt;L.viewport=new lt;const M=[C,L],x=new _m;let R=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ee=b[Z];return ee===void 0&&(ee=new Oa,b[Z]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Z){let ee=b[Z];return ee===void 0&&(ee=new Oa,b[Z]=ee),ee.getGripSpace()},this.getHand=function(Z){let ee=b[Z];return ee===void 0&&(ee=new Oa,b[Z]=ee),ee.getHandSpace()};function O(Z){const ee=y.indexOf(Z.inputSource);if(ee===-1)return;const fe=b[ee];fe!==void 0&&(fe.update(Z.inputSource,Z.frame,c||r),fe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function z(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",X);for(let Z=0;Z<b.length;Z++){const ee=y[Z];ee!==null&&(y[Z]=null,b[Z].disconnect(ee))}R=null,k=null,v.reset(),e.setRenderTarget(f),p=null,u=null,d=null,s=null,w=null,ze.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",z),s.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(U),s.renderState.layers===void 0){const ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new Qn(p.framebufferWidth,p.framebufferHeight,{format:nn,type:Mn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,fe=null,te=null;m.depth&&(te=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=m.stencil?Ii:Ai,fe=m.stencil?Di:Jn);const le={colorFormat:t.RGBA8,depthFormat:te,scaleFactor:a};d=new XRWebGLBinding(s,t),u=d.createProjectionLayer(le),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),w=new Qn(u.textureWidth,u.textureHeight,{format:nn,type:Mn,depthTexture:new Ql(u.textureWidth,u.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),ze.setContext(s),ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function X(Z){for(let ee=0;ee<Z.removed.length;ee++){const fe=Z.removed[ee],te=y.indexOf(fe);te>=0&&(y[te]=null,b[te].disconnect(fe))}for(let ee=0;ee<Z.added.length;ee++){const fe=Z.added[ee];let te=y.indexOf(fe);if(te===-1){for(let ae=0;ae<b.length;ae++)if(ae>=y.length){y.push(fe),te=ae;break}else if(y[ae]===null){y[ae]=fe,te=ae;break}if(te===-1)break}const le=b[te];le&&le.connect(fe)}}const q=new P,J=new P;function G(Z,ee,fe){q.setFromMatrixPosition(ee.matrixWorld),J.setFromMatrixPosition(fe.matrixWorld);const te=q.distanceTo(J),le=ee.projectionMatrix.elements,ae=fe.projectionMatrix.elements,Ce=le[14]/(le[10]-1),Ye=le[14]/(le[10]+1),Be=(le[9]+1)/le[5],$e=(le[9]-1)/le[5],D=(le[8]-1)/le[0],Re=(ae[8]+1)/ae[0],Le=Ce*D,Ue=Ce*Re,ye=te/(-D+Re),rt=ye*-D;if(ee.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(rt),Z.translateZ(ye),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),le[10]===-1)Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Ae=Ce+ye,E=Ye+ye,_=Le-rt,B=Ue+(te-rt),j=Be*Ye/E*Ae,Q=$e*Ye/E*Ae;Z.projectionMatrix.makePerspective(_,B,j,Q,Ae,E),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function re(Z,ee){ee===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ee.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let ee=Z.near,fe=Z.far;v.texture!==null&&(v.depthNear>0&&(ee=v.depthNear),v.depthFar>0&&(fe=v.depthFar)),x.near=L.near=C.near=ee,x.far=L.far=C.far=fe,(R!==x.near||k!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,k=x.far),C.layers.mask=Z.layers.mask|2,L.layers.mask=Z.layers.mask|4,x.layers.mask=C.layers.mask|L.layers.mask;const te=Z.parent,le=x.cameras;re(x,te);for(let ae=0;ae<le.length;ae++)re(le[ae],te);le.length===2?G(x,C,L):x.projectionMatrix.copy(C.projectionMatrix),ie(Z,x,te)};function ie(Z,ee,fe){fe===null?Z.matrix.copy(ee.matrixWorld):(Z.matrix.copy(fe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ee.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ls*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let _e=null;function Ie(Z,ee){if(h=ee.getViewerPose(c||r),g=ee,h!==null){const fe=h.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let te=!1;fe.length!==x.cameras.length&&(x.cameras.length=0,te=!0);for(let ae=0;ae<fe.length;ae++){const Ce=fe[ae];let Ye=null;if(p!==null)Ye=p.getViewport(Ce);else{const $e=d.getViewSubImage(u,Ce);Ye=$e.viewport,ae===0&&(e.setRenderTargetTextures(w,$e.colorTexture,u.ignoreDepthValues?void 0:$e.depthStencilTexture),e.setRenderTarget(w))}let Be=M[ae];Be===void 0&&(Be=new zt,Be.layers.enable(ae),Be.viewport=new lt,M[ae]=Be),Be.matrix.fromArray(Ce.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Ce.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),ae===0&&(x.matrix.copy(Be.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),te===!0&&x.cameras.push(Be)}const le=s.enabledFeatures;if(le&&le.includes("depth-sensing")){const ae=d.getDepthInformation(fe[0]);ae&&ae.isValid&&ae.texture&&v.init(e,ae,s.renderState)}}for(let fe=0;fe<b.length;fe++){const te=y[fe],le=b[fe];te!==null&&le!==void 0&&le.update(te,ee,c||r)}_e&&_e(Z,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const ze=new Kl;ze.setAnimationLoop(Ie),this.setAnimationLoop=function(Z){_e=Z},this.dispose=function(){}}}const Gn=new ln,bm=new ct;function Em(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,$l(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,w,b,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(m,f):f.isMeshToonMaterial?(a(m,f),d(m,f)):f.isMeshPhongMaterial?(a(m,f),h(m,f)):f.isMeshStandardMaterial?(a(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(a(m,f),g(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),v(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,w,b):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Rt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Rt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const w=e.get(f),b=w.envMap,y=w.envMapRotation;b&&(m.envMap.value=b,Gn.copy(y),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),m.envMapRotation.value.setFromMatrix4(bm.makeRotationFromEuler(Gn)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,w,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=b*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Rt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const w=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Tm(i,e,t,n){let s={},a={},r=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,b){const y=b.program;n.uniformBlockBinding(w,y)}function c(w,b){let y=s[w.id];y===void 0&&(g(w),y=h(w),s[w.id]=y,w.addEventListener("dispose",m));const U=b.program;n.updateUBOMapping(w,U);const T=e.render.frame;a[w.id]!==T&&(u(w),a[w.id]=T)}function h(w){const b=d();w.__bindingPointIndex=b;const y=i.createBuffer(),U=w.__size,T=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,U,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,y),y}function d(){for(let w=0;w<o;w++)if(r.indexOf(w)===-1)return r.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){const b=s[w.id],y=w.uniforms,U=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let T=0,C=y.length;T<C;T++){const L=Array.isArray(y[T])?y[T]:[y[T]];for(let M=0,x=L.length;M<x;M++){const R=L[M];if(p(R,T,M,U)===!0){const k=R.__offset,O=Array.isArray(R.value)?R.value:[R.value];let z=0;for(let X=0;X<O.length;X++){const q=O[X],J=v(q);typeof q=="number"||typeof q=="boolean"?(R.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,k+z,R.__data)):q.isMatrix3?(R.__data[0]=q.elements[0],R.__data[1]=q.elements[1],R.__data[2]=q.elements[2],R.__data[3]=0,R.__data[4]=q.elements[3],R.__data[5]=q.elements[4],R.__data[6]=q.elements[5],R.__data[7]=0,R.__data[8]=q.elements[6],R.__data[9]=q.elements[7],R.__data[10]=q.elements[8],R.__data[11]=0):(q.toArray(R.__data,z),z+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(w,b,y,U){const T=w.value,C=b+"_"+y;if(U[C]===void 0)return typeof T=="number"||typeof T=="boolean"?U[C]=T:U[C]=T.clone(),!0;{const L=U[C];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return U[C]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function g(w){const b=w.uniforms;let y=0;const U=16;for(let C=0,L=b.length;C<L;C++){const M=Array.isArray(b[C])?b[C]:[b[C]];for(let x=0,R=M.length;x<R;x++){const k=M[x],O=Array.isArray(k.value)?k.value:[k.value];for(let z=0,X=O.length;z<X;z++){const q=O[z],J=v(q),G=y%U,re=G%J.boundary,ie=G+re;y+=re,ie!==0&&U-ie<J.storage&&(y+=U-ie),k.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=J.storage}}}const T=y%U;return T>0&&(y+=U-T),w.__size=y,w.__cache={},this}function v(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function m(w){const b=w.target;b.removeEventListener("dispose",m);const y=r.indexOf(b.__bindingPointIndex);r.splice(y,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete a[b.id]}function f(){for(const w in s)i.deleteBuffer(s[w]);r=[],s={},a={}}return{bind:l,update:c,dispose:f}}class Am{constructor(e={}){const{canvas:t=ph(),context:n=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,f=null;const w=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kt,this.toneMapping=Un,this.toneMappingExposure=1;const y=this;let U=!1,T=0,C=0,L=null,M=-1,x=null;const R=new lt,k=new lt;let O=null;const z=new Ke(0);let X=0,q=t.width,J=t.height,G=1,re=null,ie=null;const _e=new lt(0,0,q,J),Ie=new lt(0,0,q,J);let ze=!1;const Z=new Yr;let ee=!1,fe=!1;const te=new ct,le=new ct,ae=new P,Ce=new lt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function $e(){return L===null?G:1}let D=n;function Re(S,N){return t.getContext(S,N)}try{const S={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Or}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",ce,!1),D===null){const N="webgl2";if(D=Re(N,S),D===null)throw Re(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Le,Ue,ye,rt,Ae,E,_,B,j,Q,$,Se,de,me,je,ne,ge,xe,De,ve,qe,ke,tt,I;function oe(){Le=new Df(D),Le.init(),ke=new vm(D,Le),Ue=new Tf(D,Le,e,ke),ye=new pm(D,Le),Ue.reverseDepthBuffer&&u&&ye.buffers.depth.setReversed(!0),rt=new Nf(D),Ae=new Qp,E=new gm(D,Le,ye,Ae,Ue,ke,rt),_=new Cf(y),B=new Lf(y),j=new Hh(D),tt=new bf(D,j),Q=new If(D,j,rt,tt),$=new Of(D,Q,j,rt),De=new Ff(D,Ue,E),ne=new Af(Ae),Se=new Jp(y,_,B,Le,Ue,tt,ne),de=new Em(y,Ae),me=new tm,je=new om(Le),xe=new wf(y,_,B,ye,$,p,l),ge=new um(y,$,Ue),I=new Tm(D,rt,Ue,ye),ve=new Ef(D,Le,rt),qe=new Uf(D,Le,rt),rt.programs=Se.programs,y.capabilities=Ue,y.extensions=Le,y.properties=Ae,y.renderLists=me,y.shadowMap=ge,y.state=ye,y.info=rt}oe();const W=new wm(y,D);this.xr=W,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=Le.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Le.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(S){S!==void 0&&(G=S,this.setSize(q,J,!1))},this.getSize=function(S){return S.set(q,J)},this.setSize=function(S,N,H=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=S,J=N,t.width=Math.floor(S*G),t.height=Math.floor(N*G),H===!0&&(t.style.width=S+"px",t.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(q*G,J*G).floor()},this.setDrawingBufferSize=function(S,N,H){q=S,J=N,G=H,t.width=Math.floor(S*H),t.height=Math.floor(N*H),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(R)},this.getViewport=function(S){return S.copy(_e)},this.setViewport=function(S,N,H,V){S.isVector4?_e.set(S.x,S.y,S.z,S.w):_e.set(S,N,H,V),ye.viewport(R.copy(_e).multiplyScalar(G).round())},this.getScissor=function(S){return S.copy(Ie)},this.setScissor=function(S,N,H,V){S.isVector4?Ie.set(S.x,S.y,S.z,S.w):Ie.set(S,N,H,V),ye.scissor(k.copy(Ie).multiplyScalar(G).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(S){ye.setScissorTest(ze=S)},this.setOpaqueSort=function(S){re=S},this.setTransparentSort=function(S){ie=S},this.getClearColor=function(S){return S.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(S=!0,N=!0,H=!0){let V=0;if(S){let F=!1;if(L!==null){const se=L.texture.format;F=se===Wr||se===Gr||se===Vr}if(F){const se=L.texture.type,pe=se===Mn||se===Jn||se===os||se===Di||se===kr||se===zr,Me=xe.getClearColor(),we=xe.getClearAlpha(),Fe=Me.r,Ge=Me.g,be=Me.b;pe?(g[0]=Fe,g[1]=Ge,g[2]=be,g[3]=we,D.clearBufferuiv(D.COLOR,0,g)):(v[0]=Fe,v[1]=Ge,v[2]=be,v[3]=we,D.clearBufferiv(D.COLOR,0,v))}else V|=D.COLOR_BUFFER_BIT}N&&(V|=D.DEPTH_BUFFER_BIT),H&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),me.dispose(),je.dispose(),Ae.dispose(),_.dispose(),B.dispose(),$.dispose(),tt.dispose(),I.dispose(),Se.dispose(),W.dispose(),W.removeEventListener("sessionstart",zi),W.removeEventListener("sessionend",jr),On.stop()};function K(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const S=rt.autoReset,N=ge.enabled,H=ge.autoUpdate,V=ge.needsUpdate,F=ge.type;oe(),rt.autoReset=S,ge.enabled=N,ge.autoUpdate=H,ge.needsUpdate=V,ge.type=F}function ce(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ne(S){const N=S.target;N.removeEventListener("dispose",Ne),He(N)}function He(S){nt(S),Ae.remove(S)}function nt(S){const N=Ae.get(S).programs;N!==void 0&&(N.forEach(function(H){Se.releaseProgram(H)}),S.isShaderMaterial&&Se.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,H,V,F,se){N===null&&(N=Ye);const pe=F.isMesh&&F.matrixWorld.determinant()<0,Me=cc(S,N,H,V,F);ye.setMaterial(V,pe);let we=H.index,Fe=1;if(V.wireframe===!0){if(we=Q.getWireframeAttribute(H),we===void 0)return;Fe=2}const Ge=H.drawRange,be=H.attributes.position;let et=Ge.start*Fe,ht=(Ge.start+Ge.count)*Fe;se!==null&&(et=Math.max(et,se.start*Fe),ht=Math.min(ht,(se.start+se.count)*Fe)),we!==null?(et=Math.max(et,0),ht=Math.min(ht,we.count)):be!=null&&(et=Math.max(et,0),ht=Math.min(ht,be.count));const dt=ht-et;if(dt<0||dt===1/0)return;tt.setup(F,V,Me,H,we);let Pt,it=ve;if(we!==null&&(Pt=j.get(we),it=qe,it.setIndex(Pt)),F.isMesh)V.wireframe===!0?(ye.setLineWidth(V.wireframeLinewidth*$e()),it.setMode(D.LINES)):it.setMode(D.TRIANGLES);else if(F.isLine){let Te=V.linewidth;Te===void 0&&(Te=1),ye.setLineWidth(Te*$e()),F.isLineSegments?it.setMode(D.LINES):F.isLineLoop?it.setMode(D.LINE_LOOP):it.setMode(D.LINE_STRIP)}else F.isPoints?it.setMode(D.POINTS):F.isSprite&&it.setMode(D.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)it.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Le.get("WEBGL_multi_draw"))it.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Te=F._multiDrawStarts,cn=F._multiDrawCounts,st=F._multiDrawCount,jt=we?j.get(we).bytesPerElement:1,ti=Ae.get(V).currentProgram.getUniforms();for(let Ut=0;Ut<st;Ut++)ti.setValue(D,"_gl_DrawID",Ut),it.render(Te[Ut]/jt,cn[Ut])}else if(F.isInstancedMesh)it.renderInstances(et,dt,F.count);else if(H.isInstancedBufferGeometry){const Te=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,cn=Math.min(H.instanceCount,Te);it.renderInstances(et,dt,cn)}else it.render(et,dt)};function Ze(S,N,H){S.transparent===!0&&S.side===en&&S.forceSinglePass===!1?(S.side=Rt,S.needsUpdate=!0,ps(S,N,H),S.side=Nn,S.needsUpdate=!0,ps(S,N,H),S.side=en):ps(S,N,H)}this.compile=function(S,N,H=null){H===null&&(H=S),f=je.get(H),f.init(N),b.push(f),H.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),S!==H&&S.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();const V=new Set;return S.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const se=F.material;if(se)if(Array.isArray(se))for(let pe=0;pe<se.length;pe++){const Me=se[pe];Ze(Me,H,F),V.add(Me)}else Ze(se,H,F),V.add(se)}),b.pop(),f=null,V},this.compileAsync=function(S,N,H=null){const V=this.compile(S,N,H);return new Promise(F=>{function se(){if(V.forEach(function(pe){Ae.get(pe).currentProgram.isReady()&&V.delete(pe)}),V.size===0){F(S);return}setTimeout(se,10)}Le.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Dt=null;function It(S){Dt&&Dt(S)}function zi(){On.stop()}function jr(){On.start()}const On=new Kl;On.setAnimationLoop(It),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(S){Dt=S,W.setAnimationLoop(S),S===null?On.stop():On.start()},W.addEventListener("sessionstart",zi),W.addEventListener("sessionend",jr),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(N),N=W.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,N,L),f=je.get(S,b.length),f.init(N),b.push(f),le.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Z.setFromProjectionMatrix(le),fe=this.localClippingEnabled,ee=ne.init(this.clippingPlanes,fe),m=me.get(S,w.length),m.init(),w.push(m),W.enabled===!0&&W.isPresenting===!0){const se=y.xr.getDepthSensingMesh();se!==null&&ca(se,N,-1/0,y.sortObjects)}ca(S,N,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(re,ie),Be=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Be&&xe.addToRenderList(m,S),this.info.render.frame++,ee===!0&&ne.beginShadows();const H=f.state.shadowsArray;ge.render(H,S,N),ee===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,F=m.transmissive;if(f.setupLights(),N.isArrayCamera){const se=N.cameras;if(F.length>0)for(let pe=0,Me=se.length;pe<Me;pe++){const we=se[pe];Jr(V,F,S,we)}Be&&xe.render(S);for(let pe=0,Me=se.length;pe<Me;pe++){const we=se[pe];Kr(m,S,we,we.viewport)}}else F.length>0&&Jr(V,F,S,N),Be&&xe.render(S),Kr(m,S,N);L!==null&&(E.updateMultisampleRenderTarget(L),E.updateRenderTargetMipmap(L)),S.isScene===!0&&S.onAfterRender(y,S,N),tt.resetDefaultState(),M=-1,x=null,b.pop(),b.length>0?(f=b[b.length-1],ee===!0&&ne.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function ca(S,N,H,V){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Z.intersectsSprite(S)){V&&Ce.setFromMatrixPosition(S.matrixWorld).applyMatrix4(le);const pe=$.update(S),Me=S.material;Me.visible&&m.push(S,pe,Me,H,Ce.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Z.intersectsObject(S))){const pe=$.update(S),Me=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ce.copy(S.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Ce.copy(pe.boundingSphere.center)),Ce.applyMatrix4(S.matrixWorld).applyMatrix4(le)),Array.isArray(Me)){const we=pe.groups;for(let Fe=0,Ge=we.length;Fe<Ge;Fe++){const be=we[Fe],et=Me[be.materialIndex];et&&et.visible&&m.push(S,pe,et,H,Ce.z,be)}}else Me.visible&&m.push(S,pe,Me,H,Ce.z,null)}}const se=S.children;for(let pe=0,Me=se.length;pe<Me;pe++)ca(se[pe],N,H,V)}function Kr(S,N,H,V){const F=S.opaque,se=S.transmissive,pe=S.transparent;f.setupLightsView(H),ee===!0&&ne.setGlobalState(y.clippingPlanes,H),V&&ye.viewport(R.copy(V)),F.length>0&&fs(F,N,H),se.length>0&&fs(se,N,H),pe.length>0&&fs(pe,N,H),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Jr(S,N,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new Qn(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")||Le.has("EXT_color_buffer_float")?hs:Mn,minFilter:Kn,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const se=f.state.transmissionRenderTarget[V.id],pe=V.viewport||R;se.setSize(pe.z,pe.w);const Me=y.getRenderTarget();y.setRenderTarget(se),y.getClearColor(z),X=y.getClearAlpha(),X<1&&y.setClearColor(16777215,.5),y.clear(),Be&&xe.render(H);const we=y.toneMapping;y.toneMapping=Un;const Fe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),ee===!0&&ne.setGlobalState(y.clippingPlanes,V),fs(S,H,V),E.updateMultisampleRenderTarget(se),E.updateRenderTargetMipmap(se),Le.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let be=0,et=N.length;be<et;be++){const ht=N[be],dt=ht.object,Pt=ht.geometry,it=ht.material,Te=ht.group;if(it.side===en&&dt.layers.test(V.layers)){const cn=it.side;it.side=Rt,it.needsUpdate=!0,Qr(dt,H,V,Pt,it,Te),it.side=cn,it.needsUpdate=!0,Ge=!0}}Ge===!0&&(E.updateMultisampleRenderTarget(se),E.updateRenderTargetMipmap(se))}y.setRenderTarget(Me),y.setClearColor(z,X),Fe!==void 0&&(V.viewport=Fe),y.toneMapping=we}function fs(S,N,H){const V=N.isScene===!0?N.overrideMaterial:null;for(let F=0,se=S.length;F<se;F++){const pe=S[F],Me=pe.object,we=pe.geometry,Fe=V===null?pe.material:V,Ge=pe.group;Me.layers.test(H.layers)&&Qr(Me,N,H,we,Fe,Ge)}}function Qr(S,N,H,V,F,se){S.onBeforeRender(y,N,H,V,F,se),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(y,N,H,V,S,se),F.transparent===!0&&F.side===en&&F.forceSinglePass===!1?(F.side=Rt,F.needsUpdate=!0,y.renderBufferDirect(H,N,V,F,S,se),F.side=Nn,F.needsUpdate=!0,y.renderBufferDirect(H,N,V,F,S,se),F.side=en):y.renderBufferDirect(H,N,V,F,S,se),S.onAfterRender(y,N,H,V,F,se)}function ps(S,N,H){N.isScene!==!0&&(N=Ye);const V=Ae.get(S),F=f.state.lights,se=f.state.shadowsArray,pe=F.state.version,Me=Se.getParameters(S,F.state,se,N,H),we=Se.getProgramCacheKey(Me);let Fe=V.programs;V.environment=S.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(S.isMeshStandardMaterial?B:_).get(S.envMap||V.environment),V.envMapRotation=V.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Fe===void 0&&(S.addEventListener("dispose",Ne),Fe=new Map,V.programs=Fe);let Ge=Fe.get(we);if(Ge!==void 0){if(V.currentProgram===Ge&&V.lightsStateVersion===pe)return to(S,Me),Ge}else Me.uniforms=Se.getUniforms(S),S.onBeforeCompile(Me,y),Ge=Se.acquireProgram(Me,we),Fe.set(we,Ge),V.uniforms=Me.uniforms;const be=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(be.clippingPlanes=ne.uniform),to(S,Me),V.needsLights=dc(S),V.lightsStateVersion=pe,V.needsLights&&(be.ambientLightColor.value=F.state.ambient,be.lightProbe.value=F.state.probe,be.directionalLights.value=F.state.directional,be.directionalLightShadows.value=F.state.directionalShadow,be.spotLights.value=F.state.spot,be.spotLightShadows.value=F.state.spotShadow,be.rectAreaLights.value=F.state.rectArea,be.ltc_1.value=F.state.rectAreaLTC1,be.ltc_2.value=F.state.rectAreaLTC2,be.pointLights.value=F.state.point,be.pointLightShadows.value=F.state.pointShadow,be.hemisphereLights.value=F.state.hemi,be.directionalShadowMap.value=F.state.directionalShadowMap,be.directionalShadowMatrix.value=F.state.directionalShadowMatrix,be.spotShadowMap.value=F.state.spotShadowMap,be.spotLightMatrix.value=F.state.spotLightMatrix,be.spotLightMap.value=F.state.spotLightMap,be.pointShadowMap.value=F.state.pointShadowMap,be.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Ge,V.uniformsList=null,Ge}function eo(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=js.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function to(S,N){const H=Ae.get(S);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function cc(S,N,H,V,F){N.isScene!==!0&&(N=Ye),E.resetTextureUnits();const se=N.fog,pe=V.isMeshStandardMaterial?N.environment:null,Me=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Fi,we=(V.isMeshStandardMaterial?B:_).get(V.envMap||pe),Fe=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ge=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),be=!!H.morphAttributes.position,et=!!H.morphAttributes.normal,ht=!!H.morphAttributes.color;let dt=Un;V.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(dt=y.toneMapping);const Pt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,it=Pt!==void 0?Pt.length:0,Te=Ae.get(V),cn=f.state.lights;if(ee===!0&&(fe===!0||S!==x)){const Vt=S===x&&V.id===M;ne.setState(V,S,Vt)}let st=!1;V.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==cn.state.version||Te.outputColorSpace!==Me||F.isBatchedMesh&&Te.batching===!1||!F.isBatchedMesh&&Te.batching===!0||F.isBatchedMesh&&Te.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Te.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Te.instancing===!1||!F.isInstancedMesh&&Te.instancing===!0||F.isSkinnedMesh&&Te.skinning===!1||!F.isSkinnedMesh&&Te.skinning===!0||F.isInstancedMesh&&Te.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Te.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Te.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Te.instancingMorph===!1&&F.morphTexture!==null||Te.envMap!==we||V.fog===!0&&Te.fog!==se||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ne.numPlanes||Te.numIntersection!==ne.numIntersection)||Te.vertexAlphas!==Fe||Te.vertexTangents!==Ge||Te.morphTargets!==be||Te.morphNormals!==et||Te.morphColors!==ht||Te.toneMapping!==dt||Te.morphTargetsCount!==it)&&(st=!0):(st=!0,Te.__version=V.version);let jt=Te.currentProgram;st===!0&&(jt=ps(V,N,F));let ti=!1,Ut=!1,Hi=!1;const ut=jt.getUniforms(),sn=Te.uniforms;if(ye.useProgram(jt.program)&&(ti=!0,Ut=!0,Hi=!0),V.id!==M&&(M=V.id,Ut=!0),ti||x!==S){ye.buffers.depth.getReversed()?(te.copy(S.projectionMatrix),gh(te),vh(te),ut.setValue(D,"projectionMatrix",te)):ut.setValue(D,"projectionMatrix",S.projectionMatrix),ut.setValue(D,"viewMatrix",S.matrixWorldInverse);const wn=ut.map.cameraPosition;wn!==void 0&&wn.setValue(D,ae.setFromMatrixPosition(S.matrixWorld)),Ue.logarithmicDepthBuffer&&ut.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ut.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),x!==S&&(x=S,Ut=!0,Hi=!0)}if(F.isSkinnedMesh){ut.setOptional(D,F,"bindMatrix"),ut.setOptional(D,F,"bindMatrixInverse");const Vt=F.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),ut.setValue(D,"boneTexture",Vt.boneTexture,E))}F.isBatchedMesh&&(ut.setOptional(D,F,"batchingTexture"),ut.setValue(D,"batchingTexture",F._matricesTexture,E),ut.setOptional(D,F,"batchingIdTexture"),ut.setValue(D,"batchingIdTexture",F._indirectTexture,E),ut.setOptional(D,F,"batchingColorTexture"),F._colorsTexture!==null&&ut.setValue(D,"batchingColorTexture",F._colorsTexture,E));const Vi=H.morphAttributes;if((Vi.position!==void 0||Vi.normal!==void 0||Vi.color!==void 0)&&De.update(F,H,jt),(Ut||Te.receiveShadow!==F.receiveShadow)&&(Te.receiveShadow=F.receiveShadow,ut.setValue(D,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(sn.envMap.value=we,sn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(sn.envMapIntensity.value=N.environmentIntensity),Ut&&(ut.setValue(D,"toneMappingExposure",y.toneMappingExposure),Te.needsLights&&hc(sn,Hi),se&&V.fog===!0&&de.refreshFogUniforms(sn,se),de.refreshMaterialUniforms(sn,V,G,J,f.state.transmissionRenderTarget[S.id]),js.upload(D,eo(Te),sn,E)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(js.upload(D,eo(Te),sn,E),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ut.setValue(D,"center",F.center),ut.setValue(D,"modelViewMatrix",F.modelViewMatrix),ut.setValue(D,"normalMatrix",F.normalMatrix),ut.setValue(D,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Vt=V.uniformsGroups;for(let wn=0,bn=Vt.length;wn<bn;wn++){const no=Vt[wn];I.update(no,jt),I.bind(no,jt)}}return jt}function hc(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function dc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(S,N,H){Ae.get(S.texture).__webglTexture=N,Ae.get(S.depthTexture).__webglTexture=H;const V=Ae.get(S);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||Le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,N){const H=Ae.get(S);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,H=0){L=S,T=N,C=H;let V=!0,F=null,se=!1,pe=!1;if(S){const we=Ae.get(S);if(we.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(D.FRAMEBUFFER,null),V=!1;else if(we.__webglFramebuffer===void 0)E.setupRenderTarget(S);else if(we.__hasExternalTextures)E.rebindTextures(S,Ae.get(S.texture).__webglTexture,Ae.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const be=S.depthTexture;if(we.__boundDepthTexture!==be){if(be!==null&&Ae.has(be)&&(S.width!==be.image.width||S.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(S)}}const Fe=S.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(pe=!0);const Ge=Ae.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ge[N])?F=Ge[N][H]:F=Ge[N],se=!0):S.samples>0&&E.useMultisampledRTT(S)===!1?F=Ae.get(S).__webglMultisampledFramebuffer:Array.isArray(Ge)?F=Ge[H]:F=Ge,R.copy(S.viewport),k.copy(S.scissor),O=S.scissorTest}else R.copy(_e).multiplyScalar(G).floor(),k.copy(Ie).multiplyScalar(G).floor(),O=ze;if(ye.bindFramebuffer(D.FRAMEBUFFER,F)&&V&&ye.drawBuffers(S,F),ye.viewport(R),ye.scissor(k),ye.setScissorTest(O),se){const we=Ae.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,we.__webglTexture,H)}else if(pe){const we=Ae.get(S.texture),Fe=N||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,we.__webglTexture,H||0,Fe)}M=-1},this.readRenderTargetPixels=function(S,N,H,V,F,se,pe){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ae.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&pe!==void 0&&(Me=Me[pe]),Me){ye.bindFramebuffer(D.FRAMEBUFFER,Me);try{const we=S.texture,Fe=we.format,Ge=we.type;if(!Ue.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ue.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-V&&H>=0&&H<=S.height-F&&D.readPixels(N,H,V,F,ke.convert(Fe),ke.convert(Ge),se)}finally{const we=L!==null?Ae.get(L).__webglFramebuffer:null;ye.bindFramebuffer(D.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(S,N,H,V,F,se,pe){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Ae.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&pe!==void 0&&(Me=Me[pe]),Me){const we=S.texture,Fe=we.format,Ge=we.type;if(!Ue.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ue.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=S.width-V&&H>=0&&H<=S.height-F){ye.bindFramebuffer(D.FRAMEBUFFER,Me);const be=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,be),D.bufferData(D.PIXEL_PACK_BUFFER,se.byteLength,D.STREAM_READ),D.readPixels(N,H,V,F,ke.convert(Fe),ke.convert(Ge),0);const et=L!==null?Ae.get(L).__webglFramebuffer:null;ye.bindFramebuffer(D.FRAMEBUFFER,et);const ht=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await mh(D,ht,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,be),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,se),D.deleteBuffer(be),D.deleteSync(ht),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,N=null,H=0){S.isTexture!==!0&&(ts("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,S=arguments[1]);const V=Math.pow(2,-H),F=Math.floor(S.image.width*V),se=Math.floor(S.image.height*V),pe=N!==null?N.x:0,Me=N!==null?N.y:0;E.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,pe,Me,F,se),ye.unbindTexture()},this.copyTextureToTexture=function(S,N,H=null,V=null,F=0){S.isTexture!==!0&&(ts("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,S=arguments[1],N=arguments[2],F=arguments[3]||0,H=null);let se,pe,Me,we,Fe,Ge,be,et,ht;const dt=S.isCompressedTexture?S.mipmaps[F]:S.image;H!==null?(se=H.max.x-H.min.x,pe=H.max.y-H.min.y,Me=H.isBox3?H.max.z-H.min.z:1,we=H.min.x,Fe=H.min.y,Ge=H.isBox3?H.min.z:0):(se=dt.width,pe=dt.height,Me=dt.depth||1,we=0,Fe=0,Ge=0),V!==null?(be=V.x,et=V.y,ht=V.z):(be=0,et=0,ht=0);const Pt=ke.convert(N.format),it=ke.convert(N.type);let Te;N.isData3DTexture?(E.setTexture3D(N,0),Te=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(E.setTexture2DArray(N,0),Te=D.TEXTURE_2D_ARRAY):(E.setTexture2D(N,0),Te=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const cn=D.getParameter(D.UNPACK_ROW_LENGTH),st=D.getParameter(D.UNPACK_IMAGE_HEIGHT),jt=D.getParameter(D.UNPACK_SKIP_PIXELS),ti=D.getParameter(D.UNPACK_SKIP_ROWS),Ut=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,dt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,dt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,we),D.pixelStorei(D.UNPACK_SKIP_ROWS,Fe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ge);const Hi=S.isDataArrayTexture||S.isData3DTexture,ut=N.isDataArrayTexture||N.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const sn=Ae.get(S),Vi=Ae.get(N),Vt=Ae.get(sn.__renderTarget),wn=Ae.get(Vi.__renderTarget);ye.bindFramebuffer(D.READ_FRAMEBUFFER,Vt.__webglFramebuffer),ye.bindFramebuffer(D.DRAW_FRAMEBUFFER,wn.__webglFramebuffer);for(let bn=0;bn<Me;bn++)Hi&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ae.get(S).__webglTexture,F,Ge+bn),S.isDepthTexture?(ut&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ae.get(N).__webglTexture,F,ht+bn),D.blitFramebuffer(we,Fe,se,pe,be,et,se,pe,D.DEPTH_BUFFER_BIT,D.NEAREST)):ut?D.copyTexSubImage3D(Te,F,be,et,ht+bn,we,Fe,se,pe):D.copyTexSubImage2D(Te,F,be,et,ht+bn,we,Fe,se,pe);ye.bindFramebuffer(D.READ_FRAMEBUFFER,null),ye.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ut?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(Te,F,be,et,ht,se,pe,Me,Pt,it,dt.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(Te,F,be,et,ht,se,pe,Me,Pt,dt.data):D.texSubImage3D(Te,F,be,et,ht,se,pe,Me,Pt,it,dt):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,F,be,et,se,pe,Pt,it,dt.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,F,be,et,dt.width,dt.height,Pt,dt.data):D.texSubImage2D(D.TEXTURE_2D,F,be,et,se,pe,Pt,it,dt);D.pixelStorei(D.UNPACK_ROW_LENGTH,cn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,st),D.pixelStorei(D.UNPACK_SKIP_PIXELS,jt),D.pixelStorei(D.UNPACK_SKIP_ROWS,ti),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ut),F===0&&N.generateMipmaps&&D.generateMipmap(Te),ye.unbindTexture()},this.copyTextureToTexture3D=function(S,N,H=null,V=null,F=0){return S.isTexture!==!0&&(ts("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,S=arguments[2],N=arguments[3],F=arguments[4]||0),ts('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,N,H,V,F)},this.initRenderTarget=function(S){Ae.get(S).__webglFramebuffer===void 0&&E.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?E.setTextureCube(S,0):S.isData3DTexture?E.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?E.setTexture2DArray(S,0):E.setTexture2D(S,0),ye.unbindTexture()},this.resetState=function(){T=0,C=0,L=null,ye.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}class Zr{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ke(e),this.density=t}clone(){return new Zr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Cm extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Rm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Lr,this.updateRanges=[],this.version=0,this.uuid=yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Et=new P;class ea{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=tn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=tn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=tn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=tn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array),a=at(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new Yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ea(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class sc extends Bi{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let gi;const $i=new P,vi=new P,_i=new P,yi=new Oe,Zi=new Oe,ac=new ct,Fs=new P,ji=new P,Os=new P,nl=new Oe,Ba=new Oe,il=new Oe;class Pm extends pt{constructor(e=new sc){if(super(),this.isSprite=!0,this.type="Sprite",gi===void 0){gi=new Zt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Rm(t,5);gi.setIndex([0,1,2,0,2,3]),gi.setAttribute("position",new ea(n,3,0,!1)),gi.setAttribute("uv",new ea(n,2,3,!1))}this.geometry=gi,this.material=e,this.center=new Oe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vi.setFromMatrixScale(this.matrixWorld),ac.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),_i.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vi.multiplyScalar(-_i.z);const n=this.material.rotation;let s,a;n!==0&&(a=Math.cos(n),s=Math.sin(n));const r=this.center;Bs(Fs.set(-.5,-.5,0),_i,r,vi,s,a),Bs(ji.set(.5,-.5,0),_i,r,vi,s,a),Bs(Os.set(.5,.5,0),_i,r,vi,s,a),nl.set(0,0),Ba.set(1,0),il.set(1,1);let o=e.ray.intersectTriangle(Fs,ji,Os,!1,$i);if(o===null&&(Bs(ji.set(-.5,.5,0),_i,r,vi,s,a),Ba.set(0,1),o=e.ray.intersectTriangle(Fs,Os,ji,!1,$i),o===null))return;const l=e.ray.origin.distanceTo($i);l<e.near||l>e.far||t.push({distance:l,point:$i.clone(),uv:Wt.getInterpolation($i,Fs,ji,Os,nl,Ba,il,new Oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Bs(i,e,t,n,s,a){yi.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Zi.x=a*yi.x-s*yi.y,Zi.y=s*yi.x+a*yi.y):Zi.copy(yi),i.copy(e),i.x+=Zi.x,i.y+=Zi.y,i.applyMatrix4(ac)}class Lm extends bt{constructor(e=null,t=1,n=1,s,a,r,o,l,c=Ht,h=Ht,d,u){super(null,r,o,l,c,h,s,a,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sl extends Yt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const xi=new ct,al=new ct,ks=[],rl=new ei,Dm=new ct,Ki=new A,Ji=new us;class zs extends A{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new sl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Dm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ei),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xi),rl.copy(e.boundingBox).applyMatrix4(xi),this.boundingBox.union(rl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new us),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xi),Ji.copy(e.boundingSphere).applyMatrix4(xi),this.boundingSphere.union(Ji)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=n.length+1,r=e*a+1;for(let o=0;o<n.length;o++)n[o]=s[r+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Ki.geometry=this.geometry,Ki.material=this.material,Ki.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ji.copy(this.boundingSphere),Ji.applyMatrix4(n),e.ray.intersectsSphere(Ji)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,xi),al.multiplyMatrices(n,xi),Ki.matrixWorld=al,Ki.raycast(e,ks);for(let r=0,o=ks.length;r<o;r++){const l=ks[r];l.instanceId=a,l.object=this,t.push(l)}ks.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new sl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Lm(new Float32Array(s*this.count),s,this.count,Hr,rn));const a=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const o=this.geometry.morphTargetsRelative?1:1-r,l=s*e;a[l]=o,a.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class cs extends bt{constructor(e,t,n,s,a,r,o,l,c){super(e,t,n,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ta extends Zt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const a=[],r=[],o=[],l=[],c=new P,h=new Oe;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const p=n+d/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),r.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(r[u]/e+1)/2,h.y=(r[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)a.push(d,d+1,0);this.setIndex(a),this.setAttribute("position",new gt(r,3)),this.setAttribute("normal",new gt(o,3)),this.setAttribute("uv",new gt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ta(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Pe extends Zt{constructor(e=1,t=1,n=1,s=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),a=Math.floor(a);const h=[],d=[],u=[],p=[];let g=0;const v=[],m=n/2;let f=0;w(),r===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new gt(d,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(p,2));function w(){const y=new P,U=new P;let T=0;const C=(t-e)/n;for(let L=0;L<=a;L++){const M=[],x=L/a,R=x*(t-e)+e;for(let k=0;k<=s;k++){const O=k/s,z=O*l+o,X=Math.sin(z),q=Math.cos(z);U.x=R*X,U.y=-x*n+m,U.z=R*q,d.push(U.x,U.y,U.z),y.set(X,C,q).normalize(),u.push(y.x,y.y,y.z),p.push(O,1-x),M.push(g++)}v.push(M)}for(let L=0;L<s;L++)for(let M=0;M<a;M++){const x=v[M][L],R=v[M+1][L],k=v[M+1][L+1],O=v[M][L+1];(e>0||M!==0)&&(h.push(x,R,O),T+=3),(t>0||M!==a-1)&&(h.push(R,k,O),T+=3)}c.addGroup(f,T,0),f+=T}function b(y){const U=g,T=new Oe,C=new P;let L=0;const M=y===!0?e:t,x=y===!0?1:-1;for(let k=1;k<=s;k++)d.push(0,m*x,0),u.push(0,x,0),p.push(.5,.5),g++;const R=g;for(let k=0;k<=s;k++){const z=k/s*l+o,X=Math.cos(z),q=Math.sin(z);C.x=M*q,C.y=m*x,C.z=M*X,d.push(C.x,C.y,C.z),u.push(0,x,0),T.x=X*.5+.5,T.y=q*.5*x+.5,p.push(T.x,T.y),g++}for(let k=0;k<s;k++){const O=U+k,z=R+k;y===!0?h.push(z,z+1,O):h.push(z+1,z,O),L+=3}c.addGroup(f,L,y===!0?1:2),f+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pe(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class At extends Pe{constructor(e=1,t=1,n=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,e,t,n,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(e){return new At(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class oa extends Zt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const a=[],r=[];o(s),c(n),h(),this.setAttribute("position",new gt(a,3)),this.setAttribute("normal",new gt(a.slice(),3)),this.setAttribute("uv",new gt(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(w){const b=new P,y=new P,U=new P;for(let T=0;T<t.length;T+=3)p(t[T+0],b),p(t[T+1],y),p(t[T+2],U),l(b,y,U,w)}function l(w,b,y,U){const T=U+1,C=[];for(let L=0;L<=T;L++){C[L]=[];const M=w.clone().lerp(y,L/T),x=b.clone().lerp(y,L/T),R=T-L;for(let k=0;k<=R;k++)k===0&&L===T?C[L][k]=M:C[L][k]=M.clone().lerp(x,k/R)}for(let L=0;L<T;L++)for(let M=0;M<2*(T-L)-1;M++){const x=Math.floor(M/2);M%2===0?(u(C[L][x+1]),u(C[L+1][x]),u(C[L][x])):(u(C[L][x+1]),u(C[L+1][x+1]),u(C[L+1][x]))}}function c(w){const b=new P;for(let y=0;y<a.length;y+=3)b.x=a[y+0],b.y=a[y+1],b.z=a[y+2],b.normalize().multiplyScalar(w),a[y+0]=b.x,a[y+1]=b.y,a[y+2]=b.z}function h(){const w=new P;for(let b=0;b<a.length;b+=3){w.x=a[b+0],w.y=a[b+1],w.z=a[b+2];const y=m(w)/2/Math.PI+.5,U=f(w)/Math.PI+.5;r.push(y,1-U)}g(),d()}function d(){for(let w=0;w<r.length;w+=6){const b=r[w+0],y=r[w+2],U=r[w+4],T=Math.max(b,y,U),C=Math.min(b,y,U);T>.9&&C<.1&&(b<.2&&(r[w+0]+=1),y<.2&&(r[w+2]+=1),U<.2&&(r[w+4]+=1))}}function u(w){a.push(w.x,w.y,w.z)}function p(w,b){const y=w*3;b.x=e[y+0],b.y=e[y+1],b.z=e[y+2]}function g(){const w=new P,b=new P,y=new P,U=new P,T=new Oe,C=new Oe,L=new Oe;for(let M=0,x=0;M<a.length;M+=9,x+=6){w.set(a[M+0],a[M+1],a[M+2]),b.set(a[M+3],a[M+4],a[M+5]),y.set(a[M+6],a[M+7],a[M+8]),T.set(r[x+0],r[x+1]),C.set(r[x+2],r[x+3]),L.set(r[x+4],r[x+5]),U.copy(w).add(b).add(y).divideScalar(3);const R=m(U);v(T,x+0,w,R),v(C,x+2,b,R),v(L,x+4,y,R)}}function v(w,b,y,U){U<0&&w.x===1&&(r[b]=w.x-1),y.x===0&&y.z===0&&(r[b]=U/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function f(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oa(e.vertices,e.indices,e.radius,e.details)}}class bi extends oa{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,r,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new bi(e.radius,e.detail)}}class vn extends oa{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new vn(e.radius,e.detail)}}class $t extends Zt{constructor(e=1,t=32,n=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const h=[],d=new P,u=new P,p=[],g=[],v=[],m=[];for(let f=0;f<=n;f++){const w=[],b=f/n;let y=0;f===0&&r===0?y=.5/t:f===n&&l===Math.PI&&(y=-.5/t);for(let U=0;U<=t;U++){const T=U/t;d.x=-e*Math.cos(s+T*a)*Math.sin(r+b*o),d.y=e*Math.cos(r+b*o),d.z=e*Math.sin(s+T*a)*Math.sin(r+b*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(T+y,1-b),w.push(c++)}h.push(w)}for(let f=0;f<n;f++)for(let w=0;w<t;w++){const b=h[f][w+1],y=h[f][w],U=h[f+1][w],T=h[f+1][w+1];(f!==0||r>0)&&p.push(b,y,T),(f!==n-1||l<Math.PI)&&p.push(y,U,T)}this.setIndex(p),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(v,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $t(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ee extends Bi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class la extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Im extends la{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ka=new ct,ol=new P,ll=new P;class rc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yr,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ol.setFromMatrixPosition(e.matrixWorld),t.position.copy(ol),ll.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ll),t.updateMatrixWorld(),ka.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ka),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ka)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const cl=new ct,Qi=new P,za=new P;class Um extends rc{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Oe(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Qi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Qi),za.copy(n.position),za.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(za),n.updateMatrixWorld(),s.makeTranslation(-Qi.x,-Qi.y,-Qi.z),cl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cl)}}class is extends la{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Um}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Nm extends rc{constructor(){super(new Jl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fm extends la{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new Nm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Om extends la{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Bm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=hl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=hl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function hl(){return performance.now()}const dl=new ct;class km{constructor(e,t,n=0,s=1/0){this.ray=new Wl(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new qr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return dl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(dl),this}intersectObject(e,t=!0,n=[]){return Ir(e,this,n,t),n.sort(ul),n}intersectObjects(e,t=!0,n=[]){for(let s=0,a=e.length;s<a;s++)Ir(e[s],this,n,t);return n.sort(ul),n}}function ul(i,e){return i.distance-e.distance}function Ir(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const a=i.children;for(let r=0,o=a.length;r<o;r++)Ir(a[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Or}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Or);let Ln=null,St=!1,$n=null;function Lt(){if(typeof window>"u")return null;if(!Ln){const i=window.AudioContext||window.webkitAudioContext;i&&(Ln=new i)}return Ln&&Ln.state==="suspended"&&Ln.resume(),Ln}function zm(){const i=Lt();if(!(!i||$n))try{const e=i.sampleRate*3,t=i.createBuffer(1,e,i.sampleRate),n=t.getChannelData(0);let s=0;for(let o=0;o<e;o++){const l=Math.random()*2-1;s=(s+.02*l)/1.02,n[o]=s*2.5}const a=i.createBufferSource();a.buffer=t,a.loop=!0;const r=i.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(320,i.currentTime),$n=i.createGain(),$n.gain.setValueAtTime(St?0:.08,i.currentTime),a.connect(r),r.connect($n),$n.connect(i.destination),a.start()}catch(e){console.warn("[Audio] Ambient start failed:",e)}}function Hm(i="rifle"){const e=Lt();if(!(!e||St))try{const t=e.currentTime;switch(i){case"pistol":{const n=e.createOscillator(),s=e.createGain();n.type="triangle",n.frequency.setValueAtTime(280,t),n.frequency.exponentialRampToValueAtTime(60,t+.09),s.gain.setValueAtTime(.35,t),s.gain.exponentialRampToValueAtTime(.001,t+.09),n.connect(s),s.connect(e.destination),n.start(t),n.stop(t+.1);break}case"shotgun":{const n=e.createOscillator(),s=e.createGain();n.type="sawtooth",n.frequency.setValueAtTime(140,t),n.frequency.exponentialRampToValueAtTime(30,t+.22),s.gain.setValueAtTime(.65,t),s.gain.exponentialRampToValueAtTime(.001,t+.22),n.connect(s),s.connect(e.destination),n.start(t),n.stop(t+.24);const a=e.createBuffer(1,Math.floor(e.sampleRate*.18),e.sampleRate),r=a.getChannelData(0);for(let c=0;c<r.length;c++)r[c]=(Math.random()*2-1)*.45;const o=e.createBufferSource();o.buffer=a;const l=e.createGain();l.gain.setValueAtTime(.4,t),l.gain.exponentialRampToValueAtTime(.001,t+.18),o.connect(l),l.connect(e.destination),o.start(t);break}case"smg":{const n=e.createOscillator(),s=e.createGain();n.type="square",n.frequency.setValueAtTime(340,t),n.frequency.exponentialRampToValueAtTime(90,t+.06),s.gain.setValueAtTime(.28,t),s.gain.exponentialRampToValueAtTime(.001,t+.06),n.connect(s),s.connect(e.destination),n.start(t),n.stop(t+.07);break}case"sniper":{const n=e.createOscillator(),s=e.createGain();n.type="sine",n.frequency.setValueAtTime(220,t),n.frequency.exponentialRampToValueAtTime(25,t+.35),s.gain.setValueAtTime(.75,t),s.gain.exponentialRampToValueAtTime(.001,t+.35),n.connect(s),s.connect(e.destination),n.start(t),n.stop(t+.36);const a=e.createBuffer(1,Math.floor(e.sampleRate*.28),e.sampleRate),r=a.getChannelData(0);for(let c=0;c<r.length;c++)r[c]=(Math.random()*2-1)*Math.exp(-c/(e.sampleRate*.06));const o=e.createBufferSource();o.buffer=a;const l=e.createGain();l.gain.setValueAtTime(.55,t),l.gain.exponentialRampToValueAtTime(.001,t+.28),o.connect(l),l.connect(e.destination),o.start(t);break}case"rifle":default:{const n=e.createBuffer(1,Math.floor(e.sampleRate*.15),e.sampleRate),s=n.getChannelData(0);for(let c=0;c<s.length;c++)s[c]=(Math.random()*2-1)*Math.exp(-c/(e.sampleRate*.03));const a=e.createBufferSource();a.buffer=n;const r=e.createGain();r.gain.setValueAtTime(.4,t),r.gain.exponentialRampToValueAtTime(.001,t+.14),a.connect(r),r.connect(e.destination),a.start(t);const o=e.createOscillator(),l=e.createGain();o.type="sine",o.frequency.setValueAtTime(160,t),o.frequency.exponentialRampToValueAtTime(45,t+.12),l.gain.setValueAtTime(.5,t),l.gain.exponentialRampToValueAtTime(.001,t+.12),o.connect(l),l.connect(e.destination),o.start(t),o.stop(t+.13);break}}}catch{}}function Vm(){const i=Lt();if(!(!i||St))try{const e=i.currentTime,t=i.createOscillator(),n=i.createGain();t.type="triangle",t.frequency.setValueAtTime(950,e),t.frequency.exponentialRampToValueAtTime(450,e+.06),n.gain.setValueAtTime(.18,e),n.gain.exponentialRampToValueAtTime(.001,e+.06),t.connect(n),n.connect(i.destination),t.start(e),t.stop(e+.07)}catch{}}function Gm(){const i=Lt();if(!(!i||St))try{const e=i.currentTime,t=i.createOscillator(),n=i.createGain();t.type="triangle",t.frequency.setValueAtTime(800,e),t.frequency.exponentialRampToValueAtTime(300,e+.04),n.gain.setValueAtTime(.2,e),n.gain.exponentialRampToValueAtTime(.001,e+.04),t.connect(n),n.connect(i.destination),t.start(e),t.stop(e+.05)}catch{}}function Wm(){const i=Lt();if(!(!i||St))try{const e=i.currentTime;Ha(e,600,.05),Ha(e+1.2,750,.06),Ha(e+1.7,950,.08)}catch{}}function Ha(i,e,t){const n=Lt(),s=n.createOscillator(),a=n.createGain();s.type="square",s.frequency.setValueAtTime(e,i),a.gain.setValueAtTime(.15,i),a.gain.exponentialRampToValueAtTime(.001,i+t),s.connect(a),a.connect(n.destination),s.start(i),s.stop(i+t+.01)}function Xm(){const i=Lt();if(!(!i||St))try{const e=i.currentTime,t=i.createOscillator(),n=i.createGain();t.type="sawtooth",t.frequency.setValueAtTime(140,e),t.frequency.exponentialRampToValueAtTime(60,e+.08),n.gain.setValueAtTime(.25,e),n.gain.exponentialRampToValueAtTime(.001,e+.08),t.connect(n),n.connect(i.destination),t.start(e),t.stop(e+.09)}catch{}}function qm(){const i=Lt();if(!(!i||St))try{const e=i.currentTime,t=i.createOscillator(),n=i.createGain();t.type="sawtooth",t.frequency.setValueAtTime(220,e),t.frequency.linearRampToValueAtTime(80,e+.4),n.gain.setValueAtTime(.3,e),n.gain.exponentialRampToValueAtTime(.001,e+.4),t.connect(n),n.connect(i.destination),t.start(e),t.stop(e+.41)}catch{}}function Ym(){const i=Lt();if(!(!i||St))try{const e=i.currentTime,t=i.createOscillator(),n=i.createGain();t.type="triangle",t.frequency.setValueAtTime(110,e),t.frequency.exponentialRampToValueAtTime(45,e+.18),n.gain.setValueAtTime(.5,e),n.gain.exponentialRampToValueAtTime(.001,e+.18),t.connect(n),n.connect(i.destination),t.start(e),t.stop(e+.19)}catch{}}function $m(){const i=Lt();if(!(!i||St))try{const e=i.currentTime,t=i.createOscillator(),n=i.createOscillator(),s=i.createGain();t.frequency.setValueAtTime(523.25,e),t.frequency.setValueAtTime(659.25,e+.08),n.frequency.setValueAtTime(783.99,e+.08),s.gain.setValueAtTime(.2,e),s.gain.exponentialRampToValueAtTime(.001,e+.35),t.connect(s),n.connect(s),s.connect(i.destination),t.start(e),n.start(e+.08),t.stop(e+.35),n.stop(e+.35)}catch{}}function oc(){const i=Lt();if(!(!i||St))try{const e=i.currentTime,t=i.createOscillator(),n=i.createGain();t.type="sine",t.frequency.setValueAtTime(440,e),t.frequency.exponentialRampToValueAtTime(880,e+.25),n.gain.setValueAtTime(.3,e),n.gain.exponentialRampToValueAtTime(.001,e+.5),t.connect(n),n.connect(i.destination),t.start(e),t.stop(e+.51)}catch{}}function Zm(){const i=Lt();if(!(!i||St))try{const e=i.currentTime,t=i.createOscillator(),n=i.createOscillator(),s=i.createOscillator(),a=i.createGain();t.type="sine",n.type="sine",s.type="triangle",t.frequency.setValueAtTime(523.25,e),n.frequency.setValueAtTime(659.25,e+.08),s.frequency.setValueAtTime(1046.5,e+.16),a.gain.setValueAtTime(.25,e),a.gain.exponentialRampToValueAtTime(.001,e+.55),t.connect(a),n.connect(a),s.connect(a),a.connect(i.destination),t.start(e),n.start(e+.08),s.start(e+.16),t.stop(e+.55),n.stop(e+.55),s.stop(e+.55)}catch{}}function jm(){const i=Lt();if(!(!i||St))try{const e=i.currentTime,t=i.createOscillator(),n=i.createGain();t.type="sine",t.frequency.setValueAtTime(160,e),t.frequency.exponentialRampToValueAtTime(340,e+.12),n.gain.setValueAtTime(.18,e),n.gain.exponentialRampToValueAtTime(.001,e+.18),t.connect(n),n.connect(i.destination),t.start(e),t.stop(e+.19)}catch{}}function Km(){return St=!St,$n&&Ln&&$n.gain.setValueAtTime(St?0:.08,Ln.currentTime),St}function es(){const i=Lt();if(!(!i||St))try{const e=i.currentTime,t=i.createOscillator(),n=i.createOscillator(),s=i.createGain();t.type="sine",n.type="triangle",t.frequency.setValueAtTime(440,e),t.frequency.setValueAtTime(880,e+.08),n.frequency.setValueAtTime(554.37,e),n.frequency.setValueAtTime(1108.73,e+.08),s.gain.setValueAtTime(.2,e),s.gain.exponentialRampToValueAtTime(.001,e+.35),t.connect(s),n.connect(s),s.connect(i.destination),t.start(e),n.start(e),t.stop(e+.35),n.stop(e+.35)}catch{}}const Je={PISTOL:"pistol",SHOTGUN:"shotgun",RIFLE:"rifle",SMG:"smg",SNIPER:"sniper"},Xt={[Je.PISTOL]:{id:Je.PISTOL,name:"M9 TACTICAL",type:"Pistol",damage:38,fireRate:.2,magSize:15,defaultReserve:90,reloadTime:1.3,range:45,pellets:1,spread:.012,recoilKick:.05,sound:"pistol",icon:"🔫",description:"Compact 9mm tactical sidearm. High mobility and fast reload."},[Je.SHOTGUN]:{id:Je.SHOTGUN,name:"TRENCH 12G",type:"Shotgun",damage:24,fireRate:.85,magSize:8,defaultReserve:48,reloadTime:2.2,range:22,pellets:8,spread:.085,recoilKick:.16,sound:"shotgun",icon:"💥",description:"Devastating close-range pump shotgun. Fires 8 high-impact pellets."},[Je.RIFLE]:{id:Je.RIFLE,name:"M4A1 ASSAULT",type:"Assault Rifle",damage:34,fireRate:.11,magSize:30,defaultReserve:120,reloadTime:2,range:65,pellets:1,spread:.024,recoilKick:.07,sound:"rifle",icon:"⚡",description:"Versatile military assault rifle. Rapid fully-automatic fire."},[Je.SMG]:{id:Je.SMG,name:"MP5 SUBMACHINE",type:"SMG",damage:22,fireRate:.08,magSize:35,defaultReserve:140,reloadTime:1.5,range:36,pellets:1,spread:.038,recoilKick:.045,sound:"smg",icon:"🌪️",description:"High rate-of-fire tactical submachine gun with swift handling."},[Je.SNIPER]:{id:Je.SNIPER,name:"AWP MARKSMAN",type:"Sniper Rifle",damage:140,fireRate:1.2,magSize:5,defaultReserve:30,reloadTime:2.5,range:120,pellets:1,spread:.0015,recoilKick:.22,sound:"sniper",icon:"🎯",description:"Heavy bolt-action marksman rifle with high-magnification scope. Lethal power."}},Ur=[Xt[Je.RIFLE],Xt[Je.PISTOL],Xt[Je.SHOTGUN],Xt[Je.SMG],Xt[Je.SNIPER]];function Jm(i){const e=new Ve;e.name=`weapon-${i}`;const t=new Ee({color:1579549,roughness:.35,metalness:.85}),n=new Ee({color:2895925,roughness:.4,metalness:.78}),s=new Ee({color:1316376,roughness:.75,metalness:.15}),a=new Ee({color:6043686,roughness:.78,metalness:.08}),r=new Ee({color:2245717,roughness:.1,metalness:.95}),o=new Ee({color:13938487,roughness:.3,metalness:.9});switch(i){case Je.PISTOL:{const l=new A(new Y(.045,.13,.065),s);l.position.set(0,-.05,.015),l.rotation.x=-.18,e.add(l);const c=new A(new Y(.028,.045,.055),t);c.position.set(0,-.01,-.038),e.add(c);const h=new A(new Y(.05,.065,.2),n);h.position.set(0,.04,-.05),h.castShadow=!0,e.add(h);const d=new A(new Pe(.012,.012,.06,8),t);d.rotation.x=Math.PI/2,d.position.set(0,.04,-.16),e.add(d);const u=new A(new Y(.024,.016,.016),t);u.position.set(0,.078,.04),e.add(u);const p=new A(new Y(.012,.016,.016),t);p.position.set(0,.078,-.14),e.add(p);break}case Je.SMG:{const l=new A(new Y(.048,.13,.07),s);l.position.set(0,-.05,.015),l.rotation.x=-.2,e.add(l);const c=new A(new Y(.06,.085,.26),n);c.position.set(0,.03,-.06),c.castShadow=!0,e.add(c);const h=new A(new Y(.036,.18,.065),s);h.position.set(0,-.09,-.13),h.rotation.x=-.22,e.add(h);const d=new A(new Y(.058,.075,.16),s);d.position.set(0,.015,-.25),e.add(d);const u=new A(new Pe(.014,.014,.22,8),t);u.rotation.x=Math.PI/2,u.position.set(0,.03,-.32),e.add(u);const p=new A(new Pe(.02,.016,.06,6),t);p.rotation.x=Math.PI/2,p.position.set(0,.03,-.44),e.add(p);const g=new A(new Pe(.006,.006,.22,6),t);g.rotation.x=Math.PI/2,g.position.set(.032,.015,.14),e.add(g);const v=g.clone();v.position.x=-.032,e.add(v);const m=new A(new Y(.07,.1,.025),s);m.position.set(0,.01,.25),e.add(m);break}case Je.RIFLE:{const l=new A(new Y(.048,.14,.072),s);l.position.set(0,-.05,.015),l.rotation.x=-.22,e.add(l);const c=new A(new Y(.065,.1,.28),n);c.position.set(0,.03,-.05),c.castShadow=!0,e.add(c);const h=new A(new Y(.042,.2,.09),t);h.position.set(0,-.11,-.11),h.rotation.x=-.16,e.add(h);const d=new A(new Y(.06,.075,.24),s);d.position.set(0,.03,-.28),d.castShadow=!0,e.add(d);const u=new A(new Pe(.015,.015,.26,8),t);u.rotation.x=Math.PI/2,u.position.set(0,.03,-.5),e.add(u);const p=new A(new Pe(.02,.016,.06,6),t);p.rotation.x=Math.PI/2,p.position.set(0,.03,-.64),e.add(p);const g=new A(new Pe(.015,.015,.18,8),t);g.rotation.x=Math.PI/2,g.position.set(0,.03,.14),e.add(g);const v=new A(new Y(.06,.12,.18),s);v.position.set(0,.01,.21),v.castShadow=!0,e.add(v);const m=new A(new Y(.038,.022,.1),t);m.position.set(0,.09,-.05),e.add(m);const f=new A(new Y(.042,.05,.08),t);f.position.set(0,.12,-.05),e.add(f);const w=new A(new Sn(.032,.038),r);w.position.set(0,.12,-.091),e.add(w);break}case Je.SHOTGUN:{const l=new A(new Y(.055,.13,.08),a);l.position.set(0,-.05,.02),l.rotation.x=-.28,e.add(l);const c=new A(new Y(.065,.12,.32),a);c.position.set(0,-.01,.24),c.rotation.x=.1,c.castShadow=!0,e.add(c);const h=new A(new Y(.07,.1,.25),t);h.position.set(0,.03,-.05),h.castShadow=!0,e.add(h);const d=new A(new Pe(.02,.02,.58,8),n);d.rotation.x=Math.PI/2,d.position.set(0,.05,-.44),d.castShadow=!0,e.add(d);const u=new A(new Pe(.017,.017,.48,8),t);u.rotation.x=Math.PI/2,u.position.set(0,.01,-.38),e.add(u);const p=new A(new Pe(.028,.028,.18,8),a);p.rotation.x=Math.PI/2,p.position.set(0,.012,-.32),e.add(p);break}case Je.SNIPER:{const l=new Ee({color:2767664,roughness:.65,metalness:.25}),c=new A(new Y(.068,.12,.55),l);c.position.set(0,-.01,.1),c.castShadow=!0,e.add(c);const h=new A(new Y(.05,.14,.08),s);h.position.set(0,-.06,.015),h.rotation.x=-.24,e.add(h);const d=new A(new Pe(.02,.016,.78,8),t);d.rotation.x=Math.PI/2,d.position.set(0,.04,-.56),d.castShadow=!0,e.add(d);const u=new A(new Y(.038,.038,.08),t);u.position.set(0,.04,-.96),e.add(u);const p=new A(new Pe(.018,.018,.32,8),t);p.rotation.x=Math.PI/2,p.position.set(0,.12,-.08),e.add(p);const g=new A(new Pe(.028,.02,.09,8),t);g.rotation.x=Math.PI/2,g.position.set(0,.12,-.27),e.add(g);const v=new A(new Pe(.024,.018,.07,8),t);v.rotation.x=Math.PI/2,v.position.set(0,.12,.09),e.add(v);const m=new A(new Pe(.007,.007,.07,6),o);m.position.set(.05,.05,.05),m.rotation.z=Math.PI/3,e.add(m);const f=new A(new Y(.042,.13,.1),t);f.position.set(0,-.08,-.12),e.add(f);break}}return e}let Va=null;function Qm(){return Va||(Va={upperChest:new Y(.5,.38,.26),clavicle:new Y(.2,.04,.04),rib0:new Y(.44,.045,.05),rib1:new Y(.4,.045,.05),rib2:new Y(.36,.045,.05),sunkenStomach:new Y(.38,.28,.2),stomachBruise:new Y(.22,.16,.22),neck:new Pe(.085,.11,.16,8),cranium:new $t(.18,8,6),face:new Y(.28,.26,.24),socket:new Y(.07,.07,.05),eye:new $t(.035,6,6),mouth:new Y(.18,.09,.16),teethUpper:new Y(.15,.03,.04),teethLower:new Y(.14,.028,.04),upperArm:new Pe(.055,.065,.38,7),forearm:new Pe(.048,.055,.42,7),vein:new Pe(.008,.008,.3,4),hand:new Y(.11,.09,.14),claw:new Pe(.008,.015,.14,5),pelvis:new Y(.46,.18,.28),button:new Pe(.02,.02,.02,6),pants:new Y(.2,.72,.22),foot:new Y(.13,.1,.26),toe:new Y(.025,.04,.06),hitCollider:new Pe(.5,.5,1.9,8)}),Va}let Ga=null;function e0(){return Ga||(Ga={vein:new Ee({color:3687741,roughness:.85,metalness:.1}),woundedFlesh:new Ee({color:6035480,roughness:.65,metalness:.12}),eye:new Ee({color:16769154,emissive:16752640,emissiveIntensity:1.8,roughness:.2}),teeth:new Ee({color:14538936,roughness:.55}),hitCollider:new on({visible:!1})}),Ga}function t0(i={}){const e=Qm(),t=e0(),n=new Ve;n.name="procedural-zombie";const s=[6187866,5530194,6713954,5069387,7240556],a=[2762532,3354153,2368550,3683117],r=i.skinColor||s[Math.floor(Math.random()*s.length)],o=i.pantsColor||a[Math.floor(Math.random()*a.length)],l=new Ee({color:r,roughness:.9,metalness:.05,flatShading:!0}),c=new Ee({color:o,roughness:.92,flatShading:!0}),h=new A(e.hitCollider,t.hitCollider);h.position.set(0,.95,0),h.name="zombie-hitbox",n.add(h),n.hitCollider=h;const d=new Ve;d.position.set(0,.95,0),d.rotation.x=.2;const u=new A(e.upperChest,l);u.position.y=.44,u.castShadow=!0,d.add(u);const p=new A(e.clavicle,l);p.position.set(-.12,.58,-.11),p.rotation.z=-.1,d.add(p);const g=new A(e.clavicle,l);g.position.set(.12,.58,-.11),g.rotation.z=.1,d.add(g);const v=new A(e.rib0,l);v.position.set(0,.48,-.12),d.add(v);const m=new A(e.rib1,l);m.position.set(0,.4,-.12),d.add(m);const f=new A(e.rib2,l);f.position.set(0,.32,-.12),d.add(f);const w=new A(e.sunkenStomach,l);w.position.set(0,.16,0),d.add(w);const b=new A(e.stomachBruise,t.woundedFlesh);b.position.set(.02,.18,-.01),d.add(b);const y=new Ve;y.position.set(0,.68,0),y.rotation.z=-.09,y.rotation.x=.08;const U=new A(e.neck,l);U.position.y=.08,y.add(U);const T=new A(e.cranium,l);T.position.set(0,.32,-.02),T.scale.set(.9,1.05,.95),T.castShadow=!0,y.add(T);const C=new A(e.face,l);C.position.set(0,.22,-.08),y.add(C);const L=new A(e.socket,t.woundedFlesh);L.position.set(-.075,.25,-.19),y.add(L);const M=new A(e.socket,t.woundedFlesh);M.position.set(.075,.25,-.19),y.add(M);const x=new A(e.eye,t.eye);x.position.set(-.075,.25,-.2),y.add(x);const R=new A(e.eye,t.eye);R.position.set(.075,.25,-.2),y.add(R);const k=new A(e.mouth,t.woundedFlesh);k.position.set(0,.12,-.15),k.rotation.x=.2,y.add(k);const O=new A(e.teethUpper,t.teeth);O.position.set(0,.15,-.21),y.add(O);const z=new A(e.teethLower,t.teeth);z.position.set(0,.09,-.2),y.add(z),d.add(y);const X=new Ve;X.position.set(-.32,.54,0),X.rotation.x=-1.42,X.rotation.y=.18;const q=new A(e.upperArm,l);q.position.y=-.19,X.add(q);const J=new A(e.forearm,l);J.position.set(0,-.52,-.04),J.rotation.x=-.15,X.add(J);const G=new A(e.vein,t.vein);G.position.set(-.03,-.52,-.08),X.add(G);const re=new A(e.hand,l);re.position.set(0,-.74,-.08),X.add(re);for(let D=-1.5;D<=1.5;D+=1){const Re=new A(e.claw,l);Re.position.set(D*.032,-.84,-.12),Re.rotation.x=-.45,X.add(Re)}d.add(X);const ie=new Ve;ie.position.set(.32,.54,0),ie.rotation.x=-1.38,ie.rotation.y=-.18;const _e=new A(e.upperArm,l);_e.position.y=-.19,ie.add(_e);const Ie=new A(e.forearm,l);Ie.position.set(0,-.52,-.04),Ie.rotation.x=-.15,ie.add(Ie);const ze=new A(e.vein,t.vein);ze.position.set(.03,-.52,-.08),ie.add(ze);const Z=new A(e.hand,l);Z.position.set(0,-.74,-.08),ie.add(Z);for(let D=-1.5;D<=1.5;D+=1){const Re=new A(e.claw,l);Re.position.set(D*.032,-.84,-.12),Re.rotation.x=-.45,ie.add(Re)}d.add(ie),n.add(d);const ee=new A(e.pelvis,c);ee.position.set(0,.96,0),n.add(ee);const fe=new A(e.button,t.teeth);fe.rotation.x=Math.PI/2,fe.position.set(0,1.02,-.15),n.add(fe);const te=new Ve;te.position.set(-.14,.94,0);const le=new A(e.pants,c);le.position.y=-.36,le.castShadow=!0,te.add(le);const ae=new A(e.foot,l);ae.position.set(0,-.78,-.05),te.add(ae);for(let D=-1;D<=1;D++){const Re=new A(e.toe,l);Re.position.set(D*.035,-.79,-.19),te.add(Re)}n.add(te);const Ce=new Ve;Ce.position.set(.14,.94,0);const Ye=new A(e.pants,c);Ye.position.y=-.36,Ye.castShadow=!0,Ce.add(Ye);const Be=new A(e.foot,l);Be.position.set(0,-.78,-.05),Ce.add(Be);for(let D=-1;D<=1;D++){const Re=new A(e.toe,l);Re.position.set(D*.035,-.79,-.19),Ce.add(Re)}n.add(Ce);const $e=i.scale||1.04;return n.scale.set($e,$e,$e),{mesh:n,torsoGroup:d,headGroup:y,leftLegPivot:te,rightLegPivot:Ce,leftArmPivot:X,rightArmPivot:ie,materials:[l,c],originalColors:[r,o],update:(D,Re,Le=1)=>{if(D==="chase"||D==="attack"){const Ue=9.5*Le,ye=Math.sin(Re*Ue)*.65;te.rotation.x=ye,Ce.rotation.x=-ye,d.rotation.z=Math.sin(Re*(Ue/2))*.09,d.rotation.x=.2+Math.abs(Math.sin(Re*Ue))*.07,d.position.y=.95+Math.abs(Math.sin(Re*Ue))*.05,D==="attack"?(X.rotation.x=-.95+Math.sin(Re*16)*.75,ie.rotation.x=-.95-Math.sin(Re*16)*.75,y.rotation.x=.22+Math.sin(Re*16)*.15):(X.rotation.x=-1.42+Math.sin(Re*(Ue/2))*.12,ie.rotation.x=-1.38-Math.sin(Re*(Ue/2))*.12,y.rotation.x=.08)}else D==="stagger"?(d.rotation.x=-.28,y.rotation.x=-.35):(te.rotation.x=0,Ce.rotation.x=0,d.rotation.x=.2+Math.sin(Re*2)*.03,d.rotation.z=Math.sin(Re*1.5)*.02,y.rotation.z=-.09+Math.sin(Re*1.8)*.03)}}}function n0(i={}){const e=new Ve;e.name="procedural-boss-zombie";const t=1972760,n=1117966,s=1315344,a=new Ee({color:t,roughness:.85,metalness:.15,flatShading:!0}),r=new Ee({color:n,roughness:.5,metalness:.35,flatShading:!0}),o=new Ee({color:s,roughness:.92,flatShading:!0}),l=new Ee({color:16720418,emissive:16711680,emissiveIntensity:2.8,roughness:.2}),c=new Ee({color:14538936,roughness:.55}),h=new Ee({color:7211016,roughness:.65,metalness:.2}),d=new Ve;d.position.set(0,.95,0),d.rotation.x=.18;const u=new A(new Y(.7,.52,.38),a);u.position.y=.5,u.castShadow=!0,d.add(u);for(let le=0;le<4;le++){const ae=new A(new Y(.64-le*.05,.06,.07),a);ae.position.set(0,.62-le*.1,-.18),d.add(ae)}for(let le=0;le<5;le++){const ae=new A(new At(.06,.32,5),r);ae.position.set(0,.68-le*.12,.22),ae.rotation.x=Math.PI/2+.25,d.add(ae)}const p=new A(new Y(.52,.38,.3),a);p.position.y=.18,d.add(p);const g=new A(new Y(.32,.22,.32),h);g.position.set(.05,.22,-.02),d.add(g);const v=new Ve;v.position.set(0,.88,-.06);const m=new A(new $t(.26,8,8),a);m.position.y=.26,v.add(m);const f=new A(new Y(.38,.34,.32),a);f.position.set(0,.2,-.08),f.castShadow=!0,v.add(f);const w=new A(new At(.065,.35,5),r);w.position.set(-.16,.44,-.08),w.rotation.set(-.35,0,-.45),v.add(w);const b=new A(new At(.065,.35,5),r);b.position.set(.16,.44,-.08),b.rotation.set(-.35,0,.45),v.add(b);const y=new A(new $t(.05,6,6),l);y.position.set(-.1,.23,-.25),v.add(y);const U=new A(new $t(.05,6,6),l);U.position.set(.1,.23,-.25),v.add(U);const T=new A(new Y(.26,.12,.22),a);T.position.set(0,.06,-.14),v.add(T);const C=new A(new Y(.22,.04,.05),c);C.position.set(0,.13,-.24),v.add(C);const L=new A(new Y(.2,.04,.05),c);L.position.set(0,.07,-.23),v.add(L),d.add(v);const M=new Ve;M.position.set(-.46,.7,0);const x=new A(new Y(.22,.18,.22),r);x.position.set(-.02,.05,0),M.add(x);const R=new A(new At(.07,.38,5),r);R.position.set(-.12,.14,0),R.rotation.z=.55,M.add(R);const k=new A(new Pe(.08,.1,.5,7),a);k.position.y=-.25,k.castShadow=!0,M.add(k);const O=new A(new Pe(.07,.09,.55,7),a);O.position.set(0,-.65,-.12),O.rotation.x=-.38,O.castShadow=!0,M.add(O);for(let le=-1;le<=1;le++){const ae=new A(new At(.02,.24,4),r);ae.position.set(le*.045-.02,-.96,-.24),ae.rotation.x=-.55,M.add(ae)}d.add(M);const z=new Ve;z.position.set(.46,.7,0);const X=new A(new Y(.22,.18,.22),r);X.position.set(.02,.05,0),z.add(X);const q=new A(new At(.07,.38,5),r);q.position.set(.12,.14,0),q.rotation.z=-.55,z.add(q);const J=new A(new Pe(.08,.1,.5,7),a);J.position.y=-.25,J.castShadow=!0,z.add(J);const G=new A(new Pe(.07,.09,.55,7),a);G.position.set(0,-.65,-.12),G.rotation.x=-.38,G.castShadow=!0,z.add(G);for(let le=-1;le<=1;le++){const ae=new A(new At(.02,.24,4),r);ae.position.set(le*.045+.02,-.96,-.24),ae.rotation.x=-.55,z.add(ae)}d.add(z),e.add(d);const re=new A(new Y(.62,.24,.36),o);re.position.set(0,.96,0),e.add(re);const ie=new Ve;ie.position.set(-.2,.94,0);const _e=new A(new Y(.28,.88,.3),o);_e.position.y=-.44,_e.castShadow=!0,ie.add(_e);const Ie=new A(new Y(.2,.14,.38),a);Ie.position.set(0,-.92,-.06),ie.add(Ie),e.add(ie);const ze=new Ve;ze.position.set(.2,.94,0);const Z=new A(new Y(.28,.88,.3),o);Z.position.y=-.44,Z.castShadow=!0,ze.add(Z);const ee=new A(new Y(.2,.14,.38),a);ee.position.set(0,-.92,-.06),ze.add(ee),e.add(ze);const fe=new A(new Pe(.65,.65,2.3,8),new on({visible:!1}));fe.position.set(0,1.15,0),fe.name="boss-hitbox",e.add(fe),e.hitCollider=fe;const te=i.scale||2.85;return e.scale.set(te,te,te),{mesh:e,torsoGroup:d,headGroup:v,leftLegPivot:ie,rightLegPivot:ze,leftArmPivot:M,rightArmPivot:z,materials:[a,o,r],originalColors:[t,s,n],update:(le,ae,Ce=1)=>{if(le==="chase"||le==="attack"){const Ye=5.5*Ce,Be=Math.sin(ae*Ye)*.55;ie.rotation.x=Be,ze.rotation.x=-Be,d.rotation.z=Math.sin(ae*(Ye/2))*.06,d.rotation.x=.18+Math.abs(Math.sin(ae*Ye))*.05,d.position.y=.95+Math.abs(Math.sin(ae*Ye))*.04,le==="attack"?(M.rotation.x=-.8+Math.sin(ae*12)*.65,z.rotation.x=-.8-Math.sin(ae*12)*.65,v.rotation.x=.2+Math.sin(ae*12)*.12):(M.rotation.x=-1.25+Math.sin(ae*(Ye/2))*.1,z.rotation.x=-1.2-Math.sin(ae*(Ye/2))*.1,v.rotation.x=.06)}else le==="stagger"?(d.rotation.x=-.18,v.rotation.x=-.22):(ie.rotation.x=0,ze.rotation.x=0,d.rotation.x=.18+Math.sin(ae*1.5)*.02,d.rotation.z=Math.sin(ae*1.2)*.015)}}}function fl(i=null,e=Je.RIFLE){const t=new Ve;t.name="procedural-player";const n=(i==null?void 0:i.cosmetics)||{skinColor:14201997,hairColor:2234388,jacketColor:6044452,shirtColor:2500651,pantsColor:4735542,gearColor:1711134,bootColor:4336408},s=new Ee({color:n.skinColor,roughness:.65}),a=new Ee({color:n.hairColor,roughness:.85}),r=new Ee({color:n.jacketColor||6044452,roughness:.68,flatShading:!0}),o=new Ee({color:n.shirtColor||2500651,roughness:.82}),l=new Ee({color:n.pantsColor||4735542,roughness:.85,flatShading:!0}),c=new Ee({color:n.gearColor||1711134,roughness:.75}),h=new Ee({color:n.bootColor||4336408,roughness:.75,flatShading:!0}),d=new Ee({color:13421772,roughness:.3,metalness:.85}),u=new Ve;u.position.set(0,.95,0);const p=new A(new Y(.5,.58,.32),o);p.position.y=.3,p.castShadow=!0,u.add(p);const g=new A(new Y(.56,.58,.16),r);g.position.set(0,.3,.1),g.castShadow=!0,g.receiveShadow=!0,u.add(g);const v=new Ve;v.position.set(0,.3,.2);const m=new A(new Y(.32,.36,.12),c);m.castShadow=!0,m.receiveShadow=!0,v.add(m);const f=new A(new Y(.24,.18,.06),c);f.position.set(0,-.06,.08),f.castShadow=!0,f.receiveShadow=!0,v.add(f);const w=new A(new Pe(.05,.05,.3,8),l);w.rotation.z=Math.PI/2,w.position.set(0,-.22,.04),w.castShadow=!0,w.receiveShadow=!0,v.add(w),u.add(v);const b=new A(new Y(.06,.44,.24),c);b.position.set(-.16,.32,.02),u.add(b);const y=new A(new Y(.06,.44,.24),c);y.position.set(.16,.32,.02),u.add(y);const U=new A(new Y(.045,.1,.045),c);U.position.set(-.18,.44,-.11);const T=new A(new Pe(.004,.004,.16,5),d);T.position.set(-.18,.56,-.11),u.add(U,T);const C=new A(new Y(.16,.56,.22),r);C.position.set(-.21,.3,-.07),u.add(C);const L=new A(new Y(.16,.56,.22),r);L.position.set(.21,.3,-.07),u.add(L);const M=new A(new Y(.12,.28,.08),r);M.position.set(-.16,.44,-.16),M.rotation.set(.12,.22,-.15),u.add(M);const x=new A(new Y(.12,.28,.08),r);x.position.set(.16,.44,-.16),x.rotation.set(.12,-.22,.15),u.add(x);const R=new A(new Y(.018,.5,.015),d);R.position.set(0,.26,-.165),u.add(R);const k=new A(new Y(.54,.08,.34),c);k.position.set(0,.04,0),u.add(k);const O=new A(new Y(.035,.055,.01),d);O.position.set(0,.38,-.18),u.add(O);const z=new Ve;z.position.set(0,.65,0);const X=new A(new Pe(.1,.11,.15,8),s);X.position.y=.08,z.add(X);const q=new A(new Y(.3,.32,.3),s);q.position.y=.26,q.castShadow=!0,z.add(q);const J=new A(new Y(.045,.09,.06),s);J.position.set(0,.24,-.17),z.add(J);const G=new A(new Y(.18,.08,.14),s);G.position.set(0,.12,-.1),z.add(G);const re=new A(new Y(.24,.035,.05),s);re.position.set(0,.31,-.16),z.add(re);const ie=new A(new Y(.34,.15,.34),a);ie.position.set(0,.4,.01),z.add(ie);const _e=new A(new Y(.09,.24,.32),a);_e.position.set(-.16,.3,.01),_e.rotation.z=-.12,z.add(_e);const Ie=new A(new Y(.09,.24,.32),a);Ie.position.set(.16,.3,.01),Ie.rotation.z=.12,z.add(Ie);const ze=new A(new Y(.3,.11,.14),a);ze.position.set(.02,.36,-.16),ze.rotation.set(-.25,.1,-.05),z.add(ze);const Z=new A(new Y(.32,.2,.1),a);Z.position.set(0,.24,.15),z.add(Z),u.add(z);const ee=new Ve;ee.position.set(.25,.46,.02),ee.rotation.set(.65,-.15,0);const fe=new A(new Y(.13,.3,.13),r);fe.position.set(0,-.15,0),fe.castShadow=!0,ee.add(fe);const te=new Ve;te.position.set(0,-.28,0),te.rotation.set(.6,0,0);const le=new A(new Y(.11,.26,.11),s);le.position.set(0,-.12,0),te.add(le);const ae=new Ve;ae.position.set(0,-.25,0),ae.rotation.set(-1.25,0,0);const Ce=new A(new Y(.08,.09,.08),s);Ce.position.set(0,-.02,0),ae.add(Ce);const Ye=new A(new Y(.025,.025,.07),s);Ye.position.set(-.035,.01,-.05),ae.add(Ye);const Be=new A(new Y(.025,.05,.03),s);Be.position.set(.038,.01,.01),Be.rotation.z=-.4,ae.add(Be);const $e=new Ve;$e.name="right-hand-weapon-mount",$e.position.set(0,0,0),$e.scale.set(1.28,1.28,1.28),ae.add($e);const D={};Ur.forEach(He=>{const nt=Jm(He.id);nt.visible=He.id===e,$e.add(nt),D[He.id]=nt});let Re=e;te.add(ae),ee.add(te),u.add(ee);const Le=new Ve;Le.position.set(-.25,.46,.02),Le.rotation.set(.68,.26,-.15);const Ue=new A(new Y(.13,.3,.13),r);Ue.position.set(0,-.15,0),Ue.castShadow=!0,Le.add(Ue);const ye=new Ve;ye.position.set(0,-.28,0),ye.rotation.set(.72,-.32,0);const rt=new A(new Y(.11,.28,.11),s);rt.position.set(0,-.12,0),ye.add(rt);const Ae=new A(new Y(.12,.04,.12),c);Ae.position.set(0,-.18,0),ye.add(Ae);const E=new Ve;E.position.set(0,-.26,0),E.rotation.set(-1.35,0,0);const _=new A(new Y(.08,.08,.09),s);E.add(_),ye.add(E),Le.add(ye),u.add(Le),t.add(u);const B=new A(new Y(.48,.16,.28),l);B.position.set(0,.94,0),t.add(B);const j=new A(new Y(.5,.06,.3),c);j.position.set(0,.98,0),t.add(j);const Q=new A(new Y(.1,.2,.14),c);Q.position.set(.27,.82,-.02),t.add(Q);const $=new Ve;$.position.set(-.15,.94,0);const Se=new A(new Y(.2,.44,.22),l);Se.position.y=-.22,Se.castShadow=!0,$.add(Se);const de=new A(new Y(.06,.18,.16),l);de.position.set(-.11,-.22,0),$.add(de);const me=new A(new Y(.18,.34,.2),l);me.position.y=-.56,me.castShadow=!0,$.add(me);const je=new A(new Y(.17,.13,.04),c);je.position.set(0,-.48,-.1),$.add(je);const ne=new A(new Y(.2,.24,.32),h);ne.position.set(0,-.8,-.04),ne.castShadow=!0,$.add(ne);const ge=new A(new Y(.22,.06,.34),c);ge.position.set(0,-.91,-.04),$.add(ge),t.add($);const xe=new Ve;xe.position.set(.15,.94,0);const De=new A(new Y(.2,.44,.22),l);De.position.y=-.22,De.castShadow=!0,xe.add(De);const ve=new A(new Y(.06,.18,.16),l);ve.position.set(.11,-.22,0),xe.add(ve);const qe=new A(new Y(.18,.34,.2),l);qe.position.y=-.56,qe.castShadow=!0,xe.add(qe);const ke=new A(new Y(.17,.13,.04),c);ke.position.set(0,-.48,-.1),xe.add(ke);const tt=new A(new Y(.2,.24,.32),h);tt.position.set(0,-.8,-.04),tt.castShadow=!0,xe.add(tt);const I=new A(new Y(.22,.06,.34),c);I.position.set(0,-.91,-.04),xe.add(I),t.add(xe);let oe=0,W=0,K=0,ue=!1,ce=0;const Ne=He=>{He===Je.PISTOL?(Le.rotation.set(.65,.35,-.12),ye.rotation.set(.7,-.25,0),E.rotation.set(-1.3,0,0)):(Le.rotation.set(.68,.26,-.15),ye.rotation.set(.72,-.32,0),E.rotation.set(-1.35,0,0))};return Ne(e),{mesh:t,torsoGroup:u,rightArmGroup:ee,leftArmGroup:Le,rightHandSocket:ae,weaponMount:$e,equipWeapon:He=>{D[Re]&&(D[Re].visible=!1),Re=He,D[Re]&&(D[Re].visible=!0),ce=1,Ne(He)},triggerRecoil:(He=.08)=>{oe=He,W=He*.85},setReloading:(He,nt=0)=>{ue=He,K=nt},getMuzzleWorldPosition:()=>{const He=new P;$e.getWorldPosition(He);let nt=.85;Re===Je.PISTOL?nt=.35:Re===Je.SNIPER?nt=1.45:Re===Je.SHOTGUN?nt=1.05:Re===Je.SMG&&(nt=.65);const Ze=new P(0,0,-nt).applyQuaternion(t.quaternion);return He.add(Ze),He},update:(He,nt,Ze,Dt=0)=>{if(u.rotation.x=-Dt*.85,(oe>.001||W>.001)&&(oe=Gi.lerp(oe,0,.28),W=Gi.lerp(W,0,.28)),$e.position.z=oe,$e.rotation.x=-W,ce>0?(ce=Gi.lerp(ce,0,.18),$e.position.y=-ce*.14):$e.position.y=0,ue){const It=Math.sin(K*Math.PI)*.35;ee.rotation.x=.65-It,Le.rotation.x=.68-It*1.4}else ee.rotation.x=.65,Le.rotation.x=Re===Je.PISTOL?.65:.68;if(!nt)$.rotation.x=-.35,xe.rotation.x=-.45,u.position.y=.95;else if(He){const zi=Math.sin(Ze*12)*.65;$.rotation.x=zi,xe.rotation.x=-zi,u.position.y=.95+Math.abs(Math.sin(Ze*12))*.05,ee.rotation.z=Math.sin(Ze*12)*.03,Le.rotation.z=-Math.sin(Ze*12)*.03}else $.rotation.x=Gi.lerp($.rotation.x,0,.15),xe.rotation.x=Gi.lerp(xe.rotation.x,0,.15),u.position.y=.95+Math.sin(Ze*2.5)*.012,ee.rotation.z=0,Le.rotation.z=0}}}const Nr=[{id:"maya",name:"Maya",title:"Tactical Scout",role:"Survivor Scout",trait:"Balanced Operator",traitDesc:"Reliable all-around combat readiness and agility.",speedMultiplier:1,healthBonus:0,damageResistance:1,reloadSpeedMultiplier:1,spreadMultiplier:1,cosmetics:{skinColor:14201997,hairColor:1709074,hairType:"ponytail",hoodieColor:9209984,vestColor:4021314,pantsColor:3686197,gearColor:2237738,bootColor:1710618,hasBackpack:!0,hasHolster:!0}},{id:"kael",name:"Kael",title:"Spec-Ops Infiltrator",role:"Night Infiltrator",trait:"Swift Stride (+6% Speed)",traitDesc:"Lightweight urban night gear allowing faster sprint and flanking.",speedMultiplier:1.06,healthBonus:0,damageResistance:1,reloadSpeedMultiplier:1,spreadMultiplier:1,cosmetics:{skinColor:13610120,hairColor:1118481,hairType:"helmet_visor",hoodieColor:1777187,vestColor:1447964,pantsColor:2303790,gearColor:921618,bootColor:1184791,hasBackpack:!0,hasHolster:!0}},{id:"elena",name:"Elena",title:"Desert Commando",role:"Desert Specialist",trait:"Quick Reload (-20% Reload Time)",traitDesc:"Fast magazine manipulation honed in harsh arid warfare.",speedMultiplier:1,healthBonus:0,damageResistance:1,reloadSpeedMultiplier:.8,spreadMultiplier:1,cosmetics:{skinColor:14858898,hairColor:3876121,hairType:"braid_scarf",hoodieColor:13152915,vestColor:9204822,pantsColor:7232581,gearColor:3681826,bootColor:5062448,hasBackpack:!0,hasHolster:!0}},{id:"marcus",name:"Dr. Marcus",title:"Field Medic",role:"Combat Support",trait:"Vital Reserve (+25 Max HP)",traitDesc:"Advanced medical conditioning and self-stabilizing stamina.",speedMultiplier:.98,healthBonus:25,damageResistance:1,reloadSpeedMultiplier:1,spreadMultiplier:1,cosmetics:{skinColor:12951163,hairColor:4868682,hairType:"medic_cap",hoodieColor:3820120,vestColor:2766144,pantsColor:2963266,gearColor:1778218,bootColor:1579032,hasBackpack:!0,hasHolster:!0,hasMedicPatch:!0}},{id:"jax",name:"Jax",title:"Heavy Vanguard",role:"Frontline Enforcer",trait:"Reinforced Plates (-15% Damage Taken)",traitDesc:"Heavy ballistic chest plates absorb incoming zombie strikes.",speedMultiplier:.95,healthBonus:10,damageResistance:.85,reloadSpeedMultiplier:1.05,spreadMultiplier:1,cosmetics:{skinColor:12093284,hairColor:921102,hairType:"crewcut",hoodieColor:4011307,vestColor:1974826,pantsColor:3026995,gearColor:1316378,bootColor:1118481,hasBackpack:!0,hasHolster:!0,hasHeavyPlates:!0}},{id:"viper",name:"Viper",title:"Recon Sniper",role:"Long-Range Scout",trait:"Deadly Precision (-30% Weapon Spread)",traitDesc:"Steady marksmanship discipline and razor-sharp weapon handling.",speedMultiplier:1.02,healthBonus:0,damageResistance:1,reloadSpeedMultiplier:1,spreadMultiplier:.7,cosmetics:{skinColor:14201997,hairColor:1709074,hairType:"beret_headset",hoodieColor:2766890,vestColor:1845276,pantsColor:2240546,gearColor:1317908,bootColor:1185810,hasBackpack:!0,hasHolster:!0,hasGhillieTrim:!0}}];function na(i){return Nr.find(e=>e.id===i)||Nr[0]}const lc={normal:25,fast:40,heavy:75,elite:125,boss:300},pl=[0,100,250,450,700,1e3,1350,1750,2200,2700],Fr={1:{id:"pistol",name:"M9 TACTICAL",label:"Starter Pistol",icon:"🔫",description:"Standard tactical sidearm"},2:{id:"smg",name:"MP5 TACTICAL",label:"SMG",icon:"⚡",description:"Rapid-fire tactical submachine gun"},3:{id:"shotgun",name:"TRENCH 12G",label:"Shotgun",icon:"💥",description:"Devastating close-quarters scattergun"},4:{id:"rifle",name:"M4A1 ASSAULT",label:"Assault Rifle",icon:"🎯",description:"Versatile automatic combat rifle"},5:{id:"sniper",name:"M24 TACTICAL",label:"Sniper Rifle",icon:"🔭",description:"High-caliber extreme range rifle"}};function ia(i){return i<=1?0:i<=pl.length?pl[i-1]:25*i*(i+1)-50}function ss(i){const e=Math.max(0,Number(i)||0);let t=1;for(;e>=ia(t+1);)t++;return t}function ml(i){const e=Math.max(0,Number(i)||0),t=ss(e),n=ia(t),s=ia(t+1),a=e-n,r=s-n,o=Math.min(100,Math.max(0,a/r*100));return{level:t,totalXP:e,currentXP:a,xpNeeded:r,progressPct:Math.round(o*10)/10}}const gl="zombieGameProgress",mn={version:1,totalXP:0,level:1,unlockedWeapons:["pistol"],currentWeapon:"pistol",stats:{kills:0,headshots:0,bossKills:0,wavesCompleted:0}};class i0{constructor(){this.state=this.loadState(),this.listeners={xpAdded:[],levelUp:[],weaponUnlocked:[],progressReset:[]},this.reconcileLevelAndWeapons(),typeof window<"u"&&(window.gameProgression=this,window.gameDebug={addXP:(e=100)=>this.debugAddXP(e),levelUp:()=>this.debugLevelUp(),unlockWeapon:e=>this.debugUnlockWeapon(e),unlockAllWeapons:()=>this.debugUnlockAllWeapons(),resetProgress:()=>this.resetProgress(),getProgress:()=>this.getProgressSummary()})}loadState(){var e,t,n,s;try{const a=localStorage.getItem(gl);if(!a)return{...mn,unlockedWeapons:[...mn.unlockedWeapons],stats:{...mn.stats}};const r=JSON.parse(a);if(typeof r!="object"||r===null)return{...mn,unlockedWeapons:[...mn.unlockedWeapons],stats:{...mn.stats}};const o=Math.max(0,Number(r.totalXP)||0),l=ss(o),c=Array.isArray(r.unlockedWeapons)&&r.unlockedWeapons.length>0?[...new Set(r.unlockedWeapons)]:["pistol"];return c.includes("pistol")||c.unshift("pistol"),{version:1,totalXP:o,level:l,unlockedWeapons:c,currentWeapon:r.currentWeapon||"pistol",stats:{kills:Number((e=r.stats)==null?void 0:e.kills)||0,headshots:Number((t=r.stats)==null?void 0:t.headshots)||0,bossKills:Number((n=r.stats)==null?void 0:n.bossKills)||0,wavesCompleted:Number((s=r.stats)==null?void 0:s.wavesCompleted)||0}}}catch(a){return console.warn("[ProgressionManager] Failed to load progress from localStorage, using defaults:",a),{...mn,unlockedWeapons:[...mn.unlockedWeapons],stats:{...mn.stats}}}}saveState(){try{localStorage.setItem(gl,JSON.stringify(this.state))}catch(e){console.warn("[ProgressionManager] Failed to save progress to localStorage:",e)}}reconcileLevelAndWeapons(){const e=ss(this.state.totalXP);this.state.level=e;for(let t=1;t<=e;t++){const n=Fr[t];n&&!this.state.unlockedWeapons.includes(n.id)&&this.state.unlockedWeapons.push(n.id)}this.saveState()}addXP(e,t={}){const n=Math.max(0,Math.floor(Number(e)||0));if(n<=0)return null;const s=this.state.totalXP,a=ss(s);this.state.totalXP+=n;const r=ss(this.state.totalXP);this.state.level=r,t.isKill&&(this.state.stats.kills++,t.isBoss&&this.state.stats.bossKills++,t.isHeadshot&&this.state.stats.headshots++);const o=ml(this.state.totalXP),l=[];if(r>a){for(let c=a+1;c<=r;c++){const h=Fr[c];h&&!this.state.unlockedWeapons.includes(h.id)&&(this.state.unlockedWeapons.push(h.id),l.push(h),this.emit("weaponUnlocked",{weapon:h,level:c}))}this.emit("levelUp",{oldLevel:a,newLevel:r,totalXP:this.state.totalXP,unlockedWeapons:l,progress:o})}return this.emit("xpAdded",{amount:n,totalXP:this.state.totalXP,progress:o,metadata:t}),this.saveState(),{addedXP:n,totalXP:this.state.totalXP,level:r,leveledUp:r>a,newWeapons:l,progress:o}}awardZombieKill(e,t=!1,n=!1){const s=lc[e]||(t?300:25),a=n?Math.round(s*1.25):s;return this.addXP(a,{isKill:!0,zombieType:e,isBoss:t,isHeadshot:n})}getProgress(){return ml(this.state.totalXP)}getLevel(){return this.state.level}getTotalXP(){return this.state.totalXP}isWeaponUnlocked(e){return this.state.unlockedWeapons.includes(e)}getUnlockedWeapons(){return[...this.state.unlockedWeapons]}setCurrentWeapon(e){return this.isWeaponUnlocked(e)?(this.state.currentWeapon=e,this.saveState(),!0):!1}getCurrentWeapon(){return this.state.currentWeapon}getStats(){return{...this.state.stats}}resetProgress(){return this.state={version:1,totalXP:0,level:1,unlockedWeapons:["pistol"],currentWeapon:"pistol",stats:{kills:0,headshots:0,bossKills:0,wavesCompleted:0}},this.saveState(),this.emit("progressReset",this.state),this.getProgressSummary()}on(e,t){return this.listeners[e]&&this.listeners[e].push(t),()=>this.off(e,t)}off(e,t){this.listeners[e]&&(this.listeners[e]=this.listeners[e].filter(n=>n!==t))}emit(e,t){this.listeners[e]&&this.listeners[e].forEach(n=>{try{n(t)}catch(s){console.error(`[ProgressionManager] Error in listener for "${e}":`,s)}})}debugAddXP(e=100){return console.log(`[Debug Progression] Adding ${e} XP`),this.addXP(e,{isDebug:!0})}debugLevelUp(){const e=this.state.level+1,t=ia(e),n=Math.max(10,t-this.state.totalXP);return console.log(`[Debug Progression] Level up triggered, granting ${n} XP to reach Level ${e}`),this.addXP(n,{isDebug:!0})}debugUnlockWeapon(e){this.state.unlockedWeapons.includes(e)||(this.state.unlockedWeapons.push(e),this.saveState(),this.emit("weaponUnlocked",{weapon:{id:e,name:e.toUpperCase()},level:this.state.level}),console.log(`[Debug Progression] Unlocked weapon: ${e}`))}debugUnlockAllWeapons(){["pistol","smg","shotgun","rifle","sniper"].forEach(t=>{this.state.unlockedWeapons.includes(t)||this.state.unlockedWeapons.push(t)}),this.saveState(),console.log("[Debug Progression] All weapons unlocked.")}getProgressSummary(){const e=this.getProgress();return{level:e.level,totalXP:e.totalXP,currentXP:e.currentXP,xpNeeded:e.xpNeeded,progressPct:e.progressPct+"%",unlockedWeapons:this.state.unlockedWeapons,kills:this.state.stats.kills}}}const ft=new i0,vl=new P,Wa=new P,Hs=new P,Vs=new P,Xa=new P,qa=new P,_l=new P,Si=new P,yl=new P,Gs=[];class s0{constructor(e,t,n="maya"){this.scene=e,this.camera=t,this.character=na(n),this.baseSpeed=7.5,this.speed=this.baseSpeed*(this.character.speedMultiplier||1),this.maxHealth=100+(this.character.healthBonus||0),this.health=this.maxHealth,this.damageResistance=this.character.damageResistance||1,this.difficultyReduction=1,this.invulnerableTimer=2.5,this.velocityY=0,this.gravity=-24,this.jumpForce=8.8,this.isGrounded=!0,this.velocity=new P,this.currentMeshYaw=Math.PI,this.weaponsState={},Ur.forEach(d=>{this.weaponsState[d.id]={magazine:d.magSize,reserveAmmo:d.defaultReserve}});const s=ft.getCurrentWeapon(),a=ft.isWeaponUnlocked(s)?s:"pistol";this.activeWeapon=Xt[a]||Xt[Je.PISTOL],this.lastFireTime=-10,this.isReloading=!1,this.reloadDuration=this.activeWeapon.reloadTime*(this.character.reloadSpeedMultiplier||1),this.reloadTimer=0,this.position=new P(0,0,0),this.yaw=0,this.pitch=.05,this.camDistance=4.2,this.camHeight=1.85,this.shoulderOffset=.65,this.currentCamPos=new P(0,2.5,4.2),this.currentLookAt=new P(0,1.45,-20),this.aimPoint=new P,this.forwardDir=new P,this.mesh=new Ve,this.mesh.name="player-root",this.proceduralPlayer=fl(this.character,this.activeWeapon.id),this.mesh.add(this.proceduralPlayer.mesh),this.scene.add(this.mesh),this.muzzleLight=new is(16753920,0,7),this.scene.add(this.muzzleLight),this.muzzleFlashGroup=new Ve;const r=new on({color:16773792,transparent:!0,opacity:.95,side:en,depthWrite:!1}),o=new Sn(.38,.38),l=new A(o,r),c=new A(o,r);c.rotation.y=Math.PI/2;const h=new A(new $t(.08,6,6),new on({color:16777215}));this.muzzleFlashGroup.add(l,c,h),this.muzzleFlashGroup.visible=!1,this.scene.add(this.muzzleFlashGroup),this.muzzleFlashTimer=0,this.raycaster=new km,this.onHit=null,this.onTracer=null,this.onDryFire=null,this.onDamageTaken=null,this.onWeaponChange=null,this.onWeaponLocked=null}setCharacter(e){this.character=na(e),this.speed=this.baseSpeed*(this.character.speedMultiplier||1),this.maxHealth=100+(this.character.healthBonus||0),this.health=Math.min(this.health,this.maxHealth),this.damageResistance=this.character.damageResistance||1,this.proceduralPlayer&&this.mesh.remove(this.proceduralPlayer.mesh),this.proceduralPlayer=fl(this.character,this.activeWeapon.id),this.mesh.add(this.proceduralPlayer.mesh)}applyDifficulty(e){e&&(this.maxHealth=e.playerHealth+(this.character.healthBonus||0),this.health=this.maxHealth,this.difficultyReduction=e.damageReduction!==void 0?e.damageReduction:1,this.invulnerableTimer=2.5,Ur.forEach(t=>{const n=e.startingReserve/120;this.weaponsState[t.id]={magazine:e.id==="easy"?Math.round(t.magSize*1.5):t.magSize,reserveAmmo:Math.round(t.defaultReserve*n)}}),this.isReloading=!1)}switchWeapon(e){if(Xt[e]){if(!ft.isWeaponUnlocked(e)){this.onWeaponLocked&&this.onWeaponLocked(e);return}this.activeWeapon.id!==e&&(this.activeWeapon=Xt[e],ft.setCurrentWeapon(e),this.isReloading=!1,this.reloadDuration=this.activeWeapon.reloadTime*(this.character.reloadSpeedMultiplier||1),this.proceduralPlayer&&this.proceduralPlayer.equipWeapon(e),Vm(),this.onWeaponChange&&this.onWeaponChange(this.activeWeapon))}}getUnlockedWeaponList(){const t=[Je.PISTOL,Je.SMG,Je.SHOTGUN,Je.RIFLE,Je.SNIPER].filter(n=>ft.isWeaponUnlocked(n));return t.length>0?t:[Je.PISTOL]}nextWeapon(){const e=this.getUnlockedWeaponList(),n=(e.indexOf(this.activeWeapon.id)+1)%e.length;this.switchWeapon(e[n])}prevWeapon(){const e=this.getUnlockedWeaponList(),n=(e.indexOf(this.activeWeapon.id)-1+e.length)%e.length;this.switchWeapon(e[n])}get magazine(){var e;return((e=this.weaponsState[this.activeWeapon.id])==null?void 0:e.magazine)||0}set magazine(e){this.weaponsState[this.activeWeapon.id]&&(this.weaponsState[this.activeWeapon.id].magazine=e)}get reserveAmmo(){var e;return((e=this.weaponsState[this.activeWeapon.id])==null?void 0:e.reserveAmmo)||0}set reserveAmmo(e){this.weaponsState[this.activeWeapon.id]&&(this.weaponsState[this.activeWeapon.id].reserveAmmo=e)}get magSize(){return this.activeWeapon.magSize}addHealth(e){if(!this.isAlive()||e<=0)return 0;const t=this.health;return this.health=Math.min(this.maxHealth,this.health+e),this.health-t}addAmmo(e=30){this.weaponsState[this.activeWeapon.id]&&(this.weaponsState[this.activeWeapon.id].reserveAmmo+=e)}get currentWeapon(){return this.activeWeapon.id}update(e,t,n=[],s=null){var y,U;this.invulnerableTimer>0&&(this.invulnerableTimer=Math.max(0,this.invulnerableTimer-e));const{yaw:a,pitch:r}=t.resetRotationDeltas();this.yaw+=a;const o=85*Math.PI/180;this.pitch=Math.max(-o,Math.min(o,this.pitch+r)),t.autoAimEnabled&&n.length>0&&this.applyAutoAimAssist(n,e);const l=s!=null&&s.getTerrainHeight?s.getTerrainHeight(this.position.x,this.position.z):0;t.consumeJump&&t.consumeJump()&&this.isGrounded&&(this.velocityY=this.jumpForce,this.isGrounded=!1,jm()),this.isGrounded?this.position.y=l:(this.velocityY+=this.gravity*e,this.position.y+=this.velocityY*e,this.position.y<=l&&(this.position.y=l,this.velocityY=0,this.isGrounded=!0));const{direction:c,isMoving:h}=t.update(this.yaw);yl.copy(c).multiplyScalar(h?this.speed:0);const d=h?18:22;if(this.velocity.lerp(yl,Math.min(1,d*e)),this.position.addScaledVector(this.velocity,e),s&&s.getColliders){const T=s.getColliders(),C=.45;for(let L=0;L<2;L++)for(let M=0;M<T.length;M++){const x=T[M],R=this.position.x-x.x,k=this.position.z-x.z,O=R*R+k*k,z=C+x.radius;if(O<z*z&&O>1e-5){const X=Math.sqrt(O),q=z-X;this.position.x+=R/X*q,this.position.z+=k/X*q}}}const u=66,p=Math.hypot(this.position.x,this.position.z);if(p>u){const T=u/p;this.position.x*=T,this.position.z*=T}const g=s!=null&&s.getTerrainHeight?s.getTerrainHeight(this.position.x,this.position.z):0;this.isGrounded?this.position.y=g:this.position.y<g&&(this.position.y=g,this.velocityY=0,this.isGrounded=!0),this.mesh.position.copy(this.position);let m=this.yaw-this.currentMeshYaw;for(;m<-Math.PI;)m+=Math.PI*2;for(;m>Math.PI;)m-=Math.PI*2;const f=h?18:22;this.currentMeshYaw+=m*Math.min(1,f*e),this.mesh.rotation.y=this.currentMeshYaw;const w=this.velocity.lengthSq()>.05;this.proceduralPlayer&&this.proceduralPlayer.update(w,this.isGrounded,performance.now()*.001,this.pitch),this.updateCamera(e,t);const b=t.consumeWeaponSwitch();if(b&&(b==="next"?this.nextWeapon():b==="prev"?this.prevWeapon():Xt[b]&&this.switchWeapon(b)),this.isReloading){this.reloadTimer-=e;const T=1-Math.max(0,this.reloadTimer/this.reloadDuration);(y=this.proceduralPlayer)!=null&&y.setReloading&&this.proceduralPlayer.setReloading(!0,T),this.reloadTimer<=0&&(this.finishReload(),(U=this.proceduralPlayer)!=null&&U.setReloading&&this.proceduralPlayer.setReloading(!1,0))}(t.isFiring||t.consumeFire())&&this.tryShoot(n),t.consumeReload()&&this.startReload(),this.muzzleLight.intensity>0&&(this.muzzleLight.intensity=Math.max(0,this.muzzleLight.intensity-e*35)),this.muzzleFlashTimer>0&&(this.muzzleFlashTimer-=e,this.muzzleFlashTimer<=0&&(this.muzzleFlashGroup.visible=!1))}updateCamera(e=.016,t=null){const n=!!(t!=null&&t.isAiming);let s=70;if(n)switch(this.activeWeapon.id){case"pistol":s=55;break;case"shotgun":s=56;break;case"smg":s=48;break;case"rifle":s=40;break;case"sniper":s=20;break;default:s=50;break}const a=14;this.camera.fov+=(s-this.camera.fov)*Math.min(1,a*e),this.camera.updateProjectionMatrix();const r=n?this.activeWeapon.id==="sniper"?1.6:2.5:4.2,o=n?.82:.65;this.camDistance+=(r-this.camDistance)*Math.min(1,14*e),this.shoulderOffset+=(o-this.shoulderOffset)*Math.min(1,14*e);const l=Math.cos(this.pitch),c=Math.sin(this.pitch),h=Math.sin(this.yaw),d=Math.cos(this.yaw);vl.set(h*l*this.camDistance,c*this.camDistance+this.camHeight,d*l*this.camDistance),Wa.set(d,0,-h).multiplyScalar(this.shoulderOffset),Hs.copy(this.position),Hs.y+=1.45,Vs.copy(Hs).add(vl).add(Wa),Vs.y=Math.max(.65,Vs.y),this.currentCamPos.lerp(Vs,Math.min(1,22*e)),this.camera.position.copy(this.currentCamPos);const p=30;Xa.set(-h*l,-c,-d*l),qa.copy(Hs).addScaledVector(Wa,.5).addScaledVector(Xa,p),this.currentLookAt.lerp(qa,Math.min(1,28*e)),this.camera.lookAt(this.currentLookAt),this.aimPoint.copy(qa),this.forwardDir.copy(Xa)}applyAutoAimAssist(e,t){let n=null,s=.28;const a=this.camera.position;this.camera.getWorldDirection(_l);for(let r=0;r<e.length;r++){const o=e[r];if(!o.isAlive)continue;Si.copy(o.mesh.position),Si.y+=1,Si.sub(a);const l=Si.length();if(l>35||l<1)continue;Si.normalize();const c=_l.angleTo(Si);c<s&&(s=c,n=o)}if(n){const r=n.mesh.position,o=r.x-this.position.x,l=r.z-this.position.z;let h=Math.atan2(-o,-l)-this.yaw;for(;h<-Math.PI;)h+=Math.PI*2;for(;h>Math.PI;)h-=Math.PI*2;this.yaw+=h*Math.min(1,4*t)}}tryShoot(e){var o;const t=performance.now()*.001;if(t-this.lastFireTime<this.activeWeapon.fireRate||this.isReloading)return;if(this.lastFireTime=t,this.magazine<=0){Gm(),this.onDryFire&&this.onDryFire();return}this.magazine--,Hm(this.activeWeapon.sound),this.proceduralPlayer&&this.proceduralPlayer.triggerRecoil(this.activeWeapon.recoilKick),this.pitch-=this.activeWeapon.recoilKick*.035;let n;if(this.proceduralPlayer)n=this.proceduralPlayer.getMuzzleWorldPosition();else{const l=new P(Math.cos(this.yaw),0,-Math.sin(this.yaw)).multiplyScalar(.4);n=this.position.clone().add(new P(0,1.25,0)).add(l)}if(this.muzzleLight.position.copy(n),this.muzzleLight.intensity=4.5,this.muzzleFlashGroup){this.muzzleFlashGroup.position.copy(n),this.muzzleFlashGroup.rotation.set((Math.random()-.5)*.4,this.yaw+Math.PI,Math.random()*Math.PI*2);let l=1;this.activeWeapon.id==="rifle"?l=1.35:this.activeWeapon.id==="shotgun"?l=1.6:this.activeWeapon.id==="sniper"?l=1.85:this.activeWeapon.id==="smg"&&(l=1.15),this.muzzleFlashGroup.scale.setScalar(l),this.muzzleFlashGroup.visible=!0,this.muzzleFlashTimer=.05}const s=this.activeWeapon.pellets||1,a=(this.activeWeapon.spread||.02)*(this.character.spreadMultiplier||1);Gs.length=0;for(let l=0;l<e.length;l++){const c=e[l];c.isAlive&&c.hitCollider&&Gs.push(c.hitCollider)}let r=!1;for(let l=0;l<s;l++){const c=(Math.random()-.5)*a,h=(Math.random()-.5)*a;this.raycaster.setFromCamera(new Oe(c,h),this.camera);let d=null;if(Gs.length>0){const u=this.raycaster.intersectObjects(Gs,!1);if(u.length>0){const p=u[0];d=p.point;const g=(o=p.object.userData)==null?void 0:o.zombie;g&&g.isAlive&&(g.takeDamage(this.activeWeapon.damage,p.point),r=!0,this.onHit&&this.onHit(g,p.point))}}d||(d=this.raycaster.ray.origin.clone().addScaledVector(this.raycaster.ray.direction,this.activeWeapon.range||65)),this.onTracer&&this.onTracer(n,d,this.activeWeapon)}r&&Xm()}startReload(){this.isReloading||this.magazine>=this.magSize||this.reserveAmmo<=0||(this.isReloading=!0,this.reloadTimer=this.reloadDuration,Wm())}finishReload(){this.isReloading=!1;const e=this.magSize-this.magazine,t=Math.min(e,this.reserveAmmo);this.magazine+=t,this.reserveAmmo-=t}takeDamage(e){if(!this.isAlive()||this.invulnerableTimer>0)return;const t=e*this.damageResistance*this.difficultyReduction;this.health=Math.max(0,this.health-t),Ym(),this.onDamageTaken&&this.onDamageTaken(t,this.health)}isAlive(){return this.health>0}}class a0{constructor(e){this.scene=e,this.ammoPickups=[],this.healthPickups=[],this.ammoRespawnTime=14,this.onHealthPicked=null,this.colliders=[],this.createLights(),this.createIsland(),this.createCrashSite(),this.createCoverProps(),this.createLookoutPlatform(),this.createSurvivorCamp(),this.createTidalPool(),this.createNaturalVegetation(),this.createAmmoPickups(),this.spawnRoundHealthKits()}setAmmoRespawnTime(e){this.ammoRespawnTime=e||14}getColliders(){return this.colliders}createProceduralGrassTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d");t.fillStyle="#2A462B",t.fillRect(0,0,512,512);for(let s=0;s<700;s++){const a=Math.random()*512,r=Math.random()*512,o=6+Math.random()*20,l=Math.random();l<.4?t.fillStyle="rgba(28, 48, 26, 0.55)":l<.75?t.fillStyle="rgba(58, 86, 48, 0.45)":t.fillStyle="rgba(45, 38, 28, 0.38)",t.beginPath(),t.arc(a,r,o,0,Math.PI*2),t.fill()}for(let s=0;s<3600;s++){const a=Math.random()*512,r=Math.random()*512,o=3+Math.random()*8,l=(Math.random()-.5)*.8-Math.PI/2,c=Math.random();c<.4?t.strokeStyle="rgba(56, 102, 52, 0.65)":c<.8?t.strokeStyle="rgba(78, 128, 66, 0.55)":t.strokeStyle="rgba(34, 58, 32, 0.75)",t.lineWidth=1.3,t.beginPath(),t.moveTo(a,r),t.lineTo(a+Math.cos(l)*o,r+Math.sin(l)*o),t.stroke()}const n=new cs(e);return n.wrapS=Zn,n.wrapT=Zn,n.repeat.set(16,16),n}createProceduralSandTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d");t.fillStyle="#C8B89E",t.fillRect(0,0,512,512);for(let s=0;s<2e3;s++){const a=Math.random()*512,r=Math.random()*512,o=2+Math.random()*6;t.fillStyle=Math.random()<.5?"rgba(175, 155, 130, 0.45)":"rgba(215, 200, 175, 0.4)",t.beginPath(),t.arc(a,r,o,0,Math.PI*2),t.fill()}const n=new cs(e);return n.wrapS=Zn,n.wrapT=Zn,n.repeat.set(12,12),n}getTerrainHeight(e,t){let n=0;const s=e-24,a=t-28,r=s*s+a*a,o=26;if(r<o*o){const h=1-Math.sqrt(r)/o,d=(1-Math.cos(h*Math.PI))*.5;n+=d*5.4}const l=Math.hypot(e,t);if(l<52){const c=Math.max(0,1-l/52),h=(Math.sin(e*.09)*Math.cos(t*.09)*.28+Math.sin(e*.18+t*.14)*.14)*c;n+=h}return n}createLights(){const e=new Fm(16763016,2.5);e.position.set(48,26,-32),e.castShadow=!0,e.shadow.mapSize.width=2048,e.shadow.mapSize.height=2048,e.shadow.camera.near=1,e.shadow.camera.far=150,e.shadow.bias=-4e-4,e.shadow.radius=2;const t=58;e.shadow.camera.left=-t,e.shadow.camera.right=t,e.shadow.camera.top=t,e.shadow.camera.bottom=-t,this.scene.add(e);const n=new Om(6312555,.24);this.scene.add(n);const s=new Im(14846066,1712664,.38);this.scene.add(s)}createIsland(){const e=this.createProceduralGrassTexture(),t=this.createProceduralSandTexture(),n=new Pe(68,72,2.5,48),s=new Ee({map:t,roughness:.92,metalness:.05}),a=new A(n,s);a.position.y=-1.25,a.receiveShadow=!0,this.scene.add(a);const r=new Sn(112,112,64,64);r.rotateX(-Math.PI/2);const o=r.attributes.position;for(let f=0;f<o.count;f++){const w=o.getX(f),b=o.getZ(f),y=Math.hypot(w,b);if(y<=56)o.setY(f,this.getTerrainHeight(w,b)+.05);else{const U=Math.min(1,(y-56)/4);o.setY(f,(1-U)*.05)}}r.computeVertexNormals();const l=new Ee({map:e,roughness:.88,metalness:.04}),c=new A(r,l);c.receiveShadow=!0,this.scene.add(c);const h=new Sn(54,54,40,40);h.rotateX(-Math.PI/2);const d=h.attributes.position;for(let f=0;f<d.count;f++){const w=d.getX(f),b=d.getZ(f),y=w+24,U=b+28;d.setY(f,this.getTerrainHeight(y,U)+.06)}h.computeVertexNormals();const u=new Ee({map:e,roughness:.88,metalness:.04}),p=new A(h,u);p.position.set(24,0,28),p.receiveShadow=!0,p.castShadow=!0,this.scene.add(p);const g=new Sn(480,480),v=new Ee({color:1324088,roughness:.22,metalness:.35}),m=new A(g,v);m.rotation.x=-Math.PI/2,m.position.y=-.5,this.scene.add(m)}createCrashSite(){const e=new Ve;e.position.set(-36,.05,-14);const t=new Ee({color:4073240,roughness:.88,flatShading:!0}),n=new Ee({color:2764339,roughness:.5,metalness:.7}),s=new Ee({color:16720384,emissive:16716032,emissiveIntensity:2.2}),a=new A(new Pe(1.6,1.2,4.6,12,1,!1,0,Math.PI),t);a.rotation.z=Math.PI/2,a.rotation.y=.42,a.rotation.x=.32,a.position.set(0,.35,0),a.castShadow=!0,e.add(a);for(let d=-2;d<=2;d++){const u=new A(new Y(.12,.65,1.4),t);u.position.set(d*.72,.35,d%2===0?.25:-.25),u.rotation.z=.18*d,e.add(u)}const r=this.buildCrate(1.15);r.position.set(2.4,.55,1.2),r.rotation.y=.52,e.add(r);const o=new A(new Y(.48,.28,.32),n);o.position.set(1.4,.22,-1.1),e.add(o);const l=new A(new Pe(.015,.015,.75,6),n);l.position.set(1.52,.62,-1.1),l.rotation.z=-.28,e.add(l);const c=new A(new $t(.065,8,8),s);c.position.set(1.3,.4,-1),e.add(c);const h=new is(16720384,1.2,5);h.position.set(1.3,.55,-1),e.add(h),this.scene.add(e),this.colliders.push({x:-36,z:-14,radius:1.85}),this.colliders.push({x:-36+2.4,z:-14+1.2,radius:.95})}createCoverProps(){[{type:"crate",pos:[7.5,0,9.2],scale:1.25,rot:.15},{type:"crate",pos:[9.2,0,10.4],scale:.95,rot:-.35},{type:"crate",pos:[-11.8,0,7.5],scale:1.35,rot:.42},{type:"crate",pos:[13.5,0,-14.2],scale:1.15,rot:.28},{type:"crate",pos:[-15.2,0,-13.5],scale:1.25,rot:-.18},{type:"sandbags",pos:[-.5,0,13.8],rot:.18},{type:"sandbags",pos:[-9.8,0,-5.2],rot:-.55},{type:"sandbags",pos:[15.4,0,3.8],rot:1.05},{type:"barrel",pos:[5.8,0,-9.8]},{type:"barrel",pos:[6.9,0,-9.1]},{type:"barrel",pos:[-17.5,0,1.8]},{type:"barrel",pos:[2.2,0,-19.4]}].forEach(t=>{let n;switch(t.type){case"crate":n=this.buildCrate(t.scale||1),this.colliders.push({x:t.pos[0],z:t.pos[2],radius:.85*(t.scale||1)});break;case"sandbags":n=this.buildSandbags(),this.colliders.push({x:t.pos[0],z:t.pos[2],radius:1.25});break;case"barrel":n=this.buildBarrel(),this.colliders.push({x:t.pos[0],z:t.pos[2],radius:.5});break}n&&(n.position.set(t.pos[0],this.getTerrainHeight(t.pos[0],t.pos[2])+t.pos[1],t.pos[2]),t.rot&&(n.rotation.y=t.rot),this.scene.add(n))})}createLookoutPlatform(){const e=new Ve;e.position.set(24,5.4,28);const t=new Ee({color:7227178,roughness:.85,flatShading:!0}),n=new Ee({color:4730392,roughness:.9,flatShading:!0}),s=new A(new Y(4.2,.16,4.2),t);s.receiveShadow=!0,s.castShadow=!0,e.add(s),[[-1.9,-1.8,-1.9],[1.9,-1.8,-1.9],[-1.9,-1.8,1.9],[1.9,-1.8,1.9]].forEach(d=>{const u=new A(new Y(.24,4.2,.24),n);u.position.set(d[0],-2.1,d[2]),u.castShadow=!0,e.add(u),this.colliders.push({x:24+d[0],z:28+d[2],radius:.35})});const r=new A(new Y(4.2,.1,.1),t);r.position.set(0,.85,-2),e.add(r);const o=new A(new Y(.1,.1,4.2),t);o.position.set(2,.85,0),e.add(o);const l=new A(new Y(.1,.1,4.2),t);l.position.set(-2,.85,0),e.add(l);const c=new A(new Y(2,.1,.1),t);c.position.set(1,.85,2),e.add(c);const h=this.buildCrate(.75);h.position.set(-1.2,.45,-1.2),e.add(h),this.colliders.push({x:24-1.2,z:28-1.2,radius:.65}),this.scene.add(e)}createSurvivorCamp(){const e=new Ve;e.position.set(-26,.05,8);const t=new Ee({color:4737871,roughness:.92,flatShading:!0});for(let p=0;p<9;p++){const g=p/9*Math.PI*2,v=new A(new bi(.28,0),t);v.position.set(Math.cos(g)*1.2,.14,Math.sin(g)*1.2),v.rotation.set(Math.random(),Math.random(),Math.random()),v.castShadow=!0,e.add(v)}const n=new A(new ta(.95,12),new Ee({color:2236962,roughness:.95,flatShading:!0}));n.rotation.x=-Math.PI/2,n.position.y=.02,e.add(n);const s=new Ee({color:3022099,roughness:.9,flatShading:!0}),a=new A(new Pe(.08,.09,1.3,6),s);a.rotation.set(.2,.6,Math.PI/2),a.position.set(0,.12,0),e.add(a);const r=new A(new Pe(.07,.08,1.2,6),s);r.rotation.set(-.3,-.7,Math.PI/2),r.position.set(0,.15,0),e.add(r);const o=new is(16739115,.85,4);o.position.set(0,.3,0),e.add(o);const l=new Ee({color:6045736,roughness:.88,flatShading:!0}),c=new A(new Pe(.22,.22,2.2,8),l);c.rotation.z=Math.PI/2,c.position.set(0,.22,2.2),c.castShadow=!0,e.add(c);const h=new A(new Pe(.22,.22,1.8,8),l);h.rotation.x=Math.PI/2,h.position.set(-2.2,.22,0),h.castShadow=!0,e.add(h);const d=this.buildCrate(1.1);d.position.set(1.8,.55,-1.8),e.add(d);const u=this.buildCrate(.85);u.position.set(2,1.45,-1.8),e.add(u),this.scene.add(e),this.colliders.push({x:-26,z:8,radius:1.25}),this.colliders.push({x:-26,z:8+2.2,radius:.65}),this.colliders.push({x:-26-2.2,z:8,radius:.65}),this.colliders.push({x:-26+1.8,z:8-1.8,radius:.95})}createTidalPool(){const e=new Ve;e.position.set(-18,.06,-28);const t=new Ee({color:3707023,roughness:.12,metalness:.35,transparent:!0,opacity:.82}),n=new A(new ta(4.2,24),t);n.rotation.x=-Math.PI/2,e.add(n);const s=new Ee({color:4080971,roughness:.85,flatShading:!0});for(let a=0;a<14;a++){const r=a/14*Math.PI*2+Math.random()*.2,o=4.1+Math.random()*.5,l=.45+Math.random()*.45,c=new A(new bi(l,0),s);c.position.set(Math.cos(r)*o,l*.4,Math.sin(r)*o),c.rotation.set(Math.random(),Math.random(),Math.random()),c.castShadow=!0,e.add(c)}this.scene.add(e),this.colliders.push({x:-18,z:-28,radius:3.8})}createNaturalVegetation(){const e=(a,r)=>{if(Math.hypot(a,r)<8.5||Math.hypot(a,r)>58||Math.hypot(a-24,r-28)<9.5||Math.hypot(a- -26,r-8)<6.5||Math.hypot(a- -18,r- -28)<6.5||Math.hypot(a- -36,r- -14)<6)return!0;const o=[[12,15],[-15,12],[-18,-16],[15,-18]];for(const[h,d]of o)if(Math.hypot(a-h,r-d)<3.8)return!0;const l=Math.sin(a*.12)*3.5;if(Math.abs(r-l)<3.2&&Math.abs(a)<30)return!0;const c=Math.cos(r*.12)*3.5;return Math.abs(a-c)<3.2&&Math.abs(r)<30},t=[{cx:-25,cz:23,radius:13,count:8,types:["tall","tall","medium","short","medium","tall"]},{cx:26,cz:-22,radius:12,count:7,types:["tall","tall","medium","short","medium","tall"]},{cx:32,cz:6,radius:11,count:6,types:["medium","tall","short","medium","tall"]},{cx:-27,cz:-18,radius:10,count:6,types:["medium","tall","short","short","medium"]},{cx:7,cz:36,radius:10,count:5,types:["tall","medium","short","medium"]},{cx:10,cz:36,radius:9,count:5,types:["medium","tall","short","medium"]},{cx:-5,cz:-28,radius:9,count:5,types:["tall","medium","short","tall"]}],n=[];t.forEach(a=>{for(let r=0;r<a.count;r++){let o=0,l=!1;for(;o<25&&!l;){o++;const c=Math.random()*Math.PI*2,h=(Math.random()*.72+.28)*a.radius,d=a.cx+Math.cos(c)*h,u=a.cz+Math.sin(c)*h;if(e(d,u))continue;let p=!1;for(const w of n)if(Math.hypot(d-w[0],u-w[1])<3){p=!0;break}if(p)continue;const g=a.types[r%a.types.length],v=.85+Math.random()*.4,m=this.buildTreeVariant(g,v),f=this.getTerrainHeight(d,u);m.position.set(d,f,u),m.rotation.y=Math.random()*Math.PI*2,m.rotation.z=(Math.random()-.5)*.08,m.rotation.x=(Math.random()-.5)*.08,this.scene.add(m),n.push([d,u]),this.colliders.push({x:d,z:u,radius:.48}),l=!0}}}),[[-36,4],[36,-5],[-8,-34],[38,16],[-32,-6],[42,-14],[-12,34]].forEach(a=>{if(!e(a[0],a[1])){const r=this.buildTreeVariant("medium",.9+Math.random()*.3),o=this.getTerrainHeight(a[0],a[1]);r.position.set(a[0],o,a[1]),r.rotation.y=Math.random()*Math.PI*2,this.scene.add(r),n.push(a),this.colliders.push({x:a[0],z:a[1],radius:.48})}}),this.createInstancedGrass(n),this.createInstancedRocks(n),this.createInstancedBushes(n),this.createInstancedFallenLogs(n)}createInstancedGrass(e){const t=new At(.11,.6,4),n=new Ee({color:4095291,roughness:.9,flatShading:!0}),s=720,a=new zs(t,n,s);a.castShadow=!1,a.receiveShadow=!0;const r=new pt;let o=0;for(;o<s;){const l=Math.random()*Math.PI*2,c=9+Math.random()*38,h=Math.cos(l)*c,d=Math.sin(l)*c,u=this.getTerrainHeight(h,d)+.3;r.position.set(h,u,d),r.rotation.y=Math.random()*Math.PI*2,r.rotation.z=(Math.random()-.5)*.28;const p=.65+Math.random()*.65;r.scale.set(p,p*(.8+Math.random()*.4),p),r.updateMatrix(),a.setMatrixAt(o,r.matrix),o++}a.instanceMatrix.needsUpdate=!0,this.scene.add(a)}createInstancedRocks(e){const t=new bi(.48,0),n=new Ee({color:7499367,roughness:.92,flatShading:!0}),s=120,a=new zs(t,n,s);a.castShadow=!0,a.receiveShadow=!0;const r=new pt;for(let o=0;o<s;o++){let l,c;if(o<48&&e.length>0){const u=e[o%e.length],p=Math.random()*Math.PI*2,g=1.2+Math.random()*2.5;l=u[0]+Math.cos(p)*g,c=u[1]+Math.sin(p)*g}else{const u=Math.random()*Math.PI*2,p=26+Math.random()*20;l=Math.cos(u)*p,c=Math.sin(u)*p}const h=.55+Math.random()*.9,d=this.getTerrainHeight(l,c)+h*.42/2;r.position.set(l,d,c),r.rotation.set(Math.random()*2,Math.random()*Math.PI*2,Math.random()*2),r.scale.set(h*1.1,h*.65,h*.95),r.updateMatrix(),a.setMatrixAt(o,r.matrix)}a.instanceMatrix.needsUpdate=!0,this.scene.add(a)}createInstancedBushes(e){const t=new bi(.7,1),n=new Ee({color:2777904,roughness:.85,flatShading:!0}),s=80,a=new zs(t,n,s);a.castShadow=!0,a.receiveShadow=!0;const r=new pt;for(let o=0;o<s;o++){let l,c;if(e.length>0&&o<55){const u=e[o%e.length],p=Math.random()*Math.PI*2,g=1.8+Math.random()*3.5;l=u[0]+Math.cos(p)*g,c=u[1]+Math.sin(p)*g}else{const u=Math.random()*Math.PI*2,p=12+Math.random()*38;l=Math.cos(u)*p,c=Math.sin(u)*p}const h=.7+Math.random()*.65,d=this.getTerrainHeight(l,c)+h*.75/2;r.position.set(l,d,c),r.rotation.set(0,Math.random()*Math.PI*2,0),r.scale.set(h,h*.75,h),r.updateMatrix(),a.setMatrixAt(o,r.matrix)}a.instanceMatrix.needsUpdate=!0,this.scene.add(a)}createInstancedFallenLogs(e){const t=new Pe(.18,.24,2.6,7),n=new Ee({color:4732198,roughness:.9,flatShading:!0}),s=35,a=new zs(t,n,s);a.castShadow=!0,a.receiveShadow=!0;const r=new pt;for(let o=0;o<s;o++){const l=e[o*3%e.length]||[0,0],c=Math.random()*Math.PI*2,h=2+Math.random()*3.5,d=l[0]+Math.cos(c)*h,u=l[1]+Math.sin(c)*h,p=this.getTerrainHeight(d,u)+.16;r.position.set(d,p,u),r.rotation.set(0,Math.random()*Math.PI*2,Math.PI/2);const g=.85+Math.random()*.35;r.scale.set(g,g,g),r.updateMatrix(),a.setMatrixAt(o,r.matrix)}a.instanceMatrix.needsUpdate=!0,this.scene.add(a)}buildTreeVariant(e="medium",t=1){const n=new Ve,s=new Ee({color:3548440,roughness:.94,metalness:.04}),a=new Ee({color:2250024,roughness:.85,metalness:.05}),r=new Ee({color:1326362,roughness:.88,metalness:.05}),o=new Ee({color:4027698,roughness:.82,metalness:.05}),l=new Ee({color:5408826,roughness:.8,metalness:.06});if(e==="tall"){const h=new A(new Pe(.48,.82,4.5,9),s);h.position.y=2.25,h.castShadow=!0,h.receiveShadow=!0,n.add(h);const d=new A(new Pe(.2,.48,11.5,8),s);d.position.y=9.8,d.castShadow=!0,d.receiveShadow=!0,n.add(d);const u=new A(new At(4.6,4.2,9),r);u.position.y=9.2,u.castShadow=!0,u.receiveShadow=!0,n.add(u);const p=new A(new At(3.9,3.8,9),a);p.position.y=11.8,p.castShadow=!0,p.receiveShadow=!0,n.add(p);const g=new A(new At(3.1,3.4,8),o);g.position.y=14.2,g.castShadow=!0,g.receiveShadow=!0,n.add(g);const v=new A(new At(2.3,3,7),a);v.position.y=16.2,v.castShadow=!0,v.receiveShadow=!0,n.add(v);const m=new A(new At(1.3,2.4,6),l);m.position.y=18,m.castShadow=!0,m.receiveShadow=!0,n.add(m)}else if(e==="short"){const h=new A(new Pe(.38,.65,4,8),s);h.position.y=2,h.rotation.z=.08,h.castShadow=!0,h.receiveShadow=!0,n.add(h);const d=new A(new Pe(.24,.38,3.8,7),s);d.position.set(.25,4.8,0),d.rotation.z=-.12,d.castShadow=!0,d.receiveShadow=!0,n.add(d);const u=new A(new vn(2.6,1),r);u.position.set(-.5,6.2,.4),u.scale.set(1.2,.85,1.15),u.castShadow=!0,u.receiveShadow=!0,n.add(u);const p=new A(new vn(2.8,1),a);p.position.set(.6,6.8,-.3),p.scale.set(1.25,.9,1.2),p.castShadow=!0,p.receiveShadow=!0,n.add(p);const g=new A(new vn(2,1),o);g.position.set(.1,8.2,.1),g.scale.set(1.1,.95,1.1),g.castShadow=!0,g.receiveShadow=!0,n.add(g)}else{const h=new A(new Pe(.42,.72,8,9),s);h.position.y=4,h.castShadow=!0,h.receiveShadow=!0,n.add(h);const d=new A(new Pe(.22,.32,3.2,6),s);d.position.set(-.8,7.2,.4),d.rotation.set(.2,0,.65),d.castShadow=!0,d.receiveShadow=!0,n.add(d);const u=new A(new Pe(.2,.3,3,6),s);u.position.set(.9,7.4,-.3),u.rotation.set(-.25,0,-.6),u.castShadow=!0,u.receiveShadow=!0,n.add(u);const p=new A(new vn(3.6,1),a);p.position.set(0,9.4,0),p.scale.set(1.25,.9,1.25),p.castShadow=!0,p.receiveShadow=!0,n.add(p);const g=new A(new vn(2.8,1),r);g.position.set(-2,8.6,.8),g.scale.set(1.15,.85,1.15),g.castShadow=!0,g.receiveShadow=!0,n.add(g);const v=new A(new vn(2.7,1),o);v.position.set(2.1,8.8,-.7),v.scale.set(1.15,.88,1.15),v.castShadow=!0,v.receiveShadow=!0,n.add(v);const m=new A(new vn(2.3,1),l);m.position.set(.2,11.4,.1),m.scale.set(1.1,.95,1.1),m.castShadow=!0,m.receiveShadow=!0,n.add(m)}const c=t||1;return n.scale.set(c,c,c),n}buildCrate(e=1){const t=new Y(1.2*e,1.2*e,1.2*e),n=new Ee({color:9132587,roughness:.8,flatShading:!0}),s=new A(t,n);return s.position.y=1.2*e/2,s.castShadow=!0,s.receiveShadow=!0,s}buildSandbags(){const e=new Ve,t=new Ee({color:12890248,roughness:.9});for(let n=0;n<2;n++)for(let s=0;s<3;s++){const a=new A(new Y(.9,.35,.5),t);a.position.set((s-1)*.85,n*.35+.18,0),a.rotation.y=(Math.random()-.5)*.1,a.castShadow=!0,e.add(a)}return e}buildBarrel(){const e=new Pe(.42,.42,1.25,12),t=new Ee({color:12671546,metalness:.4,roughness:.5}),n=new A(e,t);return n.position.y=.625,n.castShadow=!0,n}createAmmoPickups(){[[12,0,15],[-15,0,12],[-18,0,-16],[15,0,-18]].forEach(t=>{const n=this.getTerrainHeight(t[0],t[2]),s=new Ve;s.position.set(t[0],n+.35,t[2]);const a=new A(new Y(.8,.45,.6),new Ee({color:16755200,emissive:14518272,emissiveIntensity:.5,metalness:.5,roughness:.3}));s.add(a);const r=new is(16755200,1.5,4);r.position.y=.6,s.add(r),this.scene.add(s),this.ammoPickups.push({group:s,position:new P(t[0],n,t[2]),isActive:!0,respawnTimer:0})})}spawnRoundHealthKits(){this.healthPickups.forEach(s=>{this.scene.remove(s.group)}),this.healthPickups=[];const t=[[-10,0,-12],[14,0,8],[-16,0,6],[8,0,-16],[0,0,20],[-8,0,18],[24,0,28],[-26,0,8]].sort(()=>Math.random()-.5),n=1+(Math.random()<.6?1:0);for(let s=0;s<n;s++){const a=t[s],r=this.getTerrainHeight(a[0],a[2]),o=this.buildHealthKitMesh();o.position.set(a[0],r+.45,a[2]),this.scene.add(o),this.healthPickups.push({group:o,position:new P(a[0],r,a[2]),isActive:!0})}}buildHealthKitMesh(){const e=new Ve;e.name="health-kit-pickup";const t=new Y(.7,.4,.48),n=new Ee({color:16119802,roughness:.4,metalness:.15}),s=new A(t,n);s.castShadow=!0,e.add(s);const a=new Ee({color:15022389,roughness:.35,metalness:.2}),r=new A(new Y(.08,.12,.5),a);r.position.set(-.35,0,0),e.add(r);const o=new A(new Y(.08,.12,.5),a);o.position.set(.35,0,0),e.add(o);const l=new A(new Y(.32,.03,.1),a);l.position.set(0,.21,0),e.add(l);const c=new A(new Y(.1,.03,.32),a);c.position.set(0,.21,0),e.add(c);const h=new A(new Y(.24,.08,.02),a);h.position.set(0,0,.25),e.add(h);const d=new A(new Y(.08,.24,.02),a);d.position.set(0,0,.25),e.add(d);const u=new is(65416,1.4,4.5);return u.position.y=.5,e.add(u),e}onNewRound(e){this.spawnRoundHealthKits()}update(e,t){const n=performance.now()*.001;this.ammoPickups.forEach(s=>{if(!s.isActive){s.respawnTimer-=e,s.respawnTimer<=0&&(s.isActive=!0,s.group.visible=!0);return}s.group.rotation.y+=e*1.5,s.group.position.y=s.position.y+.35+Math.sin(n*3)*.08,s.position.distanceTo(t.position)<2&&(s.isActive=!1,s.group.visible=!1,s.respawnTimer=this.ammoRespawnTime,t.addAmmo(30),$m())});for(let s=this.healthPickups.length-1;s>=0;s--){const a=this.healthPickups[s];if(a.isActive&&(a.group.rotation.y+=e*1.2,a.group.position.y=a.position.y+.45+Math.sin(n*2.5+a.position.x)*.09,a.position.distanceTo(t.position)<2&&t.health<t.maxHealth)){a.isActive=!1,this.scene.remove(a.group),this.healthPickups.splice(s,1);const r=t.addHealth(35);Zm(),this.onHealthPicked&&this.onHealthPicked(r)}}}}const Ot={IDLE:"idle",CHASE:"chase",ATTACK:"attack",STAGGER:"stagger",DEAD:"dead"},Mi=new P,xl=new P;class Sl{constructor(e,t,n=1,s=100,a=15,r=!1,o=null){if(this.scene=e,this.isBoss=r,this.type=r?"boss":o||"normal",this.id="zombie_"+Math.random().toString(36).substr(2,9)+"_"+Date.now(),this.xpReward=lc[this.type]||25,this.xpAwarded=!1,this.onDeath=null,this.state=Ot.IDLE,this.health=s,this.maxHealth=s,this.isAlive=!0,this.speedMultiplier=n,this.isBoss?(this.baseSpeed=2,this.speed=this.baseSpeed,this.detectionRadius=85,this.attackDistance=3.4,this.attackCooldown=1.35,this.attackTimer=1.2,this.attackDamage=a||40):(this.baseSpeed=4.4*n,this.speed=this.baseSpeed,this.detectionRadius=45,this.attackDistance=1.7,this.attackCooldown=1,this.attackTimer=1,this.attackDamage=a),this.staggerTimer=0,this.staggerDuration=this.isBoss?.08:.22,this.deathTimer=0,this.isBoss)this.proceduralZombie=n0({scale:2.85});else{let l=.98+Math.random()*.12;this.type==="heavy"?l=1.25:this.type==="fast"?l=.9:this.type==="elite"&&(l=1.15),this.proceduralZombie=t0({scale:l})}this.mesh=this.proceduralZombie.mesh,this.mesh.position.copy(t),this.mesh.position.y=0,this.scene.add(this.mesh),this.hitCollider=this.mesh.hitCollider,this.hitCollider&&(this.hitCollider.userData.zombie=this),this.createHealthBar(),this.onStateChange=null}createHealthBar(){const e=document.createElement("canvas");e.width=256,e.height=64,this.hbCanvas=e,this.hbCtx=e.getContext("2d"),this.hbTexture=new cs(e);const t=new sc({map:this.hbTexture,transparent:!0,depthTest:!1});this.healthBarSprite=new Pm(t),this.isBoss?(this.healthBarSprite.scale.set(4.2,1.05,1),this.healthBarSprite.position.set(0,6.4,0)):(this.healthBarSprite.scale.set(1.5,.38,1),this.healthBarSprite.position.set(0,2.25,0)),this.mesh.add(this.healthBarSprite),this.renderHealthBar()}renderHealthBar(){if(!this.hbCtx)return;const e=this.hbCtx,t=this.hbCanvas.width,n=this.hbCanvas.height;e.clearRect(0,0,t,n);const s=Math.max(0,Math.min(1,this.health/this.maxHealth));if(e.fillStyle="rgba(15, 18, 22, 0.88)",e.strokeStyle=this.isBoss?"#FF2222":"rgba(255, 255, 255, 0.45)",e.lineWidth=this.isBoss?4:2,e.beginPath(),e.roundRect(8,22,t-16,32,6),e.fill(),e.stroke(),s>0){const r=Math.max(4,(t-20)*s),o=e.createLinearGradient(10,0,t-10,0);this.isBoss?(o.addColorStop(0,"#FF1111"),o.addColorStop(.7,"#FF5500"),o.addColorStop(1,"#FFAA00")):(o.addColorStop(0,s>.4?"#00E676":"#FF5252"),o.addColorStop(1,s>.4?"#69F0AE":"#FF1744")),e.fillStyle=o,e.beginPath(),e.roundRect(10,24,r,28,4),e.fill()}e.font=this.isBoss?"bold 22px sans-serif":"bold 17px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillStyle=this.isBoss?"#FFD700":this.type==="elite"?"#FFD54F":"#FFFFFF",e.shadowColor="rgba(0, 0, 0, 0.9)",e.shadowBlur=4;let a="Zombie";this.isBoss?a="★ BOSS ZOMBIE ★":this.type==="elite"?a="⚡ ELITE ZOMBIE ⚡":this.type==="heavy"?a="■ HEAVY ZOMBIE ■":this.type==="fast"&&(a="» SPRINTER ZOMBIE «"),e.fillText(a,t/2,12),this.hbTexture.needsUpdate=!0}update(e,t,n=null){if(!this.isAlive){this.state===Ot.DEAD&&(this.deathTimer+=e,this.mesh.position.y-=e*1.5,this.mesh.scale.multiplyScalar(Math.max(0,1-e*1.5)),this.deathTimer>1.2&&this.destroy());return}const s=n!=null&&n.getTerrainHeight?n.getTerrainHeight(this.mesh.position.x,this.mesh.position.z):0;this.mesh.position.y=s;const a=this.mesh.position.distanceTo(t.position);switch(this.attackTimer>0&&(this.attackTimer-=e),this.state){case Ot.IDLE:a<=this.detectionRadius&&this.setState(Ot.CHASE);break;case Ot.CHASE:if(this.faceTarget(t.position),a<=this.attackDistance)this.setState(Ot.ATTACK);else if(Mi.copy(t.position).sub(this.mesh.position),Mi.y=0,Mi.normalize(),this.mesh.position.addScaledVector(Mi,this.speed*e),n&&n.getColliders){const r=n.getColliders(),o=this.isBoss?1:.45;for(let l=0;l<r.length;l++){const c=r[l],h=this.mesh.position.x-c.x,d=this.mesh.position.z-c.z,u=h*h+d*d,p=o+c.radius;if(u<p*p&&u>1e-4){const g=Math.sqrt(u),v=p-g;this.mesh.position.x+=h/g*v,this.mesh.position.z+=d/g*v}}}break;case Ot.ATTACK:this.faceTarget(t.position),a<=this.attackDistance+.4?this.attackTimer<=0&&(this.attackTimer=this.attackCooldown,t.takeDamage(this.attackDamage),Mi.copy(t.position).sub(this.mesh.position).normalize(),this.mesh.position.addScaledVector(Mi,this.isBoss?.35:.22)):this.setState(Ot.CHASE);break;case Ot.STAGGER:this.staggerTimer-=e,this.staggerTimer<=0&&(this.proceduralZombie.materials&&this.proceduralZombie.originalColors&&this.proceduralZombie.materials.forEach((r,o)=>{this.proceduralZombie.originalColors[o]&&r.color.setHex(this.proceduralZombie.originalColors[o])}),this.setState(Ot.CHASE));break}this.proceduralZombie&&this.proceduralZombie.update(this.state,performance.now()*.001,this.speedMultiplier)}faceTarget(e){const t=e.x-this.mesh.position.x,n=e.z-this.mesh.position.z;this.mesh.rotation.y=Math.atan2(t,n)+Math.PI}setState(e){this.state!==e&&(this.state=e,e===Ot.ATTACK&&this.attackTimer<.4&&(this.attackTimer=.4),this.onStateChange&&this.onStateChange(e))}takeDamage(e,t,n={}){if(!this.isAlive)return;this.health=Math.max(0,this.health-e),this.renderHealthBar(),this.setState(Ot.STAGGER),this.staggerTimer=this.staggerDuration,this.proceduralZombie&&this.proceduralZombie.materials&&this.proceduralZombie.materials.forEach(o=>o.color.setHex(16777215));const s=this.isBoss?.08:this.type==="heavy"?.18:.35,a=Math.sin(this.mesh.rotation.y),r=Math.cos(this.mesh.rotation.y);xl.set(a,0,r),this.mesh.position.addScaledVector(xl,s),this.health<=0&&this.die(n)}die(e={}){this.isAlive&&(this.isAlive=!1,this.setState(Ot.DEAD),this.healthBarSprite&&(this.healthBarSprite.visible=!1),this.hitCollider&&(this.hitCollider.visible=!1,this.hitCollider.userData.zombie=null),qm(),this.mesh.rotation.x=Math.PI/2.3,this.xpAwarded||(this.xpAwarded=!0,this.onDeath&&this.onDeath(this,e)))}destroy(){this.healthBarSprite&&(this.healthBarSprite.visible=!1),this.hitCollider&&(this.hitCollider.userData.zombie=null),this.scene.remove(this.mesh)}}const Ni={easy:{id:"easy",name:"Casual Survivor",label:"[ EASY ]",description:"Slower zombies, weaker hordes, high player endurance. Perfect for relaxed shooting.",zombieSpeedMultiplier:.6,zombieHealth:35,zombieAttackDamage:8,maxActiveZombies:5,spawnInterval:5,waveCounts:[4,6,8,10,14],playerHealth:150,damageReduction:.5,magSize:60,startingMag:60,startingReserve:240,ammoRespawnTime:8},medium:{id:"medium",name:"Balanced",label:"[ MEDIUM ]",description:"Classic zombie wave survival. Requires good aim and movement.",zombieSpeedMultiplier:1,zombieHealth:70,zombieAttackDamage:15,maxActiveZombies:10,spawnInterval:3,waveCounts:[5,8,12,16,22],playerHealth:100,damageReduction:1,magSize:30,startingMag:30,startingReserve:120,ammoRespawnTime:14},hard:{id:"hard",name:"Nightmare",label:"[ HARD ]",description:"Relentless sprinting hordes, high lethal damage, scarce ammo. Only for veteran survivors.",zombieSpeedMultiplier:1.95,zombieHealth:110,zombieAttackDamage:25,maxActiveZombies:18,spawnInterval:2,waveCounts:[8,14,20,26,34],playerHealth:80,damageReduction:1,magSize:30,startingMag:30,startingReserve:90,ammoRespawnTime:24}},Bt={PRE_GAME:"pre_game",ACTIVE:"active",BREATHER:"breather",VICTORY:"victory",GAME_OVER:"game_over"};class r0{constructor(e,t){this.scene=e,this.player=t,this.currentWave=1,this.maxWaves=5,this.state=Bt.PRE_GAME,this.difficulty=Ni.medium,this.zombies=[],this._activeZombiesCache=[],this.totalZombiesKilled=0,this.startTime=0,this.survivedSeconds=0,this.pendingWaveSpawns=0,this.totalWaveZombies=0,this.spawnTimer=0,this.breatherTimer=0,this.breatherDuration=3.5,this.isStoryPaused=!1,this.onWaveBanner=null,this.onWaveChange=null,this.onRoundStart=null,this.onWaveCleared=null,this.onZombieKill=null,this.onVictory=null,this.onGameOver=null}applyDifficulty(e){this.difficulty=e||Ni.medium}start(){this.currentWave=1,this.totalZombiesKilled=0,this.startTime=performance.now(),this.state=Bt.ACTIVE,this.startWave(this.currentWave)}determineZombieType(e){const t=Math.random();return e===1?t<.2?"fast":"normal":e===2?t<.25?"fast":t<.45?"heavy":"normal":e===3?t<.15?"elite":t<.4?"heavy":t<.7?"fast":"normal":e===4?t<.28?"elite":t<.55?"heavy":t<.82?"fast":"normal":t<.4?"elite":t<.75?"heavy":"fast"}startWave(e){this.currentWave=e;const n=(this.difficulty.waveCounts||[5,8,12,16,22])[e-1]||15;this.pendingWaveSpawns=n,this.totalWaveZombies=n,this.spawnTimer=0,this.bossSpawned=!1,oc(),this.onRoundStart&&this.onRoundStart(e),e===this.maxWaves?(this.onWaveBanner&&this.onWaveBanner("FINAL ROUND: BOSS ZOMBIE","Defeat the behemoth to survive!"),this.spawnBossZombie(),this.bossSpawned=!0):this.onWaveBanner&&this.onWaveBanner(`WAVE ${e} INCOMING`,`${n} zombies inbound`);const s=Math.min(this.pendingWaveSpawns,Math.min(3,this.difficulty.maxActiveZombies));for(let a=0;a<s;a++)this.spawnSingleZombie(),this.pendingWaveSpawns--;this.onWaveChange&&this.onWaveChange(this.currentWave,this.getRemainingCount())}spawnBossZombie(){let e=0,t=0;const n=26;for(let r=0;r<10;r++){const o=Math.random()*Math.PI*2,l=32+Math.random()*12;e=this.player.position.x+Math.cos(o)*l,t=this.player.position.z+Math.sin(o)*l;const c=Math.hypot(e,t);if(c>56&&(e=e/c*52,t=t/c*52),Math.hypot(e-this.player.position.x,t-this.player.position.z)>=n)break}const s=Math.round(1600*(this.difficulty.id==="hard"?1.25:this.difficulty.id==="easy"?.75:1)),a=new Sl(this.scene,new P(e,0,t),.45,s,40,!0,"boss");a.onDeath=(r,o)=>{this.onZombieKill&&this.onZombieKill(r,o)},this.zombies.push(a)}spawnSingleZombie(){let e=0,t=0;const n=22;for(let c=0;c<10;c++){const h=Math.random()*Math.PI*2,d=24+Math.random()*16;e=this.player.position.x+Math.cos(h)*d,t=this.player.position.z+Math.sin(h)*d;const u=Math.hypot(e,t);if(u>58&&(e=e/u*54,t=t/u*54),Math.hypot(e-this.player.position.x,t-this.player.position.z)>=n)break}const s=this.determineZombieType(this.currentWave);let a=this.difficulty.zombieSpeedMultiplier,r=this.difficulty.zombieHealth,o=this.difficulty.zombieAttackDamage;s==="fast"?(a*=1.35,r=Math.round(r*.75),o=Math.round(o*.85)):s==="heavy"?(a*=.75,r=Math.round(r*2.2),o=Math.round(o*1.4)):s==="elite"&&(a*=1.15,r=Math.round(r*3),o=Math.round(o*1.6));const l=new Sl(this.scene,new P(e,0,t),a,r,o,!1,s);l.onDeath=(c,h)=>{this.onZombieKill&&this.onZombieKill(c,h)},this.zombies.push(l)}update(e,t=null){if(this.state===Bt.PRE_GAME||this.isStoryPaused)return;if(this.state!==Bt.GAME_OVER&&this.state!==Bt.VICTORY&&(this.survivedSeconds=(performance.now()-this.startTime)/1e3),!this.player.isAlive()&&this.state!==Bt.GAME_OVER){this.state=Bt.GAME_OVER,this.onGameOver&&this.onGameOver({wavesSurvived:this.currentWave-1,zombiesKilled:this.totalZombiesKilled,timeSurvived:this.formatTime(this.survivedSeconds),difficulty:this.difficulty.name});return}this.state===Bt.ACTIVE&&this.pendingWaveSpawns>0&&(this.spawnTimer-=e,this.spawnTimer<=0&&this.getActiveZombies().length<this.difficulty.maxActiveZombies&&(this.spawnSingleZombie(),this.pendingWaveSpawns--,this.spawnTimer=this.difficulty.spawnInterval,this.onWaveChange&&this.onWaveChange(this.currentWave,this.getRemainingCount())));for(let s=this.zombies.length-1;s>=0;s--){const a=this.zombies[s];a.update(e,this.player,t),!a.isAlive&&a.deathTimer>1.2&&(this.totalZombiesKilled++,this.zombies.splice(s,1),this.onWaveChange&&this.onWaveChange(this.currentWave,this.getRemainingCount()))}const n=this.getRemainingCount();this.state===Bt.ACTIVE?n===0&&(this.currentWave>=this.maxWaves?(this.state=Bt.VICTORY,this.onVictory&&this.onVictory({wavesSurvived:this.maxWaves,zombiesKilled:this.totalZombiesKilled,timeSurvived:this.formatTime(this.survivedSeconds),difficulty:this.difficulty.name})):(this.state=Bt.BREATHER,this.breatherTimer=999,this.onWaveBanner&&this.onWaveBanner("WAVE CLEARED","Tactical Intel Incoming..."),this.onWaveCleared?(this.isStoryPaused=!0,this.onWaveCleared(this.currentWave)):this.resumeBreatherAfterStory())):this.state===Bt.BREATHER&&(this.breatherTimer-=e,this.breatherTimer<=0&&(this.state=Bt.ACTIVE,this.startWave(this.currentWave+1)))}resumeBreatherAfterStory(){this.isStoryPaused=!1,this.breatherTimer=2.5,this.onWaveBanner&&this.onWaveBanner("INCOMING WAVE","Next attack starting soon...")}getRemainingCount(){let e=0;for(let t=0;t<this.zombies.length;t++)this.zombies[t].isAlive&&e++;return e+this.pendingWaveSpawns}getActiveZombies(){this._activeZombiesCache.length=0;for(let e=0;e<this.zombies.length;e++)this.zombies[e].isAlive&&this._activeZombiesCache.push(this.zombies[e]);return this._activeZombiesCache}formatTime(e){const t=Math.floor(e/60),n=Math.floor(e%60);return`${t}:${n<10?"0":""}${n}`}cleanup(){this.zombies.forEach(e=>e.destroy()),this.zombies=[],this.pendingWaveSpawns=0}}const Ml=new P,wl=new P,Ws=new P;class o0{constructor(e){this.canvas=e,this.moveX=0,this.moveZ=0,this.yawDelta=0,this.pitchDelta=0,this.isFiring=!1,this.fireRequested=!1,this.reloadRequested=!1,this.jumpRequested=!1,this.isAiming=!1,this.weaponSwitchRequested=null;const t=parseFloat(localStorage.getItem("aftertrace_sensitivity"));this.sensitivity=!isNaN(t)&&t>=.2&&t<=3?t:1,this.autoAimEnabled=!0,this.isTouchDevice="ontouchstart"in window||navigator.maxTouchPoints>0||window.matchMedia("(pointer: coarse)").matches,this.isTouchDevice&&document.body.classList.add("touch-mode"),this.isPointerLocked=!1,this.isMouseDown=!1,this.touchJoystickId=null,this.touchAimId=null,this.joystickOrigin={x:0,y:0},this.joystickPos={x:0,y:0},this.joystickRadius=55,this.lastTouchAim={x:0,y:0},this.keys={},this.initDesktop(),this.initMobile()}setSensitivity(e){this.sensitivity=Math.max(.2,Math.min(3,e));try{localStorage.setItem("aftertrace_sensitivity",this.sensitivity.toFixed(2))}catch{}}consumeJump(){const e=this.jumpRequested;return this.jumpRequested=!1,e}consumeWeaponSwitch(){const e=this.weaponSwitchRequested;return this.weaponSwitchRequested=null,e}initDesktop(){window.addEventListener("keydown",e=>{this.keys[e.code]=!0,e.code==="KeyR"&&(this.reloadRequested=!0),e.code==="Space"&&(this.jumpRequested=!0,(!e.target||!e.target.matches("input, textarea"))&&e.preventDefault()),e.code==="Digit1"?this.weaponSwitchRequested="rifle":e.code==="Digit2"?this.weaponSwitchRequested="pistol":e.code==="Digit3"?this.weaponSwitchRequested="shotgun":e.code==="Digit4"?this.weaponSwitchRequested="smg":e.code==="Digit5"?this.weaponSwitchRequested="sniper":e.code==="KeyQ"&&(this.weaponSwitchRequested="next")}),window.addEventListener("keyup",e=>{this.keys[e.code]=!1}),window.addEventListener("wheel",e=>{this.isPointerLocked&&(this.weaponSwitchRequested=e.deltaY<0?"prev":"next")},{passive:!0}),this.canvas.addEventListener("click",()=>{var e,t;this.isPointerLocked||(t=(e=this.canvas).requestPointerLock)==null||t.call(e)}),document.addEventListener("pointerlockchange",()=>{this.isPointerLocked=document.pointerLockElement===this.canvas}),window.addEventListener("contextmenu",e=>{e.preventDefault()}),window.addEventListener("mousemove",e=>{const t=this.isAiming?.55:1;this.isPointerLocked?(this.yawDelta-=e.movementX*.0019*this.sensitivity*t,this.pitchDelta+=e.movementY*.0019*this.sensitivity*t):this.isMouseDown&&!this.isTouchDevice&&(this.yawDelta-=e.movementX*.0024*this.sensitivity*t,this.pitchDelta+=e.movementY*.0024*this.sensitivity*t)}),window.addEventListener("mousedown",e=>{e.button===0?(this.isMouseDown=!0,this.isFiring=!0,this.fireRequested=!0):e.button===2&&(this.isAiming=!0)}),window.addEventListener("mouseup",e=>{e.button===0?(this.isMouseDown=!1,this.isFiring=!1):e.button===2&&(this.isAiming=!1)})}initMobile(){const e=document.getElementById("joystick-base"),t=document.getElementById("joystick-thumb"),n=document.getElementById("mobile-fire-btn"),s=document.getElementById("mobile-reload-btn"),a=document.getElementById("mobile-jump-btn"),r=document.getElementById("mobile-aim-btn"),o=document.getElementById("mobile-control-hint"),l=()=>{o&&(o.style.opacity="0",setTimeout(()=>o.remove(),400)),window.removeEventListener("touchstart",l)};window.addEventListener("touchstart",l,{passive:!0}),window.addEventListener("touchstart",h=>{for(let d=0;d<h.changedTouches.length;d++){const u=h.changedTouches[d],p=window.innerWidth/2,g=u.target;g&&g.closest&&(g.closest("#mobile-fire-btn")||g.closest("#mobile-aim-btn")||g.closest("#mobile-reload-btn")||g.closest("#mobile-jump-btn")||g.closest("#weapon-select-btn")||g.closest("#sound-toggle-btn")||g.closest("#aim-assist-toggle")||g.closest("#sensitivity-toggle")||g.closest("#game-over-screen")||g.closest("#title-screen"))||(u.clientX<p&&this.touchJoystickId===null?(this.touchJoystickId=u.identifier,this.joystickOrigin={x:u.clientX,y:u.clientY},this.joystickPos={x:u.clientX,y:u.clientY},e&&t&&(e.style.display="block",e.style.left=`${u.clientX}px`,e.style.top=`${u.clientY}px`,t.style.transform="translate(0px, 0px)")):u.clientX>=p&&this.touchAimId===null&&(this.touchAimId=u.identifier,this.lastTouchAim={x:u.clientX,y:u.clientY}))}},{passive:!1}),window.addEventListener("touchmove",h=>{for(let d=0;d<h.changedTouches.length;d++){const u=h.changedTouches[d];if(u.identifier===this.touchJoystickId){const p=u.clientX-this.joystickOrigin.x,g=u.clientY-this.joystickOrigin.y,v=Math.hypot(p,g),m=Math.atan2(g,p),f=Math.min(v,this.joystickRadius),w=Math.cos(m)*f/this.joystickRadius,b=Math.sin(m)*f/this.joystickRadius;if(this.moveX=w,this.moveZ=b,t){const y=Math.cos(m)*f,U=Math.sin(m)*f;t.style.transform=`translate(${y}px, ${U}px)`}}else if(u.identifier===this.touchAimId){const p=u.clientX-this.lastTouchAim.x,g=u.clientY-this.lastTouchAim.y,v=this.isAiming?.6:1;this.yawDelta-=p*.0035*this.sensitivity*v,this.pitchDelta+=g*.0035*this.sensitivity*v,this.lastTouchAim={x:u.clientX,y:u.clientY}}}},{passive:!1});const c=h=>{for(let d=0;d<h.changedTouches.length;d++){const u=h.changedTouches[d];u.identifier===this.touchJoystickId?(this.touchJoystickId=null,this.moveX=0,this.moveZ=0,e&&t&&(e.style.display="none",t.style.transform="translate(0px, 0px)")):u.identifier===this.touchAimId&&(this.touchAimId=null)}};window.addEventListener("touchend",c,{passive:!0}),window.addEventListener("touchcancel",c,{passive:!0}),n&&(n.addEventListener("touchstart",h=>{h.preventDefault(),h.stopPropagation(),this.isFiring=!0,this.fireRequested=!0}),n.addEventListener("touchend",h=>{h.preventDefault(),h.stopPropagation(),this.isFiring=!1})),s&&s.addEventListener("touchstart",h=>{h.preventDefault(),h.stopPropagation(),this.reloadRequested=!0}),a&&a.addEventListener("touchstart",h=>{h.preventDefault(),h.stopPropagation(),this.jumpRequested=!0}),r&&r.addEventListener("touchstart",h=>{h.preventDefault(),h.stopPropagation(),this.isAiming=!this.isAiming,this.isAiming?r.classList.add("aiming"):r.classList.remove("aiming")})}update(e){let t=this.moveX,n=this.moveZ,s=0,a=0;(this.keys.KeyW||this.keys.ArrowUp)&&(a-=1),(this.keys.KeyS||this.keys.ArrowDown)&&(a+=1),(this.keys.KeyA||this.keys.ArrowLeft)&&(s-=1),(this.keys.KeyD||this.keys.ArrowRight)&&(s+=1);const r=Math.hypot(s,a);r>0&&(t=s/r,n=a/r),Ml.set(-Math.sin(e),0,-Math.cos(e)),wl.set(Math.cos(e),0,-Math.sin(e)),Ws.set(0,0,0),Ws.addScaledVector(wl,t),Ws.addScaledVector(Ml,-n);const o=t*t+n*n>.001;return{direction:Ws,isMoving:o}}consumeFire(){const e=this.fireRequested;return this.fireRequested=!1,e}consumeReload(){const e=this.reloadRequested;return this.reloadRequested=!1,e}resetRotationDeltas(){const e=this.yawDelta,t=this.pitchDelta;return this.yawDelta=0,this.pitchDelta=0,{yaw:e,pitch:t}}}class l0{constructor(){this.synth=typeof window<"u"&&"speechSynthesis"in window?window.speechSynthesis:null,this.currentUtterance=null,this.isMuted=!1,this.rate=1.02,this.pitch=.98,this.voices=[],this.preferredVoice=null,this.onStart=null,this.onEnd=null,this.onError=null,this.synth&&(this.loadVoices(),this.synth.onvoiceschanged!==void 0&&(this.synth.onvoiceschanged=()=>this.loadVoices()))}loadVoices(){if(this.synth)try{this.voices=this.synth.getVoices()||[],this.preferredVoice=this.voices.find(e=>e.lang.startsWith("en")&&(e.name.includes("Natural")||e.name.includes("David")||e.name.includes("Google")||e.name.includes("Daniel")||e.name.includes("James")))||this.voices.find(e=>e.lang.startsWith("en"))||this.voices[0]||null}catch(e){console.warn("[NarrationManager] Could not get voices:",e)}}speak(e,t=null){if(!this.synth||this.isMuted||!e){t&&t();return}try{this.stop();const n=e.replace(/[*_#]/g," ").trim(),s=new SpeechSynthesisUtterance(n);s.rate=this.rate,s.pitch=this.pitch,this.preferredVoice&&(s.voice=this.preferredVoice),s.onstart=()=>{this.onStart&&this.onStart()},s.onend=()=>{this.currentUtterance=null,this.onEnd&&this.onEnd(),t&&t()},s.onerror=a=>{console.warn("[NarrationManager] Speech error:",a),this.currentUtterance=null,this.onError&&this.onError(a),t&&t()},this.currentUtterance=s,this.synth.speak(s)}catch(n){console.warn("[NarrationManager] speak() failed:",n),t&&t()}}pause(){this.synth&&this.synth.speaking&&!this.synth.paused&&this.synth.pause()}resume(){this.synth&&this.synth.paused&&this.synth.resume()}stop(){if(this.synth)try{this.synth.cancel()}catch{}this.currentUtterance=null}skip(){this.stop()}setMuted(e){this.isMuted=!!e,this.isMuted&&this.stop()}toggleMute(){return this.setMuted(!this.isMuted),this.isMuted}isSpeaking(){return!!(this.synth&&this.synth.speaking&&!this.synth.paused)}}const Ei=new l0,c0=[{id:"story_01",num:1,title:"The Last Radio Signal",icon:"📻",shortDescription:"A weak transmission appears on a frequency that should have been silent.",openingNarration:"Static hisses across the military shortwave band. Through the white noise, a trembling voice broadcasts coordinates north of the plateau before cutting into static. Someone was alive out there. You check your weapon, calibrate your receiver, and step into the dusk.",tags:["radio","mystery","exploration"],atmosphere:"night_transmission",audioProfile:"radio_static",initialState:{radioContact:!0,mysteryLevel:1,powerRestored:!1,hospitalVisited:!1,safehouseEstablished:!1,convoySeen:!1,undergroundRouteFound:!1,majorClueFound:!1,survivorTrust:0},compatibleTags:["radio","mystery","exploration","survivor","investigation"]},{id:"story_02",num:2,title:"The Abandoned Safehouse",icon:"🏚️",shortDescription:"A reinforced concrete refuge sits unlocked, its defenders vanished without blood.",openingNarration:"The blast door hangs ajar on rusted hinges. Inside, cold coffee sits beside fresh ammunition cases and an unrolled topographical map. There are no bodies, no signs of a breach—only a single chalk message on the blast shield: 'They came from beneath the floor.'",tags:["safehouse","investigation","supply"],atmosphere:"cold_concrete",audioProfile:"facility_hum",initialState:{safehouseEstablished:!0,mysteryLevel:1,powerRestored:!1,radioContact:!1,undergroundRouteFound:!1,survivorTrust:0},compatibleTags:["safehouse","investigation","supply","underground"]},{id:"story_03",num:3,title:"The Hospital Transmission",icon:"🏥",shortDescription:"A medical distress beacon pulses from the fourth floor of St. Jude's Ward.",openingNarration:"The emergency radio crackles with an automated quarantine loop: 'Bio-containment breach confirmed. Zero-patient specimens secured in sub-level cold storage. Requesting immediate sanitization team.' The hospital towers above the tree line, its emergency sirens faintly echoing.",tags:["medical","quarantine","mystery"],atmosphere:"sterile_horror",audioProfile:"cryo_lab",initialState:{hospitalVisited:!0,mysteryLevel:2,radioContact:!0,majorClueFound:!0},compatibleTags:["medical","quarantine","mystery","investigation"]},{id:"story_04",num:4,title:"The Missing Convoy",icon:"🚛",shortDescription:"Three armored personnel carriers sit abandoned along the northern ridge road.",openingNarration:"Heavy diesel smoke still curls into the dusk. Armor plating on the lead vehicle is shredded from the outside. Gun lockers have been broken open, spent brass carpet the gravel, and boot tracks lead east toward the logging trails.",tags:["convoy","military","tactical"],atmosphere:"smoldering_wreckage",audioProfile:"forest_tension",initialState:{convoySeen:!0,mysteryLevel:1,survivorTrust:0},compatibleTags:["convoy","military","tactical","supply"]},{id:"story_05",num:5,title:"The Cliffside Beacon",icon:"🗼",shortDescription:"A high-intensity maritime warning strobe flashes high upon the sheer sea bluffs.",openingNarration:"Every twelve seconds, a piercing crimson flash illuminates the breaking surf below. Ships have stopped sailing these waters months ago, yet the emergency optic beacon is firing with mechanical precision, guiding something toward the rocks.",tags:["beacon","coastal","exploration"],atmosphere:"ocean_winds",audioProfile:"coastal_surf",initialState:{mysteryLevel:1,radioContact:!1},compatibleTags:["beacon","coastal","exploration","mystery"]},{id:"story_06",num:6,title:"The Broken Bridge",icon:"🌉",shortDescription:"The only mainland artery was deliberately detonated from the island side.",openingNarration:"Twisted rebar and severed cables dangle into the foggy gorge. Charges were placed with military precision on this end—meaning whoever blew the span was not trying to keep the infected out. They were making sure no one got off.",tags:["military","escape","investigation"],atmosphere:"foggy_gorge",audioProfile:"ambient_wind",initialState:{mysteryLevel:2,majorClueFound:!0},compatibleTags:["military","escape","investigation","revelation"]},{id:"story_07",num:7,title:"The Locked Metro",icon:"🚇",shortDescription:"Iron turnstiles and blast gates seal the subterranean transit lines.",openingNarration:"Through the iron grates of Station 4, the smell of damp ozone and dried copper wafts up. A security terminal flickers with green phosphor text: 'SUBTERRANEAN VENTILATION: 14% CAPACITY. HOSTILE BIOMASS DETECTED ON TRACKS.'",tags:["underground","urban","mystery"],atmosphere:"subterranean_damp",audioProfile:"subterranean_alarm",initialState:{undergroundRouteFound:!0,mysteryLevel:1},compatibleTags:["underground","urban","mystery","exploration"]},{id:"story_08",num:8,title:"The Underground Route",icon:"🕳️",shortDescription:"A drainage culvert offers a concealed bypass beneath the quarantined perimeter.",openingNarration:"Water rushes knee-deep through the moss-slick aqueduct. Glowstick remnants mark the path of someone who ran through here recently, leaving bloody handprints on the concrete conduit walls. The tunnel leads straight into the island's restricted interior.",tags:["underground","exploration","survival"],atmosphere:"dark_sewer",audioProfile:"subterranean_alarm",initialState:{undergroundRouteFound:!0,mysteryLevel:1},compatibleTags:["underground","exploration","survival","hazard"]},{id:"story_09",num:9,title:"The Silent School",icon:"🏫",shortDescription:"The regional academy was hastily converted into an emergency triage center.",openingNarration:"Desks were stacked into barricades across the cafeteria double-doors. Chalkboards list names under columns marked 'STABLE' and 'TRANSFERRED TO VAULT'. In the courtyard, rows of canvas cots stand undisturbed under the evening fog.",tags:["triage","survivor","investigation"],atmosphere:"eerie_silence",audioProfile:"ambient_wind",initialState:{mysteryLevel:1,survivorTrust:1},compatibleTags:["triage","survivor","investigation","mystery"]},{id:"story_10",num:10,title:"The Strange Light",icon:"💡",shortDescription:"A prismatic cyan luminescence pulses above the forest canopy every three minutes.",openingNarration:"It isn't fire and it isn't lightning. An intense sapphire flash illuminates the clouds in rhythmic cycles. The compass needle in your survival pack spins wildly whenever the pulse fires, ionizing the moist air with the scent of ozone.",tags:["mystery","phenomenon","exploration"],atmosphere:"supernatural_dusk",audioProfile:"facility_hum",initialState:{mysteryLevel:2},compatibleTags:["mystery","phenomenon","exploration","revelation"]},{id:"story_11",num:11,title:"The Empty Camp",icon:"⛺",shortDescription:"A reconnaissance campsite was abandoned mid-meal less than an hour ago.",openingNarration:"A portable stove still hisses faintly beneath a kettle of lukewarm broth. Sleeping bags are torn open, satellite radios smashed with rifle butts. Footprints lead in scattered directions toward the dense pines.",tags:["survivor","investigation","supply"],atmosphere:"haunted_camp",audioProfile:"forest_tension",initialState:{survivorTrust:0,mysteryLevel:1},compatibleTags:["survivor","investigation","supply","forest"]},{id:"story_12",num:12,title:"The Handwritten Map",icon:"🗺️",shortDescription:"A military grid chart marked with red grease-pencil waypoints and evacuation landing zones.",openingNarration:"Found inside the jacket pocket of a deceased courier, the map outlines four hidden weapon caches, three collapsed bridges, and a circled sector labeled 'PROJECT AEGIS — LAST SECURE CONSOLE'. A scribbled note warns: 'Do not trust the mainland broadcast.'",tags:["intel","exploration","military"],atmosphere:"conspiracy",audioProfile:"radio_static",initialState:{majorClueFound:!0,mysteryLevel:2},compatibleTags:["intel","exploration","military","mystery"]},{id:"story_13",num:13,title:"The Emergency Broadcast",icon:"📡",shortDescription:"An automated civil defense alert loops continuously across all civilian bands.",openingNarration:"'Attention island residents: Federal quarantine Protocol 9 is now active. Shelter in place. Do not attempt maritime crossing. Perimeter defense batteries are authorized for lethal interdiction.' The sirens wail rhythmically across the darkening horizon.",tags:["radio","military","quarantine"],atmosphere:"martial_law",audioProfile:"radio_static",initialState:{radioContact:!0,mysteryLevel:1},compatibleTags:["radio","military","quarantine","survival"]},{id:"story_14",num:14,title:"The Power Station",icon:"⚡",shortDescription:"The regional hydroelectric substation hums erratically on emergency backup turbines.",openingNarration:"High-voltage towers stretch into the dusk, sparking with intermittent blue arcs. Breaker switches have tripped across five sectors, plunging the island into blackness. If you can restore the central generator, perimeter security grids and automated turrets will reactivate.",tags:["power","engineering","infrastructure"],atmosphere:"industrial_spark",audioProfile:"facility_hum",initialState:{powerRestored:!1,mysteryLevel:1},compatibleTags:["power","engineering","infrastructure","military"]},{id:"story_15",num:15,title:"The Survivor's Message",icon:"✉️",shortDescription:"A waterproof case lashed to a lookout tower containing a desperate cassette recording.",openingNarration:"You press play. A woman's voice speaks through ragged breaths: 'If you find this, Sector 3 is compromised. We're retreating to the weather observatory on the western ridge. We have clean water and antibiotics. Look for the yellow signal flares.'",tags:["survivor","investigation","exploration"],atmosphere:"desperate_hope",audioProfile:"forest_tension",initialState:{survivorTrust:1,mysteryLevel:1},compatibleTags:["survivor","investigation","exploration","rescue"]},{id:"story_16",num:16,title:"The Lost Radio",icon:"📻",shortDescription:"A military tactical walkie-talkie transmitting live chatter between unknown operators.",openingNarration:"You tune into the encrypted channel. Two voices whisper between bursts of rifle fire: 'Bravo team is down... the pathogen mutation is accelerating... fallback to bunker entrance 04!' You key the transmitter, but only a sharp gasp answers back.",tags:["radio","military","tactical"],atmosphere:"tactical_intercept",audioProfile:"radio_static",initialState:{radioContact:!0,mysteryLevel:1},compatibleTags:["radio","military","tactical","mystery"]},{id:"story_17",num:17,title:"The Watchtower",icon:"🔭",shortDescription:"A forest ranger tower offering an unobstructed panoramic view of the island's devastation.",openingNarration:"Climbing thirty meters of iron rungs brings you above the tree line. Through binoculars, you can see fires smoldering in the harbor district, strange glowing lines along the old airfield, and hundreds of silhouettes shifting along the valley floor.",tags:["recon","exploration","survival"],atmosphere:"high_vantage",audioProfile:"ambient_wind",initialState:{mysteryLevel:1,majorClueFound:!0},compatibleTags:["recon","exploration","survival","investigation"]},{id:"story_18",num:18,title:"The Supply Cache",icon:"📦",shortDescription:"A parachute drop container wedged into the branches of a giant maritime pine.",openingNarration:"The olive-drab container bears federal emergency relief stencils. Slashing the cords drops the crate to the moss below. Inside: combat rations, sealed 5.56 NATO magazines, and a bio-chem diagnostic kit flashing amber.",tags:["supply","survival","tactical"],atmosphere:"windy_treeline",audioProfile:"forest_tension",initialState:{mysteryLevel:0},compatibleTags:["supply","survival","tactical","military"]},{id:"story_19",num:19,title:"The Mysterious Stranger",icon:"👤",shortDescription:"A hooded figure on the ridge who fires a flare before disappearing into the brush.",openingNarration:"They stood on the rock outcrop, gas mask reflecting the dying sunlight. When they saw your weapon, they lowered their rifle, fired a green phosphorescent flare into the valley sky, and vanished down the cliff trail, leaving a trail of spent brass.",tags:["survivor","mystery","investigation"],atmosphere:"cryptic_encounter",audioProfile:"forest_tension",initialState:{survivorTrust:1,mysteryLevel:2},compatibleTags:["survivor","mystery","investigation","rescue"]},{id:"story_20",num:20,title:"The Closed Checkpoint",icon:"🚧",shortDescription:"A militarized razor-wire gate guarded by automated sentry turrets that have jammed.",openingNarration:"Floodlights hum over sandbag revetments. Sentry guns click impotently against empty ammunition drums. The main gate hydraulic arm is warped, and behind the gatehouse, decontamination sprayers hiss empty vapor into the cold night.",tags:["military","hazard","exploration"],atmosphere:"perimeter_lockdown",audioProfile:"facility_hum",initialState:{mysteryLevel:1},compatibleTags:["military","hazard","exploration","tactical"]},{id:"story_21",num:21,title:"The Evacuation Route",icon:"🏃",shortDescription:"Signs pointing toward Dock 7 are spray-painted with skulls and warning runes.",openingNarration:"Signs reading 'CIVILIAN EVACUATION CORRIDOR' have been aggressively defaced with black spray paint: 'IT IS A SLAUGHTERHOUSE. DO NOT BOARD.' A line of abandoned family luggage and overturned strollers stretches toward the harbor gate.",tags:["investigation","quarantine","escape"],atmosphere:"tragic_aftermath",audioProfile:"ambient_wind",initialState:{mysteryLevel:2,majorClueFound:!0},compatibleTags:["investigation","quarantine","escape","revelation"]},{id:"story_22",num:22,title:"The Broken Vehicle",icon:"🚙",shortDescription:"A four-wheel-drive patrol SUV with its battery intact and winch cable engaged.",openingNarration:"The SUV is wedged between two granite boulders. Its dashboard radio is alive with background hum, and the high-output halogen spotlights still slice through the mist. The glove box contains a master security keycard for Sector 4.",tags:["supply","technology","exploration"],atmosphere:"foggy_roadside",audioProfile:"forest_tension",initialState:{mysteryLevel:1},compatibleTags:["supply","technology","exploration","military"]},{id:"story_23",num:23,title:"The Hidden Archive",icon:"📁",shortDescription:"A subterranean records vault beneath the municipal courthouse.",openingNarration:"Behind a heavy steel document door lie filing cabinets labeled 'SPECIAL BIOCHEMICAL RESEARCH COMMISSION — 1984–PRESENT'. Red-stamped folders reveal that the epidemic wasn't an accident—it was a planned stress test of the civilian populace.",tags:["intel","conspiracy","revelation"],atmosphere:"damp_vault",audioProfile:"facility_hum",initialState:{majorClueFound:!0,mysteryLevel:3},compatibleTags:["intel","conspiracy","revelation","mystery"]},{id:"story_24",num:24,title:"The Last Safehouse",icon:"🏠",shortDescription:"A fortified ranger cabin with reinforced storm shutters and rainwater cisterns.",openingNarration:"Solar panels on the cedar roof still hum quietly. Inside, emergency medical supplies are organized neatly, and a wood stove radiates residual warmth. A note on the mantelpiece reads: 'Whoever you are, take what you need to survive. Don't let them take your humanity.'",tags:["safehouse","survival","hope"],atmosphere:"warm_haven",audioProfile:"ambient_wind",initialState:{safehouseEstablished:!0,survivorTrust:1},compatibleTags:["safehouse","survival","hope","supply"]},{id:"story_25",num:25,title:"The Water Station",icon:"💧",shortDescription:"The island water treatment plant with chemical filtration tanks overflowing.",openingNarration:"Vats of charcoal and zeolite filters are rumbling violently. Purple discoloration stains the effluent runoff channel. A dead lab technician clutching a test vial floats near the intake grates—the contamination entered through the municipal aqueducts.",tags:["hazard","investigation","infrastructure"],atmosphere:"toxic_industrial",audioProfile:"subterranean_alarm",initialState:{mysteryLevel:2},compatibleTags:["hazard","investigation","infrastructure","medical"]},{id:"story_26",num:26,title:"The Second Signal",icon:"📶",shortDescription:"A response signal answers your military transmitter with unmistakable Morse code.",openingNarration:"You transmit three short pulses. Five seconds later, your headphones buzz with three sharp return tones, followed by coordinate letters: 'H-E-L-I-P-A-D-S-O-U-T-H'. Someone with high-level clearance is monitoring your frequency.",tags:["radio","mystery","survivor"],atmosphere:"electric_anticipation",audioProfile:"radio_static",initialState:{radioContact:!0,mysteryLevel:2},compatibleTags:["radio","mystery","survivor","rescue"]},{id:"story_27",num:27,title:"The Rooftop Distress Call",icon:"🏢",shortDescription:"A massive 'S.O.S.' spelled in burning tires atop the island's tallest hotel.",openingNarration:"Acrid black rubber smoke billows into the twilight sky. Through a sniper scope, you can see a barricade on the roof access stairwell holding off dozens of writhing infected while two survivors reload their sidearms.",tags:["survivor","rescue","action"],atmosphere:"smoke_fire",audioProfile:"boss_standoff",initialState:{survivorTrust:2,mysteryLevel:1},compatibleTags:["survivor","rescue","action","urban"]},{id:"story_28",num:28,title:"The Abandoned Laboratory",icon:"🔬",shortDescription:"A clandestine subterranean genetics research lab concealed beneath a fish hatchery.",openingNarration:"Behind refrigerated storage lockers, an airlock slides open to reveal sterile stainless steel countertops, shattered glass centrifuge units, and cryo-tanks labeled 'PROTOTYPE NEURAL REGRESSOR'. The bio-hazard warning lamps blink in rhythmic amber.",tags:["science","medical","mystery"],atmosphere:"cryo_facility",audioProfile:"cryo_lab",initialState:{hospitalVisited:!0,mysteryLevel:3,majorClueFound:!0},compatibleTags:["science","medical","mystery","quarantine"]},{id:"story_29",num:29,title:"The Silent Highway",icon:"🛣️",shortDescription:"A four-lane coastal causeway clogged with hundreds of gridlocked, empty cars.",openingNarration:"Car doors stand open to the wind. Wallets, luggage, and teddy bears are scattered across asphalt coated with dead autumn leaves. Not a single engine runs, but inside several locked vehicles, shadowy silhouettes press their hands against the frosted glass.",tags:["urban","exploration","survival"],atmosphere:"gridlock_cemetery",audioProfile:"ambient_wind",initialState:{mysteryLevel:1},compatibleTags:["urban","exploration","survival","horror"]},{id:"story_30",num:30,title:"The Emergency Shelter",icon:"⛺",shortDescription:"A church basement converted into a haven with barricaded stained-glass windows.",openingNarration:"Candle stubs flicker on the stone altar. Rows of pews have been disassembled into pointed timber pikes braced against the oak doors. A ham radio sits next to a handwritten log of food rations and ammo counts.",tags:["safehouse","survivor","community"],atmosphere:"sanctuary",audioProfile:"forest_tension",initialState:{safehouseEstablished:!0,survivorTrust:1},compatibleTags:["safehouse","survivor","community","hope"]},{id:"story_31",num:31,title:"The Power Grid",icon:"🔌",shortDescription:"The central power distribution hub for the entire military perimeter network.",openingNarration:"Giant transformer coils tower overhead. If you can rewire the primary substation relay, power will flood the electrified perimeter fences and automated lighting arrays, turning the dark island into a beacon of defensive security.",tags:["power","engineering","defense"],atmosphere:"electric_hum",audioProfile:"facility_hum",initialState:{powerRestored:!1,mysteryLevel:1},compatibleTags:["power","engineering","defense","military"]},{id:"story_32",num:32,title:"The Underground Bunker",icon:"🛡️",shortDescription:"A cold-war fallout shelter sealed behind a 20-ton hydraulic blast door.",openingNarration:"The keypad glows with emergency yellow digits. Entering the courier's override code triggers pneumatic pressure seals that hiss as stale air from forty years ago vents out. Inside: weapons racks, airtight ration drums, and an intact radio transmitter.",tags:["bunker","supply","military"],atmosphere:"cold_war_steel",audioProfile:"subterranean_alarm",initialState:{undergroundRouteFound:!0,safehouseEstablished:!0},compatibleTags:["bunker","supply","military","safehouse"]},{id:"story_33",num:33,title:"The Missing Operator",icon:"📡",shortDescription:"The chief communications technician whose daily broadcasts kept survivors alive.",openingNarration:"His transmission station on North Point is wrecked. Blood leads toward the cliff steps, but next to the microphone sits an encrypted thumb drive labeled 'BROADCAST TO MAINLAND — REVEAL THE CURE PROTOCOL'.",tags:["intel","radio","investigation"],atmosphere:"tragic_mystery",audioProfile:"radio_static",initialState:{radioContact:!0,majorClueFound:!0,mysteryLevel:2},compatibleTags:["intel","radio","investigation","mystery"]},{id:"story_34",num:34,title:"The Old Photograph",icon:"📷",shortDescription:"A faded Polaroid showing scientists celebrating outside the island facility in 2021.",openingNarration:"On the back of the photograph, handwritten in red ink: 'Dr. Thorne said the antibody was stable. He lied to save his funding.' One of the faces in the picture matches the corpse of the lead researcher you found in the safehouse.",tags:["intel","mystery","conspiracy"],atmosphere:"haunting_revelation",audioProfile:"ambient_wind",initialState:{majorClueFound:!0,mysteryLevel:2},compatibleTags:["intel","mystery","conspiracy","science"]},{id:"story_35",num:35,title:"The Forgotten Outpost",icon:"🏕️",shortDescription:"A concealed sniper nest overlooking the northern coastal marshlands.",openingNarration:"Camo netting covers a wooden blind tucked high in a gnarled pine. Inside sits a pristine bolt-action precision rifle, two boxes of match-grade ammunition, and a range-card documenting zombie migration patterns across the salt marsh.",tags:["tactical","recon","supply"],atmosphere:"silent_vigil",audioProfile:"forest_tension",initialState:{mysteryLevel:1},compatibleTags:["tactical","recon","supply","military"]},{id:"story_36",num:36,title:"The Beacon Tower",icon:"🚨",shortDescription:"The high-frequency radio relay spire that crowns the central island peak.",openingNarration:"Towering eighty meters into the swirling coastal mist, the lattice steel spire is the key to contacting naval rescue fleets beyond the quarantine blockade. If you reach its summit, you can transmit an unblockable SOS.",tags:["beacon","radio","climax"],atmosphere:"high_altitude_wind",audioProfile:"beacon_hum",initialState:{radioContact:!1,mysteryLevel:1},compatibleTags:["beacon","radio","climax","escape"]},{id:"story_37",num:37,title:"The Convoy Route",icon:"🚚",shortDescription:"The predetermined military evacuation vector marked by chemical flare casings.",openingNarration:"Burned phosphorus flares mark a path through the dense forest firebreaks. The tire tracks are massive—belonging to heavy 8x8 armored supply haulers that were attempting to break through the horde toward the eastern docks.",tags:["convoy","exploration","military"],atmosphere:"charred_forest",audioProfile:"forest_tension",initialState:{convoySeen:!0,mysteryLevel:1},compatibleTags:["convoy","exploration","military","tactical"]},{id:"story_38",num:38,title:"The Locked Warehouse",icon:"🏭",shortDescription:"A shipping depot sealed with magnetic locks and military bio-containment seals.",openingNarration:"Warning placards in four languages declare: 'CLASS 4 BIOLOGICAL HAZARD — AUTHORIZED PERSONNEL ONLY'. Through the industrial bay windows, heavy steel shipping containers sit chained to concrete pylons under motion-sensing floodlights.",tags:["hazard","quarantine","supply"],atmosphere:"industrial_dread",audioProfile:"facility_hum",initialState:{mysteryLevel:2},compatibleTags:["hazard","quarantine","supply","investigation"]},{id:"story_39",num:39,title:"The Flooded District",icon:"🌊",shortDescription:"A sunken village where brackish seawater covers roads and ground floors.",openingNarration:"Broken seawalls have let the ocean reclaim the low-lying quarter. Small motorboats and canoes drift between flooded houses. In the murky water below, pale shapes drift silently, waiting for the unwary to step off the submerged rooftops.",tags:["coastal","hazard","exploration"],atmosphere:"murky_water",audioProfile:"coastal_surf",initialState:{mysteryLevel:1},compatibleTags:["coastal","hazard","exploration","survival"]},{id:"story_40",num:40,title:"The Communications Center",icon:"📡",shortDescription:"The central telecommunications switching exchange for the entire island.",openingNarration:"Fiber optic cables and server racks fill three subterranean floors. Backup battery banks are down to twelve percent charge, but several satellite uplinks remain hot, receiving encrypted telemetry from the mainland defense command.",tags:["technology","intel","radio"],atmosphere:"server_room",audioProfile:"facility_hum",initialState:{radioContact:!0,majorClueFound:!0,mysteryLevel:2},compatibleTags:["technology","intel","radio","mystery"]},{id:"story_41",num:41,title:"The Survivor Group",icon:"👥",shortDescription:"A coalition of armed civilians and former police holding the high ground.",openingNarration:"Sandbags, concertina wire, and halogen spotlights turn the civic center into a fortified redoubt. A spotter with a megaphone calls down from the roof: 'Identify yourself, survivor! Are you bitten, or are you looking for a fight?'",tags:["survivor","community","diplomacy"],atmosphere:"tense_standoff",audioProfile:"forest_tension",initialState:{survivorTrust:2,safehouseEstablished:!0},compatibleTags:["survivor","community","diplomacy","hope"]},{id:"story_42",num:42,title:"The Hidden Tunnel",icon:"🚇",shortDescription:"An unmapped service tunnel beneath the island perimeter security fence.",openingNarration:"Hidden beneath the roots of an ancient cedar tree, an iron trapdoor opens into a hand-carved escape tunnel reinforced with wooden timbers. It bypasses the deadly electrified minefields that ring the island's military sector.",tags:["underground","stealth","escape"],atmosphere:"earthy_darkness",audioProfile:"subterranean_alarm",initialState:{undergroundRouteFound:!0,mysteryLevel:1},compatibleTags:["underground","stealth","escape","exploration"]},{id:"story_43",num:43,title:"The Final Supply Run",icon:"🛒",shortDescription:"The last remaining pharmacy in town, surrounded by barricades and tripwires.",openingNarration:"Glass display cases are shattered, but behind the locked dispensary door are untouched bottles of broad-spectrum antibiotics, sterile bandages, and morphine injectors. However, the floorboards above creak with heavy, shambling footsteps.",tags:["medical","supply","risk"],atmosphere:"looted_interior",audioProfile:"cryo_lab",initialState:{hospitalVisited:!0},compatibleTags:["medical","supply","risk","survival"]},{id:"story_44",num:44,title:"The Broken Observatory",icon:"🔭",shortDescription:"An astronomical research station at the highest peak with its dome shattered.",openingNarration:"The giant reflector telescope points toward the stormy sea. Wind howls through the shattered dome glass. On the research computer screens, a telemetry map displays naval blockade vessels surrounding the island in a strict five-mile perimeter.",tags:["science","recon","revelation"],atmosphere:"mountaintop_chill",audioProfile:"mountain_storm",initialState:{majorClueFound:!0,mysteryLevel:2},compatibleTags:["science","recon","revelation","escape"]},{id:"story_45",num:45,title:"The Night Broadcast",icon:"🎙️",shortDescription:"A pirate radio station playing eerie jazz records interspersed with survival advice.",openingNarration:"'Good evening, Sector 4,' a raspy, calm voice announces between record scratches. 'Stay out of the light tonight. The new strain tracks heat signatures. If you're near the water filtration plant, watch the high catwalks. Stay alive out there.'",tags:["radio","survivor","mystery"],atmosphere:"nocturnal_jazz",audioProfile:"radio_static",initialState:{radioContact:!0,survivorTrust:1},compatibleTags:["radio","survivor","mystery","exploration"]},{id:"story_46",num:46,title:"The Emergency Terminal",icon:"💻",shortDescription:"A military field terminal linked to the national defense satellite network.",openingNarration:"A hardened green Panasonic laptop sits open inside a command tent. The screen prompts: 'ENTER AUTHORIZATION CODE TO INITIATE EVACUATION PROTOCOL.' A nearby soldier's dogtag has a six-digit cipher etched into its reverse side.",tags:["technology","military","escape"],atmosphere:"tactical_console",audioProfile:"facility_hum",initialState:{majorClueFound:!0,mysteryLevel:2},compatibleTags:["technology","military","escape","intel"]},{id:"story_47",num:47,title:"The Search Party",icon:"🔦",shortDescription:"A trio of flashlight beams sweeping through the misty forest below.",openingNarration:"You crouch behind a mossy boulder. Three survivors in matching tactical vests and gas masks move with synchronized precision, checking doorways and clearing alleys. Are they mainland rescue rangers, or private contractors cleaning up witnesses?",tags:["survivor","tactical","tension"],atmosphere:"misty_forest",audioProfile:"forest_tension",initialState:{survivorTrust:1,mysteryLevel:1},compatibleTags:["survivor","tactical","tension","investigation"]},{id:"story_48",num:48,title:"The Sealed Facility",icon:"☣️",shortDescription:"A deep bunker with biohazard warning signs and pressurized airlocks.",openingNarration:"The blast door is sealed with lead and concrete, but an emergency access hatch has been blown open from the inside. Fresh bootprints lead out into the snow, accompanied by elongated drag marks that cannot belong to any natural creature.",tags:["quarantine","hazard","mystery"],atmosphere:"deep_containment",audioProfile:"cryo_lab",initialState:{hospitalVisited:!0,mysteryLevel:3},compatibleTags:["quarantine","hazard","mystery","horror"]},{id:"story_49",num:49,title:"The Last Vehicle",icon:"🚒",shortDescription:"A heavy off-road fire rescue truck with full diesel tanks and iron grille bars.",openingNarration:"Its reinforced bull-bar is coated with grime and blood, but the 8-cylinder turbo diesel engine starts on the first turn of the key. Its water cannon is operational, and the storage lockers are packed with axes, flares, and heavy ropes.",tags:["vehicle","escape","supply"],atmosphere:"heavy_diesel",audioProfile:"forest_tension",initialState:{mysteryLevel:1},compatibleTags:["vehicle","escape","supply","tactical"]},{id:"story_50",num:50,title:"The Evacuation Signal",icon:"🎆",shortDescription:"Three brilliant emerald parachute flares lighting up the southern coastline.",openingNarration:"The flares burn with unearthly brilliance for two full minutes, illuminating the surf and rocky islands. A megaphone horn from an offshore cutter reverberates over the waves: 'FINAL EVACUATION WINDOW CLOSING IN 0600 HOURS. ALL UNITS MOVE TO BEACHHEAD.'",tags:["evacuation","military","climax"],atmosphere:"emerald_glow",audioProfile:"coastal_surf",initialState:{mysteryLevel:2,radioContact:!0},compatibleTags:["evacuation","military","climax","escape"]},{id:"story_51",num:51,title:"The Darkened City",icon:"🏙️",shortDescription:"The island's urban center, completely devoid of electrical light or traffic.",openingNarration:"Skyscrapers stand like jagged gravestones against the twilight clouds. Broken shopfronts, overturned ambulances, and thousands of spent shell casings line the avenues. Somewhere in the concrete canyons, a car alarm wails and dies.",tags:["urban","exploration","survival"],atmosphere:"concrete_abyss",audioProfile:"ambient_wind",initialState:{mysteryLevel:1},compatibleTags:["urban","exploration","survival","hazard"]},{id:"story_52",num:52,title:"The Unknown Frequency",icon:"📻",shortDescription:"A bizarre broadcast playing synchronized number sequences in a mechanical voice.",openingNarration:"'Seven... Four... Two... Niner... Zero... Breakthrough confirmed in sub-level nine... Repeat sequence.' Deciphering the numbers reveals coordinates to an underground shelter that is not marked on any public island maps.",tags:["radio","mystery","cipher"],atmosphere:"number_station",audioProfile:"radio_static",initialState:{radioContact:!0,mysteryLevel:2,majorClueFound:!0},compatibleTags:["radio","mystery","cipher","underground"]},{id:"story_53",num:53,title:"The Hidden Map",icon:"📜",shortDescription:"A schematic found behind an electrical panel detailing ventilation bypass ducts.",openingNarration:"Architectural blue-prints reveal that every major public building on the island was constructed with interconnected emergency drainage and air-filtration tunnels designed to withstand airborne bio-hazards.",tags:["intel","underground","exploration"],atmosphere:"secret_blueprints",audioProfile:"facility_hum",initialState:{undergroundRouteFound:!0,majorClueFound:!0},compatibleTags:["intel","underground","exploration","safehouse"]},{id:"story_54",num:54,title:"The Abandoned Command Center",icon:"🎖️",shortDescription:"The Joint Operations Bunker where senior officers directed the early containment.",openingNarration:"Maps on the central command table are covered with red grease-pencil Xs over civilian neighborhoods. The final log entry from the garrison general reads: 'We cannot hold the perimeter. God forgive what we are leaving behind.'",tags:["military","intel","tragedy"],atmosphere:"command_bunker",audioProfile:"facility_hum",initialState:{majorClueFound:!0,mysteryLevel:2},compatibleTags:["military","intel","tragedy","revelation"]},{id:"story_55",num:55,title:"The Distress Beacon",icon:"🚨",shortDescription:"An automated emergency locator beacon dropped by a downed rescue helicopter.",openingNarration:"The yellow beacon floats in a pond of marsh water, pulsing a high-pitched homing chirp. Fifty meters away in the reeds lies the broken tail rotor of a Coast Guard MH-60 Jayhawk, its cargo hold pried open from the inside.",tags:["beacon","rescue","hazard"],atmosphere:"swamp_marsh",audioProfile:"coastal_surf",initialState:{mysteryLevel:1,radioContact:!0},compatibleTags:["beacon","rescue","hazard","military"]},{id:"story_56",num:56,title:"The Silent Research Station",icon:"🧪",shortDescription:"An atmospheric monitoring outpost deep in the highlands with all data logs intact.",openingNarration:"Wind turbines spin lazily in the mountain gale. The station is clean, warm, and untouched. Computer screens show real-time aerosol dispersion models proving that the pathogen is decaying rapidly under exposure to oceanic salt spray.",tags:["science","hope","intel"],atmosphere:"sterile_hope",audioProfile:"mountain_storm",initialState:{hospitalVisited:!0,majorClueFound:!0,mysteryLevel:3},compatibleTags:["science","hope","intel","cure"]},{id:"story_57",num:57,title:"The Last Transmission",icon:"📻",shortDescription:"A live voice breaking through all military scramblers with your exact callsign.",openingNarration:"'Survivor on Sector 4 grid... this is Captain Vance, offshore cutter Resolute. We have your thermal signature on our satellite feed. If you can eliminate the hostiles blocking Landing Zone Charlie, we will extract you.'",tags:["radio","rescue","action"],atmosphere:"final_hour",audioProfile:"helicopter_rotor",initialState:{radioContact:!0,mysteryLevel:2,survivorTrust:2},compatibleTags:["radio","rescue","action","climax"]},{id:"story_58",num:58,title:"The Unknown Survivor",icon:"🤝",shortDescription:"A lone combat medic barricaded inside an armored bank vault with trauma supplies.",openingNarration:"Through the vault intercom, she checks your eyes with a fiber-optic camera: 'Negative for retinal hemorrhaging. Come inside quickly. I have blood expanders, sterile scalpel sets, and five boxes of armor-piercing rounds. Let's finish this.'",tags:["survivor","medical","ally"],atmosphere:"secure_vault",audioProfile:"facility_hum",initialState:{survivorTrust:3,safehouseEstablished:!0},compatibleTags:["survivor","medical","ally","hope"]},{id:"story_59",num:59,title:"The Final Safe Zone",icon:"🏕️",shortDescription:"The last fortified civilian compound, encircled by automated searchlights and snipers.",openingNarration:"High on the rocky promontory, floodlights sweep the valley. Over two hundred survivors are sheltered behind concrete barricades and electric fences. But sirens are beginning to wail as a massive swarm approaches from the lowlands.",tags:["community","defense","climax"],atmosphere:"perimeter_siege",audioProfile:"boss_standoff",initialState:{safehouseEstablished:!0,survivorTrust:3,mysteryLevel:2},compatibleTags:["community","defense","climax","rescue"]},{id:"story_60",num:60,title:"The Last Beacon",icon:"🗼",shortDescription:"The maritime super-beacon on the western headland, ready to be ignited for rescue.",openingNarration:"The massive tungsten arc-lamp towers ninety meters into the stormy night sky. If you can route high-voltage emergency power to the igniter coils, its blinding five-million candlepower beam will signal every naval vessel within forty nautical miles.",tags:["beacon","climax","hope"],atmosphere:"thunderous_summit",audioProfile:"beacon_hum",initialState:{mysteryLevel:2,powerRestored:!1,radioContact:!0},compatibleTags:["beacon","climax","hope","rescue"]}],h0=[{id:"event_abandoned_camp",title:"The Abandoned Camp",speaker:"Tactical Reconnaissance",narration:"Smoldering charcoal and discarded meal rations litter the ravine. Footprints lead toward the perimeter fence, claw marks gouged into the cedar fenceposts. Whoever camped here left in sudden panic—leaving behind tactical munitions and a waterproof map case.",tags:["survivor","exploration","supply"],compatibleTags:["radio","survivor","exploration","mystery","supply"],incompatibleTags:[],requiredState:{minWave:1,maxWave:3},intensity:"early",probabilityWeight:9,onceOnly:!0,audioProfile:"forest_tension",gameplayEffect:{xp:40,ammo:30},stateUpdates:{survivorTrust:1,majorClueFound:!0},dialogue:{prompt:"WHAT DO YOU PRIORITIZE AT THE CAMPSITE?",options:[{text:"Secure military munitions & ammo cache",effect:{ammo:30},stateUpdate:{tacticalFocus:!0}},{text:"Examine map markings & diary notes",effect:{xp:35},stateUpdate:{mysteryLevel:1}}]}},{id:"event_frequency_intercept",title:"The Frequency Intercept",speaker:"Encrypted Radio Intercept",narration:"Your radio speaker crackles violently as a burst transmission cuts across the guard frequency: '...if you are reading this on the island... do NOT approach the hospital basement without full CBRN protection. Specimen Zero breached containment from cryogenic vault six.'",tags:["radio","quarantine","mystery"],compatibleTags:["radio","mystery","medical","science","investigation"],incompatibleTags:[],requiredState:{minWave:1,maxWave:4},intensity:"early",probabilityWeight:8,onceOnly:!0,audioProfile:"radio_static",gameplayEffect:{xp:45},stateUpdates:{radioContact:!0,mysteryLevel:1},dialogue:{prompt:"HOW DO YOU RESPOND TO THE BURST TRANSMISSION?",options:[{text:"Transmit digital acknowledgment ping",effect:{xp:25},stateUpdate:{survivorTrust:1}},{text:"Maintain absolute radio silence",effect:{ammo:15},stateUpdate:{stealthFocus:!0}}]}},{id:"event_underground_tunnel_entry",title:"The Subterranean Conduit",speaker:"Environmental Discovery",narration:"A rusted iron blast grate in the drainage basin has been pried open with a crowbar. Cool, ozone-scented air drafts up from concrete catacombs below. Fresh combat boot treads lead into the gloom, completely bypassing the razor-wire perimeter above.",tags:["underground","exploration","stealth"],compatibleTags:["underground","exploration","escape","bunker","safehouse"],incompatibleTags:[],requiredState:{minWave:1,maxWave:3},intensity:"early",probabilityWeight:7,onceOnly:!0,audioProfile:"subterranean_alarm",gameplayEffect:{xp:50},stateUpdates:{undergroundRouteFound:!0},dialogue:{prompt:"HOW DO YOU APPROACH THE CONDUIT?",options:[{text:"Mark coordinates on your survival GPS",effect:{xp:30},stateUpdate:{majorClueFound:!0}},{text:"Drop a flare down the shaft to check depth",effect:{ammo:20},stateUpdate:{mysteryLevel:1}}]}},{id:"event_overturned_convoy_truck",title:"The Armored Transport Wreck",speaker:"Field Inspection",narration:"A heavy 6x6 troop transport lies overturned across the fire road. Armor plating on the cab is dented inward by tremendous concussive force. Inside the ruptured cargo hold, an emergency supply crate remains locked behind a biometric thumbprint scanner.",tags:["convoy","military","supply"],compatibleTags:["convoy","military","tactical","supply"],incompatibleTags:[],requiredState:{minWave:1,maxWave:3},intensity:"early",probabilityWeight:8,onceOnly:!0,audioProfile:"forest_tension",gameplayEffect:{xp:45,ammo:40},stateUpdates:{convoySeen:!0},dialogue:{prompt:"HOW DO YOU BREACH THE SECURE CRATE?",options:[{text:"Use dead driver's biometric clearance",effect:{ammo:45},stateUpdate:{majorClueFound:!0}},{text:"Force the emergency manual release",effect:{health:25},stateUpdate:{survivorTrust:1}}]}},{id:"event_strange_cyan_luminescence",title:"The Prismatic Aurora",speaker:"Atmospheric Phenomenon",narration:"A silent shockwave ripples through the high coastal fog, turning the overcast clouds into an incandescent dome of electric sapphire. The hair on your forearms stands on end as electrical discharge hums along the barrel of your weapon.",tags:["mystery","phenomenon","science"],compatibleTags:["mystery","phenomenon","science","beacon"],incompatibleTags:[],requiredState:{minWave:1,maxWave:4},intensity:"early",probabilityWeight:6,onceOnly:!0,audioProfile:"facility_hum",gameplayEffect:{xp:50},stateUpdates:{mysteryLevel:2},dialogue:{prompt:"HOW DO YOU ANALYZE THE ELECTROMAGNETIC PULSE?",options:[{text:"Calibrate survival compass & optical sensor",effect:{xp:40},stateUpdate:{majorClueFound:!0}},{text:"Take shelter under dense pine canopy",effect:{health:20},stateUpdate:{survivorTrust:1}}]}},{id:"event_scout_encounter",title:"The Perimeter Scout",speaker:"Survivor Voice: Corporal Kaya",narration:"A laser sight flashes against your chest rig, then drops instantly. A wounded scout wearing torn tactical armor steps from behind a fallen oak: 'Hold your fire, survivor! You're clean. The horde is massing along the north ridge. Take these magazines—we'll need every rifle we've got.'",tags:["survivor","tactical","hope"],compatibleTags:["survivor","tactical","hope","rescue","community"],incompatibleTags:[],requiredState:{minWave:1,maxWave:3},intensity:"early",probabilityWeight:9,onceOnly:!0,audioProfile:"forest_tension",gameplayEffect:{xp:55,ammo:35},stateUpdates:{survivorTrust:2,allyKayaSaved:!0},dialogue:{prompt:"HOW DO YOU COORDINATE WITH CORPORAL KAYA?",options:[{text:"Offer her field dressings & painkillers",effect:{health:15,xp:30},stateUpdate:{survivorTrust:3}},{text:"Ask for tactical intel on the ridge horde",effect:{ammo:25,xp:30},stateUpdate:{majorClueFound:!0}}]}},{id:"event_power_station_generator",title:"The Substation Relay",speaker:"Infrastructure Terminal",narration:"Heavy electrical transformers loom in the gloom. You find the auxiliary manual restart lever. Throwing the heavy copper breaker sends a deep mechanical vibration shuddering through the earth. High-output perimeter floodlights hum to life across the eastern security fence.",tags:["power","engineering","defense"],compatibleTags:["power","engineering","defense","military","facility"],incompatibleTags:[],requiredState:{minWave:2},intensity:"mid",probabilityWeight:8,onceOnly:!0,audioProfile:"facility_hum",gameplayEffect:{xp:65,ammo:25},stateUpdates:{powerRestored:!0,mysteryLevel:1},dialogue:{prompt:"WHERE DO YOU ROUTE AUXILIARY GRID POWER?",options:[{text:"Route power to perimeter electrified fences",effect:{xp:40},stateUpdate:{defenseGridActive:!0}},{text:"Power radio relay towers & communications",effect:{xp:40},stateUpdate:{radioContact:!0}}]}},{id:"event_dr_thorne_audio_diary",title:"The Lead Researcher's Tape",speaker:"Dr. Thorne's Classified Log",narration:"A digital dictaphone in a blood-splattered lab coat plays through static: 'Day 41. The pathogen did not originate from mainland contagion. It was cultured in our own bioreactors. The neural degeneration is irreversible, but the genetic antibody in Batch 99-Omega can neutralize the airborne vector.'",tags:["science","intel","conspiracy"],compatibleTags:["science","intel","conspiracy","medical","quarantine"],incompatibleTags:[],requiredState:{minWave:2},intensity:"mid",probabilityWeight:7,onceOnly:!0,audioProfile:"cryo_lab",gameplayEffect:{xp:70},stateUpdates:{majorClueFound:!0,mysteryLevel:2,hospitalVisited:!0},dialogue:{prompt:"HOW DO YOU HANDLE DR. THORNE'S CONFESSION?",options:[{text:"Copy audio files to your encrypted drive",effect:{xp:45},stateUpdate:{truthSeeker:!0}},{text:"Extract antibody batch storage coordinates",effect:{health:25},stateUpdate:{cureKnowledge:!0}}]}},{id:"event_emergency_airdrop",title:"The Munitions Airdrop",speaker:"Supply Intercept",narration:"A transport plane cuts through high storm clouds with low-rpm turboprops. A heavy cargo skid descends under a dual silk parachute, slamming into the meadow fifty meters away. The drop container releases automated green locator strobe lights.",tags:["supply","military","tactical"],compatibleTags:["supply","military","tactical","convoy"],incompatibleTags:[],requiredState:{minWave:2},intensity:"mid",probabilityWeight:9,onceOnly:!0,audioProfile:"helicopter_rotor",gameplayEffect:{xp:50,ammo:60,health:30},stateUpdates:{safehouseEstablished:!0},dialogue:{prompt:"HOW DO YOU SECURE THE DROP ZONE?",options:[{text:"Distribute munitions for prolonged survival",effect:{ammo:50},stateUpdate:{tacticalFocus:!0}},{text:"Check container for trauma kits & serum",effect:{health:35},stateUpdate:{survivorTrust:1}}]}},{id:"event_quarantine_airlock",title:"The Cryogenic Vault",speaker:"Laboratory Bio-Lock",narration:"Hydraulic locks groan as the reinforced steel airlock releases a cloud of sub-zero nitrogen vapor. Frost coats rows of sealed bio-hazard containment canisters. One central pedestal holds a vacuum-sealed titanium container labeled 'ANTIBODY SYNTHESIS MATRIX'.",tags:["medical","quarantine","science"],compatibleTags:["medical","quarantine","science","cure","investigation"],incompatibleTags:[],requiredState:{minWave:2},intensity:"mid",probabilityWeight:7,onceOnly:!0,audioProfile:"cryo_lab",gameplayEffect:{xp:75,health:25},stateUpdates:{majorClueFound:!0,cureSecured:!0,hospitalVisited:!0},dialogue:{prompt:"HOW DO YOU SECURE THE ANTIBODY MATRIX?",options:[{text:"Seal matrix in insulated survival pack",effect:{xp:50},stateUpdate:{cureSecured:!0}},{text:"Synthesize immediate field anti-viral booster",effect:{health:40},stateUpdate:{partialCure:!0}}]}},{id:"event_sealed_armory_breach",title:"The Tactical Weapons Cache",speaker:"Security Vault Access",narration:"A hardened subterranean police weapons vault sits cracked by an oxy-acetylene torch. Inside are racks of high-capacity magazines, tactical combat optics, and heavy body armor vests bearing island SWAT insignias.",tags:["tactical","supply","military"],compatibleTags:["tactical","supply","military","safehouse"],incompatibleTags:[],requiredState:{minWave:2},intensity:"mid",probabilityWeight:8,onceOnly:!0,audioProfile:"facility_hum",gameplayEffect:{xp:60,ammo:50,health:20},stateUpdates:{tacticalFocus:!0},dialogue:{prompt:"HOW DO YOU OUTFIT YOUR TACTICAL GEAR?",options:[{text:"Equip reinforced ceramic body armor",effect:{health:30},stateUpdate:{armoredReady:!0}},{text:"Load high-velocity match ammunition",effect:{ammo:45},stateUpdate:{highDamage:!0}}]}},{id:"event_survivor_radio_plea",title:"The Rooftop Beacon Call",speaker:"Distress Transmission",narration:"'Mayday! This is Station 4 rooftop redoubt! The lower stairwell doors just gave way. We have sixteen civilians including wounded! If there is an operator with a rifle in Sector 4, draw their attention away from the ladder!'",tags:["survivor","radio","rescue"],compatibleTags:["survivor","radio","rescue","community","hope"],incompatibleTags:[],requiredState:{minWave:2},intensity:"mid",probabilityWeight:8,onceOnly:!0,audioProfile:"radio_static",gameplayEffect:{xp:65},stateUpdates:{survivorTrust:3,radioContact:!0},dialogue:{prompt:"HOW DO YOU ASSIST THE ROOFTOP SURVIVORS?",options:[{text:"Fire flares to draw horde aggro away",effect:{xp:50},stateUpdate:{heroAction:!0}},{text:"Transmit extraction coordinates to their radio",effect:{xp:40,ammo:20},stateUpdate:{survivorTrust:4}}]}},{id:"event_fog_inversion",title:"The Toxic Lowland Fog",speaker:"Hazard Advisory",narration:"Cold oceanic air traps a dense blanket of sulfurous fog against the forest floor. Visibility drops to ten meters. Through the white mist, glowing yellow eyes and guttural breathing announce that the horde has adapted to hunting by sound and scent.",tags:["hazard","tension","weather"],compatibleTags:["hazard","tension","weather","exploration"],incompatibleTags:[],requiredState:{minWave:2},intensity:"mid",probabilityWeight:7,onceOnly:!0,audioProfile:"mountain_storm",gameplayEffect:{xp:55,ammo:20},stateUpdates:{mysteryLevel:1},dialogue:{prompt:"HOW DO YOU COUNTER THE REDUCED VISIBILITY?",options:[{text:"Mount tactical weapon light & aim carefully",effect:{ammo:25},stateUpdate:{tacticalFocus:!0}},{text:"Retreat to high rocky elevation",effect:{health:20},stateUpdate:{highGround:!0}}]}},{id:"event_military_satellite_uplink",title:"The Satellite Directive",speaker:"Mainland Naval Command",narration:"The tactical field terminal beeps sharply with high-priority satellite telemetry: 'COMMAND OVERRIDE CONFIRMED. Operation Clean Slate authorization verified. Island bombardment scheduled for dawn. Only survivors holding verified antibody proof will be granted extraction.'",tags:["military","intel","crisis"],compatibleTags:["military","intel","crisis","revelation","escape"],incompatibleTags:[],requiredState:{minWave:3},intensity:"late",probabilityWeight:8,onceOnly:!0,audioProfile:"beacon_hum",gameplayEffect:{xp:85},stateUpdates:{majorClueFound:!0,finalSequenceStarted:!0},dialogue:{prompt:"HOW DO YOU RESPOND TO OPERATION CLEAN SLATE?",options:[{text:"Broadcast evidence of island civilian survivors",effect:{xp:60},stateUpdate:{humanitarianHero:!0}},{text:"Transcribe extraction coordinates for yourself",effect:{ammo:30},stateUpdate:{pragmaticSurvival:!0}}]}},{id:"event_mutant_biomass_nest",title:"The Hive Spire",speaker:"Biological Warning",narration:"The walls of the subterranean drainage junction are coated in pulsing, bioluminescent fungal growth. Suspended in the organic matrix are mutated infected undergoing rapid biological metamorphosis into towering apex abominations.",tags:["horror","hazard","mystery"],compatibleTags:["horror","hazard","mystery","underground"],incompatibleTags:[],requiredState:{minWave:3},intensity:"late",probabilityWeight:7,onceOnly:!0,audioProfile:"boss_standoff",gameplayEffect:{xp:80,ammo:35},stateUpdates:{mysteryLevel:3},dialogue:{prompt:"HOW DO YOU DEAL WITH THE BIOMASS GROWTH?",options:[{text:"Ignite biomass with high-temp incendiaries",effect:{xp:55},stateUpdate:{biomassDestroyed:!0}},{text:"Harvest tissue specimen for antibody research",effect:{xp:70},stateUpdate:{specimenSecured:!0}}]}},{id:"event_defensive_turret_reboot",title:"The Automated Sentry Network",speaker:"Perimeter Security Console",narration:"A computer terminal on the perimeter guard tower chirps: 'RE-ENGAGING SENTRY DEFENSE MATRICES'. Twin 20mm automated turrets rotate toward the treeline with a mechanical whirr, identifying targets and preparing to unleash lethal suppression fire.",tags:["military","defense","technology"],compatibleTags:["military","defense","technology","power"],incompatibleTags:[],requiredState:{minWave:3},intensity:"late",probabilityWeight:8,onceOnly:!0,audioProfile:"facility_hum",gameplayEffect:{xp:75,ammo:40},stateUpdates:{defenseGridActive:!0},dialogue:{prompt:"HOW DO YOU CALIBRATE THE SENTRY TURRETS?",options:[{text:"Set fire priority to heavy & boss infected",effect:{ammo:30},stateUpdate:{bossTargeting:!0}},{text:"Establish 360-degree perimeter suppression zone",effect:{xp:50},stateUpdate:{perimeterCover:!0}}]}},{id:"event_radio_operator_last_stand",title:"The Broadcaster's Stand",speaker:"North Tower Radio Station",narration:"You reach the radio transmitter room. The operator is bleeding against the console, but his headphones are still on: 'I held the channel open... coordinates sent to the fleet offshore. Take the master transmitter key. Tell them... tell them we held the line.'",tags:["radio","tragedy","heroism"],compatibleTags:["radio","tragedy","heroism","beacon","climax"],incompatibleTags:[],requiredState:{minWave:3},intensity:"late",probabilityWeight:8,onceOnly:!0,audioProfile:"radio_static",gameplayEffect:{xp:90,ammo:35},stateUpdates:{radioContact:!0,survivorTrust:4,majorClueFound:!0},dialogue:{prompt:"WHAT DO YOU DO AT THE OPERATOR'S CONSOLE?",options:[{text:"Lock the distress frequency on permanent repeat",effect:{xp:60},stateUpdate:{broadcastLocked:!0}},{text:"Secure the operator's dog tags & journal",effect:{xp:50,health:25},stateUpdate:{honorFallen:!0}}]}},{id:"event_beacon_alignment_complete",title:"The Summit Lighthouse Ignition",speaker:"Emergency Arc-Lamp System",narration:"Massive quartz lenses grind into position atop the cliffside tower. High-voltage capacitors discharge with a blinding flash, sending a five-million candlepower beam slicing through the night sky and illuminating the ocean for thirty miles.",tags:["beacon","climax","hope"],compatibleTags:["beacon","climax","hope","rescue","escape"],incompatibleTags:[],requiredState:{minWave:4},intensity:"finale",probabilityWeight:10,onceOnly:!0,audioProfile:"beacon_hum",gameplayEffect:{xp:100,ammo:40},stateUpdates:{beaconLit:!0,finalSequenceStarted:!0},dialogue:{prompt:"HOW DO YOU DIRECT THE BEACON BEAM?",options:[{text:"Sweep horizon to guide naval rescue cutters",effect:{xp:75},stateUpdate:{fleetContact:!0}},{text:"Illuminate island perimeter to blind the horde",effect:{ammo:35},stateUpdate:{hordeBlinded:!0}}]}},{id:"event_chopper_inbound_alert",title:"The Extraction Helo",speaker:"Rescue Pilot: Call Sign Osprey-1",narration:"'Survivor on Sector 4! This is Osprey-1 inbound on bearing two-seven-zero! We see your beacon and muzzle flashes through the storm. Clear the landing pad of hostiles—we have three minutes of fuel on station!'",tags:["rescue","military","action"],compatibleTags:["rescue","military","action","climax"],incompatibleTags:[],requiredState:{minWave:4},intensity:"finale",probabilityWeight:10,onceOnly:!0,audioProfile:"helicopter_rotor",gameplayEffect:{xp:110,ammo:50},stateUpdates:{extractionInbound:!0,finalSequenceStarted:!0},dialogue:{prompt:"HOW DO YOU SECURE THE EXTRACTION ZONE?",options:[{text:"Deploy smoke flares & hold the center pad",effect:{ammo:40},stateUpdate:{padSecured:!0}},{text:"Escort surviving allies to the chopper ramp",effect:{xp:80},stateUpdate:{alliesEscorted:!0}}]}},{id:"event_dawn_horizon_break",title:"The First Light of Dawn",speaker:"Environmental Climax",narration:"A ribbon of pale gold splits the eastern horizon over the cold ocean. The longest night of your life is ending. The shrieks of the infected grow distant as they retreat from the cleansing morning sun, revealing a survivor standing triumphant amidst the ruins.",tags:["dawn","triumph","epilogue"],compatibleTags:["dawn","triumph","epilogue","hope"],incompatibleTags:[],requiredState:{minWave:4},intensity:"finale",probabilityWeight:9,onceOnly:!0,audioProfile:"dawn_triumph",gameplayEffect:{xp:120,health:50},stateUpdates:{dawnReached:!0,finalSequenceStarted:!0},dialogue:{prompt:"HOW DO YOU GREET THE MORNING SUN?",options:[{text:"Look out across the sea toward a new world",effect:{xp:90},stateUpdate:{peacefulDawn:!0}},{text:"Check remaining magazines—the fight continues",effect:{ammo:50},stateUpdate:{warriorVigil:!0}}]}}],d0=[{id:"ending_rescue_extraction",title:"EXTRACTION CONFIRMED: THE RESCUE HELO",archetype:"Airborne Extraction",tags:["rescue","military","radio","hope"],requiredState:{minWaves:3},probabilityWeight:10,audioProfile:"helicopter_rotor",generateEpilogue:i=>{const{startingStory:e,state:t,stats:n,level:s,totalXP:a,wavesCleared:r}=i,o=[];return o.push(`It began with ${e.title.toUpperCase()}: ${e.shortDescription}`),t.radioContact&&o.push("Your desperate radio transmissions breached the military blockade, maintaining contact with offshore search and rescue aircraft."),t.undergroundRouteFound&&o.push("By navigating the subterranean conduits beneath the island, you bypassed deadly perimeter minefields and closed the distance to the extraction zone."),t.powerRestored&&o.push("Restoring auxiliary high-voltage power to the sector ignited perimeter floodlights, giving rescue pilots an undeniable visual waypoint."),t.cureSecured&&o.push("Tucked inside your tactical chest rig is the sealed titanium vial containing the genetic antibody—the definitive key to halting the pandemic on the mainland."),(t.allyKayaSaved||t.survivorTrust>=2)&&o.push("You did not escape alone. Thanks to your tactical leadership, survivor coalition members boarded the extraction ramp alongside you."),o.push(`With ${n.kills||0} hostiles neutralized across ${r} ferocious waves, your boots lifted off the island as the helo climbed toward the morning sun.`),o.push("Sector 4 is left in smoldering ruin, but you survived—and carried hope back to the world."),o.join(" ")}},{id:"ending_scientific_discovery",title:"THE TRUTH UNLOCKED: THE CURE ARCHIVE",archetype:"Truth Seeker",tags:["science","medical","intel","quarantine"],requiredState:{minWaves:3},probabilityWeight:8,audioProfile:"cryo_lab",generateEpilogue:i=>{const{startingStory:e,state:t,stats:n,level:s,totalXP:a,wavesCleared:r}=i,o=[];return o.push(`Your journey initiated from ${e.title.toUpperCase()}.`),t.hospitalVisited&&o.push("Penetrating the bio-containment seals of St. Jude's sub-level cryo-vaults uncovered the dark secrets of Project Aegis."),t.majorClueFound&&o.push("Classified dictaphone logs confirmed that the viral contagion was engineered rather than natural, exposing the high-level military conspiracy."),t.powerRestored&&o.push("With electrical generators brought back online, you copied terabytes of genetic sequencing data onto encrypted solid-state drives."),(t.cureSecured||t.partialCure)&&o.push("The synthesized antibody matrix in your possession proves the pathogen can be arrested before irreversible neural collapse occurs."),o.push(`Reaching Level ${s} with ${a} XP and eliminating ${n.kills||0} infected, you secured the scientific truth that will save millions.`),o.push("The island was a crucible, but your survival ensured the cure will reach humanity."),o.join(" ")}},{id:"ending_coastal_breakout",title:"MARITIME EVACUATION: THE SEAWARD VOYAGE",archetype:"Seaward Navigator",tags:["coastal","escape","convoy","beacon"],requiredState:{minWaves:3},probabilityWeight:8,audioProfile:"coastal_surf",generateEpilogue:i=>{const{startingStory:e,state:t,stats:n,level:s,totalXP:a,wavesCleared:r}=i,o=[];return o.push(`Setting out from ${e.title.toUpperCase()}, you fought toward the rocky shores of Sector 4.`),t.convoySeen&&o.push("Salvaging heavy marine diesel fuel from the destroyed convoy route gave you the exact propellant needed to fire the harbor cutter's engines."),t.undergroundRouteFound&&o.push("Emerging from the seaside drainage conduits, you reached the boat dock without alerting the massive horde roaming the highways."),t.beaconLit&&o.push("The blinding five-million candlepower beam of the summit lighthouse pierced the offshore fog banks, illuminating a safe channel through the shoals."),o.push(`After surviving ${r} intense zombie onslaughts and scoring ${n.headshots||0} precision headshots, the ship's twin screws churned the ocean.`),o.push("As the island recedes into salt mist and morning shadows, you look forward toward uninfected horizons."),o.join(" ")}},{id:"ending_fortified_sanctuary",title:"HAVEN RECLAIMED: THE PERIMETER REDOUBT",archetype:"Guardian of the Safe Zone",tags:["safehouse","community","defense","survivor"],requiredState:{minWaves:3},probabilityWeight:8,audioProfile:"dawn_triumph",generateEpilogue:i=>{const{startingStory:e,state:t,stats:n,level:s,totalXP:a,wavesCleared:r}=i,o=[];return o.push(`From the moment you chose ${e.title.toUpperCase()}, you resolved not merely to escape, but to build an enduring bastion.`),t.safehouseEstablished&&o.push("You fortified reinforced blast doors, barricaded windows, and established continuous perimeter patrols."),t.powerRestored&&o.push("Substation power electrified perimeter fences, incinerating charging infected before they could breach the inner courtyards."),t.survivorTrust>=2&&o.push("Scattered survivors rallied around your combat leadership, forming a disciplined coalition capable of defending their home."),o.push(`With ${n.kills||0} confirmed kills and ${a} total experience, your redoubt stands impregnable.`),o.push("While the world outside struggles in darkness, the light of your haven continues to burn strong."),o.join(" ")}},{id:"ending_lone_survivor_dawn",title:"THE LONE VIGIL: SURVIVOR OF THE ABYSS",archetype:"Lone Wolf Survivor",tags:["survival","tactical","mystery"],requiredState:{minWaves:1},probabilityWeight:7,audioProfile:"dawn_triumph",generateEpilogue:i=>{const{startingStory:e,state:t,stats:n,level:s,totalXP:a,wavesCleared:r}=i,o=[];return o.push(`Your ordeal started with ${e.title.toUpperCase()}.`),o.push(`Through sheer grit, tactical marksmanship, and split-second reflexes, you stood alone against ${n.kills||0} zombies.`),t.undergroundRouteFound&&o.push("You mapped the hidden underbelly of the island, staying one step ahead of relentless mutant pursuers."),t.radioContact&&o.push("Though you received radio whispers from afar, you relied on your own rifle and instinct to see the night through."),o.push(`Surviving all ${r} waves and reaching Level ${s}, the sunrise warms your battered leather jacket.`),o.push("You reload your sidearm, shoulder your assault pack, and step toward the horizon. You conquered the impossible."),o.join(" ")}}];class u0{constructor(){this.ctx=null,this.masterGain=null,this.currentSoundscape=null,this.isMuted=!1,this.fadeDuration=.5}init(){if(!this.ctx)try{const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.isMuted?0:.22,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination))}catch(e){console.warn("[NarrativeAudioManager] Web Audio not supported:",e)}}ensureContext(){this.init(),this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})}playProfile(e){if(this.ensureContext(),!this.ctx||!this.masterGain)return;const t=this.mapProfileToType(e),n=this.ctx.currentTime;if(this.currentSoundscape){const a=this.currentSoundscape;a.gain&&(a.gain.gain.cancelScheduledValues(n),a.gain.gain.setValueAtTime(a.gain.gain.value,n),a.gain.gain.linearRampToValueAtTime(1e-4,n+this.fadeDuration)),setTimeout(()=>{try{a.stop&&a.stop()}catch{}},this.fadeDuration*1e3+50)}const s=this.buildSoundscape(t);s&&(s.gain.gain.setValueAtTime(1e-4,n),s.gain.gain.linearRampToValueAtTime(1,n+this.fadeDuration),this.currentSoundscape=s)}mapProfileToType(e){if(!e)return"ambient_wind";if(["coastal_surf","radio_static","forest_tension","horde_approaching","facility_hum","cryo_lab","subterranean_alarm","mountain_storm","beacon_hum","boss_standoff","helicopter_rotor","dawn_triumph","ambient_wind"].includes(e))return e;if(e==="night_transmission")return"radio_static";if(e==="cold_concrete"||e==="server_room")return"facility_hum";if(e==="sterile_horror"||e==="cryo_facility")return"cryo_lab";if(e==="ocean_winds"||e==="murky_water")return"coastal_surf";if(e==="subterranean_damp"||e==="dark_sewer"||e==="toxic_industrial")return"subterranean_alarm";if(e==="high_altitude_wind"||e==="thunderous_summit")return"beacon_hum";const n=parseInt(e.toString().replace(/\D/g,""),10)||1;return n===1||n===2?"coastal_surf":n===5||n===11||n===29?"radio_static":n>=3&&n<=10?"forest_tension":n>=11&&n<=20?"horde_approaching":n>=21&&n<=28?"facility_hum":n>=29&&n<=35?"cryo_lab":n>=36&&n<=40?"subterranean_alarm":n>=41&&n<=46?"mountain_storm":n>=47&&n<=50?"beacon_hum":n>=51&&n<=53?"boss_standoff":n>=54&&n<=56?"helicopter_rotor":n>=57?"dawn_triumph":"forest_tension"}buildSoundscape(e){if(!this.ctx)return null;const t=this.ctx.currentTime,n=this.ctx.createGain();n.connect(this.masterGain);const s=[],a=()=>{s.forEach(r=>{try{r.stop&&r.stop(),r.disconnect()}catch{}})};switch(e){case"coastal_surf":case"ambient_wind":{const r=this.ctx.sampleRate*2,o=this.ctx.createBuffer(1,r,this.ctx.sampleRate),l=o.getChannelData(0);let c=0,h=0,d=0;for(let m=0;m<r;m++){const f=Math.random()*2-1;c=.99*c+f*.05,h=.95*h+f*.08,d=.9*d+f*.12,l[m]=c+h+d}const u=this.ctx.createBufferSource();u.buffer=o,u.loop=!0;const p=this.ctx.createBiquadFilter();p.type="lowpass",p.frequency.setValueAtTime(260,t);const g=this.ctx.createOscillator(),v=this.ctx.createGain();g.frequency.setValueAtTime(.18,t),v.gain.setValueAtTime(140,t),g.connect(v),v.connect(p.frequency),u.connect(p),p.connect(n),u.start(t),g.start(t),s.push(u,g);break}case"radio_static":{const r=this.ctx.sampleRate*2,o=this.ctx.createBuffer(1,r,this.ctx.sampleRate),l=o.getChannelData(0);for(let p=0;p<r;p++)l[p]=(Math.random()*2-1)*.25;const c=this.ctx.createBufferSource();c.buffer=o,c.loop=!0;const h=this.ctx.createBiquadFilter();h.type="bandpass",h.frequency.setValueAtTime(1800,t),h.Q.setValueAtTime(2,t),c.connect(h),h.connect(n),c.start(t),s.push(c);const d=this.ctx.createOscillator(),u=this.ctx.createGain();d.type="sine",d.frequency.setValueAtTime(940,t),u.gain.setValueAtTime(.04,t),d.connect(u),u.connect(n),d.start(t),s.push(d);break}case"facility_hum":case"cryo_lab":{const r=this.ctx.createOscillator();r.type="sawtooth",r.frequency.setValueAtTime(60,t);const o=this.ctx.createOscillator();o.type="sine",o.frequency.setValueAtTime(120,t);const l=this.ctx.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(180,t);const c=this.ctx.createGain();c.gain.setValueAtTime(.18,t),r.connect(l),o.connect(l),l.connect(c),c.connect(n),r.start(t),o.start(t),s.push(r,o);break}case"subterranean_alarm":{const r=this.ctx.createOscillator();r.type="triangle",r.frequency.setValueAtTime(320,t);const o=this.ctx.createOscillator(),l=this.ctx.createGain();o.frequency.setValueAtTime(1,t),l.gain.setValueAtTime(120,t),o.connect(l),l.connect(r.frequency);const c=this.ctx.createGain();c.gain.setValueAtTime(.12,t),r.connect(c),c.connect(n),r.start(t),o.start(t),s.push(r,o);break}case"mountain_storm":case"boss_standoff":{const r=this.ctx.createOscillator();r.type="sine",r.frequency.setValueAtTime(45,t);const o=this.ctx.createGain();o.gain.setValueAtTime(.35,t),r.connect(o),o.connect(n),r.start(t),s.push(r);const l=this.ctx.createOscillator();l.frequency.setValueAtTime(.4,t);const c=this.ctx.createGain();c.gain.setValueAtTime(12,t),l.connect(c),c.connect(r.frequency),l.start(t),s.push(l);break}case"helicopter_rotor":{const r=this.ctx.createOscillator();r.type="sawtooth",r.frequency.setValueAtTime(55,t);const o=this.ctx.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(220,t);const l=this.ctx.createOscillator();l.type="square",l.frequency.setValueAtTime(4.8,t);const c=this.ctx.createGain();c.gain.setValueAtTime(.2,t),r.connect(o),o.connect(c),l.connect(c.gain),c.connect(n),r.start(t),l.start(t),s.push(r,l);break}case"dawn_triumph":{[130.81,196,329.63].forEach(o=>{const l=this.ctx.createOscillator();l.type="sine",l.frequency.setValueAtTime(o,t);const c=this.ctx.createGain();c.gain.setValueAtTime(.08,t),l.connect(c),c.connect(n),l.start(t),s.push(l)});break}default:{const r=this.ctx.createOscillator();r.type="sine",r.frequency.setValueAtTime(65,t);const o=this.ctx.createGain();o.gain.setValueAtTime(.25,t),r.connect(o),o.connect(n),r.start(t),s.push(r);break}}return{gain:n,stop:a}}stop(){if(this.currentSoundscape){if(this.ctx&&this.currentSoundscape.gain){const e=this.ctx.currentTime;this.currentSoundscape.gain.gain.linearRampToValueAtTime(1e-4,e+this.fadeDuration)}setTimeout(()=>{try{this.currentSoundscape&&this.currentSoundscape.stop&&this.currentSoundscape.stop(),this.currentSoundscape=null}catch{}},this.fadeDuration*1e3+50)}}setMuted(e){this.isMuted=!!e,this.masterGain&&this.ctx&&this.masterGain.gain.setValueAtTime(this.isMuted?0:.22,this.ctx.currentTime)}}const Ya=new u0,bl="aftertrace_random_story_state";function f0(i){let e=i>>>0;return function(){e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}class p0{constructor(){this.startingStories=c0,this.eventsPool=h0,this.endings=d0,this.state=this.getInitialState(),this.activeStoryEvent=null,this.isStoryActive=!1,this.onEventDisplay=null,this.onCloseModal=null,this.rng=Math.random}getInitialState(){return{selectedStartingStoryId:null,runSeed:this.generateRunSeed(),currentEventId:null,previousEventId:null,visitedEvents:[],recentTags:[],storyTags:[],storyProgress:0,mysteryLevel:0,survivorTrust:0,radioContact:!1,powerRestored:!1,hospitalVisited:!1,safehouseEstablished:!1,convoySeen:!1,undergroundRouteFound:!1,majorClueFound:!1,cureSecured:!1,partialCure:!1,allyKayaSaved:!1,finalSequenceStarted:!1,endingType:null,choicesMade:[]}}generateRunSeed(){return`RUN-${Math.floor(1e4+Math.random()*9e4)}`}setSeed(e){e||(e=this.generateRunSeed()),this.state.runSeed=e;let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n)|0;this.rng=f0(t)}seededRandom(){return this.rng()}getAllStartingStories(){return this.startingStories}getStartingStory(e){return this.startingStories.find(t=>t.id===e)||this.startingStories[0]}initializeStoryRun(e,t=null){const n=this.getStartingStory(e);return this.setSeed(t||this.generateRunSeed()),this.state={...this.getInitialState(),selectedStartingStoryId:n.id,runSeed:this.state.runSeed,storyTags:[...n.tags],recentTags:[...n.tags],mysteryLevel:n.initialState.mysteryLevel||0,survivorTrust:n.initialState.survivorTrust||0,radioContact:!!n.initialState.radioContact,powerRestored:!!n.initialState.powerRestored,hospitalVisited:!!n.initialState.hospitalVisited,safehouseEstablished:!!n.initialState.safehouseEstablished,convoySeen:!!n.initialState.convoySeen,undergroundRouteFound:!!n.initialState.undergroundRouteFound,majorClueFound:!!n.initialState.majorClueFound},this.saveState(),Ya.playProfile(n.audioProfile),Ei.speak(`${n.title}. ${n.openingNarration}`),n}loadState(){try{if(typeof window<"u"&&window.localStorage){const e=localStorage.getItem(bl);if(e){const t=JSON.parse(e);this.state=t,this.state.runSeed&&this.setSeed(this.state.runSeed)}}}catch(e){console.warn("[StoryEngine] Failed to load state:",e)}}saveState(){try{typeof window<"u"&&window.localStorage&&localStorage.setItem(bl,JSON.stringify(this.state))}catch(e){console.warn("[StoryEngine] Failed to save state:",e)}}resetStory(){this.state=this.getInitialState(),this.setSeed(this.state.runSeed),this.saveState()}getEligibleEvents(e=1,t=1){const n=this.state.visitedEvents||[],s=this.eventsPool.filter(a=>{if(a.onceOnly!==!1&&n.includes(a.id)||n.slice(-3).includes(a.id)||e<=1&&a.intensity!=="early"||e===2&&a.intensity!=="early"&&a.intensity!=="mid"||e===3&&a.intensity!=="mid"&&a.intensity!=="late"||e>=4&&a.intensity!=="late"&&a.intensity!=="finale")return!1;const o=a.requiredState||{};return!(o.minWave&&e<o.minWave||o.maxWave&&e>o.maxWave||o.minLevel&&t<o.minLevel||o.powerRestored!==void 0&&o.powerRestored!==this.state.powerRestored||o.hospitalVisited!==void 0&&o.hospitalVisited!==this.state.hospitalVisited||a.incompatibleTags&&a.incompatibleTags.some(l=>this.state.storyTags.includes(l)))});if(s.length===0){const a=this.eventsPool.filter(r=>!n.includes(r.id));return a.length>0?a:this.eventsPool}return s}selectRandomEvent(e=1,t=1){const n=this.getEligibleEvents(e,t);if(!n||n.length===0)return null;const s=n.map(o=>{let l=o.probabilityWeight||5;o.tags&&this.state.storyTags&&o.tags.forEach(h=>{this.state.storyTags.includes(h)&&(l+=3)});const c=this.state.recentTags[this.state.recentTags.length-1];return o.tags&&o.tags[0]===c&&(l=Math.max(1,Math.floor(l*.45))),{event:o,weight:l}}),a=s.reduce((o,l)=>o+l.weight,0);let r=this.seededRandom()*a;for(let o=0;o<s.length;o++)if(r-=s[o].weight,r<=0)return s[o].event;return s[s.length-1].event}getNextStoryEvent(e=1,t=1){const n=this.selectRandomEvent(e,t);return n?(this.applyStoryEvent(n),n):null}applyStoryEvent(e){this.activeStoryEvent=e,this.isStoryActive=!0,this.state.previousEventId=this.state.currentEventId,this.state.currentEventId=e.id,this.state.visitedEvents.includes(e.id)||this.state.visitedEvents.push(e.id),this.state.storyProgress+=1,e.tags&&(e.tags.forEach(t=>{this.state.storyTags.includes(t)||this.state.storyTags.push(t)}),this.state.recentTags.push(e.tags[0])),e.stateUpdates&&Object.assign(this.state,e.stateUpdates),e.gameplayEffect&&e.gameplayEffect.xp&&ft.addXP(e.gameplayEffect.xp,{isStoryChoice:!0,nodeTitle:e.title}),this.saveState(),Ya.playProfile(e.audioProfile),Ei.speak(`${e.title}. ${e.speaker}. ${e.narration}`),this.onEventDisplay&&this.onEventDisplay(e,t=>this.selectPlayerDialogueChoice(t))}selectPlayerDialogueChoice(e){if(!this.activeStoryEvent||!this.activeStoryEvent.dialogue){this.finishCurrentStoryEncounter();return}const t=this.activeStoryEvent.dialogue.options[e];t&&(this.state.choicesMade.push({eventId:this.activeStoryEvent.id,choiceText:t.text,timestamp:Date.now()}),t.stateUpdate&&Object.assign(this.state,t.stateUpdate),t.effect&&t.effect.xp&&ft.addXP(t.effect.xp,{isStoryChoice:!0,nodeTitle:t.text}),this.saveState()),this.finishCurrentStoryEncounter()}finishCurrentStoryEncounter(){Ei.stop(),this.isStoryActive=!1,this.activeStoryEvent=null,this.onCloseModal&&(this.onCloseModal(),this.onCloseModal=null)}skipStory(){this.finishCurrentStoryEncounter()}triggerWaveCheckpoint(e,t,n=null){this.onCloseModal=n,this.isStoryActive=!0,this.getNextStoryEvent(e,t)||this.finishCurrentStoryEncounter()}generatePersonalizedRecap(e={}){var h;const t=this.getStartingStory(this.state.selectedStartingStoryId),n=ft.getProgress(),s=ft.getStats(),a=this.endings.filter(d=>{var p;const u=((p=d.requiredState)==null?void 0:p.minWaves)||1;return(e.wavesCleared||s.roundsSurvived||1)>=u});let r=a[0],o=-1;a.forEach(d=>{let u=d.probabilityWeight||5;d.tags&&d.tags.forEach(p=>{this.state.storyTags.includes(p)&&(u+=4)}),u>o&&(o=u,r=d)});const l={startingStory:t,state:this.state,stats:{...s,...e},level:n.level,totalXP:n.totalXP,wavesCleared:e.wavesCleared||s.roundsSurvived||1},c=r.generateEpilogue(l);return Ei.speak(`${r.title}. ${c}`),Ya.playProfile(r.audioProfile),{startingStory:`${t.num.toString().padStart(2,"0")} — ${t.title}`,startingStoryId:t.id,runSeed:this.state.runSeed,archetype:r.archetype,endingTitle:r.title,endingNarrative:c,eventsExperiencedCount:this.state.visitedEvents.length,visitedEventsList:this.state.visitedEvents,wavesCleared:l.wavesCleared,totalKills:l.stats.kills||0,finalLevel:n.level,totalXP:n.totalXP,weaponsUnlocked:((h=n.unlockedWeapons)==null?void 0:h.length)||1,uniquePathNote:"This story sequence was uniquely generated for this run."}}}const xt=new p0;class m0{constructor(e){this.input=e,this.container=document.getElementById("shooter-hud"),this.healthBarFill=document.getElementById("health-bar-fill"),this.healthNumber=document.getElementById("health-number"),this.progressHud=document.getElementById("player-progress-hud"),this.levelBadge=document.getElementById("player-level-badge"),this.xpCounter=document.getElementById("player-xp-counter"),this.xpBarFill=document.getElementById("player-xp-bar-fill"),this.floatingXpContainer=document.getElementById("floating-xp-container"),this.levelUpBanner=document.getElementById("level-up-banner"),this.levelUpSubtitle=document.getElementById("level-up-subtitle"),this.levelUpUnlock=document.getElementById("level-up-unlock"),this.weaponLockedAlert=document.getElementById("weapon-locked-alert"),this.weaponLockedText=document.getElementById("weapon-locked-text"),this.loadoutGrid=document.getElementById("loadout-grid"),this.debriefingModal=document.getElementById("campaign-debriefing-modal"),this.ttsVoiceToggleBtn=document.getElementById("tts-voice-toggle-btn"),this.weaponSelectBtn=document.getElementById("weapon-select-btn"),this.weaponIcon=document.getElementById("weapon-icon"),this.weaponName=document.getElementById("weapon-name"),this.ammoDisplay=document.getElementById("ammo-display"),this.ammoText=document.getElementById("ammo-counter-text"),this.reloadPrompt=document.getElementById("desktop-reload-prompt"),this.mobileReloadBtn=document.getElementById("mobile-reload-btn"),this.waveBanner=document.getElementById("wave-banner"),this.waveTitle=document.getElementById("wave-title"),this.waveSubtitle=document.getElementById("wave-subtitle"),this.waveBadge=document.getElementById("wave-badge"),this.crosshair=document.getElementById("crosshair"),this.damageVignette=document.getElementById("damage-vignette"),this.sniperScopeOverlay=document.getElementById("sniper-scope-overlay"),this.mobileAimBtn=document.getElementById("mobile-aim-btn"),this.gameOverScreen=document.getElementById("game-over-screen"),this.titleScreen=document.getElementById("title-screen"),this.aimAssistBtn=document.getElementById("aim-assist-toggle"),this.soundBtn=document.getElementById("sound-toggle-btn"),this.sensToggleBtn=document.getElementById("sensitivity-toggle"),this.fullscreenBtn=document.getElementById("fullscreen-toggle-btn"),this.sensSlider=document.getElementById("sensitivity-slider"),this.sensValueText=document.getElementById("sens-value-text"),this.healingBanner=document.getElementById("healing-banner"),this.healingTimeout=null,this._damageFlashTimeout=null,this._levelUpTimeout=null,this._lockedTimeout=null,this.selectedDifficulty="medium",this.selectedCharacter="maya",this.bannerTimeout=null,this.onWeaponSwitchRequest=null,this.onCharacterSelect=null,this._lastHp=-1,this._lastMaxHp=-1,this._lastHealthClass="",this._lastWeaponId="",this._lastAmmoStr="",this._lastIsReloading=null,this._lastIsMagEmpty=null,this._lastWaveBadgeText="",this._lastIsSniperADS=null,this._lastIsAiming=null,this._lastLevel=-1,this._lastXPStr="",this._lastProgressPct=-1,this.selectedStartingStoryId="story_01",this.storySelectionModal=document.getElementById("story-selection-modal"),this.storyIntroModal=document.getElementById("story-intro-modal"),this.storyDebugPanel=document.getElementById("story-debug-panel"),this.initControls(),this.initCharacterSelector(),this.initStorySelectionUI(),this.initStoryDebugPanel(),this.initProgressionListeners(),this.initDebugTools(),this.initNarrativeDisplay()}initControls(){this.soundBtn&&this.soundBtn.addEventListener("click",()=>{const a=Km(),r=this.soundBtn.querySelector(".music-icon")||this.soundBtn;r.textContent=a?"🔇":"🔊"}),this.aimAssistBtn&&this.aimAssistBtn.addEventListener("click",()=>{this.input.autoAimEnabled=!this.input.autoAimEnabled,this.aimAssistBtn.classList.toggle("active",this.input.autoAimEnabled),this.aimAssistBtn.textContent=`AIM: ${this.input.autoAimEnabled?"ON":"OFF"}`});const e=[.8,1,1.4,1.8],t=a=>{this.sensToggleBtn&&(this.sensToggleBtn.textContent=`SENS: ${a.toFixed(1)}x`),this.sensSlider&&(this.sensSlider.value=a.toString()),this.sensValueText&&(this.sensValueText.textContent=`${a.toFixed(1)}x`)};if(t(this.input.sensitivity),this.sensToggleBtn&&this.sensToggleBtn.addEventListener("click",()=>{const a=this.input.sensitivity;let r=e[0];for(let o=0;o<e.length;o++)if(Math.abs(a-e[o])<.05){r=e[(o+1)%e.length];break}this.input.setSensitivity(r),t(r)}),this.sensSlider&&this.sensSlider.addEventListener("input",a=>{const r=parseFloat(a.target.value);this.input.setSensitivity(r),t(r)}),this.fullscreenBtn){const a=()=>{document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})};this.fullscreenBtn.addEventListener("click",a),window.addEventListener("keydown",o=>{if((o.key==="f"||o.key==="F")&&!o.ctrlKey&&!o.altKey&&!o.metaKey){if(document.activeElement&&(document.activeElement.tagName==="INPUT"||document.activeElement.tagName==="TEXTAREA"))return;a()}});const r=()=>{const o=!!document.fullscreenElement;this.fullscreenBtn.innerHTML=o?`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2">
               <path d="M4 14h6m0 0v6m0-6l-7 7m17-7h-6m0 0v6m0-6l7 7M4 10h6m0 0V4m0 6L3 3m17 7h-6m0 0V4m0 6l7-7"/>
             </svg>`:`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2">
               <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
             </svg>`};document.addEventListener("fullscreenchange",r)}if(this.weaponSelectBtn){let a=0;const r=o=>{o&&(o.preventDefault(),o.stopPropagation());const l=performance.now();l-a<180||(a=l,this.onWeaponSwitchRequest&&this.onWeaponSwitchRequest())};this.weaponSelectBtn.addEventListener("pointerdown",r),this.weaponSelectBtn.addEventListener("click",r)}const n=document.querySelectorAll(".diff-btn"),s=document.getElementById("difficulty-description");n.forEach(a=>{a.addEventListener("click",()=>{const r=a.getAttribute("data-diff");if(!r||!Ni[r])return;this.selectedDifficulty=r,n.forEach(l=>l.classList.remove("active")),a.classList.add("active");const o=Ni[r];s&&(s.textContent=o.description)})})}initCharacterSelector(){const e=document.getElementById("character-grid"),t=document.getElementById("character-trait-info");e&&(e.innerHTML="",Nr.forEach(n=>{const s=document.createElement("div");s.className=`char-card ${n.id===this.selectedCharacter?"active":""}`,s.setAttribute("data-char",n.id),s.innerHTML=`
        <div class="char-avatar" style="border-color:${n.color}">
          <span class="char-initial">${n.name[0]}</span>
        </div>
        <div class="char-meta">
          <span class="char-name">${n.name}</span>
          <span class="char-role">${n.title}</span>
        </div>
      `,s.addEventListener("click",()=>{this.selectedCharacter=n.id,document.querySelectorAll(".char-card").forEach(a=>a.classList.remove("active")),s.classList.add("active"),t&&(t.innerHTML=`<strong>${n.name}</strong> • <em>${n.trait}</em> — ${n.traitDesc}`),this.onCharacterSelect&&this.onCharacterSelect(n.id)}),e.appendChild(s)}))}update(e,t){const n=e.health,s=e.maxHealth;if(n!==this._lastHp||s!==this._lastMaxHp){this._lastHp=n,this._lastMaxHp=s;const d=Math.max(0,Math.min(100,n/s*100));if(this.healthBarFill){this.healthBarFill.style.width=`${d}%`;const u=d>50?"healthy":d>20?"damaged":"critical";u!==this._lastHealthClass&&(this.healthBarFill.className=u,this._lastHealthClass=u)}this.healthNumber&&(this.healthNumber.textContent=`${Math.ceil(n)} / ${s}`),n>=s&&this.damageVignette&&(this.damageVignette.classList.remove("flash"),this.damageVignette.style.opacity="0",this._damageFlashTimeout&&(clearTimeout(this._damageFlashTimeout),this._damageFlashTimeout=null))}const a=e.activeWeapon;a.id!==this._lastWeaponId&&(this._lastWeaponId=a.id,this.weaponIcon&&(this.weaponIcon.textContent=a.icon),this.weaponName&&(this.weaponName.textContent=a.name));const r=`${e.magazine} / ${e.reserveAmmo}`;r!==this._lastAmmoStr&&(this._lastAmmoStr=r,this.ammoText&&(this.ammoText.textContent=r)),e.isReloading!==this._lastIsReloading&&(this._lastIsReloading=e.isReloading,this.ammoDisplay&&this.ammoDisplay.classList.toggle("reloading",e.isReloading));const o=e.isAlive()&&e.magazine===0&&e.reserveAmmo>0&&!e.isReloading;o!==this._lastIsMagEmpty&&(this._lastIsMagEmpty=o,this.reloadPrompt&&(this.reloadPrompt.style.display=o?"block":"none",this.reloadPrompt.style.opacity=o?"1":"0"),this.mobileReloadBtn&&this.mobileReloadBtn.classList.toggle("pulse-empty",o));const l=t.getRemainingCount(),c=`WAVE ${t.currentWave} • ${l} REMAINING`;c!==this._lastWaveBadgeText&&(this._lastWaveBadgeText=c,this.waveBadge&&(this.waveBadge.textContent=c));const h=!!(this.input.isAiming&&e.currentWeapon==="sniper");h!==this._lastIsSniperADS&&(this._lastIsSniperADS=h,this.sniperScopeOverlay&&this.sniperScopeOverlay.classList.toggle("active",h)),this.input.isAiming!==this._lastIsAiming&&(this._lastIsAiming=this.input.isAiming,this.mobileAimBtn&&this.mobileAimBtn.classList.toggle("aiming",this.input.isAiming)),this.updateProgressionHUD(ft.getProgress())}initProgressionListeners(){ft.on("xpAdded",({amount:e,progress:t,metadata:n})=>{this.showFloatingXP(e,n==null?void 0:n.isStoryChoice),this.updateProgressionHUD(t)}),ft.on("levelUp",({newLevel:e,unlockedWeapons:t,progress:n})=>{this.showLevelUpBanner(e,t),this.updateProgressionHUD(n),this.renderLoadoutArsenal()}),ft.on("weaponUnlocked",()=>{this.renderLoadoutArsenal()}),ft.on("progressReset",()=>{this.updateProgressionHUD(ft.getProgress()),this.renderLoadoutArsenal(),this.showFloatingXP("RESET")}),this.renderLoadoutArsenal(),this.updateProgressionHUD(ft.getProgress())}updateProgressionHUD(e){if(!e||!this.progressHud)return;e.level!==this._lastLevel&&(this._lastLevel=e.level,this.levelBadge&&(this.levelBadge.textContent=`LVL ${e.level}`));const t=`${e.currentXP} / ${e.xpNeeded} XP`;t!==this._lastXPStr&&(this._lastXPStr=t,this.xpCounter&&(this.xpCounter.textContent=t)),e.progressPct!==this._lastProgressPct&&(this._lastProgressPct=e.progressPct,this.xpBarFill&&(this.xpBarFill.style.width=`${e.progressPct}%`))}showFloatingXP(e,t=!1){if(!this.floatingXpContainer)return;const n=document.createElement("div");n.className="floating-xp-text",n.textContent=typeof e=="number"?`+${e} XP${t?" ★":""}`:String(e);const s=50+(Math.random()-.5)*16,a=44+(Math.random()-.5)*10;n.style.left=`${s}%`,n.style.top=`${a}%`,this.floatingXpContainer.appendChild(n),setTimeout(()=>{n.remove()},1250)}showLevelUpBanner(e,t=[]){if(this.levelUpBanner){if(this.levelUpSubtitle&&(this.levelUpSubtitle.textContent=`REACHED LEVEL ${e}`),this.levelUpUnlock)if(t&&t.length>0){const n=t.map(s=>s.name||s.id).join(", ");this.levelUpUnlock.textContent=`UNLOCKED: ${n}!`,this.levelUpUnlock.style.display="block"}else this.levelUpUnlock.style.display="none";this.levelUpBanner.style.display="block",oc(),this._levelUpTimeout&&clearTimeout(this._levelUpTimeout),this._levelUpTimeout=setTimeout(()=>{this.levelUpBanner.style.display="none"},3200)}}showWeaponLockedAlert(e){var a;if(!this.weaponLockedAlert)return;const t=Object.entries(Fr).find(([r,o])=>o.id===e),n=t?t[0]:"5",s=((a=Xt[e])==null?void 0:a.name)||e.toUpperCase();this.weaponLockedText&&(this.weaponLockedText.textContent=`LOCKED: ${s} requires Level ${n}`),this.weaponLockedAlert.style.display="flex",this._lockedTimeout&&clearTimeout(this._lockedTimeout),this._lockedTimeout=setTimeout(()=>{this.weaponLockedAlert.style.display="none"},2200)}renderLoadoutArsenal(){if(!this.loadoutGrid)return;const e=[{id:"pistol",reqLevel:1},{id:"smg",reqLevel:2},{id:"shotgun",reqLevel:3},{id:"rifle",reqLevel:4},{id:"sniper",reqLevel:5}];this.loadoutGrid.innerHTML="",e.forEach(({id:t,reqLevel:n})=>{const s=Xt[t];if(!s)return;const a=ft.isWeaponUnlocked(t),r=document.createElement("div");r.className=`loadout-card ${a?"unlocked":"locked"}`,r.innerHTML=`
        <div class="loadout-card-name">${s.icon} ${s.name}</div>
        <div class="loadout-card-status">${a?"✓ UNLOCKED":`🔒 LEVEL ${n}`}</div>
      `,this.loadoutGrid.appendChild(r)})}initDebugTools(){var e,t,n,s;(e=document.getElementById("dbg-add-xp"))==null||e.addEventListener("click",()=>{ft.debugAddXP(100)}),(t=document.getElementById("dbg-level-up"))==null||t.addEventListener("click",()=>{ft.debugLevelUp()}),(n=document.getElementById("dbg-unlock-weapon"))==null||n.addEventListener("click",()=>{const r=["pistol","smg","shotgun","rifle","sniper"].find(o=>!ft.isWeaponUnlocked(o));r?ft.debugUnlockWeapon(r):this.showFloatingXP("ALL UNLOCKED")}),(s=document.getElementById("dbg-reset-prog"))==null||s.addEventListener("click",()=>{ft.resetProgress()}),this.ttsVoiceToggleBtn&&this.ttsVoiceToggleBtn.addEventListener("click",()=>{const a=Ei.toggleMute();this.ttsVoiceToggleBtn.classList.toggle("active",!a);const r=this.ttsVoiceToggleBtn.querySelector(".tts-text")||this.ttsVoiceToggleBtn,o=this.ttsVoiceToggleBtn.querySelector(".tts-icon")||this.ttsVoiceToggleBtn;r.textContent=a?"VOICE: OFF":"VOICE: ON",o.textContent=a?"🔇":"🔊"})}initStorySelectionUI(){const e=document.getElementById("browse-stories-btn"),t=document.getElementById("close-story-selection-btn"),n=document.getElementById("random-story-btn"),s=document.getElementById("story-search-input"),a=document.getElementById("story-filter-chips"),r=xt.getStartingStory(this.selectedStartingStoryId);this.updateStartingStoryPreview(r),e&&e.addEventListener("click",c=>{c.preventDefault(),this.showStorySelectionModal()}),t&&t.addEventListener("click",()=>{this.hideStorySelectionModal()}),n&&n.addEventListener("click",()=>{const c=xt.getAllStartingStories(),h=c[Math.floor(Math.random()*c.length)];this.selectStartingStory(h.id),es(),this.hideStorySelectionModal()});let o="all",l="";s&&s.addEventListener("input",c=>{l=c.target.value.toLowerCase().trim(),this.renderStoryCards(o,l)}),a&&a.addEventListener("click",c=>{const h=c.target.closest(".filter-chip");h&&(a.querySelectorAll(".filter-chip").forEach(d=>d.classList.remove("active")),h.classList.add("active"),o=h.dataset.filter||"all",this.renderStoryCards(o,l))}),this.renderStoryCards("all","")}updateStartingStoryPreview(e){if(!e)return;const t=document.getElementById("preview-story-num"),n=document.getElementById("preview-story-tag"),s=document.getElementById("preview-story-title"),a=document.getElementById("preview-story-desc");t&&(t.textContent=e.num.toString().padStart(2,"0")),n&&(n.textContent=e.tags.join(" • ").toUpperCase()),s&&(s.textContent=e.title.toUpperCase()),a&&(a.textContent=`"${e.shortDescription}"`)}showStorySelectionModal(){this.storySelectionModal&&(this.storySelectionModal.style.display="flex",this.renderStoryCards("all",""))}hideStorySelectionModal(){this.storySelectionModal&&(this.storySelectionModal.style.display="none")}selectStartingStory(e){this.selectedStartingStoryId=e;const t=xt.getStartingStory(e);this.updateStartingStoryPreview(t),this.storySelectionModal&&this.storySelectionModal.querySelectorAll(".story-card-option").forEach(s=>{s.classList.toggle("active",s.dataset.storyId===e)})}renderStoryCards(e="all",t=""){const n=document.getElementById("stories-grid-container");if(!n)return;n.innerHTML="",xt.getAllStartingStories().filter(r=>{if(e!=="all"&&!r.tags.some(l=>l.toLowerCase()===e.toLowerCase()))return!1;if(t){const o=r.title.toLowerCase().includes(t),l=r.shortDescription.toLowerCase().includes(t),c=r.tags.some(h=>h.toLowerCase().includes(t));if(!o&&!l&&!c)return!1}return!0}).forEach(r=>{const o=document.createElement("div");o.className=`story-card-option ${r.id===this.selectedStartingStoryId?"active":""}`,o.dataset.storyId=r.id,o.innerHTML=`
        <div class="card-top-row">
          <div class="card-badge-group">
            <span class="card-num-badge">${r.num.toString().padStart(2,"0")}</span>
            <span class="card-atmosphere-badge">${r.tags.slice(0,2).join(" • ")}</span>
          </div>
          <span class="card-icon">${r.icon||"📻"}</span>
        </div>
        <div class="card-title">${r.title}</div>
        <div class="card-desc">"${r.shortDescription}"</div>
        <div class="card-meta-bottom">
          <span class="card-atmosphere-badge">ATMOSPHERE: ${r.atmosphere.replace("_"," ").toUpperCase()}</span>
          <button type="button" class="card-select-btn">BEGIN STORY</button>
        </div>
      `,o.onclick=()=>{es(),this.selectStartingStory(r.id),this.hideStorySelectionModal()},n.appendChild(o)})}showStartingStoryCinematic(e,t){const n=this.storyIntroModal;if(!n){t&&t();return}xt.initializeStoryRun(e.id),n.style.display="flex";const s=document.getElementById("story-header-badge"),a=document.getElementById("story-modal-title"),r=document.getElementById("story-location-tag"),o=document.getElementById("story-body-content"),l=document.getElementById("story-reward-badge"),c=document.getElementById("story-choices"),h=document.getElementById("commence-survival-btn"),d=document.getElementById("skip-story-btn");if(s&&(s.textContent=`PROLOGUE: SCENARIO ${e.num.toString().padStart(2,"0")} • TRANSMISSION DETECTED`),a&&(a.textContent=`${e.num.toString().padStart(2,"0")} — ${e.title.toUpperCase()}`),r&&(r.textContent=`Location: Sector 4 • Atmosphere: ${e.atmosphere.replace("_"," ").toUpperCase()} • Status: Active`),l&&(l.style.display="none"),c&&(c.style.display="none"),h&&(h.style.display="block",h.textContent="COMMENCE SURVIVAL [ENTER]"),o){o.innerHTML="";const v=document.createElement("p");v.textContent=e.openingNarration,v.style.fontSize="1.05rem",v.style.lineHeight="1.65",o.appendChild(v)}let u=!1;const p=()=>{u||(u=!0,Ei.stop(),n.style.display="none",window.removeEventListener("keydown",g),t&&t())};h&&(h.onclick=()=>{es(),p()}),d&&(d.onclick=()=>{p()});const g=v=>{(v.key==="Escape"||v.key==="Enter")&&p()};window.addEventListener("keydown",g)}initNarrativeDisplay(){xt.onEventDisplay=(e,t)=>{this.displayRandomStoryEventModal(e,t)}}displayRandomStoryEventModal(e,t){const n=this.storyIntroModal;if(!n||!e)return;n.style.display="flex";const s=document.getElementById("story-header-badge"),a=document.getElementById("story-modal-title"),r=document.getElementById("story-location-tag"),o=document.getElementById("story-body-content"),l=document.getElementById("story-reward-badge"),c=document.getElementById("story-reward-text"),h=document.getElementById("story-choices"),d=document.getElementById("story-choice-buttons"),u=document.getElementById("story-choice-prompt"),p=document.getElementById("commence-survival-btn"),g=document.getElementById("skip-story-btn");if(s&&(s.textContent=`CHECKPOINT • ${e.speaker.toUpperCase()}`),a&&(a.textContent=e.title.toUpperCase()),r&&(r.textContent=`Tags: ${e.tags.join(" • ").toUpperCase()} • Intensity: ${e.intensity.toUpperCase()}`),l&&e.gameplayEffect?(l.style.display="flex",c&&(c.textContent=`+${e.gameplayEffect.xp||40} XP • INTEL DISCOVERED`)):l&&(l.style.display="none"),o){o.innerHTML="";const v=document.createElement("p");v.textContent=e.narration,v.style.fontSize="1.05rem",v.style.lineHeight="1.65",o.appendChild(v)}e.dialogue&&e.dialogue.options&&h&&d?(h.style.display="block",u&&(u.textContent=e.dialogue.prompt||"CHOOSE YOUR TACTICAL ACTION:"),d.innerHTML="",e.dialogue.options.forEach((v,m)=>{var w;const f=document.createElement("button");f.className="story-choice-btn",f.innerHTML=`
          <span class="choice-icon">⚡</span>
          <div class="choice-text-col">
            <span class="choice-btn-title">${v.text}</span>
            <span class="choice-reward-tag">+${((w=v.effect)==null?void 0:w.xp)||30} XP • STORY INTEL</span>
          </div>
        `,f.onclick=()=>{es(),n.style.display="none",t&&t(m)},d.appendChild(f)}),p&&(p.style.display="none")):(h&&(h.style.display="none"),p&&(p.style.display="block",p.textContent="CONTINUE MISSION [ENTER]",p.onclick=()=>{es(),n.style.display="none",xt.finishCurrentStoryEncounter()})),g&&(g.onclick=()=>{n.style.display="none",xt.skipStory()})}triggerPostWaveStory(e,t){const n=ft.getProgress();xt.triggerWaveCheckpoint(e,n.level,()=>{const s=this.storyIntroModal;s&&(s.style.display="none"),t&&t()})}showCampaignDebriefing(e,t){if(!this.debriefingModal||!e){t&&t();return}const n=document.getElementById("debrief-start-story-badge"),s=document.getElementById("debrief-seed-badge"),a=document.getElementById("debrief-ending-title"),r=document.getElementById("debrief-archetype"),o=document.getElementById("debrief-level-xp"),l=document.getElementById("debrief-kills"),c=document.getElementById("debrief-events-count"),h=document.getElementById("debrief-epilogue-text"),d=document.getElementById("debrief-continue-btn");n&&(n.textContent=`STARTING PREMISE: ${e.startingStory}`),s&&(s.textContent=`SEED: ${e.runSeed}`),a&&(a.textContent=e.endingTitle),r&&(r.textContent=e.archetype),o&&(o.textContent=`Level ${e.finalLevel} • ${e.totalXP} XP`),l&&(l.textContent=`${e.totalKills} Neutralized`),c&&(c.textContent=`${e.eventsExperiencedCount} Narrative Checkpoints`),h&&(h.textContent=e.endingNarrative),this.debriefingModal.style.display="flex",d&&(d.onclick=()=>{this.debriefingModal.style.display="none",t&&t()})}initStoryDebugPanel(){const e=this.storyDebugPanel,t=document.getElementById("dbg-story-debug-toggle"),n=document.getElementById("close-story-debug-btn"),s=document.getElementById("dbg-roll-event-btn"),a=document.getElementById("dbg-new-seed-btn"),r=document.getElementById("dbg-force-ending-btn"),o=document.getElementById("dbg-reset-story-btn"),l=()=>{if(!e)return;const c=e.style.display==="flex";e.style.display=c?"none":"flex",c||this.updateStoryDebugDisplay()};t&&t.addEventListener("click",l),n&&n.addEventListener("click",l),window.addEventListener("keydown",c=>{(c.key==="F9"||c.key==="`"||c.key==="~")&&l()}),s&&s.addEventListener("click",()=>{const c=ft.getProgress();xt.getNextStoryEvent(2,c.level),this.updateStoryDebugDisplay()}),a&&a.addEventListener("click",()=>{xt.setSeed(),this.updateStoryDebugDisplay()}),r&&r.addEventListener("click",()=>{const c=xt.generatePersonalizedRecap({wavesCleared:5});this.showCampaignDebriefing(c,()=>{})}),o&&o.addEventListener("click",()=>{xt.resetStory(),this.updateStoryDebugDisplay()})}updateStoryDebugDisplay(){const e=document.getElementById("dbg-seed"),t=document.getElementById("dbg-start-story"),n=document.getElementById("dbg-curr-event"),s=document.getElementById("dbg-visited"),a=document.getElementById("dbg-tags"),r=document.getElementById("dbg-state-flags"),o=xt.state;e&&(e.textContent=o.runSeed||"None"),t&&(t.textContent=o.selectedStartingStoryId||"story_01"),n&&(n.textContent=o.currentEventId||"None"),s&&(s.textContent=`${o.visitedEvents.length} events: [${o.visitedEvents.join(", ")}]`),a&&(a.textContent=o.storyTags.join(", ")),r&&(r.textContent=`Radio:${o.radioContact} | Power:${o.powerRestored} | Underground:${o.undergroundRouteFound} | Clue:${o.majorClueFound}`)}showHitmarker(){this.crosshair&&(this.crosshair.classList.remove("hit"),this.crosshair.offsetWidth,this.crosshair.classList.add("hit"))}flashEmptyAmmo(){this.ammoDisplay&&(this.ammoDisplay.classList.remove("empty-flash"),this.ammoDisplay.offsetWidth,this.ammoDisplay.classList.add("empty-flash"))}showDamageFlash(){this.damageVignette&&(this._damageFlashTimeout&&(clearTimeout(this._damageFlashTimeout),this._damageFlashTimeout=null),this.damageVignette.classList.remove("flash"),this.damageVignette.style.opacity="",this.damageVignette.offsetWidth,this.damageVignette.classList.add("flash"),this._damageFlashTimeout=setTimeout(()=>{this.damageVignette&&(this.damageVignette.classList.remove("flash"),this.damageVignette.style.opacity="0"),this._damageFlashTimeout=null},450))}showWaveBanner(e,t=""){this.waveBanner&&(this.bannerTimeout&&clearTimeout(this.bannerTimeout),this.waveTitle.textContent=e,this.waveSubtitle.textContent=t,this.waveBanner.classList.add("visible"),this.bannerTimeout=setTimeout(()=>{this.waveBanner.classList.remove("visible")},2200))}showHealingAlert(e="+35 HEALTH"){this.healingBanner&&(this.healingTimeout&&clearTimeout(this.healingTimeout),this.healingBanner.textContent=e,this.healingBanner.classList.add("visible"),this.healingTimeout=setTimeout(()=>{this.healingBanner.classList.remove("visible")},1800))}showGameOver(e,t){if(!this.gameOverScreen)return;this.reloadPrompt&&(this.reloadPrompt.style.display="none",this.reloadPrompt.style.opacity="0"),this._lastIsMagEmpty=!1;const n=document.getElementById("game-over-title"),s=document.getElementById("game-over-stats"),a=document.getElementById("retry-btn");n&&(n.textContent="YOU DIDN'T MAKE IT");const r=na(this.selectedCharacter);s&&(s.innerHTML=`
        <div class="stat-row"><span>Operator</span><strong>${r.name} (${r.title})</strong></div>
        <div class="stat-row"><span>Difficulty</span><strong>${e.difficulty||"Balanced"}</strong></div>
        <div class="stat-row"><span>Waves Survived</span><strong>${e.wavesSurvived}</strong></div>
        <div class="stat-row"><span>Zombies Eliminated</span><strong>${e.zombiesKilled}</strong></div>
        <div class="stat-row"><span>Time Survived</span><strong>${e.timeSurvived}</strong></div>
      `),a&&(a.textContent="Try again",a.onclick=()=>{this.gameOverScreen.classList.remove("visible"),t&&t(this.selectedDifficulty,this.selectedCharacter)}),this.gameOverScreen.classList.add("visible")}showVictory(e,t){const n=xt.generatePersonalizedRecap(e);this.showCampaignDebriefing(n,()=>{this.displayVictoryCard(e,t)})}displayVictoryCard(e,t){if(!this.gameOverScreen)return;this.reloadPrompt&&(this.reloadPrompt.style.display="none",this.reloadPrompt.style.opacity="0"),this._lastIsMagEmpty=!1;const n=document.getElementById("game-over-title"),s=document.getElementById("game-over-stats"),a=document.getElementById("retry-btn");n&&(n.textContent="YOU SURVIVED THE AFTERTRACE");const r=na(this.selectedCharacter);s&&(s.innerHTML=`
        <div class="stat-row"><span>Status</span><strong style="color:#2E7D7A">Island Cleared!</strong></div>
        <div class="stat-row"><span>Operator</span><strong>${r.name} (${r.title})</strong></div>
        <div class="stat-row"><span>Difficulty</span><strong>${e.difficulty||"Balanced"}</strong></div>
        <div class="stat-row"><span>Total Waves Completed</span><strong>${e.wavesSurvived} / 5</strong></div>
        <div class="stat-row"><span>Zombies Eliminated</span><strong>${e.zombiesKilled}</strong></div>
        <div class="stat-row"><span>Survival Duration</span><strong>${e.timeSurvived}</strong></div>
      `),a&&(a.textContent="Play again",a.onclick=()=>{this.gameOverScreen.classList.remove("visible"),t&&t(this.selectedDifficulty,this.selectedCharacter)}),this.gameOverScreen.classList.add("visible")}hideTitleScreen(){this.titleScreen&&this.titleScreen.classList.add("hidden")}showTitleScreen(e){if(this.titleScreen){this.titleScreen.classList.remove("hidden");const t=document.getElementById("start-game-btn");t&&(t.onclick=()=>{this.hideTitleScreen();const n=xt.getStartingStory(this.selectedStartingStoryId);this.showStartingStoryCinematic(n,()=>{e&&e(this.selectedDifficulty,this.selectedCharacter)})})}}showStoryIntro(e){const t=xt.getStartingStory(this.selectedStartingStoryId);this.showStartingStoryCinematic(t,e)}}class g0{constructor(){this.textures={},this.propMaterials={},this.isLoaded=!1}async loadAssets(){try{const[e,t]=await Promise.all([this.loadImage("/assets/props.jpg").catch(()=>null),this.loadImage("/assets/icons.png").catch(()=>null)]);e&&(this.propMaterials.bush1=this.cropToSpriteMaterial(e,0,0,.25,.5,!0),this.propMaterials.bush2=this.cropToSpriteMaterial(e,.25,0,.25,.5,!0),this.propMaterials.bush3=this.cropToSpriteMaterial(e,.5,0,.25,.5,!0),this.propMaterials.crate=this.cropToSpriteMaterial(e,0,.5,.24,.5,!0),this.propMaterials.sandbags=this.cropToSpriteMaterial(e,.24,.5,.27,.5,!0),this.propMaterials.barrel=this.cropToSpriteMaterial(e,.52,.5,.2,.5,!0)),t&&this.injectIcons(t),this.isLoaded=!0}catch(e){console.warn("[AssetManager] Asset loading error:",e)}}loadImage(e){return new Promise((t,n)=>{const s=new Image;s.crossOrigin="anonymous",s.onload=()=>t(s),s.onerror=a=>n(a),s.src=e})}cropToSpriteMaterial(e,t,n,s,a,r=!1){const o=document.createElement("canvas"),l=Math.floor(e.width*s),c=Math.floor(e.height*a),h=Math.floor(e.width*t),d=Math.floor(e.height*n);o.width=l,o.height=c;const u=o.getContext("2d");if(u.drawImage(e,h,d,l,c,0,0,l,c),r){const g=u.getImageData(0,0,l,c),v=g.data;for(let m=0;m<v.length;m+=4){const f=v[m],w=v[m+1],b=v[m+2];f<45&&w<45&&b<45?v[m+3]=0:f<75&&w<75&&b<75&&(v[m+3]=Math.max(0,Math.min(255,(f+w+b)/3*3-100)))}u.putImageData(g,0,0)}const p=new cs(o);return p.colorSpace=kt,p.minFilter=qt,p.magFilter=qt,new Ee({map:p,transparent:!0,alphaTest:.15,side:en,roughness:.7,metalness:.1})}injectIcons(e){try{const t=this.cropCanvas(e,.05,.15,.52,.35),n=document.getElementById("weapon-display");if(n&&!n.querySelector("img")){const r=document.createElement("img");r.src=t.toDataURL(),r.style.height="32px",r.style.objectFit="contain",r.style.filter="drop-shadow(0 2px 4px rgba(0,0,0,0.6))",n.insertBefore(r,n.firstChild)}const s=this.cropCanvas(e,.68,.5,.3,.48),a=document.getElementById("mobile-reload-btn");a&&(a.innerHTML=`<img src="${s.toDataURL()}" style="width: 32px; height: 32px; object-fit: contain;">`)}catch(t){console.warn("[AssetManager] Icon injection failed:",t)}}cropCanvas(e,t,n,s,a){const r=document.createElement("canvas"),o=Math.floor(e.width*s),l=Math.floor(e.height*a),c=Math.floor(e.width*t),h=Math.floor(e.height*n);return r.width=o,r.height=l,r.getContext("2d").drawImage(e,c,h,o,l,0,0,o,l),r}}const v0=new g0;class _0{constructor(e){this.canvas=e,this.renderer=new Am({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Al,this.scene=new Cm,this.scene.background=new Ke(16754046),this.scene.fog=new Zr(14720908,.005),this.camera=new zt(70,window.innerWidth/window.innerHeight,.1,400),this.currentDifficulty="medium",this.currentCharacter="maya",this.input=new o0(this.canvas),this.hud=new m0(this.input),this.environment=new a0(this.scene),this.player=new s0(this.scene,this.camera,this.currentCharacter),this.waveManager=new r0(this.scene,this.player),this.tracers=[],this.particles=[],this.particlePool=[],this.clock=new Bm,this.isRunning=!1,this.isPaused=!1,this.setupCallbacks(),this.setupResize(),this.loadCustomAssets(),this.hud.showTitleScreen((t,n,s)=>{this.start(t,n,s)})}applyDifficulty(e){this.currentDifficulty=e||"medium";const t=Ni[this.currentDifficulty]||Ni.medium;this.player.applyDifficulty(t),this.waveManager.applyDifficulty(t),this.environment.setAmmoRespawnTime(t.ammoRespawnTime),console.log(`[ShooterGame] Applied difficulty: ${t.name} (${t.id})`)}setupCallbacks(){this.player.onHit=(e,t)=>{this.hud.showHitmarker(),this.spawnHitParticles(t)},this.player.onTracer=(e,t,n)=>{this.spawnTracer(e,t,n)},this.player.onDryFire=()=>{this.hud.flashEmptyAmmo()},this.player.onDamageTaken=(e,t)=>{this.hud.showDamageFlash()},this.player.onWeaponLocked=e=>{this.hud.showWeaponLockedAlert(e)},this.hud.onWeaponSwitchRequest=()=>{this.player.nextWeapon()},this.hud.onCharacterSelect=e=>{this.currentCharacter=e,this.player.setCharacter(e)},this.waveManager.onRoundStart=e=>{this.environment.onNewRound(e)},this.waveManager.onZombieKill=(e,t)=>{ft.awardZombieKill(e.type,e.isBoss,t==null?void 0:t.isHeadshot)},this.waveManager.onWaveCleared=e=>{e<this.waveManager.maxWaves?(this.isPaused=!0,document.pointerLockElement&&document.exitPointerLock(),this.hud.triggerPostWaveStory(e,()=>{this.isPaused=!1,this.player&&(this.player.invulnerableTimer=2.5),this.waveManager.resumeBreatherAfterStory()})):this.waveManager.resumeBreatherAfterStory()},this.environment.onHealthPicked=e=>{this.hud.showHealingAlert(`+${e} HEALTH`)},this.waveManager.onWaveBanner=(e,t)=>{this.hud.showWaveBanner(e,t)},this.waveManager.onGameOver=e=>{this.hud.showGameOver(e,(t,n)=>{this.restart(t,n)})},this.waveManager.onVictory=e=>{this.hud.showVictory(e,(t,n)=>{this.restart(t,n)})}}start(e,t,n=null){zm(),t&&(this.currentCharacter=t,this.player.setCharacter(t)),this.applyDifficulty(e||this.currentDifficulty),n==="ammo"?(this.player.addAmmo(30),this.hud.showHealingAlert("+30 SMG AMMO UNLOCKED")):n==="armor"&&(this.player.maxHealth+=25,this.player.health+=25,this.hud.showHealingAlert("+25 ARMOR REINFORCED")),this.isRunning=!0,this.waveManager.start()}restart(e,t){this.waveManager.cleanup(),t&&(this.currentCharacter=t,this.player.setCharacter(t)),this.applyDifficulty(e||this.currentDifficulty),this.hud&&this.hud.selectedStartingStoryId&&xt.initializeStoryRun(this.hud.selectedStartingStoryId),this.player.position.set(0,0,0),this.player.velocity.set(0,0,0),this.player.yaw=0,this.player.pitch=.05,this.particles.forEach(n=>{n.mesh.visible=!1,this.particlePool.push(n)}),this.particles=[],this.tracers&&(this.tracers.forEach(n=>{n.mesh.visible=!1,this.tracerPool.push(n)}),this.tracers=[]),this.environment.spawnRoundHealthKits(),this.waveManager.start()}setupResize(){window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)})}spawnTracer(e,t,n){this.tracerPool||(this.tracerPool=[]);let s;if(this.tracerPool.length>0)s=this.tracerPool.pop(),s.mesh.visible=!0;else{const r=new Pe(.016,.016,1,5);r.rotateX(Math.PI/2);const o=new on({color:16771962,transparent:!0,opacity:.95}),l=new A(r,o);this.scene.add(l),s={mesh:l,current:new P,dir:new P,distance:0,traveled:0,speed:360,life:.16}}s.current.copy(e),s.dir.subVectors(t,e),s.distance=s.dir.length(),s.distance>.001?s.dir.normalize():s.dir.set(0,0,-1),s.traveled=0,s.life=.16;const a=Math.min(2,Math.max(.6,s.distance*.25));s.mesh.scale.set(1,1,a),s.mesh.position.copy(e),s.mesh.quaternion.setFromUnitVectors(new P(0,0,1),s.dir),s.mesh.material.opacity=.95,this.tracers.push(s)}spawnHitParticles(e){this._bloodGeo||(this._bloodGeo=new $t(.055,4,4),this._bloodMat=new on({color:9044739}),this._sparkGeo=new $t(.04,4,4),this._sparkMat=new on({color:16772693}));const t=8;for(let n=0;n<t;n++){const s=n%2===0;let a;if(this.particlePool.length>0)a=this.particlePool.pop(),a.mesh.geometry=s?this._sparkGeo:this._bloodGeo,a.mesh.material=s?this._sparkMat:this._bloodMat,a.mesh.visible=!0;else{const o=new A(s?this._sparkGeo:this._bloodGeo,s?this._sparkMat:this._bloodMat);this.scene.add(o),a={mesh:o,vel:new P,life:.28}}a.mesh.position.copy(e);const r=s?Math.random()*5.5+2:Math.random()*3.5+1;a.vel.set((Math.random()-.5)*r,Math.random()*r*.8+1.2,(Math.random()-.5)*r),a.life=s?.2:.32,this.particles.push(a)}}createSunsetSkyTexture(){const e=document.createElement("canvas");e.width=1024,e.height=512;const t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,e.height);n.addColorStop(0,"#5A7292"),n.addColorStop(.25,"#827490"),n.addColorStop(.52,"#C4859A"),n.addColorStop(.74,"#FFA274"),n.addColorStop(1,"#FFC285"),t.fillStyle=n,t.fillRect(0,0,e.width,e.height);const s=e.width*.62,a=e.height*.74,r=t.createRadialGradient(s,a,6,s,a,150);r.addColorStop(0,"rgba(255, 255, 240, 1.0)"),r.addColorStop(.12,"rgba(255, 235, 175, 0.95)"),r.addColorStop(.35,"rgba(255, 175, 105, 0.55)"),r.addColorStop(.7,"rgba(255, 135, 85, 0.20)"),r.addColorStop(1,"rgba(255, 115, 75, 0.0)"),t.fillStyle=r,t.beginPath(),t.arc(s,a,150,0,Math.PI*2),t.fill();const o=new cs(e);return o.mapping=Ks,o}async loadCustomAssets(){const e=this.createSunsetSkyTexture(),t=new $t(240,32,20),n=new on({map:e,side:Rt,fog:!1}),s=new A(t,n);s.rotation.y=Math.PI*.4,this.scene.add(s),await v0.loadAssets()}run(){const e=()=>{requestAnimationFrame(e);const t=Math.min(.08,this.clock.getDelta());if(this.isRunning&&!this.isPaused){const n=this.waveManager.getActiveZombies();this.player.update(t,this.input,n,this.environment),this.waveManager.update(t,this.environment),this.environment.update(t,this.player);for(let s=this.particles.length-1;s>=0;s--){const a=this.particles[s];a.life-=t,a.mesh.position.addScaledVector(a.vel,t),a.vel.y-=t*9.8,a.life<=0&&(a.mesh.visible=!1,this.particles.splice(s,1),this.particlePool.push(a))}for(let s=this.tracers.length-1;s>=0;s--){const a=this.tracers[s],r=a.speed*t;a.traveled+=r,a.life-=t,a.current.addScaledVector(a.dir,r),a.mesh.position.copy(a.current),a.mesh.material&&(a.mesh.material.opacity=Math.max(0,a.life/.16*.95)),(a.traveled>=a.distance||a.life<=0)&&(a.mesh.visible=!1,this.tracers.splice(s,1),this.tracerPool.push(a))}this.hud.update(this.player,this.waveManager)}this.renderer.render(this.scene,this.camera)};e()}}function El(){const i=document.getElementById("game-canvas");if(!i){console.error("[AFTERTRACE] Canvas element not found!");return}new _0(i).run()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",El):El();
