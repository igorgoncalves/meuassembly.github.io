"use strict";function Computador(){this.memoria=[],this.processador=new Processador,this.carregarMemoria=function(t){this.memoria=t}}function Processador(){this.cp=0,this.ula=new Ula,this.uc=new UC,this.dc=new Decodificador,this.start=function(t){do{this.cp=this.uc.control(this.dc.decodificar(t[this.cp]),this.cp,this.ula)}while(t.length>this.cp)}}function Decodificador(){var t=[];this.decodificar=function(i){return t=[],i=parseInt(i,2),t.push((4026531840&i)>>28),t.push((268419072&i)>>14),t.push(16383&i),t}}function UC(){this.control=function(t,i,s){return 4==t[0]?t[2]:($("#webconsole").append("command: "+t[0].toString(2)+", "+t[1].toString(2)+", "+t[2].toString(2)+" Resultado: "+s.calcule(t).toString(2)+"<br>"),i+1)}}function Ula(){this.calcule=function(t){switch(t[0]){case 1:return this.sum(t[1],t[2]);case 2:return this.sub(t[1],t[2]);case 3:return this.sqt(t[1],t[2])}},this.sum=function(t,i){return t+i},this.sqt=function(t,i){return t*i},this.sub=function(t,i){return t-i}}