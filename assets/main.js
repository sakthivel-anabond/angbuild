$(document).ready(function () {
  $('#sidebar').on('click', '.nav-link', function () {
    if (!$(this).hasClass('nav-link-sub')) {
      $('#settingMenu').removeClass('show')
    }
  });
  $('#sidebar').on('click', '.nav-link', function () {
    $('#sidebar').find('.nav-link').removeClass('active');
    $(this).addClass('active');
  });
  $(document).on('shown.bs.modal', function (e) {
    $('[autofocus]').focus()
  });
  $(document).on('DOMSubtreeModified','#datachanged',function(){
    //alert("sd");
    //alert($(document).find('.line').length);
    $('canvas').remove();
    $(document).find('.line').each(function() {
      drawLine($(this));
    });
  });
    function drawLine(ele){
      var $t = ele;
      var $i = $('#' + $t.data('id'));

    // find offset positions for the word (t = this) and image (i)
    var ot = {
      x: $t.offset().left + $t.width()+40,
      y: $t.offset().top + $t.height() / 2
  };
  var oi = {
      x: $i.offset().left,
      y: $i.offset().top + $i.height() / 3
  };

    // x,y = top left corner
    // x1,y1 = bottom right corner
    var p = {
        x: ot.x < oi.x ? ot.x : oi.x,
        x1: ot.x > oi.x ? ot.x : oi.x,
        y: ot.y < oi.y ? ot.y : oi.y,
        y1: ot.y > oi.y ? ot.y : oi.y
    };

    // create canvas between those points
    var c = $('<canvas/>').attr({
        'width': p.x1 - p.x,
        'height': p.y1 - p.y
    }).css({
        'position': 'absolute',
        'left': p.x,
        'top': p.y,
        'z-index': 1
    }).appendTo($('app-correlation'))[0].getContext('2d');

    // draw line
    c.strokeStyle = '#edf0f4';
    c.lineWidth = 2;
    c.beginPath();
    c.moveTo(ot.x - p.x, ot.y - p.y);
    c.lineTo(oi.x - p.x, oi.y - p.y);
    c.stroke();
}
$(document).on('mouseover','.line',function () {
   var $t = $(this);
   var $i = $('#' + $t.data('id'));
   $t.addClass('blueBg');
   $i.addClass('blueBg');
   // find offset positions for the word (t = this) and image (i)
   var ot = {
       x: $t.offset().left + $t.width()+40,
       y: $t.offset().top + $t.height() / 2
   };
   var oi = {
       x: $i.offset().left,
       y: $i.offset().top + $i.height() / 3
   };

   // x,y = top left corner
   // x1,y1 = bottom right corner
   var p = {
       x: ot.x < oi.x ? ot.x : oi.x,
       x1: ot.x > oi.x ? ot.x : oi.x,
       y: ot.y < oi.y ? ot.y : oi.y,
       y1: ot.y > oi.y ? ot.y : oi.y
   };

   // create canvas between those points
   var c = $('<canvas/>').attr({
       'width': p.x1 - p.x,
       'height': p.y1 - p.y,
       'class':'hoverCavas'
   }).css({
       'position': 'absolute',
       'left': p.x,
       'top': p.y,
       'z-index': 1
   }).appendTo($('body'))[0].getContext('2d');

   // draw line
   c.strokeStyle = '#1986AC';
   c.lineWidth = 2;
   c.beginPath();
   c.moveTo(ot.x - p.x, ot.y - p.y);
   c.lineTo(oi.x - p.x, oi.y - p.y);
   c.stroke();
});


$(document).on('mouseover','.line1',function () {
  var $t = $(this);
  var $i = $('#' + $t.data('id'));
  $t.addClass('blueBg');
  $i.addClass('blueBg');
  // find offset positions for the word (t = this) and image (i)
  var ot = {
      x: $t.offset().left,
      y: $t.offset().top + $t.height() / 2
  };
  var oi = {
      x: $i.offset().left + $t.width()+40,
      y: $i.offset().top + $i.height() / 3
  };

  // x,y = top left corner
  // x1,y1 = bottom right corner
  var p = {
      x: ot.x < oi.x ? ot.x : oi.x,
      x1: ot.x > oi.x ? ot.x : oi.x,
      y: ot.y < oi.y ? ot.y : oi.y,
      y1: ot.y > oi.y ? ot.y : oi.y
  };

  // create canvas between those points
  var c = $('<canvas/>').attr({
      'width': p.x1 - p.x,
      'height': p.y1 - p.y,
      'class':'hoverCavas'
  }).css({
      'position': 'absolute',
      'left': p.x,
      'top': p.y,
      'z-index': 1
  }).appendTo($('body'))[0].getContext('2d');

  // draw line
  c.strokeStyle = '#1986AC';
  c.lineWidth = 2;
  c.beginPath();
  c.moveTo(ot.x - p.x, ot.y - p.y);
  c.lineTo(oi.x - p.x, oi.y - p.y);
  c.stroke();
});

$(document).on('mouseout','.line, .line1',function () {
    $('.hoverCavas').remove();
    $('.blueBg').removeClass('blueBg');
});
});
