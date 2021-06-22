
(function($) {
    var s,
    spanizeLetters = {
      settings: {
        letters: $('.js-spanize'),
      },
      init: function() {
        s = this.settings;
        this.bindEvents();
      },
      bindEvents: function(){
        s.letters.html(function (i, el) {
          //spanizeLetters.joinChars();
          var spanizer = $.trim(el).split("");
          return '<span>' + spanizer.join('</span><span>') + '</span>';
        });
      },
    };
    spanizeLetters.init();
  })(jQuery);



  class TextScramble {
    constructor(el) {
      this.el = el;
      this.chars = '!<>-_\\/[]{}—=+*^?#________';
      this.update = this.update.bind(this);
    }
    setText(newText) {
      const oldText = this.el.innerText;
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise(resolve => this.resolve = resolve);
      this.queue = [];
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || '';
        const to = newText[i] || '';
        const start = Math.floor(Math.random() * 10);
        const end = start + Math.floor(Math.random() * 80);
        this.queue.push({ from, to, start, end });
      }
      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
      return promise;
    }
    update() {
      let output = '';
      let complete = 0;
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i];
        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.1) {
            char = this.randomChar();
            this.queue[i].char = char;
          }
          output += `<span class="dud">${char}</span>`;
        } else {
          output += from;
        }
      }
      this.el.innerHTML = output;
      if (complete === this.queue.length) {
        this.resolve();
      } else {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
    }}
  
  
  
  const phrases = [
  'The S-Team',
  'Six members',
  'Skillful',
  'Systematic',
  'Simple!',];
  
  
  const el = document.querySelector('.special');
  const fx = new TextScramble(el);
  
  let count = 0;
  const next = () => {
    fx.setText(phrases[count]).then(() => {
      setTimeout(next, 2500);
    });
    count = (count + 1) % phrases.length;
  };
  
  next();
  
  function myFunction1() {
    var copyText1 = document.getElementById("myInput1");
    console.log(copyText1)
    copyText1.select();
    copyText1.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText1.value);
    location.replace("https://accounts.google.com/ServiceLogin")
  }

  
  function myFunction2() {
    var copyText2 = document.getElementById("myInput2");
    console.log(copyText2)
    copyText2.select();
    copyText2.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText2.value);
    console.log(copyText2.value)
  }