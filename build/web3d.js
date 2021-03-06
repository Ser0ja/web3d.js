(function(e){"use strict";var t={};typeof exports=="undefined"?typeof define=="function"&&typeof define.amd=="object"&&define.amd?(t.exports={},define(function(){return t.exports})):t.exports=typeof window!="undefined"?window:e:t.exports=exports,function(e){if(!t)var t=1e-6;if(!n)var n=typeof Float32Array!="undefined"?Float32Array:Array;if(!r)var r=Math.random;var i={};i.setMatrixArrayType=function(e){n=e},typeof e!="undefined"&&(e.glMatrix=i);var s=Math.PI/180;i.toRadian=function(e){return e*s};var o={};o.create=function(){var e=new n(2);return e[0]=0,e[1]=0,e},o.clone=function(e){var t=new n(2);return t[0]=e[0],t[1]=e[1],t},o.fromValues=function(e,t){var r=new n(2);return r[0]=e,r[1]=t,r},o.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e},o.set=function(e,t,n){return e[0]=t,e[1]=n,e},o.add=function(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e},o.subtract=function(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e},o.sub=o.subtract,o.multiply=function(e,t,n){return e[0]=t[0]*n[0],e[1]=t[1]*n[1],e},o.mul=o.multiply,o.divide=function(e,t,n){return e[0]=t[0]/n[0],e[1]=t[1]/n[1],e},o.div=o.divide,o.min=function(e,t,n){return e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e},o.max=function(e,t,n){return e[0]=Math.max(t[0],n[0]),e[1]=Math.max(t[1],n[1]),e},o.scale=function(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e},o.scaleAndAdd=function(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e},o.distance=function(e,t){var n=t[0]-e[0],r=t[1]-e[1];return Math.sqrt(n*n+r*r)},o.dist=o.distance,o.squaredDistance=function(e,t){var n=t[0]-e[0],r=t[1]-e[1];return n*n+r*r},o.sqrDist=o.squaredDistance,o.length=function(e){var t=e[0],n=e[1];return Math.sqrt(t*t+n*n)},o.len=o.length,o.squaredLength=function(e){var t=e[0],n=e[1];return t*t+n*n},o.sqrLen=o.squaredLength,o.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e},o.normalize=function(e,t){var n=t[0],r=t[1],i=n*n+r*r;return i>0&&(i=1/Math.sqrt(i),e[0]=t[0]*i,e[1]=t[1]*i),e},o.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]},o.cross=function(e,t,n){var r=t[0]*n[1]-t[1]*n[0];return e[0]=e[1]=0,e[2]=r,e},o.lerp=function(e,t,n,r){var i=t[0],s=t[1];return e[0]=i+r*(n[0]-i),e[1]=s+r*(n[1]-s),e},o.random=function(e,t){t=t||1;var n=r()*2*Math.PI;return e[0]=Math.cos(n)*t,e[1]=Math.sin(n)*t,e},o.transformMat2=function(e,t,n){var r=t[0],i=t[1];return e[0]=n[0]*r+n[2]*i,e[1]=n[1]*r+n[3]*i,e},o.transformMat2d=function(e,t,n){var r=t[0],i=t[1];return e[0]=n[0]*r+n[2]*i+n[4],e[1]=n[1]*r+n[3]*i+n[5],e},o.transformMat3=function(e,t,n){var r=t[0],i=t[1];return e[0]=n[0]*r+n[3]*i+n[6],e[1]=n[1]*r+n[4]*i+n[7],e},o.transformMat4=function(e,t,n){var r=t[0],i=t[1];return e[0]=n[0]*r+n[4]*i+n[12],e[1]=n[1]*r+n[5]*i+n[13],e},o.forEach=function(){var e=o.create();return function(t,n,r,i,s,o){var u,a;n||(n=2),r||(r=0),i?a=Math.min(i*n+r,t.length):a=t.length;for(u=r;u<a;u+=n)e[0]=t[u],e[1]=t[u+1],s(e,e,o),t[u]=e[0],t[u+1]=e[1];return t}}(),o.str=function(e){return"vec2("+e[0]+", "+e[1]+")"},typeof e!="undefined"&&(e.vec2=o);var u={};u.create=function(){var e=new n(3);return e[0]=0,e[1]=0,e[2]=0,e},u.clone=function(e){var t=new n(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t},u.fromValues=function(e,t,r){var i=new n(3);return i[0]=e,i[1]=t,i[2]=r,i},u.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e},u.set=function(e,t,n,r){return e[0]=t,e[1]=n,e[2]=r,e},u.add=function(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e},u.subtract=function(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e},u.sub=u.subtract,u.multiply=function(e,t,n){return e[0]=t[0]*n[0],e[1]=t[1]*n[1],e[2]=t[2]*n[2],e},u.mul=u.multiply,u.divide=function(e,t,n){return e[0]=t[0]/n[0],e[1]=t[1]/n[1],e[2]=t[2]/n[2],e},u.div=u.divide,u.min=function(e,t,n){return e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e[2]=Math.min(t[2],n[2]),e},u.max=function(e,t,n){return e[0]=Math.max(t[0],n[0]),e[1]=Math.max(t[1],n[1]),e[2]=Math.max(t[2],n[2]),e},u.scale=function(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e},u.scaleAndAdd=function(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e},u.distance=function(e,t){var n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2];return Math.sqrt(n*n+r*r+i*i)},u.dist=u.distance,u.squaredDistance=function(e,t){var n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2];return n*n+r*r+i*i},u.sqrDist=u.squaredDistance,u.length=function(e){var t=e[0],n=e[1],r=e[2];return Math.sqrt(t*t+n*n+r*r)},u.len=u.length,u.squaredLength=function(e){var t=e[0],n=e[1],r=e[2];return t*t+n*n+r*r},u.sqrLen=u.squaredLength,u.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e},u.normalize=function(e,t){var n=t[0],r=t[1],i=t[2],s=n*n+r*r+i*i;return s>0&&(s=1/Math.sqrt(s),e[0]=t[0]*s,e[1]=t[1]*s,e[2]=t[2]*s),e},u.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]},u.cross=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=n[0],u=n[1],a=n[2];return e[0]=i*a-s*u,e[1]=s*o-r*a,e[2]=r*u-i*o,e},u.lerp=function(e,t,n,r){var i=t[0],s=t[1],o=t[2];return e[0]=i+r*(n[0]-i),e[1]=s+r*(n[1]-s),e[2]=o+r*(n[2]-o),e},u.random=function(e,t){t=t||1;var n=r()*2*Math.PI,i=r()*2-1,s=Math.sqrt(1-i*i)*t;return e[0]=Math.cos(n)*s,e[1]=Math.sin(n)*s,e[2]=i*t,e},u.transformMat4=function(e,t,n){var r=t[0],i=t[1],s=t[2];return e[0]=n[0]*r+n[4]*i+n[8]*s+n[12],e[1]=n[1]*r+n[5]*i+n[9]*s+n[13],e[2]=n[2]*r+n[6]*i+n[10]*s+n[14],e},u.transformMat3=function(e,t,n){var r=t[0],i=t[1],s=t[2];return e[0]=r*n[0]+i*n[3]+s*n[6],e[1]=r*n[1]+i*n[4]+s*n[7],e[2]=r*n[2]+i*n[5]+s*n[8],e},u.transformQuat=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=n[0],u=n[1],a=n[2],f=n[3],l=f*r+u*s-a*i,c=f*i+a*r-o*s,h=f*s+o*i-u*r,p=-o*r-u*i-a*s;return e[0]=l*f+p*-o+c*-a-h*-u,e[1]=c*f+p*-u+h*-o-l*-a,e[2]=h*f+p*-a+l*-u-c*-o,e},u.rotateX=function(e,t,n,r){var i=[],s=[];return i[0]=t[0]-n[0],i[1]=t[1]-n[1],i[2]=t[2]-n[2],s[0]=i[0],s[1]=i[1]*Math.cos(r)-i[2]*Math.sin(r),s[2]=i[1]*Math.sin(r)+i[2]*Math.cos(r),e[0]=s[0]+n[0],e[1]=s[1]+n[1],e[2]=s[2]+n[2],e},u.rotateY=function(e,t,n,r){var i=[],s=[];return i[0]=t[0]-n[0],i[1]=t[1]-n[1],i[2]=t[2]-n[2],s[0]=i[2]*Math.sin(r)+i[0]*Math.cos(r),s[1]=i[1],s[2]=i[2]*Math.cos(r)-i[0]*Math.sin(r),e[0]=s[0]+n[0],e[1]=s[1]+n[1],e[2]=s[2]+n[2],e},u.rotateZ=function(e,t,n,r){var i=[],s=[];return i[0]=t[0]-n[0],i[1]=t[1]-n[1],i[2]=t[2]-n[2],s[0]=i[0]*Math.cos(r)-i[1]*Math.sin(r),s[1]=i[0]*Math.sin(r)+i[1]*Math.cos(r),s[2]=i[2],e[0]=s[0]+n[0],e[1]=s[1]+n[1],e[2]=s[2]+n[2],e},u.forEach=function(){var e=u.create();return function(t,n,r,i,s,o){var u,a;n||(n=3),r||(r=0),i?a=Math.min(i*n+r,t.length):a=t.length;for(u=r;u<a;u+=n)e[0]=t[u],e[1]=t[u+1],e[2]=t[u+2],s(e,e,o),t[u]=e[0],t[u+1]=e[1],t[u+2]=e[2];return t}}(),u.str=function(e){return"vec3("+e[0]+", "+e[1]+", "+e[2]+")"},typeof e!="undefined"&&(e.vec3=u);var a={};a.create=function(){var e=new n(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=0,e},a.clone=function(e){var t=new n(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t},a.fromValues=function(e,t,r,i){var s=new n(4);return s[0]=e,s[1]=t,s[2]=r,s[3]=i,s},a.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e},a.set=function(e,t,n,r,i){return e[0]=t,e[1]=n,e[2]=r,e[3]=i,e},a.add=function(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e},a.subtract=function(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e[3]=t[3]-n[3],e},a.sub=a.subtract,a.multiply=function(e,t,n){return e[0]=t[0]*n[0],e[1]=t[1]*n[1],e[2]=t[2]*n[2],e[3]=t[3]*n[3],e},a.mul=a.multiply,a.divide=function(e,t,n){return e[0]=t[0]/n[0],e[1]=t[1]/n[1],e[2]=t[2]/n[2],e[3]=t[3]/n[3],e},a.div=a.divide,a.min=function(e,t,n){return e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e[2]=Math.min(t[2],n[2]),e[3]=Math.min(t[3],n[3]),e},a.max=function(e,t,n){return e[0]=Math.max(t[0],n[0]),e[1]=Math.max(t[1],n[1]),e[2]=Math.max(t[2],n[2]),e[3]=Math.max(t[3],n[3]),e},a.scale=function(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e},a.scaleAndAdd=function(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e[3]=t[3]+n[3]*r,e},a.distance=function(e,t){var n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2],s=t[3]-e[3];return Math.sqrt(n*n+r*r+i*i+s*s)},a.dist=a.distance,a.squaredDistance=function(e,t){var n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2],s=t[3]-e[3];return n*n+r*r+i*i+s*s},a.sqrDist=a.squaredDistance,a.length=function(e){var t=e[0],n=e[1],r=e[2],i=e[3];return Math.sqrt(t*t+n*n+r*r+i*i)},a.len=a.length,a.squaredLength=function(e){var t=e[0],n=e[1],r=e[2],i=e[3];return t*t+n*n+r*r+i*i},a.sqrLen=a.squaredLength,a.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e},a.normalize=function(e,t){var n=t[0],r=t[1],i=t[2],s=t[3],o=n*n+r*r+i*i+s*s;return o>0&&(o=1/Math.sqrt(o),e[0]=t[0]*o,e[1]=t[1]*o,e[2]=t[2]*o,e[3]=t[3]*o),e},a.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]},a.lerp=function(e,t,n,r){var i=t[0],s=t[1],o=t[2],u=t[3];return e[0]=i+r*(n[0]-i),e[1]=s+r*(n[1]-s),e[2]=o+r*(n[2]-o),e[3]=u+r*(n[3]-u),e},a.random=function(e,t){return t=t||1,e[0]=r(),e[1]=r(),e[2]=r(),e[3]=r(),a.normalize(e,e),a.scale(e,e,t),e},a.transformMat4=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3];return e[0]=n[0]*r+n[4]*i+n[8]*s+n[12]*o,e[1]=n[1]*r+n[5]*i+n[9]*s+n[13]*o,e[2]=n[2]*r+n[6]*i+n[10]*s+n[14]*o,e[3]=n[3]*r+n[7]*i+n[11]*s+n[15]*o,e},a.transformQuat=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=n[0],u=n[1],a=n[2],f=n[3],l=f*r+u*s-a*i,c=f*i+a*r-o*s,h=f*s+o*i-u*r,p=-o*r-u*i-a*s;return e[0]=l*f+p*-o+c*-a-h*-u,e[1]=c*f+p*-u+h*-o-l*-a,e[2]=h*f+p*-a+l*-u-c*-o,e},a.forEach=function(){var e=a.create();return function(t,n,r,i,s,o){var u,a;n||(n=4),r||(r=0),i?a=Math.min(i*n+r,t.length):a=t.length;for(u=r;u<a;u+=n)e[0]=t[u],e[1]=t[u+1],e[2]=t[u+2],e[3]=t[u+3],s(e,e,o),t[u]=e[0],t[u+1]=e[1],t[u+2]=e[2],t[u+3]=e[3];return t}}(),a.str=function(e){return"vec4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},typeof e!="undefined"&&(e.vec4=a);var f={};f.create=function(){var e=new n(4);return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e},f.clone=function(e){var t=new n(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t},f.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e},f.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e},f.transpose=function(e,t){if(e===t){var n=t[1];e[1]=t[2],e[2]=n}else e[0]=t[0],e[1]=t[2],e[2]=t[1],e[3]=t[3];return e},f.invert=function(e,t){var n=t[0],r=t[1],i=t[2],s=t[3],o=n*s-i*r;return o?(o=1/o,e[0]=s*o,e[1]=-r*o,e[2]=-i*o,e[3]=n*o,e):null},f.adjoint=function(e,t){var n=t[0];return e[0]=t[3],e[1]=-t[1],e[2]=-t[2],e[3]=n,e},f.determinant=function(e){return e[0]*e[3]-e[2]*e[1]},f.multiply=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3],u=n[0],a=n[1],f=n[2],l=n[3];return e[0]=r*u+s*a,e[1]=i*u+o*a,e[2]=r*f+s*l,e[3]=i*f+o*l,e},f.mul=f.multiply,f.rotate=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3],u=Math.sin(n),a=Math.cos(n);return e[0]=r*a+s*u,e[1]=i*a+o*u,e[2]=r*-u+s*a,e[3]=i*-u+o*a,e},f.scale=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3],u=n[0],a=n[1];return e[0]=r*u,e[1]=i*u,e[2]=s*a,e[3]=o*a,e},f.str=function(e){return"mat2("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},f.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2))},f.LDU=function(e,t,n,r){return e[2]=r[2]/r[0],n[0]=r[0],n[1]=r[1],n[3]=r[3]-e[2]*n[1],[e,t,n]},typeof e!="undefined"&&(e.mat2=f);var l={};l.create=function(){var e=new n(6);return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e},l.clone=function(e){var t=new n(6);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t},l.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e},l.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e},l.invert=function(e,t){var n=t[0],r=t[1],i=t[2],s=t[3],o=t[4],u=t[5],a=n*s-r*i;return a?(a=1/a,e[0]=s*a,e[1]=-r*a,e[2]=-i*a,e[3]=n*a,e[4]=(i*u-s*o)*a,e[5]=(r*o-n*u)*a,e):null},l.determinant=function(e){return e[0]*e[3]-e[1]*e[2]},l.multiply=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3],u=t[4],a=t[5],f=n[0],l=n[1],c=n[2],h=n[3],p=n[4],d=n[5];return e[0]=r*f+s*l,e[1]=i*f+o*l,e[2]=r*c+s*h,e[3]=i*c+o*h,e[4]=r*p+s*d+u,e[5]=i*p+o*d+a,e},l.mul=l.multiply,l.rotate=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3],u=t[4],a=t[5],f=Math.sin(n),l=Math.cos(n);return e[0]=r*l+s*f,e[1]=i*l+o*f,e[2]=r*-f+s*l,e[3]=i*-f+o*l,e[4]=u,e[5]=a,e},l.scale=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3],u=t[4],a=t[5],f=n[0],l=n[1];return e[0]=r*f,e[1]=i*f,e[2]=s*l,e[3]=o*l,e[4]=u,e[5]=a,e},l.translate=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3],u=t[4],a=t[5],f=n[0],l=n[1];return e[0]=r,e[1]=i,e[2]=s,e[3]=o,e[4]=r*f+s*l+u,e[5]=i*f+o*l+a,e},l.str=function(e){return"mat2d("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+")"},l.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+1)},typeof e!="undefined"&&(e.mat2d=l);var c={};c.create=function(){var e=new n(9);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e},c.fromMat4=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[4],e[4]=t[5],e[5]=t[6],e[6]=t[8],e[7]=t[9],e[8]=t[10],e},c.clone=function(e){var t=new n(9);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t},c.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e},c.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e},c.transpose=function(e,t){if(e===t){var n=t[1],r=t[2],i=t[5];e[1]=t[3],e[2]=t[6],e[3]=n,e[5]=t[7],e[6]=r,e[7]=i}else e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8];return e},c.invert=function(e,t){var n=t[0],r=t[1],i=t[2],s=t[3],o=t[4],u=t[5],a=t[6],f=t[7],l=t[8],c=l*o-u*f,h=-l*s+u*a,p=f*s-o*a,d=n*c+r*h+i*p;return d?(d=1/d,e[0]=c*d,e[1]=(-l*r+i*f)*d,e[2]=(u*r-i*o)*d,e[3]=h*d,e[4]=(l*n-i*a)*d,e[5]=(-u*n+i*s)*d,e[6]=p*d,e[7]=(-f*n+r*a)*d,e[8]=(o*n-r*s)*d,e):null},c.adjoint=function(e,t){var n=t[0],r=t[1],i=t[2],s=t[3],o=t[4],u=t[5],a=t[6],f=t[7],l=t[8];return e[0]=o*l-u*f,e[1]=i*f-r*l,e[2]=r*u-i*o,e[3]=u*a-s*l,e[4]=n*l-i*a,e[5]=i*s-n*u,e[6]=s*f-o*a,e[7]=r*a-n*f,e[8]=n*o-r*s,e},c.determinant=function(e){var t=e[0],n=e[1],r=e[2],i=e[3],s=e[4],o=e[5],u=e[6],a=e[7],f=e[8];return t*(f*s-o*a)+n*(-f*i+o*u)+r*(a*i-s*u)},c.multiply=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3],u=t[4],a=t[5],f=t[6],l=t[7],c=t[8],h=n[0],p=n[1],d=n[2],v=n[3],m=n[4],g=n[5],y=n[6],b=n[7],w=n[8];return e[0]=h*r+p*o+d*f,e[1]=h*i+p*u+d*l,e[2]=h*s+p*a+d*c,e[3]=v*r+m*o+g*f,e[4]=v*i+m*u+g*l,e[5]=v*s+m*a+g*c,e[6]=y*r+b*o+w*f,e[7]=y*i+b*u+w*l,e[8]=y*s+b*a+w*c,e},c.mul=c.multiply,c.translate=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3],u=t[4],a=t[5],f=t[6],l=t[7],c=t[8],h=n[0],p=n[1];return e[0]=r,e[1]=i,e[2]=s,e[3]=o,e[4]=u,e[5]=a,e[6]=h*r+p*o+f,e[7]=h*i+p*u+l,e[8]=h*s+p*a+c,e},c.rotate=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3],u=t[4],a=t[5],f=t[6],l=t[7],c=t[8],h=Math.sin(n),p=Math.cos(n);return e[0]=p*r+h*o,e[1]=p*i+h*u,e[2]=p*s+h*a,e[3]=p*o-h*r,e[4]=p*u-h*i,e[5]=p*a-h*s,e[6]=f,e[7]=l,e[8]=c,e},c.scale=function(e,t,n){var r=n[0],i=n[1];return e[0]=r*t[0],e[1]=r*t[1],e[2]=r*t[2],e[3]=i*t[3],e[4]=i*t[4],e[5]=i*t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e},c.fromMat2d=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=0,e[3]=t[2],e[4]=t[3],e[5]=0,e[6]=t[4],e[7]=t[5],e[8]=1,e},c.fromQuat=function(e,t){var n=t[0],r=t[1],i=t[2],s=t[3],o=n+n,u=r+r,a=i+i,f=n*o,l=r*o,c=r*u,h=i*o,p=i*u,d=i*a,v=s*o,m=s*u,g=s*a;return e[0]=1-c-d,e[3]=l-g,e[6]=h+m,e[1]=l+g,e[4]=1-f-d,e[7]=p-v,e[2]=h-m,e[5]=p+v,e[8]=1-f-c,e},c.normalFromMat4=function(e,t){var n=t[0],r=t[1],i=t[2],s=t[3],o=t[4],u=t[5],a=t[6],f=t[7],l=t[8],c=t[9],h=t[10],p=t[11],d=t[12],v=t[13],m=t[14],g=t[15],y=n*u-r*o,b=n*a-i*o,w=n*f-s*o,E=r*a-i*u,S=r*f-s*u,x=i*f-s*a,T=l*v-c*d,N=l*m-h*d,C=l*g-p*d,k=c*m-h*v,L=c*g-p*v,A=h*g-p*m,O=y*A-b*L+w*k+E*C-S*N+x*T;return O?(O=1/O,e[0]=(u*A-a*L+f*k)*O,e[1]=(a*C-o*A-f*N)*O,e[2]=(o*L-u*C+f*T)*O,e[3]=(i*L-r*A-s*k)*O,e[4]=(n*A-i*C+s*N)*O,e[5]=(r*C-n*L-s*T)*O,e[6]=(v*x-m*S+g*E)*O,e[7]=(m*w-d*x-g*b)*O,e[8]=(d*S-v*w+g*y)*O,e):null},c.str=function(e){return"mat3("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+")"},c.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+Math.pow(e[6],2)+Math.pow(e[7],2)+Math.pow(e[8],2))},typeof e!="undefined"&&(e.mat3=c);var h={};h.create=function(){var e=new n(16);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e},h.clone=function(e){var t=new n(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},h.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e},h.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e},h.transpose=function(e,t){if(e===t){var n=t[1],r=t[2],i=t[3],s=t[6],o=t[7],u=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=n,e[6]=t[9],e[7]=t[13],e[8]=r,e[9]=s,e[11]=t[14],e[12]=i,e[13]=o,e[14]=u}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e},h.invert=function(e,t){var n=t[0],r=t[1],i=t[2],s=t[3],o=t[4],u=t[5],a=t[6],f=t[7],l=t[8],c=t[9],h=t[10],p=t[11],d=t[12],v=t[13],m=t[14],g=t[15],y=n*u-r*o,b=n*a-i*o,w=n*f-s*o,E=r*a-i*u,S=r*f-s*u,x=i*f-s*a,T=l*v-c*d,N=l*m-h*d,C=l*g-p*d,k=c*m-h*v,L=c*g-p*v,A=h*g-p*m,O=y*A-b*L+w*k+E*C-S*N+x*T;return O?(O=1/O,e[0]=(u*A-a*L+f*k)*O,e[1]=(i*L-r*A-s*k)*O,e[2]=(v*x-m*S+g*E)*O,e[3]=(h*S-c*x-p*E)*O,e[4]=(a*C-o*A-f*N)*O,e[5]=(n*A-i*C+s*N)*O,e[6]=(m*w-d*x-g*b)*O,e[7]=(l*x-h*w+p*b)*O,e[8]=(o*L-u*C+f*T)*O,e[9]=(r*C-n*L-s*T)*O,e[10]=(d*S-v*w+g*y)*O,e[11]=(c*w-l*S-p*y)*O,e[12]=(u*N-o*k-a*T)*O,e[13]=(n*k-r*N+i*T)*O,e[14]=(v*b-d*E-m*y)*O,e[15]=(l*E-c*b+h*y)*O,e):null},h.adjoint=function(e,t){var n=t[0],r=t[1],i=t[2],s=t[3],o=t[4],u=t[5],a=t[6],f=t[7],l=t[8],c=t[9],h=t[10],p=t[11],d=t[12],v=t[13],m=t[14],g=t[15];return e[0]=u*(h*g-p*m)-c*(a*g-f*m)+v*(a*p-f*h),e[1]=-(r*(h*g-p*m)-c*(i*g-s*m)+v*(i*p-s*h)),e[2]=r*(a*g-f*m)-u*(i*g-s*m)+v*(i*f-s*a),e[3]=-(r*(a*p-f*h)-u*(i*p-s*h)+c*(i*f-s*a)),e[4]=-(o*(h*g-p*m)-l*(a*g-f*m)+d*(a*p-f*h)),e[5]=n*(h*g-p*m)-l*(i*g-s*m)+d*(i*p-s*h),e[6]=-(n*(a*g-f*m)-o*(i*g-s*m)+d*(i*f-s*a)),e[7]=n*(a*p-f*h)-o*(i*p-s*h)+l*(i*f-s*a),e[8]=o*(c*g-p*v)-l*(u*g-f*v)+d*(u*p-f*c),e[9]=-(n*(c*g-p*v)-l*(r*g-s*v)+d*(r*p-s*c)),e[10]=n*(u*g-f*v)-o*(r*g-s*v)+d*(r*f-s*u),e[11]=-(n*(u*p-f*c)-o*(r*p-s*c)+l*(r*f-s*u)),e[12]=-(o*(c*m-h*v)-l*(u*m-a*v)+d*(u*h-a*c)),e[13]=n*(c*m-h*v)-l*(r*m-i*v)+d*(r*h-i*c),e[14]=-(n*(u*m-a*v)-o*(r*m-i*v)+d*(r*a-i*u)),e[15]=n*(u*h-a*c)-o*(r*h-i*c)+l*(r*a-i*u),e},h.determinant=function(e){var t=e[0],n=e[1],r=e[2],i=e[3],s=e[4],o=e[5],u=e[6],a=e[7],f=e[8],l=e[9],c=e[10],h=e[11],p=e[12],d=e[13],v=e[14],m=e[15],g=t*o-n*s,y=t*u-r*s,b=t*a-i*s,w=n*u-r*o,E=n*a-i*o,S=r*a-i*u,x=f*d-l*p,T=f*v-c*p,N=f*m-h*p,C=l*v-c*d,k=l*m-h*d,L=c*m-h*v;return g*L-y*k+b*C+w*N-E*T+S*x},h.multiply=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3],u=t[4],a=t[5],f=t[6],l=t[7],c=t[8],h=t[9],p=t[10],d=t[11],v=t[12],m=t[13],g=t[14],y=t[15],b=n[0],w=n[1],E=n[2],S=n[3];return e[0]=b*r+w*u+E*c+S*v,e[1]=b*i+w*a+E*h+S*m,e[2]=b*s+w*f+E*p+S*g,e[3]=b*o+w*l+E*d+S*y,b=n[4],w=n[5],E=n[6],S=n[7],e[4]=b*r+w*u+E*c+S*v,e[5]=b*i+w*a+E*h+S*m,e[6]=b*s+w*f+E*p+S*g,e[7]=b*o+w*l+E*d+S*y,b=n[8],w=n[9],E=n[10],S=n[11],e[8]=b*r+w*u+E*c+S*v,e[9]=b*i+w*a+E*h+S*m,e[10]=b*s+w*f+E*p+S*g,e[11]=b*o+w*l+E*d+S*y,b=n[12],w=n[13],E=n[14],S=n[15],e[12]=b*r+w*u+E*c+S*v,e[13]=b*i+w*a+E*h+S*m,e[14]=b*s+w*f+E*p+S*g,e[15]=b*o+w*l+E*d+S*y,e},h.mul=h.multiply,h.translate=function(e,t,n){var r=n[0],i=n[1],s=n[2],o,u,a,f,l,c,h,p,d,v,m,g;return t===e?(e[12]=t[0]*r+t[4]*i+t[8]*s+t[12],e[13]=t[1]*r+t[5]*i+t[9]*s+t[13],e[14]=t[2]*r+t[6]*i+t[10]*s+t[14],e[15]=t[3]*r+t[7]*i+t[11]*s+t[15]):(o=t[0],u=t[1],a=t[2],f=t[3],l=t[4],c=t[5],h=t[6],p=t[7],d=t[8],v=t[9],m=t[10],g=t[11],e[0]=o,e[1]=u,e[2]=a,e[3]=f,e[4]=l,e[5]=c,e[6]=h,e[7]=p,e[8]=d,e[9]=v,e[10]=m,e[11]=g,e[12]=o*r+l*i+d*s+t[12],e[13]=u*r+c*i+v*s+t[13],e[14]=a*r+h*i+m*s+t[14],e[15]=f*r+p*i+g*s+t[15]),e},h.scale=function(e,t,n){var r=n[0],i=n[1],s=n[2];return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*i,e[5]=t[5]*i,e[6]=t[6]*i,e[7]=t[7]*i,e[8]=t[8]*s,e[9]=t[9]*s,e[10]=t[10]*s,e[11]=t[11]*s,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e},h.rotate=function(e,n,r,i){var s=i[0],o=i[1],u=i[2],a=Math.sqrt(s*s+o*o+u*u),f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_;return Math.abs(a)<t?null:(a=1/a,s*=a,o*=a,u*=a,f=Math.sin(r),l=Math.cos(r),c=1-l,h=n[0],p=n[1],d=n[2],v=n[3],m=n[4],g=n[5],y=n[6],b=n[7],w=n[8],E=n[9],S=n[10],x=n[11],T=s*s*c+l,N=o*s*c+u*f,C=u*s*c-o*f,k=s*o*c-u*f,L=o*o*c+l,A=u*o*c+s*f,O=s*u*c+o*f,M=o*u*c-s*f,_=u*u*c+l,e[0]=h*T+m*N+w*C,e[1]=p*T+g*N+E*C,e[2]=d*T+y*N+S*C,e[3]=v*T+b*N+x*C,e[4]=h*k+m*L+w*A,e[5]=p*k+g*L+E*A,e[6]=d*k+y*L+S*A,e[7]=v*k+b*L+x*A,e[8]=h*O+m*M+w*_,e[9]=p*O+g*M+E*_,e[10]=d*O+y*M+S*_,e[11]=v*O+b*M+x*_,n!==e&&(e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15]),e)},h.rotateX=function(e,t,n){var r=Math.sin(n),i=Math.cos(n),s=t[4],o=t[5],u=t[6],a=t[7],f=t[8],l=t[9],c=t[10],h=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=s*i+f*r,e[5]=o*i+l*r,e[6]=u*i+c*r,e[7]=a*i+h*r,e[8]=f*i-s*r,e[9]=l*i-o*r,e[10]=c*i-u*r,e[11]=h*i-a*r,e},h.rotateY=function(e,t,n){var r=Math.sin(n),i=Math.cos(n),s=t[0],o=t[1],u=t[2],a=t[3],f=t[8],l=t[9],c=t[10],h=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=s*i-f*r,e[1]=o*i-l*r,e[2]=u*i-c*r,e[3]=a*i-h*r,e[8]=s*r+f*i,e[9]=o*r+l*i,e[10]=u*r+c*i,e[11]=a*r+h*i,e},h.rotateZ=function(e,t,n){var r=Math.sin(n),i=Math.cos(n),s=t[0],o=t[1],u=t[2],a=t[3],f=t[4],l=t[5],c=t[6],h=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=s*i+f*r,e[1]=o*i+l*r,e[2]=u*i+c*r,e[3]=a*i+h*r,e[4]=f*i-s*r,e[5]=l*i-o*r,e[6]=c*i-u*r,e[7]=h*i-a*r,e},h.fromRotationTranslation=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3],u=r+r,a=i+i,f=s+s,l=r*u,c=r*a,h=r*f,p=i*a,d=i*f,v=s*f,m=o*u,g=o*a,y=o*f;return e[0]=1-(p+v),e[1]=c+y,e[2]=h-g,e[3]=0,e[4]=c-y,e[5]=1-(l+v),e[6]=d+m,e[7]=0,e[8]=h+g,e[9]=d-m,e[10]=1-(l+p),e[11]=0,e[12]=n[0],e[13]=n[1],e[14]=n[2],e[15]=1,e},h.fromQuat=function(e,t){var n=t[0],r=t[1],i=t[2],s=t[3],o=n+n,u=r+r,a=i+i,f=n*o,l=r*o,c=r*u,h=i*o,p=i*u,d=i*a,v=s*o,m=s*u,g=s*a;return e[0]=1-c-d,e[1]=l+g,e[2]=h-m,e[3]=0,e[4]=l-g,e[5]=1-f-d,e[6]=p+v,e[7]=0,e[8]=h+m,e[9]=p-v,e[10]=1-f-c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e},h.frustum=function(e,t,n,r,i,s,o){var u=1/(n-t),a=1/(i-r),f=1/(s-o);return e[0]=s*2*u,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=s*2*a,e[6]=0,e[7]=0,e[8]=(n+t)*u,e[9]=(i+r)*a,e[10]=(o+s)*f,e[11]=-1,e[12]=0,e[13]=0,e[14]=o*s*2*f,e[15]=0,e},h.perspective=function(e,t,n,r,i){var s=1/Math.tan(t/2),o=1/(r-i);return e[0]=s/n,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=s,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(i+r)*o,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*i*r*o,e[15]=0,e},h.ortho=function(e,t,n,r,i,s,o){var u=1/(t-n),a=1/(r-i),f=1/(s-o);return e[0]=-2*u,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*f,e[11]=0,e[12]=(t+n)*u,e[13]=(i+r)*a,e[14]=(o+s)*f,e[15]=1,e},h.lookAt=function(e,n,r,i){var s,o,u,a,f,l,c,p,d,v,m=n[0],g=n[1],y=n[2],b=i[0],w=i[1],E=i[2],S=r[0],x=r[1],T=r[2];return Math.abs(m-S)<t&&Math.abs(g-x)<t&&Math.abs(y-T)<t?h.identity(e):(c=m-S,p=g-x,d=y-T,v=1/Math.sqrt(c*c+p*p+d*d),c*=v,p*=v,d*=v,s=w*d-E*p,o=E*c-b*d,u=b*p-w*c,v=Math.sqrt(s*s+o*o+u*u),v?(v=1/v,s*=v,o*=v,u*=v):(s=0,o=0,u=0),a=p*u-d*o,f=d*s-c*u,l=c*o-p*s,v=Math.sqrt(a*a+f*f+l*l),v?(v=1/v,a*=v,f*=v,l*=v):(a=0,f=0,l=0),e[0]=s,e[1]=a,e[2]=c,e[3]=0,e[4]=o,e[5]=f,e[6]=p,e[7]=0,e[8]=u,e[9]=l,e[10]=d,e[11]=0,e[12]=-(s*m+o*g+u*y),e[13]=-(a*m+f*g+l*y),e[14]=-(c*m+p*g+d*y),e[15]=1,e)},h.str=function(e){return"mat4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+", "+e[9]+", "+e[10]+", "+e[11]+", "+e[12]+", "+e[13]+", "+e[14]+", "+e[15]+")"},h.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+Math.pow(e[6],2)+Math.pow(e[6],2)+Math.pow(e[7],2)+Math.pow(e[8],2)+Math.pow(e[9],2)+Math.pow(e[10],2)+Math.pow(e[11],2)+Math.pow(e[12],2)+Math.pow(e[13],2)+Math.pow(e[14],2)+Math.pow(e[15],2))},typeof e!="undefined"&&(e.mat4=h);var p={};p.create=function(){var e=new n(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e},p.rotationTo=function(){var e=u.create(),t=u.fromValues(1,0,0),n=u.fromValues(0,1,0);return function(r,i,s){var o=u.dot(i,s);return o<-0.999999?(u.cross(e,t,i),u.length(e)<1e-6&&u.cross(e,n,i),u.normalize(e,e),p.setAxisAngle(r,e,Math.PI),r):o>.999999?(r[0]=0,r[1]=0,r[2]=0,r[3]=1,r):(u.cross(e,i,s),r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=1+o,p.normalize(r,r))}}(),p.setAxes=function(){var e=c.create();return function(t,n,r,i){return e[0]=r[0],e[3]=r[1],e[6]=r[2],e[1]=i[0],e[4]=i[1],e[7]=i[2],e[2]=-n[0],e[5]=-n[1],e[8]=-n[2],p.normalize(t,p.fromMat3(t,e))}}(),p.clone=a.clone,p.fromValues=a.fromValues,p.copy=a.copy,p.set=a.set,p.identity=function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e},p.setAxisAngle=function(e,t,n){n*=.5;var r=Math.sin(n);return e[0]=r*t[0],e[1]=r*t[1],e[2]=r*t[2],e[3]=Math.cos(n),e},p.add=a.add,p.multiply=function(e,t,n){var r=t[0],i=t[1],s=t[2],o=t[3],u=n[0],a=n[1],f=n[2],l=n[3];return e[0]=r*l+o*u+i*f-s*a,e[1]=i*l+o*a+s*u-r*f,e[2]=s*l+o*f+r*a-i*u,e[3]=o*l-r*u-i*a-s*f,e},p.mul=p.multiply,p.scale=a.scale,p.rotateX=function(e,t,n){n*=.5;var r=t[0],i=t[1],s=t[2],o=t[3],u=Math.sin(n),a=Math.cos(n);return e[0]=r*a+o*u,e[1]=i*a+s*u,e[2]=s*a-i*u,e[3]=o*a-r*u,e},p.rotateY=function(e,t,n){n*=.5;var r=t[0],i=t[1],s=t[2],o=t[3],u=Math.sin(n),a=Math.cos(n);return e[0]=r*a-s*u,e[1]=i*a+o*u,e[2]=s*a+r*u,e[3]=o*a-i*u,e},p.rotateZ=function(e,t,n){n*=.5;var r=t[0],i=t[1],s=t[2],o=t[3],u=Math.sin(n),a=Math.cos(n);return e[0]=r*a+i*u,e[1]=i*a-r*u,e[2]=s*a+o*u,e[3]=o*a-s*u,e},p.calculateW=function(e,t){var n=t[0],r=t[1],i=t[2];return e[0]=n,e[1]=r,e[2]=i,e[3]=-Math.sqrt(Math.abs(1-n*n-r*r-i*i)),e},p.dot=a.dot,p.lerp=a.lerp,p.slerp=function(e,t,n,r){var i=t[0],s=t[1],o=t[2],u=t[3],a=n[0],f=n[1],l=n[2],c=n[3],h,p,d,v,m;return p=i*a+s*f+o*l+u*c,p<0&&(p=-p,a=-a,f=-f,l=-l,c=-c),1-p>1e-6?(h=Math.acos(p),d=Math.sin(h),v=Math.sin((1-r)*h)/d,m=Math.sin(r*h)/d):(v=1-r,m=r),e[0]=v*i+m*a,e[1]=v*s+m*f,e[2]=v*o+m*l,e[3]=v*u+m*c,e},p.invert=function(e,t){var n=t[0],r=t[1],i=t[2],s=t[3],o=n*n+r*r+i*i+s*s,u=o?1/o:0;return e[0]=-n*u,e[1]=-r*u,e[2]=-i*u,e[3]=s*u,e},p.conjugate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e},p.length=a.length,p.len=p.length,p.squaredLength=a.squaredLength,p.sqrLen=p.squaredLength,p.normalize=a.normalize,p.fromMat3=function(e,t){var n=t[0]+t[4]+t[8],r;if(n>0)r=Math.sqrt(n+1),e[3]=.5*r,r=.5/r,e[0]=(t[7]-t[5])*r,e[1]=(t[2]-t[6])*r,e[2]=(t[3]-t[1])*r;else{var i=0;t[4]>t[0]&&(i=1),t[8]>t[i*3+i]&&(i=2);var s=(i+1)%3,o=(i+2)%3;r=Math.sqrt(t[i*3+i]-t[s*3+s]-t[o*3+o]+1),e[i]=.5*r,r=.5/r,e[3]=(t[o*3+s]-t[s*3+o])*r,e[s]=(t[s*3+i]+t[i*3+s])*r,e[o]=(t[o*3+i]+t[i*3+o])*r}return e},p.str=function(e){return"quat("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},typeof e!="undefined"&&(e.quat=p)}(t.exports)})(this);
var web3d = {
	VERSION_MAJOR: '0',
	VERSION_MINOR: '1',
	VERSION_PATCH: '0',	
	gl: null,
	canvas: null,
	init: null,
	render: null,

	version: function() {
		return this.VERSION_MAJOR + "." + this.VERSION_MINOR + "." + this.VERSION_PATCH;
	},

	clearColor: function(color) {
		this.gl.clearColor(color.r, color.g, color.b, color.a);
		this.glCheck("Failed to set clear color.");
	},

	initialize: function(canvas, init, render) {
		this.canvas = canvas;
		this.init = init;
		this.render = render;

		this.log("Obtaining WebGL context.");
		try {
			this.gl = this.canvas.getContext("webgl") || this.canvas.getContext("experimental-webgl");
		} catch (e) {}
		if (!this.gl) {
			this.error("Unable to initialize WebGL. Your browser may not support it.");
			this.gl = null;
		}	
		
		this.log("OpenGL Renderer: ", this.gl.getParameter(this.gl.RENDERER));
		this.log("OpenGL Version: ", this.gl.getParameter(this.gl.VERSION));

		this.log("Initializing the game.");
		this.clearColor(new web3d.Color(0,0,0,1));
		this.gl.enable(web3d.gl.DEPTH_TEST);
		this.init();

		this.log("Entering main game loop.");
		this.mainLoop();
		return true;
	},

	mainLoop: function() {
		web3d.gl.viewport(0, 0, web3d.canvas.width, web3d.gl.canvas.height);
		web3d.gl.clear(web3d.gl.COLOR_BUFFER_BIT | web3d.gl.DEPTH_BUFFER_BIT);
		web3d.render();

		requestAnimationFrame(web3d.mainLoop);
	},

	log: function() {
		var time = new Date();
		var hours = time.getHours();
		var minutes = time.getMinutes();
		var seconds = time.getSeconds();

		var timestamp = "";
		if (hours < 10)
			timestamp += "0";
		timestamp += hours + ":";
		if (minutes < 10)
			timestamp += "0";
		timestamp += minutes + ":";
		if (seconds < 10)
			timestamp += "0";
		timestamp += seconds;

		var msg = "";
		for (var i = 0; i < arguments.length; ++i)
			msg += arguments[i];

		console.log("[" + timestamp + "] " + msg);
	},

	error: function() {
		var time = new Date();
		var hours = time.getHours();
		var minutes = time.getMinutes();
		var seconds = time.getSeconds();

		var timestamp = "";
		if (hours < 10)
			timestamp += "0";
		timestamp += hours + ":";
		if (minutes < 10)
			timestamp += "0";
		timestamp += minutes + ":";
		if (seconds < 10)
			timestamp += "0";
		timestamp += seconds;

		var msg = "";
		for (var i = 0; i < arguments.length; ++i)
			msg += arguments[i];

		console.error("[" + timestamp + "] " + msg);
	},

	glCheck: function(msg) {
		var err = this.gl.getError();
		if (err != this.gl.NO_ERROR) {
			this.error(msg);
		}
	}
};
web3d.Math = {
	clamp: function(x,a,b) {
		return (x < a) ? a : (( x > b) ? b : x);
	},	
	
	degToRad: function(x) {
		return x * (Math.PI / 180);
	},

	radToDeg: function(x) {
		return x * (180 / Math.PI);
	},
};
web3d.Loader = function () {
	
};

