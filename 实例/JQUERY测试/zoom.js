$(function(){
	$('#mask').hover(function(e){
		$('#drag').show();
		$('#big-pic').show();
		$('#big-img').show();
	},function(){
		$('#drag').hide();
		$('#big-pic').hide();
	});
	$('#mask').on('mousemove',function(e){
		var $x=e.pageX,$y=e.pageY;
		if ($x < 35) {
			$x = 35;
		}
		if ($x >206 ) {
			$x = 206;
		}
		if ($y < 35) {
			$y = 35;
		}
		if ($y > 118 ) {
			$y = 118
		}
		$('#drag').css({
			left : $x - 35 + "px",
			top : $y - 35 + 'px'
		});
		// $('#big-img').show().position(-$x/(201-30)*(1366-201),-$y/(113-30)*(768-113));
		// $('#big-img').scrollLeft(-$x/(201-30)*(1366-201));
		// $('#big-img').scrollTop(-$y/(113-30)*(768-113));
		$('#big-img').css({//此上三行代码思路错误！！！
			left : -($x - 35)/(201-30)*(1366-201) + "px",
			top : -($y - 35)/(113-30)*(768-113) + 'px'
		})

	})

})