export const htmlContent = {
	introduction: {
		title: 'HTML Kirish',
		content: `
      <h1>HTML (HyperText Markup Language)</h1>
      <p>HTML - bu veb-sahifalar yaratish uchun standart belgilash tili. U veb-sahifaning strukturasi va mazmunini tavsiflaydi.</p>
      
      <h2>Asosiy tushunchalar</h2>
      <ul>
        <li><strong>Elementlar:</strong> HTML dokumentining building block&apos;lari</li>
        <li><strong>Tag&apos;lar:</strong> Elementlarni belgilash uchun ishlatiladi</li>
        <li><strong>Atributlar:</strong> Elementlarga qo&apos;shimcha ma&apos;lumot beradi</li>
      </ul>
      
      <h2>HTML dokument strukturasi</h2>
      <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;Document&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Salom Dunyo!&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
      
      <h2>HTML ning tarixi</h2>
      <p>HTML 1991-yilda Tim Berners-Lee tomonidan yaratilgan. Hozirda HTML5 eng so&apos;nggi versiyasi hisoblanadi.</p>
    `,
	},
	elements: {
		title: 'HTML Elementlari',
		content: `
      <h1>HTML Elementlari</h1>
      <p>HTML elementlari tag&apos;lar orqali yaratiladi va ularning turli xil turlari mavjud.</p>
      
      <h2>Blok Elementlari</h2>
      <ul>
        <li><code>&lt;div&gt;</code> - kontent uchun konteyner</li>
        <li><code>&lt;p&gt;</code> - paragraf</li>
        <li><code>&lt;h1&gt;-&lt;h6&gt;</code> - sarlavhalar</li>
        <li><code>&lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;</code> - ro&apos;yxatlar</li>
        <li><code>&lt;section&gt;</code> - bo&apos;lim</li>
        <li><code>&lt;article&gt;</code> - mustaqil kontent</li>
        <li><code>&lt;header&gt;, &lt;footer&gt;</code> - sarlavha va pastki qism</li>
      </ul>
      
      <h2>Inline Elementlar</h2>
      <ul>
        <li><code>&lt;span&gt;</code> - matn uchun konteyner</li>
        <li><code>&lt;a&gt;</code> - havola</li>
        <li><code>&lt;strong&gt;</code> - muhim matn</li>
        <li><code>&lt;em&gt;</code> - urg&apos;uli matn</li>
        <li><code>&lt;img&gt;</code> - rasm</li>
        <li><code>&lt;br&gt;</code> - qator yangilash</li>
        <li><code>&lt;code&gt;</code> - kod ko&apos;rsatish</li>
      </ul>
      
      <h2>Element sintaksisi</h2>
      <pre><code>&lt;ochuvchi-tag atribut=&quot;qiymat&quot;&gt;kontent&lt;yopuvchi-tag&gt;</code></pre>
      
      <h3>Misol:</h3>
      <pre><code>&lt;a href=&quot;https://example.com&quot; target=&quot;_blank&quot;&gt;Mening havolam&lt;/a&gt;</code></pre>
    `,
	},
	forms: {
		title: 'HTML Formalar',
		content: `
      <h1>HTML Formalar</h1>
      <p>Formalar foydalanuvchidan ma&apos;lumot olish uchun ishlatiladi.</p>
      
      <h2>Asosiy forma elementlari</h2>
      <pre><code>&lt;form action=&quot;/submit&quot; method=&quot;POST&quot;&gt;
    &lt;label for=&quot;ism&quot;&gt;Ism:&lt;/label&gt;
    &lt;input type=&quot;text&quot; id=&quot;ism&quot; name=&quot;ism&quot; required&gt;
    
    &lt;label for=&quot;email&quot;&gt;Email:&lt;/label&gt;
    &lt;input type=&quot;email&quot; id=&quot;email&quot; name=&quot;email&quot; required&gt;
    
    &lt;label for=&quot;parol&quot;&gt;Parol:&lt;/label&gt;
    &lt;input type=&quot;password&quot; id=&quot;parol&quot; name=&quot;parol&quot;&gt;
    
    &lt;button type=&quot;submit&quot;&gt;Yuborish&lt;/button&gt;
&lt;/form&gt;</code></pre>
      
      <h2>Input turlari</h2>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Tavsif</th>
            <th>Misol</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>text</code></td>
            <td>Matn kiritish</td>
            <td><code>&lt;input type=&quot;text&quot;&gt;</code></td>
          </tr>
          <tr>
            <td><code>email</code></td>
            <td>Email manzil</td>
            <td><code>&lt;input type=&quot;email&quot;&gt;</code></td>
          </tr>
          <tr>
            <td><code>password</code></td>
            <td>Parol</td>
            <td><code>&lt;input type=&quot;password&quot;&gt;</code></td>
          </tr>
          <tr>
            <td><code>number</code></td>
            <td>Raqam</td>
            <td><code>&lt;input type=&quot;number&quot;&gt;</code></td>
          </tr>
          <tr>
            <td><code>checkbox</code></td>
            <td>Belgilash katakchasi</td>
            <td><code>&lt;input type=&quot;checkbox&quot;&gt;</code></td>
          </tr>
          <tr>
            <td><code>radio</code></td>
            <td>Radio tugma</td>
            <td><code>&lt;input type=&quot;radio&quot;&gt;</code></td>
          </tr>
        </tbody>
      </table>
      
      <h2>Forma validatsiyasi</h2>
      <pre><code>&lt;input type=&quot;text&quot; required&gt;
&lt;input type=&quot;email&quot; pattern=&quot;[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$&quot;&gt;
&lt;input type=&quot;number&quot; min=&quot;1&quot; max=&quot;100&quot;&gt;</code></pre>
    `,
	},
	'semantic-html': {
		title: 'Semantik HTML',
		content: `
      <h1>Semantik HTML</h1>
      <p>Semantik HTML - elementlarning ma&apos;nosini aniq ifodalovchi HTML.</p>
      
      <h2>Semantik elementlar</h2>
      <ul>
        <li><code>&lt;header&gt;</code> - sahifa sarlavhasi</li>
        <li><code>&lt;nav&gt;</code> - navigatsiya menyusi</li>
        <li><code>&lt;main&gt;</code> - asosiy kontent</li>
        <li><code>&lt;section&gt;</code> - mavzuli bo&apos;lim</li>
        <li><code>&lt;article&gt;</code> - mustaqil maqola</li>
        <li><code>&lt;aside&gt;</code> - yon panel</li>
        <li><code>&lt;footer&gt;</code> - sahifa pastki qismi</li>
      </ul>
      
      <h2>Semantik HTML misoli</h2>
      <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Mening Blogim&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;header&gt;
        &lt;h1&gt;Mening Blogim&lt;/h1&gt;
        &lt;nav&gt;
            &lt;a href=&quot;/&quot;&gt;Bosh sahifa&lt;/a&gt;
            &lt;a href=&quot;/about&quot;&gt;Haqida&lt;/a&gt;
        &lt;/nav&gt;
    &lt;/header&gt;
    
    &lt;main&gt;
        &lt;article&gt;
            &lt;h2&gt;Blog post sarlavhasi&lt;/h2&gt;
            &lt;p&gt;Blog post matni...&lt;/p&gt;
        &lt;/article&gt;
    &lt;/main&gt;
    
    &lt;footer&gt;
        &lt;p&gt;&amp;copy; 2024 Mening Blogim&lt;/p&gt;
    &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
      
      <h2>Semantik HTML afzalliklari</h2>
      <ul>
        <li><strong>SEO yaxshilanishi:</strong> Qidiruv tizimlari tarkibni yaxshiroq tushunadi</li>
        <li><strong>Accessibility:</strong> Ekran o&apos;quv dasturlari tarkibni yaxshiroq talqin qiladi</li>
        <li><strong>Kodni o&apos;qish qulayligi:</strong> Kod strukturasi aniqroq bo&apos;ladi</li>
        <li><strong>Barqarorlik:</strong> Kelajakdagi brauzerlar bilan moslik</li>
      </ul>
    `,
	},
	seo: {
		title: 'HTML va SEO',
		content: `
      <h1>HTML va SEO (Search Engine Optimization)</h1>
      <p>SEO - veb-sahifalarni qidiruv tizimlarida yuqori pozitsiyalarga olib chiqish.</p>
      
      <h2>SEO uchun muhim HTML elementlari</h2>
      
      <h3>1. Title tag</h3>
      <pre><code>&lt;title&gt;Asosiy kalit so&apos;zlar - Sayt Nomi&lt;/title&gt;</code></pre>
      
      <h3>2. Meta description</h3>
      <pre><code>&lt;meta name=&quot;description&quot; content=&quot;Sahifa haqida qisqacha tavsif (150-160 belgi)&quot;&gt;</code></pre>
      
      <h3>3. Heading tags (h1-h6)</h3>
      <pre><code>&lt;h1&gt;Asosiy sarlavha&lt;/h1&gt;
&lt;h2&gt;Kichik sarlavha&lt;/h2&gt;
&lt;h3&gt;Undan kichik sarlavha&lt;/h3&gt;</code></pre>
      
      <h3>4. Alt atributi (rasmlar uchun)</h3>
      <pre><code>&lt;img src=&quot;rasm.jpg&quot; alt=&quot;Rasm haqida tavsif&quot;&gt;</code></pre>
      
      <h3>5. Canonical tag</h3>
      <pre><code>&lt;link rel=&quot;canonical&quot; href=&quot;https://example.com/asosiy-url&quot;&gt;</code></pre>
      
      <h2>SEO-friendly HTML strukturasi</h2>
      <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;uz&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;Asosiy kalit so&apos;zlar - Sayt Nomi&lt;/title&gt;
    &lt;meta name=&quot;description&quot; content=&quot;Sahifa tavsifi&quot;&gt;
    &lt;meta name=&quot;keywords&quot; content=&quot;kalit, so&apos;zlar&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Asosiy sarlavha&lt;/h1&gt;
    &lt;p&gt;Sifatli va foydali kontent&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
    `,
	},
	accessibility: {
		title: 'HTML va Accessibility',
		content: `
      <h1>HTML va Accessibility (Qulaylik)</h1>
      <p>Accessibility - veb-sahifalarni barcha foydalanuvchilar, shu jumladan nogironlikka ega bo&apos;lganlar ham foydalana olishi.</p>
      
      <h2>Accessibility uchun muhim HTML xususiyatlari</h2>
      
      <h3>1. Semantic HTML</h3>
      <pre><code>&lt;!-- Yomon --&gt;
&lt;div class=&quot;header&quot;&gt;...&lt;/div&gt;

&lt;!-- Yaxshi --&gt;
&lt;header&gt;...&lt;/header&gt;</code></pre>
      
      <h3>2. Alt atributi</h3>
      <pre><code>&lt;img src=&quot;chart.jpg&quot; alt=&quot;2024-yilgi sotuvlar grafigi&quot;&gt;</code></pre>
      
      <h3>3. Label elementlari</h3>
      <pre><code>&lt;label for=&quot;username&quot;&gt;Foydalanuvchi nomi:&lt;/label&gt;
&lt;input type=&quot;text&quot; id=&quot;username&quot; name=&quot;username&quot;&gt;</code></pre>
      
      <h3>4. ARIA atributlari</h3>
      <pre><code>&lt;button aria-label=&quot;Yopish&quot;&gt;X&lt;/button&gt;
&lt;div role=&quot;navigation&quot; aria-label=&quot;Asosiy menyu&quot;&gt;
    &lt;!-- navigatsiya --&gt;
&lt;/div&gt;</code></pre>
      
      <h3>5. Keyboard navigation</h3>
      <pre><code>&lt;a href=&quot;#main&quot; tabindex=&quot;1&quot;&gt;Asosiy kontentga o&apos;tish&lt;/a&gt;
&lt;button tabindex=&quot;2&quot;&gt;Tugma&lt;/button&gt;</code></pre>
      
      <h2>Accessibility test qilish</h2>
      <ul>
        <li><strong>Keyboard test:</strong> Faqat klaviatura yordamida navigatsiya</li>
        <li><strong>Screen reader test:</strong> Ekran o&apos;quv dasturi bilan tekshirish</li>
        <li><strong>Color contrast test:</strong> Rang kontrastini tekshirish</li>
        <li><strong>Lighthouse audit:</strong> Google Chrome&apos;ning Lighthouse vositas</li>
      </ul>
    `,
	},
}

