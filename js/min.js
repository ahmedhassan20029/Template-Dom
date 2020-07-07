/*global document, window*/

/* 
    Template Name: Template Dom
    Version: 0.0.1
    Tool  Use / create  Web Site: Dom js
    Design By : Ahmed Hassan
    Email: ahmedhassan20029@gmail.com
    Date Work: 1/7/2020 to 6/7/2020
*/

// incloud file style.css and create attribute to tag style
document.getElementsByTagName('html')[0].firstChild.appendChild(document.createElement('link'));
document.getElementsByTagName('head')[0].children[2].setAttribute('rel', 'stylesheet');
document.getElementsByTagName('head')[0].children[2].setAttribute('href', '../css/style.css');

// create tag style
document.getElementsByTagName('html')[0].firstChild.appendChild(document.createElement('style'));

// create at attribute to tag style
document.getElementsByTagName('style')[0].textContent =
    '* {box-sizing: border-box} @font-face {font-family: Raleway-Regular; src: url(../font/Raleway-Regular.ttf);} .container{width: 80%; margin: 0 auto;} #ul-x li:hover a {color: #00a8f9!important;} .active-x{color: #00a8f9!important;} .scrollTop:hover{bottom: 35px!important}';
// body
document.body.setAttribute('id', 'body-x');

// body nav
document.body.insertBefore(document.createElement('nav'), document.body.childNodes[0]);
document.body.childNodes[0].setAttribute('id', 'nav-ux');

// body  container
document.getElementById('nav-ux').append(document.createElement('div'));
document.getElementById('nav-ux').childNodes[0].setAttribute('class', 'container');

// body nav brand
document.querySelector('#nav-ux div').append(document.createElement('p'));
document.querySelector('#nav-ux div p').textContent = 'template';
document.querySelector('#nav-ux div p').append(document.createElement('span'));
document.querySelector('#nav-ux div p').children[0].textContent = ' dom';

// body nav ul
document.querySelector('#nav-ux div').append(document.createElement('ul'));
document.querySelector('#nav-ux div ul').setAttribute('id', 'ul-x');

// body nav ul li
document.getElementById('ul-x').append(document.createElement('li'));
document.getElementById('ul-x').append(document.createElement('li'));
document.getElementById('ul-x').append(document.createElement('li'));
document.getElementById('ul-x').append(document.createElement('li'));

// body nav ul li:nth-child(1)
document.querySelector('#ul-x li:nth-child(1)').append(document.createElement('a'));
document.querySelector('#ul-x li:nth-child(1) a').setAttribute('href', '#');
document.querySelector('#ul-x li:nth-child(1) a').textContent = 'home';

// body nav ul li:nth-child(2)
document.querySelector('#ul-x li:nth-child(2)').append(document.createElement('a'));
document.querySelector('#ul-x li:nth-child(2) a').setAttribute('href', '#');
document.querySelector('#ul-x li:nth-child(2) a').textContent = 'team';

// body nav ul li:nth-child(3)
document.querySelector('#ul-x li:nth-child(3)').append(document.createElement('a'));
document.querySelector('#ul-x li:nth-child(3) a').setAttribute('href', '#');
document.querySelector('#ul-x li:nth-child(3) a').textContent = 'about';

// body nav ul li:nth-child(4)
document.querySelector('#ul-x li:nth-child(4)').append(document.createElement('a'));
document.querySelector('#ul-x li:nth-child(4) a').setAttribute('href', '#');
document.querySelector('#ul-x li:nth-child(4) a').textContent = 'contact';

// start section header--------------------------------------------------------
document.getElementById('body-x').insertBefore(document.createElement('header'), document.getElementById('body-x').children[1]);
// body > header > div
document.querySelector('header').append(document.createElement('div'));
// body > header > div > h2
document.querySelector('header div').append(document.createElement('h2'));
document.querySelector('header div h2').textContent = 'welcome to template by';
// body > header > div > h2 > span
document.querySelector('header div h2').append(document.createElement('span'));
document.querySelector('header div h2 span').textContent = ' dom';

// start section team--------------------------------------------------------
document.body.insertBefore(document.createElement('div'), document.body.children[2]);
document.querySelector('#body-x').children[2].setAttribute('class', 'team');
// body > team > div
document.querySelector('.team').append(document.createElement('div'));
document.querySelector('.team div').setAttribute('class', 'container team-list');

// team-list > div 1
document.querySelector('.team .team-list').append(document.createElement('div'));
document.querySelector('.team-list div:nth-of-type(1)').appendChild(document.createElement('img'));
document.querySelector('.team-list div:nth-of-type(1) img').setAttribute('src', '../img/Warstwab.png');
document.querySelector('.team-list div:nth-of-type(1)').appendChild(document.createElement('h2'));
document.querySelector('.team-list div:nth-of-type(1) h2').textContent = 'Harvey Rube';

// team-list > div 1 > a 1
document.querySelector('.team-list div:nth-of-type(1)').appendChild(document.createElement('a'));
document.querySelector('.team-list div:nth-of-type(1) :nth-child(3)').setAttribute('href', '#');
document.querySelector('.team-list div:nth-of-type(1) :nth-child(3)').textContent = 'f';

