//Pannel
AFRAME.registerComponent('pannel', {
  schema: {
    width: {default: 1},
    height: {default: 0.6},
    color: {default: 'white'},
    textColor: {default: 'black'},
    textValue: {default: 'MADE OF BLOOD & GOLD {{dynamicText}}'},
    dynamicText: {type: 'string', default: 'II'}, // Placeholder for variable text
    textAlign: {default: 'center'},
    textWidth: {default: 0.9},
    font: {default: 'https://cdn.aframe.io/fonts/mozillavr.fnt'},
    class:{default: 'clickable'}
  },
  init: function() {
    this.el.classList.add(this.data.class);
    this.updateText();
  },
  update: function() {
    this.updateText();
  },
  updateText: function() {
    // Replace the placeholder with the dynamic text
    var textWithDynamicPart = this.data.textValue.replace('{{dynamicText}}', this.data.dynamicText);

    this.el.setAttribute('geometry', {
      primitive: 'plane',
      width: this.data.width,
      height: this.data.height
    });
    this.el.setAttribute('material', {
      color: this.data.color
    });
    this.el.setAttribute('text', {
      width: this.data.textWidth,
      height: this.data.textHeight,
      value: textWithDynamicPart,
      color: this.data.textColor,
      align: this.data.textAlign,
      font: this.data.font
    });
  }
});

//Redirect
AFRAME.registerComponent('clickable-redirect', {
    init: function() {
        this.el.addEventListener('click', () => {
            const url = this.el.getAttribute('data-url');
            if (url) {
                window.open(url, '_blank');
            }
        });
    }
});


//Video Loading
  window.onload = function() {
    document.querySelectorAll('video').forEach(video => {
      video.play().catch(error => console.error('Error attempting to play video:', error));
    });
  };

  // Intersection Observer for videos
  let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.play().catch(error => console.error('Error attempting to play video:', error));
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('video').forEach(video => {
    observer.observe(video);
  });

  window.onload = function() {
    const videoElements = document.querySelectorAll('.video-element');
  
    videoElements.forEach(video => {
      const canAutoplay = video.canPlayType('video/webm; codecs="vp8, vorbis"') !== '';
  
      if (canAutoplay) {
        video.play().catch(error => console.error('Error attempting to play video:', error));
      }
    });
  };