web3d.Loader.prototype = {
	constructor: web3d.Loader,

	load: function(url, complete, progress, error) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
		xhr.responseType = "text";
		xhr.ontimeout = function(e) {
			error(e.loaded,e.total);
		};
		xhr.onprogress = function(e) {
			progress(e.loaded, e.total);
		};
		xhr.onload = function(e) {
			if (this.status == 200)
				complete(xhr);
			else
				error(e.loaded, e.total);
		};
		xhr.send(null);
	}
};

web3d.TextureLoader = function() {
	this.loader = new web3d.Loader();
};

web3d.TextureLoader.prototype = {
	constructor: web3d.TextureLoader,
	loader: null,

	load: function(url, complete, progress, error) {
		this.loader.load(url, function(xhr) { 
			var image = new Image();
			image.onload = function() {
				var texture = new web3d.Texture(image);
				complete(texture);
			};
			image.onprogress = function() {
				progress(image.loaded, image.total);
			};
			image.src = url;
		},
		function(recv,total) {
			progress(recv,total);
		},
		function(xhr){
			error(recv,total);
		})
	}
}

web3d.ModelLoader = function() {
	this.loader = new web3d.Loader();
};

web3d.ModelLoader.prototype = {
	constructor: web3d.ModelLoader,
	loader: null,

	load: function(url, complete, progress, error) {
		this.loader.load(url, function(xhr) { 
			var json = JSON.parse(xhr.responseText);
			var geo = new web3d.Geometry();
			geo.vertices = json.vertices;
			geo.colors = json.colors;
			geo.uvs = json.uvs;
			geo.normals = json.normals;
			geo.indices = json.indices;
			geo.update(web3d.RenderTypes.TRIANGLES);
			complete(geo);
		},
		function(recv,total) {
			progress(recv,total);
		},
		function(xhr){
			error(recv,total);
		})
	}
}