// team-list > div 1 > a 2
document.querySelector('.team-list div:nth-of-type(1)').appendChild(document.createElement('a'));
document.querySelector('.team-list div:nth-of-type(1) :nth-child(4)').setAttribute('href', '#');
document.querySelector('.team-list div:nth-of-type(1) :nth-child(4)').textContent = 'T';

// team-list > div 1 > a 3
document.querySelector('.team-list div:nth-of-type(1)').appendChild(document.createElement('a'));
document.querySelector('.team-list div:nth-of-type(1) :nth-child(5)').setAttribute('href', '#');
document.querySelector('.team-list div:nth-of-type(1) :nth-child(5)').textContent = 'G+';

// team-list > div 1 > p 1
document.querySelector('.team-list div:nth-of-type(1)').appendChild(document.createElement('p'));
document.querySelector('.team-list div:nth-of-type(1) p').textContent = 'Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur Aut Odit Aut';

// team-list > div 2
document.querySelector('.team .team-list').append(document.createElement('div'));
document.querySelector('.team-list div:nth-child(2)').appendChild(document.createElement('img'));
document.querySelector('.team-list div:nth-child(2) img').setAttribute('src', '../img/Warstwac.png');
document.querySelector('.team-list div:nth-child(2)').appendChild(document.createElement('h2'));
document.querySelector('.team-list div:nth-child(2) h2').textContent = 'Janet Pris';

// team-list > div 1 > a 1
document.querySelector('.team-list div:nth-child(2)').appendChild(document.createElement('a'));
document.querySelector('.team-list div:nth-child(2) :nth-child(3)').setAttribute('href', '#');
document.querySelector('.team-list div:nth-child(2) :nth-child(3)').textContent = 'f';

// team-list > div 1 > a 2
document.querySelector('.team-list div:nth-child(2)').appendChild(document.createElement('a'));
document.querySelector('.team-list div:nth-child(2) :nth-child(4)').setAttribute('href', '#');
document.querySelector('.team-list div:nth-child(2) :nth-child(4)').textContent = 'T';

// team-list > div 1 > a 3
document.querySelector('.team-list div:nth-child(2)').appendChild(document.createElement('a'));
document.querySelector('.team-list div:nth-child(2) :nth-child(5)').setAttribute('href', '#');
document.querySelector('.team-list div:nth-child(2) :nth-child(5)').textContent = 'G+';

// team-list > div 1 > p 2
document.querySelector('.team-list div:nth-child(2)').appendChild(document.createElement('p'));
document.querySelector('.team-list div:nth-child(2) p').textContent = 'Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur Aut Odit Aut';

// team-list > div 3
document.querySelector('.team .team-list').append(document.createElement('div'));
document.querySelector('.team-list div:nth-child(3)').appendChild(document.createElement('img'));
document.querySelector('.team-list div:nth-child(3) img').setAttribute('src', '../img/Warstwad.png');
document.querySelector('.team-list div:nth-child(3)').appendChild(document.createElement('h2'));
document.querySelector('.team-list div:nth-child(3) h2').textContent = 'Kevin Ward';

// team-list > div 1 > a 1
document.querySelector('.team-list div:nth-child(3)').appendChild(document.createElement('a'));
document.querySelector('.team-list div:nth-child(3) :nth-child(3)').setAttribute('href', '#');
document.querySelector('.team-list div:nth-child(3) :nth-child(3)').textContent = 'f';

// team-list > div 1 > a 2
document.querySelector('.team-list div:nth-child(3)').appendChild(document.createElement('a'));
document.querySelector('.team-list div:nth-child(3) :nth-child(4)').setAttribute('href', '#');
document.querySelector('.team-list div:nth-child(3) :nth-child(4)').textContent = 'T';

// team-list > div 1 > a 3
document.querySelector('.team-list div:nth-child(3)').appendChild(document.createElement('a'));
document.querySelector('.team-list div:nth-child(3) :nth-child(5)').setAttribute('href', '#');
document.querySelector('.team-list div:nth-child(3) :nth-child(5)').textContent = 'G+';

// team-list > div 1 > p 3
document.querySelector('.team-list div:nth-child(3)').appendChild(document.createElement('p'));
document.querySelector('.team-list div:nth-child(3) p').textContent = 'Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur Aut Odit Aut';

// team-list > h2
document.querySelector('.team').insertBefore(document.createElement('h2'), document.querySelector('.team').children[0]);
document.querySelector('.team').children[0].textContent = 'our ';
document.querySelector('.team').children[0].append(document.createElement('span'));
document.querySelector('.team').children[0].firstElementChild.textContent = 'team';

// body > about ------------------------------------------------------------
document.body.insertBefore(document.createElement('div'), document.body.children[3]);

// body > div 4 > div.classname(about)
document.body.children[3].appendChild(document.createElement('div'));
document.body.children[3].firstChild.setAttribute('class', 'about');

// body > div 4 > div.classname(about) > div 1
document.getElementsByClassName('about')[0].appendChild(document.createElement('div'));
document.querySelector('.about div:nth-child(1)').append(document.createElement('img'));
document.querySelector('.about div:nth-child(1) img').setAttribute('src', '../img/Backgroundte.jpg');

