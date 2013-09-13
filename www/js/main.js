var homeAnimationTime = 700;
var homeScroll, contentScroll;


/*function updatePosition () {
	console.log(this.x);
	var scrollLeft = -this.x;
	var per = 100 - scrollLeft/2056*100;
	$('#homeView').css('background-position-x', per+'%');
}*/

function loaded () {
	homeScroll = new IScroll('#homeScroll', {
		scrollX: true, 
		scrollY: false,
		mouseWheel: true,
		indicators: [{
			el: document.getElementById('background'),
			resize: false,
			ignoreBoundaries: true,
			speedRatioY: 0.5
		}]
	});
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);


function loadCurriculum(programInfo, programName, side){
	var postData = programInfo;
	var programName = programName;
	var side = side;
	$.ajax({
		type: "POST",
		url: "http://wentin.co/parsons-web/curriculum.php",
		data: postData, 
		datatype: "html",
		success: function(data, textStatus, xhr){
			$('#'+programName+' .'+side+' .curriculumWrapper').html(data);
		},
		// Alert status code and error if fail
		error: function (xhr, ajaxOptions, thrownError){
			alert(xhr.status);
			alert(thrownError);
		}
	});    	
}

function loadIntroduction(programInfo, programName){
	var postData = programInfo;
	var programName = programName;
	$.ajax({
		type: "POST",
		url: "http://wentin.co/parsons-web/introduction.php",
		data: postData, 
		datatype: "html",
		success: function(data, textStatus, xhr){
			$('#'+programName+' #introduction .scroll').html(data);
		},
		// Alert status code and error if fail
		error: function (xhr, ajaxOptions, thrownError){
			alert(xhr.status);
			alert(thrownError);
		}
	});    	
}

$(function(){
	
	loaded();
	
    loadIntroduction({
        "program" : 'aas-graphic-design-programs',
    }, "graphicDesignAAS");
    loadCurriculum({
        "program" : 'aas-graphic-design-curriculum',
    }, "graphicDesignAAS","left");
    loadCurriculum({
        "program" : 'aas-graphic-design-curriculum',
    }, "graphicDesignAAS","right");


	
    loadIntroduction({
        "program" : 'bfa-communication-design',
    }, "communicationDesignBFA");
    loadCurriculum({
        "program" : 'bfa-communication-design-curriculum',
    }, "communicationDesignBFA","left");
    loadCurriculum({
        "program" : 'bfa-communication-design-curriculum',
    }, "communicationDesignBFA","right");



	
    loadIntroduction({
        "program" : 'bfa-design-technology',
    }, "designAndTechnologyBFA");
    loadCurriculum({
        "program" : 'bfa-design-technology-curriculum',
    }, "designAndTechnologyBFA","left");
    loadCurriculum({
        "program" : 'bfa-design-technology-curriculum',
    }, "designAndTechnologyBFA","right");



	
    loadIntroduction({
        "program" : 'mfa-design-technology',
    }, "designAndTechnologyMFA");
    loadCurriculum({
        "program" : 'mfa-design-technology-curriculum',
    }, "designAndTechnologyMFA","left");
    loadCurriculum({
        "program" : 'mfa-design-technology-curriculum',
    }, "designAndTechnologyMFA","right");



	
    loadIntroduction({
        "program" : 'mfa-fine-arts',
    }, "fineArtsBFA");
    loadCurriculum({
        "program" : 'bfa-fine-arts-curriculum',
    }, "fineArtsBFA","left");
    loadCurriculum({
        "program" : 'mfa-fine-arts-curriculum',
    }, "fineArtsBFA","right");



	
    loadIntroduction({
        "program" : 'bfa-fine-arts',
    }, "fineArtsBFA");
    loadCurriculum({
        "program" : 'bfa-fine-arts-curriculum',
    }, "fineArtsBFA","left");
    loadCurriculum({
        "program" : 'mfa-fine-arts-curriculum',
    }, "fineArtsBFA","right");



	
    loadIntroduction({
        "program" : 'mfa-fine-arts',
    }, "fineArtMFA");
    loadCurriculum({
        "program" : 'mfa-fine-arts-curriculum',
    }, "fineArtMFA","left");
    loadCurriculum({
        "program" : 'mfa-fine-arts-curriculum',
    }, "fineArtMFA","right");



	
    loadIntroduction({
        "program" : 'bfa-illustration',
    }, "illustrationBFA");
    loadCurriculum({
        "program" : 'bfa-illustration-curriculum',
    }, "illustrationBFA","left");
    loadCurriculum({
        "program" : 'bfa-illustration-curriculum',
    }, "illustrationBFA","right");



	
    loadIntroduction({
        "program" : 'bfa-photography',
    }, "photographyBFA");
    loadCurriculum({
        "program" : 'bfa-photography-curriculum',
    }, "photographyBFA","left");
    loadCurriculum({
        "program" : 'bfa-photography-curriculum',
    }, "photographyBFA","right");



	
     loadIntroduction({
        "program" : 'mfa-photography',
    }, "photographyMFA");
    loadCurriculum({
        "program" : 'mfa-photography-curriculum',
    }, "photographyMFA","left");
    loadCurriculum({
        "program" : 'mfa-photography-curriculum',
    }, "photographyMFA","right");


	
    loadIntroduction({
        "program" : 'ma-design-studies-research',
    }, "designStudiesMA");
    loadCurriculum({
        "program" : 'ma-design-studies-research-curriculum',
    }, "designStudiesMA","left");



	
     loadIntroduction({
        "program" : 'ma-fashion-studies',
    }, "fashionStudiesMA");
    loadCurriculum({
        "program" : 'ma-fashion-studies-curriculum',
    }, "fashionStudiesMA","left");


	
     loadIntroduction({
        "program" : 'ma-history-decorative-arts-design',
    }, "historyofDecorativeArtsandDesignMA");
    loadCurriculum({
        "program" : 'ma-history-decorative-arts-design-curriculum',
    }, "historyofDecorativeArtsandDesignMA","left");



	/*$('#homeView').scroll(function() {
		console.log($('#homeView').scrollLeft());
		var scrollLeft = $('#homeView').scrollLeft();
		var per = 100 - scrollLeft/2056*100;
		$('#homeView').css('background-position-x', per+'%');
	}); */
	
	
	$('table a').live('tap', function(e) {
			
		e.stopPropagation();
		e.preventDefault();
		var href = $(this).attr('href');
		var courseUrl = {
			"url" : href,
		};
		$.ajax({
			type: "POST",
			url: "http://wentin.co/parsons-web/course.php",
			data: courseUrl, 
			datatype: "html",
			success: function(data, textStatus, xhr){
				$('.right .curriculumWrapper').html(data);
			},
			// Alert status code and error if fail
			error: function (xhr, ajaxOptions, thrownError){
				alert(xhr.status);
				alert(thrownError);
			}
		});
	} )
	
	$('.homeTile').on( "tap", function( event ) {
		/*$('.homeTile').animate({
		opacity : 0.1,
		height  : 900, // You desired height.
		width   : 900
		});	*/
		//$('.homeTile').effect("scale",{ percent: 300 }, 1000);
		var targetViewId = $(this).attr('id')+'View';
		secondViewEnter('#'+targetViewId);
	} )


	$('.mainMenu').live('click', function(){
		secondViewExit();
	});
	
	$('.secondMenu li a').live('click', function(){
		var href = $(this).attr('href');
		$(this).parents('.rightCol').children('.scrollWrapper'+href).addClass('active').siblings().removeClass('active');
	});

	$('.menu li').live('click', function(){
		var targetId = $(this).attr('id');
		$(this).parents('.leftCol').siblings('.rightCol#'+targetId).addClass('active').siblings('.rightCol').removeClass('active');
	});
})

