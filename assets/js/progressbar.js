
$(".circle_percent").each(function() {
  var $this = $(this),
  $dataV = $this.data("percent"),
  $dataDeg = $dataV * 3.6,
  $round = $this.find(".round_per");
$round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
$this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
$this.prop('Counter', 0).animate({Counter: $dataV},
{
  duration: 2000,
  easing: 'swing',
  step: function (now) {
          $this.find(".percent_text").text(Math.ceil(now)+""); // '%' hidden manually
      }
  });
if($dataV >= 51){
  $round.css("transform", "rotate(" + 360 + "deg)");
  setTimeout(function(){
    $this.addClass("percent_more");
  },1000);
  setTimeout(function(){
    $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
  },1000);
}
});
// New Registration
$(".circle_percent1").each(function() {
  var $this = $(this),
  $dataV = $this.data("percent"),
  $dataDeg = $dataV * 3.6,
  $round = $this.find(".round_per1");
$round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
$this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
$this.prop('Counter', 0).animate({Counter: $dataV},
{
  duration: 2000,
  easing: 'swing',
  step: function (now) {
          $this.find(".percent_text").text(Math.ceil(now)+""); // '%' hidden manually
      }
  });
if($dataV >= 51){
  $round.css("transform", "rotate(" + 360 + "deg)");
  setTimeout(function(){
    $this.addClass("percent_more1");
  },1000);
  setTimeout(function(){
    $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
  },1000);
}
});

$(".circle_percent2").each(function() {
  var $this = $(this),
  $dataV = $this.data("percent"),
  $dataDeg = $dataV * 3.6,
  $round = $this.find(".round_per2");
$round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
$this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
$this.prop('Counter', 0).animate({Counter: $dataV},
{
  duration: 2000,
  easing: 'swing',
  step: function (now) {
          $this.find(".percent_text").text(Math.ceil(now)+""); // '%' hidden manually
      }
  });
if($dataV >= 51){
  $round.css("transform", "rotate(" + 360 + "deg)");
  setTimeout(function(){
    $this.addClass("percent_more2");
  },1000);
  setTimeout(function(){
    $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
  },1000);
}
});
//complaince warning
$(".circle_percent6").each(function() {
  var $this = $(this),
  $dataV = $this.data("percent"),
  $dataDeg = $dataV * 3.6,
  $round = $this.find(".round_per6");
$round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
$this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
$this.prop('Counter', 0).animate({Counter: $dataV},
{
  duration: 2000,
  easing: 'swing',
  step: function (now) {
          $this.find(".percent_text").text(Math.ceil(now)+""); // '%' hidden manually
      }
  });
if($dataV >= 51){
  $round.css("transform", "rotate(" + 360 + "deg)");
  setTimeout(function(){
    $this.addClass("percent_more6");
  },1000);
  setTimeout(function(){
    $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
  },1000);
}
});

$(".circle_percent7").each(function() {
  var $this = $(this),
  $dataV = $this.data("percent"),
  $dataDeg = $dataV * 3.6,
  $round = $this.find(".round_per7");
$round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
$this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
$this.prop('Counter', 0).animate({Counter: $dataV},
{
  duration: 2000,
  easing: 'swing',
  step: function (now) {
          $this.find(".percent_text").text(Math.ceil(now)+""); // '%' hidden manually
      }
  });
if($dataV >= 51){
  $round.css("transform", "rotate(" + 360 + "deg)");
  setTimeout(function(){
    $this.addClass("percent_more7");
  },1000);
  setTimeout(function(){
    $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
  },1000);
}
});

$(".circle_percent8").each(function() {
  var $this = $(this),
  $dataV = $this.data("percent"),
  $dataDeg = $dataV * 3.6,
  $round = $this.find(".round_per8");
$round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
$this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
$this.prop('Counter', 0).animate({Counter: $dataV},
{
  duration: 2000,
  easing: 'swing',
  step: function (now) {
          $this.find(".percent_text").text(Math.ceil(now)+""); // '%' hidden manually
      }
  });
if($dataV >= 51){
  $round.css("transform", "rotate(" + 360 + "deg)");
  setTimeout(function(){
    $this.addClass("percent_more8");
  },1000);
  setTimeout(function(){
    $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
  },1000);
}
});

$(".circle_percent9").each(function() {
  var $this = $(this),
  $dataV = $this.data("percent"),
  $dataDeg = $dataV * 3.6,
  $round = $this.find(".round_per9");
$round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
$this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
$this.prop('Counter', 0).animate({Counter: $dataV},
{
  duration: 2000,
  easing: 'swing',
  step: function (now) {
          $this.find(".percent_text").text(Math.ceil(now)+""); // '%' hidden manually
      }
  });
if($dataV >= 51){
  $round.css("transform", "rotate(" + 360 + "deg)");
  setTimeout(function(){
    $this.addClass("percent_more9");
  },1000);
  setTimeout(function(){
    $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
  },1000);
}
});

//clients
$(".circle_percent10").each(function() {
  var $this = $(this),
  $dataV = $this.data("percent"),
  $dataDeg = $dataV * 3.6,
  $round = $this.find(".round_per10");
$round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
$this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
$this.prop('Counter', 0).animate({Counter: $dataV},
{
  duration: 2000,
  easing: 'swing',
  step: function (now) {
          $this.find(".percent_text").text(Math.ceil(now)+""); // '%' hidden manually
      }
  });
if($dataV >= 51){
  $round.css("transform", "rotate(" + 360 + "deg)");
  setTimeout(function(){
    $this.addClass("percent_more10");
  },1000);
  setTimeout(function(){
    $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
  },1000);
}
});

$(".circle_percent11").each(function() {
  var $this = $(this),
  $dataV = $this.data("percent"),
  $dataDeg = $dataV * 3.6,
  $round = $this.find(".round_per11");
$round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
$this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
$this.prop('Counter', 0).animate({Counter: $dataV},
{
  duration: 2000,
  easing: 'swing',
  step: function (now) {
          $this.find(".percent_text").text(Math.ceil(now)+""); // '%' hidden manually
      }
  });
if($dataV >= 51){
  $round.css("transform", "rotate(" + 360 + "deg)");
  setTimeout(function(){
    $this.addClass("percent_more11");
  },1000);
  setTimeout(function(){
    $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
  },1000);
}
});

$(".circle_percent12").each(function() {
  var $this = $(this),
  $dataV = $this.data("percent"),
  $dataDeg = $dataV * 3.6,
  $round = $this.find(".round_per12");
$round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
$this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
$this.prop('Counter', 0).animate({Counter: $dataV},
{
  duration: 2000,
  easing: 'swing',
  step: function (now) {
          $this.find(".percent_text").text(Math.ceil(now)+""); // '%' hidden manually
      }
  });
if($dataV >= 51){
  $round.css("transform", "rotate(" + 360 + "deg)");
  setTimeout(function(){
    $this.addClass("percent_more12");
  },1000);
  setTimeout(function(){
    $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
  },1000);
}
});