// body > div 4 > div.classname(about) > div 2
document.getElementsByClassName('about')[0].appendChild(document.createElement('div'));
document.querySelector('.about div:nth-child(2)').append(document.createElement('h2'));
document.querySelector('.about div:nth-child(2) h2').textContent = 'about';
document.querySelector('.about div:nth-child(2)').append(document.createElement('p'));
document.querySelector('.about div:nth-child(2) p').textContent = 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua';
document.querySelector('.about div:nth-child(2)').append(document.createElement('p'));
document.querySelector('.about div:nth-child(2) p:nth-of-type(2)').textContent = 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua';

// body > footer ------------------------------------------------------------
document.body.insertBefore(document.createElement('footer'), document.body.children[4]);

// body > footer > div.className(contact)
document.querySelector('footer').appendChild(document.createElement('div'));
document.querySelector('footer div').setAttribute('class', 'contact');

// body > footer > div.className(contact) > h2
document.querySelector('.contact').append(document.createElement('h2'));
document.querySelector('footer div h2').setAttribute('class', 'container');
document.querySelector('.contact h2').textContent = 'contact';
document.querySelector('.contact h2').appendChild(document.createElement('span'));
document.querySelector('.contact h2 span').textContent = ' us';

// body > footer > div.className(contact) > form
document.getElementsByClassName('contact')[0].append(document.createElement('form'));
document.querySelector('footer div form').setAttribute('class', 'container');

// body > footer > div.className(contact) > form > input 1
document.forms[0].append(document.createElement('input'));
document.forms[0].firstChild.setAttribute('type', 'email');
document.forms[0].firstChild.setAttribute('placeholder', 'Your Email');

// body > footer > div.className(contact) > form > input 2
document.forms[0].append(document.createElement('input'));
document.forms[0].children[1].setAttribute('type', 'text');
document.forms[0].children[1].setAttribute('placeholder', 'Subject');

// body > footer > div.className(contact) > form > label 1
document.forms[0].append(document.createElement('label'));

// body > footer > div.className(contact) > form > input 3
document.forms[0].append(document.createElement('input'));
document.forms[0].children[3].setAttribute('type', 'text');
document.forms[0].children[3].setAttribute('placeholder', 'Your Message');

// body > footer > div.className(contact) > form > label 2
document.forms[0].append(document.createElement('label'));

// body > footer > div.className(contact) > form > input 4
document.forms[0].append(document.createElement('input'));
document.forms[0].children[5].setAttribute('type', 'submit');
document.forms[0].children[5].setAttribute('value', 'Send Message');

// body >  copyright------------------------------------------------------------
document.body.insertBefore(document.createElement('div'), document.body.children[5]);
document.body.children[5].setAttribute('class', 'copyright');

// body > copyright div
document.querySelector('.copyright').append(document.createElement('div'));
document.querySelector('.copyright div').setAttribute('class', 'container');

// body >  copyright div p 1
document.querySelector('.copyright div').append(document.createElement('p'));
document.querySelector('.copyright div p').textContent = '© 2020 copyright design template';
document.querySelector('.copyright div p:nth-of-type(1)').append(document.createElement('span'));
document.querySelector('.copyright div p:nth-of-type(1) span').textContent = ' dom';

// body >  copyright div p 2
document.querySelector('.copyright div').append(document.createElement('p'));
document.querySelector('.copyright div p:nth-child(2)').textContent = 'design by';
document.querySelector('.copyright div p:nth-of-type(2)').append(document.createElement('span'));
document.querySelector('.copyright div p:nth-of-type(2) span').textContent = 'ahmed hassan';

// scroll top
document.body.insertBefore(document.createElement('div'), document.body.children[6]);
document.body.children[6].setAttribute('class', 'scrollTop');
document.querySelector('.scrollTop').textContent = 'top';

document.querySelector('.scrollTop').style.position = 'fixed';
document.querySelector('.scrollTop').style.right = '25px';
document.querySelector('.scrollTop').style.color = '#fff';
document.querySelector('.scrollTop').style.bottom = '25px';
document.querySelector('.scrollTop').style.border = '2px solid #00a8f9';
document.querySelector('.scrollTop').style.borderRadius = '50%';
document.querySelector('.scrollTop').style.padding = '18px 14px';
document.querySelector('.scrollTop').style.background = '#00a8f9';
document.querySelector('.scrollTop').style.fontWeight = 'bold';
document.querySelector('.scrollTop').style.fontSize = '18px';
document.querySelector('.scrollTop').style.cursor = 'pointer';
document.querySelector('.scrollTop').style.display = 'none';

window.onscroll = function () {
    'use strict';
    if (document.scrollingElement.scrollTop >= 100) {
        document.querySelector('.scrollTop').style.display = 'block';
    } else {
        document.querySelector('.scrollTop').style.display = 'none';
    }
    document.querySelector('.scrollTop').onclick = function () {
        document.scrollingElement.scrollTop = 0;
    };
};

// ------------------------------------------------- END DOCUMENT HTML -------------------------------------------------------------

//style css>>>>>>>>>>>>CSS>>>>>>>>>>>>>>>CSS>>>>>>>>>>>>>>>CSS>>>>>>>>>>>>>>>>>>>>>>>>>
// body
document.getElementById('body-x').style.margin = '0px';
document.getElementById('body-x').style.textTransform = 'capitalize';
document.getElementById('body-x').style.fontFamily = 'Raleway-Regular';

