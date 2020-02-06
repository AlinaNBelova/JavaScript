var divHeader = document.createElement('div');
var divContainer = document.querySelector('div');
divContainer.append(divHeader);
divHeader.className ="header";

var divLogo =document.createElement('div');
divHeader.append(divLogo);
divLogo.className="logo";
divLogo.innerHTML ='<h1>HighOnCoding</h1>'

var divNav = document.createElement('div');
divHeader.append(divNav);
divNav.className='nav';

var divHome = document.createElement('div');
divNav.append(divHome);
divHome.className='home';
divHome.innerHTML ='<h2>Home</h2>'

var divCat = document.createElement('div');
divNav.append(divCat);
divCat.className='categories';
divCat.innerHTML='<h4>Categories</h4>'

var divMain = document.createElement('div');
divContainer.append(divMain);
divMain.className = 'main';

var divArticle = document.createElement('div');
divMain.append(divArticle);
divArticle.className='article';
divArticle.innerHTML="<h2> Curse of the Current Reviews </h2> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis assumenda ea architecto et modi, cupiditate repellendus voluptatem suscipit asperiores, ad voluptatum, adipisci qui quod deleniti alias repellat. Sint, magnam recusandae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis assumenda ea architecto et modi.</p>"

var divHyper = document.createElement('div');
divMain.append(divHyper);
divHyper.className= 'hyper';

var divInnerHyper1=document.createElement('div');
divHyper.append(divInnerHyper1);
divInnerHyper1.className='innerHyper';

var divInnerHyper2=document.createElement('div');
divHyper.append(divInnerHyper2);
divInnerHyper2.className='innerHyper';

var divLink1 = document.createElement('div');
console.log(document.getElementsByClassName('innerHyper'));
console.log(divInnerHyper2)
divInnerHyper1.innerHTML = "<h3> Hello WatchKit</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis assumenda ea architecto et modi, cupiditate repellendus voluptatem suscipit asperiores, ad voluptatum, adipisci qui quod deleniti alias repellat. Sint, magnam recusandae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis assumenda ea architecto et modi.</p>";
var divBar1 = document.createElement('div');
divInnerHyper1.append(divBar1);
divBar1.className='bar';
divComments1 = document.createElement('div');
divBar1.append(divComments1);
divComments1.className ='comments';
divLikes1= document.createElement('div');
divBar1.append(divLikes1);
divLikes1.className='likes';
divLikes1.innerHTML ='<h6>124 likes</h6>';
divComments1.innerHTML ='<h6>12 comment</h6>';

var divLink2 = document.createElement('div');
// console.log(document.getElementsByClassName('innerHyper'));
console.log(divInnerHyper1)

divInnerHyper2.innerHTML = "<h3> Introduction to Swift</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis assumenda ea architecto et modi, cupiditate repellendus voluptatem suscipit asperiores, ad voluptatum, adipisci qui quod deleniti alias repellat. Sint, magnam recusandae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis assumenda ea architecto et modi.</p>";
var divBar2 = document.createElement('div');
divInnerHyper2.append(divBar2);
divBar2.className='bar';
divComments2 = document.createElement('div');
divBar2.append(divComments2);
divComments2.className ='comments';
divLikes2= document.createElement('div');
divBar2.append(divLikes2);
divLikes2.className='likes'
divLikes2.innerHTML ='<h6>45 likes</h6>';
divComments2.innerHTML ='<h6>15 comments </h6>';






