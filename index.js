module.exports=(function(){
  var n='1234567890'
  return function(v){
    var l=v.length
    var i=l
    while(i--)if(n.indexOf(v[i])!==-1)break
    var s=i+1
    var u=v.slice(s,l)
    var q=parseFloat(v)
    var m
    if(u==='s')m=1000
    else if(u==='m')m=60000
    else if(u==='h')m=3600000
    else if(u==='d')m=86400000
    return q*m
  }
}())