// body nav
document.getElementById('nav-ux').style.background = '#333';
document.getElementById('nav-ux').style.color = '#fff';

// body nav > div
document.querySelector('#nav-ux > div').style.display = 'flex';

// body nav > div > p
document.querySelector('#nav-ux > div p').style.fontSize = '2rem';
document.querySelector('#nav-ux > div p').style.padding = '10px 0 10px 5px';
document.querySelector('#nav-ux > div p').style.flex = '1';
document.querySelector('#nav-ux > div p').style.margin = '0px';
document.querySelector('#nav-ux > div p span').style.color = '#00a8f9';

// body nav > div > ul 
document.getElementById('ul-x').style.margin = '0px';
document.getElementById('ul-x').style.listStyle = 'none';
document.getElementById('ul-x').style.display = 'flex';

// body nav > div > ul  > li
document.getElementById('ul-x').childNodes[0].style.padding = '10px';
document.getElementById('ul-x').childNodes[1].style.padding = '10px';
document.getElementById('ul-x').childNodes[2].style.padding = '10px';
document.getElementById('ul-x').childNodes[3].style.padding = '10px';

// body nav > div > ul  > li 1 > a
document.querySelector('#ul-x li:nth-child(1) a').style.color = '#fff';
document.querySelector('#ul-x li:nth-child(1) a').style.textDecoration = 'none';
document.querySelector('#ul-x li:nth-child(1) a').classList.add('active-x');

// body nav > div > ul  > li 2 > a
document.querySelector('#ul-x li:nth-child(2) a').style.color = '#fff';
document.querySelector('#ul-x li:nth-child(2) a').style.textDecoration = 'none';

// body nav > div > ul  > li 3 > a
document.querySelector('#ul-x li:nth-child(3) a').style.color = '#fff';
document.querySelector('#ul-x li:nth-child(3) a').style.textDecoration = 'none';

// body nav > div > ul  > li 4 > a
document.querySelector('#ul-x li:nth-child(4) a').style.color = '#fff';
document.querySelector('#ul-x li:nth-child(4) a').style.color = '#fff';
document.querySelector('#ul-x li:nth-child(4) a').style.textDecoration = 'none';

// style body > header ------------------------------------------------------------
// style body > header
document.querySelector('header').style.backgroundImage = 'url(../img/Background6.png)';
document.querySelector('header').style.backgroundSize = 'cover';

// style body > header > div
document.querySelector('header div').style.height = '100%';
document.querySelector('header div').style.width = '100%';
document.querySelector('header div').style.background = 'rgba(10, 10, 11, 0.75)';
document.querySelector('header div').style.color = '#fff';
document.querySelector('header div').style.display = 'flex';
document.querySelector('header div').style.justifyContent = 'center';
document.querySelector('header div').style.alignItems = 'center';

// style body > header > div > h2
document.querySelector('header div h2').style.margin = '0';

// style body > header > div > h2 > span
document.querySelector('header div h2 span').style.color = '#00a8f9';

// style body > team ------------------------------------------------------------
document.querySelector('.team').style.marginTop = '10%';
document.querySelector('.team').style.background = '#eee';

// style body > team > h2
document.querySelector('.team').children[0].style.display = 'flex';
document.querySelector('.team').children[0].style.justifyContent = 'center';
document.querySelector('.team').children[0].style.padding = '2% 0';
document.querySelector('.team').children[0].style.fontSize = '2.5rem';

// style body > team > h2 > span
document.querySelector('.team').children[0].firstElementChild.style.color = '#00a8f9';

// style body > team > div.class(team-list)
document.querySelector('.team-list').style.textAlign = 'center';

// style body > team > div.class(team-list) > div 1, div2, div3
document.querySelector('.team-list div').style.marginBottom = '50px';
document.querySelector('.team-list div:nth-of-type(1)').style.flex = '1';
document.querySelector('.team-list div:nth-of-type(2)').style.flex = '1';
document.querySelector('.team-list div:nth-of-type(3)').style.flex = '1';

// body > team > team-list > div > a (style icone socilemedia div 1 > a1)
document.querySelector('.team-list div:nth-of-type(1) :nth-child(3)').style.textDecoration = 'none';
document.querySelector('.team-list div:nth-of-type(1) :nth-child(3)').style.color = '#fff';
document.querySelector('.team-list div:nth-of-type(1) :nth-child(3)').style.background = '#3b5998';
document.querySelector('.team-list div:nth-of-type(1) :nth-child(3)').style.border = '2px solid #3b5998';
document.querySelector('.team-list div:nth-of-type(1) :nth-child(3)').style.borderRadius = '50%';
document.querySelector('.team-list div:nth-of-type(1) :nth-child(3)').style.padding = '5px 15px';
document.querySelector('.team-list div:nth-of-type(1) :nth-child(3)').style.marginRight = '5px';
document.querySelector('.team-list div:nth-of-type(1) :nth-child(3)').style.fontSize = '30px';

