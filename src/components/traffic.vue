<template>
  <div>
    <div>{{time}}</div>
        <div id="traffic-light">
            <div class="light red" :class="{active: current=='red', blink: current=='red' && time<3.5}"></div>
            <div class="light yellow" :class="{active,blink: current=='yellow'}"></div>
            <div class="light green" :class="{active: current=='green', blink: current=='green' && time<3.5}"></div>
        </div>
  </div>
</template>


<script>
class State {
  constructor(name, dur, next){
    this.name = name;
    this.dur = dur;
    this.next = next;
  }
}

class Constroller {
  trigger(state, callback){
    callback(state);
    setTimeout(()=>{
      this.trigger(state.next, callback);
    }, state.dur * 1000)
  }
}

export default {
  name: 'traffic',
  data () {
      return {
        time: '',
        current: 'red'
      }
    },
    methods : {

        todo : function(){          
            setInterval(function(){
            this.time = this.time - 1;
    }.bind(this), 1000);
        }
    },
mounted(){
  
    var constroller = new Constroller();
  
    var red = new State('red', 10); 
    var yellowR = new State('yellow', 3);
    var yellowG = new State('yellow', 3);
    var green = new State('green', 15);

    red.next = yellowR;
    yellowR.next = green;
    green.next = yellowG;
    yellowG.next = red;

    constroller.trigger(red, (state)=>{
      this.current = state.name;
      this.time = state.dur;
    });
    this.todo() 
  }
}
</script>

<style>
body {
  background: linear-gradient(rgb(52, 166, 255), rgb(71, 124, 255));
  height: 100vh;
}

#traffic-light {
  width: 70px;
  height: 240px;
  background: #222;
  border-radius: 8px;
  margin: auto;
  padding: 15px;
}

.light {
  display: inline-block;
  border-radius: 100%;
  width: 70px;
  height: 70px;
  margin-bottom: 8px;
  opacity: 0.2;
  transition: opacity 0.2s
}

.active {
  opacity: 1;
}

.red {
  background: red;
}
.yellow {
  background: yellow;
}
.green {
  background: green;
}
.blink {
  animation-name: blinker;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(1.0,0,0,1.0);
  animation-duration: 1s;
  -webkit-animation-name: blinker;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: cubic-bezier(1.0,0,0,1.0);
  -webkit-animation-duration: 1s;
}
 
@keyframes blinker {
  from { opacity: 1.0; }
  to { opacity: 0.0; }
}
 
@-webkit-keyframes blinker {
  from { opacity: 1.0; }
  to { opacity: 0.0; }
}
</style>