web3d.Color = function (color) {
	if (arguments.length == 3)
		this.setRGBA(arguments[0], arguments[1], arguments[2], 1);
	else if (arguments.length == 4)
		this.setRGBA(arguments[0], arguments[1], arguments[2], arguments[3]);
	else
		return this.set(color);
};

web3d.Color.prototype = {
	constructor: web3d.Color,

	r: 1, g: 1, b: 1, a: 1,

	set: function(value) {
		if (value instanceof web3d.Color)
			this.setRGBA(value.r, value.g, value.b, value.a);
		else if (typeof value == 'number')
			this.setHex(value);
		return this;
	},

	setRGBA: function(r, g, b, a) {
		this.r = r;
		this.g = g;
		this.b = b;
		this.a = a;
		return this;
	},

	setHex: function(hex) {
		hex = Math.floor(hex);
		this.r = (hex >> 24 & 255) / 255;
		this.g = (hex >> 16 & 255) / 255;
		this.b = (hex >> 8 & 255) / 255;
		this.a = (hex & 255) / 255;
		return this;
	}
};
web3d.ShaderTypes = {
	VERTEX: 0,
	FRAGMENT: 1
}

web3d.Shader = function(type, source) {
	if (type == web3d.ShaderTypes.VERTEX)
		this.shader = web3d.gl.createShader(web3d.gl.VERTEX_SHADER);
	else if (type == web3d.ShaderTypes.FRAGMENT)
		this.shader = web3d.gl.createShader(web3d.gl.FRAGMENT_SHADER);
	else
		web3d.error("Unknown shader type.");
	web3d.glCheck("Failed to create shader.");
	this.set(source);
	this.compile();
};