export const cssContent = {
	introduction: {
		title: 'CSS Kirish',
		content: `
      <h1>CSS (Cascading Style Sheets)</h1>
      <p>CSS - bu veb-sahifalarning ko&apos;rinishi va formatlanishini tavsiflovchi til.</p>
      
      <h2>CSS qanday ishlaydi?</h2>
      <p>CSS selektorlar va deklaratsiyalardan iborat:</p>
      <pre><code>selector {
    property: value;
}</code></pre>
      
      <h2>CSS ulash usullari</h2>
      <ul>
        <li><strong>Inline CSS:</strong> style atributi orqali</li>
        <li><strong>Internal CSS:</strong> &lt;style&gt; tag&apos;i ichida</li>
        <li><strong>External CSS:</strong> alohida .css faylda</li>
      </ul>
      
      <h3>Inline CSS misoli:</h3>
      <pre><code>&lt;p style=&quot;color: blue; font-size: 16px;&quot;&gt;Ko&apos;k matn&lt;/p&gt;</code></pre>
      
      <h3>Internal CSS misoli:</h3>
      <pre><code>&lt;style&gt;
    p {
        color: blue;
        font-size: 16px;
    }
&lt;/style&gt;</code></pre>
      
      <h3>External CSS misoli:</h3>
      <pre><code>&lt;link rel=&quot;stylesheet&quot; href=&quot;styles.css&quot;&gt;</code></pre>
    `,
	},
	selectors: {
		title: 'CSS Selektorlar',
		content: `
      <h1>CSS Selektorlar</h1>
      <p>Selektorlar - qaysi HTML elementlarga style qo&apos;llashni belgilaydi.</p>
      
      <h2>Asosiy selektor turlari</h2>
      
      <h3>1. Element selektor</h3>
      <pre><code>p {
    color: red;
}</code></pre>
      
      <h3>2. Class selektor</h3>
      <pre><code>.alert {
    background-color: yellow;
}</code></pre>
      
      <h3>3. ID selektor</h3>
      <pre><code>#header {
    height: 100px;
}</code></pre>
      
      <h3>4. Universal selektor</h3>
      <pre><code>* {
    margin: 0;
    padding: 0;
}</code></pre>
      
      <h2>Kombinatsiya selektorlar</h2>
      
      <h3>1. Gruppalash</h3>
      <pre><code>h1, h2, h3 {
    font-family: Arial, sans-serif;
}</code></pre>
      
      <h3>2. Avlod selektor</h3>
      <pre><code>div p {
    color: blue;
}</code></pre>
      
      <h3>3. Bolasi selektor</h3>
      <pre><code>div > p {
    color: red;
}</code></pre>
      
      <h3>4. Qo&apos;shni selektor</h3>
      <pre><code>h1 + p {
    margin-top: 0;
}</code></pre>
      
      <h2>Pseudo-class va Pseudo-elementlar</h2>
      
      <h3>Pseudo-class misollari:</h3>
      <pre><code>a:hover {
    color: red;
}

input:focus {
    border-color: blue;
}

li:nth-child(odd) {
    background-color: #f0f0f0;
}</code></pre>
      
      <h3>Pseudo-element misollari:</h3>
      <pre><code>p::first-line {
    font-weight: bold;
}

p::before {
    content: &quot;➡ &quot;;
}</code></pre>
    `,
	},
	flexbox: {
		title: 'CSS Flexbox',
		content: `
      <h1>CSS Flexbox</h1>
      <p>Flexbox - bir o&apos;lchovli layout yaratish uchun CSS moduli.</p>
      
      <h2>Flex container xususiyatlari</h2>
      
      <h3>1. display: flex</h3>
      <pre><code>.container {
    display: flex;
}</code></pre>
      
      <h3>2. flex-direction</h3>
      <pre><code>.container {
    flex-direction: row; /* default */
    flex-direction: column;
    flex-direction: row-reverse;
    flex-direction: column-reverse;
}</code></pre>
      
      <h3>3. justify-content (asosiy o&apos;q bo&apos;yicha)</h3>
      <pre><code>.container {
    justify-content: flex-start; /* default */
    justify-content: flex-end;
    justify-content: center;
    justify-content: space-between;
    justify-content: space-around;
    justify-content: space-evenly;
}</code></pre>
      
      <h3>4. align-items (kesma o&apos;q bo&apos;yicha)</h3>
      <pre><code>.container {
    align-items: stretch; /* default */
    align-items: flex-start;
    align-items: flex-end;
    align-items: center;
    align-items: baseline;
}</code></pre>
      
      <h2>Flex item xususiyatlari</h2>
      
      <h3>1. flex-grow</h3>
      <pre><code>.item {
    flex-grow: 1; /* Bo&apos;sh joyni egallash */
}</code></pre>
      
      <h3>2. flex-shrink</h3>
      <pre><code>.item {
    flex-shrink: 0; /* Kichrayishga yo&apos;l qo&apos;ymaslik */
}</code></pre>
      
      <h3>3. flex-basis</h3>
      <pre><code>.item {
    flex-basis: 200px; /* Boshlang&apos;ich o&apos;lcham */
}</code></pre>
      
      <h3>4. align-self</h3>
      <pre><code>.item {
    align-self: center; /* Alohida itemni joylashtirish */
}</code></pre>
      
      <h2>Amaliy Flexbox misoli</h2>
      <pre><code>.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #333;
}

.nav-brand {
    color: white;
    font-size: 1.5rem;
}

.nav-menu {
    display: flex;
    gap: 1rem;
    list-style: none;
}

.nav-menu a {
    color: white;
    text-decoration: none;
}</code></pre>
    `,
	},
	grid: {
		title: 'CSS Grid',
		content: `
      <h1>CSS Grid</h1>
      <p>Grid - ikki o&apos;lchovli layout yaratish uchun CSS moduli.</p>
      
      <h2>Grid container xususiyatlari</h2>
      
      <h3>1. display: grid</h3>
      <pre><code>.container {
    display: grid;
}</code></pre>
      
      <h3>2. grid-template-columns va grid-template-rows</h3>
      <pre><code>.container {
    grid-template-columns: 1fr 1fr 1fr; /* 3 ta teng ustun */
    grid-template-rows: 100px 200px; /* 2 ta qator */
}</code></pre>
      
      <h3>3. grid-template-areas</h3>
      <pre><code>.container {
    grid-template-areas: 
        &quot;header header header&quot;
        &quot;sidebar content content&quot;
        &quot;footer footer footer&quot;;
}</code></pre>
      
      <h3>4. gap</h3>
      <pre><code>.container {
    gap: 1rem; /* Barcha yo&apos;llar orasidagi masofa */
    row-gap: 1rem;
    column-gap: 2rem;
}</code></pre>
      
      <h2>Grid item xususiyatlari</h2>
      
      <h3>1. grid-area</h3>
      <pre><code>.header {
    grid-area: header;
}

.sidebar {
    grid-area: sidebar;
}</code></pre>
      
      <h3>2. grid-column va grid-row</h3>
      <pre><code>.item {
    grid-column: 1 / 3; /* 1-chi chiziqdan 3-chi chiziqqacha */
    grid-row: 1 / 2;    /* 1-chi chiziqdan 2-chi chiziqqacha */
}</code></pre>
      
      <h3>3. span kalit so&apos;zi</h3>
      <pre><code>.item {
    grid-column: 1 / span 2; /* 1-chi chiziqdan boshlab 2 ta ustun */
}</code></pre>
      
      <h2>Amaliy Grid misoli</h2>
      <pre><code>.page-layout {
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 80px 1fr 60px;
    grid-template-areas: 
        &quot;header header&quot;
        &quot;sidebar main&quot;
        &quot;footer footer&quot;;
    min-height: 100vh;
    gap: 1rem;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }</code></pre>
      
      <h2>Grid va Flexbox farqi</h2>
      <table>
        <thead>
          <tr>
            <th>CSS Grid</th>
            <th>Flexbox</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2D layout (ustun va qator)</td>
            <td>1D layout (bir yo&apos;nalish)</td>
          </tr>
          <tr>
            <td>Ikkala o&apos;q bo&apos;yicha boshqarish</td>
            <td>Asosiy o&apos;q bo&apos;yicha boshqarish</td>
          </tr>
          <tr>
            <td>Kompleks layoutlar uchun</td>
            <td>Kichik komponentlar uchun</td>
          </tr>
        </tbody>
      </table>
    `,
	},
	animations: {
		title: 'CSS Animatsiyalar',
		content: `
      <h1>CSS Animatsiyalar</h1>
      <p>CSS animatsiyalar elementlarning vizual o&apos;zgarishlarini yaratish imkonini beradi.</p>
      
      <h2>Transition</h2>
      <p>Transition - CSS xususiyatlarining sekin o&apos;zgarishi.</p>
      <pre><code>.button {
    background-color: blue;
    transition: background-color 0.3s ease;
}

.button:hover {
    background-color: red;
}</code></pre>
      
      <h3>Transition xususiyatlari:</h3>
      <ul>
        <li><code>transition-property</code> - qaysi xususiyat</li>
        <li><code>transition-duration</code> - davomiylik</li>
        <li><code>transition-timing-function</code> - tezlik funksiyasi</li>
        <li><code>transition-delay</code> - kechikish</li>
      </ul>
      
      <h2>Animation va @keyframes</h2>
      <pre><code>@keyframes slide-in {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
}

.element {
    animation: slide-in 1s ease-in-out;
}</code></pre>
      
      <h3>Animation xususiyatlari:</h3>
      <ul>
        <li><code>animation-name</code> - keyframes nomi</li>
        <li><code>animation-duration</code> - davomiylik</li>
        <li><code>animation-timing-function</code> - tezlik funksiyasi</li>
        <li><code>animation-delay</code> - kechikish</li>
        <li><code>animation-iteration-count</code> - takrorlanish soni</li>
        <li><code>animation-direction</code> - yo&apos;nalish</li>
        <li><code>animation-fill-mode</code> - animatsiyadan keyingi holat</li>
      </ul>
      
      <h2>Transform</h2>
      <p>Transform - elementlarning shaklini o&apos;zgartirish.</p>
      <pre><code>.element {
    transform: translateX(50px); /* Siljitish */
    transform: rotate(45deg);    /* Aylantirish */
    transform: scale(1.5);       /* Kattalash */
    transform: skew(10deg);      /* Qiyshaytirish */
}</code></pre>
      
      <h2>Amaliy animatsiya misollari</h2>
      
      <h3>Loading spinner:</h3>
      <pre><code>@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}</code></pre>
      
      <h3>Fade in animatsiya:</h3>
      <pre><code>@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.fade-in {
    animation: fadeIn 0.5s ease-in;
}</code></pre>
    `,
	},
	responsive: {
		title: 'Responsive Design',
		content: `
      <h1>Responsive Design</h1>
      <p>Responsive design - veb-sahifalarning turli ekran o&apos;lchamlarida yaxshi ko&apos;rinishi.</p>
      
      <h2>Viewport meta tegi</h2>
      <pre><code>&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</code></pre>
      
      <h2>Media Query&apos;lar</h2>
      <p>Media query&apos;lar - turli qurilmalar uchun CSS qoidalari yozish.</p>
      
      <h3>Asosiy media query&apos;lar:</h3>
      <pre><code>/* Kichik ekranlar (telefonlar) */
@media (max-width: 768px) {
    .container {
        padding: 1rem;
    }
}

/* O&apos;rta ekranlar (planshetlar) */
@media (min-width: 769px) and (max-width: 1024px) {
    .container {
        padding: 2rem;
    }
}

/* Katta ekranlar (kompyuterlar) */
@media (min-width: 1025px) {
    .container {
        padding: 3rem;
    }
}</code></pre>
      
      <h2>Mobile-first yondashuv</h2>
      <pre><code>/* Boshlang&apos;ich stil (mobile) */
.container {
    padding: 1rem;
    font-size: 14px;
}

/* Planshetlar uchun */
@media (min-width: 768px) {
    .container {
        padding: 2rem;
        font-size: 16px;
    }
}

/* Kompyuterlar uchun */
@media (min-width: 1024px) {
    .container {
        padding: 3rem;
        font-size: 18px;
    }
}</code></pre>
      
      <h2>Flexible grid sistemasi</h2>
      <pre><code>.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
}</code></pre>
      
      <h2>Flexible images</h2>
      <pre><code>img {
    max-width: 100%;
    height: auto;
}</code></pre>
      
      <h2>Responsive navigation</h2>
      <pre><code>/* Desktop navigation */
.nav-desktop {
    display: flex;
}

.nav-mobile {
    display: none;
}

/* Mobile navigation */
@media (max-width: 768px) {
    .nav-desktop {
        display: none;
    }
    
    .nav-mobile {
        display: block;
    }
}</code></pre>
      
      <h2>Breakpoint&apos;lar</h2>
      <table>
        <thead>
          <tr>
            <th>Qurilma</th>
            <th>Ekran o&apos;lchami</th>
            <th>Media Query</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mobile</td>
            <td>&lt; 768px</td>
            <td><code>@media (max-width: 768px)</code></td>
          </tr>
          <tr>
            <td>Tablet</td>
            <td>768px - 1024px</td>
            <td><code>@media (min-width: 768px) and (max-width: 1024px)</code></td>
          </tr>
          <tr>
            <td>Desktop</td>
            <td>&gt; 1024px</td>
            <td><code>@media (min-width: 1024px)</code></td>
          </tr>
        </tbody>
      </table>
      
      <h2>Responsive test qilish</h2>
      <ul>
        <li>Brauzer developer tools&apos;dagi responsive mode</li>
        <li>Haqiqiy qurilmalarda test qilish</li>
        <li>Google Mobile-Friendly Test</li>
        <li>Lighthouse performance audit</li>
      </ul>
    `,
	},
}