function secondViewEnter(program) {
	var program = program;
	var i=1;
	
	$('ul.menu li').css('left', '-270px');
	var $thisRightCol = $(program).find('.rightCol');
	//$thisRightCol.css('left', '724px');
	
	var $thisMainMenu = $(program).find('.mainMenu');
	$thisMainMenu.css('top', '-50px');
	
	var $thisSschoolName = $(program).find('.schoolName');
	$thisSschoolName.css('left', '-270px');
	
	$('.homeTile').removeClass('homeTileNormal');
	$('.homeTile').addClass('homeTileLarge');
	$('.logo').animate({
		left: -250	
	}, homeAnimationTime, 'easeInOutQuad');
	window.setTimeout(  
		function() {  
			$('.wrapper').removeClass('active');
			$(program).addClass('active');
			
			contentScrollcontentScroll = new IScroll('.scrollWrapper', { mouseWheel: true });
			/*$thisRightCol.animate({
				left: 0	
			}, 700, 'easeInOutQuad', function(){
				contentScroll = new IScroll('.scrollWrapper', { mouseWheel: true });
				});*/
				
			$thisMainMenu.delay(400).animate({
				top: 0	
			}, 300, 'easeInOutQuad');
			
			$thisSschoolName.animate({
				left: 0	
			}, 500, 'easeInOutQuad');
			
			$(program).find('li').each(function(){
				$(this).delay(100*i).animate({
					left: 0	
				}, 500, 'easeInOutQuad');
				i++
			})
		},  
		homeAnimationTime
	);
	
	
	
}


function secondViewExit() {
	$('.wrapper').removeClass('active');
	$('#homeView').addClass('active');
	
	$('.logo').css('left', '-250px');
	window.setTimeout(  
		function() {  
			$('.logo').animate({
				left: 70	
			}, homeAnimationTime, 'easeInOutQuad');
			$('.homeTile').removeClass('homeTileLarge');
			$('.homeTile').addClass('homeTileNormal');
			window.setTimeout(  
				function() {  
				//$('.homeTile').removeClass('homeTileNormal').removeClass('homeTileLarge');
				},  
				homeAnimationTime
			);
		
		},  
		20
	);
	
}