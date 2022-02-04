
const home = document.querySelector('.home a');
const search = document.querySelector('.search a');
const library = document.querySelector('.library a');

const homeSvg = document.querySelectorAll('.home a svg');
const searchSvg = document.querySelectorAll('.search a svg');
const librarySvg = document.querySelectorAll('.library a svg');


const hanndleToggleClass = (item, session)=>{
	switch(session){
		case 'home':
			if(item.classList.value !== 'itemOn'){
				item.classList.add('itemOn');
				search.classList.remove('itemOn');
				library.classList.remove('itemOn');

				if(homeSvg[0].classList.value === 'on'){
					homeSvg[1].classList.add('on')
					homeSvg[1].classList.remove('off')

					homeSvg[0].classList.remove('on')
					homeSvg[0].classList.add('off')
				}
				if(searchSvg[1].classList.value === "on"){
					searchSvg[0].classList.add('on')
					searchSvg[0].classList.remove('off')

					searchSvg[1].classList.add('off')
					searchSvg[1].classList.remove('on')
				}
				if(librarySvg[1].classList.value === "on"){
					librarySvg[0].classList.add('on')
					librarySvg[0].classList.remove('off')

					librarySvg[1].classList.add('off')
					librarySvg[1].classList.remove('on')
				}	
			}
			break;

			case 'search':
			if(item.classList.value !== 'itemOn'){
				item.classList.add('itemOn');
				home.classList.remove('itemOn');
				library.classList.remove('itemOn');

				if(searchSvg[0].classList.value === 'on'){
					searchSvg[1].classList.add('on')
					searchSvg[1].classList.remove('off')

					searchSvg[0].classList.remove('on')
					searchSvg[0].classList.add('off')
				}

				if(homeSvg[1].classList.value === "on"){
					homeSvg[1].classList.remove('on')
					homeSvg[1].classList.add('off')

					homeSvg[0].classList.add('on')
					homeSvg[0].classList.remove('off')

				}
				if(librarySvg[1].classList.value === "on"){
					librarySvg[1].classList.remove('on')
					librarySvg[1].classList.add('off')

					librarySvg[0].classList.add('on')
					librarySvg[0].classList.remove('off')
				}
			}
			break;

			case 'library':
			if(item.classList.value !== 'itemOn'){
				item.classList.add('itemOn');
				home.classList.remove('itemOn');
				search.classList.remove('itemOn');

				if(librarySvg[0].classList.value === 'on'){
					librarySvg[1].classList.add('on')
					librarySvg[1].classList.remove('off')

					librarySvg[0].classList.remove('on')
					librarySvg[0].classList.add('off')
				}
				if(searchSvg[1].classList.value === 'on'){
					searchSvg[1].classList.add('on')
					searchSvg[1].classList.remove('off')

					searchSvg[0].classList.remove('on')
					searchSvg[0].classList.add('off')
				}

				if(homeSvg[1].classList.value === "on"){
					homeSvg[1].classList.remove('on')
					homeSvg[1].classList.add('off')

					homeSvg[0].classList.add('on')
					homeSvg[0].classList.remove('off')

				}

			}
			break;
	}
}