export const javascriptContent = {
	introduction: {
		title: 'JavaScript Kirish',
		content: `
      <h1>JavaScript</h1>
      <p>JavaScript - bu interaktiv veb-sahifalar yaratish uchun dasturlash tili. U brauzerda ishlaydi va veb-sahifalarga dinamiklik qo&apos;shadi.</p>
      
      <h2>JavaScript nima qila oladi?</h2>
      <ul>
        <li>HTML kontentini o&apos;zgartirish</li>
        <li>HTML atributlarini o&apos;zgartirish</li>
        <li>CSS uslublarini o&apos;zgartirish</li>
        <li>Elementlarni yashirish/ko&apos;rsatish</li>
        <li>Foydalanuvchi interfeysini yaratish</li>
      </ul>
      
      <h2>Asosiy sintaksis</h2>
      <pre><code>// O&apos;zgaruvchi e&apos;lon qilish
let x = 5;
const y = 10;
var z = 15;

// Funksiya
function salom(ism) {
    return "Salom, " + ism;
}

// Console ga chiqarish
console.log(salom("Dunyo"));</code></pre>
    `,
	},
	variables: {
		title: "O'zgaruvchilar",
		content: `
      <h1>O&apos;zgaruvchilar</h1>
      <p>JavaScriptda 3 xil o&apos;zgaruvchi e&apos;lon qilish usuli mavjud:</p>
      
      <h2>var, let, const</h2>
      <table>
        <thead>
          <tr>
            <th>Kalit so&apos;z</th>
            <th>Scope</th>
            <th>Qayta tayinlash</th>
            <th>Misol</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>var</code></td>
            <td>Function scope</td>
            <td>Mumkin</td>
            <td><code>var x = 5;</code></td>
          </tr>
          <tr>
            <td><code>let</code></td>
            <td>Block scope</td>
            <td>Mumkin</td>
            <td><code>let y = 10;</code></td>
          </tr>
          <tr>
            <td><code>const</code></td>
            <td>Block scope</td>
            <td>Mumkin emas</td>
            <td><code>const z = 15;</code></td>
          </tr>
        </tbody>
      </table>
      
      <h2>Maqbul o&apos;zgaruvchi nomlari</h2>
      <pre><code>// Yaxshi nomlar
let userName = "John";
let itemCount = 10;
let isActive = true;

// Yomon nomlar
let a = 5; // Ma&apos;nosiz
let x1 = 10; // Noaniq</code></pre>
    `,
	},
	functions: {
		title: 'Funksiyalar',
		content: `
      <h1>Funksiyalar</h1>
      <p>Funksiyalar - ma&apos;lum bir vazifani bajaradigan kod bloklari.</p>
      
      <h2>Funksiya turlari</h2>
      
      <h3>1. Function Declaration</h3>
      <pre><code>function kvadrat(son) {
    return son * son;
}

console.log(kvadrat(5)); // 25</code></pre>
      
      <h3>2. Function Expression</h3>
      <pre><code>const kvadrat = function(son) {
    return son * son;
};</code></pre>
      
      <h3>3. Arrow Function (ES6)</h3>
      <pre><code>const kvadrat = (son) => {
    return son * son;
};

// Qisqartirilgan versiya
const kvadrat = son => son * son;</code></pre>
      
      <h2>Callback funksiyalar</h2>
      <pre><code>function hisobla(a, b, amal) {
    return amal(a, b);
}

const qoshish = (x, y) => x + y;
console.log(hisobla(5, 3, qoshish)); // 8</code></pre>
    `,
	},
	dom: {
		title: 'DOM Manipulyatsiya',
		content: `
      <h1>DOM Manipulyatsiya</h1>
      <p>DOM (Document Object Model) - HTML dokumentining daraxt strukturasidagi ko&apos;rinishi.</p>
      
      <h2>Elementlarni tanlash</h2>
      <pre><code>// ID bo&apos;yicha
const element = document.getElementById('myId');

// Class bo&apos;yicha
const elements = document.getElementsByClassName('myClass');

// Selector bo&apos;yicha
const element = document.querySelector('.myClass');
const elements = document.querySelectorAll('div');</code></pre>
      
      <h2>Elementlarni o&apos;zgartirish</h2>
      <pre><code>// Kontentni o&apos;zgartirish
element.innerHTML = 'Yangi matn';
element.textContent = 'Faql matn';

// Atribut qo&apos;shish/o&apos;zgartirish
element.setAttribute('class', 'yangi-class');
element.classList.add('active');
element.classList.remove('inactive');

// Style o&apos;zgartirish
element.style.color = 'red';
element.style.backgroundColor = '#f0f0f0';</code></pre>
      
      <h2>Yangi element yaratish</h2>
      <pre><code>// Yangi element yaratish
const yangiDiv = document.createElement('div');
yangiDiv.textContent = 'Yangi div';

// DOM ga qo&apos;shish
document.body.appendChild(yangiDiv);</code></pre>
    `,
	},
	events: {
		title: 'Eventlar',
		content: `
      <h1>Eventlar (Voqealar)</h1>
      <p>Eventlar - foydalanuvchi harakatlari yoki brauzerda sodir bo&apos;ladigan hodisalar.</p>
      
      <h2>Event qo&apos;shish usullari</h2>
      
      <h3>1. Inline event handler</h3>
      <pre><code>&lt;button onclick="handleClick()"&gt;Bosish&lt;/button&gt;</code></pre>
      
      <h3>2. addEventListener</h3>
      <pre><code>const button = document.querySelector('button');
button.addEventListener('click', function() {
    console.log('Tugma bosildi!');
});</code></pre>
      
      <h2>Muhim event turlari</h2>
      <ul>
        <li><strong>click</strong> - element bosilganda</li>
        <li><strong>mouseover/mouseout</strong> - sichqoncha element ustiga kelganda/chiqganda</li>
        <li><strong>keydown/keyup</strong> - klavitura tugmasi bosilganda/qo&apos;yilganda</li>
        <li><strong>submit</strong> - forma yuborilganda</li>
        <li><strong>change</strong> - input qiymati o&apos;zgarganda</li>
        <li><strong>load</strong> - sahifa yuklanganda</li>
      </ul>
      
      <h2>Event object</h2>
      <pre><code>button.addEventListener('click', function(event) {
    console.log(event.target); // Event sodir bo&apos;lgan element
    console.log(event.type);   // Event turi
    event.preventDefault();    // Default harakatni to&apos;xtatish
});</code></pre>
    `,
	},
	es6: {
		title: 'ES6+ Xususiyatlari',
		content: `
      <h1>ES6+ Yangi Xususiyatlar</h1>
      <p>ECMAScript 2015 (ES6) va undan keyingi versiyalar JavaScriptga ko&apos;plab yangi xususiyatlar qo&apos;shdi.</p>
      
      <h2>1. Let va Const</h2>
      <pre><code>// Block scope
if (true) {
    let a = 5;
    const b = 10;
    console.log(a + b); // 15
}
// console.log(a); // Error: a is not defined</code></pre>
      
      <h2>2. Arrow Functions</h2>
      <pre><code>// An&apos;anaviy funksiya
function qoshish(a, b) {
    return a + b;
}

// Arrow function
const qoshish = (a, b) => a + b;</code></pre>
      
      <h2>3. Template Literals</h2>
      <pre><code>const ism = "Ali";
const yosh = 25;

// An&apos;anaviy usul
const matn = "Mening ismim " + ism + ", men " + yosh + " yoshdaman.";

// Template literal
const matn = &grave;Mening ismim &dollar;{ism}, men &dollar;{yosh} yoshdaman.&grave;;</code></pre>
      
      <h2>4. Destructuring</h2>
      <pre><code>// Object destructuring
const odam = { ism: 'Ali', yosh: 25 };
const { ism, yosh } = odam;

// Array destructuring
const raqamlar = [1, 2, 3];
const [bir, ikki, uch] = raqamlar;</code></pre>
      
      <h2>5. Spread Operator</h2>
      <pre><code>// Arraylarni birlashtirish
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const birlashgan = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Objectlarni birlashtirish
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const birlashganObj = { ...obj1, ...obj2 };</code></pre>
      
      <h2>6. Promises va Async/Await</h2>
      <pre><code>// Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Ma&apos;lumotlar'), 1000);
    });
}

// Async/Await
async function getData() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}</code></pre>
    `,
	},
}