// body > team > team-list > div > a (style icone socilemedia div 1 > a2)
document.querySelector('.team-list div:nth-of-type(1) :nth-child(4)').style.textDecoration = 'none';
document.querySelector('.team-list div:nth-of-type(1) :nth-child(4)').style.color = '#fff';
document.querySelector('.team-list div:nth-of-type(1) :nth-child(4)').style.background = '#1da1f2';
document.querySelector('.team-list div:nth-of-type(1) :nth-child(4)').style.border = '2px solid #1da1f2';
document.querySelector('.team-list div:nth-of-type(1) :nth-child(4)').style.borderRadius = '50%';
document.querySelector('.team-list div:nth-of-type(1) :nth-child(4)').style.padding = '4px 14px';
document.querySelector('.team-list div:nth-of-type(1) :nth-child(4)').style.marginRight = '5px';
document.querySelector('.team-list div:nth-of-type(1) :nth-child(4)').style.fontSize = '30px';

// body > team > team-list > div > a (style icone socilemedia div 1 > a3)
document.querySelector('.team-list div:nth-of-type(1) :nth-child(5)').style.textDecoration = 'none';
document.querySelector('.team-list div:nth-of-type(1) :nth-child(5)').style.color = '#fff';
document.querySelector('.team-list div:nth-of-type(1) :nth-child(5)').style.background = '#dd4b39';
document.querySelector('.team-list div:nth-of-type(1) :nth-child(5)').style.border = '2px solid #dd4b39';
document.querySelector('.team-list div:nth-of-type(1) :nth-child(5)').style.borderRadius = '50%';
document.querySelector('.team-list div:nth-of-type(1) :nth-child(5)').style.padding = '5px 9px';
document.querySelector('.team-list div:nth-of-type(1) :nth-child(5)').style.marginRight = '5px';
document.querySelector('.team-list div:nth-of-type(1) :nth-child(5)').style.fontSize = '30px';

// body > team > team-list > div > a (style icone socilemedia div 2 > a1)
document.querySelector('.team-list div:nth-child(2) :nth-child(3)').style.textDecoration = 'none';
document.querySelector('.team-list div:nth-child(2) :nth-child(3)').style.color = '#fff';
document.querySelector('.team-list div:nth-child(2) :nth-child(3)').style.background = '#3b5998';
document.querySelector('.team-list div:nth-child(2) :nth-child(3)').style.border = '2px solid #3b5998';
document.querySelector('.team-list div:nth-child(2) :nth-child(3)').style.borderRadius = '50%';
document.querySelector('.team-list div:nth-child(2) :nth-child(3)').style.padding = '5px 15px';
document.querySelector('.team-list div:nth-child(2) :nth-child(3)').style.marginRight = '5px';
document.querySelector('.team-list div:nth-child(2) :nth-child(3)').style.fontSize = '30px';

// body > team > team-list > div > a (style icone socilemedia div2 > a2)
document.querySelector('.team-list div:nth-child(2) :nth-child(4)').style.textDecoration = 'none';
document.querySelector('.team-list div:nth-child(2) :nth-child(4)').style.color = '#fff';
document.querySelector('.team-list div:nth-child(2) :nth-child(4)').style.background = '#1da1f2';
document.querySelector('.team-list div:nth-child(2) :nth-child(4)').style.border = '2px solid #1da1f2';
document.querySelector('.team-list div:nth-child(2) :nth-child(4)').style.borderRadius = '50%';
document.querySelector('.team-list div:nth-child(2) :nth-child(4)').style.padding = '4px 14px';
document.querySelector('.team-list div:nth-child(2) :nth-child(4)').style.marginRight = '5px';
document.querySelector('.team-list div:nth-child(2) :nth-child(4)').style.fontSize = '30px';

// body > team > team-list > div > a (style icone socilemedia div 2 > a3)
document.querySelector('.team-list div:nth-child(2) :nth-child(5)').style.textDecoration = 'none';
document.querySelector('.team-list div:nth-child(2) :nth-child(5)').style.color = '#fff';
document.querySelector('.team-list div:nth-child(2) :nth-child(5)').style.background = '#dd4b39';
document.querySelector('.team-list div:nth-child(2) :nth-child(5)').style.border = '2px solid #dd4b39';
document.querySelector('.team-list div:nth-child(2) :nth-child(5)').style.borderRadius = '50%';
document.querySelector('.team-list div:nth-child(2) :nth-child(5)').style.padding = '5px 9px';
document.querySelector('.team-list div:nth-child(2) :nth-child(5)').style.marginRight = '5px';
document.querySelector('.team-list div:nth-child(2) :nth-child(5)').style.fontSize = '30px';

// body > team > team-list > div > a (style icone socilemedia div 3 > a1)
document.querySelector('.team-list div:nth-child(3) :nth-child(3)').style.textDecoration = 'none';
document.querySelector('.team-list div:nth-child(3) :nth-child(3)').style.color = '#fff';
document.querySelector('.team-list div:nth-child(3) :nth-child(3)').style.background = '#3b5998';
document.querySelector('.team-list div:nth-child(3) :nth-child(3)').style.border = '2px solid #3b5998';
document.querySelector('.team-list div:nth-child(3) :nth-child(3)').style.borderRadius = '50%';
document.querySelector('.team-list div:nth-child(3) :nth-child(3)').style.padding = '5px 15px';
document.querySelector('.team-list div:nth-child(3) :nth-child(3)').style.marginRight = '5px';
document.querySelector('.team-list div:nth-child(3) :nth-child(3)').style.fontSize = '30px';

