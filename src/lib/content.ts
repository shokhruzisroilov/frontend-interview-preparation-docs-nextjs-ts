export const htmlContent = {
	introduction: {
		title: 'HTML Kirish',
		content: `
      <h1>HTML (HyperText Markup Language)</h1>
      <p>HTML - bu veb-sahifalar yaratish uchun standart belgilash tili. U veb-sahifaning strukturasi va mazmunini tavsiflaydi.</p>
      
      <h2>Asosiy tushunchalar</h2>
      <ul>
        <li><strong>Elementlar:</strong> HTML dokumentining building block'lari</li>
        <li><strong>Tag'lar:</strong> Elementlarni belgilash uchun ishlatiladi</li>
        <li><strong>Atributlar:</strong> Elementlarga qo'shimcha ma'lumot beradi</li>
      </ul>
      
      <h2>HTML dokument strukturasi</h2>
      <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Document&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Salom Dunyo!&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
    `,
	},
	elements: {
		title: 'HTML Elementlari',
		content: `
      <h1>HTML Elementlari</h1>
      <p>HTML elementlari tag'lar orqali yaratiladi va ularning turli xil turlari mavjud.</p>
      
      <h2>Blok Elementlari</h2>
      <ul>
        <li><code>&lt;div&gt;</code> - kontent uchun konteyner</li>
        <li><code>&lt;p&gt;</code> - paragraf</li>
        <li><code>&lt;h1&gt;-&lt;h6&gt;</code> - sarlavhalar</li>
        <li><code>&lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;</code> - ro'yxatlar</li>
      </ul>
      
      <h2>Inline Elementlar</h2>
      <ul>
        <li><code>&lt;span&gt;</code> - matn uchun konteyner</li>
        <li><code>&lt;a&gt;</code> - havola</li>
        <li><code>&lt;strong&gt;</code> - muhim matn</li>
        <li><code>&lt;em&gt;</code> - urg'uli matn</li>
      </ul>
    `,
	},
	// ... boshqa HTML bo'limlari
}

export const cssContent = {
	introduction: {
		title: 'CSS Kirish',
		content: `
      <h1>CSS (Cascading Style Sheets)</h1>
      <p>CSS - bu veb-sahifalarning ko'rinishi va formatlanishini tavsiflovchi til.</p>
      
      <h2>CSS qanday ishlaydi?</h2>
      <p>CSS selektorlar va deklaratsiyalardan iborat:</p>
      <pre><code>selector {
    property: value;
}</code></pre>
      
      <h2>CSS ulash usullari</h2>
      <ul>
        <li><strong>Inline CSS:</strong> style atributi orqali</li>
        <li><strong>Internal CSS:</strong> &lt;style&gt; tag'i ichida</li>
        <li><strong>External CSS:</strong> alohida .css faylda</li>
      </ul>
    `,
	},
	// ... boshqa CSS bo'limlari
}

export const javascriptContent = {
	introduction: {
		title: 'JavaScript Kirish',
		content: `
      <h1>JavaScript</h1>
      <p>JavaScript - bu interaktiv veb-sahifalar yaratish uchun dasturlash tili.</p>
      
      <h2>JavaScript nima qila oladi?</h2>
      <ul>
        <li>HTML kontentini o'zgartirish</li>
        <li>HTML atributlarini o'zgartirish</li>
        <li>CSS uslublarini o'zgartirish</li>
        <li>Elementlarni yashirish/ko'rsatish</li>
      </ul>
      
      <h2>Asosiy sintaksis</h2>
      <pre><code>// O'zgaruvchi e'lon qilish
let x = 5;
const y = 10;

// Funksiya
function salom(ism) {
    return "Salom, " + ism;
}

// Console ga chiqarish
console.log(salom("Dunyo"));</code></pre>
    `,
	},
	// ... boshqa JavaScript bo'limlari
}

export const reactContent = {
	introduction: {
		title: 'React Kirish',
		content: `
      <h1>React</h1>
      <p>React - foydalanuvchi interfeyslari yaratish uchun JavaScript kutubxonasi.</p>
      
      <h2>React ning afzalliklari</h2>
      <ul>
        <li><strong>Komponent bazali:</strong> Qayta ishlatiladigan komponentlar</li>
        <li><strong>Virtual DOM:</strong> Samaradorlikni oshiradi</li>
        <li><strong>JSX:</strong> HTML ga o'xshash sintaksis</li>
        <li><strong>Ekosistema:</strong> Kengaytmalar va kutubxonalar</li>
      </ul>
      
      <h2>Oddiy React komponenti</h2>
      <pre><code>import React from 'react';

function Salom(props) {
    return &lt;h1&gt;Salom, {props.ism}!&lt;/h1&gt;;
}

export default Salom;</code></pre>
    `,
	},
	// ... boshqa React bo'limlari
}
