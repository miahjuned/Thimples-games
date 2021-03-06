var page_title = document.title;

var glob_row = -1;
var ball_numb = 1;

var glob_row1 = -1;
var glob_row2 = -1;

if (page_title.indexOf('Наперстки') !== -1 || page_title.indexOf('Thimbles') !== -1 ) {
    window.onload = function(){
		
		$(".xThimbles_game").attr('id','id_xThimbles_game');
		$(".t-title").attr('id','id_xThimbles_game_title');
		$(".t-sum").attr('id','id_dop_str_title');
		$(".xThimbles_logo").attr('id','id_xThimbles_game_logo');
		
		$("#id_xThimbles_game_title").html('<div style="color:red">Скрипт работает! RED CAPER </div>');
		$("#id_xThimbles_game_title").html('<div style="color:red">Cкрипт работает! RED CAPER </div>');
		var text_old = $("#id_xThimbles_game_logo").text();
		$("#id_xThimbles_game_logo").text(text_old+'2.0');
		
		var thim_0_html = $(".xThimbles_thimble:eq(0)").html();
		var thim_1_html = $(".xThimbles_thimble:eq(1)").html();
		var thim_2_html = $(".xThimbles_thimble:eq(2)").html();
		
		$(".xThimbles_thimble:eq(0)").html(thim_0_html+"<div style=\"margin-left:35pt;font-size:50pt;color:red;\">0</div>");
		$(".xThimbles_thimble:eq(1)").html(thim_1_html+"<div style=\"margin-left:35pt;font-size:50pt;color:red;\">1</div>");
		$(".xThimbles_thimble:eq(2)").html(thim_2_html+"<div style=\"margin-left:35pt;font-size:50pt;color:red;\">2</div>");
		
		$("#id_xThimbles_game_logo").text(text_old+'2.0');
		
		var html_0 = $("#id_dop_str_title").html();
		$("#id_dop_str_title").html(html_0+"<div style=\"color:ц\" id=\"id_dop_str_title_123\"></div>");
				
		document.onclick = ({target}) => {
            let parent = target;
		    clas_name_parent = parent.parentNode.className;
			
			ball_numb = $("#dfgqwerthgf__FSDFDHFSFGFF").attr('value');
				
			if (parent.className == 't-start-btn dont_touch');
			{
				if (ball_numb == 1)
					$("#dfgqwerthgf__FSDFDHFSFGFF").attr('value',1);
				else
					$("#dfgqwerthgf__FSDFDHFSFGFF").attr('value',2);
			}
			
            if (parent.className == "t-start-btn dont_touch" )
            {
				ball_numb = $("#dfgqwerthgf__FSDFDHFSFGFF").attr('value');
				
				if(ball_numb == 1)
				{
					setTimeout(function () 
					{
						$(".xThimbles_thimble").each(function (index, el)
						{
							$(el).css("visibility","hidden");
						});
						
						var class_get = $('#id_xThimbles_game').children().first().attr("class");
					
						$("#id_xThimbles_game").prepend('<div id="xThimbles_ball1" class="'+class_get+'"></div>');
						
						setTimeout(function () 
						{
							makeid();
						}, getRandomInRange(1500,3500)); 
						
					}, 1800);
				}
				else
				{
					setTimeout(function () 
					{
						$(".xThimbles_thimble").each(function (index, el)
						{
							$(el).css("visibility","hidden");
						});
						
						var class_get = $('#id_xThimbles_game').children().first().attr("class");
					
						$("#id_xThimbles_game").prepend('<div id="xThimbles_ball1" class="'+class_get+'"></div>');
						
						$("#id_xThimbles_game").prepend('<div id="xThimbles_ball2" class="'+class_get+'"></div>');
	
						setTimeout(function () 
						{
							makeid1();
						}, getRandomInRange(1500,3500)); 
						
					}, 1800);
				}
            }
			
			if (parent.className == "hover")
            {
				if ($("#id_xThimbles_game").attr("class") == "xThimbles_game")
				{
					$("#xThimbles_ball").remove();
					
					$("#xThimbles_ball1").remove();
					$("#xThimbles_ball2").remove();
				}
            }
        }
    };
}

function getRandomInRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeid() 
{
	if ($("#id_xThimbles_game").attr("class") == "xThimbles_game")
	{
		var rand_index = getRandomInRange(0,2);
		$("#xThimbles_ball").attr('class','xThimbles_ball js_ball_position_'+rand_index1);
		
		glob_row = rand_index;
		
		setTimeout(function () 
		{
			makeid();
		}, getRandomInRange(100,1500));
	}
	else
	{
		$(".xThimbles_thimble").each(function (index, el)
		{
			$(el).css("opacity",".3");
		});
		
		$("#id_dop_str_title_123").text("Выберите напёрсток "+glob_row1);
	}
}

function makeid1() 
{
	if ($("#id_xThimbles_game").attr("class") == "xThimbles_game")
	{
		var rand_index1 = getRandomInRange(0,2);
		$("#xThimbles_ball1").attr('class','xThimbles_ball js_ball_position_'+rand_index1);
		
		var rand_index2 = getRandomInRange(0,2);
		
		while(rand_index2 == rand_index1)
		{
			rand_index2 = getRandomInRange(0,2);
		}
		
		$("#xThimbles_ball2").attr('class','xThimbles_ball js_ball_position_'+rand_index2);
		
		glob_row1 = rand_index1;
		glob_row2 = rand_index2;
		
		setTimeout(function ()
		{
			makeid1();
		}, getRandomInRange(100,1500));
	}
	else
	{
		$(".xThimbles_thimble").each(function (index, el)
		{
			$(el).css("opacity",".3");
		});
		
		var html_0 = $("#id_dop_str_title").html();
		$("#id_dop_str_title").html(html_0+"<div style=\"color:white\">Выберите наперсток <strong style=\"color:white\">"+glob_row2+"</strong></div>");
	}
}