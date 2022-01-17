
const home = document.querySelector('.home a');
const search = document.querySelector('.search a');
const library = document.querySelector('.library a');

const homeSvg = document.querySelectorAll('.home a svg');
const searchSvg = document.querySelectorAll('.search a svg');
const librarySvg = document.querySelectorAll('.search a svg');



const hanndleToggleClass = (item, session)=>{
	switch(session){
		case 'home':
			if(item.classList.value !== 'itemOn'){
				item.classList.add('itemOn');
				search.classList.remove('itemOn');
				library.classList.remove('itemOn');

				homeSvg[0].classList.remove('on');
				homeSvg[0].classList.add('off');

				homeSvg[0].classList.remove('off');
				homeSvg[1].classList.add('on');
			}
			break;

			case 'search':
			if(item.classList.value !== 'itemOn'){
				item.classList.add('itemOn');
				home.classList.remove('itemOn');
				library.classList.remove('itemOn');

				searchSvg[0].classList.remove('on');
				searchSvg[0].classList.add('off');

				searchSvg[1].classList.remove('off');
				searchSvg[1].classList.add('on');
			}
			break;

			case 'library':
			if(item.classList.value !== 'itemOn'){
				item.classList.add('itemOn');
				home.classList.remove('itemOn');
				search.classList.remove('itemOn');

				librarySvg[0].classList.remove('on');
				librarySvg[0].classList.add('off');

				librarySvg[0].classList.remove('off');
				librarySvg[1].classList.add('on');
			}
			break;
	}
}