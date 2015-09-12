/*-------------------------------------
| navigation
-------------------------------------*/
function window_scroll() {
	/*-------------------------------------
	| Pinned
	-------------------------------------*/
	var howFar = $(window).scrollTop();

	// console.log(howFar);

	if (howFar >= 220)
	{
		$('body').addClass('pinned');
	}
	else
	{
		$('body').removeClass('pinned');
	}

	/*-------------------------------------
	| chosen
	-------------------------------------*/

	// console.log($('#sect2').offset());

	// console.log($('#sect2').offset().top);
	// console.log(howFar);


	var sect2_top = $('#sect2').offset().top - 70;
	var sect3_top = $('#sect3').offset().top - 70;
	var sect4_top = $('#sect4').offset().top - 70;
	var sect5_top = $('#sect5').offset().top - 70;

	// remove class of chosen from all - blanket removal
	$('nav a').removeClass('chosen');
	
	// add class of chosen based on how far user has scrolled
	if (howFar < sect2_top)
	{
		$('nav a:eq(0)').addClass('chosen');
	}
	else if (howFar >= sect2_top && howFar < sect3_top)
	{
		$('nav a:eq(1)').addClass('chosen');
	}
	else if (howFar >= sect3_top && howFar < sect4_top)
	{
		$('nav a:eq(2)').addClass('chosen');
	}
	else if (howFar >= sect4_top && howFar < sect5_top)
	{
		$('nav a:eq(3)').addClass('chosen');
	}
	else if (howFar >= sect5_top)
	{
		$('nav a:eq(4)').addClass('chosen');
	}



} /*here ends window_scroll function*/

$(window).scroll(window_scroll);
// $(window).resize(window_scroll);


/*-------------------------------------
| Nav Link Click Animate Scroll
-------------------------------------*/
function navLink_click(event) {
	// kill default behavior - thanks we will take it from here.
	event.preventDefault();

	// figure out which section
	var whichSect = $(this).attr('href');

	// how far is the section from the top? Distance to scroll.

	if (!$('body').hasClass('pinned'))
	{
		var myOffset = $('nav').height() + 30;
	}
	else
	{
		var myOffset = 70;
	}

	var distance = $(whichSect).offset().top - myOffset;

	// animate document
	$('html, body').animate({'scrollTop':distance}, 500);
}


$('nav a').click(navLink_click);

/*-------------------------------------
| Hamburger Menu
-------------------------------------*/
var hamburger_state = 'mobile';
var nav_state = 'closed';

function manage_hamburger() {

	var winWidth = $(window).width();

	nav_state = 'closed';

	// console.log(winWidth);

	if (winWidth < 685)
	{
		hamburger_state = 'mobile';
		$('nav a').css({'display':'none'});

	}
	else
	{
		hamburger_state = 'desktop';
		$('nav a').css({'display':'inline-block'});
	}

	// console.log(hamburger_state);

}

manage_hamburger(); //this will happen when it first loads
$(window).resize(manage_hamburger); //this will happen every time they resize the window.


function hamburger_click() {
	if (hamburger_state == 'mobile')
	{
		if (nav_state == 'closed')
		{
			nav_state = 'open';
			$('nav a').css({'display':'block'});
		}
		else
		{
			nav_state = 'closed';
			$('nav a').css({'display':'none'});
		}
	}
}

$('nav').click(hamburger_click);


/*-------------------------------------
| class switching
-------------------------------------*/
function my_box_class() {
	var winWidth = $(window).width();

	if (winWidth > 600 && winWidth <= 800)
	{
		$('.myBox').addClass('one');
		$('.myBox').removeClass('two');
		$('.myBox').removeClass('three');
	}
	else if (winWidth > 800 && winWidth <= 1000)
	{
		$('.myBox').addClass('two');
		$('.myBox').removeClass('three');
	}
	else if (winWidth > 1000)
	{
		$('.myBox').addClass('three');
	}
	else
	{
		$('.myBox').removeClass('one');
		$('.myBox').removeClass('two');
		$('.myBox').removeClass('three');
	}

}

my_box_class(); //when page loads
$(window).resize(my_box_class); //whenever resized

















































