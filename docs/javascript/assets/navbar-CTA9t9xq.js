const g=`<nav class="challenge-navbar">
  <div class="left">
    <a href="#" class="back"> &lt; </a>
    <a href="#" class="logo">
      <img src="" alt="logo" />
    </a>
  </div>

  <h1 class="title"></h1>

  <div class="right">
    <div class="responsive_nav">
      <div class="hamburger">
        <input type="checkbox" />
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="cross mobile">&#x2715;</div>

        <section class="menu">
          <a href="#" target="_blank" rel="noreferrer" class="source-code" title="Source Code">
            <img src="" alt="source code" />
            <span class="mobile">Source code</span>
          </a>
          <a href="#" target="_blank" rel="noreferrer" class="youtube" title="Youtube">
            <img src="" alt="youtube" />
            <span class="mobile">Youtube</span>
          </a>
          <a
            href="https://github.com/sadanandpai/frontend-mini-challenges/"
            target="blank"
            class="github"
            title="Github Repo"
          >
            <img src="" alt="github repo" />
            <span class="mobile">Github Repo</span>
          </a>
        </section>
      </div>
    </div>
  </div>
</nav>
`,y="/frontend-mini-challenges/javascript/assets/logo-r_4QCHBg.png",v="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='lucide%20lucide-code-xml'%3e%3cpath%20d='m18%2016%204-4-4-4'/%3e%3cpath%20d='m6%208-4%204%204%204'/%3e%3cpath%20d='m14.5%204-5%2016'/%3e%3c/svg%3e",m="/frontend-mini-challenges/javascript/assets/github-CjMMDlDK.svg",k="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20height='800px'%20width='800px'%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20461.001%20461.001'%20xml:space='preserve'%3e%3cg%3e%3cpath%20style='fill:%23F61C0D;'%20d='M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728%20c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137%20C461.001,110.259,418.135,67.393,365.257,67.393z%20M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607%20c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z'/%3e%3c/g%3e%3c/svg%3e";class h extends HTMLElement{updateYoutubeLink(){const l=this.getAttribute("youtubeLink"),a=this.querySelector(".youtube");a&&(l?(a.setAttribute("href",l),this.querySelector(".youtube img").setAttribute("src",k)):a.remove())}updateSourceCodeLink(){const l=this.getAttribute("sourceCodeLink"),a=this.querySelector(".source-code");a&&(l?(a.setAttribute("href",l),this.querySelector(".source-code img").setAttribute("src",v)):a.remove())}connectedCallback(){this.innerHTML=g,this.querySelector(".back").setAttribute("href",this.getAttribute("backURL")),this.querySelector(".logo").setAttribute("href",this.getAttribute("homeURL")),this.querySelector(".logo img").setAttribute("src",y),this.querySelector(".title").textContent=this.getAttribute("titleText")??"",this.updateSourceCodeLink(),this.updateYoutubeLink(),this.querySelector(".github img").setAttribute("src",m)}}window.customElements.define("nav-bar",h);var e=(i=>(i.Easy="easy",i.Medium="medium",i.Hard="hard",i))(e||{}),t=(i=>(i.interview="interview",i.all="all",i))(t||{});const d=[e.Easy,e.Medium,e.Hard];function n(i){return new Map([...i.entries()].sort((l,a)=>{const p=d.indexOf(l[1].difficulty),f=d.indexOf(a[1].difficulty);return p-f}))}const w=new Map([["shapes",{title:"Shapes",link:"shapes/",difficulty:e.Easy,developer:"sadanandpai",tags:[]}],["loaders",{title:"Loaders",link:"loaders/",difficulty:e.Easy,developer:"sadanandpai",tags:[],isNew:!0}],["dialog",{title:"Dialog",link:"dialog/",difficulty:e.Easy,developer:"sahankatta",youtube:"https://youtu.be/aIzyEDi6zgU",tags:[t.interview]}],["dynamic-tooltip",{title:"Dynamic Tooltip",link:"dynamic-tooltip/",difficulty:e.Easy,developer:"officialbidisha",tags:[t.interview],isNew:!0}],["light-dark-mode",{title:"Light & Dark mode",link:"light-dark-mode/",difficulty:e.Easy,developer:"sadanandpai",youtube:"https://youtu.be/hxcGGhjYNFE",tags:[]}],["skeleton-loader",{title:"Skeleton Loader",link:"skeleton-loader/",difficulty:e.Easy,developer:"sahankatta",youtube:"https://youtu.be/FEtTRjq1P6I",tags:[]}],["accordion",{title:"Accordion",link:"accordion/",difficulty:e.Easy,developer:"rashidtvmr",youtube:"https://youtu.be/03KFXudVaoo",tags:[t.interview]}],["navigation-bar",{title:"Navigation Bar",link:"navigation-bar/",difficulty:e.Easy,developer:"christian-lee1398",youtube:"https://youtu.be/urA5ogzG0L0",tags:[]}],["footer",{title:"Footer",link:"footer/",difficulty:e.Easy,developer:"AbhineshJha",youtube:"https://youtu.be/FRRlFLfdvBE?si=HWn88BwJGTJvEBUD",tags:[]}],["blobmaker",{title:"Blob Maker",link:"blobmaker/",difficulty:e.Easy,developer:"AbhineshJha",tags:[]}],["star-rating-display",{title:"Star Rating Display",link:"star-rating-display/",difficulty:e.Medium,developer:"sadanandpai",tags:[t.interview]}],["gradient-generator",{title:"Gradient Generator",link:"gradient-generator/",difficulty:e.Medium,developer:"Sukomal07",tags:[],isNew:!0}]]);n(w);const b=new Map([["counter",{title:"Counter",link:"counter/",difficulty:e.Easy,developer:"sadanandpai",youtube:"https://youtu.be/9OIeUtXX3SA",tags:[t.interview]}],["color-me",{title:"Color Me",link:"color-me/",difficulty:e.Easy,developer:"X0rD3v1L",tags:[]}],["bmi-calculator",{title:"BMI Calculator",link:"bmi-calculator/",difficulty:e.Easy,developer:"itsayopapi",tags:[]}],["dice-game",{title:"Dice Game",link:"dice-game/",difficulty:e.Easy,developer:"shivam200446",tags:[],isNew:!0}],["roll-dice",{title:"Roll dice",link:"roll-dice/",difficulty:e.Easy,developer:"babandakale",tags:[]}],["guess-the-number",{title:"Guess the number",link:"guess-the-number/",difficulty:e.Easy,developer:"sadanandpai",youtube:"https://youtu.be/L1Da3GWEGpY",tags:[t.interview]}],["string-transformers",{title:"String transformers",link:"string-transformers/",difficulty:e.Easy,developer:"sadanandpai",youtube:"https://youtu.be/crCZEJ6Lmgc",tags:[t.interview]}],["file-uploader",{title:"File Uploader",link:"file-uploader/",difficulty:e.Easy,developer:"avtech",tags:[],isNew:!0}],["telephone-formatter",{title:"Telephone formatter",link:"telephone-formatter/",difficulty:e.Easy,developer:"sadanandpai",youtube:"https://youtu.be/E85ldVqAGjw",tags:[t.interview]}],["music-kit",{title:"Music Kit",link:"music-kit/",difficulty:e.Easy,developer:"shivam200446",tags:[]}],["currency-converter",{title:"Currency Converter",link:"currency-converter/",difficulty:e.Easy,developer:"pranav514",tags:[],isNew:!0}],["rock-paper-scissor",{title:"Rock Paper Scissor",link:"rock-paper-scissor/",difficulty:e.Easy,developer:"AckermanLevi1",tags:[],isNew:!0}],["story-generator",{title:"Story Generator",link:"story-generator/",difficulty:e.Easy,developer:"hritik",tags:[]}],["multi-typing",{title:"Multi Typing",link:"multi-typing/",difficulty:e.Easy,developer:"noorulaink00",youtube:"https://youtu.be/YCDeOT7DRnI",tags:[]}],["bill-spilt",{title:"Bill Split",link:"bill-spilt/",difficulty:e.Easy,developer:"Sukomal07",youtube:"https://youtu.be/4H2DyrSJeYc",tags:[]}],["simon-game",{title:"Simon game",link:"simon-game/",difficulty:e.Easy,developer:"VishakhaSainani",tags:[],isNew:!0}],["fitness-tracker",{title:"Fitness Tracker",link:"fitness-tracker/",difficulty:e.Easy,developer:"CrypticRevenger",tags:[]}],["atm-simulator",{title:"ATM Simulator",link:"atm-simulator/",difficulty:e.Easy,developer:"Bratajit-03",tags:[],isNew:!0}],["finance-tracker",{title:"Finance Tracker",link:"finance-tracker/",difficulty:e.Medium,developer:"sujitmahapatra",tags:[]}],["meme-generator",{title:"Meme Generator",link:"meme-generator/",difficulty:e.Medium,developer:"noorulaink00",youtube:"https://youtu.be/LHo9Hi47MTo",tags:[]}],["weather-app",{title:"Weather App",link:"weather-app/",difficulty:e.Medium,developer:"shruti-sen2004",tags:[t.interview],isNew:!0}],["toast-popup",{title:"Toast Popup",link:"toast-popup/",difficulty:e.Medium,developer:"sadanandpai",youtube:"https://youtu.be/-p3N5bJXEK8",tags:[t.interview]}],["column-table",{title:"Column Table",link:"column-table/",difficulty:e.Medium,developer:"sadanandpai",tags:[t.interview]}],["password-strength",{title:"Password Strength",link:"password-strength/",difficulty:e.Medium,developer:"sadanandpai",tags:[t.interview]}],["star-rating",{title:"Star Rating",link:"star-rating/",difficulty:e.Medium,developer:"sadanandpai",tags:[t.interview]}],["pixel-art",{title:"Pixel Art",link:"pixel-art/",difficulty:e.Medium,developer:"sadanandpai",tags:[t.interview]}],["word-counter",{title:"Word Counter (online)",link:"word-counter/",difficulty:e.Medium,developer:"AckermanLevi1",tags:[]}],["color-spotter",{title:"Color Spotter",link:"color-spotter/",difficulty:e.Medium,developer:"sadanandpai",tags:[t.interview]}],["todo-list",{title:"Todo List",link:"todo-list/",difficulty:e.Medium,developer:"sadanandpai",tags:[t.interview]}],["transfer-list",{title:"Transfer List",link:"transfer-list/",difficulty:e.Medium,developer:"sadanandpai",tags:[t.interview]}],["lift-simulation",{title:"Lift Simulation",link:"lift-simulation/",difficulty:e.Medium,developer:"gauravsinhaweb",tags:[],isNew:!0}],["tic-tac-toe",{title:"Tic-Tac-Toe",link:"tic-tac-toe/",difficulty:e.Medium,developer:"sadanandpai",tags:[t.interview]}],["chess-board",{title:"Chess board",link:"chess-board/",difficulty:e.Medium,developer:"sadanandpai",tags:[t.interview]}],["chips-input",{title:"Chips Input",link:"chips-input/",difficulty:e.Medium,developer:"sadanandpai",tags:[t.interview]}],["infinite-scroll",{title:"Infinite Scroll",link:"infinite-scroll/",difficulty:e.Medium,developer:"srijanB7",tags:[t.interview]}],["password-generator",{title:"Password Generator",link:"password-generator/",difficulty:e.Medium,developer:"sadanandpai",tags:[]}],["analog-clock",{title:"Analog Clock",link:"analog-clock/",difficulty:e.Medium,developer:"sadanandpai",tags:[]}],["drag-and-drop-puzzle",{title:"Drag and Drop Puzzle",link:"drag-and-drop-puzzle/",difficulty:e.Medium,developer:"noorulaink00",tags:[],isNew:!0}],["basic-calculator",{title:"Basic calculator",link:"basic-calculator/",difficulty:e.Medium,developer:"sadanandpai",tags:[t.interview]}],["match-pair",{title:"Match Pair",link:"match-pair/",difficulty:e.Medium,developer:"sadanandpai",tags:[t.interview]}],["typing-speed-test",{title:"Typing Speed Test",link:"typing-speed-test/",difficulty:e.Medium,developer:"sadanandpai",tags:[]}],["count-down-timer",{title:"Countdown Timer",link:"count-down-timer/",difficulty:e.Medium,developer:"sadanandpai",tags:[t.interview]}],["quiz-app",{title:"Quiz App",link:"quiz-app/",difficulty:e.Medium,developer:"Kei-K23",tags:[t.interview],isNew:!0}],["sorting-visualizer",{title:"Sorting Visualizer",link:"sorting-visualizer/",difficulty:e.Medium,developer:"viditagrawal56",tags:[],isNew:!0}],["snake-game",{title:"Snake Game",link:"snake-game/",difficulty:e.Medium,developer:"Kei-K23",tags:[]}],["hangman-game",{title:"Hangman Game",link:"hangman-game/",difficulty:e.Medium,developer:"Kei-K23",tags:[],isNew:!0}],["area-selector",{title:"Area Selector",link:"area-selector/",difficulty:e.Medium,developer:"sadanandpai",tags:[t.interview]}],["25-5-clock",{title:"25-5 Clock",link:"25-5-clock/",difficulty:e.Medium,developer:"caesar003",tags:[]}],["carousel",{title:"Carousel",link:"carousel/",difficulty:e.Medium,developer:"sadanandpai",tags:[t.interview]}],["calendar",{title:"Calendar",link:"calendar/",difficulty:e.Medium,developer:"sadanandpai",tags:[]}],["progress-bar",{title:"Progress Bar",link:"progress-bar/",difficulty:e.Medium,developer:"sadanandpai",tags:[t.interview]}],["movie-info",{title:"Movie Info",link:"movie-info/",difficulty:e.Medium,developer:"AckermanLevi1",tags:[]}],["timer-quiz",{title:"Timer Quiz",link:"timer-quiz/",difficulty:e.Medium,developer:"Vivek-GuptaXCode",tags:[]}],["otp-input",{title:"OTP Input",link:"otp-input/",difficulty:e.Hard,developer:"sadanandpai",tags:[t.interview]}],["paginator",{title:"Paginator",link:"paginator/",difficulty:e.Hard,developer:"sadanandpai",tags:[]}],["connect-four",{title:"Connect Four",link:"connect-four/",difficulty:e.Hard,developer:"sadanandpai",tags:[]}],["nested-comments",{title:"Nested Comments",link:"nested-comments/",difficulty:e.Hard,developer:"sadanandpai",tags:[t.interview],isNew:!0}],["json-creator",{title:"JSON Creator",link:"json-creator/",difficulty:e.Hard,developer:"sadanandpai",tags:[]}],["array-methods",{title:"Array methods",link:"array-methods/",difficulty:e.Hard,developer:"sadanandpai",tags:[]}],["type-ahead",{title:"Typeahead / Autocomplete (offline)",link:"type-ahead/",difficulty:e.Hard,developer:"sadanandpai",tags:[t.interview]}],["type-ahead-online",{title:"Typeahead / Autocomplete (online)",link:"type-ahead-online/",difficulty:e.Hard,developer:"sadanandpai",tags:[t.interview]}]]),M=n(b),E=new Map([["counter",{title:"Counter",link:"counter",difficulty:e.Easy,developer:"sadanandpai",tags:[t.interview]}],["programming-languages-multiverse",{title:"Programming Multiverse",link:"programming-languages-multiverse",difficulty:e.Easy,developer:"Sumitwarrior7",tags:[]}],["anagram-checker",{title:"Anagram Checker",link:"anagram-checker",difficulty:e.Easy,developer:"Manmit Tiwade",tags:[]}],["image-gallery",{title:"Image Gallery",link:"image-gallery",difficulty:e.Easy,developer:"Bhushan1019",tags:[t.interview]}],["accordion",{title:"Accordion",link:"accordion",developer:"NikhilJHA01",difficulty:e.Easy,tags:[t.interview]}],["background-changer",{title:"Background Changer",link:"background-changer",developer:"AdityaSuryawanshi",difficulty:e.Easy,tags:[]}],["light-dark-mode",{title:"Light Dark Mode",link:"light-dark-mode",difficulty:e.Easy,developer:"NikhilJHA01",tags:[]}],["qr-code-generator",{title:"QR generator",link:"qr-code-generator",difficulty:e.Easy,developer:"Krishnakalani111",tags:[]}],["your-sport",{title:"Your Sport",link:"your-sport",difficulty:e.Easy,developer:"Sumitwarrior7",tags:[]}],["table-colorizer",{title:"Table Colorizer",link:"table-colorizer",difficulty:e.Easy,developer:"ravi02205",tags:[]}],["Guess-the-number",{title:"Guess the number",link:"Guess-the-number",difficulty:e.Easy,developer:"deepakrajkranti",tags:[t.interview]}],["pagination",{title:"Pagination",link:"pagination",difficulty:e.Easy,developer:"Pancratzia",tags:[]}],["stack",{title:"Stack",link:"stack",difficulty:e.Easy,developer:"kumaratul60",tags:[]}],["word-count",{title:"Word Count",link:"word-count",difficulty:e.Easy,developer:"Sumitwarrior7",tags:[]}],["temperature-converter",{title:"Temperature Converter",link:"temperature-converter",difficulty:e.Easy,developer:"Sumitwarrior7",tags:[]}],["star-Rating",{title:"Star Rating",link:"star-Rating",difficulty:e.Easy,developer:"NikhilJHA01",tags:[t.interview]}],["telephone-formatter",{title:"Telephone formatter",link:"telephone-formatter",difficulty:e.Easy,developer:"arpansaha13",tags:[t.interview]}],["string-transformers",{title:"String transformers",link:"string-transformers",difficulty:e.Easy,developer:"arpansaha13",tags:[t.interview]}],["tic-tac-toe",{title:"Tic Tac Toe",link:"tic-tac-toe",difficulty:e.Easy,developer:"rashidtvmr",tags:[t.interview]}],["expense-tracker",{title:"Expense Tracker",link:"expense-tracker",difficulty:e.Easy,developer:"harsh472000",tags:[]}],["25-5-clock",{title:"25-5 Clock",link:"25-5-clock",difficulty:e.Easy,developer:"caesar003",tags:[]}],["bmi-calculator",{title:"BMI Calculator",link:"bmi-calculator",difficulty:e.Easy,developer:"ashikjhonson",tags:[]}],["stepper",{title:"Stepper",link:"stepper",difficulty:e.Easy,developer:"codechitra",tags:[t.interview],isNew:!0}],["calculator",{title:"Calculator",link:"calculator",difficulty:e.Medium,developer:"liza",tags:[t.interview]}],["color-mixer",{title:"Color Mixer",link:"color-mixer",difficulty:e.Medium,developer:"Sumitwarrior7",tags:[]}],["traffic-lights",{title:"Traffic Lights",link:"traffic-lights",difficulty:e.Medium,developer:"rishabhm05",tags:[t.interview]}],["email-templates",{title:"Email Templates",link:"email-templates",difficulty:e.Medium,developer:"sadanandpai",tags:[]}],["toast-popup",{title:"Toast Popup",link:"toast-popup",difficulty:e.Medium,developer:"deepu0",tags:[t.interview]}],["modal-popup",{title:"Modal Popup",link:"modal-popup",difficulty:e.Medium,developer:"rishabhm05",tags:[t.interview]}],["password-strength",{title:"Password Strength",link:"password-strength",difficulty:e.Medium,developer:"deepu0",tags:[t.interview]}],["timeline",{title:"Timeline",link:"timeline",difficulty:e.Medium,developer:"Vivek7038",tags:[],isNew:!0}],["column-table",{title:"Column Table",link:"column-table",difficulty:e.Medium,developer:"sadanandpai",tags:[t.interview]}],["todo-list",{title:"Todo List",link:"todo-list",difficulty:e.Medium,developer:"deepakrajkranti",tags:[t.interview]}],["emoji-picker",{title:"Emoji Picker",link:"emoji-picker",difficulty:e.Medium,developer:"jeevaramanathan",tags:[]}],["investment-calculator",{title:"Investment Calculator",link:"investment-calculator",difficulty:e.Medium,developer:"insharahAyyubi",tags:[]}],["stopwatch",{title:"Stopwatch",link:"stopwatch",difficulty:e.Medium,developer:"rashidtvmr",tags:[t.interview]}],["progressbar",{title:"Progressbar",link:"progressbar",difficulty:e.Medium,developer:"dhanu084",tags:[]}],["quiz-app",{title:"Quiz App",link:"quiz-app",difficulty:e.Medium,developer:"AbhilashMadi",tags:[t.interview]}],["chess-board",{title:"Chess Board",link:"chess-board",difficulty:e.Medium,developer:"AbhilashMadi",tags:[]}],["nested-dropdown",{title:"Nested Dropdown",link:"nested-dropdown",difficulty:e.Medium,developer:"AnkitKTrivedi",tags:[]}],["food-recipe",{title:"Food Recipe",link:"food-recipe",difficulty:e.Medium,developer:"Kei-K23",tags:[]}],["nested-comments",{title:"Nested Comments",link:"nested-comments",difficulty:e.Hard,developer:"Akshay-Omkar",tags:[t.interview],isNew:!0}],["password-generator",{title:"Password Generator",link:"password-generator",difficulty:e.Medium,developer:"Kei-K23",tags:[]}],["transfer-list",{title:"Transfer List",link:"transfer-list",difficulty:e.Medium,developer:"DeePaK-HeeRaKaRi",tags:[t.interview]}],["infinite-scrolling",{title:"Infinite Scrolling (online)",link:"infinite-scrolling",difficulty:e.Medium,developer:"ayush-dutt-sharma",tags:[t.interview]}],["match-pair",{title:"Match Pair",link:"match-pair",difficulty:e.Medium,developer:"sadanandpai",tags:[t.interview]}],["word-connect",{title:"Word Connect",link:"word-connect",difficulty:e.Hard,developer:"sadanandpai",tags:[t.interview],isNew:!0}],["otp",{title:"OTP",link:"otp",difficulty:e.Hard,developer:"rishabhm05",tags:[t.interview]}],["file-explorer",{title:"File Explorer",link:"file-explorer",difficulty:e.Hard,developer:"sadanandpai",tags:[t.interview]}],["autocomplete-offline",{title:"Typeahead / Autocomplete (offline)",link:"autocomplete-offline",difficulty:e.Hard,developer:"deepu0",tags:[t.interview]}],["autocomplete-online",{title:"Typeahead / Autocomplete (online)",link:"autocomplete-online",difficulty:e.Hard,developer:"deepu0",tags:[t.interview]}],["water-balancer",{title:"Water Balancer",link:"water-balancer",difficulty:e.Hard,developer:"sadanandpai",tags:[],isNew:!0}],["inline-options",{title:"Inline Options",link:"inline-options",difficulty:e.Easy,developer:"takshch",tags:[]}],["digital-clock",{title:"Digital Clock",link:"digital-clock",difficulty:e.Medium,developer:"Syamsai-Polavarapu",tags:[],isNew:!0}],["15puzzle",{title:"15 Puzzle",link:"15puzzle",difficulty:e.Medium,developer:"Bateusz",tags:[],isNew:!0}],["feedback-modal",{title:"Feedback Modal",link:"feedback-modal",difficulty:e.Medium,developer:"ssudipta",tags:[]}],["memory-game",{title:"Memory Game",link:"memory-game",difficulty:e.Medium,developer:"Akshat-Gupta",tags:[],isNew:!0}],["chip-input",{title:"Chips Input",link:"chip-input",difficulty:e.Medium,developer:"Akshay-Omkar",tags:[t.interview],isNew:!0}],["tabs",{title:"Tab",link:"tabs",difficulty:e.Easy,developer:"Akshay-Omkar",tags:[],isNew:!0}],["drag-drop",{title:"Drag-Drop",link:"drag-drop",difficulty:e.Medium,developer:"Akshay-Omkar",tags:[],isNew:!0}],["circles",{title:"Circles",link:"circles",difficulty:e.Medium,developer:"sadanandpai",tags:[],isNew:!0}],["analog-clock",{title:"Analog Clock",link:"analog-clock",difficulty:e.Medium,developer:"sadanandpai",tags:[],isNew:!0}],["advanced-counter",{title:"Advanced Counter",link:"advanced-counter",difficulty:e.Medium,developer:"sadanandpai",tags:[t.interview]}],["nested-checkbox",{title:"Nested Checkbox",link:"nested-checkbox",difficulty:e.Hard,developer:"SujithGunasekaran",tags:[t.interview]}]]);n(E);const S=new Map([["counter",{title:"Counter",link:"/counter",difficulty:e.Easy,developer:"arpansaha13",tags:[t.interview]}],["accordion",{title:"Accordion",link:"/accordion",difficulty:e.Easy,developer:"arpansaha13",tags:[t.interview]}],["light-dark-mode",{title:"Light Dark Mode",link:"/light-dark-mode",difficulty:e.Easy,developer:"arpansaha13",tags:[]}],["table-colorizer",{title:"Table Colorizer",link:"/table-colorizer",difficulty:e.Easy,developer:"arpansaha13",tags:[]}],["guess-the-number",{title:"Guess the number",link:"/guess-the-number",difficulty:e.Easy,developer:"arpansaha13",tags:[t.interview]}],["pagination",{title:"Pagination",link:"/pagination",difficulty:e.Easy,developer:"arpansaha13",tags:[]}],["stack",{title:"Stack",link:"/stack",difficulty:e.Easy,developer:"jaydadhaniya",tags:[]}],["telephone-formatter",{title:"Telephone formatter",link:"/telephone-formatter",difficulty:e.Easy,developer:"arpansaha13",tags:[t.interview]}],["temprature-converter",{title:"Temprature Converter",link:"/temprature-converter",difficulty:e.Easy,developer:"bhumikkalola",tags:[]}],["tic-tac-toe",{title:"Tic Tac Toe",link:"/tic-tac-toe",difficulty:e.Medium,developer:"sadanandpai",tags:[t.interview]}],["toast-popup",{title:"Toast Popup",link:"/toast-popup",difficulty:e.Medium,developer:"arpansaha13",tags:[t.interview]}],["password-strength",{title:"Password Strength",link:"/password-strength",difficulty:e.Medium,developer:"jaydadhaniya",tags:[t.interview]}],["password-generator",{title:"Password Generator",link:"/password-generator",difficulty:e.Medium,developer:"bhumikkalola",tags:[]}],["stopwatch",{title:"Stopwatch",link:"/stopwatch",difficulty:e.Medium,developer:"Shardik04",tags:[t.interview]}]]);n(S);const T=new Map([["counter",{title:"Counter",link:"counter",difficulty:e.Easy,developer:"sadanandpai",tags:[t.interview],isNew:!0}],["guess-number",{title:"Guess Number",link:"guess-number",difficulty:e.Easy,developer:"pankajparkar",tags:[t.interview],isNew:!0}],["todo-list",{title:"Todo list",link:"todo-list",difficulty:e.Easy,developer:"pankajparkar",tags:[t.interview],isNew:!0}],["stack",{title:"Stack",link:"stack",difficulty:e.Easy,developer:"pankajparkar",tags:[],isNew:!0}],["tic-tac-toe",{title:"Tic tac toe",link:"tic-tac-toe",difficulty:e.Easy,developer:"pankajparkar",tags:[t.interview],isNew:!0}],["word-count",{title:"Word Count",link:"word-count",difficulty:e.Easy,developer:"pankajparkar",tags:[],isNew:!0}]]);n(T);var C={VITE_REACT_APP_URL:"http://localhost:6013/",VITE_NG_APP_URL:"http://localhost:6015/",VITE_PATH:"frontend-mini-challenges",VITE_HOST_URL:"http://localhost:6010/",VITE_CSS_APP_URL:"http://localhost:6011/",VITE_JS_APP_URL:"http://localhost:6012/",VITE_VUE_APP_URL:"http://localhost:6014/",BASE_URL:"/frontend-mini-challenges/javascript/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_PATH:o,VITE_HOST_URL:u,DEV:c}=C,A=c?`${u}${o}/#/javascript/`:`/${o}/#/javascript/`,L=c?`${u}${o}/`:`/${o}/`,N=window.location.pathname.split("/challenges/")[1].slice(0,-1),s=M.get(N),P="https://github.com/sadanandpai/frontend-mini-challenges/tree/main/apps/javascript/src/challenges/",r=document.createElement("nav-bar");r.setAttribute("backURL",A);r.setAttribute("homeURL",L);r.setAttribute("titleText",s.title);r.setAttribute("sourceCodeLink",P+s.link);s.youtube&&r.setAttribute("youtubeLink",s.youtube);document.body.prepend(r);export{M as j};