// body > team > team-list > div > a (style icone socilemedia div 3 > a2)
document.querySelector('.team-list div:nth-child(3) :nth-child(4)').style.textDecoration = 'none';
document.querySelector('.team-list div:nth-child(3) :nth-child(4)').style.color = '#fff';
document.querySelector('.team-list div:nth-child(3) :nth-child(4)').style.background = '#1da1f2';
document.querySelector('.team-list div:nth-child(3) :nth-child(4)').style.border = '2px solid #1da1f2';
document.querySelector('.team-list div:nth-child(3) :nth-child(4)').style.borderRadius = '50%';
document.querySelector('.team-list div:nth-child(3) :nth-child(4)').style.padding = '4px 14px';
document.querySelector('.team-list div:nth-child(3) :nth-child(4)').style.marginRight = '5px';
document.querySelector('.team-list div:nth-child(3) :nth-child(4)').style.fontSize = '30px';

// body > team > team-list > div > a (style icone socilemedia div 3 > a3)
document.querySelector('.team-list div:nth-child(3) :nth-child(5)').style.textDecoration = 'none';
document.querySelector('.team-list div:nth-child(3) :nth-child(5)').style.color = '#fff';
document.querySelector('.team-list div:nth-child(3) :nth-child(5)').style.background = '#dd4b39';
document.querySelector('.team-list div:nth-child(3) :nth-child(5)').style.border = '2px solid #dd4b39';
document.querySelector('.team-list div:nth-child(3) :nth-child(5)').style.borderRadius = '50%';
document.querySelector('.team-list div:nth-child(3) :nth-child(5)').style.padding = '5px 9px';
document.querySelector('.team-list div:nth-child(3) :nth-child(5)').style.marginRight = '5px';
document.querySelector('.team-list div:nth-child(3) :nth-child(5)').style.fontSize = '30px';

// body > team > team-list > div 1 > p
document.querySelector('.team-list div:nth-child(1) p').style.fontWeight = 'bold';
document.querySelector('.team-list div:nth-child(1) p').style.width = '80%';
document.querySelector('.team-list div:nth-child(1) p').style.margin = '25px auto';
document.querySelector('.team-list div:nth-child(1) p').style.color = '#3f3f40';

// body > team > team-list > div 2 > p
document.querySelector('.team-list div:nth-child(2) p').style.fontWeight = 'bold';
document.querySelector('.team-list div:nth-child(2) p').style.width = '80%';
document.querySelector('.team-list div:nth-child(2) p').style.margin = '25px auto';
document.querySelector('.team-list div:nth-child(2) p').style.color = '#3f3f40';

// body > team > team-list > div 3 > p
document.querySelector('.team-list div:nth-child(3) p').style.fontWeight = 'bold';
document.querySelector('.team-list div:nth-child(3) p').style.width = '80%';
document.querySelector('.team-list div:nth-child(3) p').style.margin = '25px auto';
document.querySelector('.team-list div:nth-child(3) p').style.color = '#3f3f40';

// style body > about ------------------------------------------------------------
document.getElementsByClassName('about')[0].style.marginTop = '10%';

// style body > about > div 1
document.querySelector('.about div:nth-child(1)').style.height = '500px';

// style body > about > div 1 > img
document.querySelector('.about div:nth-child(1) img').style.height = '100%';
document.querySelector('.about div:nth-child(1) img').style.width = '100%';

// style body > about > div 2
document.querySelector('.about div:nth-child(2)').style.background = '#eee';

// style body > about > div 2 > h2
document.querySelector('.about div:nth-child(2) h2').style.marginLeft = '20px';
document.querySelector('.about div:nth-child(2) h2').style.fontSize = '2.5rem';
document.querySelector('.about div:nth-child(2) h2').style.textAlign = 'center';

// style body > about > div 2 > p 1
document.querySelector('.about div:nth-child(2) p:nth-child(2)').style.marginLeft = '20px';
document.querySelector('.about div:nth-child(2) p:nth-child(2)').style.fontSize = '1.2rem';
document.querySelector('.about div:nth-child(2) p:nth-child(2)').style.lineHeight = '1.75rem';
document.querySelector('.about div:nth-child(2) p:nth-child(2)').style.textAlign = 'justify';

// style body > about > div 2 > p 2
document.querySelector('.about div:nth-child(2) p:nth-child(3)').style.marginLeft = '20px';
document.querySelector('.about div:nth-child(2) p:nth-child(3)').style.fontSize = '1.2rem';
document.querySelector('.about div:nth-child(2) p:nth-child(3)').style.lineHeight = '1.75rem';
document.querySelector('.about div:nth-child(2) p:nth-child(3)').style.textAlign = 'justify';

// style body > footer ------------------------------------------------------------
document.getElementsByTagName('footer')[0].style.backgroundImage = 'url(../img/footer.jpg)';
document.getElementsByTagName('footer')[0].style.backgroundSize = 'cover';
document.getElementsByTagName('footer')[0].style.marginTop = '10%';

// style body > footer > div.ClassName(contact)
document.querySelector('footer div').style.color = '#fff';
document.querySelector('footer div').style.background = 'rgba(32, 26, 24, 0.71)';