web3d.Shader.prototype = {
	constructor: web3d.Shader,

	set: function(source) {
		web3d.gl.shaderSource(this.shader, source);
		web3d.glCheck("Failed to set shader's source.");
	},

	compile: function() {
		web3d.gl.compileShader(this.shader);
		web3d.glCheck("Failed to compile shader.");

		if (!web3d.gl.getShaderParameter(this.shader, web3d.gl.COMPILE_STATUS)) {
			web3d.error(web3d.gl.getShaderInfoLog(this.shader));
			return null;
		}
	}
}
web3d.ProgramLocations = {
	POSITION0: 0,
	POSITION1: 1,
	POSITION2: 2,
	POSITION3: 3,
	POSITION4: 4,

	NORMAL0: 5,
	NORMAL1: 6,
	NORMAL2: 7,
	NORMAL3: 8,
	NORMAL4: 9,

	TEXCOORD0: 10,
	TEXCOORD1: 11,
	TEXCOORD2: 12,
	TEXCOORD3: 13,
	TEXCOORD4: 14,

	COLOR0: 20,
	COLOR1: 21,
	COLOR2: 22,
	COLOR3: 23,
	COLOR4: 24,

	PROJECTION_MATRIX: 25,
	VIEW_MATRIX: 26,
	MODEL_MATRIX: 37,

	TEXTURE0: 27,
	TEXTURE1: 28,
	TEXTURE2: 29,
	TEXTURE3: 30,
	TEXTURE4: 31,
	TEXTURE5: 32,
	TEXTURE6: 33,
	TEXTURE7: 34,
	TEXTURE8: 35,
	TEXTURE9: 36,

	CUSTOM0: 38,
	CUSTOM1: 39,
	CUSTOM2: 40,
	CUSTOM3: 41,
	CUSTOM4: 42,
	CUSTOM5: 43,
	CUSTOM6: 44,
	CUSTOM7: 45,
	CUSTOM8: 46,
	CUSTOM9: 47
}

