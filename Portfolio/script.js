(function() {
    var watermark = document.createElement('div');
    watermark.style.position = 'fixed';
    watermark.style.bottom = '10px';
    watermark.style.left = '10px';
    watermark.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    watermark.style.color = 'white';
    watermark.style.padding = '10px';
    watermark.style.borderRadius = '5px';
    watermark.style.zIndex = '9999';
  
    var encryptedWatermarkText = 'PHNwYW4+T3BlbiBzb3VyY2Ugd2Vic2l0ZSBtYWRlIGJ5IDxhIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9aeWxlcmVlIiB0YXJnZXQ9Il9ibGFuayI+Wnlsci3CyDwvYT48L3NwYW4+';
  
    watermark.innerHTML = '<!-- Encrypted Watermark: ' + encryptedWatermarkText + ' -->';
    document.body.appendChild(watermark);
  
    function decrypt(encryptedText) {
      return atob(encryptedText);
    }
  
    setInterval(function() {
      if (!document.body.contains(watermark)) {
        document.body.appendChild(watermark);
      } else {
        watermark.innerHTML = '<!-- Encrypted Watermark: ' + encryptedWatermarkText + ' -->';
        watermark.innerHTML += '<div>' + decrypt(encryptedWatermarkText) + '</div>';
      }
    }, 1000);
  })();
  