// style body > footer > div.ClassName(contact) > h2
document.querySelector('footer div h2').style.textAlign = 'center';
document.querySelector('footer div h2').style.padding = '50px 0';
document.querySelector('footer div h2').style.fontSize = '2.5rem';
document.querySelector('footer div h2 span').style.color = '#00a8f9';

// style body > footer > div.ClassName(contact) > form
document.forms[0].style.textAlign = 'center';

// style body > footer > div.ClassName(contact) > form input 1
document.forms[0].firstChild.style.height = '50px';
document.forms[0].firstChild.style.border = '2px solid #eee';
document.forms[0].firstChild.style.borderRadius = '5px';
document.forms[0].firstChild.style.padding = '5px';
document.forms[0].firstChild.style.fontSize = '18px';

// style body > footer > div.ClassName(contact) > form input 2
document.forms[0].children[1].style.height = '50px';
document.forms[0].children[1].style.border = '2px solid #eee';
document.forms[0].children[1].style.borderRadius = '5px';
document.forms[0].children[1].style.padding = '5px';
document.forms[0].children[1].style.fontSize = '18px';

// style body > footer > div.ClassName(contact) > form > label 1
document.forms[0].children[2].style.display = 'block';

// style body > footer > div.ClassName(contact) > form input 3
document.forms[0].children[3].style.height = '200px';
document.forms[0].children[3].style.border = '2px solid #eee';
document.forms[0].children[3].style.borderRadius = '5px';
document.forms[0].children[3].style.padding = '5px';
document.forms[0].children[3].style.fontSize = '20px';

// style body > footer > div.ClassName(contact) > form > label 2
document.forms[0].children[4].style.display = 'block';

// style body > footer > div.ClassName(contact) > form input 4
document.forms[0].children[5].style.height = '50px';
document.forms[0].children[5].style.border = '2px solid #00a8f9';
document.forms[0].children[5].style.borderRadius = '5px';
document.forms[0].children[5].style.padding = '5px';
document.forms[0].children[5].style.fontSize = '20px';
document.forms[0].children[5].style.background = '#00a8f9';
document.forms[0].children[5].style.color = '#fff';
document.forms[0].children[5].style.marginBottom = '60px';

// style body > footer > copyright
document.querySelector('.copyright').style.background = '#333';
document.querySelector('.copyright').style.color = '#fff';

// style body > footer > copyright div
document.querySelector('.copyright div p:nth-child(1)').style.flex = '1  1 50%';
document.querySelector('.copyright div p:nth-child(1) span').style.color = '#00a8f9';
document.querySelector('.copyright div p:nth-child(2)').style.flex = '1  1 50%';
document.querySelector('.copyright div p:nth-child(2)').style.display = 'flex';
document.querySelector('.copyright div p:nth-child(2)').style.justifyContent = 'flex-end';
document.querySelector('.copyright div p:nth-child(2) span').style.color = '#00a8f9';

// ------------------------------------------------- END DOCUMENT CSS -------------------------------------------------------------

// media query 
var mediaSmall = 767.98, // media query for xs , Small devices (landscape phones, 576px and up) 
    mediaMedium = 768, // Medium devices (tablets, 768px and up)
    mediaLarge = 992;   // Large devices (desktops, 992px and up)