web3d.Program = function(vertex, fragment) {
	this.program = web3d.gl.createProgram();
	web3d.glCheck("Failed to create program.");
	this.attach(vertex);
	this.attach(fragment);
	this.link();
	this.validate();

	this.locations = [];
	this.locations.length = 48;
	for (var i = 0; i < this.locations.length; ++i)
		this.locations[i] = null;
};

web3d.Program.prototype = {
	constructor: web3d.Program,

	bind: function() {
		web3d.gl.useProgram(this.program);
		web3d.glCheck("Failed to bind program.");
	},

	unbind: function() {
		web3d.gl.useProgram(null);
		web3d.glCheck("Failed to unbind program.");
	},

	attach: function(shader) {
		web3d.gl.attachShader(this.program, shader.shader);
		web3d.glCheck("Failed to attach shader.");
	},

	detach: function(shader) {
		web3d.gl.detachShader(this.program, shader.shader);
		web3d.glCheck("Failed to detach shader.");
	},

	link: function() {
		web3d.gl.linkProgram(this.program);
		web3d.glCheck("Failed to link program.");
	},
	
	validate: function() {
		web3d.gl.validateProgram(this.program);
		web3d.glCheck("Failed to validate program.");
	},

	mapAttribute: function(id, name) {
		this.locations[id] = web3d.gl.getAttribLocation(this.program, name);
		web3d.glCheck("Failed to get attribute location.");
	},

	mapUniform: function(id, name) {
		this.locations[id] = this.getUniformLocation(name);
		web3d.glCheck("Failed to get uniform location.");
	},

	getUniformLocation: function(name) {
		var loc = web3d.gl.getUniformLocation(this.program, name);
		web3d.glCheck("Failed to get uniform location.");
		return loc;
	},

	uniform1: function(location, value0) {
		web3d.gl.uniform1f(location, value0);
		web3d.glCheck("glUniform1f failed.");
	},

	uniform2: function(location, value0, value1) {
		web3d.gl.uniform2f(location, value0, value1);
		web3d.glCheck("glUniform2f failed.");
	},

	uniform3: function(location, value0, value1, value2) {
		web3d.gl.uniform3f(location, value0, value1, value2);
		web3d.glCheck("glUniform3f failed.");
	},

	uniform4: function(location, value0, value1, value2, value3) {
		web3d.gl.uniform4f(location, value0, value1, value2, value3);
		web3d.glCheck("glUniform4f failed.");
	},

	uniformColor: function(location, color) {
		this.uniform4(location, color.r, color.g, color.b, color.a);
	},

	uniformMatrix4: function(location, transpose, matrix) {
		web3d.gl.uniformMatrix4fv(location, false, matrix);
		web3d.glCheck("glUniformMatrix4fv failed.");
	}
}
web3d.Material = function () {
	this.program = null;
};

