let allSection = document.querySelectorAll('.section');

allSection.forEach(oneSection => {
    oneSection.onfocus = function() {
    this.focused = true;
    };

    oneSection.onblur = function() {
    this.focused = false;
    };

    oneSection.addEventListener('click', function() {
        if (oneSection.focused) {
            oneSection.blur();
        }
    }
    );
});

// allSection.forEach(oneSection => {
//     oneSection.addEventListener('click', function() {
//         if (oneSection.focused) {
//             oneSection.blur();
//         }
//     }
//     );
// });

// testEl.onfocus = function() {
//     this.focused = true;
//   };
  
//   testEl.onblur = function() {
//     this.focused = false;
//   };
  
  
//   testEl.addEventListener("click", function () {
//       if (testEl.focused) {
//           testEl.blur();
//       }
//   });