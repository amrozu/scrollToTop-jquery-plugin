# scrollToTop-jquery-plugin

scrollToTop to prosty plugin jQuery pozwalający na animowane przewinięcie strony do jej początku

## Użycie

Należy dołączyć plik `scrollToTop.js` do swojej strony internetowej (dołączenie jQuery jest niezbędne do poprawnego działania kodu).

### Minimalne ustawienia

```js
$(function(){
	$.fn.scrollToTop();
});
```

```html
<span id="zipper">^</span>
```

```css
#zipper {
	position: fixed;
	bottom: 50px;
	margin-left: 50px;
	height: 40px;
	width: 40px;
	border-radius: 10px;
	background-color: rgba(0, 0, 0, .3);
	color: rgba(0, 0, 0, .6);
	font-size: 50px;
	font-weight: bold;
	text-align: center;
}

#zipper:hover {
	background-color: rgba(0, 0, 0, .6);
	color: #fff;
	cursor: pointer;
}
```

### Ustawienia domyślne

```js
$(function(){
	$.fn.scrollToTop({
		scrollWhen: 5, // określa moment pojawienia się przycisku "zipper"
		showSpeed: 300, // określa szybkość pojawienia się przycisku "zipper"
		hideSpeed: 300,	// określa szybkosć ukrycia przycisku "zipper"
		scrollSpeed: 1000 // określa szybkość przewijania strony do góry
	})
})
```

## Wersja

0.0.1