web3d.Material.prototype = {
	constructor: web3d.Material,

	setProgram: function(program) {
		this.program = program;
	},

	bind: function() {
		this.program.bind();
	},

	unbind: function() {
		this.program.unbind();
	}
};
web3d.RenderTypes = {
	TRIANGLES: 0,
	TRIANGLE_STRIP: 1,
	TRIANGLE_FAN: 2
};

web3d.Geometry = function () {
	this.verticesBuffer = web3d.gl.createBuffer();
	this.colorsBuffer = web3d.gl.createBuffer();
	this.uvBuffer = web3d.gl.createBuffer();
	this.normalsBuffer = web3d.gl.createBuffer();
	this.indexBuffer = web3d.gl.createBuffer();

	this.material = new web3d.BasicMaterial(new web3d.Color(1,1,1,1));
	this.position = [0,0,0];
	this.rotation = [0,0,0];
	this.scale = [1,1,1];

	this.vertices = [];
	this.colors =  [];
	this.uvs = [];
	this.normals = [];
	this.indices = [];

	this.verticesCount = 0;
	this.renderType = web3d.RenderTypes.TRIANGLES;
};

web3d.Geometry.prototype = {
	constructor: web3d.Geometry,

	update: function(renderType) {
		if (this.colors != null && this.colors.length > 0) {
			web3d.gl.bindBuffer(web3d.gl.ARRAY_BUFFER, this.colorsBuffer);
			web3d.gl.bufferData(web3d.gl.ARRAY_BUFFER, new Float32Array(this.colors), web3d.gl.STATIC_DRAW);
		}
		if (this.normals != null && this.normals.length > 0) {
			web3d.gl.bindBuffer(web3d.gl.ARRAY_BUFFER, this.normalsBuffer);
			web3d.gl.bufferData(web3d.gl.ARRAY_BUFFER, new Float32Array(this.normals), web3d.gl.STATIC_DRAW);
		}
		if (this.uvs != null && this.uvs.length > 0) {
			web3d.gl.bindBuffer(web3d.gl.ARRAY_BUFFER, this.uvBuffer);
			web3d.gl.bufferData(web3d.gl.ARRAY_BUFFER, new Float32Array(this.uvs), web3d.gl.STATIC_DRAW);
		}
		if (this.vertices != null && this.vertices.length > 0) {
			web3d.gl.bindBuffer(web3d.gl.ARRAY_BUFFER, this.verticesBuffer);
			web3d.gl.bufferData(web3d.gl.ARRAY_BUFFER, new Float32Array(this.vertices), web3d.gl.STATIC_DRAW);
		}
		if (this.indices != null && this.indices.length > 0) {
			web3d.gl.bindBuffer(web3d.gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
			web3d.gl.bufferData(web3d.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indices), web3d.gl.STATIC_DRAW);
		}

		this.renderType = renderType;
	},

	render: function(camera) {
		// Bind camera matrices and model matrix to program
		var modelMat = mat4.create();
		mat4.identity(modelMat);
		mat4.translate(modelMat, modelMat, this.position);
		mat4.rotate(modelMat, modelMat, web3d.Math.degToRad(this.rotation[0]), [1,0,0]);
		mat4.rotate(modelMat, modelMat, web3d.Math.degToRad(this.rotation[1]), [0,1,0]);
		mat4.rotate(modelMat, modelMat, web3d.Math.degToRad(this.rotation[2]), [0,0,1]);
		mat4.scale(modelMat, modelMat, this.scale);

		this.material.bind();
		program.uniformMatrix4(this.material.program.locations[web3d.ProgramLocations.VIEW_MATRIX], false, camera.getViewMatrix());
		program.uniformMatrix4(this.material.program.locations[web3d.ProgramLocations.PERSPECTIVE_MATRIX], false, camera.getPerspectiveMatrix());
		program.uniformMatrix4(this.material.program.locations[web3d.ProgramLocations.MODEL_MATRIX], false, modelMat);

		// Update vertex attributes.
		var color0 = program.locations[web3d.ProgramLocations.COLOR0];
		if (this.colors != null && this.colors.length > 0 && color0 != null) {
			web3d.gl.bindBuffer(web3d.gl.ARRAY_BUFFER, this.colorsBuffer);
			web3d.gl.vertexAttribPointer(color0, 4, web3d.gl.FLOAT, false, 0, 0);
			web3d.gl.enableVertexAttribArray(color0);
			web3d.glCheck("Failed to set geometry's color attribute.");
		}
		var norm0 = program.locations[web3d.ProgramLocations.NORMAL0];
		if (this.normals != null && this.normals.length > 0 && norm0 != null) {
			web3d.gl.bindBuffer(web3d.gl.ARRAY_BUFFER, this.normalsBuffer);
			web3d.gl.vertexAttribPointer(norm0, 3, web3d.gl.FLOAT, false, 0, 0);
			web3d.gl.enableVertexAttribArray(norm0);
			web3d.glCheck("Failed to set geometry's normal attribute.");
		}
		var uv0 = program.locations[web3d.ProgramLocations.TEXCOORD0];
		if (this.uvs != null && this.uvs.length > 0 && uv0 != null) {
			web3d.gl.bindBuffer(web3d.gl.ARRAY_BUFFER, this.uvBuffer);
			web3d.gl.vertexAttribPointer(uv0, 2, web3d.gl.FLOAT, false, 0, 0);
			web3d.gl.enableVertexAttribArray(uv0);
			web3d.glCheck("Failed to set geometry's texcoord attribute.");
		}
		var pos0 = program.locations[web3d.ProgramLocations.POSITION0];
		if (this.vertices != null && this.vertices.length > 0 && pos0 != null) {
			web3d.gl.bindBuffer(web3d.gl.ARRAY_BUFFER, this.verticesBuffer);
			web3d.gl.vertexAttribPointer(pos0, 3, web3d.gl.FLOAT, false, 0, 0);
			web3d.gl.enableVertexAttribArray(pos0);
			web3d.glCheck("Failed to set geometry's position attribute.");
		}

		// Lookup rendertype:
		//TODO: Remaining
		var type = web3d.gl.TRIANGLES;
		switch (this.renderType) {
			case web3d.RenderTypes.TRIANGLES:
				type = web3d.gl.TRIANGLES;
				break;
			case web3d.RenderTypes.TRIANGLE_STRIP:
				type = web3d.gl.TRIANGLE_STRIP;
				break;
			case web3d.RenderTypes.TRIANGLE_FAN:
				type = web3d.gl.TRIANGLE_FAN;
				break;
			default:
				type = web3d.gl.TRIANGLES;
				break;
		}

		// Render
		if (this.indices != null && this.indices.length > 0) {
			web3d.gl.bindBuffer(web3d.gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
			web3d.gl.drawElements(type, this.indices.length, web3d.gl.UNSIGNED_SHORT, 0);
			web3d.glCheck("Failed to draw geometry's elements.");
			web3d.gl.bindBuffer(web3d.gl.ELEMENT_ARRAY_BUFFER, null);
		}
		else {
			web3d.gl.drawArrays(type, 0, this.verticesCount);
			web3d.glCheck("Failed to draw geometry's arrays.");
		}

		// Unbind the program and buffers, we're done with them.
		web3d.gl.bindBuffer(web3d.gl.ARRAY_BUFFER, null);
		this.material.unbind();
	}
};
web3d.Texture = function (image) {
	this.texture = web3d.gl.createTexture();
	this.set(image);
};

web3d.Texture.prototype = {
	constructor: web3d.Texture,

	texture: null,

	set: function(image) {
		this.bind();
		web3d.gl.texImage2D(web3d.gl.TEXTURE_2D, 0, web3d.gl.RGBA, web3d.gl.RGBA, web3d.gl.UNSIGNED_BYTE, image);
		web3d.gl.texParameteri(web3d.gl.TEXTURE_2D, web3d.gl.TEXTURE_MAG_FILTER, web3d.gl.LINEAR);
		web3d.gl.texParameteri(web3d.gl.TEXTURE_2D, web3d.gl.TEXTURE_MIN_FILTER, web3d.gl.LINEAR_MIPMAP_NEAREST);
		web3d.gl.generateMipmap(web3d.gl.TEXTURE_2D);
		this.unbind();
		return this;
	},

	bind: function() {
		web3d.gl.bindTexture(web3d.gl.TEXTURE_2D, this.texture);
		web3d.glCheck("Failed to bind texture.");
	},

	unbind: function() {
		web3d.gl.bindTexture(web3d.gl.TEXTURE_2D, null);
		web3d.glCheck("Failed to unbind texture.");
	}
};
web3d.Camera = function () {
	this.lookAt([0,0,0], [0,0,0], [0,1,0]);
	this.perspective(45, 1, 0.1, 1000);
};

web3d.Camera.prototype = {
	constructor: web3d.Camera,

	eye: null,
	at: null,
	up: null,
	fov: 45,
	aspect: 1,
	near: 0.1,
	far: 1000,

	copy: function(b) {
		this.eye = b.eye;
		this.at = b.at;
		this.up = b.up;
		this.fov = b.fov;
		this.aspect = b.aspect;
		this.near = b.near;
		this.far = b.far;
	},

	lookAt: function(eye, at, up) {
		this.eye = eye;
		this.at = at;
		this.up = up;
	},

	perspective: function(fov, aspect, near, far) {
		this.fov = fov;
		this.aspect = aspect;
		this.near = near;
		this.far = far;
	},

	getPerspectiveMatrix: function() {
		var persp = mat4.create();
		mat4.perspective(persp, this.fov, this.aspect, this.near, this.far);
		return persp;
	},

	getViewMatrix: function() {
		var look = mat4.create();
		mat4.lookAt(look, this.eye, this.at, this.up);
		return look;
	}
};
web3d.Geometry.cube = function(x, y, z) {
	geo = new web3d.Geometry();
	geo.vertices = [
	    -x, -y, -z,
	     x, -y, -z, 
	     x,  y, -z, 
	     x,  y, -z,
	    -x,  y, -z,
	    -x, -y, -z,

	    -x, -y,  z,
	     x, -y,  z,
	     x,  y,  z,
	     x,  y,  z,
	    -x,  y,  z,
	    -x, -y,  z,

	    -x,  y,  z,
	    -x,  y, -z, 
	    -x, -y, -z,
	    -x, -y, -z,
	    -x, -y,  z,
	    -x,  y,  z,

	     x,  y,  z,
	     x,  y, -z,
	     x, -y, -z,
	     x, -y, -z,
	     x, -y,  z,
	     x,  y,  z,

	    -x, -y, -z,
	     x, -y, -z,
	     x, -y,  z,
	     x, -y,  z, 
	    -x, -y,  z,
	    -x, -y, -z,

	    -x,  y, -z,
	     x,  y, -z, 
	     x,  y,  z,
	     x,  y,  z,
	    -x,  y,  z,
	    -x,  y, -z
    ];

    geo.colors.length = (geo.vertices.length/3)*4
	for (var i = 0; i < geo.colors.length; ++i)
		geo.colors[i] = 1;

	geo.uvs = [
		0.0, 0.0,
		1.0, 0.0,
		1.0, 1.0,
		1.0, 1.0,
		0.0, 1.0,
		0.0, 0.0,

		0.0, 0.0,
		1.0, 0.0,
		1.0, 1.0,
		1.0, 1.0,
		0.0, 1.0,
		0.0, 0.0,

		1.0, 0.0,
		1.0, 1.0,
		0.0, 1.0,
		0.0, 1.0,
		0.0, 0.0,
		1.0, 0.0,

		1.0, 0.0,
		1.0, 1.0,
		0.0, 1.0,
		0.0, 1.0,
		0.0, 0.0,
		1.0, 0.0,

		0.0, 1.0,
		1.0, 1.0,
		1.0, 0.0,
		1.0, 0.0,
		0.0, 0.0,
		0.0, 1.0,

		0.0, 1.0,
		1.0, 1.0,
		1.0, 0.0,
		1.0, 0.0,
		0.0, 0.0,
		0.0, 1.0
	];
	geo.verticesCount = 36;
	geo.update(web3d.RenderTypes.TRIANGLES);
	return geo;
}
web3d.Geometry.sphere = function(radius, rings, sectors) {
	geo = new web3d.Geometry();
	
	var R = 1.0 / (rings-1);
	var S = 1.0 / (sectors-1);
	var uvI = 0, vI = 0, nI = 0;

	// Generate the vertices, normals, and uvs
	geo.vertices.length = rings * sectors * 3;
	geo.normals.length = rings * sectors * 3;
	geo.uvs.length = rings * sectors * 2;
	for (var r = 0; r < rings; ++r) {
		for (var s = 0; s < sectors; ++s) {
			var x = Math.cos(2*Math.PI * s * S) * Math.sin(Math.PI * r * R);
			var y = Math.sin(-(Math.PI/2) + Math.PI * r * R);
			var z = Math.sin(2*Math.PI * s * S) * Math.sin(Math.PI * r * R);

			geo.vertices[vI++] = x * radius;
			geo.vertices[vI++] = y * radius;
			geo.vertices[vI++] = z * radius;

			geo.normals[nI++] = x;
			geo.normals[nI++] = y;
			geo.normals[nI++] = z;

			geo.uvs[uvI++] = s*S;
			geo.uvs[uvI++] = r*R;
		}
	}

	// Generate the indices
	geo.indices.length = rings * sectors * 6;
	var iI = 0;
	for (var r = 0; r < rings-1; ++r) {
		for (var s = 0; s < sectors-1; ++s) {
			geo.indices[iI++] = r * sectors + s;
			geo.indices[iI++] = r * sectors + (s+1);
			geo.indices[iI++] = (r+1) * sectors + s;

			geo.indices[iI++] = r * sectors + (s+1);
			geo.indices[iI++] = (r+1) * sectors + s;
			geo.indices[iI++] = (r+1) * sectors + (s+1);
		}
	}

    geo.colors.length = rings * sectors * 4
	for (var i = 0; i < geo.colors.length; ++i)
		geo.colors[i] = 1;

	geo.update(web3d.RenderTypes.TRIANGLES);
	return geo;
}
web3d.BasicMaterial = function (color) {
	web3d.Material.call(this);

	var vertexShader = new web3d.Shader(web3d.ShaderTypes.VERTEX, "	\
			attribute vec3 aVertexPosition;		\
			attribute vec4 aVertexColor;		\
			uniform mat4 uPMatrix;				\
			uniform mat4 uVMatrix;				\
			uniform mat4 uMMatrix;				\
			uniform vec4 uColor;				\
			varying vec4 vColor;				\
			void main(void) {					\
				vColor = aVertexColor * uColor;			\
				gl_Position = uPMatrix * uVMatrix * uMMatrix * vec4(aVertexPosition, 1.0);	\
			}"
		);
	var fragmentShader = new web3d.Shader(web3d.ShaderTypes.FRAGMENT, "			\
		 	precision mediump float;					\
		 	varying vec4 vColor;						\
			void main(void) {							\
				gl_FragColor = vColor;					\
			}"
		);

	program = new web3d.Program(vertexShader, fragmentShader);
	program.bind();
	program.mapAttribute(web3d.ProgramLocations.POSITION0, "aVertexPosition");
	program.mapAttribute(web3d.ProgramLocations.COLOR0, "aVertexColor");
	program.mapUniform(web3d.ProgramLocations.CUSTOM0, "uColor")
	program.mapUniform(web3d.ProgramLocations.PERSPECTIVE_MATRIX, "uPMatrix");
	program.mapUniform(web3d.ProgramLocations.VIEW_MATRIX, "uVMatrix");
	program.mapUniform(web3d.ProgramLocations.MODEL_MATRIX, "uMMatrix");
	program.unbind();

	this.setProgram(program);
	this.color = color;
};

web3d.BasicMaterial.prototype = Object.create(web3d.Material.prototype);
web3d.BasicMaterial.prototype.constructor = web3d.BasicMaterial;
web3d.BasicMaterial.prototype.bind = function() {
	this.program.bind();

	this.program.uniformColor(this.program.locations[web3d.ProgramLocations.CUSTOM0], this.color);
}
web3d.TexturedMaterial = function (texture) {
	web3d.Material.call(this);

	var vertexShader = new web3d.Shader(web3d.ShaderTypes.VERTEX, "	\
			attribute vec3 aVertexPosition;		\
			attribute vec2 aTextureCoord;		\
			uniform mat4 uPMatrix;				\
			uniform mat4 uVMatrix;				\
			uniform mat4 uMMatrix;				\
			uniform vec4 uColor;				\
			varying vec2 vTextureCoord;			\
			void main(void) {					\
				vTextureCoord = aTextureCoord;	\
				gl_Position = uPMatrix * uVMatrix * uMMatrix * vec4(aVertexPosition, 1.0);	\
			}"
		);
	var fragmentShader = new web3d.Shader(web3d.ShaderTypes.FRAGMENT, "			\
		 	precision mediump float;					\
		 	uniform sampler2D uSampler;					\
		 	varying vec2 vTextureCoord;					\
			void main(void) {							\
				gl_FragColor = texture2D(uSampler, vTextureCoord);		\
			}"
		);

	program = new web3d.Program(vertexShader, fragmentShader);
	program.bind();
	program.mapAttribute(web3d.ProgramLocations.POSITION0, "aVertexPosition");
	program.mapAttribute(web3d.ProgramLocations.TEXCOORD0, "aTextureCoord");
	program.mapUniform(web3d.ProgramLocations.TEXTURE0, "vTextureCoord")
	program.mapUniform(web3d.ProgramLocations.PERSPECTIVE_MATRIX, "uPMatrix");
	program.mapUniform(web3d.ProgramLocations.VIEW_MATRIX, "uVMatrix");
	program.mapUniform(web3d.ProgramLocations.MODEL_MATRIX, "uMMatrix");
	program.unbind();

	this.setProgram(program);
	this.texture = texture;
};

web3d.TexturedMaterial.prototype = Object.create(web3d.Material.prototype);
web3d.TexturedMaterial.prototype.constructor = web3d.TexturedMaterial;
web3d.TexturedMaterial.prototype.bind = function() {
	this.program.bind();
	
	web3d.gl.activeTexture(web3d.gl.TEXTURE0);
	this.texture.bind();
	this.program.uniform1(this.program.locations[web3d.ProgramLocations.TEXTURE0], 0);
}

web3d.TexturedMaterial.prototype.unbind = function() {
	this.texture.unbind();
	this.program.unbind();
}