export const reactContent = {
	introduction: {
		title: 'React Kirish',
		content: `
      <h1>React</h1>
      <p>React - foydalanuvchi interfeyslari yaratish uchun JavaScript kutubxonasi. Facebook tomonidan yaratilgan.</p>
      
      <h2>React ning afzalliklari</h2>
      <ul>
        <li><strong>Komponent bazali:</strong> Qayta ishlatiladigan komponentlar</li>
        <li><strong>Virtual DOM:</strong> Samaradorlikni oshiradi</li>
        <li><strong>JSX:</strong> HTML ga o&apos;xshash sintaksis</li>
        <li><strong>Ekosistema:</strong> Kengaytmalar va kutubxonalar</li>
        <li><strong>Community:</strong> Katta hamjamiyat</li>
      </ul>
      
      <h2>Oddiy React komponenti</h2>
      <pre><code>import React from 'react';

function Salom(props) {
    return &lt;h1&gt;Salom, {props.ism}!&lt;/h1&gt;;
}

export default Salom;</code></pre>
      
      <h2>React loyihasini boshlash</h2>
      <pre><code>// Create React App yordamida
npx create-react-app my-app
cd my-app
npm start

// Vite yordamida (tezroq)
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev</code></pre>
    `,
	},
	components: {
		title: 'Komponentlar',
		content: `
      <h1>React Komponentlari</h1>
      <p>Komponentlar - React ilovasining building block&apos;lari. Har bir komponent mustaqil va qayta ishlatiladi.</p>
      
      <h2>Komponent turlari</h2>
      
      <h3>1. Functional Komponentlar (Zamonaviy)</h3>
      <pre><code>function UserCard({ name, email }) {
    return (
        &lt;div className="user-card"&gt;
            &lt;h3&gt;{name}&lt;/h3&gt;
            &lt;p&gt;{email}&lt;/p&gt;
        &lt;/div&gt;
    );
}

export default UserCard;</code></pre>
      
      <h3>2. Class Komponentlar (Eski usul)</h3>
      <pre><code>class UserCard extends React.Component {
    render() {
        return (
            &lt;div className="user-card"&gt;
                &lt;h3&gt;{this.props.name}&lt;/h3&gt;
                &lt;p&gt;{this.props.email}&lt;/p&gt;
            &lt;/div&gt;
        );
    }
}</code></pre>
      
      <h2>Komponentlarni chaqirish</h2>
      <pre><code>function App() {
    return (
        &lt;div&gt;
            &lt;UserCard name="Ali" email="ali@example.com" /&gt;
            &lt;UserCard name="Vali" email="vali@example.com" /&gt;
        &lt;/div&gt;
    );
}</code></pre>
      
      <h2>Conditional Rendering</h2>
      <pre><code>function Greeting({ isLoggedIn, username }) {
    return (
        &lt;div&gt;
            {isLoggedIn ? (
                &lt;h1&gt;Xush kelibsiz, {username}!&lt;/h1&gt;
            ) : (
                &lt;h1&gt;Iltimos, tizimga kiring&lt;/h1&gt;
            )}
        &lt;/div&gt;
    );
}</code></pre>
    `,
	},
	hooks: {
		title: "Hook'lar",
		content: `
      <h1>React Hook&apos;lari</h1>
      <p>Hook&apos;lar - functional komponentlarda state va lifecycle xususiyatlaridan foydalanish imkonini beradi.</p>
      
      <h2>useState Hook</h2>
      <pre><code>import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        &lt;div&gt;
            &lt;p&gt;Sanoq: {count}&lt;/p&gt;
            &lt;button onClick={() => setCount(count + 1)}&gt;
                Ortirish
            &lt;/button&gt;
        &lt;/div&gt;
    );
}</code></pre>
      
      <h2>useEffect Hook</h2>
      <pre><code>import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        // API dan ma&apos;lumot olish
        fetch(&grave;/api/users/&dollar;{userId}&grave;)
            .then(response => response.json())
            .then(data => setUser(data));
    }, [userId]); // Faqat userId o&apos;zgarganda ishlaydi
    
    if (!user) return &lt;div&gt;Yuklanmoqda...&lt;/div&gt;;
    
    return &lt;div&gt;{user.name}&lt;/div&gt;;
}</code></pre>
      
      <h2>useContext Hook</h2>
      <pre><code>import { createContext, useContext } from 'react';

const ThemeContext = createContext();

function App() {
    return (
        &lt;ThemeContext.Provider value="dark"&gt;
            &lt;Toolbar /&gt;
        &lt;/ThemeContext.Provider&gt;
    );
}

function Toolbar() {
    const theme = useContext(ThemeContext);
    return &lt;div className={theme}&gt;Mavzu: {theme}&lt;/div&gt;;
}</code></pre>
      
      <h2>Boshqa muhim Hook&apos;lar</h2>
      <ul>
        <li><strong>useReducer:</strong> Murakkab state boshqaruvi</li>
        <li><strong>useMemo:</strong> Qimmat hisob-kitoblarni keshlash</li>
        <li><strong>useCallback:</strong> Funksiyalarni keshlash</li>
        <li><strong>useRef:</strong> DOM elementlariga reference</li>
        <li><strong>useCustom:</strong> O&apos;zingizning hook&apos;laringiz</li>
      </ul>
    `,
	},
	state: {
		title: 'State Boshqaruvi',
		content: `
      <h1>State Boshqaruvi</h1>
      <p>State - komponentning vaqt o&apos;tishi bilan o&apos;zgarishi mumkin bo&apos;lgan ma&apos;lumotlari.</p>
      
      <h2>State vs Props</h2>
      <table>
        <thead>
          <tr>
            <th>State</th>
            <th>Props</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Komponent ichida o&apos;zgartiriladi</td>
            <td>Komponent tashqarisidan beriladi</td>
          </tr>
          <tr>
            <td>O&apos;zgarishi mumkin</td>
            <td>Faql o&apos;qish mumkin (immutable)</td>
          </tr>
          <tr>
            <td>useState yoki this.state</td>
            <td>Parametr sifatida</td>
          </tr>
        </tbody>
      </table>
      
      <h2>State yangilash qoidalari</h2>
      <pre><code>// ✅ TO&apos;G&apos;RI
setCount(prevCount => prevCount + 1);

// ❌ NOTO&apos;G&apos;RI
count = count + 1;

// Object state yangilash
setUser(prevUser => ({
    ...prevUser,
    age: 25
}));

// Array state yangilash
setItems(prevItems => [...prevItems, newItem]);</code></pre>
      
      <h2>Lifting State Up</h2>
      <pre><code>function ParentComponent() {
    const [sharedState, setSharedState] = useState('');
    
    return (
        &lt;div&gt;
            &lt;ChildA value={sharedState} onChange={setSharedState} /&gt;
            &lt;ChildB value={sharedState} /&gt;
        &lt;/div&gt;
    );
}

function ChildA({ value, onChange }) {
    return &lt;input value={value} onChange={e => onChange(e.target.value)} /&gt;;
}

function ChildB({ value }) {
    return &lt;div&gt;Qiymat: {value}&lt;/div&gt;;
}</code></pre>
    `,
	},
	props: {
		title: 'Props',
		content: `
      <h1>Props (Properties)</h1>
      <p>Props - komponentlarga ma&apos;lumot o&apos;tkazish uchun ishlatiladi. Ular faql o&apos;qish mumkin (read-only).</p>
      
      <h2>Props berish</h2>
      <pre><code>function App() {
    return (
        &lt;div&gt;
            &lt;UserCard 
                name="Ali" 
                age={25} 
                isOnline={true}
                onLogin={() => console.log('Login')}
            /&gt;
        &lt;/div&gt;
    );
}</code></pre>
      
      <h2>Props qabul qilish</h2>
      <pre><code>// 1-usul: To&apos;g&apos;ridan-to&apos;g&apos;ri
function UserCard(props) {
    return (
        &lt;div&gt;
            &lt;h3&gt;{props.name}&lt;/h3&gt;
            &lt;p&gt;Yosh: {props.age}&lt;/p&gt;
        &lt;/div&gt;
    );
}

// 2-usul: Destructuring
function UserCard({ name, age, isOnline, onLogin }) {
    return (
        &lt;div&gt;
            &lt;h3&gt;{name}&lt;/h3&gt;
            &lt;p&gt;Yosh: {age}&lt;/p&gt;
            &lt;p&gt;Status: {isOnline ? 'Online' : 'Offline'}&lt;/p&gt;
            &lt;button onClick={onLogin}&gt;Kirish&lt;/button&gt;
        &lt;/div&gt;
    );
}</code></pre>
      
      <h2>Default Props</h2>
      <pre><code>function UserCard({ name, age = 18, isOnline = false }) {
    return (
        &lt;div&gt;
            &lt;h3&gt;{name}&lt;/h3&gt;
            &lt;p&gt;Yosh: {age}&lt;/p&gt;
            &lt;p&gt;Status: {isOnline ? 'Online' : 'Offline'}&lt;/p&gt;
        &lt;/div&gt;
    );
}

// Eski usul
UserCard.defaultProps = {
    age: 18,
    isOnline: false
};</code></pre>
      
      <h2>Children Props</h2>
      <pre><code>function Card({ children, title }) {
    return (
        &lt;div className="card"&gt;
            {title && &lt;h2&gt;{title}&lt;/h2&gt;}
            &lt;div className="card-content"&gt;
                {children}
            &lt;/div&gt;
        &lt;/div&gt;
    );
}

// Foydalanish
function App() {
    return (
        &lt;Card title="Mening kardim"&gt;
            &lt;p&gt;Bu kardning kontenti&lt;/p&gt;
            &lt;button&gt;Tugma&lt;/button&gt;
        &lt;/Card&gt;
    );
}</code></pre>
    `,
	},
	lifecycle: {
		title: 'Lifecycle',
		content: `
      <h1>Komponent Lifecycle</h1>
      <p>Lifecycle - komponentning yaratilishidan yo&apos;qolishigacha bo&apos;lgan jarayon.</p>
      
      <h2>Class Komponentlarda Lifecycle</h2>
      <pre><code>class Example extends React.Component {
    componentDidMount() {
        // Komponent DOM ga qo&apos;shilganda
        console.log('Komponent mount bo&apos;ldi');
    }
    
    componentDidUpdate(prevProps, prevState) {
        // Komponent yangilanganda
        if (this.props.value !== prevProps.value) {
            console.log('Props o&apos;zgardi');
        }
    }
    
    componentWillUnmount() {
        // Komponent yo&apos;qolishidan oldin
        console.log('Komponent unmount bo&apos;ladi');
    }
    
    render() {
        return &lt;div&gt;Misol&lt;/div&gt;;
    }
}</code></pre>
      
      <h2>Functional Komponentlarda Lifecycle (useEffect)</h2>
      <pre><code>import { useEffect } from 'react';

function Example() {
    // componentDidMount + componentDidUpdate
    useEffect(() => {
        console.log('Komponent yangilandi');
    });
    
    // Faqat componentDidMount
    useEffect(() => {
        console.log('Komponent mount bo&apos;ldi');
    }, []);
    
    // componentDidUpdate (faqat count o&apos;zgarganda)
    useEffect(() => {
        console.log('Count o&apos;zgardi');
    }, [count]);
    
    // componentWillUnmount
    useEffect(() => {
        return () => {
            console.log('Komponent unmount bo&apos;ladi');
        };
    }, []);
    
    return &lt;div&gt;Misol&lt;/div&gt;;
}</code></pre>
      
      <h2>Lifecycle bosqichlari</h2>
      <ol>
        <li><strong>Mounting:</strong> Komponent DOM ga qo&apos;shiladi</li>
        <li><strong>Updating:</strong> Komponent yangilanadi</li>
        <li><strong>Unmounting:</strong> Komponent DOM dan olib tashlanadi</li>
      </ol>
      
      <h2>useEffect to&apos;liq misol</h2>
      <pre><code>function Timer() {
    const [seconds, setSeconds] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);
        
        // Tozalash funksiyasi
        return () => clearInterval(interval);
    }, []);
    
    return &lt;div&gt;Vaqt: {seconds} soniya&lt;/div&gt;;
}</code></pre>
    `,
	},
}