window.onresize = window.onload = function () {
    'use strict';
    if (window.innerWidth <= mediaSmall) { // media query for xs , Small devices
        // container
        document.querySelector('.container').style.width = '100%';
        // body  > nav > p
        document.querySelector('#nav-ux > div p').style.fontSize = '1rem';
        // body  > nav > ul
        document.getElementById('ul-x').style.fontSize = '1rem';
        document.getElementById('ul-x').style.padding = '0';
        // body header (height header)
        document.querySelector('header').style.height = window.innerHeight - document.querySelector("nav").offsetHeight + 'px';
        // body header > div > h2
        document.querySelector('header div h2').style.fontSize = '3rem';
        document.querySelector('header div h2').style.textAlign = 'center';
        document.querySelector('header div h2').style.margin = '0px 20px';
        // body > team > team-list
        document.querySelector('.team-list').style.display = 'flow-root';
        // body > about
        document.querySelector('.about').style.display = 'block';
        document.querySelector('.about div:nth-child(1)').style.width = '100%';
        document.querySelector('.about div:nth-child(2)').style.textAlign = 'center';
        document.querySelector('.about div:nth-child(2)').style.width = '100%';
        document.querySelector('.about div:nth-child(2) h2').style.textAlign = 'center';
        document.querySelector('.about div:nth-child(2) h2').style.padding = '10px';
        document.querySelector('.about div:nth-child(2) h2').style.margin = '0';
        document.querySelector('.about div:nth-child(2) p:nth-child(2)').style.margin = '0 auto';
        document.querySelector('.about div:nth-child(2) p:nth-child(2)').style.maxWidth = '80%';
        document.querySelector('.about div:nth-child(2) p:nth-child(3)').style.margin = '0 auto';
        document.querySelector('.about div:nth-child(2) p:nth-child(3)').style.maxWidth = '80%';
        document.querySelector('.about div:nth-child(2) p:nth-child(3)').style.marginTop = '5px';
        // body > footer > form input 1
        document.querySelector('footer div form input:nth-child(1)').style.display = 'block';
        document.querySelector('footer div form input:nth-child(1)').style.width = '100%';
        // body > footer > form input 2
        document.querySelector('footer div form input:nth-child(2)').style.display = 'block';
        document.querySelector('footer div form input:nth-child(2)').style.width = '100%';
        document.querySelector('footer div form input:nth-child(2)').style.marginTop = '15px';
        // body > footer > form input 3
        document.querySelector('footer div form input:nth-child(4)').style.width = '100%';
        document.querySelector('footer div form input:nth-child(4)').style.marginBottom = '15px';
        document.querySelector('footer div form input:nth-child(4)').style.marginTop = '15px';
        // body > footer > form input 4
        document.querySelector('footer div form input:nth-child(6)').style.width = '100%';
        document.querySelector('footer div form input:nth-child(6)').style.marginBottom = '50px';
        // body > cobyrigth div
        document.querySelector('.copyright div').style.width = '100%';
        document.querySelector('.copyright div').style.padding = '5px 15px';
        document.querySelector('.copyright div').style.display = 'block';
        document.querySelector('.copyright div').style.textAlign = 'center';
        document.querySelector('.copyright div p:nth-child(2)').style.justifyContent = 'center';
        document.querySelector('.copyright div p:nth-child(1)').style.fontSize = '0.75rem';
        document.querySelector('.copyright div p:nth-child(2)').style.fontSize = '0.75rem';
        
    } else if (window.innerWidth >= mediaMedium) { // Medium devices (tablets, 768px and up)
        // body  > nav > p
        document.querySelector('#nav-ux > div p').style.fontSize = '1.5rem';
        // body  > nav > ul
        document.getElementById('ul-x').style.fontSize = '1.5rem';
        // body header (height header)
        document.querySelector('header').style.height = window.innerHeight - document.querySelector("nav").offsetHeight + 'px';
        // body header > div > h2
        document.querySelector('header div h2').style.textAlign = 'center';
        document.querySelector('header div h2').style.fontSize = '5rem';
        // about
        document.querySelector('.about div:nth-child(2) h2').style.padding = '10px';
        document.querySelector('.about div:nth-child(2) h2').style.margin = '0';
        document.querySelector('.about div:nth-child(2) p:nth-child(2)').style.margin = '0 auto';
        document.querySelector('.about div:nth-child(2) p:nth-child(2)').style.maxWidth = '80%';
        document.querySelector('.about div:nth-child(2) p:nth-child(3)').style.margin = '0 auto';
        document.querySelector('.about div:nth-child(2) p:nth-child(3)').style.maxWidth = '80%';
        document.querySelector('.about div:nth-child(2) p:nth-child(3)').style.marginTop = '5px';
        // body > footer > form input 1
        document.querySelector('footer div form input:nth-child(1)').style.display = 'inline-block';
        document.querySelector('footer div form input:nth-child(1)').style.width = '40%';
        document.querySelector('footer div form input:nth-child(1)').style.marginRight = '2%';
        // body > footer > form input 2
        document.querySelector('footer div form input:nth-child(2)').style.display = 'inline-block';
        document.querySelector('footer div form input:nth-child(2)').style.width = '40%';
        // body > footer > form input 3
        document.querySelector('footer div form input:nth-child(4)').style.width = '82%';
        document.querySelector('footer div form input:nth-child(4)').style.marginBottom = '60px';
        document.querySelector('footer div form input:nth-child(4)').style.marginTop = '60px';
        // body > footer > form input 4
        document.querySelector('footer div form input:nth-child(6)').style.width = '30%';
        // body > cobyright
        document.querySelector('.copyright div').style.display = 'flex';
        document.querySelector('.copyright div p:nth-child(1)').style.fontSize = '1rem';
        document.querySelector('.copyright div p:nth-child(2)').style.fontSize = '1rem';
    }
    
    if (window.innerWidth >= mediaLarge) { // Large devices (desktops, 992px and up)
        // body > nav > container
        document.querySelector('.container').style.width = '80%';
        // body  > nav > p
        document.querySelector('#nav-ux > div p').style.fontSize = '2rem';
        // body  > nav > ul
        document.getElementById('ul-x').style.fontSize = '1.75rem';
        // body header (height header)
        document.querySelector('header').style.height = window.innerHeight - document.querySelector("nav").offsetHeight + 'px';
        // body > team > team-list
        document.querySelector('.team-list').style.display = 'flex';
        // body > about
        document.querySelector('.about').style.display = 'flex';
        document.querySelector('.about div:nth-child(2) h2').style.marginLeft = '20px';
        document.querySelector('.about div:nth-child(2) h2').style.paddingLeft = '0px';
        document.querySelector('.about div:nth-child(2) h2').style.textAlign = 'left';
        document.querySelector('.about div:nth-child(2) p:nth-child(2)').style.maxWidth = '100%';
        document.querySelector('.about div:nth-child(2) p:nth-child(2)').style.margin = '30px 20px 0 20px';
        document.querySelector('.about div:nth-child(2) p:nth-child(3)').style.margin = '20px 20px 0 20px';
        document.querySelector('.about div:nth-child(2) p:nth-child(3)').style.maxWidth = '100%';
        // body > cobyright
        document.querySelector('.copyright div p:nth-child(1)').style.fontSize = '1.2rem';
        document.querySelector('.copyright div p:nth-child(2)').style.fontSize = '1.2rem';
    }
};